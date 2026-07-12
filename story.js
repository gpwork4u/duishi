window.STORY={
  "meta": {
    "title": "對時",
    "version": "1.0.0",
    "startNode": "common-01",
    "assetsRoot": "assets/",
    "titleScreen": {
      "bg": "backgrounds/watch-shop-backroom-night.png"
    }
  },
  "characters": {
    "hero": {
      "name": "我",
      "color": "#EFE3C8",
      "sprite": false
    },
    "ting": {
      "name": "聽鐘",
      "color": "#C7CDD4"
    },
    "man": {
      "name": "小滿",
      "color": "#E8B36A"
    },
    "yan": {
      "name": "雁回",
      "color": "#5E8A7A"
    },
    "amah": {
      "name": "阿嬤",
      "color": "#C9973B"
    },
    "gu": {
      "name": "姑姑",
      "color": "#A65B3F",
      "sprite": false
    },
    "agong": {
      "name": "阿公",
      "color": "#8C6A3A",
      "sprite": false
    },
    "zhongjiang": {
      "name": "鐘匠",
      "color": "#9AA0A6",
      "sprite": false
    },
    "chashi": {
      "name": "老闆娘",
      "color": "#B08A5A",
      "sprite": false
    },
    "juzhang": {
      "name": "局長",
      "color": "#7A6E62",
      "sprite": false
    },
    "yiyuan": {
      "name": "議員",
      "color": "#6E7B84",
      "sprite": false
    },
    "mangzhong": {
      "name": "芒種",
      "color": "#8FA07A",
      "sprite": false
    }
  },
  "heroines": [
    {
      "id": "ting",
      "name": "聽鐘",
      "aff": "aff_ting",
      "trust": "trust_ting"
    },
    {
      "id": "man",
      "name": "小滿",
      "aff": "aff_man",
      "trust": "trust_man"
    },
    {
      "id": "yan",
      "name": "雁回",
      "aff": "aff_yan",
      "trust": "trust_yan",
      "dial": {
        "mirror": true,
        "offsets": {
          "W1": 3,
          "W2": 2,
          "W3": 1,
          "W4": 0,
          "W5": -1,
          "W6": -2,
          "W7": -3
        }
      }
    }
  ],
  "deposits": [
    {
      "id": "dep_ting1",
      "label": "第三座鐘・上油",
      "replay": ""
    },
    {
      "id": "dep_ting2",
      "label": "117・之一",
      "replay": ""
    },
    {
      "id": "dep_ting3",
      "label": "不上發條的保養",
      "replay": ""
    },
    {
      "id": "dep_ting4",
      "label": "無用的一圈",
      "replay": ""
    },
    {
      "id": "dep_ting5",
      "label": "她替他算窗",
      "replay": "",
      "hidden": true
    },
    {
      "id": "dep_man1",
      "label": "蹺班・之一",
      "replay": ""
    },
    {
      "id": "dep_man2",
      "label": "慢的第一課",
      "replay": ""
    },
    {
      "id": "dep_man3",
      "label": "最羨慕會遲到的人",
      "replay": ""
    },
    {
      "id": "dep_man4",
      "label": "第一封信",
      "replay": ""
    },
    {
      "id": "dep_man5",
      "label": "補還的代送",
      "replay": ""
    },
    {
      "id": "dep_yan1",
      "label": "先報日期",
      "replay": ""
    },
    {
      "id": "dep_yan2",
      "label": "名單雙抄",
      "replay": ""
    },
    {
      "id": "dep_yan3",
      "label": "同刻的一日",
      "replay": ""
    },
    {
      "id": "dep_yan4",
      "label": "繞兩圈半",
      "replay": ""
    },
    {
      "id": "dep_yan5",
      "label": "攤開的手帳",
      "replay": ""
    }
  ],
  "nodes": {
    "common-01": {
      "title": "停在那個時刻的鐘",
      "bg": "backgrounds/watch-shop-day.png",
      "touch": [],
      "steps": [
        {
          "set": {
            "spring": 7,
            "tw_date": "忌日　月 0",
            "tw_left": "對年　剩 13 個月"
          }
        },
        {
          "text": "喪事辦完，我把鐵捲門拉開，讓店照舊開著。"
        },
        {
          "text": "後房那口老掛鐘停著。指針落在阿公斷氣的那一刻——沒人去動它，也沒人敢動。"
        },
        {
          "text": "我記得他站在這張工作檯後面，嫌我把店裡的錶對得太準。"
        },
        {
          "say": "錶走得慢不要緊，別讓它停了。",
          "who": "agong"
        },
        {
          "text": "他每天天沒亮就先做一件事：拿起電話，撥給報時台。"
        },
        {
          "say": "電話拿起來，撥 117，全店的錶都得聽它的。",
          "who": "agong"
        },
        {
          "text": "我那時嫌他囉嗦。"
        },
        {
          "say": "阿律，鐘，幫我修好。",
          "who": "agong"
        },
        {
          "text": "我當時認定，他講的是店裡這口。"
        },
        {
          "say": "下次啦。",
          "who": "hero"
        },
        {
          "text": "手機待辦欄裡有一條：「修阿公的鐘」。建立日期，五年前。它一直躺在「下次」那一格。"
        },
        {
          "text": "語音信箱一則，一分半鐘。是阿嬤前陣子留的。我按了播放。"
        },
        {
          "say": "阿律喔，吃飽沒？湯我擺在電鍋裡，自己拿去吃。天要冷了，多穿一件。門記得鎖好，早點睡。",
          "who": "amah"
        },
        {
          "text": "我聽到一半就按掉了。後半段，我沒聽。"
        },
        {
          "text": "前半段她交代湯擺在電鍋。這句我聽了五年，每一則都一樣——所以我以為，還來得及聽下一則。"
        },
        {
          "bg": "backgrounds/kitchen-taiwan.png",
          "fx": "fade"
        },
        {
          "text": "廚房。電鍋跳到保溫，裡頭是今晚那碗湯。我沒掀蓋。"
        },
        {
          "text": "喪事辦的是阿公，湯還是阿嬤每晚照留。這屋裡的鐘，本來就各走各的。"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "text": "我回後房收阿公的遺物。收到一半，機芯裡多出一顆齒輪——黃銅的，對不上任何一張圖。"
        },
        {
          "text": "我拿在手上翻來翻去——修了七年錶，我認不出它是哪口鐘的。"
        },
        {
          "text": "我把它擺回停擺的掛鐘裡，順手合上背蓋，想上緊發條。"
        },
        {
          "text": "發條自己鬆開了。不是我上的。"
        },
        {
          "win": "W1",
          "price": "3 個月",
          "back": "月 3.6"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "擺錘後面的空腔亮起來——像有一道走廊，開在那口死鐘的背面。"
        },
        {
          "bg": "backgrounds/tower-base-door.png",
          "fx": "fade"
        },
        {
          "cg": "cg/door-first.png"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "門的另一頭，一個女人站在那裡。她像是早就在等門開，卻不是在等我。"
        },
        {
          "say": "渡外客。",
          "who": "ting"
        },
        {
          "say": "這裡不是你要找的地方。",
          "who": "ting"
        },
        {
          "say": "……姑娘，這是哪裡？",
          "who": "hero"
        },
        {
          "text": "她沒答。她只是看了我拿鑰匙的那隻手一眼。"
        },
        {
          "cg": ""
        },
        {
          "set": {
            "aff_ting": 1,
            "trust_ting": 1
          }
        }
      ],
      "next": "common-02"
    },
    "common-02": {
      "title": "一圈開一窗",
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "text": "鐘樓底下，一面銘文刻在牆上。她讓我自己讀。"
        },
        {
          "text": "「門依發條行走：一圈開一窗，窗內進出各一趟，窗閉未出者永留；匣中剩七圈，圈盡門死；彼界一日，此界一月；門會閉，鐘聲袂。」"
        },
        {
          "say": "七圈。用一圈，開一窗。",
          "who": "ting"
        },
        {
          "say": "窗閉，人還沒出，就留下。永遠。",
          "who": "ting"
        },
        {
          "say": "你那邊走得快。這裡走得慢。",
          "who": "ting"
        },
        {
          "say": "門認鑰，鑰認手。一鑰，渡一人。",
          "who": "ting"
        },
        {
          "text": "她沒解釋後面半句。"
        },
        {
          "text": "一日一月。我在心裡換算：我進來的這一趟，台灣那邊要走一個月。三十倍。"
        },
        {
          "text": "我手上沒有第二把鑰。這一窗要走三日——我只能等它走完。"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "街上，兩個刻民擦身而過，各自對著對方報了一句時辰，像在對暗號。沒人覺得奇怪。"
        },
        {
          "text": "入夜。亥時，鐘樓敲鐘。我跟著數：一、二、三……到十一，停了。"
        },
        {
          "text": "少一響。整座城好像都沒發現。只有我，站在這裡，數得出來。"
        },
        {
          "text": "她站在塔門邊，看著我數。"
        }
      ],
      "choices": [
        {
          "text": "這座鐘，鑄得真沉。",
          "to": "common-03"
        },
        {
          "text": "今夜的鐘，是不是少一響？",
          "to": "common-03",
          "set": {
            "aff_ting": 2
          }
        },
        {
          "text": "這麼晚，妳還得守塔？",
          "to": "common-03"
        }
      ]
    },
    "common-03": {
      "title": "三十天的保存期限",
      "bg": "backgrounds/tower-base-door.png",
      "touch": [
        "yan"
      ],
      "steps": [
        {
          "text": "W1 的最後一日。門廊那邊的光一寸一寸變薄——發條快走完了。"
        },
        {
          "text": "我在門邊等窗。街角有個穿旅裝的女人，我從沒見過。她卻朝我走來。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "阿律。",
          "who": "yan"
        },
        {
          "text": "我沒報過名。"
        },
        {
          "say": "久違了。也初次見面。",
          "who": "yan"
        },
        {
          "say": "路我認得，你還不認得。",
          "who": "yan"
        },
        {
          "text": "她說完就走，沒有回頭。"
        },
        {
          "hide": "yan"
        },
        {
          "set": {
            "aff_yan": 1,
            "trust_yan": 1
          }
        },
        {
          "text": "門在身後閉上。那一瞬，沒有聲音。"
        },
        {
          "winEnd": true
        },
        {
          "text": "掌心裡只有那顆黃銅齒輪還是溫的。除了它，我什麼也沒帶回來——時間留在門那邊，我這邊只剩一個空掉的下午。"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "set": {
            "tw_date": "月 3.6　歸來",
            "tw_left": "對年　剩 9 個月餘"
          }
        },
        {
          "text": "台灣。後房。牆上的日曆自己往前跳了一大段。我開了手機。"
        },
        {
          "text": "數十通未接電話滾過螢幕，大半是姑姑。日期跳到——三個月後。"
        },
        {
          "text": "螢幕上一行系統通知：「語音留言已逾期刪除。」"
        },
        {
          "text": "三十天的保存期限。過了。我再也聽不到那段話了。"
        },
        {
          "bg": "backgrounds/kitchen-taiwan.png",
          "fx": "fade"
        },
        {
          "text": "廚房。電鍋還插著電。我掀開蓋——那碗湯，餿了。"
        },
        {
          "text": "我站著，沒有動作。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "店重開的第一天，有客人來問一支錶什麼時候修好。"
        },
        {
          "say": "好了，我叫你。",
          "who": "hero"
        }
      ],
      "next": "common-04"
    },
    "common-04": {
      "title": "對年之約",
      "bg": "backgrounds/watch-shop-day.png",
      "touch": [],
      "steps": [
        {
          "text": "姑姑站在店門口，提著菜，已經站了一會兒。"
        },
        {
          "text": "對年怎麼辦，她這陣子問過我三次。前兩次我人不在，都是隔著電話。這是第三次。"
        },
        {
          "say": "……再看看。",
          "who": "hero"
        },
        {
          "say": "你到底跑去哪裡？三個月。三個月，電話不會接？",
          "who": "gu"
        },
        {
          "text": "我張了張嘴，說不出來。不是不想說——是說了也沒人會信。啞口，就是我全部的答案。"
        },
        {
          "text": "她把菜放到檯上，轉身要走。走之前，她改了口。"
        },
        {
          "say": "不是我不想顧，是她每天都在等你。",
          "who": "gu"
        },
        {
          "text": "她沒再叫我「阿律」。從這天起，她叫我「你」。"
        },
        {
          "bg": "backgrounds/kitchen-taiwan.png",
          "fx": "fade"
        },
        {
          "text": "廚房。阿嬤坐在竹椅上，剝著手裡的東西。她沒有問我去了哪裡。"
        },
        {
          "say": "吃飽沒？",
          "who": "amah"
        },
        {
          "text": "對年的事，最後落到我身上。阿嬤抬頭看我，等我開口。她的手沒停。"
        }
      ],
      "choices": [
        {
          "text": "阿嬤，對年那天，我會回來。",
          "to": "common-05",
          "set": {
            "f1_vow": true
          }
        },
        {
          "text": "……再看看啦。",
          "to": "common-05",
          "set": {
            "f1_vow": false
          }
        }
      ]
    },
    "common-05": {
      "title": "這正是這裡的手藝",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "text": "這一次，我是自己決定要過去的——為了問清楚那顆齒輪的來歷。"
        },
        {
          "text": "後房。停擺的掛鐘、那顆黃銅齒輪、牆上的日曆。電鍋裡，今晚的湯剛留好。"
        },
        {
          "text": "我對著死鐘，說出今天的日期——像替它對時。這句話，我說得含糊。"
        },
        {
          "text": "開背蓋，鑰入槽。掌心壓著它，一拍。"
        },
        {
          "win": "W2",
          "price": "2 個月",
          "back": "月 5.9"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "上一圈。只能一圈。擺錘後的空腔又亮了。"
        },
        {
          "bg": "backgrounds/tower-base-door.png",
          "fx": "fade"
        },
        {
          "text": "門還是開在那座鐘樓底下。這一次我不為看門而來——齒輪揣在懷裡，我得找個認得它的人。"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "right"
          },
          "fx": "fade"
        },
        {
          "text": "守塔的女人還在階上，跟上一窗那樣。她認得我這隻拿鑰的手，沒問我為何又來，只偏頭示意塔裡。"
        },
        {
          "say": "問手藝，塔內有個鐘匠。",
          "who": "ting"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "text": "塔內的工房，一個老鐘匠伏在檯後。我把齒輪擺上去，他拿寸鏡看了很久。"
        },
        {
          "say": "這不是這裡的手藝……不，這正是這裡的手藝。",
          "who": "zhongjiang"
        },
        {
          "text": "他擱下寸鏡，往角落抬了抬下巴。那裡有一張工作凳，看起來很舊，卻擦得乾淨。"
        },
        {
          "say": "凳子別坐。那是有主的。",
          "who": "zhongjiang"
        },
        {
          "say": "……主人呢？後來怎麼了？添發，他後來——",
          "who": "hero"
        },
        {
          "text": "鐘匠低下頭，拿起油壺，開始上油。他沒答。"
        },
        {
          "say": "手不會騙人。你這雙，跟他同一個師承。你是添發的孫子。",
          "who": "zhongjiang"
        },
        {
          "text": "我這才明白：阿公，過過這道門。"
        },
        {
          "say": "脫刻是掛錯的擺。理論上，停擺重掛，能校。",
          "who": "zhongjiang"
        },
        {
          "text": "他說的是門的發條，我當時沒多想。"
        },
        {
          "text": "我站在那張沒人坐的凳子前。欠的是什麼？為何五十年沒還？阿公說的「幫我修好」——到底是哪口鐘？"
        },
        {
          "hide": "ting"
        }
      ],
      "next": "common-06"
    },
    "common-06": {
      "title": "按日期排的人",
      "bg": "backgrounds/ke-city-market.png",
      "sprites": [
        {
          "char": "man",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "touch": [
        "man"
      ],
      "steps": [
        {
          "text": "出了工房，暮色。街口有人抱著一整捆信迎面跑來——我閃不及，撞上了。"
        },
        {
          "text": "信散了一地。她蹲下就撿，動作快得像在跟什麼賽跑。"
        },
        {
          "say": "撿快點。擋路的。",
          "who": "man"
        },
        {
          "text": "她十八歲上下，遞信裝，斜背一只鼓鼓的信袋。我幫著撿。"
        },
        {
          "text": "撿的時候，有一封混進了我的口袋——我當下沒發現。"
        },
        {
          "set": {
            "aff_man": 1,
            "trust_man": 1,
            "mem_wrong_letter": true
          }
        },
        {
          "text": "散信滿地，她急著要歸架。我手裡捏著一疊，抬頭看她。"
        }
      ],
      "choices": [
        {
          "text": "我幫妳撿，妳先趕路。",
          "to": "common-07"
        },
        {
          "text": "按日期排。妳歸架才快。",
          "to": "common-07",
          "set": {
            "aff_man": 2
          }
        },
        {
          "text": "對不住，我賠妳跑這趟。",
          "to": "common-07"
        }
      ]
    },
    "common-07": {
      "title": "我說得掉一場雨",
      "bg": "#000000",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "touch": [
        "yan"
      ],
      "steps": [
        {
          "text": "入夜。我繞回鐘樓的路上，又遇見那個喚我「阿律」的女人。這次她站在墓園門口。"
        },
        {
          "say": "妳到底是誰？妳怎麼知道我的名字？",
          "who": "hero"
        },
        {
          "say": "阿律。你來了——不，你等一下就要來了。",
          "who": "yan"
        },
        {
          "say": "上次在街角，妳喚住我，還記得嗎？",
          "who": "hero"
        },
        {
          "say": "街角……你說的那件事，我這裡是空的。沉了。沉了就是到了。",
          "who": "yan"
        },
        {
          "text": "她認得我這個人，卻沒有和我的昨天。她只有明天。"
        },
        {
          "say": "明天有雨。",
          "who": "yan"
        },
        {
          "text": "她說得很隨口——對她，那不是預言，是記憶。"
        },
        {
          "text": "次日。天晴。一滴雨也沒下。旱沒有因此消失。"
        },
        {
          "text": "隔了一整天，帳單才來：她在墓園裡照看的那株花，枯了。"
        },
        {
          "say": "我說得掉一場雨，說不掉天不下雨。",
          "who": "yan"
        },
        {
          "text": "她沒解釋後面半句。"
        },
        {
          "text": "那天剩下的時辰，我用在了鐘樓幫手上——順道又撞見那個跑件的姑娘一面。"
        },
        {
          "winEnd": true
        },
        {
          "text": "花枯了，規則的話也說完了。她看著我。"
        }
      ],
      "choices": [
        {
          "text": "然後呢。妳接著說。",
          "to": "common-08",
          "set": {
            "aff_yan": 2
          }
        },
        {
          "text": "天氣的事，本來就說不準。",
          "to": "common-08"
        },
        {
          "text": "花再種就有，別放心上。",
          "to": "common-08"
        }
      ]
    },
    "common-08": {
      "title": "翻面的懷錶",
      "bg": "backgrounds/kitchen-taiwan.png",
      "touch": [],
      "steps": [
        {
          "set": {
            "tw_date": "月 6.1",
            "tw_left": "對年　剩 7 個月"
          }
        },
        {
          "text": "回台灣。門後無聲，秒針照走，日曆又厚了一疊。第一件事還是開電鍋——這次湯是好的。我吃了。"
        },
        {
          "text": "又過了兩個月——在這邊，只是兩天。"
        },
        {
          "text": "阿嬤在廚房忙。爐火她忘了關，鍋燒乾了，冒煙。我趕過去掀開窗。"
        },
        {
          "text": "只是一場小小的險。沒別的意思。"
        },
        {
          "say": "吃飽沒？",
          "who": "amah"
        },
        {
          "text": "十分鐘後，她又問了一次。一模一樣的字，一樣的語氣。"
        },
        {
          "say": "吃飽沒？",
          "who": "amah"
        },
        {
          "text": "我把阿公的懷錶翻了個面。背面是一張單據紙頁：台灣今天的日期、對年還剩幾個月、修錶單空著的那一頁——一次全在眼前。"
        },
        {
          "text": "兩頭的日子，我開始學著自己記帳。"
        },
        {
          "text": "我在月曆上圈了下一次過窗的日子。這是第一次，我預先圈了。"
        }
      ],
      "next": "common-09"
    },
    "common-09": {
      "title": "一格時辰換一句話",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "touch": [
        "ting",
        "yan",
        "man"
      ],
      "steps": [
        {
          "text": "後房。對死鐘報今天的日期——這次我說得清楚了一級。掌心壓鑰，一拍。"
        },
        {
          "text": "桌上擺著姑姑剛才那通我沒接的來電。"
        },
        {
          "win": "W3",
          "price": "2 個月",
          "back": "月 8.1"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "這一窗有兩天。頭一天，我第一次自己排時辰——四格，怎麼用是我的事。格子有限，人不只一個。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "一格用在鐘樓。議會來人丈量，聽鐘一下午拿我當學徒使喚：搬、扶、遞。我沒問她一句關於三百刻年的事。"
        },
        {
          "say": "他們臨走前，都說同一句話。那句話，我聽了一輩子。",
          "who": "ting"
        },
        {
          "text": "她沒說那句話是什麼。"
        },
        {
          "hide": "ting"
        },
        {
          "bg": "backgrounds/clepsydra-teahouse.png",
          "fx": "fade"
        },
        {
          "text": "一格用在刻漏茶室。老闆娘收了我一格時辰，換一句話。"
        },
        {
          "say": "坐。時辰是你的，茶是我的。",
          "who": "chashi"
        },
        {
          "say": "門換的是外頭的日曆，換不了你身上這口鐘。",
          "who": "chashi"
        },
        {
          "bg": "backgrounds/dead-letter-office.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "順路，我把口袋裡那封錯拿的信還回死信局，交到她手上。她的頭髮比上一窗長了些，過了肩。"
        },
        {
          "set": {
            "returned_letter": true
          }
        },
        {
          "text": "騎樓下，另一個遞信員彎著背趕過來，想接她手上的件。"
        },
        {
          "say": "我來就好，妳先坐——啊，不是，妳先忙。",
          "who": "mangzhong"
        },
        {
          "say": "我的件，我自己送。",
          "who": "man"
        },
        {
          "text": "她的語氣硬得反常。芒種愣在原地。我當時只當她敬業。"
        },
        {
          "hide": "man"
        },
        {
          "bg": "#000000",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "四格用完，我卻數回最前面。那天真正壓在我心上的，是清早那一格——我陪雁回送了一段名。"
        },
        {
          "text": "她把名字一個個唸給門聽，趕在名字沉光之前送還。走到一戶前，她回頭看我，像在等我先開口。"
        }
      ],
      "choices": [
        {
          "text": "初九。上次妳替我把攤價殺好了。",
          "to": "common-09-tinggate",
          "set": {
            "aff_yan": 3
          }
        },
        {
          "text": "又遇到妳了。今天真巧。",
          "to": "common-09-tinggate"
        },
        {
          "text": "今天的名單，要送哪幾家？",
          "to": "common-09-tinggate"
        }
      ]
    },
    "common-09-tinggate": {
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "aff_ting",
              "gte",
              2
            ]
          ],
          "goto": "common-09-tingup"
        },
        {
          "goto": "common-10a"
        }
      ]
    },
    "common-09-tingup": {
      "steps": [
        {
          "set": {
            "aff_ting": 3
          }
        }
      ],
      "next": "common-10a"
    },
    "common-10a": {
      "title": "匣，我不開",
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [
        {
          "char": "man",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "touch": [
        "man"
      ],
      "steps": [
        {
          "text": "第二天。我要辦這一窗真正的正事——求鐘匠開發條匣，找重上發條的辦法。"
        },
        {
          "hide": "man"
        },
        {
          "say": "匣，我不開。封它的人，手比我穩。",
          "who": "zhongjiang"
        },
        {
          "text": "他讓我看匣蓋內側——一行封印刻字。我認得那是阿公的手。"
        },
        {
          "text": "我不死心，一路追問到暮色。整個下午的時辰，就這樣燒在追問和碰壁裡。手上的時辰格，一格一格變灰。空手。"
        },
        {
          "bg": "backgrounds/dead-letter-office.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "死信局騎樓。小滿攔住我，雙手遞出一件——收件的老人住在城外線上，她自己趕不及清架的期限。"
        },
        {
          "say": "指名收件，本人簽收。這件，你替我跑一趟。",
          "who": "man"
        }
      ],
      "choices": [
        {
          "text": "好。這件，我送。",
          "to": "common-10",
          "set": {
            "aff_man": 3
          }
        },
        {
          "text": "我路不熟，怕誤了件。",
          "to": "common-10"
        },
        {
          "text": "妳跑得快，自己送較穩。",
          "to": "common-10"
        }
      ]
    },
    "common-10": {
      "title": "收窗趕門",
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [
        {
          "char": "man",
          "expr": "normal",
          "pos": "right"
        }
      ],
      "touch": [
        "man"
      ],
      "steps": [
        {
          "text": "件在我手上。她把它交出來的時候，沒有再檢查一遍。"
        },
        {
          "text": "暮末。發條快走完了——鐘樓底那道門廊的光，正在變薄。"
        },
        {
          "text": "城外線太遠，這一窗，我送不到了。門就要閉。"
        },
        {
          "text": "手裡還捏著那件。時間不夠了。"
        },
        {
          "timed": true,
          "timeLimit": 10,
          "timeoutOption": 2
        }
      ],
      "choices": [
        {
          "text": "把件塞回她手裡：「下一窗我補。」",
          "to": "common-11",
          "set": {
            "mem_w3_rush": 0
          }
        },
        {
          "text": "把件留在門房檯上。",
          "to": "common-11",
          "set": {
            "mem_w3_rush": 1
          }
        },
        {
          "text": "（僵在原地，被小滿拽著往門口跑。）",
          "to": "common-11",
          "set": {
            "mem_w3_rush": 2
          }
        }
      ]
    },
    "common-11": {
      "title": "定日場",
      "bg": "backgrounds/tower-base-door.png",
      "touch": [
        "ting",
        "man",
        "yan"
      ],
      "steps": [
        {
          "text": "門前。三個人都在。窗只剩最後一格。"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "say": "後日，聽證。表決那日，鐘的去留。",
          "who": "ting"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "清架的期限，後日。逾期就銷。",
          "who": "man"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "right"
          },
          "fx": "fade"
        },
        {
          "say": "送名的那一趟，你會來的。你已經來過了。",
          "who": "yan"
        },
        {
          "text": "三件事同時開口，要的都是我的下一窗。我只能對一個人，說出一個日期。"
        },
        {
          "text": "我學著把日子說成兩個鐘面各記各的——我的初三，是她們的後日一早。"
        },
        {
          "winEnd": true
        },
        {
          "set": {
            "tw_date": "月 8.1",
            "tw_left": "對年　剩 5 個月"
          }
        }
      ],
      "choices": [
        {
          "text": "後個月初三——聽證那日，我來。",
          "to": "ting-01",
          "set": {
            "route": "ting"
          },
          "if": {
            "flag": "aff_ting",
            "gte": 3
          }
        },
        {
          "text": "後個月初三——清架那日，我來。",
          "to": "man-01",
          "set": {
            "route": "man"
          },
          "if": {
            "flag": "aff_man",
            "gte": 3
          }
        },
        {
          "text": "後個月初三——送名那日，我來。",
          "to": "yan-01",
          "set": {
            "route": "yan"
          },
          "if": {
            "flag": "aff_yan",
            "gte": 3
          }
        },
        {
          "text": "……再看看。",
          "to": "end-common-normal",
          "set": {
            "route": "none"
          }
        },
        {
          "text": "不定日——這次，我有一筆要先還的數。",
          "to": "true-01",
          "set": {
            "route": "true"
          },
          "if": {
            "derive": "true_unlocked"
          }
        }
      ]
    },
    "end-common-normal": {
      "title": "再看看",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "steps": [
        {
          "text": "我沒有把哪一個日期，說給哪一個人聽。"
        },
        {
          "text": "三扇窗都留著，也就是一扇都沒進去。門前那三個人，各自回到各自的後日。"
        },
        {
          "text": "後房那口老掛鐘，還停在阿公斷氣的那一刻。我照舊每天拉開鐵捲門，照舊沒去動它。"
        },
        {
          "say": "錶走得慢不要緊，別讓它停了。",
          "who": "agong"
        },
        {
          "text": "我把這句記下來，卻始終沒替它上發條。日子照走，我只是看著。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "台灣，店裡。我的修錶單一疊，交期欄全空著。客人來取，我總說：再看看。"
        },
        {
          "text": "對年那日到了又過了。掛鐘沒響。我對誰都沒有說出第二句。"
        }
      ],
      "ending": {
        "id": "end-common-normal",
        "route": "none",
        "tier": "normal"
      }
    },
    "ting-01": {
      "title": "巡鐘同行",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "win": "W4",
          "price": "1 個月",
          "back": "月 10.2"
        },
        {
          "set": {
            "tw_date": "月 9.2"
          }
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。停擺的掛鐘前，我對它報出今天的日期——月曆上那個我親筆圈起來的初三，紅得刺眼。"
        },
        {
          "text": "開背蓋，鑰入槽。掌心壓著那顆黃銅齒輪一拍。上一圈，只上一圈。擺錘後的空腔亮起門廊。"
        },
        {
          "bg": "backgrounds/tower-base-door.png",
          "fx": "fade"
        },
        {
          "text": "鐘樓底。她已經在塔下——不迎、不問，只把巡鐘名冊多捲了一份，攏在手裡。我跟上；巡鐘的頭一段，要穿過市集。"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "s2",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "市集口，抱著件逆人流跑的小滿，為了撂一句話停了半步。"
        },
        {
          "say": "我送過幾百件，看人寫日期的手勢就知道——你這個日期，是寫給鐘樓的。去。我的路快，本來就無人陪得動。",
          "who": "man"
        },
        {
          "hide": "man"
        },
        {
          "text": "她說完就又跑遠了，比誰都快。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "穿過市集，到了塔區。第一座、第二座。她上油、聽音、對時。她做，不教；我看，不問。這是「順路」的邊界。"
        },
        {
          "text": "領工具時，庫房最裡那一格閃過眼角——局裡小輩說那格五十年沒人動過，繪聲繪影。她只給我一句規矩。"
        },
        {
          "say": "死人的話，我不替他走。",
          "who": "ting"
        },
        {
          "text": "往下一座鐘的路，又繞回市集邊。"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "text": "雁回逆著人流走來，像永遠在確認誰先到。她朝我記下一筆——她的「記」，是往還沒發生的明天記的。"
        },
        {
          "say": "定日那天的事沉下去之前，我記了一筆：你把下次，給了會敲鐘的人。……正好。我的每一個此刻，本來就留給路上的名字。",
          "who": "yan"
        },
        {
          "hide": "yan"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "gaze",
              "pos": "center"
            }
          ]
        },
        {
          "text": "回到塔區。午。她校音的時候，我不聲不響替第三座鐘上了油。"
        },
        {
          "text": "歇腳。我講起阿公——每朝拿起電話撥 117，說全店的錶都要聽它的。講的是阿公，不是我自己。"
        },
        {
          "deposit": "dep_ting2"
        },
        {
          "text": "她聽完，只把自己的錶往外戴了半指。沒說話。"
        },
        {
          "text": "巡到大鐘。她擦拭空了的亥時槌座。"
        },
        {
          "say": "在等一個修錶的。",
          "who": "ting",
          "expr": "gaze"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "sprite": {
            "char": "yiyuan",
            "expr": "normal",
            "pos": "right"
          },
          "fx": "fade"
        },
        {
          "text": "暮。議員當街攔下丈量的隊伍，聲量放到整條街都聽得見。"
        },
        {
          "say": "少一響，六百暝日。誰為此死過嗎？老古董就是老古董。",
          "who": "yiyuan"
        },
        {
          "say": "議員。",
          "who": "ting"
        },
        {
          "text": "她不接他的戰帖。稱謂就是她的不接。她照舊，往下一座鐘走。"
        },
        {
          "hide": "yiyuan"
        }
      ],
      "choices": [
        {
          "text": "「他們不懂妳看過的東西。」",
          "to": "ting-01-mid"
        },
        {
          "text": "「第三座鐘的油我上好了，走。」",
          "to": "ting-01-depA1"
        },
        {
          "text": "「今天別巡了，我陪妳歇一歇。」",
          "to": "ting-01-mid"
        }
      ]
    },
    "ting-01-depA1": {
      "bg": "backgrounds/ke-city-market.png",
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "deposit": "dep_ting1"
        },
        {
          "text": "她沒回頭，腳步卻慢了半拍，像把這句收進了名冊裡。"
        }
      ],
      "next": "ting-01-mid"
    },
    "ting-01-mid": {
      "bg": "#000000",
      "bgFx": "fade",
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "巡鐘的動線經過學徒墓。她指其中一座碑，語氣平常，像在報一座鐘的年份。"
        },
        {
          "say": "這個，說過「我會一直陪你」。",
          "who": "ting"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "暮末入夜。既定的路線走完了，她卻在一個往外環去的路口停了半步——那是一圈沒有鐘要巡的、無用的路。"
        }
      ],
      "choices": [
        {
          "text": "「那個議員，講話太過分了。」",
          "to": "ting-01-noaff"
        },
        {
          "text": "「妳的鐘看完了，先回吧。」",
          "to": "ting-01-noaff"
        },
        {
          "text": "（沉默——跟上她的腳步）",
          "to": "ting-01-yesaff",
          "set": {
            "aff_ting": 4
          }
        }
      ]
    },
    "ting-01-yesaff": {
      "bg": "backgrounds/ke-city-market.png",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "deposit": "dep_ting4"
        },
        {
          "text": "我沒問那圈有什麼用。她走，我就走。夜巡的燈把兩個影子拉得一樣長。"
        },
        {
          "text": "走完那一圈，她抬頭看了一眼塔頂那口大鐘，才開口。"
        },
        {
          "say": "明日同時辰。",
          "who": "ting"
        },
        {
          "text": "對一個活了三百刻年的人，最奢侈的動詞是「明天」。"
        }
      ],
      "next": "ting-02"
    },
    "ting-01-noaff": {
      "bg": "backgrounds/ke-city-market.png",
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "她照走那一圈。我站在路口，沒跟上。她沒有回頭，也沒有約下一次。"
        },
        {
          "text": "她抬頭看了一眼塔頂那口大鐘。"
        },
        {
          "say": "上面那口，聽證前要體檢。",
          "who": "ting"
        },
        {
          "text": "我說，修錶的手藝，派得上。"
        }
      ],
      "next": "ting-02"
    },
    "ting-02": {
      "title": "塔頂",
      "bg": "backgrounds/bell-tower.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "塔頂。電鐘聽證前，大鐘要體檢。我的手藝第一次不是為她私人做事，是為她的城。"
        },
        {
          "text": "機芯內部。兩雙手第一次在同一件機件上交錯——她報部件名，我報症狀，句子短得像工單。"
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "aff_ting",
              "gte",
              4
            ]
          ],
          "goto": "ting-02-full"
        },
        {
          "goto": "ting-02-weak"
        }
      ]
    },
    "ting-02-full": {
      "bg": "backgrounds/bell-tower.png",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "體檢畢。她沒有走。三百刻年裡她送走每一個會走的人，今夜她自己留了下來。"
        },
        {
          "sfx": "audio/movement.mp3"
        },
        {
          "text": "她取出值勤錶，翻開錶蓋，向我的懷錶對時。星光落在機芯上，只剩齒輪走時的細響。"
        },
        {
          "set": {
            "aff_ting": 5
          }
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "smile",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "她選的是我家的儀式。對時畢，她只說一句。"
        },
        {
          "say": "同一格。",
          "who": "ting",
          "expr": "smile"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "cut"
        }
      ],
      "next": "ting-02-choice"
    },
    "ting-02-weak": {
      "bg": "backgrounds/bell-tower.png",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "體檢畢。她把值勤錶收回袖裡，錶蓋半掩著，沒有翻開。"
        },
        {
          "text": "她看了一眼大鐘，像在確認我還隔著幾格。"
        }
      ],
      "next": "ting-02-choice"
    },
    "ting-02-choice": {
      "bg": "backgrounds/bell-tower.png",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "機芯還在走。她等我接一句話。"
        }
      ],
      "choices": [
        {
          "text": "「我永遠留在妳身邊。」",
          "to": "ting-02-react-a",
          "set": {
            "poison_ting": true
          },
          "add": {
            "trust_ting": -1
          }
        },
        {
          "text": "「六日之後，我再來。」",
          "to": "ting-02-react-b",
          "set": {
            "F2": true
          }
        },
        {
          "text": "「這鐘的擺，我調到走準。」",
          "to": "ting-02-react-c"
        }
      ]
    },
    "ting-02-react-a": {
      "bg": "backgrounds/bell-tower.png",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "她只把錶蓋闔上，沒有再說話。沒有責備，也沒有解釋。"
        },
        {
          "text": "這句話，她聽了一輩子。"
        }
      ],
      "next": "ting-02-out"
    },
    "ting-02-react-b": {
      "bg": "backgrounds/bell-tower.png",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "say": "妳這邊，明日一早。",
          "who": "hero"
        },
        {
          "text": "我沒有說永遠。承諾的單位不是永遠，是日期。她收錶入袋，錶蓋開著。"
        }
      ],
      "next": "ting-02-out"
    },
    "ting-02-react-c": {
      "bg": "backgrounds/bell-tower.png",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "她看了一眼大鐘，再看我，把錶收了。錶蓋半掩著。"
        }
      ],
      "next": "ting-02-out"
    },
    "ting-02-out": {
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "門廊。我要出窗了。"
        },
        {
          "say": "阿律。",
          "who": "ting"
        },
        {
          "text": "她第一次這樣叫我。"
        },
        {
          "winEnd": true
        },
        {
          "text": "門在背後合上，沒有聲音。懷錶的秒針還在走——它是我唯一帶得過門的東西。"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "set": {
            "tw_date": "月 10.2"
          }
        },
        {
          "text": "台灣。後房。日曆翻過六頁，什麼事也沒發生——對我是六天，對她是明天一早。"
        }
      ],
      "next": "ting-03"
    },
    "ting-03": {
      "title": "傳習日常",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "win": "W5",
          "price": "1 個月",
          "back": "月 11.4"
        },
        {
          "set": {
            "tw_date": "月 10.4"
          }
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。報日期時，牆上那行對年倒數的紅字進了鏡。壓掌、上圈、門開。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "守鐘技第一課。她的教法就是她的性格：不講原理，只做兩遍，第三遍換我的手。從頭到尾沒有一個「師徒」的字眼——破例，不承認為破例。"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "s2",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "text": "午。小滿把一封死信歸檔到鐘樓來，腳步沒停。"
        },
        {
          "say": "這件遲了幾百暝日。幫我簽收，我趕下一件。",
          "who": "man"
        },
        {
          "text": "歸檔的手續在眼前走了一遍。她簽完就走，沒有多留一句。"
        },
        {
          "hide": "man"
        }
      ],
      "choices": [
        {
          "text": "「後來，那個人怎麼了？」",
          "to": "ting-03-free"
        },
        {
          "text": "「那時候，妳笑出來了沒有？」",
          "to": "ting-03-free",
          "set": {
            "mem_ting_laugh": true
          }
        },
        {
          "text": "「這些事妳全記得，真不容易。」",
          "to": "ting-03-free"
        }
      ]
    },
    "ting-03-free": {
      "bg": "backgrounds/bell-tower.png",
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "暮。傳習的空檔，她讓我自己找點事做。"
        }
      ],
      "choices": [
        {
          "text": "去庫房，保養那只寄放的懷錶",
          "to": "ting-03-depA3"
        },
        {
          "text": "繞去刻漏茶室，探一探城裡的水聲",
          "to": "ting-03-mid"
        },
        {
          "text": "入城走走，看看別處",
          "to": "ting-03-mid",
          "set": {
            "seen_other": true
          }
        }
      ]
    },
    "ting-03-depA3": {
      "bg": "backgrounds/bell-tower.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "text": "庫房最裡那一格。我不問自取，把那只五十年沒動的懷錶拿到燈下。"
        },
        {
          "text": "上油、校準、讓它可以走——但不上發條。死人的話，我不替他走，只讓它有走的能力。"
        },
        {
          "deposit": "dep_ting3"
        },
        {
          "text": "鏡頭裡只有機芯與錶背。我沒有打開內蓋。"
        },
        {
          "text": "她在門口看見了，沒有進來，也沒有阻止。"
        }
      ],
      "next": "ting-03-mid"
    },
    "ting-03-mid": {
      "bg": "backgrounds/bell-tower.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "gaze",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "暮尾。塔頂聽音課的空檔，她忽然問了一句，問得像在對時。"
        },
        {
          "say": "你剩幾窗。",
          "who": "ting",
          "expr": "gaze"
        },
        {
          "text": "我答了。她把數字記走了，垂目看了看自己的錶。當下我只覺得她問得很自然。"
        },
        {
          "deposit": "dep_ting5"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "夜。她放下工具，問了那句她真正想問的。"
        },
        {
          "say": "你的日子，在那邊——是怎麼個走法？",
          "who": "ting"
        }
      ],
      "choices": [
        {
          "text": "全部說出來——匯率、剩幾窗、對年那天",
          "to": "ting-03-t1",
          "add": {
            "trust_ting": 1
          }
        },
        {
          "text": "含糊帶過",
          "to": "ting-03-t0"
        },
        {
          "text": "報幾個技術數字，把問題擋回去",
          "to": "ting-03-tlie",
          "add": {
            "trust_ting": -1
          },
          "set": {
            "mem_lie_ting": true
          }
        }
      ]
    },
    "ting-03-t1": {
      "bg": "backgrounds/bell-tower.png",
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "我把匯率、剩下的窗、對年那個硬日期，全攤給她。她先收下，沒有驚，才問細節。錶蓋開著。"
        }
      ],
      "next": "ting-03-a3"
    },
    "ting-03-t0": {
      "bg": "backgrounds/bell-tower.png",
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "我含糊帶過。她沒有追。錶蓋半掩著——只是往後，她試探的問句多了起來。"
        }
      ],
      "next": "ting-03-a3"
    },
    "ting-03-tlie": {
      "bg": "backgrounds/bell-tower.png",
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "我報了游絲、擒縱、快慢針——用錶的數據擋人的問題。她點頭，把錶蓋闔上了。"
        }
      ],
      "next": "ting-03-a3"
    },
    "ting-03-a3": {
      "bg": "backgrounds/bell-tower.png",
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "她教完一段鐘芯的聽音。天色晚了。"
        }
      ],
      "choices": [
        {
          "text": "「這手藝，不能就這樣失傳。」",
          "to": "ting-03-out"
        },
        {
          "text": "「明日同一時辰，教我下一段。」",
          "to": "ting-03-out",
          "set": {
            "mem_ting_next": true
          }
        },
        {
          "text": "「妳從前教過幾個人這個？」",
          "to": "ting-03-out"
        }
      ]
    },
    "ting-03-out": {
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "text": "出窗。發條的餘響在門後散盡，指節上還留著它的涼。"
        },
        {
          "winEnd": true
        },
        {
          "bg": "backgrounds/kitchen-taiwan.png",
          "fx": "fade"
        },
        {
          "set": {
            "tw_date": "月 11.4"
          }
        },
        {
          "text": "台灣。這邊又走掉了一個月。廚房，電鍋是空的——我不在的日子，沒人替阿嬤把湯留起來。接著是住院，是出院，是姑姑接手了日常。"
        },
        {
          "sprite": {
            "char": "gu",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "藥一天三次，你在的話，就你拿。對年怎麼辦，你自己想。",
          "who": "gu"
        },
        {
          "say": "……再看看。",
          "who": "hero"
        },
        {
          "hide": "gu"
        }
      ],
      "next": "ting-04"
    },
    "ting-04": {
      "title": "電鐘並行測試日",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "win": "W6",
          "price": "1 個月",
          "back": "月 12.7"
        },
        {
          "set": {
            "tw_date": "月 11.7"
          }
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。姑姑在。報日期時，出院的住院單據壓在日曆下，露出一角。我照上發條。不辯護，也不獨白。門開。"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "刻城。這一窗我循著鐘聲找到她時，城裡多了一座並行的電鐘。她照常巡鐘——巡一座活的，經過一座不用巡的。"
        },
        {
          "text": "入暮，她簽收測試公文，手勢和簽收死信歸檔一模一樣。她把自己的身分死亡預演，辦成了一道手續。"
        },
        {
          "text": "暮。大鐘停了。"
        },
        {
          "text": "全城無感。市聲照舊——這才是最狠的一層。"
        },
        {
          "text": "我站在停了的大鐘前。那句話自己浮上來，用的是阿公的原音。"
        },
        {
          "say": "錶走得慢不要緊，別讓它停了。",
          "who": "hero"
        },
        {
          "set": {
            "mem_anchor_said": true
          }
        },
        {
          "text": "她在旁邊，聽不懂，也沒問。"
        },
        {
          "bg": "#000000",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "text": "碑林。雁回來抄舊守鐘人的名。"
        },
        {
          "say": "今晚的名，比較好抄。",
          "who": "yan"
        },
        {
          "hide": "yan"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "她的世界自有因果，不繞我轉。擦身，就走了。"
        },
        {
          "text": "我和她並肩站在無聲的城裡。沒有話。"
        }
      ],
      "next": "ting-05"
    },
    "ting-05": {
      "title": "表決敗象",
      "bg": "backgrounds/bell-tower.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "gaze",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "同夜。工房的燈亮著——聽證的證詞還沒寫完。"
        },
        {
          "text": "我起草工法證言，她逐句刪，刪到只剩機件的事實。她不許我替她抒情。"
        },
        {
          "text": "議會傳來延會的消息，票數的風聲已經定了。她收筆。句子比平時更短。"
        },
        {
          "text": "聽證日在她的「後日」——換算過來，是我對年之後、下一窗之前的那一格。她沒有開口求，只把聽證的日期寫在紙上，推到證詞旁邊。"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "你回去。這裡的事，用不了你的窗。",
          "who": "ting"
        },
        {
          "text": "我忽然懂了「用不了你的窗」那份計算的精度是從哪裡來的——她從那堂傳習課起，就一直在替我算窗、替我省窗。"
        },
        {
          "deposit": "dep_ting5"
        },
        {
          "text": "修錶單自己翻了一頁，多出一行舊日期的字。這一分，是傳習那天她問「你剩幾窗」時，我沒察覺就付掉的。"
        },
        {
          "text": "趕門。出窗。"
        },
        {
          "winEnd": true
        },
        {
          "set": {
            "tw_date": "月 12.7"
          }
        }
      ],
      "next": "ting-06-open"
    },
    "ting-06-open": {
      "title": "靜置",
      "bg": "backgrounds/bell-tower.png",
      "bgFx": "fade",
      "bgm": null,
      "steps": [
        {
          "text": "刻城。三張空鏡：他的工作凳空著；她獨自走那圈無用的路，背影；擦得發亮的空槌座。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "台灣。對年在即。阿嬤出院回家，抬眼看我，喚不出我的名。"
        },
        {
          "say": "年輕人？",
          "who": "amah"
        },
        {
          "text": "我停了一拍，沒有糾正她。灶上的湯，照樣留著。"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "text": "後房。對年在即，鐘樓的聽證日也在紙上。背蓋旁邊，鑰匙就在那裡。"
        }
      ],
      "choices": [
        {
          "text": "「對年照日子辦。鐘的事，之後。」",
          "to": "ting-06-f1"
        },
        {
          "text": "（開背蓋——聽證日不等人）",
          "to": "ting-06-break",
          "set": {
            "mem_f1_break": true
          }
        }
      ]
    },
    "ting-06-f1": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "steps": [],
      "branch": [
        {
          "if": {
            "flag": "f1_vow",
            "eq": true
          },
          "to": "ting-06-f1ok"
        },
        {
          "to": "ting-06"
        }
      ]
    },
    "ting-06-f1ok": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "steps": [
        {
          "set": {
            "F1": true
          }
        },
        {
          "text": "我把手從背蓋旁移開。對年是既有的日子，不讓步。"
        }
      ],
      "next": "ting-06"
    },
    "ting-06-break": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgm": null,
      "steps": [
        {
          "text": "我走到後房，開了背蓋，鑰匙已經在指間——"
        },
        {
          "text": "然後我把鑰匙放回去，掌心離開。一拍。沒有話。日曆一個字也沒改。"
        }
      ],
      "next": "ting-06"
    },
    "ting-06": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [],
      "steps": [
        {
          "set": {
            "tw_date": "月 13.0"
          }
        },
        {
          "text": "對年。靈桌。掛鐘不走。我上香，不說話。"
        },
        {
          "say": "今天是什麼日子？",
          "who": "amah"
        },
        {
          "text": "我答不出第二句。"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "text": "對年夜。姑姑背身理著東西，忽然問了一句。"
        },
        {
          "say": "店裡這口鐘……你要自己修嗎？",
          "who": "gu"
        }
      ],
      "timed": true,
      "timeLimit": 8,
      "timeoutOption": 2,
      "choices": [
        {
          "text": "「後個月初三前，我修好。」",
          "to": "ting-07",
          "set": {
            "mem_gate_word": "a"
          }
        },
        {
          "text": "「我會處理。」",
          "to": "ting-07",
          "set": {
            "mem_gate_word": "b"
          }
        },
        {
          "text": "（沉默）",
          "to": "ting-07",
          "set": {
            "mem_gate_word": "c"
          }
        }
      ]
    },
    "ting-07": {
      "title": "來拿的人到了",
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "poison_ting",
              "eq",
              true
            ]
          ],
          "goto": "ting-07-poison"
        },
        {
          "when": [
            [
              "aff_ting",
              "eq",
              5
            ],
            [
              "trust_ting",
              "eq",
              0
            ]
          ],
          "goto": "ting-07-shut"
        },
        {
          "when": [
            [
              "aff_ting",
              "eq",
              5
            ],
            [
              "trust_ting",
              "gte",
              1
            ]
          ],
          "goto": "ting-07-std"
        },
        {
          "when": [
            [
              "aff_ting",
              "eq",
              4
            ]
          ],
          "goto": "ting-07-good"
        },
        {
          "goto": "ting-07-fb"
        }
      ]
    },
    "ting-07-std": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "win": "W7",
          "price": "1 個月",
          "back": "月 14.3"
        },
        {
          "set": {
            "tw_date": "月 13.3"
          }
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。報日期——這一次，我說得最清楚。對年翌日，我知道自己付的是什麼。香灰進了鏡。發條窗，最後一格。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "最後一班。第一座、第二座、第三座——第三座的油還在帳上。動線和第一天一模一樣。"
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "mem_ting_laugh",
              "eq",
              true
            ]
          ],
          "goto": "ting-07-std-laugh"
        },
        {
          "goto": "ting-07-std-tail"
        }
      ]
    },
    "ting-07-std-laugh": {
      "bg": "backgrounds/bell-tower.png",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "她又說起那個學徒。這次多說了半句——她記得我問過，那時候她笑出來了沒有。"
        }
      ],
      "next": "ting-07-std-tail"
    },
    "ting-07-std-tail": {
      "bg": "backgrounds/ke-city-market.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "午。我用剩下的時辰，一個人在城裡修復、藏下十七座小鐘，各設不同的鳴日。她不知道。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "text": "暮。工房。我開口，說我要學。"
        },
        {
          "say": "留不了幾天。",
          "who": "ting"
        },
        {
          "text": "我說，這只錶，等了五十年。「等」是我的用詞，不是她的。"
        },
        {
          "text": "她沉默了一拍。在她的鐘面上，那只是「前年寄的錶」；此刻，她第一次用我的鐘面看它。之後，她只把值勤錶收進袖中。"
        },
        {
          "text": "我遞上寫好的誓詞，把三百年拆成三十個十年，紙交到她手上。"
        },
        {
          "say": "我，然後我的徒弟，然後他的徒弟。",
          "who": "hero"
        },
        {
          "text": "誓詞末尾，是我的簽名。"
        },
        {
          "text": "她收下了。刻城的收徒禮，就是對時。她的第一個動作，是替大鐘上油。"
        },
        {
          "say": "我的學徒。",
          "who": "ting"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "cut"
        },
        {
          "text": "她只做一件事——把那只寄放了五十年的懷錶，闔著蓋，推過桌面。"
        },
        {
          "say": "來拿的人到了。",
          "who": "ting"
        },
        {
          "beat": true
        }
      ],
      "next": "ting-08"
    },
    "ting-07-shut": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "win": "W7",
          "price": "1 個月",
          "back": "月 14.3"
        },
        {
          "set": {
            "tw_date": "月 13.3"
          }
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。報日期，香灰進鏡。發條窗，最後一格。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "最後一班巡完。工房。我遞上誓詞。"
        },
        {
          "text": "她收下了。可是她沒有對時，也沒有推錶。"
        },
        {
          "text": "她把那只懷錶，連同寫著我名字的寄放單，一起放回櫃底，鎖上。"
        },
        {
          "say": "單子我留著。話，等它跟這只錶一樣會走了，再說。",
          "who": "ting"
        }
      ],
      "next": "ting-08"
    },
    "ting-07-good": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "win": "W7",
          "price": "1 個月",
          "back": "月 14.3"
        },
        {
          "set": {
            "tw_date": "月 13.3"
          }
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。報日期，香灰進鏡。發條窗，最後一格。"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "最後一班巡完。午。我用剩下的時辰，一個人在城裡藏下十七座小鐘，各設不同的鳴日。她不知道。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "text": "暮。工房。我開口要學。她的拒絕只有一句。"
        },
        {
          "say": "留不了幾天。",
          "who": "ting"
        },
        {
          "text": "我說，這只錶，等了五十年。她沉默了一拍。"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "cut"
        },
        {
          "text": "她把那只寄放了五十年的懷錶，闔著蓋，推過桌面。"
        },
        {
          "say": "來拿的人到了。",
          "who": "ting"
        }
      ],
      "next": "ting-08"
    },
    "ting-07-fb": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "win": "W7",
          "price": "1 個月",
          "back": "月 14.3"
        },
        {
          "set": {
            "tw_date": "月 13.3"
          }
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。報日期，香灰進鏡。發條窗，最後一格。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "工房。她把那只寄放了五十年的懷錶，闔著蓋，推過桌面。"
        },
        {
          "say": "來拿的人到了。",
          "who": "ting"
        },
        {
          "text": "之後，我只能回台。"
        }
      ],
      "next": "ting-08"
    },
    "ting-07-poison": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "win": "W7",
          "price": "1 個月",
          "back": "月 14.3"
        },
        {
          "set": {
            "tw_date": "月 13.3"
          }
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。報日期，香灰進鏡。發條窗，最後一格。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "工房。我開口要學。我遞上誓詞。"
        },
        {
          "text": "她把錶蓋闔上，一如那一夜。沒有對時，沒有推錶。"
        },
        {
          "text": "我留在門邊，她在鐘上。一夜，無話。"
        }
      ],
      "next": "ting-08"
    },
    "ting-08": {
      "title": "分岔",
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "text": "夜。門廊。發條剩下最後幾響。她不勸留，也不送行——只把巡鐘名冊往桌上多放了一份，另一份收回袖中。"
        },
        {
          "winEnd": true
        },
        {
          "set": {
            "tw_date": "月 14.3"
          }
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "aff_ting",
              "eq",
              5
            ],
            [
              "trust_ting",
              "gte",
              1
            ],
            [
              "F2",
              "eq",
              true
            ],
            [
              "dep_ting3",
              "eq",
              true
            ]
          ],
          "goto": "ting-08-choice"
        },
        {
          "goto": "ting-08-gate"
        }
      ]
    },
    "ting-08-choice": {
      "bg": "backgrounds/tower-base-door.png",
      "bgm": null,
      "touch": [
        "ting"
      ],
      "steps": [
        {
          "text": "選擇的重量，全在我。她不加一克。"
        }
      ],
      "choices": [
        {
          "text": "「鐘在這裡。我留下。」",
          "to": "ting-08-gate",
          "set": {
            "choice_ting_stay": true
          }
        },
        {
          "text": "「店在那裡。我回去。」",
          "to": "ting-08-gate"
        }
      ]
    },
    "ting-08-gate": {
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "poison_ting",
              "eq",
              true
            ]
          ],
          "goto": "end-ting-bad"
        },
        {
          "when": [
            [
              "aff_ting",
              "eq",
              5
            ],
            [
              "trust_ting",
              "eq",
              0
            ]
          ],
          "goto": "end-ting-shut"
        },
        {
          "when": [
            [
              "aff_ting",
              "eq",
              5
            ],
            [
              "trust_ting",
              "gte",
              1
            ],
            [
              "F2",
              "eq",
              true
            ],
            [
              "dep_ting3",
              "eq",
              true
            ],
            [
              "choice_ting_stay",
              "eq",
              true
            ]
          ],
          "goto": "end-ting-true"
        },
        {
          "when": [
            [
              "aff_ting",
              "gte",
              4
            ],
            [
              "trust_ting",
              "gte",
              1
            ]
          ],
          "goto": "end-ting-good"
        },
        {
          "when": [
            [
              "aff_ting",
              "eq",
              4
            ],
            [
              "trust_ting",
              "eq",
              0
            ]
          ],
          "goto": "end-ting-good",
          "variant": "downgrade"
        },
        {
          "goto": "end-ting-good",
          "variant": "fallback"
        }
      ]
    },
    "end-ting-true": {
      "title": "收徒禮・留下",
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "bgm": null,
      "steps": [
        {
          "text": "發條走完最後一圈。門死在我身後——我面朝鐘樓，沒有回頭看它熄滅。地上，兩個影子一樣長。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "台灣，一封給姑姑的信。出發前寫好的，攤在店裡桌上。她讀完，摺好，收進圍裙口袋。"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "text": "次年的靈桌。姑姑一個人上香。掛鐘在畫面角落，不走。"
        },
        {
          "text": "空店。停擺的鐘面。那件事，正式作廢了。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "text": "刻城。我寫好的家書，一封一封收在工房抽屜裡，永遠寄不出去，只能在亥時聽。"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "傳習日常，重演了一遍。這一次，她稱「我的學徒」，我稱「師父」。巡鐘、上油、對時——把三十個十年裡的第一個，走起來。"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "巡完鐘，我們多走那圈無用的路。這一次，兩個人。"
        }
      ],
      "ending": {
        "id": "end-ting-true",
        "route": "ting",
        "tier": "true",
        "cleared": "ting"
      }
    },
    "end-ting-good": {
      "steps": [],
      "branch": [
        {
          "if": {
            "flag": "end_variant",
            "eq": "fallback"
          },
          "to": "end-ting-good-fb"
        },
        {
          "if": {
            "flag": "end_variant",
            "eq": "downgrade"
          },
          "to": "end-ting-good-dg"
        },
        {
          "to": "end-ting-good-std"
        }
      ]
    },
    "end-ting-good-std": {
      "title": "十七座小鐘・回台",
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "bgm": null,
      "steps": [
        {
          "text": "門前。她不送行——「再見」是她不說的詞。她只把我的工具袋遞還，袋口多了一枚上了油的布卷。門死，發條末響。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "對年之後的店。修錶、顧灶、姑姑往來，日子的針腳密回來了。"
        },
        {
          "sfx": "audio/street-morning.mp3"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "刻城。最平常的一個清晨，市聲，蒸氣。城中第一座小鐘自鳴。她循聲找到它，開蓋，認出鐘芯的工法——和五十年前同一雙手教的。她沉默了第二拍。"
        },
        {
          "text": "她闔上小鐘的蓋，說給無人的街。"
        },
        {
          "say": "明日同時辰。",
          "who": "ting"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "我店裡的修錶單上，多了一行沒有客人的單。品名欄寫著：小鐘・之一。"
        }
      ],
      "ending": {
        "id": "end-ting-good",
        "route": "ting",
        "tier": "good",
        "cleared": "ting"
      }
    },
    "end-ting-good-dg": {
      "title": "十七座小鐘・回台",
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "bgm": null,
      "steps": [
        {
          "text": "門前。她把我的工具袋遞還，袋口多了一枚上了油的布卷。門死，發條末響。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "對年之後的店。修錶、顧灶，日子的針腳慢慢密回來。"
        },
        {
          "sfx": "audio/street-morning.mp3"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "刻城。一個平常的清晨，城中第一座小鐘自鳴。她循聲駐足——沒有開蓋。認不認得出，留在她自己心裡。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "我店裡的修錶單上，多了一行沒有客人的單：小鐘・之一。"
        }
      ],
      "ending": {
        "id": "end-ting-good",
        "route": "ting",
        "tier": "good",
        "cleared": "ting"
      }
    },
    "end-ting-good-fb": {
      "title": "回台",
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "bgm": null,
      "steps": [
        {
          "text": "門前。她把我的工具袋遞還。門死，發條末響。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "對年之後的店。修錶、顧灶、姑姑往來，日子照舊。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "text": "刻城。庫房那一格，寄放的懷錶已經還了，空著。一鏡頭。"
        }
      ],
      "ending": {
        "id": "end-ting-good",
        "route": "ting",
        "tier": "good",
        "cleared": "ting"
      }
    },
    "end-ting-bad": {
      "title": "同刻之後",
      "bg": "backgrounds/bell-tower.png",
      "bgFx": "fade",
      "bgm": null,
      "steps": [
        {
          "text": "我留下了——為了讓「我永遠留在你身邊」成為真話。那句話就是選項，五窗之前已經選了。"
        },
        {
          "text": "我守在鐘樓。我的手變舊，工具換了三代。很久，很久以後。我什麼也沒安排在自己身後：沒有學徒，沒有排程，沒有留給「之後」的一封信。"
        },
        {
          "text": "某個平常的值勤日之後，我的位置空了。"
        },
        {
          "text": "她重新封鐘拒世。城的鐘聲，自此由電鐘代打。她的戰爭，連輸的方式都被我改寫了。"
        },
        {
          "sprites": [
            {
              "char": "ting",
              "expr": "normal",
              "pos": "center"
            }
          ]
        },
        {
          "text": "她對著我留下的、什麼都沒寫的空桌，說出了我聽過她最長的一句。"
        },
        {
          "say": "你們的永遠，是我的一個下午。",
          "who": "ting"
        },
        {
          "say": "你把你的全部給我。然後呢？",
          "who": "ting"
        },
        {
          "bg": "backgrounds/kitchen-taiwan.png",
          "fx": "fade"
        },
        {
          "text": "台灣，無人知曉的店。姑姑收了店。阿嬤的湯，涼在鍋裡。我連台灣的「之後」，也沒有安排。"
        }
      ],
      "ending": {
        "id": "end-ting-bad",
        "route": "ting",
        "tier": "bad"
      }
    },
    "end-ting-shut": {
      "title": "寄放櫃",
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "bgm": null,
      "sprites": [
        {
          "char": "ting",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "門前。她來送了——站在第一天清晨的那個位置。錶蓋闔著。無話。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "text": "刻城，一鏡頭。寄放櫃的深處，兩張單據並排——一張寫著五十年前的名字，一張寫著我的。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "台灣，店裡。我的修錶單，交期欄仍然空著。"
        }
      ],
      "ending": {
        "id": "end-ting-shut",
        "route": "ting",
        "tier": "shut"
      }
    },
    "man-01": {
      "title": "補還代送",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "win": "W4",
          "price": "一個月",
          "back": "月 10.2"
        },
        {
          "set": {
            "tw_date": "月 10.2"
          }
        },
        {
          "text": "後房。桌上那本月曆，阿公親筆圈起的初三。我報出日期，把鑰放進槽裡，掌心壓上去，轉一圈。"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "門開了。沒有多說一句——這件事不需要說。"
        },
        {
          "bg": "backgrounds/tower-base-door.png",
          "fx": "fade"
        },
        {
          "text": "入窗的路上，先遇見兩個不跟我走的人。"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "say": "你把日期寫給了跑得最快的人。……對。日期就該給等不起的。我等得起。",
          "who": "ting"
        },
        {
          "hide": "ting",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "right"
          },
          "fx": "fade"
        },
        {
          "say": "定日那天的事沉下去之前，我記了一筆：你的下次，給了一個比你先到的人。……挺好。我的路上，名字比人多。",
          "who": "yan"
        },
        {
          "hide": "yan",
          "fx": "fade"
        },
        {
          "text": "她們各自轉身，都沒有回頭。我往晨市走去——今天這一窗，是留給小滿的。"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "晨市。小滿站在街口等我——她的眼角、她開口的聲線，比上一窗多了幾歲的痕。我看得出來，我沒說。"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "s2",
            "pos": "center"
          },
          "fx": "fade"
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "mem_w3_rush",
              "eq",
              0
            ]
          ],
          "goto": "man-01g0"
        },
        {
          "when": [
            [
              "mem_w3_rush",
              "eq",
              1
            ]
          ],
          "goto": "man-01g1"
        },
        {
          "goto": "man-01g2"
        }
      ]
    },
    "man-01g0": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "say": "上一窗你說『下一窗我補』。件呢。",
          "who": "man"
        }
      ],
      "next": "man-01b"
    },
    "man-01g1": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "say": "門房檯上那件，我收進來了。走。",
          "who": "man"
        }
      ],
      "next": "man-01b"
    },
    "man-01g2": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "say": "這次，換你跟上。",
          "who": "man"
        }
      ],
      "next": "man-01b"
    },
    "man-01b": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "那件是我上一窗放下的代送。收件的老人已經不在了——它成了死信。而死信的規矩，我一竅不通。"
        },
        {
          "say": "送不到的，登記、上架、等。",
          "who": "man"
        },
        {
          "text": "她說得像在報一件普通手續。跑件路上她從不讓步。"
        },
        {
          "say": "這條街，我沒輸過。",
          "who": "man"
        },
        {
          "text": "半路一陣雨，她拽我躲進屋簷。"
        },
        {
          "say": "連雨都比你慢。",
          "who": "man"
        }
      ],
      "choices": [
        {
          "text": "走堤防，趕得上第二件。",
          "to": "man-01c"
        },
        {
          "text": "繞市場，那攤蒸糕出爐了。",
          "to": "man-01c",
          "set": {
            "mem_man_market": true
          }
        },
        {
          "text": "件分我一半，各走一邊。",
          "to": "man-01c"
        }
      ]
    },
    "man-01c": {
      "bg": "backgrounds/dead-letter-office.png",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "門前。老人不在。她把規矩原價教給我，讓我親手把件送到、親手登記成死信——把來不及辦成手續，不辦成藉口。"
        },
        {
          "deposit": "dep_man5",
          "title": "補還的代送",
          "node": "man-01",
          "recall": "W3 放下的那件，親手送到、親手登記成死信——把來不及辦成手續，不辦成藉口。"
        },
        {
          "text": "架後隔著牆，有人喊了一聲：「使命必達——這件急件！」她應了一聲，接過件就走，跑進街裡，一眨眼沒了影。"
        },
        {
          "text": "回到櫃檯，我把 C9 那封歸還過的信遞回她掌心。"
        },
        {
          "say": "你拿走的，你自己歸架。",
          "who": "man"
        },
        {
          "text": "我照她教的手續，把那封信上了架。一件未結清的東西，結清了。"
        },
        {
          "say": "掛號寫的是條件，不是日子。時、地、人——條件沒到，就不算逾期，銷毀清單燒不到它。",
          "who": "man"
        },
        {
          "text": "她報著清架的進度，抬手比劃整面牆。鏡頭隨她的手，掃過最深的一排。"
        },
        {
          "say": "這面，剩三成。",
          "who": "man"
        },
        {
          "text": "她登記一件逾期件時，笑了一下。"
        },
        {
          "say": "我最羨慕會遲到的人。",
          "who": "man"
        },
        {
          "deposit": "dep_man3",
          "title": "最羨慕會遲到的人",
          "node": "man-01",
          "recall": "她登記逾期件時，笑著說的那句。"
        },
        {
          "text": "出局時，暮色壓下來。她回頭。"
        },
        {
          "say": "明天的頭一件，在河堤那頭。……你修錶的，手借我一晚。",
          "who": "man"
        }
      ],
      "next": "man-02"
    },
    "man-02": {
      "title": "修錶第一課",
      "bg": "backgrounds/dead-letter-office.png",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "死信局後間。夜課。我教她修錶——一門快不得的手藝，她人生第一次做慢的事。"
        },
        {
          "text": "她的手比腦快、腦比話快。零件一夾就過頭。這一步，要等它自己回正。"
        }
      ],
      "choices": [
        {
          "text": "這步可以省，我先幫妳調好。",
          "to": "man-02b"
        },
        {
          "text": "重來。這一步，就是要等。",
          "to": "man-02learn"
        },
        {
          "text": "妳手快，其實比我適合這行。",
          "to": "man-02b"
        }
      ]
    },
    "man-02learn": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "她第一次等一樣東西自己回正。她今天的步子，跟上了我的。"
        },
        {
          "deposit": "dep_man2",
          "title": "慢的第一課",
          "node": "man-02",
          "recall": "修錶課上她第一次等一樣東西自己回正。"
        },
        {
          "set": {
            "aff_man": 4
          }
        }
      ],
      "next": "man-02b"
    },
    "man-02b": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "夜課的空檔，她先把工作檯邊的位子擦好，推給我。"
        },
        {
          "say": "替你占位。我先到的。",
          "who": "man"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "hide": "man",
          "fx": "cut"
        },
        {
          "text": "夜歸的路上，我又數了一遍城裡的鐘。還是少一響。這回我沒停下腳步——原來我也習慣了。"
        },
        {
          "text": "發條走到底，我出窗。門後無聲，懷錶的秒針照走，台灣的日曆又自己厚了一個月。"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "win": "W5",
          "price": "一個月",
          "back": "月 10.4"
        },
        {
          "set": {
            "tw_date": "月 10.4"
          }
        },
        {
          "text": "後房。月曆上對年的紅字。我報日期、置鑰、壓掌、上一圈。"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "bg": "backgrounds/dead-letter-office.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "s2",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "W5 的清晨。櫃檯上，我昨夜留下的半修零件——自己回正了。"
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "dep_man2",
              "eq",
              true
            ]
          ],
          "goto": "man-02confess"
        },
        {
          "goto": "man-03"
        }
      ]
    },
    "man-02confess": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "她把它包成一件掛號，推過櫃檯。"
        },
        {
          "say": "這件，指名收件人只有你。",
          "who": "man"
        },
        {
          "text": "我簽收。沒有多說。"
        }
      ],
      "next": "man-03"
    },
    "man-03": {
      "title": "對時禮",
      "bg": "#000000",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "午。局裡風聲正緊，她盯著清單。銷毀令的傳言已經到了她耳裡。"
        }
      ],
      "choices": [
        {
          "text": "今天的件，明天也死不了。走。",
          "to": "man-03truancy"
        },
        {
          "text": "這批告急的，先清完。",
          "to": "man-03ice"
        }
      ]
    },
    "man-03truancy": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "我把清單從她手裡抽走。河堤看船，一個沒有用的下午。"
        },
        {
          "set": {
            "F3": true
          }
        },
        {
          "deposit": "dep_man1",
          "title": "蹺班・之一",
          "node": "man-03",
          "recall": "清單告急，他仍說走就走——河堤看船，一個沒有用的下午。"
        }
      ],
      "next": "man-03ice"
    },
    "man-03ice": {
      "bg": "backgrounds/ke-city-market.png",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "市場。她盯著別人排長隊買冰，腳沒停。"
        }
      ],
      "choices": [
        {
          "text": "先送完，回頭我買來給妳。",
          "to": "man-03c"
        },
        {
          "text": "排。輪到我們，剛好化一半。",
          "to": "man-03c",
          "set": {
            "mem_man_ice": true
          }
        },
        {
          "text": "我來排，妳去送，門口會合。",
          "to": "man-03c"
        }
      ]
    },
    "man-03c": {
      "bg": "backgrounds/dead-letter-office.png",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "趁她跑最後一趟短件，我在櫃檯投出一封指名掛號。收件欄：刻城・死信局・小滿收。"
        },
        {
          "text": "暮。她回櫃，在自己的櫃檯上，簽收人生第一封信。她把信收進貼身的件袋，沒有當場拆。"
        },
        {
          "deposit": "dep_man4",
          "title": "第一封信",
          "node": "man-03",
          "recall": "她在自己的櫃檯，簽收人生第一封信。"
        },
        {
          "text": "對時之前，她先開口。"
        },
        {
          "say": "對時之前，先講。你的錶，走的是哪邊的時刻？",
          "who": "man"
        }
      ],
      "choices": [
        {
          "text": "走那邊的。日子、剩幾窗、我要守的日子——帳全部攤給妳。",
          "to": "man-03rite-gate",
          "add": {
            "trust_man": 1
          }
        },
        {
          "text": "兩邊的錶，走法不太一樣。改天，我慢慢講。",
          "to": "man-03rite-gate"
        },
        {
          "text": "跟妳這只一樣，走這裡的時刻。",
          "to": "man-03rite-gate",
          "add": {
            "trust_man": -1
          },
          "set": {
            "mem_lie_man": true
          }
        }
      ]
    },
    "man-03rite-gate": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "dep_man2",
              "eq",
              true
            ]
          ],
          "goto": "man-03rite"
        },
        {
          "goto": "man-03makeup"
        }
      ]
    },
    "man-03rite": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "暮轉夜。兩只錶並排，逐格校到走同一個時刻。只有齒輪的聲音。"
        },
        {
          "sfx": "audio/gear.mp3"
        },
        {
          "set": {
            "rite_man": true,
            "aff_man": 5
          }
        },
        {
          "text": "禮成。刻城把這叫對時禮——她那邊的婚約。"
        }
      ],
      "next": "man-03close"
    },
    "man-03makeup": {
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "對時禮沒有開場。她把我沒教完的那一步，自己走給我看——修她那只故意不修完的錶，等零件回正。"
        },
        {
          "text": "零件回正了。她把錶包成一件掛號，推過來。"
        },
        {
          "say": "這件，指名收件人只有你。",
          "who": "man"
        },
        {
          "deposit": "dep_man2",
          "title": "慢的第一課",
          "node": "man-03",
          "recall": "修錶課上她第一次等一樣東西自己回正。"
        },
        {
          "set": {
            "aff_man": 4
          }
        },
        {
          "text": "告白遲了一窗。兩只錶終究沒能校成同一個時刻。"
        }
      ],
      "next": "man-03close"
    },
    "man-03close": {
      "bg": "backgrounds/dead-letter-office.png",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s2",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "夜。死信局例行校時，聽鐘上門。她校完局裡的鐘，看一眼並排的兩只錶。"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "say": "這兩只，不用我校。",
          "who": "ting"
        },
        {
          "hide": "ting",
          "fx": "fade"
        },
        {
          "text": "小滿攤開自己的里程碑，往我的窗上排。"
        },
        {
          "say": "我變老那天，你來。",
          "who": "man"
        },
        {
          "beat": true
        },
        {
          "text": "出窗送行。她把件袋換到左肩。"
        },
        {
          "say": "下一站，我先到。",
          "who": "man"
        },
        {
          "hide": "man",
          "fx": "fade"
        },
        {
          "text": "門在背後合上，秒針照走。我帶回台灣的，只有又老了一個月的日曆。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "回台。廚房那鍋湯是空的——我又晚了一個月。當天夜裡，阿嬤住了院。"
        }
      ],
      "next": "man-04"
    },
    "man-04": {
      "title": "銷毀令",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "win": "W6",
          "price": "一個月",
          "back": "月 11.7"
        },
        {
          "set": {
            "tw_date": "月 11.7"
          }
        },
        {
          "text": "後房。報日期的聲音，比前五場都清楚——我學會認帳了。住院單據壓在桌角，一瞬入鏡。我報日期、置鑰、壓掌、上一圈。門開。"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "bg": "backgrounds/dead-letter-office.png",
          "fx": "fade"
        },
        {
          "text": "刻城。我直奔死信局——銷毀令貼在架前，她站在架與令之間。今天她扶著櫃沿站——髮半白了。我認出她的那半拍，慢了。"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "s3",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "局長從高窗那頭走來，剪影壓在令紙上。"
        },
        {
          "say": "你送到過一封幾百暝日的。結果呢。",
          "who": "juzhang"
        },
        {
          "say": "逾期件放久了，會變成刀。銷毀，是替寫的人止血。",
          "who": "juzhang"
        },
        {
          "text": "「來不及」三個字她永遠不出口，一律說「逾期」。她整理架格的手，第一次停在半途。"
        }
      ],
      "choices": [
        {
          "text": "清單給我一半，我替妳跑完。",
          "to": "man-04poison"
        },
        {
          "text": "架讓我拆一層，重新編過。",
          "to": "man-04fix"
        },
        {
          "text": "今天的件先送完，令的事明天想。",
          "to": "man-04mid"
        }
      ]
    },
    "man-04poison": {
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "set": {
            "poison_man": true
          }
        },
        {
          "say": "好啊。",
          "who": "man"
        },
        {
          "text": "她笑著，把清單分了我一半。那笑跟平常一樣。"
        }
      ],
      "next": "man-04c"
    },
    "man-04fix": {
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "我用修錶人的方式解題：不清架，修架。拆一層、重新編號，換出空位。"
        },
        {
          "say": "架清空那天，你來找我。我把『死信』兩個字還你。",
          "who": "juzhang"
        }
      ],
      "next": "man-04c"
    },
    "man-04mid": {
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "今天的件先送完。架的危機，懸在那裡。"
        }
      ],
      "next": "man-04c"
    },
    "man-04c": {
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "雁回來查一份查無此人的退件名單。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "right"
          },
          "fx": "fade"
        },
        {
          "say": "你們架上的名字，有幾個我還記得。抄給我。",
          "who": "yan"
        },
        {
          "hide": "yan",
          "fx": "fade"
        },
        {
          "text": "入夜，局裡點燈趕件。她把今晚最後一條路線指給我看。"
        },
        {
          "say": "跟上。這條，我跑了一生。",
          "who": "man"
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "poison_man",
              "eq",
              true
            ]
          ],
          "goto": "man-05poison"
        },
        {
          "goto": "man-05"
        }
      ]
    },
    "man-05": {
      "title": "第一次遲到",
      "bg": "backgrounds/ke-city-market.png",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "夜。這條路線她閉著眼都會走，可是身體跟不上圖了。她換手提袋的次數，比誰都多。"
        }
      ],
      "choices": [
        {
          "id": 0,
          "text": "接過件袋、替她跑完最後一段。",
          "to": "man-05b",
          "set": {
            "mem_man_late": 0
          }
        },
        {
          "id": 1,
          "text": "攔住她：「先坐。」",
          "to": "man-05b",
          "set": {
            "mem_man_late": 1
          }
        },
        {
          "id": 2,
          "text": "陪她站著。",
          "to": "man-05b",
          "set": {
            "mem_man_late": 2
          }
        }
      ],
      "timed": true,
      "timeLimit": 8,
      "timeoutOption": 2
    },
    "man-05b": {
      "bg": "backgrounds/ke-city-market.png",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "巷口。約定的時刻已經過了。那盞燈先在——收件的老婦提著燈，等她。使命必達的她，第一次遲到。"
        },
        {
          "text": "交件、簽收。老婦只說了句家常，慢慢來的意思。"
        },
        {
          "text": "樂聲收了。整條巷靜下來。"
        },
        {
          "hide": "man",
          "fx": "fade"
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "mem_man_late",
              "eq",
              1
            ]
          ],
          "goto": "man-05cry1"
        },
        {
          "when": [
            [
              "mem_man_late",
              "eq",
              2
            ]
          ],
          "goto": "man-05cry2"
        },
        {
          "goto": "man-05cry0"
        }
      ]
    },
    "man-05cry0": {
      "sprites": [],
      "steps": [
        {
          "text": "她低頭，對著自己的件袋。"
        },
        {
          "say": "今天……第一次，有人比我先到。",
          "who": "man"
        },
        {
          "beat": true
        },
        {
          "beat": true
        }
      ],
      "next": "man-05c"
    },
    "man-05cry1": {
      "sprites": [],
      "steps": [
        {
          "text": "她抬頭，看著我。"
        },
        {
          "say": "今天……第一次，有人比我先到。",
          "who": "man"
        },
        {
          "beat": true
        },
        {
          "beat": true
        }
      ],
      "next": "man-05c"
    },
    "man-05cry2": {
      "sprites": [],
      "steps": [
        {
          "text": "她轉向整條街，對著誰都不是的方向。"
        },
        {
          "say": "今天……第一次，有人比我先到。",
          "who": "man"
        },
        {
          "beat": true
        },
        {
          "beat": true
        }
      ],
      "next": "man-05c"
    },
    "man-05c": {
      "bg": "backgrounds/ke-city-market.png",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "騎樓下，她站定不動。"
        }
      ],
      "choices": [
        {
          "text": "不算遲。件到了，就算到了。",
          "to": "man-05d"
        },
        {
          "text": "（沉默）",
          "to": "man-05stall",
          "set": {
            "mem_man_stall": true
          }
        },
        {
          "text": "明天這條路，我陪妳再跑一遍。",
          "to": "man-05d"
        }
      ]
    },
    "man-05stall": {
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "我沒說話。過了一會兒，她把件袋交到我手上——使命第一次出手。"
        }
      ],
      "next": "man-05d"
    },
    "man-05d": {
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "對著步速歸零的她，阿公那句話在我腦裡響起，仍是原來的聲音——「錶走得慢不要緊，別讓它停了。」我沒有說出口。說這話的人，換了位置。"
        },
        {
          "text": "局裡的燈下，她伏在案上寫著什麼。我沒看清，也沒問。背景裡，只有那一下。"
        },
        {
          "text": "出窗前，她攤著清架的期限。"
        },
        {
          "say": "下一批的期限，在你的下一趟之前。",
          "who": "man"
        },
        {
          "hide": "man",
          "fx": "fade"
        }
      ],
      "next": "man-06"
    },
    "man-05poison": {
      "title": "第一次遲到（改道）",
      "bg": "backgrounds/dead-letter-office.png",
      "bgFx": "fade",
      "sprites": [
        {
          "char": "man",
          "expr": "s3",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "清單提前清空了。她站在一整面空架前面。"
        },
        {
          "say": "你把我當一件要準時送達的包裹。",
          "who": "man"
        },
        {
          "text": "她把我寄給她的那封信退回我手上。退件戳蓋在上頭：查無此人。"
        },
        {
          "hide": "man",
          "fx": "fade"
        }
      ],
      "next": "man-06"
    },
    "man-06": {
      "title": "靜置",
      "bg": "backgrounds/dead-letter-office.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "死信局。她的格位空著。"
        },
        {
          "beat": true
        },
        {
          "text": "櫃檯上，我寄的那封信，還立在原處。"
        },
        {
          "beat": true
        },
        {
          "text": "沒有人再喊「使命必達」——連局長也不喊了。"
        },
        {
          "beat": true
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "台灣。日曆的紅字逼近。姑姑張羅著對年的流程，問起店裡往後的打算。"
        },
        {
          "sprite": {
            "char": "gu",
            "expr": "normal",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "say": "對年怎麼辦，你自己想。我就問這一次。",
          "who": "gu"
        },
        {
          "say": "……再看看。",
          "who": "hero"
        },
        {
          "hide": "gu",
          "fx": "fade"
        },
        {
          "text": "她只把「上香」那一格，留給我。"
        }
      ],
      "choices": [
        {
          "text": "（把鑰放回抽屜）",
          "to": "man-06vow"
        },
        {
          "text": "（現在就上發條）",
          "to": "man-06break",
          "set": {
            "mem_f1_break": true
          }
        }
      ]
    },
    "man-06vow": {
      "sprites": [],
      "steps": [],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "f1_vow",
              "eq",
              true
            ]
          ],
          "goto": "man-06f1"
        },
        {
          "goto": "man-06plain"
        }
      ]
    },
    "man-06f1": {
      "sprites": [],
      "steps": [
        {
          "set": {
            "F1": true
          }
        },
        {
          "text": "鑰放回抽屜。對年那日，我要在。"
        }
      ],
      "next": "man-06d"
    },
    "man-06plain": {
      "sprites": [],
      "steps": [
        {
          "text": "鑰放回抽屜。"
        }
      ],
      "next": "man-06d"
    },
    "man-06break": {
      "sprites": [],
      "steps": [
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "text": "我走到後房，開了背蓋。鑰已經在指間。"
        },
        {
          "beat": true
        },
        {
          "text": "然後我把鑰放回，掌心離開。日曆沒有改。"
        }
      ],
      "next": "man-06d"
    },
    "man-06d": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "set": {
            "tw_date": "月 13.0"
          }
        },
        {
          "text": "對年。掛鐘不走。我上香，沒有說話。"
        },
        {
          "sprite": {
            "char": "amah",
            "expr": "normal",
            "pos": "right"
          },
          "fx": "fade"
        },
        {
          "say": "今天是什麼日子？",
          "who": "amah"
        },
        {
          "text": "我答不出第二句。"
        },
        {
          "hide": "amah",
          "fx": "fade"
        },
        {
          "text": "前夜。姑姑背著身，問了一句。"
        },
        {
          "sprite": {
            "char": "gu",
            "expr": "normal",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "say": "店裡這口鐘……你要自己修嗎？",
          "who": "gu"
        }
      ],
      "choices": [
        {
          "id": "a",
          "text": "後個月初三前，我修好。",
          "to": "man-07",
          "set": {
            "mem_gate_word": "a"
          }
        },
        {
          "id": "b",
          "text": "我會處理。",
          "to": "man-07",
          "set": {
            "mem_gate_word": "b"
          }
        },
        {
          "id": "c",
          "text": "（沉默）",
          "to": "man-07",
          "set": {
            "mem_gate_word": "c"
          }
        }
      ],
      "timed": true,
      "timeLimit": 8,
      "timeoutOption": 2
    },
    "man-07": {
      "title": "最後一程",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "win": "W7",
          "price": "一個月",
          "back": "月 14.3"
        },
        {
          "set": {
            "tw_date": "月 13.3"
          }
        },
        {
          "text": "對年翌日。香灰入鏡。報日期這一次，一字不含糊。這圈上完，剩零——圈盡門死的最後一窗。"
        },
        {
          "add": {
            "spring": -1
          }
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "poison_man",
              "eq",
              true
            ]
          ],
          "goto": "man-07poison"
        },
        {
          "when": [
            [
              "aff_man",
              "eq",
              5
            ],
            [
              "trust_man",
              "eq",
              0
            ]
          ],
          "goto": "man-07shut"
        },
        {
          "when": [
            [
              "aff_man",
              "eq",
              3
            ]
          ],
          "goto": "man-07fallback"
        },
        {
          "goto": "man-07std"
        }
      ]
    },
    "man-07std": {
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "晨。約好的門廊沒有人。我往死信局走到半路——她的格位，此刻我才知道，是空的。"
        },
        {
          "text": "迎面一個佝著背趕路的人，油紙束抱得死緊，差點撞上我，反射先賠了個不是。"
        },
        {
          "sprite": {
            "char": "mangzhong",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "對不住、對不住——啊，不是……",
          "who": "mangzhong"
        },
        {
          "text": "他想起正事，把懷裡那束以油紙紮好的信遞正。"
        },
        {
          "say": "她只交代一句：這件，不准遲到。",
          "who": "mangzhong"
        },
        {
          "text": "封面上一行字。"
        },
        {
          "say": "慢慢拆。反正我先到了。",
          "who": "man"
        },
        {
          "text": "我簽收。她教過的手續，這次輪到我簽。"
        },
        {
          "say": "不是我替她送。是她派我的。",
          "who": "mangzhong"
        },
        {
          "hide": "mangzhong",
          "fx": "fade"
        },
        {
          "text": "他說完就走，沒有陪站。"
        },
        {
          "text": "門邊。我坐下，只把整束信按日期理了一遍——她教的手續，是我唯一會的送別。一封也沒拆。"
        },
        {
          "text": "夜。出窗前，我回頭看了一眼死信局的方向。燈照常亮，架照常滿，只是沒人再喊那四個字。"
        }
      ],
      "next": "man-08"
    },
    "man-07shut": {
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "門廊沒有人。芒種把信束遞來——每一封都沒有封緘、沒有日期，散裝在一個袋子裡。"
        },
        {
          "sprite": {
            "char": "mangzhong",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "袋口夾著一張條子。"
        },
        {
          "say": "掛號要寫寄件人剩幾日。你從來不肯寫，我也就不寫了。",
          "who": "man"
        },
        {
          "hide": "mangzhong",
          "fx": "fade"
        }
      ],
      "next": "man-08"
    },
    "man-07fallback": {
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "門廊沒有人。沒有信束。芒種遞來一張結案憑單，和一封信——我寄出的那封，她的回信。"
        },
        {
          "sprite": {
            "char": "mangzhong",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "hide": "mangzhong",
          "fx": "fade"
        }
      ],
      "next": "man-08"
    },
    "man-07poison": {
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "門廊沒有人。沒有信束。只有一張局長開立的結案憑單，上頭四個字：全數送達。"
        },
        {
          "sprite": {
            "char": "mangzhong",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "cut"
        },
        {
          "text": "芒種把單子遞來，沒有說話。"
        },
        {
          "hide": "mangzhong",
          "fx": "cut"
        }
      ],
      "next": "man-08"
    },
    "man-08": {
      "title": "分岔",
      "bg": "backgrounds/tower-base-door.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "夜。入門。門在我身後死去，門廊的燈熄了。"
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "poison_man",
              "eq",
              true
            ]
          ],
          "goto": "end-man-bad"
        },
        {
          "when": [
            [
              "aff_man",
              "eq",
              5
            ],
            [
              "trust_man",
              "eq",
              0
            ]
          ],
          "goto": "end-man-shut"
        },
        {
          "when": [
            [
              "aff_man",
              "eq",
              5
            ],
            [
              "trust_man",
              "gte",
              1
            ],
            [
              "F3",
              "eq",
              true
            ],
            [
              "rite_man",
              "eq",
              true
            ]
          ],
          "goto": "end-man-true"
        },
        {
          "when": [
            [
              "aff_man",
              "gte",
              4
            ],
            [
              "trust_man",
              "gte",
              1
            ]
          ],
          "goto": "end-man-good"
        },
        {
          "when": [
            [
              "aff_man",
              "eq",
              4
            ],
            [
              "trust_man",
              "eq",
              0
            ]
          ],
          "goto": "end-man-good",
          "variant": "downgrade"
        },
        {
          "goto": "end-man-good",
          "variant": "fallback"
        }
      ]
    },
    "end-man-true": {
      "title": "對時禮・整束信",
      "bg": "backgrounds/watch-shop-day.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "回台。對年翌日。櫃檯上，兩只走同一個時刻的錶，並排擺著。哪一只是誰的，沒有標。"
        },
        {
          "set": {
            "cleared_man": true
          }
        },
        {
          "text": "此後每年生日，拆一封。字跡一年比一年老。"
        }
      ],
      "next": "end-man-true-2"
    },
    "end-man-true-2": {
      "sprites": [],
      "steps": [
        {
          "letter": {
            "lines": [
              "河堤。第三號船沒來。",
              "那個下午，我們什麼都沒做。",
              "這一格，我記得最清楚。"
            ],
            "age": 0,
            "half": false
          }
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "mem_man_market",
              "eq",
              true
            ]
          ],
          "goto": "end-man-true-mkt"
        },
        {
          "goto": "end-man-true-iceq"
        }
      ]
    },
    "end-man-true-mkt": {
      "sprites": [],
      "steps": [
        {
          "letter": {
            "lines": [
              "繞市場那趟，蒸糕剛出爐。",
              "你買了兩塊，一塊涼了才想起分我。"
            ],
            "age": 0,
            "half": false
          }
        }
      ],
      "next": "end-man-true-iceq"
    },
    "end-man-true-iceq": {
      "sprites": [],
      "steps": [],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "mem_man_ice",
              "eq",
              true
            ]
          ],
          "goto": "end-man-true-ice"
        },
        {
          "goto": "end-man-true-3"
        }
      ]
    },
    "end-man-true-ice": {
      "sprites": [],
      "steps": [
        {
          "letter": {
            "lines": [
              "那支冰，排到我們，剛好化一半。"
            ],
            "age": 1,
            "half": false
          }
        }
      ],
      "next": "end-man-true-3"
    },
    "end-man-true-3": {
      "sprites": [],
      "steps": [
        {
          "letter": {
            "lines": [
              "修錶第一課：這步，就是要等。",
              "我學會了。",
              "你呢。"
            ],
            "age": 1,
            "half": false
          }
        }
      ],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "mem_man_stall",
              "eq",
              true
            ]
          ],
          "goto": "end-man-true-stall"
        },
        {
          "goto": "end-man-true-4"
        }
      ]
    },
    "end-man-true-stall": {
      "sprites": [],
      "steps": [
        {
          "letter": {
            "lines": [
              "騎樓那晚。",
              "你接住的，不是我的袋子。"
            ],
            "age": 2,
            "half": false
          }
        }
      ],
      "next": "end-man-true-4"
    },
    "end-man-true-4": {
      "sprites": [],
      "steps": [
        {
          "letter": {
            "lines": [
              "我最羨慕會遲到的人。"
            ],
            "age": 2,
            "half": false
          }
        }
      ],
      "next": "end-man-true-5"
    },
    "end-man-true-5": {
      "sprites": [],
      "steps": [
        {
          "letter": {
            "lines": [
              "這一封，寫給你——"
            ],
            "age": 3,
            "half": true
          }
        }
      ],
      "next": "end-man-true-fin"
    },
    "end-man-true-fin": {
      "bg": "backgrounds/watch-shop-day.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "她一生在問：來不及的話，該不該送到。這一束信，沒有一句回答。"
        },
        {
          "text": "櫃檯上，兩只錶仍走著同一個時刻。"
        },
        {
          "sfx": "audio/tick.mp3"
        }
      ],
      "ending": {
        "id": "end-man-true",
        "route": "man",
        "tier": "true",
        "cleared": "man"
      }
    },
    "end-man-good": {
      "title": "遲一窗的告白",
      "bg": "backgrounds/watch-shop-day.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [],
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "end_variant",
              "eq",
              "downgrade"
            ]
          ],
          "goto": "end-man-good-reduced"
        },
        {
          "when": [
            [
              "end_variant",
              "eq",
              "fallback"
            ]
          ],
          "goto": "end-man-good-reduced"
        },
        {
          "goto": "end-man-good-full"
        }
      ]
    },
    "end-man-good-full": {
      "bg": "backgrounds/watch-shop-day.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "回台。告白遲了一窗，對時禮沒能完成。"
        },
        {
          "set": {
            "cleared_man": true
          }
        },
        {
          "text": "信束比整束的薄——少的，正是最前面那幾封。她最早想寫的日子，來不及成為可寫的日子。"
        },
        {
          "text": "此後每年生日，拆一封。字跡一年比一年老。"
        },
        {
          "letter": {
            "lines": [
              "修錶第一課：這步，就是要等。",
              "我學晚了。",
              "但我學會了。"
            ],
            "age": 1,
            "half": false
          }
        },
        {
          "letter": {
            "lines": [
              "我最羨慕會遲到的人。"
            ],
            "age": 2,
            "half": false
          }
        },
        {
          "letter": {
            "lines": [
              "這一封，寫給你——"
            ],
            "age": 3,
            "half": true
          }
        },
        {
          "text": "半行之後，沒有下文。剩下的，由我補。"
        }
      ],
      "ending": {
        "id": "end-man-good",
        "route": "man",
        "tier": "good",
        "cleared": "man"
      }
    },
    "end-man-good-reduced": {
      "bg": "backgrounds/watch-shop-day.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "text": "回台。桌上一張結案憑單，一封信——我寄出的那封，她的回信。"
        },
        {
          "text": "我拆開。只有一封。沒有往後的每一年。"
        }
      ],
      "ending": {
        "id": "end-man-good",
        "route": "man",
        "tier": "good"
      }
    },
    "end-man-bad": {
      "title": "全部送達",
      "bg": "backgrounds/watch-shop-day.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "set": {
            "cleared_man": false
          }
        },
        {
          "text": "清單清空了。她準時走完，履歷完美。"
        },
        {
          "text": "門前沒有信束——只有一張局長開立的結案憑單：全數送達。"
        },
        {
          "text": "桌上唯一的遺物，是被退回的那封信。退件戳：查無此人。"
        }
      ],
      "ending": {
        "id": "end-man-bad",
        "route": "man",
        "tier": "bad"
      }
    },
    "end-man-shut": {
      "title": "不掛號",
      "bg": "backgrounds/watch-shop-day.png",
      "bgFx": "fade",
      "sprites": [],
      "steps": [
        {
          "set": {
            "cleared_man": false
          }
        },
        {
          "text": "散裝的信，傾在櫃檯上。每一封都沒有封緘、沒有日期。"
        },
        {
          "text": "袋口那張條子：「掛號要寫寄件人剩幾日。你從來不肯寫，我也就不寫了。」"
        },
        {
          "text": "沒有日期，就無法一年拆一封。我一次擁有了全部——等於永遠失去一年一封的她。"
        }
      ],
      "ending": {
        "id": "end-man-shut",
        "route": "man",
        "tier": "shut"
      }
    },
    "yan-01": {
      "title": "送名同行",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "sprites": [],
      "touch": [
        "yan"
      ],
      "steps": [
        {
          "win": "W4",
          "price": "1 個月",
          "back": "月 10.2"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "set": {
            "tw_date": "月 9.2",
            "tw_left": "距對年約四個月"
          }
        },
        {
          "text": "後房沒有開燈。我把鑰匙擺在齒輪上，掌心壓下去，一圈。門開之前，先報日期。"
        },
        {
          "say": "今天……後個月初三。",
          "who": "hero"
        },
        {
          "text": "五年來，我第一次把一個日子說得這麼完整——不是「再看看」，不是「好了我叫你」，是初三。月曆上那格，我親手圈過。"
        },
        {
          "text": "阿嬤從廚房探頭，把我看成另一個人：「添發，湯在電鍋。」我沒有糾正她。有些認錯，糾正了反而更冷。"
        },
        {
          "bg": "backgrounds/tower-base-door.png",
          "fx": "fade"
        },
        {
          "text": "鐘樓底下，聽鐘在階上等日光。她沒有跟我走，只留下一句。"
        },
        {
          "say": "你把日期給了一個留不住日期的人。……那更要有人替她記得。去。",
          "who": "ting",
          "expr": "normal"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "街口，小滿抱著件袋逆著人流跑，經過我身邊沒停步，只把話甩過來。"
        },
        {
          "say": "我看人寫日期就知道——你這個日期，她明日就不記得了，你還是寫了。",
          "who": "man",
          "expr": "s2"
        },
        {
          "say": "這種件，我們局裡叫死信。可是你照寄。我懂了。",
          "who": "man",
          "expr": "s2"
        },
        {
          "hide": "man"
        },
        {
          "text": "巷底，雁回背著晨光站著，像永遠在回頭確認誰先到。她看見我，開口。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        }
      ],
      "choices": [
        {
          "text": "初五。上次妳教我認星曆塔的舊字。",
          "to": "yan-01-c0a"
        },
        {
          "text": "早。今天名單上是哪幾戶要走？",
          "to": "yan-01-c0b"
        },
        {
          "text": "妳記得我吧？前幾日才見過的。",
          "to": "yan-01-c0c"
        }
      ]
    },
    "yan-01-c0a": {
      "steps": [
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "……嗯。舊字認得慢，你倒背下來了。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她沒有問我怎麼會知道那天。她只是把我報的日期收下——像收下一件她自己不記得寄過、卻確實是她字跡的東西。"
        },
        {
          "deposit": "dep_yan1"
        }
      ],
      "next": "yan-01-mid"
    },
    "yan-01-c0b": {
      "steps": [
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "……名單。也好。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她把我當成一個來幫忙的同事。同事不必報日期——同事本來就活在同一天。"
        }
      ],
      "next": "yan-01-mid"
    },
    "yan-01-c0c": {
      "steps": [
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "她的臉空了一拍。"
        },
        {
          "say": "……嗯。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "考她的記憶，是這條路上最不該做的事。我把問句嚥回去。"
        }
      ],
      "next": "yan-01-mid"
    },
    "yan-01-mid": {
      "bg": "backgrounds/ke-city-market.png",
      "steps": [
        {
          "text": "名單上的名字快沉了。我借了紙筆，把她那份抄成兩份——一份給她，一份自己收著。"
        },
        {
          "say": "抄一份不費什麼。",
          "who": "hero"
        },
        {
          "text": "我沒解釋為什麼要留一份。有些東西留著，不是為了用，是為了她哪天想不起來的時候，還有一個地方存著。"
        },
        {
          "deposit": "dep_yan2"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "s2",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "say": "這條巷我一日過八趟。跟上。",
          "who": "man",
          "expr": "s2"
        },
        {
          "text": "小滿帶了一段近路就又不見了。跑得最快的人，替走得最慢的事帶路。"
        },
        {
          "hide": "man"
        },
        {
          "bg": "#000000",
          "fx": "fade"
        },
        {
          "text": "一戶人家沒開門。雁回把名字唸給門聽，唸完就轉身。"
        },
        {
          "text": "我懂了：送到不是為了被收下，是為了不欠。"
        },
        {
          "text": "墓園裡，她替一個個名字添土，順序和碑上刻的相反——先唸最後一個。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        }
      ],
      "choices": [
        {
          "text": "順序反了——碑上是從右邊起的。",
          "to": "yan-01-c2a"
        },
        {
          "text": "（跟著她的順序，替下一個名字添土）",
          "to": "yan-01-c2b"
        },
        {
          "text": "我幫妳照碑抄一份正的吧。",
          "to": "yan-01-c2c"
        }
      ]
    },
    "yan-01-c2a": {
      "steps": [
        {
          "text": "她沒抬頭，添土的手也沒停。「碑是給活人看的。我唸的順序，是他們沉下去的順序。」"
        }
      ],
      "next": "yan-01-end"
    },
    "yan-01-c2b": {
      "steps": [
        {
          "set": {
            "mem_yan_soil": true
          }
        },
        {
          "text": "我蹲下，跟著她的順序，替下一個名字添了一捧土。她沒說話。"
        },
        {
          "text": "唸完最後一個，她把手裡的香分了一半給我。沒有道謝，沒有解釋。"
        }
      ],
      "next": "yan-01-end"
    },
    "yan-01-c2c": {
      "steps": [
        {
          "text": "「照碑抄，是把他們再擺回活人記得的樣子。」她搖頭。「我要的是他們自己的樣子。」"
        }
      ],
      "next": "yan-01-end"
    },
    "yan-01-end": {
      "steps": [
        {
          "text": "臨走，她把那份名單收進懷裡，繫好。"
        },
        {
          "say": "名字比人耐放。人等不到的，名字等得到。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她說今天還想過一個平常的日子。我跟上。"
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-02"
    },
    "yan-02": {
      "title": "同刻日",
      "bg": "backgrounds/ke-city-market.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "touch": [
        "yan"
      ],
      "steps": [
        {
          "text": "她持有的，是我往後的四遇；我已走過的，也是四遇。今天，兩個人對彼此的認識，恰好一樣多。只有今天。誰都不說破。"
        },
        {
          "text": "買菜。她替我挑，攤主認得她——被除名的人，在市井裡自有一套活法。"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "錶攤。我修錶，她在旁邊看，什麼都不必說。一整個下午，我們並排坐著，各做各的事。"
        },
        {
          "bg": "#000000",
          "fx": "fade"
        },
        {
          "text": "河邊。午睡。畫面停在這裡，沒有對白。"
        },
        {
          "beat": true
        },
        {
          "say": "同步的我，就不是我。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她說得像玩笑。我把「明天——」說了一半。"
        },
        {
          "say": "今天的事就夠了。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "deposit": "dep_yan3"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "暮色下來。她先開口——只有前半句。"
        },
        {
          "say": "今天這樣就",
          "who": "yan",
          "expr": "turnsmile"
        },
        {
          "say": "好。",
          "who": "hero"
        },
        {
          "text": "合起來才是一句。她走前半，我接後半。之後誰都沒再說話，BGM 也沒有進來。"
        },
        {
          "beat": true
        },
        {
          "set": {
            "aff_yan": 4
          }
        },
        {
          "text": "HUD 角落，她的錶面和我的疊在一起，一瞬。"
        },
        {
          "text": "夜盡，出窗。我又數了一遍城裡的鐘——還是少一響。"
        },
        {
          "say": "下次見面，替我把今天帶來。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她知道自己會忘。她沒有說機制，只說了這句。我點頭。"
        },
        {
          "winEnd": true
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-03"
    },
    "yan-03": {
      "title": "錶鏈與手帳",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "sprites": [],
      "touch": [
        "yan"
      ],
      "steps": [
        {
          "set": {
            "tw_date": "月 10.4",
            "tw_left": "距對年約三個月"
          }
        },
        {
          "text": "門在背後合上，秒針照走。這一趟三日，台灣走掉一個月。"
        },
        {
          "text": "台灣。W4 歸來。阿嬤問：「你阿公呢？」"
        },
        {
          "say": "出去買東西。",
          "who": "hero"
        },
        {
          "text": "第一次，我替她把這句話接下去，沒有停頓。"
        },
        {
          "text": "姑姑交代醫囑，問我對年打算怎麼辦。"
        },
        {
          "say": "……再看看。",
          "who": "hero"
        },
        {
          "text": "痊癒不完整的證據，就留在這一句裡。對所選之人我學會了報日期，對姑姑還沒有。"
        },
        {
          "win": "W5",
          "price": "1 個月",
          "back": "月 11.4"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。上發條。遞重物入鏡：對年倒數的紅字。報日期，比上一窗更清楚。門開。"
        },
        {
          "bg": "backgrounds/yan-dwelling.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "刻城。我循著上一窗的路，找到她的居處。晨。她對我比上一窗陌生了一格。我先報日期，把上次的事講給她聽——這一段，比 W4 長了一句。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "午。我教她一個繞錶鏈的法子。"
        },
        {
          "say": "這樣纏，比較不會掉。",
          "who": "hero"
        },
        {
          "text": "我沒說這是為了讓她哪天空著手時，手還記得。只當個玩笑教了。繞兩圈半。"
        },
        {
          "deposit": "dep_yan4"
        },
        {
          "set": {
            "chain_yan": true
          }
        },
        {
          "text": "午後，我把自己的手帳攤開借她讀——把我的過去，借給她當上下文。"
        },
        {
          "deposit": "dep_yan5"
        },
        {
          "text": "她翻到台灣那幾頁的日期，停住。"
        },
        {
          "say": "這些日子……是哪裡的日子？",
          "who": "yan",
          "expr": "normal"
        }
      ],
      "choices": [
        {
          "text": "（把手帳連同台灣頁，整本攤開給她）",
          "to": "yan-03-ta"
        },
        {
          "text": "（翻到刻城那幾頁，其餘的按在掌下）",
          "to": "yan-03-tb"
        },
        {
          "text": "那是備忘，妳看不懂的。",
          "to": "yan-03-tc"
        }
      ]
    },
    "yan-03-ta": {
      "steps": [
        {
          "add": {
            "trust_yan": 1
          }
        },
        {
          "text": "我把整本推過去。匯率、剩下的窗、對年之期——都已經發生，或都是我自己的事，沒有一頁是她的未來。"
        },
        {
          "say": "……原來你也在數日子。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她的錶蓋，開了半分。"
        }
      ],
      "next": "yan-03-mid"
    },
    "yan-03-tb": {
      "steps": [
        {
          "text": "我翻到刻城那幾頁，其餘的按在掌下。她看了看被壓住的紙邊，沒有追問。"
        }
      ],
      "next": "yan-03-mid"
    },
    "yan-03-tc": {
      "steps": [
        {
          "add": {
            "trust_yan": -1
          }
        },
        {
          "set": {
            "mem_lie_yan": true
          }
        },
        {
          "text": "我把手帳收回。她「嗯」了一聲，把視線移開。她從不考別人的記憶——所以她也聽得出，什麼時候有人在對她關上一頁。"
        }
      ],
      "next": "yan-03-mid"
    },
    "yan-03-mid": {
      "bg": "backgrounds/ke-city-market.png",
      "steps": [
        {
          "text": "暮。她興沖沖地計畫要去一個地方——那地方，我們上一窗才去過，早從她記憶裡沉了下去。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          }
        }
      ],
      "choices": [
        {
          "text": "我們昨天去過了。",
          "to": "yan-03-3wrong"
        },
        {
          "text": "好，現在就去。",
          "to": "yan-03-3b"
        },
        {
          "text": "換一家吧，那家妳吃過。",
          "to": "yan-03-3wrong"
        }
      ]
    },
    "yan-03-3wrong": {
      "steps": [
        {
          "text": "她的興致頓了一下，像撞上一面看不見的牆。「……是嗎。」她笑了笑，把話題放下。"
        }
      ],
      "next": "yan-03-f4"
    },
    "yan-03-3b": {
      "steps": [
        {
          "set": {
            "mem_yan_again": true
          }
        },
        {
          "text": "再去一次。對她是第一次——那就讓它是第一次。她走在前面，腳步比整個下午都輕。"
        }
      ],
      "next": "yan-03-f4"
    },
    "yan-03-f4": {
      "bg": "backgrounds/yan-dwelling.png",
      "steps": [
        {
          "text": "夜。她封緘日記，蠟還沒按實，起身去取燈。那一頁攤著——封面標的日子，還沒到。"
        },
        {
          "text": "我可以讀。她不會知道。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          }
        }
      ],
      "choices": [
        {
          "text": "（替她把那頁闔上，按好封蠟）",
          "to": "yan-03-f4a"
        },
        {
          "text": "（把頁上的日子記進自己的手帳）",
          "to": "yan-03-f4bc"
        },
        {
          "text": "（別開視線，等她自己回來封）",
          "to": "yan-03-f4bc"
        }
      ]
    },
    "yan-03-f4a": {
      "steps": [
        {
          "set": {
            "F4": true
          }
        },
        {
          "text": "我把那頁闔上，按好封蠟。"
        },
        {
          "text": "她回來，看著按好的蠟，一拍，沒有道謝。把日記收回腰間時，繫得比平常慢。"
        }
      ],
      "next": "yan-03-end"
    },
    "yan-03-f4bc": {
      "steps": [
        {
          "text": "她回身，快一步把那頁按闔。我沒能讀到那是「哪一件事」的程度。她繫好日記，什麼也沒說。"
        }
      ],
      "next": "yan-03-end"
    },
    "yan-03-end": {
      "steps": [
        {
          "set": {
            "aff_yan": 5
          }
        },
        {
          "text": "這一天，愛是往深處走的；她的儀表，卻是往回退的。這句話我沒有對任何人說。"
        },
        {
          "text": "她把我的手帳抱在懷裡睡著了。"
        },
        {
          "winEnd": true
        },
        {
          "text": "出窗。門廊上她揮手——揮到一半停住，像忘了自己為什麼舉著手。"
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-04"
    },
    "yan-04": {
      "title": "稱謂退格",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "sprites": [],
      "touch": [
        "yan"
      ],
      "steps": [
        {
          "set": {
            "tw_date": "月 11.7",
            "tw_left": "距對年約一個月"
          }
        },
        {
          "text": "門後無聲，秒針照走。台灣。W5 歸來，日曆又厚一個月——電鍋裡的湯沒動過，空鍋。阿嬤住院，出院，姑姑接手了日常。"
        },
        {
          "win": "W6",
          "price": "1 個月",
          "back": "月 12.7"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。上發條。遞重物入鏡：一疊住院單據。報日期報到一半，阿公的話在腦裡響——"
        },
        {
          "say": "錶走得慢不要緊，別讓它停了。",
          "who": "agong"
        },
        {
          "text": "我沒有說出口。門開。"
        },
        {
          "bg": "backgrounds/yan-dwelling.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "刻城。她的居處。她客氣地把這一面當成初見，問我貴姓。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        }
      ],
      "choices": [
        {
          "text": "我們見過的，這是第三次。",
          "to": "yan-04-c1wrong"
        },
        {
          "text": "初次見面。我姓周，修錶的。",
          "to": "yan-04-c1ok"
        },
        {
          "text": "妳真的一點都不記得了？",
          "to": "yan-04-c1wrong"
        }
      ]
    },
    "yan-04-c1wrong": {
      "steps": [
        {
          "text": "她的客氣多了一層。當日之內她記得我今晨自報的姓——僅此而已。懲罰只在空氣裡，沒有落在任何數字上。"
        }
      ],
      "next": "yan-04-mid"
    },
    "yan-04-c1ok": {
      "steps": [
        {
          "text": "「周先生。」她把這個稱呼記下，像記一件今天才收到的件。走進她的此刻，把第一次做好——這是這條路上唯一走得通的走法。"
        }
      ],
      "next": "yan-04-mid"
    },
    "yan-04-mid": {
      "bg": "backgrounds/ke-city-market.png",
      "steps": [
        {
          "text": "我報日期，把上次的事講給她聽。那一段越報越長——我替她保管的過去，一窗比一窗多。像讀秒一樣平。"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "告示牆貼滿了「矯治收容」。她繞開人群看完，沒有說話。"
        },
        {
          "text": "我試著把話探往以後。她截住我。"
        },
        {
          "say": "你想聽的那種話，我說一句少一句——不是捨不得說，是說了就沒了。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "say": "我說得掉一場雨，說不掉天不下雨。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她說的是那張告示。收容矯治不了她——正如把雨說掉，天照樣要下。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "她低頭整理腕上的錶鏈，一個沒有指涉的小動作。手記得的，比她記得的多。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "鐘匠在工作檯後，第二次提起那套法子。"
        },
        {
          "say": "脫刻是掛錯的擺。停擺重掛，能校。官府那套，用的就是這個理。",
          "who": "zhongjiang"
        },
        {
          "text": "他只講工法，不勸也不阻。"
        },
        {
          "say": "同步的我，就不是我。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "這一次，不是玩笑。"
        },
        {
          "beat": true
        },
        {
          "bg": "backgrounds/yan-dwelling.png",
          "fx": "fade"
        },
        {
          "text": "暮。她在居處外與我道別，叫我「周先生」。我應了，沒有糾正。"
        },
        {
          "text": "入夜，街上巡吏的燈籠多了起來。"
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-05"
    },
    "yan-05": {
      "title": "名單危機",
      "bg": "#000000",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "touch": [
        "yan"
      ],
      "timed": true,
      "timeLimit": 8,
      "timeoutOption": 2,
      "steps": [
        {
          "text": "官府清查脫刻者，挨戶沒收「妖書」。腳步聲從巷口逼過來。"
        }
      ],
      "choices": [
        {
          "text": "拉她進錶攤簾後",
          "to": "yan-05-b",
          "set": {
            "mem_yan_raid": 0
          }
        },
        {
          "text": "搶抱名單箱先走",
          "to": "yan-05-b",
          "set": {
            "mem_yan_raid": 1
          }
        },
        {
          "text": "站著不動、被她拉走",
          "to": "yan-05-b",
          "set": {
            "mem_yan_raid": 2
          }
        }
      ]
    },
    "yan-05-b": {
      "bg": "#000000",
      "steps": [
        {
          "text": "名單的原本被收走了。她一頁頁地在腦裡點名，沒有出聲。"
        },
        {
          "text": "我取出那份副本。"
        },
        {
          "say": "妳的字，我照著描的。",
          "who": "hero"
        },
        {
          "text": "全部的名字，救回來了。她的日記，她貼身護著，繫著錶鏈的那隻手一直沒鬆。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "left"
          },
          "fx": "fade"
        },
        {
          "say": "鐘樓不歸他們管。三百刻年都不歸。",
          "who": "ting",
          "expr": "normal"
        },
        {
          "text": "聽鐘收留了我們一夜，說完就去巡她的鐘。"
        },
        {
          "hide": "ting"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          }
        }
      ],
      "choices": [
        {
          "text": "鐘匠的校正法。我去求他——把妳修回同刻。",
          "to": "yan-05-pa"
        },
        {
          "text": "名單我再抄一份。妳的字，我描得出來。",
          "to": "yan-05-pb"
        },
        {
          "text": "今夜先睡。名字，明早再點一遍。",
          "to": "yan-05-pc"
        }
      ]
    },
    "yan-05-pa": {
      "steps": [
        {
          "set": {
            "poison_yan": true
          }
        },
        {
          "text": "她沒有抵抗——她不記得要抵抗什麼。只點了點頭，像聽一件與自己無關的修理案。"
        }
      ],
      "next": "yan-05-c"
    },
    "yan-05-pb": {
      "steps": [
        {
          "text": "「你已經描過一次了。」她把副本按在胸口。「再描，你的窗就不夠了。」她沒讓我再抄。"
        }
      ],
      "next": "yan-05-c"
    },
    "yan-05-pc": {
      "steps": [
        {
          "text": "「名字不會等到明早。」她搖頭，卻還是把燈捻小了。「但你可以睡。你們渡外客，睡一覺就過一整段。」"
        }
      ],
      "next": "yan-05-c"
    },
    "yan-05-c": {
      "steps": [
        {
          "text": "她把名單副本收拾好，背對著我。"
        },
        {
          "say": "名字沉得比我快了。你——",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "句子沒說完。她不會要一個人早來。開口的是處境，不是她。"
        }
      ],
      "choices": [
        {
          "text": "雁回。我們——最後會怎樣？",
          "to": "yan-05-aa"
        },
        {
          "text": "（把問題嚥回去，替她把日記包好）",
          "to": "yan-05-ab"
        }
      ]
    },
    "yan-05-aa": {
      "steps": [
        {
          "set": {
            "askend_yan": true
          }
        },
        {
          "text": "她沉默一拍。然後答了。"
        },
        {
          "bg": "#000000",
          "fx": "cut"
        },
        {
          "text": "她說了。"
        },
        {
          "beat": true
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        }
      ],
      "next": "yan-05-d"
    },
    "yan-05-ab": {
      "steps": [
        {
          "text": "我把問題嚥回去，替她把日記包好，繫上。她讓我包了。今夜，什麼也沒少。"
        }
      ],
      "next": "yan-05-d"
    },
    "yan-05-d": {
      "bg": "backgrounds/tower-base-door.png",
      "steps": [
        {
          "text": "門廊。她把副本抱在懷裡，對我點頭。今晚她記得我是誰——淺灘上最後的一點餘光。"
        },
        {
          "winEnd": true
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-06-eve"
    },
    "yan-06-eve": {
      "title": "靜置",
      "bg": "#000000",
      "sprites": [],
      "steps": [
        {
          "set": {
            "tw_date": "月 13.0",
            "tw_left": "對年"
          }
        },
        {
          "text": "刻城，遠景。她如常掃墓，倒著唸名。"
        },
        {
          "text": "她經過鐘樓，不再認得那張我坐過的工作凳。"
        },
        {
          "text": "她對上一窗殘存的違和自語：「我們見過幾次？」"
        },
        {
          "text": "——沒有數字。只有一頁攤開的手帳頁角，一瞬，不在她手邊。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "台灣。阿嬤已經喚不出我的名，改喚「年輕人」，每晚照樣留一碗湯。"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "text": "對年前夜。後房門口。鑰與香都在架上。"
        }
      ],
      "choices": [
        {
          "text": "（把香分好——對年那日，他在場）",
          "to": "yan-06-f1a"
        },
        {
          "text": "（開背蓋——早一窗過去，還趕得上她的名字們）",
          "to": "yan-06-f1b"
        }
      ]
    },
    "yan-06-f1a": {
      "steps": [
        {
          "set": {
            "F1": true
          }
        },
        {
          "text": "我把香分好。對年那日，我在。"
        }
      ],
      "next": "yan-06"
    },
    "yan-06-f1b": {
      "steps": [
        {
          "set": {
            "mem_f1_break": true
          }
        },
        {
          "text": "我走到後房，開了背蓋，鑰匙已經在指間——然後我把鑰匙放回，掌心離開機芯。一拍。"
        },
        {
          "text": "日曆沒有改寫。被記下的，是我動過那個念頭。"
        }
      ],
      "next": "yan-06"
    },
    "yan-06": {
      "bg": "backgrounds/watch-shop-day.png",
      "sprites": [
        {
          "char": "gu",
          "expr": "normal",
          "pos": "left"
        }
      ],
      "timed": true,
      "timeLimit": 8,
      "timeoutOption": 2,
      "steps": [
        {
          "text": "姑姑背對著我，收拾靈桌。"
        },
        {
          "say": "店內這口鐘……你要自己修嗎？",
          "who": "gu",
          "expr": "normal"
        }
      ],
      "choices": [
        {
          "text": "後個月初三前，我修好。",
          "to": "yan-06-rite",
          "set": {
            "mem_gate_word": "a"
          }
        },
        {
          "text": "我會處理。",
          "to": "yan-06-rite",
          "set": {
            "mem_gate_word": "b"
          }
        },
        {
          "text": "（沉默）",
          "to": "yan-06-rite",
          "set": {
            "mem_gate_word": "c"
          }
        }
      ]
    },
    "yan-06-rite": {
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "steps": [
        {
          "set": {
            "tw_left": "對年已過"
          }
        },
        {
          "text": "對年。上香。掛鐘不走。"
        },
        {
          "say": "今天是什麼日子？",
          "who": "amah",
          "expr": "normal"
        },
        {
          "text": "我答不出第二句。"
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-07"
    },
    "yan-07": {
      "title": "初次見面",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "sprites": [],
      "touch": [
        "yan"
      ],
      "steps": [
        {
          "set": {
            "tw_date": "月 13.3"
          }
        },
        {
          "win": "W7",
          "price": "1 個月",
          "back": "月 13.3"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "後房。上發條。遞重物入鏡：對年翌日的香灰。報日期，說得最清楚的一次。入窗。發條，最後一圈。"
        }
      ],
      "branch": [
        {
          "if": {
            "flag": "poison_yan",
            "eq": true
          },
          "to": "yan-07-poison"
        },
        {
          "if": {
            "flag": "askend_yan",
            "eq": true
          },
          "to": "yan-07-askend"
        },
        {
          "if": {
            "all": [
              {
                "flag": "aff_yan",
                "eq": 5
              },
              {
                "flag": "trust_yan",
                "eq": 0
              }
            ]
          },
          "to": "yan-07-shut"
        },
        {
          "if": {
            "any": [
              {
                "flag": "aff_yan",
                "eq": 3
              },
              {
                "not": {
                  "flag": "chain_yan",
                  "eq": true
                }
              }
            ]
          },
          "to": "yan-07-fallback"
        },
        {
          "to": "yan-07-std"
        }
      ]
    },
    "yan-07-std": {
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "門廊。她在。她「記得」今日門前有個修錶的——但站在她面前的，只是個陌生人。"
        },
        {
          "text": "我最後一次自報家門：日期、姓名、上一次。這一次，連「上一次」都要從第一次講起——講到一半，我自己停住。對她，這是第一次。那就把第一次做好。"
        },
        {
          "say": "久違了。也初次見面。",
          "who": "hero"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "重演那一天。買同一攤的菜。她跟上了——陌生人的邀請，她按自己送名的邏輯收下：不欠。"
        }
      ],
      "branch": [
        {
          "if": {
            "flag": "mem_yan_soil",
            "eq": true
          },
          "to": "yan-07-std-soil"
        },
        {
          "to": "yan-07-std-rest"
        }
      ]
    },
    "yan-07-std-soil": {
      "bg": "#000000",
      "steps": [
        {
          "text": "路過墓園。她替名字添土，把香分了一半給陌生的我。她不解釋。"
        }
      ],
      "next": "yan-07-std-rest"
    },
    "yan-07-std-rest": {
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "我把錶鏈遞出去。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "cut"
        },
        {
          "beat": true
        },
        {
          "text": "她的視線落在繞法上——繞兩圈半。"
        },
        {
          "text": "她收下了。"
        },
        {
          "text": "她把鏈繞上腕，用我教的繞法。她不知道是誰教的。"
        },
        {
          "beat": true
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-08"
    },
    "yan-07-shut": {
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "門廊。她在。我報上日期、姓名、上一次。"
        },
        {
          "say": "久違了。也初次見面。",
          "who": "hero"
        },
        {
          "text": "我把錶鏈遞出去。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "cut"
        },
        {
          "beat": true
        },
        {
          "text": "她沒有伸手接。她從腰間的日記裡，取出一頁到期封緘的紙。"
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-08"
    },
    "yan-07-fallback": {
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "門廊。她在。我報上日期、姓名、上一次。"
        },
        {
          "say": "久違了。也初次見面。",
          "who": "hero"
        },
        {
          "text": "我把手裡的東西遞出去。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "cut"
        },
        {
          "beat": true
        },
        {
          "text": "她遲疑，然後搖頭，沒有收下。她認不出那是什麼——本來也沒有什麼可認的。"
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-08"
    },
    "yan-07-poison": {
      "bg": "backgrounds/ke-city-market.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "門廊。她在——在籍、合曆、官府檔上有名的她。同步了，合法了。"
        },
        {
          "text": "她認得所有她該認得的人。唯獨脫刻的那段日子，在她身上是一片空白。連同那整條，走過來的路。"
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-08"
    },
    "yan-07-askend": {
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "門廊。她在。我報上日期、姓名、上一次。"
        },
        {
          "say": "久違了。也初次見面。",
          "who": "hero"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "重演那一天。可是走到某一站，她繞開了——那條路，通往一天已經脫落的日子。我沒有問。"
        },
        {
          "bg": "backgrounds/tower-base-door.png",
          "fx": "fade"
        },
        {
          "text": "我把錶鏈遞出去。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "cut"
        },
        {
          "beat": true
        },
        {
          "text": "她看見繞兩圈半，收下了。她把鏈繞上腕。"
        },
        {
          "hide": "*"
        }
      ],
      "next": "yan-08"
    },
    "yan-08": {
      "title": "出窗",
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [],
      "steps": [
        {
          "winEnd": true
        },
        {
          "text": "暮色。門廊。發條走到底的聲音。"
        },
        {
          "beat": true
        }
      ],
      "branch": [
        {
          "if": {
            "all": [
              {
                "flag": "aff_yan",
                "eq": 5
              },
              {
                "flag": "trust_yan",
                "gte": 1
              },
              {
                "flag": "F4",
                "eq": true
              },
              {
                "flag": "chain_yan",
                "eq": true
              },
              {
                "flag": "dep_yan1",
                "eq": true
              }
            ]
          },
          "to": "yan-08-choice"
        },
        {
          "to": "yan-08-gate"
        }
      ]
    },
    "yan-08-choice": {
      "steps": [
        {
          "text": "門在我這一側。發條的最後三響，一響比一響慢。走，或留。"
        }
      ],
      "choices": [
        {
          "text": "我留下。",
          "to": "yan-08-gate",
          "set": {
            "choice_yan_stay": true
          }
        },
        {
          "text": "我回去。",
          "to": "yan-08-gate"
        }
      ]
    },
    "yan-08-gate": {
      "type": "autoBranch",
      "branches": [
        {
          "when": [
            [
              "poison_yan",
              "eq",
              true
            ]
          ],
          "goto": "end-yan-bad-sync"
        },
        {
          "when": [
            [
              "askend_yan",
              "eq",
              true
            ]
          ],
          "goto": "end-yan-bad-ask"
        },
        {
          "when": [
            [
              "aff_yan",
              "eq",
              5
            ],
            [
              "trust_yan",
              "eq",
              0
            ]
          ],
          "goto": "end-yan-shut"
        },
        {
          "when": [
            [
              "aff_yan",
              "eq",
              5
            ],
            [
              "trust_yan",
              "gte",
              1
            ],
            [
              "F4",
              "eq",
              true
            ],
            [
              "chain_yan",
              "eq",
              true
            ],
            [
              "dep_yan1",
              "eq",
              true
            ],
            [
              "choice_yan_stay",
              "eq",
              true
            ]
          ],
          "goto": "end-yan-true"
        },
        {
          "when": [
            [
              "aff_yan",
              "gte",
              4
            ],
            [
              "trust_yan",
              "gte",
              1
            ],
            [
              "chain_yan",
              "eq",
              true
            ]
          ],
          "goto": "end-yan-good"
        },
        {
          "when": [
            [
              "aff_yan",
              "eq",
              4
            ],
            [
              "trust_yan",
              "eq",
              0
            ],
            [
              "chain_yan",
              "eq",
              true
            ]
          ],
          "goto": "end-yan-good",
          "variant": "downgrade"
        },
        {
          "when": [
            [
              "aff_yan",
              "eq",
              3
            ],
            [
              "chain_yan",
              "eq",
              true
            ]
          ],
          "goto": "end-yan-good",
          "variant": "fallback"
        },
        {
          "goto": "end-yan-good",
          "variant": "fallback"
        }
      ]
    },
    "end-yan-true": {
      "title": "分持記憶的同居",
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [],
      "steps": [
        {
          "text": "我站在門廊這一側，沒有出窗。發條的最後三響，慢慢遞下去，我聽著門死。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "台灣的帳，我在出發前結清了：一封寫給姑姑的信，擺在櫃上。"
        },
        {
          "text": "此後逐年的忌日，由姑姑代祭。"
        },
        {
          "text": "掛鐘，永停在阿公斷氣的時刻。"
        },
        {
          "text": "家書我永遠寄不出去，只能在亥時聽。這是留下的代價，我付了。"
        },
        {
          "bg": "backgrounds/yan-dwelling.png",
          "fx": "fade"
        },
        {
          "text": "同居。每次見面的第一件事，是對時。手帳成了制度——她的明天，我替她記；她的昨天，也在同一本裡。"
        },
        {
          "text": "「再去一次」成了我們的暗號。同一家攤，每一次，對她都是第一次。"
        },
        {
          "say": "你的昨天我替你記；你的明天你替我記。",
          "who": "hero"
        },
        {
          "text": "兩個人合起來，才是一份完整的時間。"
        },
        {
          "bg": "backgrounds/yan-dwelling.png",
          "fx": "fade"
        },
        {
          "text": "清晨。她醒來，不認得屋裡這個男人。桌上手帳攤在今天那頁，她腕上的錶鏈繞著兩圈半。"
        },
        {
          "text": "她讀完，把早飯分成兩份。"
        }
      ],
      "ending": {
        "id": "end-yan-true",
        "cleared": "yan",
        "route": "yan",
        "tier": "true"
      }
    },
    "end-yan-good": {
      "title": "迴圈閉合",
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [],
      "steps": [
        {
          "text": "出窗。門死。發條三響遞慢。"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "text": "台灣。店開著，錶照修，日子照走。姑姑收拾靈桌時，對我說了句什麼，還是喊我「你」。稱謂沒有修——那筆帳，不在這裡結。"
        }
      ],
      "branch": [
        {
          "if": {
            "flag": "chain_yan",
            "eq": true
          },
          "to": "end-yan-good-loop"
        },
        {
          "to": "end-yan-good-plain"
        }
      ]
    },
    "end-yan-good-loop": {
      "bg": "#000000",
      "sprites": [],
      "steps": [
        {
          "text": "某日，刻城河邊。鏡頭回到她：送名途中歇腳，她垂著手，把一截舊錶鏈把玩——無意識地，繞出了兩圈半。"
        },
        {
          "text": "她看著自己的手，一拍。然後繼續上路。"
        },
        {
          "text": "鏈已交付。迴圈，閉合了。"
        }
      ],
      "ending": {
        "id": "end-yan-good",
        "cleared": "yan",
        "route": "yan",
        "tier": "good"
      }
    },
    "end-yan-good-plain": {
      "bg": "backgrounds/ke-city-market.png",
      "sprites": [],
      "steps": [
        {
          "text": "某日，刻城街上。她照舊送名、倒著唸。她不認得我，也沒有什麼可認的。名字比人耐放——她繼續上路。"
        }
      ],
      "ending": {
        "id": "end-yan-good",
        "cleared": "yan",
        "route": "yan",
        "tier": "good"
      }
    },
    "end-yan-bad-sync": {
      "title": "校正",
      "bg": "backgrounds/yan-dwelling.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "她同步了。在籍、合曆、官府檔上有名。一切正常。"
        },
        {
          "text": "高好感，零記憶。脫刻的那段日子在她身上蒸發乾淨——連同整條走過來的路。"
        },
        {
          "text": "她翻著自己那本已成遺物的日記，唸出某一頁。"
        },
        {
          "say": "同步的我，就不是我。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她抬起頭，問我："
        },
        {
          "say": "這是誰寫的？",
          "who": "yan",
          "expr": "normal"
        },
        {
          "bg": "#000000",
          "fx": "cut"
        }
      ],
      "ending": {
        "id": "end-yan-bad-sync",
        "route": "yan",
        "tier": "bad-sync"
      }
    },
    "end-yan-bad-ask": {
      "title": "說掉的那天",
      "bg": "backgrounds/ke-city-market.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "我們繼續相遇。世界如常，沒有人受傷——脫落的懲罰不長牙齒，長的是空洞。"
        },
        {
          "say": "我說得掉一場雨，說不掉天不下雨。這次說掉的，是我捨不得的那天。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她翻到日記某一頁封緘——封面標的日子已經過了，頁內空白。那一天永遠不會來，也就永遠沒有東西可以寫。"
        }
      ],
      "ending": {
        "id": "end-yan-bad-ask",
        "route": "yan",
        "tier": "bad-ask"
      }
    },
    "end-yan-shut": {
      "title": "給以後的我",
      "bg": "backgrounds/tower-base-door.png",
      "sprites": [
        {
          "char": "yan",
          "expr": "normal",
          "pos": "center"
        }
      ],
      "steps": [
        {
          "text": "她取出那頁到期封緘的紙，唸出上面的字。"
        },
        {
          "say": "別收這條鏈。給你鏈的人，瞞你日子。",
          "who": "yan",
          "expr": "normal"
        },
        {
          "text": "她把鏈放回我掌心。動作很輕，像退一件查無此人的件。"
        }
      ],
      "ending": {
        "id": "end-yan-shut",
        "route": "yan",
        "tier": "shut"
      }
    },
    "true-01": {
      "title": "亥時・其一——重讀",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "steps": [
        {
          "text": "後房。停擺的掛鐘，牆上的日曆。沒有配樂。"
        },
        {
          "text": "我對著這口死鐘，報今天的日子——月十，第二日。這一次，月、日，一字沒有含糊。"
        },
        {
          "text": "修錶單攤開在檯面上。交期那一欄，空著。"
        },
        {
          "text": "開背蓋，鑰入槽。掌心壓著那顆黃銅齒輪，壓了一拍。"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "一圈。擺錘後的空腔亮起門廊。"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "win": "W4",
          "price": "一個月",
          "back": "月 10.2"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "鐘樓。這一趟我不為誰定日，只是順路的人，替她把巡前的檢整做一遍。"
        },
        {
          "say": "第七座，游絲鬆了半分。",
          "who": "ting"
        },
        {
          "say": "我來。快慢針，我調。",
          "who": "hero"
        },
        {
          "say": "走位偏東。準了，城就準。",
          "who": "ting"
        },
        {
          "text": "兩個人一整段，講的都是準、鬆、走位。三個周目的舊帳，一句沒提。"
        },
        {
          "hide": "ting",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/tower-base-door.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "zhongjiang",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "鐘匠工房。我借看五十年前的老工單存根，一頁一頁翻——想找出到底欠的是什麼。翻到底，什麼都沒有。"
        },
        {
          "say": "添發……後來呢。",
          "who": "hero"
        },
        {
          "text": "鐘匠沒有應。他低下頭，拿油壺，替一枚齒軸上油。"
        },
        {
          "hide": "zhongjiang",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "寄放櫃房。我第一次開口，問那只五十年不上發條的懷錶。"
        },
        {
          "text": "她開了櫃。沒有多一個動作。"
        },
        {
          "say": "寄的人說，下次來拿。",
          "who": "ting"
        },
        {
          "text": "她把錶遞近了些。背蓋內側，刻著半幅齒輪的圖——一角，一瞬。我只覺得那工法眼熟。"
        },
        {
          "set": {
            "frag_a": true
          }
        },
        {
          "hide": "ting",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "fade"
        },
        {
          "text": "鐘樓外。我用三個周目的耳朵，把鐘聲再數了一遍。"
        },
        {
          "text": "一、二、三、四、五、六、七、八、九、十——"
        },
        {
          "beat": true
        },
        {
          "text": "還是少一響。"
        },
        {
          "text": "出窗。門後無聲，秒針照走。這一趟三日，台灣又走掉一個月。"
        },
        {
          "bg": "backgrounds/kitchen-taiwan.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "amah",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "湯在電鍋裡。"
        },
        {
          "say": "你阿公呢？",
          "who": "amah"
        },
        {
          "say": "出去買東西。",
          "who": "hero"
        },
        {
          "hide": "amah",
          "fx": "fade"
        }
      ],
      "next": "true-02"
    },
    "true-02": {
      "title": "亥時・其二——數是我的，門是你的",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "steps": [
        {
          "text": "後房。這一次報日子，我說得比上一次清楚。"
        },
        {
          "text": "牆上的月曆，對年那一格，紅字倒數著。"
        },
        {
          "text": "開背蓋，鑰入槽，壓掌一拍。"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "一圈。門開。"
        },
        {
          "bg": "backgrounds/dead-letter-office.png",
          "fx": "fade"
        },
        {
          "win": "W5",
          "price": "一個月",
          "back": "月 11.4"
        },
        {
          "text": "死信局。我照「渡外客」的類目，去查五十年前的遞件底冊。"
        },
        {
          "text": "查無此名。名不對的死件，根本不入冊。這條路，斷了。"
        },
        {
          "bg": "backgrounds/dead-letter-office.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "s3",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "深架。她清了一生的架子，帶我一路往最裡頭走。她的步子慢了，話還是快。"
        },
        {
          "say": "條件不成、名不對的件，往裡放。放到底的，就是放到等。",
          "who": "man"
        },
        {
          "text": "最深那一格。她起出一卷大鐘的圖紙，還有一封信。"
        },
        {
          "text": "圖紙上有個缺口。那缺口的形狀，我認得——是我掌心那顆鑰。"
        },
        {
          "letter": {
            "lines": [
              "見字如晤。",
              "那年冬，我在妳那兒留了個東西，說下次來拿。",
              "下次沒有來。不是路遠。是我這邊，也有一口鐘等著修。",
              "亥時那一槌，我掛不上了。這筆缺，記在我名下。",
              "剩下的圈，我封進匣裡，留給後頭來的那雙手。",
              "數是我的，門是你的。",
              "周添發　留"
            ],
            "age": 2,
            "half": false
          }
        },
        {
          "text": "我把信讀完。沒有出聲。"
        },
        {
          "set": {
            "frag_b": true
          }
        },
        {
          "hide": "man",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/yan-dwelling.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "雁回的居處。她翻出一頁日記，攤給我看——那一頁的日子早過了，封緘也早拆了。"
        },
        {
          "text": "頁上寫著掛槌的法子：「大鐘要停一拍。停拍的時候，全城都凍住。只有脫了刻的人，還走得動。」"
        },
        {
          "text": "掛槌的人，得在那一拍裡上塔。"
        },
        {
          "set": {
            "frag_c": true
          }
        },
        {
          "say": "今日，月十一，第四日。上一回，我替妳把名單抄了兩份。",
          "who": "hero"
        },
        {
          "say": "門邊，還剩一遍。等它沉了，就換你替我記得。",
          "who": "yan"
        },
        {
          "hide": "yan",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "text": "鐘樓。我把四樣東西，擺在同一塊檯面上。"
        },
        {
          "text": "大鐘圖紙上的缺口。日記頁上的槌位。懷錶背蓋內側的齒紋。還有我掌心這顆鑰。"
        },
        {
          "text": "四樣，是同一個形狀。"
        },
        {
          "beat": true
        },
        {
          "text": "出窗。門後無聲，秒針照走，台灣的日曆又厚了一個月。"
        },
        {
          "bg": "backgrounds/kitchen-taiwan.png",
          "fx": "fade"
        },
        {
          "text": "電鍋是空的——我不在的日子，沒人替阿嬤留湯。"
        },
        {
          "text": "阿嬤住院，出院。姑姑接手了日常。"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "text": "後房。住院單據壓在修錶單旁邊。"
        },
        {
          "text": "我對死鐘報日子的時候，阿公的話在腦內閃過一遍——「錶走得慢不要緊，別讓它停了。」"
        },
        {
          "text": "我沒有說出口。"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "一圈。門開。"
        },
        {
          "win": "W6",
          "price": "一個月",
          "back": "月 12.7"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "聽證的前一夜。她照常巡鐘。我們沒有多話。"
        },
        {
          "say": "準。城就在。",
          "who": "ting"
        },
        {
          "hide": "ting",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/dead-letter-office.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "man",
            "expr": "s3",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "騎樓下。她的架清到了尾聲，順手交我一件順路的。"
        },
        {
          "say": "順路，帶這件。指名收件，別遲。",
          "who": "man"
        },
        {
          "text": "我接過來。"
        },
        {
          "hide": "man",
          "fx": "fade"
        },
        {
          "bg": "#000000",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "送名也近尾了。名單上，只剩幾行。"
        },
        {
          "say": "剩沒幾個了。快沉了。",
          "who": "yan"
        },
        {
          "text": "出窗。"
        },
        {
          "hide": "yan",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "text": "對年。第十三個月。"
        },
        {
          "text": "我上了一炷香。這一炷是第一次。"
        },
        {
          "sprite": {
            "char": "gu",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "姑姑背對著我，手裡整理著供桌。"
        },
        {
          "say": "店裡這口鐘……你要自己修嗎？",
          "who": "gu"
        }
      ],
      "choices": [
        {
          "text": "後個月初三前，我修好。",
          "set": {
            "mem_gate_word": "a"
          },
          "to": "true-03"
        },
        {
          "text": "我會處理。",
          "set": {
            "mem_gate_word": "b"
          },
          "to": "true-03"
        },
        {
          "text": "……",
          "set": {
            "mem_gate_word": "c"
          },
          "to": "true-03"
        }
      ],
      "timed": true,
      "timeLimit": 8,
      "timeoutOption": 2
    },
    "true-03": {
      "title": "亥時・其三——停拍",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "steps": [
        {
          "text": "後房。對年翌日的香灰，還沾在我指節上。"
        },
        {
          "text": "開背蓋，鑰入槽，壓掌一拍。"
        },
        {
          "add": {
            "spring": -1
          }
        },
        {
          "text": "一圈。匣裡，一圈也不剩了。門開。"
        },
        {
          "win": "W7",
          "price": "一個月",
          "back": "月 14.3"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "鐘樓內。我把手裡的鑰，攤給她看。"
        },
        {
          "say": "這缺響，城市早就習慣了。",
          "who": "ting"
        },
        {
          "text": "留著這顆鑰，剩下的窗就還開著。我就還能不選邊。"
        }
      ],
      "choices": [
        {
          "text": "把齒輪交出去",
          "to": "true-03-stop"
        },
        {
          "text": "把齒輪收回來",
          "set": {
            "true_refused": true
          },
          "to": "end-common-normal"
        }
      ]
    },
    "true-03-stop": {
      "title": "停拍",
      "bg": "backgrounds/bell-tower.png",
      "steps": [
        {
          "hide": "ting",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "zhongjiang",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "我把齒輪，放進鐘匠的掌心。"
        },
        {
          "freeze": true
        },
        {
          "hide": "zhongjiang",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/ke-city-market.png",
          "fx": "cut"
        },
        {
          "text": "大鐘停了一拍。"
        },
        {
          "text": "整座城，凍住。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "sfx": "audio/gear-mesh.mp3"
        },
        {
          "text": "只有她還走得動。她穿過凍住的人群，登上塔，把亥時的槌掛了上去。"
        },
        {
          "text": "這一拍，不進她的記憶。這一刻，她永遠不會記得。"
        },
        {
          "sprite": {
            "char": "yan",
            "expr": "turnsmile",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "我沒有回頭。手裡的活，還沒收完。"
        },
        {
          "freeze": false
        },
        {
          "hide": "yan",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "text": "城解了凍。人聲、車聲，回流進來。沒有人知道，剛才停過一拍。"
        }
      ],
      "next": "true-04"
    },
    "true-04": {
      "title": "亥時・其四——初響",
      "bg": "backgrounds/bell-tower.png",
      "steps": [
        {
          "text": "我蹲下來，把散在地上的工具，一件一件收進盒裡。"
        },
        {
          "beat": true
        },
        {
          "beat": true
        },
        {
          "bg": "#000000",
          "sfx": "audio/bell-hai.mp3"
        },
        {
          "wait": 1000
        },
        {
          "bg": "backgrounds/bell-tower.png",
          "fx": "fade"
        },
        {
          "text": "聽鐘取出那只寄放了五十年的懷錶。上發條。對時。"
        },
        {
          "sfx": "audio/tick.mp3"
        },
        {
          "text": "背蓋內側，一行字，一瞬——「錶走得慢不要緊，別讓它停了。」"
        },
        {
          "text": "沒有人說話。"
        }
      ],
      "next": "true-05"
    },
    "true-05": {
      "title": "亥時・其五——門前與明天",
      "bg": "backgrounds/tower-base-door.png",
      "steps": [
        {
          "cg": "cg/door-last.png"
        },
        {
          "sprite": {
            "char": "ting",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "text": "鐘樓底的門廊。她沒有說送行的話。"
        },
        {
          "text": "她只把自己值勤的錶面翻過來，給我看了一眼。錶面上，是台北的時刻。"
        },
        {
          "text": "我出窗。"
        },
        {
          "hide": "ting",
          "fx": "fade"
        },
        {
          "cg": ""
        },
        {
          "text": "門死了。發條的最後三響，一響比一響遲。"
        },
        {
          "sfx": "audio/spring-tick.mp3"
        },
        {
          "wait": 600
        },
        {
          "sfx": "audio/spring-tick.mp3"
        },
        {
          "wait": 1000
        },
        {
          "sfx": "audio/spring-tick.mp3"
        },
        {
          "wait": 1500
        },
        {
          "bg": "backgrounds/watch-shop-backroom-night.png",
          "fx": "fade"
        },
        {
          "text": "我回到店裡。牆上的掛鐘，還是停著。"
        }
      ],
      "branch": [
        {
          "if": {
            "flag": "mem_gate_word",
            "eq": "a"
          },
          "to": "true-05-incense-a"
        },
        {
          "to": "true-05-incense-bc"
        }
      ]
    },
    "true-05-incense-a": {
      "title": "香",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "steps": [
        {
          "sprite": {
            "char": "gu",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "你回來了。",
          "who": "gu"
        },
        {
          "say": "阿律，香拿去。",
          "who": "gu"
        },
        {
          "hide": "gu",
          "fx": "fade"
        }
      ],
      "next": "true-05-coda"
    },
    "true-05-incense-bc": {
      "title": "香",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "steps": [
        {
          "sprite": {
            "char": "gu",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "阿律，香拿去。",
          "who": "gu"
        },
        {
          "hide": "gu",
          "fx": "fade"
        }
      ],
      "next": "true-05-coda"
    },
    "true-05-coda": {
      "title": "明天就來",
      "bg": "backgrounds/watch-shop-backroom-night.png",
      "steps": [
        {
          "text": "我想再想起阿嬤那通留言，裡頭到底交代了什麼。"
        },
        {
          "text": "……想不起來了。"
        },
        {
          "bg": "backgrounds/kitchen-taiwan.png",
          "fx": "fade"
        },
        {
          "sprite": {
            "char": "amah",
            "expr": "normal",
            "pos": "center"
          },
          "fx": "fade"
        },
        {
          "say": "年輕人，下次再來坐喔？",
          "who": "amah"
        },
        {
          "say": "明天就來。",
          "who": "hero"
        },
        {
          "hide": "amah",
          "fx": "fade"
        },
        {
          "bg": "backgrounds/watch-shop-day.png",
          "fx": "fade"
        },
        {
          "sfx": "audio/bell-far.mp3"
        },
        {
          "text": "某一夜，店裡隱約一聲鐘，極遠。"
        },
        {
          "text": "我算過：那邊每一夜亥時一響，換到這邊，是每個月一響。差不出半分。不是我聽岔。"
        },
        {
          "text": "我拿它，給全店對時。"
        },
        {
          "text": "電鍋裡，我留了一碗湯。"
        },
        {
          "text": "打烊。修錶單翻開新的一頁。交期那一欄——五年來第一次——我寫上了一個日子。"
        },
        {
          "sfx": "audio/theme-vocal.mp3"
        }
      ],
      "next": "end-true"
    },
    "end-true": {
      "title": "亥時",
      "bg": "backgrounds/watch-shop-day.png",
      "steps": [
        {
          "text": "——亥時。"
        }
      ],
      "ending": {
        "id": "end-true",
        "route": "true",
        "tier": "true"
      }
    }
  }
};
