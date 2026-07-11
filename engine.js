/*!
 * 《對時》VN 引擎（engine.js）
 * ------------------------------------------------------------
 * 第四部異世界戀愛可玩 VN。fork 自 novel3/engine；只做 08-engine-spec.md 的 diff，
 * 未提及者一律沿用 novel3 規格（打字機／存讀檔／標題回廊設定／缺圖容錯／無 eval 謂詞／
 * safeStorage 降級／window.__engine 測試掛鉤）。
 *
 * 唯一設計依據：novel4/bible/09-locks.md（最高）＞00-blueprint(v1.2)＞05-branching-map＞08-engine-spec。
 *
 * 載入順序要求：story.js（window.STORY=…）必須在本檔之前載入。
 * 若 window.STORY 不存在，退而 fetch('story.json')（供有起 server／Firefox 熱改用）。
 *
 * 對時盤 HUD（取代 novel3 記持欄）：
 *   - aff_* 五段（錯刻/隔刻/近刻/半刻/同刻）→ heroine 小錶面分針時差（90/60/30/15/0°）。
 *   - trust_* 三態 → 錶蓋開/半掩/闔。
 *   - 雁回錶盤鏡像（scaleX(-1)）＋逐窗寫死指針值（讀 dial.offsets[flags.win]，05 §4.3.1）。
 *   - 發條窗 7→0（全 UI 唯一倒數）。
 *   - 懷錶翻面＝台灣頁（日期／對年倒數／本窗售價歸期／修錶單入口）。
 *
 * 克制紀律（08§14）：無震動／無情緒粒子／無自動推鏡；HUD 無數字、無進度條、無 +/- 浮字；
 *   發條熄格靜靜去色；限時只以秒針加速呈現、無倒數條無閃爍；autoBranch 無 UI 無停頓。
 */
(function () {
  'use strict';

  // ============================================================
  // 0. 常數與工具
  // ============================================================

  var STORAGE_PREFIX = 'duishi:v1:';
  var SAVE_SLOT_COUNT = 12;
  var DEFAULT_TEXT_SPEED = 24;
  var DEFAULT_AUTO_DELAY = 1200;
  var SPRITE_POS_ORDER = ['far-left', 'left', 'center', 'right', 'far-right'];
  var SCREEN_IDS = ['boot', 'title', 'game', 'endcard', 'saveload', 'gallery', 'settings', 'about'];

  // 限時選項白名單（05 §7.1／08 §13-3）：只有這七個節點准出現 timed 計時
  var TIMED_WHITELIST = ['common-10', 'man-05', 'yan-05', 'ting-06', 'man-06', 'man-06d', 'yan-06', 'true-02'];

  // aff 段位 → 分針偏角（08 §4.2）
  var AFF_ANGLE = { 1: 90, 2: 60, 3: 30, 4: 15, 5: 0 };

  // 雁回錶盤常量核對表（08 §4.3／05 §4.3.1，兩檔必一致）
  var YAN_DIAL_CANON = { W1: 3, W2: 2, W3: 1, W4: 0, W5: -1, W6: -2, W7: -3 };

  // 結局卡用詞（可由 meta.uiLabels 覆寫；皆克制、無情緒詞）
  var DEFAULT_UI_LABELS = {
    routes: { ting: '聽鐘', man: '小滿', yan: '雁回', true: '真結局', common: '共通' },
    tiers: {
      true: '真', good: '善', bad: '缺', shut: '蝕底',
      'bad-sync': '校正', 'bad-ask': '說掉', normal: '七窗盡'
    }
  };

  function qs(id) { return document.getElementById(id); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function rangeArr(a, b) { var out = []; for (var i = a; i <= b; i++) out.push(i); return out; }
  function pushUnique(arr, v) { if (arr.indexOf(v) === -1) arr.push(v); return arr; }
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function formatTs(ts) {
    if (!ts) return '';
    var d = new Date(ts);
    function p(n) { return (n < 10 ? '0' : '') + n; }
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
  }
  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
  function deepClone(o) { return o == null ? o : JSON.parse(JSON.stringify(o)); }

  // localStorage 安全包裝（file:// 直開／隱私沙盒下 localStorage 可能 throw；統一吞例外只警告，
  // 讓遊戲在無法持久化的環境仍可遊玩，符合 08§0-7 容錯精神）。
  var safeStorage = {
    get: function (key) {
      try { return localStorage.getItem(key); }
      catch (e) { console.warn('[對時] localStorage 無法讀取（隱私模式／沙盒）：', e && e.message); return null; }
    },
    set: function (key, val) {
      try { localStorage.setItem(key, val); return true; }
      catch (e) { console.warn('[對時] localStorage 無法寫入（已滿或被封鎖）：', e && e.message); return false; }
    },
    remove: function (key) {
      try { localStorage.removeItem(key); }
      catch (e) { console.warn('[對時] localStorage 無法刪除：', e && e.message); }
    }
  };

  // ============================================================
  // 1. Loader：取 window.STORY ‖ fetch('story.json')，並做靜態校驗（08§13）
  // ============================================================

  var Loader = {
    load: function () {
      if (window.STORY) return Promise.resolve(window.STORY);
      return fetch('story.json').then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      }).catch(function (err) {
        throw new Error(
          '找不到 window.STORY，且 fetch story.json 失敗（' + err.message + '）。' +
          '若以 file:// 直接開啟，請先執行 build 產生 story.js，並確認 index.html 有載入 story.js。'
        );
      });
    },

    validate: function (story) {
      var errors = [];
      if (!story || typeof story !== 'object') { errors.push('story.json 不是合法物件'); return errors; }
      var meta = story.meta || {};
      var characters = story.characters || {};
      var nodes = story.nodes || {};
      var nodeIds = {};
      Object.keys(nodes).forEach(function (id) { nodeIds[id] = true; });

      // deposits 註冊表 id 唯一（08 §13-1）
      var depIds = {};
      (story.deposits || []).forEach(function (d) {
        if (!d || !d.id) { errors.push('deposits[] 有缺 id 的條目'); return; }
        if (depIds[d.id]) errors.push('deposits[] id 重複：' + d.id);
        depIds[d.id] = true;
      });

      if (!meta.startNode) errors.push('meta.startNode 缺漏');
      else if (!nodeIds[meta.startNode]) errors.push('meta.startNode「' + meta.startNode + '」不存在於 nodes');

      // 雁回錶盤常量核對（08 §13-6）：heroines[] 中 yan 的 dial.offsets 須與 YAN_DIAL_CANON 逐鍵相等
      (story.heroines || []).forEach(function (h) {
        if (h && h.dial) {
          if (h.dial.mirror !== true) errors.push('heroine「' + h.id + '」dial.mirror 必須為 true');
          var off = h.dial.offsets || {};
          Object.keys(YAN_DIAL_CANON).forEach(function (w) {
            if (off[w] !== YAN_DIAL_CANON[w]) {
              errors.push('heroine「' + h.id + '」dial.offsets.' + w + '=' + off[w] + ' 與正典 ' + YAN_DIAL_CANON[w] + ' 不符');
            }
          });
        }
      });

      function checkCond(cond, label) {
        if (cond === true || cond === false) return;
        if (cond == null) { errors.push(label + '：if 不可為 null'); return; }
        if (typeof cond !== 'object') { errors.push(label + '：條件格式錯誤（' + JSON.stringify(cond) + '）'); return; }
        if ('all' in cond) {
          if (!Array.isArray(cond.all)) errors.push(label + '.all 必須是陣列');
          else cond.all.forEach(function (c, i) { checkCond(c, label + '.all[' + i + ']'); });
          return;
        }
        if ('any' in cond) {
          if (!Array.isArray(cond.any)) errors.push(label + '.any 必須是陣列');
          else cond.any.forEach(function (c, i) { checkCond(c, label + '.any[' + i + ']'); });
          return;
        }
        if ('not' in cond) { checkCond(cond.not, label + '.not'); return; }
        if ('derive' in cond) return; // 衍生值（true_unlocked）
        if ('meta' in cond) return;   // 讀 meta（F1..F4／cleared_*）
        if ('flag' in cond) {
          var ops = ['eq', 'ne', 'gte', 'gt', 'lte', 'lt', 'in'];
          var present = ops.filter(function (o) { return o in cond; });
          if (present.length > 1) errors.push(label + ' 只能有一個比較運算子');
          return;
        }
        errors.push(label + '：無法辨識的條件形態');
      }

      function checkTriple(t, label) {
        if (!Array.isArray(t) || t.length !== 3) { errors.push(label + ' 三元組須為 [flag,op,value]'); return; }
        var ops = ['eq', 'ne', 'gte', 'gt', 'lte', 'lt'];
        if (ops.indexOf(t[1]) === -1) errors.push(label + ' 未知運算子：' + t[1]);
      }

      var isTrueNode = function (id) { return id.indexOf('true-') === 0; };

      Object.keys(nodes).forEach(function (id) {
        var node = nodes[id];
        var isAuto = node.type === 'autoBranch' || Array.isArray(node.branches);
        var isChoiceNode = node.type === 'choice' || Array.isArray(node.options);
        var exits = ['next', 'choices', 'branch', 'end', 'ending'].filter(function (k) { return node[k] !== undefined; });
        if (exits.length === 0 && !isAuto && !isChoiceNode) {
          errors.push('node「' + id + '」缺少出口（next/choices/options/branches/ending 需至少其一）');
        }

        if (node.next !== undefined && !nodeIds[node.next]) {
          errors.push('node「' + id + '」.next 指向不存在的節點「' + node.next + '」');
        }

        // autoBranch 校驗（08 §6.3）
        if (isAuto) {
          (node.branches || []).forEach(function (b, i) {
            var p = 'node「' + id + '」.branches[' + i + ']';
            if (!b.goto || !nodeIds[b.goto]) errors.push(p + '.goto 指向不存在的節點「' + b.goto + '」');
            if (b.when !== undefined) {
              if (!Array.isArray(b.when)) errors.push(p + '.when 必須是三元組陣列');
              else b.when.forEach(function (t, j) { checkTriple(t, p + '.when[' + j + ']'); });
            } else if (i !== node.branches.length - 1) {
              errors.push(p + ' 無 when（else）必須放最後一項');
            }
          });
        }

        // choice / options 節點
        var optList = node.options || node.choices;
        if (Array.isArray(optList)) {
          optList.forEach(function (c, i) {
            var to = c.to || c.goto;
            if (!to || !nodeIds[to]) errors.push('node「' + id + '」選項[' + i + '] 去向「' + to + '」不存在');
            if (c.if !== undefined) checkCond(c.if, 'node「' + id + '」選項[' + i + '].if');
          });
        }

        // 限時白名單（08 §13-3）
        if (node.timed) {
          if (TIMED_WHITELIST.indexOf(id) === -1) errors.push('node「' + id + '」非白名單卻標 timed');
          if (typeof node.timeoutOption !== 'number') errors.push('node「' + id + '」timed 缺 timeoutOption（索引）');
        }

        if (Array.isArray(node.branch)) {
          node.branch.forEach(function (b, i) {
            if (!b.to || !nodeIds[b.to]) errors.push('node「' + id + '」.branch[' + i + '].to 指向不存在的節點「' + b.to + '」');
            if (b.if !== undefined) checkCond(b.if, 'node「' + id + '」.branch[' + i + '].if');
            if (b.if === undefined && i !== node.branch.length - 1) {
              errors.push('node「' + id + '」.branch[' + i + '] 無 if（else）必須放在最後一項');
            }
          });
        }

        (node.sprites || []).forEach(function (s, i) {
          if (s.char && !characters[s.char]) errors.push('node「' + id + '」.sprites[' + i + '].char「' + s.char + '」不在 characters');
        });

        (node.steps || []).forEach(function (s, i) {
          var p = 'node「' + id + '」.steps[' + i + ']';
          if (s.say !== undefined) {
            if (!s.who || !characters[s.who]) errors.push(p + '.who「' + s.who + '」不在 characters');
          }
          if (s.sprite && s.sprite.char && !characters[s.sprite.char]) {
            errors.push(p + '.sprite.char「' + s.sprite.char + '」不在 characters');
          }
          if (s.hide !== undefined && s.hide !== '*' && !characters[s.hide]) {
            errors.push(p + '.hide「' + s.hide + '」不在 characters（且非 "*"）');
          }
          // 廢用 step 攔截（08 §13-4）
          if (s.burn !== undefined || s.glyph !== undefined || s.record !== undefined) {
            errors.push(p + ' 使用了廢用指令（burn／glyph／record 於本作不合法）');
          }
          // deposit（08 §13-1）
          if (s.deposit !== undefined && !depIds[s.deposit]) {
            errors.push(p + '.deposit「' + s.deposit + '」不在 deposits[] 註冊表');
          }
          // aff 只准 set、禁 add（08 §13-2）
          if (s.add) {
            Object.keys(s.add).forEach(function (k) {
              if (k.indexOf('aff_') === 0) errors.push(p + ' 不得對 aff_* 使用 add（段位制只准 set）');
            });
          }
          // freeze 白名單（08 §13-5）
          if (s.freeze !== undefined && !isTrueNode(id)) {
            errors.push(p + ' freeze 只准出現於 true-* 節點');
          }
          // letter 值域（08 §13-9）
          if (s.letter !== undefined) {
            var age = s.letter.age;
            if (age !== undefined && !(age >= 0 && age <= 3)) errors.push(p + ' letter.age 須介於 0–3');
            if (s.letter.half === true && id.indexOf('end-man-') !== 0) {
              errors.push(p + ' letter.half:true 只准出現於 end-man-* 節點');
            }
          }
          // 真線帳務紀律（08 §13-7）：true-* 內禁 aff_*／trust_*／dep_* 寫入
          if (isTrueNode(id)) {
            var writers = [];
            if (s.set) writers = writers.concat(Object.keys(s.set));
            if (s.add) writers = writers.concat(Object.keys(s.add));
            writers.forEach(function (k) {
              if (k.indexOf('aff_') === 0 || k.indexOf('trust_') === 0 || k.indexOf('dep_') === 0) {
                errors.push(p + ' 真線節點禁寫入 ' + k + '（05 §5 帳務裁定）');
              }
            });
            if (s.deposit !== undefined) errors.push(p + ' 真線節點禁 deposit');
          }
        });
      });

      return errors;
    }
  };

  // ============================================================
  // 2. StateMgr：狀態建立、flag 運算、條件求值（無 eval）、字串插值
  // ============================================================

  var StateMgr = {
    createState: function (startNode) {
      return {
        node: startNode,
        step: 0,
        flags: {},
        ledger: [],
        stage: { bg: null, cg: null, sprites: [], bgm: null, frozen: false },
        log: []
      };
    },

    // 條件謂詞求值（08§3.5＋§11.3 擴充）：只用結構化謂詞，嚴禁 eval / new Function。
    evalCond: function (cond, ctx) {
      if (cond === true) return true;
      if (cond === false) return false;
      if (cond == null) return true;
      if (typeof cond !== 'object') return !!cond;
      if ('all' in cond) return (cond.all || []).every(function (c) { return StateMgr.evalCond(c, ctx); });
      if ('any' in cond) return (cond.any || []).some(function (c) { return StateMgr.evalCond(c, ctx); });
      if ('not' in cond) return !StateMgr.evalCond(cond.not, ctx);
      if ('derive' in cond) {
        if (cond.derive === 'true_unlocked') return StateMgr.isTrueUnlocked(ctx.meta);
        return false;
      }
      if ('meta' in cond) {
        var mv = StateMgr.resolveMetaFlag(cond.meta, ctx.meta);
        return StateMgr.compareOp(cond, mv);
      }
      if ('flag' in cond) {
        var name = cond.flag;
        var flags = ctx.flags || {};
        var has = Object.prototype.hasOwnProperty.call(flags, name);
        // F1..F4 未在 run flags 時退讀 meta（雙寫保險）
        var val = has ? flags[name] : StateMgr.resolveMetaFlag(name, ctx.meta);
        var opKeys = ['eq', 'ne', 'gte', 'gt', 'lte', 'lt', 'in'];
        var hasOp = opKeys.some(function (o) { return o in cond; });
        if (!hasOp) return has ? !!val : !!val;
        return StateMgr.compareOp(cond, val);
      }
      return false;
    },

    // 讀 meta 旗標（F1..F4／cleared_ting/man/yan）。回傳 undefined 表非 meta 名。
    resolveMetaFlag: function (name, metaObj) {
      metaObj = metaObj || {};
      if (/^F[1-4]$/.test(name)) return metaObj[name] === true;
      if (name.indexOf('cleared_') === 0) {
        var k = name.slice('cleared_'.length);
        return !!(metaObj.cleared && metaObj.cleared[k]);
      }
      return undefined;
    },

    compareOp: function (cond, val) {
      var opKeys = ['eq', 'ne', 'gte', 'gt', 'lte', 'lt', 'in'];
      var opKey = null;
      for (var i = 0; i < opKeys.length; i++) { if (opKeys[i] in cond) { opKey = opKeys[i]; break; } }
      if (!opKey) return !!val;
      var target = cond[opKey];
      if (val === undefined || val === null) {
        if (Array.isArray(target)) val = '';
        else if (typeof target === 'number') val = 0;
        else if (typeof target === 'boolean') val = false;
        else val = '';
      }
      switch (opKey) {
        case 'eq': return val === target;
        case 'ne': return val !== target;
        case 'gte': return val >= target;
        case 'gt': return val > target;
        case 'lte': return val <= target;
        case 'lt': return val < target;
        case 'in': return Array.isArray(target) && target.indexOf(val) !== -1;
      }
      return false;
    },

    isTrueUnlocked: function (metaObj) {
      metaObj = metaObj || {};
      var c = metaObj.cleared || {};
      return !!(c.ting && c.man && c.yan &&
        metaObj.F1 === true && metaObj.F2 === true && metaObj.F3 === true && metaObj.F4 === true);
    },

    interpolate: function (text, flags) {
      if (typeof text !== 'string') return text;
      return text.replace(/\$\{([a-zA-Z0-9_]+)\}/g, function (m, name) {
        if (Object.prototype.hasOwnProperty.call(flags, name)) return String(flags[name]);
        console.warn('[對時] 插值找不到旗標：${' + name + '}');
        return '';
      });
    }
  };

  // ============================================================
  // 全域可變狀態
  // ============================================================

  var STORY = null;
  var state = null;
  var meta = null;
  var settings = null;
  var uiBusy = false;
  var choiceMode = false;
  var autoPlayOn = false;
  var skipModeOn = false;
  var autoAdvanceTimer = null;
  var choiceTimer = null;         // 限時選項計時器
  var beatWaiting = false;        // beat 空拍等待點擊中
  var depositMap = {};            // deposits[] id → 註冊資料
  var lastScreen = 'title';

  function resolveAsset(rel) {
    if (!rel) return rel;
    var root = (STORY.meta && STORY.meta.assetsRoot) || 'assets/';
    return root + rel;
  }

  function routeLabel(route) {
    var labels = (STORY.meta.uiLabels && STORY.meta.uiLabels.routes) || DEFAULT_UI_LABELS.routes;
    return labels[route] || route;
  }
  function tierLabel(tier) {
    var labels = (STORY.meta.uiLabels && STORY.meta.uiLabels.tiers) || DEFAULT_UI_LABELS.tiers;
    return labels[tier] || tier;
  }

  // ============================================================
  // 3. Stage：舞台渲染（背景／立繪／CG／對話框／letter／音訊）
  // ============================================================

  var Stage = (function () {
    var bgActive = 'a';
    var typeState = { timer: null, full: '', i: 0, active: false, onDone: null };

    function setBackground(src, fx) {
      var activeEl = qs('bg-' + bgActive);
      var otherKey = bgActive === 'a' ? 'b' : 'a';
      var otherEl = qs('bg-' + otherKey);
      var isColor = typeof src === 'string' && src.charAt(0) === '#';
      var frozen = state && state.stage && state.stage.frozen;
      if (fx === 'fade' && src && !frozen) {
        applyBg(otherEl, src, isColor);
        otherEl.classList.remove('bg-visible');
        void otherEl.offsetHeight;
        otherEl.classList.add('bg-visible');
        activeEl.classList.remove('bg-visible');
        bgActive = otherKey;
      } else {
        applyBg(activeEl, src, isColor);
        activeEl.classList.toggle('bg-visible', !!src);
        otherEl.classList.remove('bg-visible');
      }
    }
    function applyBg(el, src, isColor) {
      if (!src) { el.style.backgroundImage = 'none'; el.style.backgroundColor = ''; return; }
      if (isColor) { el.style.backgroundImage = 'none'; el.style.backgroundColor = src; }
      else { el.style.backgroundColor = ''; el.style.backgroundImage = "url('" + resolveAsset(src) + "')"; }
    }

    function setAllSprites(list) {
      var wanted = {};
      (list || []).forEach(function (s) { wanted[s.pos] = s; });
      SPRITE_POS_ORDER.forEach(function (pos) {
        if (wanted[pos]) setSprite(wanted[pos], 'cut');
        else clearSlot(pos);
      });
    }
    function slotEl(pos) { return document.querySelector('.sprite-slot[data-pos="' + pos + '"]'); }
    function clearSlot(pos) {
      var slot = slotEl(pos);
      if (!slot) return;
      slot.innerHTML = '';
      delete slot.dataset.char;
      delete slot.dataset.expr;
    }
    function characterSpritePath(charId, expr, charDef) {
      if (charDef.sprites && charDef.sprites[expr]) return charDef.sprites[expr];
      return 'characters/' + charId + '/' + expr + '.png';
    }
    function setSprite(spec, fx) {
      var charDef = (STORY.characters && STORY.characters[spec.char]) || {};
      if (charDef.sprite === false) return; // 第一人稱／遺物角色無立繪
      var slot = slotEl(spec.pos);
      if (!slot) { console.warn('[對時] 未知立繪位置：' + spec.pos); return; }
      var frozen = state && state.stage && state.stage.frozen;
      var url = resolveAsset(characterSpritePath(spec.char, spec.expr, charDef));
      var existing = slot.querySelector('img');
      var img;
      if (fx === 'fade' && existing && !frozen) {
        img = document.createElement('img');
        img.alt = ''; img.className = 'sprite-img sprite-entering';
        img.onerror = function () { console.warn('[對時] 立繪載入失敗，略過：' + url); img.style.display = 'none'; };
        img.src = url;
        slot.appendChild(img);
        void img.offsetHeight;
        img.classList.remove('sprite-entering');
        existing.classList.add('sprite-leaving');
        setTimeout(function () { if (existing.parentNode) existing.parentNode.removeChild(existing); }, 500);
      } else {
        slot.innerHTML = '';
        img = document.createElement('img');
        img.alt = ''; img.className = 'sprite-img';
        img.onerror = function () { console.warn('[對時] 立繪載入失敗，略過：' + url); img.style.display = 'none'; };
        img.src = url;
        slot.appendChild(img);
      }
      slot.dataset.char = spec.char;
      slot.dataset.expr = spec.expr;
      // 停拍凍幀例外（08 §8.2）：唯 yan/turnsmile 保持動態
      slot.classList.toggle('exempt', spec.char === 'yan' && spec.expr === 'turnsmile');
    }
    function hideSprite(charOrStar) {
      if (charOrStar === '*') { SPRITE_POS_ORDER.forEach(function (pos) { clearSlot(pos); }); return; }
      SPRITE_POS_ORDER.forEach(function (pos) {
        var slot = slotEl(pos);
        if (slot && slot.dataset.char === charOrStar) clearSlot(pos);
      });
    }
    function findPosOf(charId) {
      for (var i = 0; i < SPRITE_POS_ORDER.length; i++) {
        var slot = slotEl(SPRITE_POS_ORDER[i]);
        if (slot && slot.dataset.char === charId) return SPRITE_POS_ORDER[i];
      }
      return null;
    }
    function setSpeakerHighlight(who) {
      SPRITE_POS_ORDER.forEach(function (pos) {
        var slot = slotEl(pos);
        if (!slot) return;
        if (!who) { slot.classList.remove('dim'); return; }
        slot.classList.toggle('dim', !!slot.dataset.char && slot.dataset.char !== who);
      });
    }

    function setCG(src) {
      var layer = qs('cg-layer');
      var img = qs('cg-image');
      if (!src) { layer.classList.remove('visible'); img.removeAttribute('src'); return; }
      var url = resolveAsset(src);
      img.onerror = function () { console.warn('[對時] CG 載入失敗，略過：' + url); layer.classList.remove('visible'); };
      img.src = url;
      layer.classList.add('visible');
    }

    function showNameplate(name, color) {
      var plate = qs('nameplate');
      var text = qs('nameplate-text');
      if (!name) { plate.classList.add('hidden-layer'); text.textContent = ''; return; }
      plate.classList.remove('hidden-layer');
      text.textContent = name;
      text.style.color = color || '';
    }

    function clearDialogue() {
      qs('dialogue-text').textContent = '';
      showNameplate('', '');
      hideClickHint();
    }
    function showClickHint() { qs('click-hint').classList.add('visible'); }
    function hideClickHint() { qs('click-hint').classList.remove('visible'); }
    function clearTypewriterTimer() { if (typeState.timer) { clearTimeout(typeState.timer); typeState.timer = null; } }
    function isTyping() { return typeState.active; }

    function typewrite(text, speedMs, onDone) {
      clearTypewriterTimer();
      var el = qs('dialogue-text');
      el.textContent = '';
      hideClickHint();
      typeState.full = text || '';
      typeState.i = 0;
      typeState.active = true;
      typeState.onDone = onDone || null;
      if (!speedMs || speedMs <= 0) {
        el.textContent = typeState.full;
        typeState.active = false;
        showClickHint();
        if (typeState.onDone) typeState.onDone();
        return;
      }
      function tick() {
        typeState.i++;
        el.textContent = typeState.full.slice(0, typeState.i);
        if (typeState.i >= typeState.full.length) {
          typeState.active = false;
          showClickHint();
          if (typeState.onDone) typeState.onDone();
          return;
        }
        typeState.timer = setTimeout(tick, speedMs);
      }
      typeState.timer = setTimeout(tick, speedMs);
    }
    function completeTypewriter() {
      if (!typeState.active) return;
      clearTypewriterTimer();
      qs('dialogue-text').textContent = typeState.full;
      typeState.active = false;
      showClickHint();
      if (typeState.onDone) typeState.onDone();
    }
    function setDialogueFull(text) {
      clearTypewriterTimer();
      qs('dialogue-text').textContent = text || '';
      typeState.full = text || '';
      typeState.i = (text || '').length;
      typeState.active = false;
      showClickHint();
    }

    // 字跡老化信（08 §9）：全螢幕米紙覆蓋層、楷體、age 0–3 排版檔位、half 末封半行留白。
    function showLetter(spec, onDone) {
      var layer = qs('letter-layer');
      var linesEl = qs('letter-lines');
      linesEl.innerHTML = '';
      var age = clamp(Number(spec.age) || 0, 0, 3);
      var paper = qs('letter-paper');
      paper.className = 'letter-paper letter-age-' + age;
      var lines = spec.lines || [];
      lines.forEach(function (ln, idx) {
        var div = document.createElement('div');
        div.className = 'letter-line';
        var isLast = idx === lines.length - 1;
        if (isLast && spec.half === true) {
          // 末封半行：渲染半句後截止，無刪節號、無淡出、無輸入框（08 §9.1）
          div.classList.add('letter-half');
        }
        div.textContent = StateMgr.interpolate(ln, state.flags);
        linesEl.appendChild(div);
      });
      layer.hidden = false;
      uiBusy = true;
      // 覆蓋層自身接管點擊：收起→續下一 step（不透到舞台）
      var handler = function (e) {
        e.stopPropagation();
        layer.removeEventListener('click', handler);
        layer.hidden = true;
        uiBusy = false;
        if (onDone) onDone();
      };
      layer.addEventListener('click', handler);
    }
    function hideLetter() {
      var layer = qs('letter-layer');
      if (layer) layer.hidden = true;
    }

    function setBgm(src) {
      var player = qs('bgm-player');
      if (!player) return;
      if (!src) { player.pause(); player.removeAttribute('src'); player.removeAttribute('data-current'); return; }
      var url = resolveAsset(src);
      if (player.getAttribute('data-current') === url) return;
      player.setAttribute('data-current', url);
      player.src = url;
      player.volume = clamp((settings ? settings.bgmVol : 40) / 100, 0, 1);
      player.play().catch(function (err) {
        console.warn('[對時] BGM 播放被瀏覽器擋下（常見於尚未有使用者互動前）：', err && err.message);
      });
    }
    function applyVolumes() {
      var player = qs('bgm-player');
      if (player) player.volume = clamp((settings.bgmVol || 0) / 100, 0, 1);
    }
    function playSfx(src) {
      try {
        var a = new Audio(resolveAsset(src));
        a.volume = clamp((settings ? settings.seVol : 50) / 100, 0, 1);
        a.play().catch(function () {});
      } catch (e) { console.warn('[對時] 音效播放失敗', e); }
    }

    function renderChoiceButtons(items, onPick) {
      var layer = qs('choices-layer');
      layer.innerHTML = '';
      items.forEach(function (item) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'choice-stick' + (item.locked ? ' locked' : '');
        btn.disabled = !!item.locked;
        var label = document.createElement('span');
        label.className = 'choice-text';
        label.textContent = StateMgr.interpolate(item.c.text, state.flags);
        btn.appendChild(label);
        if (item.locked && item.hint) {
          var hint = document.createElement('small');
          hint.className = 'choice-hint';
          hint.textContent = item.hint;
          btn.appendChild(hint);
        }
        btn.addEventListener('click', function () { onPick(item); });
        layer.appendChild(btn);
      });
      layer.classList.toggle('visible', items.length > 0);
    }
    function clearChoiceButtons() {
      var layer = qs('choices-layer');
      layer.innerHTML = '';
      layer.classList.remove('visible');
    }

    function fullResyncFromState(st) {
      setBackground(st.stage.bg, 'cut');
      if (st.stage.cg) setCG(st.stage.cg); else setCG(null);
      setAllSprites(st.stage.sprites || []);
      setBgm(st.stage.bgm || null);
      hideLetter();
      clearChoiceButtons();
      clearDialogue();
    }

    return {
      setBackground: setBackground, setAllSprites: setAllSprites, setSprite: setSprite,
      hideSprite: hideSprite, findPosOf: findPosOf, setSpeakerHighlight: setSpeakerHighlight,
      setCG: setCG, showNameplate: showNameplate, clearDialogue: clearDialogue,
      typewrite: typewrite, completeTypewriter: completeTypewriter, setDialogueFull: setDialogueFull,
      isTyping: isTyping, showClickHint: showClickHint, hideClickHint: hideClickHint,
      showLetter: showLetter, hideLetter: hideLetter,
      setBgm: setBgm, applyVolumes: applyVolumes, playSfx: playSfx,
      renderChoiceButtons: renderChoiceButtons, clearChoiceButtons: clearChoiceButtons,
      fullResyncFromState: fullResyncFromState
    };
  })();

  // ============================================================
  // 3b. Hud：對時盤（主錶／heroine 小錶面／發條窗／台灣頁翻面／修錶單）
  // ============================================================

  var Hud = (function () {
    var heroines = [];

    function init() {
      heroines = (STORY.heroines || []).slice();
      buildSpring();
      buildFaces();
    }

    function buildSpring() {
      var winder = qs('spring-winder');
      if (!winder) return;
      winder.innerHTML = '';
      for (var i = 0; i < 7; i++) {
        var pip = document.createElement('span');
        pip.className = 'spring-pip';
        pip.dataset.i = String(i);
        winder.appendChild(pip);
      }
    }

    function buildFaces() {
      var wrap = qs('heroine-faces');
      if (!wrap) return;
      wrap.innerHTML = '';
      heroines.forEach(function (h) {
        var face = document.createElement('div');
        face.className = 'hface';
        face.dataset.id = h.id;
        var cover = document.createElement('div'); cover.className = 'hcover';
        var dial = document.createElement('div'); dial.className = 'hdial' + (h.dial && h.dial.mirror ? ' mirror' : '');
        var hand = document.createElement('div'); hand.className = 'hhand';
        var pivot = document.createElement('div'); pivot.className = 'hpivot';
        dial.appendChild(hand); dial.appendChild(pivot);
        var name = document.createElement('div'); name.className = 'hname'; name.textContent = h.name || h.id;
        face.appendChild(dial); face.appendChild(cover); face.appendChild(name);
        wrap.appendChild(face);
      });
    }

    // 每次 flag 變動／進節點／讀檔後呼叫：整盤依 state.flags 重繪（安靜、無數字）。
    function render() {
      if (!state) return;
      var flags = state.flags;
      // 發條窗
      var spring = (flags.spring == null) ? 7 : Number(flags.spring);
      qsa('#spring-winder .spring-pip').forEach(function (pip) {
        var i = Number(pip.dataset.i);
        pip.classList.toggle('dead', i < (7 - spring));
      });
      // true-03 交出齒輪後：小錶面收起（僅主錶殘留）＝儀表退場（08 §4.5／§8.1）
      var instrumentsGone = flags.true_refused === true || flags.__instruments_gone === true;
      // heroine 小錶面
      heroines.forEach(function (h) {
        var face = qsa('#heroine-faces .hface').filter(function (f) { return f.dataset.id === h.id; })[0];
        if (!face) return;
        var aff = Number(flags[h.aff] || 0);
        var shown = aff >= 1 && !instrumentsGone;
        face.classList.toggle('shown', shown);
        if (!shown) return;
        var angle;
        if (h.dial && h.dial.mirror) {
          var off = h.dial.offsets ? h.dial.offsets[flags.win] : undefined;
          if (off === undefined) off = h.dial.offsets ? (h.dial.offsets.W1 || 0) : 0;
          angle = off * 30; // 1 刻＝30°（鏡像由 .mirror scaleX(-1) 承載）
        } else {
          angle = AFF_ANGLE[aff] != null ? AFF_ANGLE[aff] : 90;
        }
        var hand = face.querySelector('.hhand');
        if (hand) hand.style.transform = 'translateX(-50%) rotate(' + angle + 'deg)';
        var trust = Number(flags[h.trust] != null ? flags[h.trust] : 0);
        var cover = face.querySelector('.hcover');
        if (cover) {
          cover.classList.toggle('cover-open', trust >= 2);
          cover.classList.toggle('cover-half', trust === 1);
          cover.classList.toggle('cover-closed', trust <= 0);
        }
      });
      // 台灣頁（翻面）內容
      var d = qs('flip-date'); if (d) d.textContent = flags.tw_date || '—';
      var l = qs('flip-left'); if (l) l.textContent = flags.tw_left || '—';
      var w = qs('flip-win');
      if (w) {
        var price = flags._winPrice || '';
        var back = flags._winBack || '';
        w.textContent = (price || back) ? (price + (back ? '｜歸期 ' + back : '')) : '—';
      }
    }

    // 修錶單入單：紙頁震顫一次、無音效、無加分提示（08 §2／§14）
    function flashTicket() {
      var btn = qs('watch-main');
      if (!btn) return;
      btn.classList.remove('ticket-flash');
      void btn.offsetWidth;
      btn.classList.add('ticket-flash');
    }

    function openFlip() { render(); qs('flip-overlay').hidden = false; }
    function closeFlip() { qs('flip-overlay').hidden = true; }

    function openLedger() {
      var list = qs('ledger-list');
      list.innerHTML = '';
      qs('ledger-replay').hidden = true;
      (state.ledger || []).forEach(function (id) {
        var reg = depositMap[id] || {};
        var row = document.createElement('div');
        row.className = 'ledger-row';
        row.textContent = reg.label || id;
        row.addEventListener('click', function () {
          var rp = qs('ledger-replay');
          rp.textContent = reg.replay || '';
          rp.hidden = false;
        });
        list.appendChild(row);
      });
      if (!(state.ledger || []).length) {
        var empty = document.createElement('div');
        empty.className = 'ledger-empty';
        empty.textContent = '（修錶單尚無記錄）';
        list.appendChild(empty);
      }
      qs('ledger-overlay').hidden = false;
    }
    function closeLedger() { qs('ledger-overlay').hidden = true; }

    // 限時：主錶秒針加速（唯一限時視覺，08 §7.2）
    function setTimedFast(on) {
      var sec = qs('whand-sec');
      if (sec) sec.classList.toggle('fast', !!on);
    }

    // 停拍凍幀（08 §8.2）：舞台根加 .frozen；唯 .exempt 立繪保持動態
    function freeze(on) {
      var stage = qs('stage');
      if (stage) stage.classList.toggle('frozen', !!on);
    }

    return {
      init: init, render: render, flashTicket: flashTicket,
      openFlip: openFlip, closeFlip: closeFlip,
      openLedger: openLedger, closeLedger: closeLedger,
      setTimedFast: setTimedFast, freeze: freeze
    };
  })();

  // ============================================================
  // 4. Persistence：localStorage 存讀檔＋跨周目 meta
  // ============================================================

  var Persistence = (function () {
    function defaultSettings() {
      return {
        textSpeed: DEFAULT_TEXT_SPEED,
        instant: false,
        autoDelayMs: DEFAULT_AUTO_DELAY,
        skipRead: false,
        timedChoices: true,      // 限時選項（08 §7.4；無障礙可關）
        bgmVol: 40,
        seVol: 50
      };
    }

    // meta 物件結構（08 §11.2）：F1–F4 set-only；cleared.{ting,man,yan}；endings/gallery/seenText/settings
    function normalizeMeta(raw) {
      raw = raw || {};
      var cleared = raw.cleared || {};
      return {
        v: 1,
        F1: raw.F1 === true, F2: raw.F2 === true, F3: raw.F3 === true, F4: raw.F4 === true,
        cleared: { ting: !!cleared.ting, man: !!cleared.man, yan: !!cleared.yan },
        endings: raw.endings || [],
        gallery: raw.gallery || [],
        seenText: raw.seenText || [],
        settings: Object.assign(defaultSettings(), raw.settings || {})
      };
    }

    function loadMeta() {
      var raw = safeStorage.get(STORAGE_PREFIX + 'meta');
      if (raw) {
        try { return normalizeMeta(JSON.parse(raw)); }
        catch (e) { console.warn('[對時] meta 資料損毀，改用預設值', e); }
      }
      return normalizeMeta({});
    }
    function saveMeta(m) { safeStorage.set(STORAGE_PREFIX + 'meta', JSON.stringify(m)); }

    function summarizeLog(log) {
      for (var i = log.length - 1; i >= 0; i--) {
        if (log[i] && log[i].text) return log[i].text.slice(0, 16);
      }
      return '';
    }

    function saveToSlot(slot) {
      var node = STORY.nodes[state.node] || {};
      var payload = {
        v: 1,
        node: state.node,
        step: state.step,
        flags: deepClone(state.flags),
        ledger: (state.ledger || []).slice(),
        stage: deepClone(state.stage),
        log: state.log.slice(-200),
        route: state.flags.route || null,
        label: node.title || summarizeLog(state.log) || state.node,
        ts: Date.now()
      };
      safeStorage.set(STORAGE_PREFIX + 'save:' + slot, JSON.stringify(payload));
      return payload;
    }
    function loadFromSlot(slot) {
      var raw = safeStorage.get(STORAGE_PREFIX + 'save:' + slot);
      if (!raw) return null;
      try { return JSON.parse(raw); }
      catch (e) { console.warn('[對時] 讀檔失敗（slot=' + slot + '），存檔資料損毀', e); return null; }
    }
    function deleteSlot(slot) { safeStorage.remove(STORAGE_PREFIX + 'save:' + slot); }
    function autosave() { if (STORY && state) saveToSlot('auto'); }

    function unlockGalleryCG(cgPath) {
      meta.gallery = meta.gallery || [];
      if (meta.gallery.indexOf(cgPath) === -1) { meta.gallery.push(cgPath); saveMeta(meta); }
    }

    return {
      loadMeta: loadMeta, saveMeta: saveMeta, saveToSlot: saveToSlot, loadFromSlot: loadFromSlot,
      deleteSlot: deleteSlot, autosave: autosave, unlockGalleryCG: unlockGalleryCG, defaultSettings: defaultSettings
    };
  })();

  // ============================================================
  // 5. Runner：node/step 推進、choices（含限時）、autoBranch、end 收束
  // ============================================================

  var Runner = (function () {

    function dialogueKey() { return state.node + '#' + state.step; }
    function isSeen() { return (meta.seenText || []).indexOf(dialogueKey()) !== -1; }
    function markSeen() {
      meta.seenText = meta.seenText || [];
      var k = dialogueKey();
      if (meta.seenText.indexOf(k) === -1) meta.seenText.push(k);
    }
    function logDialogue(name, text) {
      state.log.push({ who: name || null, name: name || null, text: text });
      if (state.log.length > 200) state.log.shift();
    }

    // 寫入 flag，並把 meta 旗標（F1..F4／cleared_*）導向 meta（set-only：一經 true 永不撤銷）
    function writeFlag(k, v) {
      if (/^F[1-4]$/.test(k)) {
        if (v === true) { meta[k] = true; Persistence.saveMeta(meta); }
        state.flags[k] = meta[k] === true;   // 鏡射回 run flags，供同 run 內 {flag} 讀取
        return;
      }
      if (k.indexOf('cleared_') === 0) {
        if (v === true) { meta.cleared[k.slice('cleared_'.length)] = true; Persistence.saveMeta(meta); }
        return;
      }
      state.flags[k] = v;
    }
    function applySet(obj) { if (obj) Object.keys(obj).forEach(function (k) { writeFlag(k, obj[k]); }); }
    function applyAdd(obj) {
      if (!obj) return;
      Object.keys(obj).forEach(function (k) {
        var cur = Number(state.flags[k]) || 0;
        state.flags[k] = cur + Number(obj[k]);
      });
    }

    // 修錶單入單（08 §5.1）：hidden 暗帳首次只 set flag、不入單、不震顫；揭牌時補記入單。
    function applyDeposit(id) {
      var reg = depositMap[id] || {};
      var flagAlready = state.flags[id] === true;
      var inLedger = (state.ledger || []).indexOf(id) !== -1;
      state.flags[id] = true;
      if (reg.hidden && !flagAlready && !inLedger) return; // 暗帳首取：不入單
      if (!inLedger) {
        state.ledger = state.ledger || [];
        state.ledger.push(id);
        Hud.flashTicket();
      }
    }

    function clearAutoAdvanceTimer() {
      if (autoAdvanceTimer) { clearTimeout(autoAdvanceTimer); autoAdvanceTimer = null; }
    }
    function scheduleAdvance(ms) {
      clearAutoAdvanceTimer();
      autoAdvanceTimer = setTimeout(function () {
        autoAdvanceTimer = null;
        if (!choiceMode && !uiBusy && !beatWaiting) advanceStep();
      }, ms);
    }
    function onTypewriterDone() {
      var seenBefore = isSeen();
      markSeen();
      Persistence.autosave();
      Persistence.saveMeta(meta);
      if (settings.skipRead && skipModeOn && seenBefore) scheduleAdvance(50);
      else if (autoPlayOn) scheduleAdvance(settings.autoDelayMs || DEFAULT_AUTO_DELAY);
    }

    function renderDialogueStep(step, forceInstant) {
      var flags = state.flags;
      var isSay = step.say !== undefined;
      var name = '', color = '';
      if (isSay) {
        var cd = (STORY.characters && STORY.characters[step.who]) || {};
        name = StateMgr.interpolate(cd.name || step.who, flags);
        color = cd.color || '';
        if (step.expr && cd.sprite !== false) {
          var pos = Stage.findPosOf(step.who);
          if (pos) { var spec = { char: step.who, expr: step.expr, pos: pos }; Stage.setSprite(spec, 'fade'); upsertStageSprite(spec); }
        }
      }
      var raw = isSay ? step.say : step.text;
      var txt = StateMgr.interpolate(raw, flags);
      Stage.showNameplate(isSay ? name : '', color);
      Stage.setSpeakerHighlight(isSay ? step.who : null);
      var speed = forceInstant ? 0 : (settings.instant ? 0 : settings.textSpeed);
      Stage.typewrite(txt, speed, onTypewriterDone);
      logDialogue(isSay ? name : null, txt);
    }

    // 空白點擊拍（08 §2）：清空對白框、無文字、無 SE，等一次點擊。連兩個 beat＝全靜音兩拍。
    function renderBeat() {
      Stage.clearDialogue();
      Stage.showClickHint();
      beatWaiting = true;
    }

    function upsertStageSprite(spec) {
      var list = state.stage.sprites;
      var idx = -1;
      for (var i = 0; i < list.length; i++) { if (list[i].pos === spec.pos) { idx = i; break; } }
      var entry = { char: spec.char, expr: spec.expr, pos: spec.pos };
      if (idx === -1) list.push(entry); else list[idx] = entry;
    }
    function removeStageSprite(charOrStar) {
      if (charOrStar === '*') { state.stage.sprites = []; return; }
      state.stage.sprites = state.stage.sprites.filter(function (s) { return s.char !== charOrStar; });
    }

    // 出窗結算（08 §2／§12）：對每位已相識 heroine，本窗無 touch 命中者 ignore+1，有者歸零。
    function runWinEnd() {
      (STORY.heroines || []).forEach(function (h) {
        var aff = Number(state.flags[h.aff] || 0);
        if (aff < 1) return;
        var touched = state.flags['_touch_' + h.id] === true;
        var key = 'ignore_' + h.id;
        state.flags[key] = touched ? 0 : (Number(state.flags[key]) || 0) + 1;
      });
    }

    function runInstantStep(step) {
      if (step.bg !== undefined) { Stage.setBackground(step.bg, step.fx || 'cut'); state.stage.bg = step.bg; }
      if (step.sprite !== undefined) { Stage.setSprite(step.sprite, step.fx || 'fade'); upsertStageSprite(step.sprite); }
      if (step.hide !== undefined) { Stage.hideSprite(step.hide); removeStageSprite(step.hide); }
      if (step.cg !== undefined) {
        Stage.setCG(step.cg); state.stage.cg = step.cg;
        if (step.cg) Persistence.unlockGalleryCG(step.cg);
      }
      // 入窗拍（08 §2）
      if (step.win !== undefined) {
        state.flags.win = step.win;
        if (step.price !== undefined) state.flags._winPrice = step.price;
        if (step.back !== undefined) state.flags._winBack = step.back;
        // 本窗 touch 計數歸零起算
        (STORY.heroines || []).forEach(function (h) { state.flags['_touch_' + h.id] = false; });
      }
      if (step.winEnd === true) runWinEnd();
      if (step.set !== undefined) applySet(step.set);
      if (step.add !== undefined) applyAdd(step.add);
      if (step.deposit !== undefined) applyDeposit(step.deposit);
      if (step.freeze !== undefined) { Hud.freeze(step.freeze); state.stage.frozen = !!step.freeze; }
      if (step.sfx !== undefined) Stage.playSfx(step.sfx);
      if (step.clear) Stage.clearDialogue();
      Hud.render();
    }

    function executeStep(step) {
      if (step.text !== undefined || step.say !== undefined) { renderDialogueStep(step, false); return; }
      if (step.beat === true) { renderBeat(); return; }
      if (step.letter !== undefined) { Stage.showLetter(step.letter, function () { advanceStep(); }); return; }
      runInstantStep(step);
      if (typeof step.wait === 'number') { uiBusy = true; setTimeout(function () { uiBusy = false; advanceStep(); }, step.wait); }
      else advanceStep();
    }

    function advanceStep() { state.step++; runStep(); }
    function runStep() {
      var node = STORY.nodes[state.node];
      var steps = node.steps || [];
      if (state.step >= steps.length) { exitNode(node); return; }
      executeStep(steps[state.step]);
    }

    // 三元組求值 [flag, op, value]（autoBranch 用；F/cleared 讀 meta）
    function resolveTripleFlag(name) {
      var m = StateMgr.resolveMetaFlag(name, meta);
      if (m !== undefined) return m;
      return Object.prototype.hasOwnProperty.call(state.flags, name) ? state.flags[name] : undefined;
    }
    function evalTriple(t) {
      var val = resolveTripleFlag(t[0]);
      return StateMgr.compareOp((function () { var o = {}; o[t[1]] = t[2]; return o; })(), val);
    }
    function evalAutoBranch(node) {
      var list = node.branches || [];
      for (var i = 0; i < list.length; i++) {
        var b = list[i];
        var ok;
        if (b.when === undefined) ok = true; // else
        else ok = b.when.every(function (t) { return evalTriple(t); });
        if (ok) {
          if (b.variant) writeFlag('end_variant', b.variant);
          else if (state.flags.end_variant) writeFlag('end_variant', undefined);
          goToNode(b.goto);
          return;
        }
      }
      console.error('[對時] autoBranch 無成立分支且缺 else：' + state.node);
    }

    function normalizeOptions(options) {
      return options.map(function (o) {
        var set = {};
        if (Array.isArray(o.set)) o.set.forEach(function (p) { set[p[0]] = p[1]; });
        else if (o.set) set = o.set;
        return { text: o.text, to: o.goto || o.to, set: set, add: o.add, if: o.if, once: o.once, lockedHint: o.lockedHint };
      });
    }

    function evalBranch(branch) {
      var ctx = { flags: state.flags, meta: meta };
      for (var i = 0; i < branch.length; i++) {
        var b = branch[i];
        if (b.if === undefined) return b.to;
        if (StateMgr.evalCond(b.if, ctx)) return b.to;
      }
      return null;
    }

    function renderChoices(list, node) {
      choiceMode = true;
      var ctx = { flags: state.flags, meta: meta };
      var picked = state.flags.__pickedChoiceIds || [];
      var items = [];
      list.forEach(function (c, idx) {
        var key = state.node + '::' + idx;
        if (c.once && picked.indexOf(key) !== -1) return;
        var visible = true, locked = false, hint = '';
        if (c.if !== undefined && !StateMgr.evalCond(c.if, ctx)) {
          if (c.lockedHint) { locked = true; hint = c.lockedHint; }
          else visible = false;
        }
        if (visible) items.push({ c: c, idx: idx, key: key, locked: locked, hint: hint });
      });
      var onPick = function (item) {
        if (item.locked) return;
        if (choiceTimer) { clearTimeout(choiceTimer); choiceTimer = null; }
        Hud.setTimedFast(false);
        choiceMode = false;
        if (item.c.once) state.flags.__pickedChoiceIds = (state.flags.__pickedChoiceIds || []).concat([item.key]);
        applySet(item.c.set);
        applyAdd(item.c.add);
        Hud.render();
        Stage.clearChoiceButtons();
        goToNode(item.c.to);
      };
      Stage.renderChoiceButtons(items, onPick);
      Persistence.autosave();
      // 限時（08 §7）：僅白名單節點＋設定開啟時啟動；關閉＝計時歸零、玩家主動選（08 §7.4）
      if (node.timed && TIMED_WHITELIST.indexOf(state.node) !== -1 && settings.timedChoices) {
        var secs = Number(node.timeLimit) || 8;
        Hud.setTimedFast(true);
        choiceTimer = setTimeout(function () {
          choiceTimer = null;
          Hud.setTimedFast(false);
          var toIdx = node.timeoutOption;
          var it = null;
          for (var k = 0; k < items.length; k++) { if (items[k].idx === toIdx) { it = items[k]; break; } }
          if (it) onPick(it);
        }, secs * 1000);
      }
    }

    function finishEnd(node) {
      var e = node.ending || {};
      var endId = e.id || node._id || state.node;
      var variant = state.flags.end_variant;
      meta.endings = meta.endings || [];
      var tag = endId + (variant ? '#' + variant : '');
      if (meta.endings.indexOf(tag) === -1) meta.endings.push(tag);
      // cleared 只在 true/good 且非減配/fallback 時點亮（08 §11.2）
      if (e.cleared && variant !== 'downgrade' && variant !== 'fallback') {
        meta.cleared[e.cleared] = true;
      }
      Persistence.saveMeta(meta);
      Persistence.autosave();
      Screens.showEndCard(e.route || 'common', e.tier || 'normal');
    }

    function exitNode(node) {
      if (node.type === 'autoBranch' || Array.isArray(node.branches)) { evalAutoBranch(node); return; }
      if (Array.isArray(node.branch)) {
        var target = evalBranch(node.branch);
        if (target) { goToNode(target); return; }
        console.error('[對時] branch 無成立分支且缺 else：' + state.node);
        return;
      }
      var optList = node.options ? normalizeOptions(node.options) : node.choices;
      if (Array.isArray(optList)) { renderChoices(optList, node); return; }
      if (node.next !== undefined) { goToNode(node.next); return; }
      if (node.ending !== undefined || node.end !== undefined || state.node.indexOf('end-') === 0) { finishEnd(node); return; }
      console.error('[對時] 節點無出口：' + state.node);
    }

    function goToNode(nodeId) {
      var node = STORY.nodes[nodeId];
      if (!node) { console.error('[對時] 節點不存在：' + nodeId); return; }
      state.node = nodeId;
      state.step = 0;
      node._id = nodeId;

      if (choiceTimer) { clearTimeout(choiceTimer); choiceTimer = null; }
      Hud.setTimedFast(false);
      Stage.hideLetter();
      Stage.clearChoiceButtons();
      choiceMode = false;
      beatWaiting = false;

      if (node.bg !== undefined) { Stage.setBackground(node.bg, node.bgFx || 'cut'); state.stage.bg = node.bg; }
      if (node.cg !== undefined) {
        Stage.setCG(node.cg); state.stage.cg = node.cg;
        if (node.cg) Persistence.unlockGalleryCG(node.cg);
      }
      if (node.bgm !== undefined) { Stage.setBgm(node.bgm); state.stage.bgm = node.bgm; }
      if (node.sprites !== undefined) {
        Stage.setAllSprites(node.sprites);
        state.stage.sprites = node.sprites.map(function (s) { return { char: s.char, expr: s.expr, pos: s.pos }; });
      }
      if (node.freeze !== undefined) { Hud.freeze(node.freeze); state.stage.frozen = !!node.freeze; }
      // 節點級 touch（08 §12）：本窗對該 heroine 有具名互動
      if (Array.isArray(node.touch)) node.touch.forEach(function (id) { state.flags['_touch_' + id] = true; });

      Hud.render();
      Persistence.autosave();
      runStep();
    }

    function loadGameFromPayload(payload) {
      clearAutoAdvanceTimer();
      if (choiceTimer) { clearTimeout(choiceTimer); choiceTimer = null; }
      autoPlayOn = false; skipModeOn = false; beatWaiting = false;
      state = {
        node: payload.node,
        step: payload.step,
        flags: payload.flags || {},
        ledger: (payload.ledger || []).slice(),
        stage: payload.stage || { bg: null, cg: null, sprites: [], bgm: null, frozen: false },
        log: (payload.log || []).slice()
      };
      if (state.stage.frozen === undefined) state.stage.frozen = false;
      Screens.show('game');
      Stage.fullResyncFromState(state);
      Hud.freeze(state.stage.frozen);
      Hud.render();
      var node = STORY.nodes[state.node];
      if (!node) { console.error('[對時] 讀檔失敗：節點不存在 ' + state.node); return; }
      node._id = state.node;
      var steps = node.steps || [];
      if (state.step < steps.length) {
        var st = steps[state.step];
        if (st.text !== undefined || st.say !== undefined) renderDialogueStep(st, true);
        else if (st.beat === true) renderBeat();
        else { exitNode(node); }
      } else {
        exitNode(node);
      }
    }

    function newGame(startNodeOverride, initialFlags) {
      clearAutoAdvanceTimer();
      if (choiceTimer) { clearTimeout(choiceTimer); choiceTimer = null; }
      autoPlayOn = false; skipModeOn = false; beatWaiting = false;
      state = StateMgr.createState(startNodeOverride || STORY.meta.startNode);
      state.flags.spring = 7; // 發條七圈（08 §4.5／§11.4）
      if (initialFlags) Object.keys(initialFlags).forEach(function (k) { state.flags[k] = initialFlags[k]; });
      Screens.show('game');
      Hud.freeze(false);
      goToNode(state.node);
    }

    function onStageClick() {
      clearAutoAdvanceTimer();
      if (uiBusy || choiceMode) return;
      if (Stage.isTyping()) { Stage.completeTypewriter(); return; }
      if (beatWaiting) { beatWaiting = false; advanceStep(); return; }
      advanceStep();
    }

    function toggleAutoPlay() {
      autoPlayOn = !autoPlayOn;
      qs('btn-auto').classList.toggle('active', autoPlayOn);
      if (autoPlayOn && !Stage.isTyping() && !choiceMode && !uiBusy) scheduleAdvance(settings.autoDelayMs || DEFAULT_AUTO_DELAY);
    }
    function toggleSkipMode() {
      skipModeOn = !skipModeOn;
      qs('btn-skip').classList.toggle('active', skipModeOn);
      if (skipModeOn && settings.skipRead && !Stage.isTyping() && !choiceMode && !uiBusy && isSeen()) scheduleAdvance(50);
    }

    return {
      goToNode: goToNode, runStep: runStep, newGame: newGame, loadGameFromPayload: loadGameFromPayload,
      onStageClick: onStageClick, toggleAutoPlay: toggleAutoPlay, toggleSkipMode: toggleSkipMode,
      clearAutoAdvanceTimer: clearAutoAdvanceTimer
    };
  })();

  // ============================================================
  // 6. Screens：標題／存讀／回廊／設定／回顧／關於／結局卡
  // ============================================================

  var Screens = (function () {
    var current = null;
    var saveloadMode = 'save';

    function show(name) {
      SCREEN_IDS.forEach(function (id) {
        var el = qs('screen-' + id);
        if (el) el.hidden = (id !== name);
      });
      current = name;
    }
    function getCurrent() { return current; }
    function openSub(name) { lastScreen = current || 'title'; show(name); }
    function backFromSub() { show(lastScreen); }

    function showBootErrors(errors) {
      var ul = qs('boot-errors');
      ul.innerHTML = '';
      errors.forEach(function (msg) {
        var li = document.createElement('li');
        li.textContent = msg;
        ul.appendChild(li);
      });
      show('boot');
    }

    function refreshTitle() {
      qs('title-logo').textContent = (STORY.meta && STORY.meta.title) || '對時';
      var bgPath = STORY.meta.titleScreen && STORY.meta.titleScreen.bg;
      qs('title-bg').style.backgroundImage = bgPath ? "url('" + resolveAsset(bgPath) + "')" : '';
      var hasAuto = !!safeStorage.get(STORAGE_PREFIX + 'save:auto');
      qs('btn-continue').disabled = !hasAuto;
      // 08 §11.3：標題不設真線入口（真線入口在定日場戲內）——此處不做任何 true-route 按鈕
      if (STORY.meta.titleScreen && STORY.meta.titleScreen.bgm) Stage.setBgm(STORY.meta.titleScreen.bgm);
    }

    function openSaveLoad(mode) {
      saveloadMode = mode;
      qs('saveload-heading').textContent = mode === 'save' ? '存檔' : '讀檔';
      renderSaveloadGrid();
      openSub('saveload');
    }
    function renderSaveloadGrid() {
      var grid = qs('saveload-grid');
      grid.innerHTML = '';
      var slots = ['auto', 'quick'].concat(rangeArr(1, SAVE_SLOT_COUNT));
      slots.forEach(function (slot) {
        var data = Persistence.loadFromSlot(slot);
        var cell = document.createElement('div');
        cell.className = 'save-cell' + (data ? '' : ' empty') + (slot === 'auto' ? ' save-auto' : '');
        var info = document.createElement('div');
        info.className = 'save-info';
        if (data) {
          info.innerHTML = '<b>' + escapeHtml(data.label || data.node) + '</b><br>' +
            '<span class="save-ts">' + escapeHtml(formatTs(data.ts)) + '</span><br>' +
            '<span class="save-route">' + escapeHtml(data.route ? routeLabel(data.route) : '') + '</span>';
        } else {
          info.textContent = slot === 'auto' ? '（自動存檔・空）' : slot === 'quick' ? '（快速存檔・空）' : '（空）';
        }
        cell.appendChild(info);
        cell.addEventListener('click', function () {
          if (saveloadMode === 'save') {
            if (slot === 'auto') return;
            Persistence.saveToSlot(slot);
            renderSaveloadGrid();
          } else {
            if (!data) return;
            Runner.loadGameFromPayload(data);
          }
        });
        if (data && slot !== 'auto') {
          var del = document.createElement('button');
          del.type = 'button'; del.className = 'save-delete'; del.textContent = '刪'; del.title = '刪除此存檔';
          del.addEventListener('click', function (e) { e.stopPropagation(); Persistence.deleteSlot(slot); renderSaveloadGrid(); });
          cell.appendChild(del);
        }
        grid.appendChild(cell);
      });
    }

    function collectAllCg() {
      var set = [];
      Object.keys(STORY.nodes).forEach(function (id) {
        var node = STORY.nodes[id];
        if (node.cg) pushUnique(set, node.cg);
        (node.steps || []).forEach(function (s) { if (s.cg) pushUnique(set, s.cg); });
      });
      return set;
    }
    function collectAllEnds() {
      var set = [];
      Object.keys(STORY.nodes).forEach(function (id) {
        if (id.indexOf('end-') === 0 || id === 'end-true') {
          var node = STORY.nodes[id];
          var e = node.ending || {};
          set.push({ id: e.id || id, route: e.route || 'common', tier: e.tier || 'normal' });
        }
      });
      return set;
    }
    function openGallery() {
      var cgGrid = qs('gallery-cg-grid');
      cgGrid.innerHTML = '';
      collectAllCg().forEach(function (path) {
        var unlocked = (meta.gallery || []).indexOf(path) !== -1;
        var cell = document.createElement('div');
        cell.className = 'gallery-cell' + (unlocked ? '' : ' locked');
        if (unlocked) {
          var img = document.createElement('img'); img.alt = '';
          img.onerror = function () { img.style.display = 'none'; };
          img.src = resolveAsset(path);
          cell.appendChild(img);
        } else cell.textContent = '？';
        cgGrid.appendChild(cell);
      });
      var endList = qs('gallery-endings-list');
      endList.innerHTML = '';
      collectAllEnds().forEach(function (e) {
        var seen = (meta.endings || []).some(function (tag) { return tag === e.id || tag.indexOf(e.id + '#') === 0; });
        var row = document.createElement('div');
        row.className = 'ending-row' + (seen ? '' : ' locked');
        row.textContent = seen ? (routeLabel(e.route) + '・' + tierLabel(e.tier)) : '？・？';
        endList.appendChild(row);
      });
      openSub('gallery');
    }

    function applySettingsToUI() {
      qs('setting-textspeed').value = settings.textSpeed;
      qs('setting-instant').checked = settings.instant;
      qs('setting-autospeed').value = settings.autoDelayMs;
      qs('setting-skip').checked = settings.skipRead;
      qs('setting-timed').checked = settings.timedChoices !== false;
      qs('setting-bgm-vol').value = settings.bgmVol;
      qs('setting-se-vol').value = settings.seVol;
    }
    function openSettings() { applySettingsToUI(); openSub('settings'); }

    function openAbout() {
      qs('about-text').innerHTML =
        '<p>《' + escapeHtml((STORY.meta && STORY.meta.title) || '對時') + '》為自包含網頁 VN，離線 file:// 開啟即可遊玩。</p>' +
        '<p>存讀檔使用瀏覽器 localStorage，與本檔案所在路徑綁定；若移動或改名此資料夾，原存檔將無法讀取（等同換了 origin）。</p>' +
        '<p>版本：' + escapeHtml((STORY.meta && STORY.meta.version) || '') + '</p>';
      openSub('about');
    }

    function openLog() {
      var list = qs('log-list');
      list.innerHTML = '';
      state.log.forEach(function (entry) {
        var row = document.createElement('div');
        row.className = 'log-row';
        if (entry.name) { var n = document.createElement('b'); n.textContent = entry.name; row.appendChild(n); }
        var t = document.createElement('div'); t.textContent = entry.text; row.appendChild(t);
        list.appendChild(row);
      });
      qs('overlay-log').hidden = false;
      list.scrollTop = list.scrollHeight;
    }
    function closeLog() { qs('overlay-log').hidden = true; }

    function showEndCard(route, tier) {
      qs('endcard-route').textContent = routeLabel(route);
      qs('endcard-tier').textContent = tierLabel(tier);
      show('endcard');
    }

    return {
      show: show, getCurrent: getCurrent, openSub: openSub, backFromSub: backFromSub,
      showBootErrors: showBootErrors, refreshTitle: refreshTitle,
      openSaveLoad: openSaveLoad, renderSaveloadGrid: renderSaveloadGrid,
      openGallery: openGallery, openSettings: openSettings, applySettingsToUI: applySettingsToUI,
      openAbout: openAbout, openLog: openLog, closeLog: closeLog, showEndCard: showEndCard
    };
  })();

  // ============================================================
  // 7. UI 事件綁定
  // ============================================================

  function initUI() {
    qs('btn-new-game').addEventListener('click', function () { Runner.newGame(); });
    qs('btn-continue').addEventListener('click', function () {
      var d = Persistence.loadFromSlot('auto');
      if (d) Runner.loadGameFromPayload(d);
    });
    qs('btn-load').addEventListener('click', function () { Screens.openSaveLoad('load'); });
    qs('btn-gallery').addEventListener('click', function () { Screens.openGallery(); });
    qs('btn-settings').addEventListener('click', function () { Screens.openSettings(); });
    qs('btn-about').addEventListener('click', function () { Screens.openAbout(); });

    // 遊戲內 topbar
    qs('btn-log').addEventListener('click', function (e) { e.stopPropagation(); Screens.openLog(); });
    qs('btn-auto').addEventListener('click', function (e) { e.stopPropagation(); Runner.toggleAutoPlay(); });
    qs('btn-skip').addEventListener('click', function (e) { e.stopPropagation(); Runner.toggleSkipMode(); });
    qs('btn-quicksave').addEventListener('click', function (e) { e.stopPropagation(); Persistence.saveToSlot('quick'); flashButton(qs('btn-quicksave')); });
    qs('btn-quickload').addEventListener('click', function (e) { e.stopPropagation(); var d = Persistence.loadFromSlot('quick'); if (d) Runner.loadGameFromPayload(d); });
    qs('btn-save-menu').addEventListener('click', function (e) { e.stopPropagation(); Screens.openSaveLoad('save'); });
    qs('btn-load-menu').addEventListener('click', function (e) { e.stopPropagation(); Screens.openSaveLoad('load'); });
    qs('btn-settings-ingame').addEventListener('click', function (e) { e.stopPropagation(); Screens.openSettings(); });
    qs('btn-title').addEventListener('click', function (e) {
      e.stopPropagation();
      Runner.clearAutoAdvanceTimer();
      Screens.show('title'); Screens.refreshTitle();
    });

    // 對時盤：懷錶翻面（台灣頁）／修錶單
    qs('watch-main').addEventListener('click', function (e) { e.stopPropagation(); Hud.openFlip(); });
    qs('btn-flip-close').addEventListener('click', function (e) { e.stopPropagation(); Hud.closeFlip(); });
    qs('flip-overlay').addEventListener('click', function (e) { if (e.target === qs('flip-overlay')) Hud.closeFlip(); });
    qs('btn-ledger').addEventListener('click', function (e) { e.stopPropagation(); Hud.openLedger(); });
    qs('btn-ledger-close').addEventListener('click', function (e) { e.stopPropagation(); Hud.closeLedger(); });
    qs('ledger-overlay').addEventListener('click', function (e) { if (e.target === qs('ledger-overlay')) Hud.closeLedger(); });

    // 舞台推進
    qs('stage').addEventListener('click', function (e) {
      if (e.target.closest('#topbar') || e.target.closest('#choices-layer') || e.target.closest('#duishi-pan')) return;
      Runner.onStageClick();
    });

    // 結局卡
    qs('btn-endcard-title').addEventListener('click', function () { Screens.show('title'); Screens.refreshTitle(); });

    // 子畫面返回
    qs('btn-saveload-back').addEventListener('click', function () { Screens.backFromSub(); });
    qs('btn-gallery-back').addEventListener('click', function () { Screens.backFromSub(); });
    qs('btn-about-back').addEventListener('click', function () { Screens.backFromSub(); });
    qs('btn-log-close').addEventListener('click', function () { Screens.closeLog(); });

    // 設定
    qs('setting-textspeed').addEventListener('input', function (e) { settings.textSpeed = Number(e.target.value); Persistence.saveMeta(meta); });
    qs('setting-instant').addEventListener('change', function (e) { settings.instant = e.target.checked; Persistence.saveMeta(meta); });
    qs('setting-autospeed').addEventListener('input', function (e) { settings.autoDelayMs = Number(e.target.value); Persistence.saveMeta(meta); });
    qs('setting-skip').addEventListener('change', function (e) { settings.skipRead = e.target.checked; Persistence.saveMeta(meta); });
    qs('setting-timed').addEventListener('change', function (e) { settings.timedChoices = e.target.checked; Persistence.saveMeta(meta); });
    qs('setting-bgm-vol').addEventListener('input', function (e) { settings.bgmVol = Number(e.target.value); Stage.applyVolumes(); Persistence.saveMeta(meta); });
    qs('setting-se-vol').addEventListener('input', function (e) { settings.seVol = Number(e.target.value); Persistence.saveMeta(meta); });
    qs('setting-fullscreen').addEventListener('click', function () { toggleFullscreen(); });
    qs('btn-settings-back').addEventListener('click', function () { Screens.backFromSub(); });

    document.addEventListener('keydown', function (e) {
      if (Screens.getCurrent() !== 'game') {
        if (e.key === 'Escape' && !qs('overlay-log').hidden) Screens.closeLog();
        return;
      }
      if (!qs('overlay-log').hidden) { if (e.key === 'Escape') Screens.closeLog(); return; }
      if (!qs('flip-overlay').hidden) { if (e.key === 'Escape') Hud.closeFlip(); return; }
      if (!qs('ledger-overlay').hidden) { if (e.key === 'Escape') Hud.closeLedger(); return; }
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); Runner.onStageClick(); }
    });
  }

  function flashButton(btn) {
    btn.classList.add('flash');
    setTimeout(function () { btn.classList.remove('flash'); }, 400);
  }
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen && document.documentElement.requestFullscreen().catch(function () {});
    } else {
      document.exitFullscreen && document.exitFullscreen();
    }
  }

  // ============================================================
  // 8. 開機流程
  // ============================================================

  function boot() {
    Loader.load().then(function (story) {
      var errors = Loader.validate(story);
      if (errors.length) { window.STORY = story; STORY = story; Screens.showBootErrors(errors); return; }
      STORY = story;
      window.STORY = story;
      // deposits 註冊表建 map
      depositMap = {};
      (story.deposits || []).forEach(function (d) { depositMap[d.id] = d; });
      meta = Persistence.loadMeta();
      settings = meta.settings;
      Hud.init();
      Screens.applySettingsToUI();
      Screens.show('title');
      Screens.refreshTitle();
    }).catch(function (err) {
      Screens.showBootErrors([String(err && err.message || err)]);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initUI();
    boot();
  });

  // ============================================================
  // 9. 測試鉤子（08§0-10）：window.__engine
  // ============================================================

  window.__engine = {
    jump: function (nodeId) {
      if (!STORY) { console.warn('[對時] 尚未載入 STORY，無法 jump'); return; }
      if (!state) { state = StateMgr.createState(nodeId); state.flags.spring = 7; }
      Screens.show('game');
      Runner.goToNode(nodeId);
    },
    getState: function () { return state ? deepClone(state) : null; },
    setFlag: function (name, value) { if (state) state.flags[name] = value; },
    getMeta: function () { return meta ? deepClone(meta) : null; },
    setMeta: function (name, value) {
      if (!meta) return;
      if (/^F[1-4]$/.test(name)) meta[name] = value === true;
      else if (name.indexOf('cleared_') === 0) meta.cleared[name.slice('cleared_'.length)] = !!value;
      Persistence.saveMeta(meta);
    },
    getStory: function () { return STORY; },
    getLedger: function () { return state ? (state.ledger || []).slice() : []; },
    advance: function () { Runner.onStageClick(); },
    choose: function (index) {
      var btns = qsa('#choices-layer .choice-stick');
      if (btns[index]) btns[index].click();
    },
    newGame: function (startNodeOverride, initialFlags) { Runner.newGame(startNodeOverride, initialFlags); },
    saveToSlot: function (slot) { return Persistence.saveToSlot(slot); },
    loadFromSlot: function (slot) { var d = Persistence.loadFromSlot(slot); if (d) Runner.loadGameFromPayload(d); return d; },
    setInstant: function (v) { if (settings) settings.instant = !!v; },
    isTrueUnlocked: function () { return StateMgr.isTrueUnlocked(meta); }
  };

})();
