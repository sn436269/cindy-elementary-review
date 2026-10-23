/* Official portrait identities; encouragement and mini challenges are original. */
(function(root){
  const roster=[
  {
    "id": "perlica",
    "name": "佩麗卡",
    "en": "PERLICA",
    "tip": "把今天的任務拆成小步驟，完成一科，再前進一科。",
    "challenge": "選一科今天還沒完成的任務，說出你準備從哪一步開始。"
  },
  {
    "id": "chen",
    "name": "陳千語",
    "en": "CHEN QIANYU",
    "tip": "先讀懂題目再出發。圈出關鍵字，會更容易找到方向。",
    "challenge": "找一道題目的關鍵字，試著用自己的話重述題意。"
  },
  {
    "id": "ardelia",
    "name": "艾爾黛拉",
    "en": "ARDELIA",
    "tip": "觀察、提問、再驗證。每個「為什麼」，都是新的發現。",
    "challenge": "觀察一片葉子，說出它的顏色、形狀與葉脈特徵。"
  },
  {
    "id": "wulfgard",
    "name": "狼衛",
    "en": "WULFGARD",
    "tip": "遇到難題先停一下，把已知條件列出來，再試一次。",
    "challenge": "拿一道應用題，分別說出已知條件和要找的答案。"
  },
  {
    "id": "gilberta",
    "name": "潔爾佩塔",
    "en": "GILBERTA",
    "tip": "今天多弄懂一個觀念，就替明天的自己留下一條好走的路。",
    "challenge": "回想一個最近學會的觀念，說說它和生活的關係。"
  },
  {
    "id": "laevatain",
    "name": "萊萬汀",
    "en": "LAEVATAIN",
    "tip": "把專注留給眼前這一題。練完一回，記得讓眼睛休息一下。",
    "challenge": "看看遠處，再慢慢做三次深呼吸，讓自己放鬆一下。"
  },
  {
    "id": "lifeng",
    "name": "黎風",
    "en": "LIFENG",
    "tip": "錯題是線索。看看解析，想想哪個步驟可以做得更清楚。",
    "challenge": "選一題錯題，說出這一次你會改變哪個作答步驟。"
  },
  {
    "id": "dapan",
    "name": "大潘",
    "en": "DA PAN",
    "tip": "學習也需要好好補給。準備一杯水，帶著精神繼續前進。",
    "challenge": "喝幾口水，想想今天要用什麼小方法補充精神。"
  },
  {
    "id": "purrche",
    "name": "噗切娜",
    "en": "PURRCHENA",
    "tip": "把好奇心帶進練習裡。今天可以找出一個讓你驚喜的小發現。",
    "challenge": "找找身邊三個有不同形狀的物品，說出它們的形狀。"
  },
  {
    "id": "lizhiyan",
    "name": "訣",
    "en": "ARCANE",
    "tip": "不急著得到答案，先把每一步想清楚。你正在累積自己的方法。",
    "challenge": "挑一個剛學到的詞語，替它造一句自己的句子。"
  },
  {
    "id": "liino",
    "name": "梨諾",
    "en": "LIINO",
    "tip": "每次認真讀完一道題目，都是替自己點亮一盞小燈。",
    "challenge": "說出今天學到的一件事，再說說它為什麼有趣。"
  },
  {
    "id": "mifu",
    "name": "弭弗",
    "en": "MI FU",
    "tip": "留下清楚的步驟，明天回頭看，也能找到今天努力的方向。",
    "challenge": "拿張紙寫下這次練習最想記住的一個重點。"
  },
  {
    "id": "camille",
    "name": "卡繆",
    "en": "CAMILLE",
    "tip": "練習需要勇氣，也需要休息。照顧好自己，才有精神繼續探索。",
    "challenge": "喝幾口水，輕輕轉動肩膀，再看向遠方一下。"
  },
  {
    "id": "zhuangfy",
    "name": "莊方宜",
    "en": "ZHUANG FANGYI",
    "tip": "把大問題拆成幾個小問題，一個一個解開，就會看見進展。",
    "challenge": "把今天還沒做完的事，拆成兩個小步驟說出來。"
  },
  {
    "id": "tangtang",
    "name": "湯湯",
    "en": "TANGTANG",
    "tip": "換個角度觀察，熟悉的事物也會出現新的線索。",
    "challenge": "選一件日常用品，想出它除了原本用途之外的另一種用法。"
  },
  {
    "id": "rossi",
    "name": "洛西",
    "en": "ROSSI",
    "tip": "勇敢試一次，就多一次發現方法的機會。你的努力都有留下痕跡。",
    "challenge": "想一題原本不太會的題目，說出現在多懂了哪一步。"
  },
  {
    "id": "yvonne",
    "name": "伊馮",
    "en": "YVONNE",
    "tip": "把想法說出來，你可能會發現自己其實懂得比想像中更多。",
    "challenge": "用三句話介紹你今天練習的一個小節。"
  },
  {
    "id": "ember",
    "name": "餘燼",
    "en": "EMBER",
    "tip": "一步一步前進，也是一種很可靠的力量。先把眼前的小任務完成。",
    "challenge": "把桌上三樣東西放回原位，準備好下一回練習的位置。"
  },
  {
    "id": "lastrite",
    "name": "別禮",
    "en": "LAST RITE",
    "tip": "安靜想一想，答案的線索常常就藏在題目裡。",
    "challenge": "找一道題目，指出其中最重要的兩個關鍵字。"
  },
  {
    "id": "pogranichnik",
    "name": "駿衛",
    "en": "POGRANICHNIK",
    "tip": "安排好下一步，前進就會更踏實。今天的你也值得被肯定。",
    "challenge": "看一下今日任務，替剩下的科目排一個練習順序。"
  },
  {
    "id": "alesh",
    "name": "阿列什",
    "en": "ALESH",
    "tip": "先估一估，再仔細計算。兩種方法一起用，能幫你檢查答案。",
    "challenge": "心算 198 加 203，再用接近的整百數檢查是否合理。"
  },
  {
    "id": "arclight",
    "name": "弧光",
    "en": "ARCLIGHT",
    "tip": "發現規律是一件很有趣的事。多觀察一次，就可能找到新的方法。",
    "challenge": "找出數列 3、6、12、24 的規律，說出下一個數。"
  },
  {
    "id": "avywenna",
    "name": "艾維文娜",
    "en": "AVYWENNA",
    "tip": "每一段練習都有自己的速度。照著你的步調，清楚完成就很好。",
    "challenge": "慢慢讀一小段文字，讀完後用自己的話說大意。"
  },
  {
    "id": "snowshine",
    "name": "晝雪",
    "en": "SNOWSHINE",
    "tip": "留一點溫柔給自己。遇到不熟悉的題目，可以再讀一次、再試一次。",
    "challenge": "對自己說一句鼓勵的話，也想一句可以鼓勵朋友的話。"
  },
  {
    "id": "xaihi",
    "name": "賽希",
    "en": "XAIHI",
    "tip": "把相似與不同找出來，新的觀念就會變得更清楚。",
    "challenge": "選兩種植物或動物，說出一個相同點和一個不同點。"
  },
  {
    "id": "akekuri",
    "name": "秋栗",
    "en": "AKEKURI",
    "tip": "小小的完成，也值得開心。把今天的一步，好好收進心裡。",
    "challenge": "回想今天完成的一件事，告訴自己哪裡做得很好。"
  },
  {
    "id": "antal",
    "name": "安塔爾",
    "en": "ANTAL",
    "tip": "多問一句為什麼，就是探索的開始。你的問題也很有價值。",
    "challenge": "看一件身邊的物品，提出一個你想研究的問題。"
  },
  {
    "id": "catcher",
    "name": "卡契爾",
    "en": "CATCHER",
    "tip": "看準目標，再穩穩前進。這一回只要比上一回多懂一點點就好。",
    "challenge": "選出一個今天最想弄懂的觀念，說出你想先問哪個問題。"
  },
  {
    "id": "estella",
    "name": "埃特拉",
    "en": "ESTELLA",
    "tip": "把新知識和生活連起來，就會更容易記住。",
    "challenge": "找一個今天學到的觀念，說說生活中哪裡用得到。"
  },
  {
    "id": "fluorite",
    "name": "螢石",
    "en": "FLUORITE",
    "tip": "多看一眼、多想一下，小線索也可能帶來大發現。",
    "challenge": "觀察附近的一束光或一個影子，說出你注意到的變化。"
  }
];
  root.COMPANION_ROSTER=roster;
  if(typeof module!=='undefined')module.exports=roster;
})(typeof window!=='undefined'?window:globalThis);
