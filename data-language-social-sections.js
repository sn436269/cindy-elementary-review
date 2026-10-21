/* Cindy 複習站：英語／社會練習小節，每節30題。
 * 1-1 等為本站按主題編排的練習編號，不代表課本官方小節名稱。
 * 原創情境與解析；來源、範圍限制見 sources-sections-v2.md。
 * 舊題 ID 保留，讓既有錯題記錄仍能對應。此檔可獨立載入。 */
(() => {
  'use strict';
  const legacy = [
  {
    "id": "en-1",
    "subject": "english",
    "title": "Unit 1｜Where Are You From?",
    "subtitle": "國家、來自哪裡與 be 動詞",
    "scope": "五上原創練習（實際期中範圍以班級通知為準）",
    "questions": [
      {
        "id": "en-1-01",
        "stem": "「日本」的英文是哪一個？",
        "options": [
          "Japan",
          "India",
          "Spain",
          "Australia"
        ],
        "answer": 0,
        "explanation": "Japan 是日本；India 是印度，Spain 是西班牙，Australia 是澳洲。國名的第一個字母要大寫。",
        "tag": "國家單字"
      },
      {
        "id": "en-1-02",
        "stem": "Which word means「印度」?",
        "options": [
          "Taiwan",
          "India",
          "Japan",
          "Spain"
        ],
        "answer": 1,
        "explanation": "India 是印度。讀國名時，也要注意其正確拼字。",
        "tag": "國家單字"
      },
      {
        "id": "en-1-03",
        "stem": "「澳洲」的英文是哪一個？",
        "options": [
          "Austria",
          "America",
          "Australia",
          "Asia"
        ],
        "answer": 2,
        "explanation": "Australia 是澳洲；Austria 是奧地利，Asia 是亞洲，字形相近也要仔細分辨。",
        "tag": "國家單字"
      },
      {
        "id": "en-1-04",
        "stem": "「西班牙」的英文是哪一個？",
        "options": [
          "Japan",
          "India",
          "Taiwan",
          "Spain"
        ],
        "answer": 3,
        "explanation": "Spain 是西班牙。Japan 是日本，India 是印度，Taiwan 是臺灣。",
        "tag": "國家單字"
      },
      {
        "id": "en-1-05",
        "stem": "Which phrase means「英國」?",
        "options": [
          "the UK",
          "the USA",
          "Japan",
          "Australia"
        ],
        "answer": 0,
        "explanation": "the UK 表示英國；the USA 表示美國。兩個縮寫前面通常都加 the。",
        "tag": "國家單字"
      },
      {
        "id": "en-1-06",
        "stem": "Which phrase means「美國」?",
        "options": [
          "the UK",
          "the USA",
          "Spain",
          "India"
        ],
        "answer": 1,
        "explanation": "the USA 表示美國，注意不要和 the UK（英國）混淆。",
        "tag": "國家單字"
      },
      {
        "id": "en-1-07",
        "stem": "I ___ from Taiwan.",
        "options": [
          "is",
          "are",
          "am",
          "be"
        ],
        "answer": 2,
        "explanation": "主詞 I 搭配 am，因此完整句子是 I am from Taiwan.。",
        "tag": "be 動詞"
      },
      {
        "id": "en-1-08",
        "stem": "She ___ from Spain.",
        "options": [
          "am",
          "are",
          "do",
          "is"
        ],
        "answer": 3,
        "explanation": "She 是第三人稱單數，be 動詞使用 is。",
        "tag": "be 動詞"
      },
      {
        "id": "en-1-09",
        "stem": "They ___ from Australia.",
        "options": [
          "are",
          "is",
          "am",
          "does"
        ],
        "answer": 0,
        "explanation": "They 表示他們，搭配 are，不使用單數的 is。",
        "tag": "be 動詞"
      },
      {
        "id": "en-1-10",
        "stem": "You ___ from Japan.",
        "options": [
          "am",
          "are",
          "is",
          "does"
        ],
        "answer": 1,
        "explanation": "You 的 be 動詞是 are，完整句子是 You are from Japan.。",
        "tag": "be 動詞"
      },
      {
        "id": "en-1-11",
        "stem": "Ben and Mia ___ from the UK.",
        "options": [
          "is",
          "am",
          "are",
          "be"
        ],
        "answer": 2,
        "explanation": "Ben and Mia 是兩個人，可用 they 代替，因此搭配 are。",
        "tag": "be 動詞"
      },
      {
        "id": "en-1-12",
        "stem": "My brother ___ from Taiwan.",
        "options": [
          "are",
          "am",
          "do",
          "is"
        ],
        "answer": 3,
        "explanation": "My brother 指一位哥哥或弟弟，是單數主詞，因此使用 is。",
        "tag": "be 動詞"
      },
      {
        "id": "en-1-13",
        "stem": "A: Where are you from? B: ___",
        "options": [
          "I’m from India.",
          "I’m eleven.",
          "It is a book.",
          "I like apples."
        ],
        "answer": 0,
        "explanation": "Where are you from? 詢問來自哪裡，回答要提供來源地，例如 I’m from India.。",
        "tag": "生活問答"
      },
      {
        "id": "en-1-14",
        "stem": "A: Is she from Japan? B: Yes, ___.",
        "options": [
          "she am",
          "she is",
          "she are",
          "she do"
        ],
        "answer": 1,
        "explanation": "Is she ...? 的肯定簡答是 Yes, she is.。主詞和 be 動詞要前後一致。",
        "tag": "肯定簡答"
      },
      {
        "id": "en-1-15",
        "stem": "A: Is he from Spain? B: No, ___.",
        "options": [
          "he aren’t",
          "he am not",
          "he isn’t",
          "he doesn’t"
        ],
        "answer": 2,
        "explanation": "以 Is he ...? 詢問時，否定簡答是 No, he isn’t.。doesn’t 用於一般動詞的問答。",
        "tag": "否定簡答"
      },
      {
        "id": "en-1-16",
        "stem": "「我來自臺灣」最合適的英文是哪一句？",
        "options": [
          "I’m Taiwan.",
          "I from Taiwan.",
          "I are from Taiwan.",
          "I’m from Taiwan."
        ],
        "answer": 3,
        "explanation": "「來自」用 be from 表達；主詞 I 要搭配 am，縮寫為 I’m。",
        "tag": "句子翻譯"
      },
      {
        "id": "en-1-17",
        "stem": "「她來自澳洲」最合適的英文是哪一句？",
        "options": [
          "She’s from Australia.",
          "She am from Australia.",
          "She from Australia.",
          "She’s from Australian."
        ],
        "answer": 0,
        "explanation": "She’s 是 She is 的縮寫，from 後面接國名 Australia。Australian 是「澳洲的／澳洲人」。",
        "tag": "句子翻譯"
      },
      {
        "id": "en-1-18",
        "stem": "哪個句子的國名大小寫正確？",
        "options": [
          "He is from japan.",
          "He is from Japan.",
          "He is from JAPan.",
          "he is from japan."
        ],
        "answer": 1,
        "explanation": "國名是專有名詞，Japan 的第一個字母要大寫；句子開頭 He 也要大寫。",
        "tag": "大小寫"
      },
      {
        "id": "en-1-19",
        "stem": "I am 的正確縮寫是哪一個？",
        "options": [
          "Im’",
          "I’am",
          "I’m",
          "I’s"
        ],
        "answer": 2,
        "explanation": "I am 可縮寫成 I’m，省略的字母以撇號表示。",
        "tag": "縮寫"
      },
      {
        "id": "en-1-20",
        "stem": "She is 的正確縮寫是哪一個？",
        "options": [
          "Shes’",
          "She’re",
          "She’m",
          "She’s"
        ],
        "answer": 3,
        "explanation": "She is 可縮寫成 She’s；She’re 和 She’m 都不是此句的正確寫法。",
        "tag": "縮寫"
      },
      {
        "id": "en-1-21",
        "stem": "A: Where ___ they from? B: They’re from the USA.",
        "options": [
          "are",
          "is",
          "am",
          "does"
        ],
        "answer": 0,
        "explanation": "主詞 they 搭配 are，因此問句是 Where are they from?。",
        "tag": "問句句型"
      },
      {
        "id": "en-1-22",
        "stem": "A: Where is Amy from? B: ___ from the UK.",
        "options": [
          "He’s",
          "She’s",
          "They’re",
          "I’m"
        ],
        "answer": 1,
        "explanation": "Amy 在這段對話中以 she 代替，所以回答 She’s from the UK.。",
        "tag": "代名詞"
      },
      {
        "id": "en-1-23",
        "stem": "Read: “Tom is from Japan. Lily is from Spain.” Where is Lily from?",
        "options": [
          "Japan",
          "India",
          "Spain",
          "the UK"
        ],
        "answer": 2,
        "explanation": "短文第二句明確說 Lily is from Spain.，作答時要找 Lily 的資料。",
        "tag": "短文閱讀"
      },
      {
        "id": "en-1-24",
        "stem": "Read: “I’m Kai. I’m from Taiwan.” Which sentence is true?",
        "options": [
          "Kai is from Spain.",
          "Kai is from India.",
          "Kai is from the USA.",
          "Kai is from Taiwan."
        ],
        "answer": 3,
        "explanation": "I’m Kai. 表示說話者是 Kai；下一句 I’m from Taiwan. 說明 Kai 來自臺灣。",
        "tag": "短文閱讀"
      },
      {
        "id": "en-1-25",
        "stem": "Read: “Nora is from Australia, not the UK.” Is Nora from the UK?",
        "options": [
          "No, she isn’t.",
          "Yes, she is.",
          "Yes, he is.",
          "No, they aren’t."
        ],
        "answer": 0,
        "explanation": "not the UK 排除了英國；Nora 在這裡以 she 代替，因此答 No, she isn’t.。",
        "tag": "短文閱讀"
      },
      {
        "id": "en-1-26",
        "stem": "A: Is Leo from India? B: No, he isn’t. He’s from Japan. Where is Leo from?",
        "options": [
          "India",
          "Japan",
          "Spain",
          "Australia"
        ],
        "answer": 1,
        "explanation": "回答先否定 India，接著用 He’s from Japan. 提供正確來源地。",
        "tag": "對話理解"
      },
      {
        "id": "en-1-27",
        "stem": "選出正確的問句。",
        "options": [
          "Is you from the USA?",
          "Am you from the USA?",
          "Are you from the USA?",
          "You from the USA?"
        ],
        "answer": 2,
        "explanation": "You 搭配 are；一般問句將 are 放在 you 前面，形成 Are you ...?。",
        "tag": "問句句型"
      },
      {
        "id": "en-1-28",
        "stem": "把 “he / from / is / India” 排成正確的直述句。",
        "options": [
          "Is he from India.",
          "He from is India.",
          "From India he is?",
          "He is from India."
        ],
        "answer": 3,
        "explanation": "直述句的基本順序是主詞 He＋be 動詞 is＋from＋國名 India。",
        "tag": "句子重組"
      },
      {
        "id": "en-1-29",
        "stem": "空格應填哪個字？Where are you ___?",
        "options": [
          "from",
          "on",
          "by",
          "at"
        ],
        "answer": 0,
        "explanation": "Where are you from? 是詢問來自哪裡的完整問句，be from 表示「來自」。",
        "tag": "介系詞"
      },
      {
        "id": "en-1-30",
        "stem": "Read: “Ava and Max are from the UK. They are classmates.” Who is from the UK?",
        "options": [
          "Only Ava.",
          "Both Ava and Max.",
          "Only Max.",
          "Neither Ava nor Max."
        ],
        "answer": 1,
        "explanation": "Ava and Max are from the UK. 的主詞包括兩人，所以兩人都來自英國。Both 表示兩者都。",
        "tag": "短文閱讀"
      }
    ]
  },
  {
    "id": "en-2",
    "subject": "english",
    "title": "Unit 2｜How Do You Go to School?",
    "subtitle": "交通方式與 do／does、go／goes",
    "scope": "五上原創練習（實際期中範圍以班級通知為準）",
    "questions": [
      {
        "id": "en-2-01",
        "stem": "「步行」的英文片語是哪一個？",
        "options": [
          "on foot",
          "by foot",
          "on feet",
          "by walk"
        ],
        "answer": 0,
        "explanation": "表示交通方式的「步行」用 on foot，是要特別記住的固定片語。",
        "tag": "交通單字"
      },
      {
        "id": "en-2-02",
        "stem": "「搭公車」的英文是哪一個？",
        "options": [
          "by bike",
          "by bus",
          "by train",
          "by taxi"
        ],
        "answer": 1,
        "explanation": "bus 是公車；by bus 表示搭公車。by 後面的交通工具在此不加 a。",
        "tag": "交通單字"
      },
      {
        "id": "en-2-03",
        "stem": "「騎腳踏車」的英文是哪一個？",
        "options": [
          "by bus",
          "by boat",
          "by bike",
          "by car"
        ],
        "answer": 2,
        "explanation": "bike 是腳踏車，by bike 表示騎腳踏車。",
        "tag": "交通單字"
      },
      {
        "id": "en-2-04",
        "stem": "Which phrase means「搭火車」?",
        "options": [
          "by taxi",
          "by scooter",
          "by bike",
          "by train"
        ],
        "answer": 3,
        "explanation": "train 是火車，by train 表示搭火車。",
        "tag": "交通單字"
      },
      {
        "id": "en-2-05",
        "stem": "「搭計程車」的英文是哪一個？",
        "options": [
          "by taxi",
          "by train",
          "by bus",
          "on foot"
        ],
        "answer": 0,
        "explanation": "taxi 是計程車；by taxi 表示搭計程車。",
        "tag": "交通單字"
      },
      {
        "id": "en-2-06",
        "stem": "在臺北，「搭捷運」可以怎麼說？",
        "options": [
          "by foot",
          "by MRT",
          "by classroom",
          "on car"
        ],
        "answer": 1,
        "explanation": "by MRT 或 by metro 都可表示搭捷運。此題只有 by MRT 是正確的交通片語。",
        "tag": "交通單字"
      },
      {
        "id": "en-2-07",
        "stem": "「搭汽車」的英文是哪一個？",
        "options": [
          "by bike",
          "on foot",
          "by car",
          "by train"
        ],
        "answer": 2,
        "explanation": "car 是汽車，by car 表示以汽車作為交通工具。",
        "tag": "交通單字"
      },
      {
        "id": "en-2-08",
        "stem": "「搭機車」的英文片語是哪一個？",
        "options": [
          "by school",
          "on bus",
          "on taxi",
          "by scooter"
        ],
        "answer": 3,
        "explanation": "scooter 在本單元表示機車；交通方式可用 by scooter 表達。",
        "tag": "交通單字"
      },
      {
        "id": "en-2-09",
        "stem": "I ___ to school by bus.",
        "options": [
          "go",
          "goes",
          "going",
          "is go"
        ],
        "answer": 0,
        "explanation": "主詞 I 的現在簡單式使用 go。goes 用在 he、she 或第三人稱單數主詞。",
        "tag": "go／goes"
      },
      {
        "id": "en-2-10",
        "stem": "She ___ to school on foot.",
        "options": [
          "go",
          "goes",
          "are go",
          "going"
        ],
        "answer": 1,
        "explanation": "She 是第三人稱單數，現在簡單式的 go 要加 es，成為 goes。",
        "tag": "go／goes"
      },
      {
        "id": "en-2-11",
        "stem": "They ___ to school by train.",
        "options": [
          "goes",
          "is goes",
          "go",
          "does go to"
        ],
        "answer": 2,
        "explanation": "主詞 they 使用原形 go。完整句子是 They go to school by train.。",
        "tag": "go／goes"
      },
      {
        "id": "en-2-12",
        "stem": "My dad ___ to work by car.",
        "options": [
          "go",
          "are go",
          "going",
          "goes"
        ],
        "answer": 3,
        "explanation": "My dad 指一個人，是第三人稱單數，因此使用 goes。",
        "tag": "go／goes"
      },
      {
        "id": "en-2-13",
        "stem": "How ___ you go to school?",
        "options": [
          "do",
          "does",
          "is",
          "am"
        ],
        "answer": 0,
        "explanation": "詢問 you 的一般動詞 go，要使用助動詞 do，形成 How do you go to school?。",
        "tag": "do／does"
      },
      {
        "id": "en-2-14",
        "stem": "How ___ he go to school?",
        "options": [
          "do",
          "does",
          "are",
          "am"
        ],
        "answer": 1,
        "explanation": "He 是第三人稱單數，問句使用 does；有 does 之後，動詞保留原形 go。",
        "tag": "do／does"
      },
      {
        "id": "en-2-15",
        "stem": "Does Amy ___ to school by bike?",
        "options": [
          "goes",
          "going",
          "go",
          "went"
        ],
        "answer": 2,
        "explanation": "問句已有 does，後面的主要動詞要用原形 go，不再使用 goes。",
        "tag": "do／does"
      },
      {
        "id": "en-2-16",
        "stem": "A: Does Ben go to school by bus? B: Yes, ___.",
        "options": [
          "he is",
          "he do",
          "he goes",
          "he does"
        ],
        "answer": 3,
        "explanation": "Does he ...? 的肯定簡答是 Yes, he does.。簡答保留助動詞 does。",
        "tag": "肯定簡答"
      },
      {
        "id": "en-2-17",
        "stem": "A: Does Mia go to school by taxi? B: No, ___.",
        "options": [
          "she doesn’t",
          "she isn’t",
          "she don’t",
          "she not"
        ],
        "answer": 0,
        "explanation": "以 Does Mia ...? 詢問一般動詞，否定簡答為 No, she doesn’t.。",
        "tag": "否定簡答"
      },
      {
        "id": "en-2-18",
        "stem": "A: Do they go to school on foot? B: Yes, ___.",
        "options": [
          "they does",
          "they do",
          "they are",
          "he does"
        ],
        "answer": 1,
        "explanation": "Do they ...? 的簡答是 Yes, they do.，主詞和助動詞要對應。",
        "tag": "肯定簡答"
      },
      {
        "id": "en-2-19",
        "stem": "A: How do you go to school? B: ___",
        "options": [
          "I’m from Japan.",
          "I’m ten years old.",
          "I go to school by bike.",
          "It’s a pencil."
        ],
        "answer": 2,
        "explanation": "How do you go to school? 問交通方式，回答需指出上學方式，例如 by bike。",
        "tag": "生活問答"
      },
      {
        "id": "en-2-20",
        "stem": "空格應填哪個字？I go to school ___ foot.",
        "options": [
          "by",
          "at",
          "from",
          "on"
        ],
        "answer": 3,
        "explanation": "步行使用固定片語 on foot；不能比照其他交通工具寫成 by foot。",
        "tag": "介系詞"
      },
      {
        "id": "en-2-21",
        "stem": "空格應填哪個字？He goes to school ___ bus.",
        "options": [
          "by",
          "on",
          "from",
          "for"
        ],
        "answer": 0,
        "explanation": "「搭公車」用 by bus，因此應填 by。",
        "tag": "介系詞"
      },
      {
        "id": "en-2-22",
        "stem": "哪一句英文正確？",
        "options": [
          "She go to school by MRT.",
          "She goes to school by MRT.",
          "She goes to school by a MRT.",
          "She is go to school by MRT."
        ],
        "answer": 1,
        "explanation": "She 要搭配 goes，交通片語是 by MRT，因此第一句正確。",
        "tag": "句子判讀"
      },
      {
        "id": "en-2-23",
        "stem": "哪一句正確表示「我們走路上學」？",
        "options": [
          "We goes to school on foot.",
          "We go to school by foot.",
          "We go to school on foot.",
          "We is go to school on foot."
        ],
        "answer": 2,
        "explanation": "We 搭配 go，走路使用 on foot，合起來就是 We go to school on foot.。",
        "tag": "句子翻譯"
      },
      {
        "id": "en-2-24",
        "stem": "Read: “I’m Tim. My school is near my home. I go to school on foot.” How does Tim go to school?",
        "options": [
          "By bus.",
          "By taxi.",
          "By train.",
          "On foot."
        ],
        "answer": 3,
        "explanation": "短文最後一句明確指出 on foot，因此 Tim 是走路上學。",
        "tag": "短文閱讀"
      },
      {
        "id": "en-2-25",
        "stem": "Read: “May goes to school by bus. Her brother goes by bike.” How does May’s brother go to school?",
        "options": [
          "By bike.",
          "By bus.",
          "By taxi.",
          "On foot."
        ],
        "answer": 0,
        "explanation": "題目問 May 的兄弟；第二句說 Her brother goes by bike.，不是 May 的 by bus。",
        "tag": "短文閱讀"
      },
      {
        "id": "en-2-26",
        "stem": "Read: “Jack doesn’t go to school by car. He goes by train.” Which sentence is true?",
        "options": [
          "Jack goes to school by car.",
          "Jack goes to school by train.",
          "Jack walks to school.",
          "Jack goes to school by taxi."
        ],
        "answer": 1,
        "explanation": "第一句否定搭汽車，第二句肯定搭火車；應依完整資訊判斷。",
        "tag": "短文閱讀"
      },
      {
        "id": "en-2-27",
        "stem": "A: Does Eva go to school by bike? B: No. She goes on foot. Does Eva walk to school?",
        "options": [
          "No, she doesn’t.",
          "Yes, he does.",
          "Yes, she does.",
          "No, they don’t."
        ],
        "answer": 2,
        "explanation": "go on foot 就是 walk（步行），因此 Eva 確實走路上學，回答 Yes, she does.。",
        "tag": "對話理解"
      },
      {
        "id": "en-2-28",
        "stem": "“How does Leo go to school?” 這句話在問什麼？",
        "options": [
          "Leo 來自哪裡？",
          "Leo 幾歲？",
          "Leo 喜歡什麼顏色？",
          "Leo 用什麼交通方式上學？"
        ],
        "answer": 3,
        "explanation": "How 在此詢問「用什麼方式」，搭配 go to school 就是在問上學的交通方式。",
        "tag": "問句理解"
      },
      {
        "id": "en-2-29",
        "stem": "把 “goes / by bus / Amy / to school” 排成正確的句子。",
        "options": [
          "Amy goes to school by bus.",
          "Amy go by bus to school.",
          "Goes Amy to school by bus.",
          "Amy by bus goes to school?"
        ],
        "answer": 0,
        "explanation": "基本順序是主詞 Amy＋動詞 goes＋to school＋交通方式 by bus。",
        "tag": "句子重組"
      },
      {
        "id": "en-2-30",
        "stem": "Read: “Dan and Ann go to school by MRT. Their friend Sue goes on foot.” Who goes to school by MRT?",
        "options": [
          "Only Sue.",
          "Dan and Ann.",
          "Ann and Sue.",
          "All three children."
        ],
        "answer": 1,
        "explanation": "第一句將 Dan 和 Ann 都列為搭捷運的人；Sue 在第二句的交通方式是步行。",
        "tag": "短文閱讀"
      }
    ]
  },
  {
    "id": "so-1",
    "subject": "social",
    "title": "第一單元｜臺灣的位置與先民足跡",
    "subtitle": "地圖、史前生活與原住民族文化",
    "scope": "五上原創練習（實際期中範圍以班級通知為準）",
    "questions": [
      {
        "id": "so-1-01",
        "stem": "閱讀地圖時，想知道某個符號代表什麼，應先查看哪一項？",
        "options": [
          "圖例",
          "書本定價",
          "作者照片",
          "紙張厚度"
        ],
        "answer": 0,
        "explanation": "圖例說明地圖符號與顏色的意義，能幫助我們讀懂道路、河流、聚落等資訊。",
        "tag": "地圖判讀"
      },
      {
        "id": "so-1-02",
        "stem": "在有指北箭頭的地圖上，應用什麼判斷北方？",
        "options": [
          "一律以紙張上方猜測",
          "指北箭頭的方向",
          "字最多的地方",
          "圖例旁的空白處"
        ],
        "answer": 1,
        "explanation": "閱讀方向以地圖標示為準，不能假定每張地圖的上方都一定是北方。",
        "tag": "地圖方位"
      },
      {
        "id": "so-1-03",
        "stem": "地圖上的比例尺主要用來做什麼？",
        "options": [
          "判斷天空雲量",
          "決定地名讀音",
          "換算圖上距離與實際距離",
          "計算考試分數"
        ],
        "answer": 2,
        "explanation": "比例尺表示地圖距離和實際距離的關係，能協助估算兩地的實際距離。",
        "tag": "比例尺"
      },
      {
        "id": "so-1-04",
        "stem": "比例尺顯示圖上 1 公分代表實際 2 公里。兩地圖上相距 3 公分，實際約相距多少？",
        "options": [
          "2 公里",
          "3 公里",
          "9 公里",
          "6 公里"
        ],
        "answer": 3,
        "explanation": "每 1 公分代表 2 公里，所以 3 公分代表 3×2＝6 公里。這是圖上直線距離的換算。",
        "tag": "比例尺應用"
      },
      {
        "id": "so-1-05",
        "stem": "想查看臺灣主要山脈和平原的分布，最適合使用哪種地圖？",
        "options": [
          "地形圖",
          "百貨公司樓層圖",
          "校園座位表",
          "電影場次表"
        ],
        "answer": 0,
        "explanation": "地形圖用顏色、等高線等方式表現地勢，適合觀察山脈、平原與盆地分布。",
        "tag": "地圖選用"
      },
      {
        "id": "so-1-06",
        "stem": "臺灣本島東側主要面向哪一片大洋？",
        "options": [
          "大西洋",
          "太平洋",
          "印度洋",
          "北冰洋"
        ],
        "answer": 1,
        "explanation": "臺灣位於太平洋西緣，本島東側面向太平洋。",
        "tag": "臺灣位置"
      },
      {
        "id": "so-1-07",
        "stem": "臺灣本島與中國大陸之間主要隔著什麼？",
        "options": [
          "大西洋",
          "喜馬拉雅山",
          "臺灣海峽",
          "北冰洋"
        ],
        "answer": 2,
        "explanation": "臺灣海峽位於臺灣本島西側，是臺灣與中國大陸之間的海域。",
        "tag": "臺灣位置"
      },
      {
        "id": "so-1-08",
        "stem": "臺灣本島與日本之間的相對位置，哪個描述較正確？",
        "options": [
          "日本大致位於臺灣的正南方",
          "日本與臺灣完全重疊",
          "日本大致位於臺灣的西南方",
          "日本大致位於臺灣的東北方"
        ],
        "answer": 3,
        "explanation": "從東亞地圖可見，日本大致位於臺灣東北方；相對位置需要先確定參考地點。",
        "tag": "相對位置"
      },
      {
        "id": "so-1-09",
        "stem": "菲律賓大致位於臺灣的哪個方向？",
        "options": [
          "南方",
          "正北方",
          "西北方",
          "東北方"
        ],
        "answer": 0,
        "explanation": "由東亞地圖判讀，菲律賓群島大致在臺灣南方。",
        "tag": "相對位置"
      },
      {
        "id": "so-1-10",
        "stem": "臺灣位在東亞島嶼與海上航線附近，可能產生什麼影響？",
        "options": [
          "完全無法與外界接觸",
          "便於與周邊地區進行海上往來",
          "所有地方都一定適合建港",
          "不需要考慮天候即可航行"
        ],
        "answer": 1,
        "explanation": "地理位置使臺灣有海上交流機會，但港口條件、技術與天候仍會影響航行。",
        "tag": "位置與發展"
      },
      {
        "id": "so-1-11",
        "stem": "「史前時代」在研究某地歷史時，通常指什麼？",
        "options": [
          "完全沒有人類生活的時期",
          "所有恐龍生活的時期",
          "當地尚未留下文字紀錄的時期",
          "未來還沒發生的時期"
        ],
        "answer": 2,
        "explanation": "史前並非沒有歷史，而是缺少當地文字紀錄，研究者需利用考古遺物等證據了解生活。",
        "tag": "史前概念"
      },
      {
        "id": "so-1-12",
        "stem": "考古學家了解史前人類生活，主要依靠哪類證據？",
        "options": [
          "未註明來源的網路傳言",
          "只靠想像寫出的故事",
          "現代廣告代言",
          "遺址中的器物、遺跡與相關科學分析"
        ],
        "answer": 3,
        "explanation": "考古研究會分析出土器物、建築或生活遺跡及自然材料，交互比較以推論過去生活。",
        "tag": "考古證據"
      },
      {
        "id": "so-1-13",
        "stem": "遺址發現大量魚骨與貝殼，較合理的初步推論是什麼？",
        "options": [
          "當時人們可能曾利用水域食物資源",
          "當時每個人都一定只吃魚",
          "當時完全沒有其他食物",
          "當時的人一定會開汽車"
        ],
        "answer": 0,
        "explanation": "魚骨與貝殼可支持利用水域資源的推論，但無法單靠它們斷定所有人的完整飲食。",
        "tag": "證據推論"
      },
      {
        "id": "so-1-14",
        "stem": "在遺址發現磨製石器與陶器，最應採取哪種判斷方式？",
        "options": [
          "立刻認定全部是昨天製作的",
          "結合其他出土證據，分析當時技術與生活",
          "只靠器物顏色決定年代",
          "不保留出土位置紀錄"
        ],
        "answer": 1,
        "explanation": "器物可反映技術與用途，但年代和生活方式需要出土位置、其他遺物與科學分析共同判斷。",
        "tag": "考古方法"
      },
      {
        "id": "so-1-15",
        "stem": "臺灣史前人們製作陶器，可能帶來哪項生活便利？",
        "options": [
          "讓所有河川不再氾濫",
          "製造電腦程式",
          "儲存食物與烹煮",
          "保證每次狩獵成功"
        ],
        "answer": 2,
        "explanation": "陶器可作為盛裝、保存或烹煮的器具，反映人們利用材料改善生活的能力。",
        "tag": "史前生活"
      },
      {
        "id": "so-1-16",
        "stem": "新石器時代部分人群開始農耕後，生活可能出現什麼變化？",
        "options": [
          "完全不需要任何工具",
          "所有人都立刻住進高樓",
          "一定不再採集或捕魚",
          "在適合耕作處較長期定居"
        ],
        "answer": 3,
        "explanation": "農作物需要照顧，使人們較可能在適耕地長期居住；農耕仍可能與採集、漁獵並存。",
        "tag": "生活變遷"
      },
      {
        "id": "so-1-17",
        "stem": "史前人們選擇住處時，哪一組條件通常較有利？",
        "options": [
          "附近有水源、食物資源與適合居住的地形",
          "完全沒有水與食物",
          "每天必定淹水的河道中央",
          "只看石頭顏色，不考慮生活需求"
        ],
        "answer": 0,
        "explanation": "水、食物與安全的地形有助於維持生活，也說明聚落位置與自然環境有關。",
        "tag": "聚落與環境"
      },
      {
        "id": "so-1-18",
        "stem": "發現疑似古老陶片時，下列哪個做法較合適？",
        "options": [
          "私自挖走全部帶回家",
          "保持現場並請成人聯絡相關單位",
          "敲碎後比較聲音",
          "在網路上隨意出售"
        ],
        "answer": 1,
        "explanation": "遺物的出土位置和周邊環境也是重要資料，應保留現場並請專業人員處理。",
        "tag": "文化資產"
      },
      {
        "id": "so-1-19",
        "stem": "同一遺址出現不同時期的器物，研究者應如何處理？",
        "options": [
          "把所有器物混在一起不記錄",
          "只留下最好看的器物",
          "記錄各自出土層位並交互分析",
          "直接假定全部同一天製作"
        ],
        "answer": 2,
        "explanation": "不同層位和出土脈絡可幫助判斷先後關係，考古不能只挑選外觀漂亮的器物。",
        "tag": "考古方法"
      },
      {
        "id": "so-1-20",
        "stem": "關於臺灣原住民族文化，哪個說法正確？",
        "options": [
          "所有族群的語言與祭儀完全相同",
          "所有原住民族都住在同一地形",
          "每個族人都必須從事同一職業",
          "各族有不同的語言、祭儀與生活文化"
        ],
        "answer": 3,
        "explanation": "原住民族文化具有多樣性，族群之間與族群內部也有差異，不能用單一印象概括。",
        "tag": "多元文化"
      },
      {
        "id": "so-1-21",
        "stem": "了解某族祭典時，最適合先採取哪種方式？",
        "options": [
          "查閱該族或相關文化機構的說明並尊重規範",
          "只看玩笑影片就下結論",
          "任意模仿所有儀式取樂",
          "認定所有祭典都只有娛樂用途"
        ],
        "answer": 0,
        "explanation": "祭儀可能與信仰、農耕、漁獵或社會關係有關，應理解族人觀點並遵守參與規範。",
        "tag": "文化尊重"
      },
      {
        "id": "so-1-22",
        "stem": "山區居民利用周邊材料與技術設計住屋，最能呈現什麼？",
        "options": [
          "所有房屋都與環境無關",
          "生活文化與環境之間的關係",
          "所有地區都使用相同材料",
          "只要住山區就不能與外界往來"
        ],
        "answer": 1,
        "explanation": "可取得的材料、氣候和地形會影響住屋設計，人們也會以技術適應環境。",
        "tag": "文化與環境"
      },
      {
        "id": "so-1-23",
        "stem": "下列哪個問題最能探究族群文化與自然環境的關聯？",
        "options": [
          "哪一族的人一定比較聰明？",
          "哪一族的每個人都喜歡同一顏色？",
          "當地的氣候和資源如何影響飲食與住屋？",
          "為何所有族群都完全相同？"
        ],
        "answer": 2,
        "explanation": "比較氣候、資源與生活方式，能建立有證據的關聯；不能以族群標籤評斷個人能力或喜好。",
        "tag": "探究提問"
      },
      {
        "id": "so-1-24",
        "stem": "介紹原住民族時，使用哪種資料較可靠？",
        "options": [
          "匿名轉傳且沒有來源的訊息",
          "把各族混成一族的笑話",
          "只憑一張服飾照片猜測全部生活",
          "有清楚來源、日期並呈現族人觀點的資料"
        ],
        "answer": 3,
        "explanation": "可靠資料應交代來源與日期；族人與相關文化機構的說明可幫助避免誤解和刻板印象。",
        "tag": "資料素養"
      },
      {
        "id": "so-1-25",
        "stem": "社區保存傳統語言與口述故事，有什麼意義？",
        "options": [
          "傳承族群記憶與文化知識",
          "讓所有人停止使用其他語言",
          "保證所有故事細節都不需查證",
          "使文化永遠不能改變"
        ],
        "answer": 0,
        "explanation": "語言和口述故事能保存歷史經驗與文化知識；研究時仍可與其他資料比較。",
        "tag": "文化傳承"
      },
      {
        "id": "so-1-26",
        "stem": "想了解同一地區「以前與現在」的聚落變化，哪組資料最適合比較？",
        "options": [
          "兩張拍攝地點不明的圖片",
          "不同年代、涵蓋相同地區的地圖與照片",
          "今天的菜單與明天的氣溫",
          "只有一本沒有地名的故事書"
        ],
        "answer": 1,
        "explanation": "固定地區並比較不同年代的地圖與照片，可找出道路、住屋及土地利用的變化。",
        "tag": "時空比較"
      },
      {
        "id": "so-1-27",
        "stem": "不同社群之間交換石材、器物或食物，最可能顯示什麼？",
        "options": [
          "每個社群都完全與世隔絕",
          "所有器物一定來自同一家庭",
          "社群間可能存在往來與交流",
          "人們完全不需要交通工具或路線"
        ],
        "answer": 2,
        "explanation": "交換活動表示不同社群可能互相接觸；研究者還需分析器物來源、路線與年代。",
        "tag": "交流與發展"
      },
      {
        "id": "so-1-28",
        "stem": "「史前人都沒有知識與技術」這句話有什麼問題？",
        "options": [
          "正確，因為沒有文字就沒有技術",
          "正確，因為只有現代人才會思考",
          "只要器物很舊就不必研究",
          "忽略了製作工具、利用資源等技術證據"
        ],
        "answer": 3,
        "explanation": "史前人能製作工具、安排生活並適應環境，顯示其知識與技術；缺少文字不等於缺少能力。",
        "tag": "歷史理解"
      },
      {
        "id": "so-1-29",
        "stem": "兩份資料對同一遺址的說法不同，最合適的做法是什麼？",
        "options": [
          "比較來源、證據與發表日期後再判斷",
          "只相信字體比較大的那份",
          "選自己最喜歡的結論即可",
          "不看內容就說兩份都錯"
        ],
        "answer": 0,
        "explanation": "研究結論可能隨新證據修正；比較作者、時間與證據，有助於做出更可靠的判斷。",
        "tag": "資料辨識"
      },
      {
        "id": "so-1-30",
        "stem": "學習臺灣先民的生活，最適合得到哪個觀念？",
        "options": [
          "生活方式從古至今完全不變",
          "人們會運用環境資源，也透過交流改變生活",
          "所有文化只有一種正確樣貌",
          "地理環境完全決定每個人的未來"
        ],
        "answer": 1,
        "explanation": "人們會適應環境、發展技術並互相交流。環境影響生活，但人的選擇與互動也很重要。",
        "tag": "單元統整"
      }
    ]
  },
  {
    "id": "so-2",
    "subject": "social",
    "title": "第二單元｜臺灣登上國際舞臺",
    "subtitle": "大航海時代、交流與歷史證據",
    "scope": "五上原創練習（實際期中範圍以班級通知為準）",
    "questions": [
      {
        "id": "so-2-01",
        "stem": "「大航海時代」的發展，和下列哪項變化最有關？",
        "options": [
          "遠洋航海技術進步與跨海貿易擴張",
          "所有地區停止海上往來",
          "人類不再需要地圖",
          "各地只使用陸路且不造船"
        ],
        "answer": 0,
        "explanation": "航海與造船技術改進，加上尋找商品、市場與航路的需求，促進跨海交流及勢力擴張。",
        "tag": "大航海背景"
      },
      {
        "id": "so-2-02",
        "stem": "十七世紀臺灣受到海外勢力重視，哪項因素很重要？",
        "options": [
          "位在北冰洋正中央",
          "接近東亞海上航線，具有貿易與轉運價值",
          "完全沒有任何自然資源",
          "所有海港全年都不用管理"
        ],
        "answer": 1,
        "explanation": "臺灣位於東亞海域，鄰近中國、日本及東南亞的航線，地理位置具有貿易和轉運價值。",
        "tag": "位置與貿易"
      },
      {
        "id": "so-2-03",
        "stem": "荷蘭人在十七世紀主要以臺灣哪個地區作為統治中心？",
        "options": [
          "今天臺北信義區的高樓",
          "喜馬拉雅山區",
          "今天臺南一帶",
          "北極圈"
        ],
        "answer": 2,
        "explanation": "荷蘭人在臺灣南部建立據點，主要統治中心位於今天臺南一帶。",
        "tag": "荷蘭據點"
      },
      {
        "id": "so-2-04",
        "stem": "西班牙人在十七世紀曾在臺灣哪個區域建立據點？",
        "options": [
          "只在今天高雄港",
          "阿里山最高峰頂",
          "只在蘭嶼海岸",
          "北部的雞籠與淡水一帶"
        ],
        "answer": 3,
        "explanation": "西班牙曾在臺灣北部雞籠（今基隆）與淡水一帶建立據點，以參與東亞貿易及傳教。",
        "tag": "西班牙據點"
      },
      {
        "id": "so-2-05",
        "stem": "比較荷蘭與西班牙在臺灣建立的據點，哪個說法正確？",
        "options": [
          "荷蘭主要在南部，西班牙曾在北部",
          "兩者都完全沒有來過臺灣",
          "荷蘭只在北部，西班牙只在南部",
          "兩者都以臺灣中央山脈最高峰為港口"
        ],
        "answer": 0,
        "explanation": "十七世紀荷蘭勢力以南部臺南一帶為中心；西班牙則曾在北部基隆與淡水一帶活動。",
        "tag": "歷史空間"
      },
      {
        "id": "so-2-06",
        "stem": "荷蘭人在 1624 年於臺灣南部建立據點。這是哪一個世紀？",
        "options": [
          "十五世紀",
          "十七世紀",
          "十六世紀",
          "十九世紀"
        ],
        "answer": 1,
        "explanation": "1601 年到 1700 年屬十七世紀，所以 1624 年是十七世紀。",
        "tag": "年代判讀"
      },
      {
        "id": "so-2-07",
        "stem": "大航海時代來到東亞的商人，主要希望透過什麼獲利？",
        "options": [
          "讓所有港口停止使用",
          "禁止所有商品流動",
          "買賣商品與掌握貿易路線",
          "只蒐集沒有用途的空白紙張"
        ],
        "answer": 2,
        "explanation": "商人透過跨地區買賣商品獲利，掌握港口和航線也可能增加商業利益。",
        "tag": "貿易動機"
      },
      {
        "id": "so-2-08",
        "stem": "十七世紀臺灣曾外銷鹿皮，這最能顯示什麼？",
        "options": [
          "鹿皮只供本地使用，從不外運",
          "臺灣當時沒有任何對外交流",
          "所有人都以鹿皮作為唯一食物",
          "臺灣資源被納入跨地區貿易"
        ],
        "answer": 3,
        "explanation": "鹿皮外銷反映臺灣自然資源與海外市場之間的關係，也可能影響獵捕與生態。",
        "tag": "商品與交流"
      },
      {
        "id": "so-2-09",
        "stem": "當海外市場大量需要鹿皮，可能產生哪項問題？",
        "options": [
          "過度獵捕造成鹿群數量減少",
          "所有鹿都必定變得更多",
          "土地利用完全不會改變",
          "對在地居民生活毫無影響"
        ],
        "answer": 0,
        "explanation": "商品需求可能刺激捕獵；若超過動物族群恢復速度，便可能影響生態及居民生活。",
        "tag": "貿易與環境"
      },
      {
        "id": "so-2-10",
        "stem": "港口能成為貿易據點，通常需要考量哪項條件？",
        "options": [
          "只看地名是否好聽",
          "船隻停泊條件及與其他地區的連結",
          "只看沙灘顏色",
          "完全不必考慮海況"
        ],
        "answer": 1,
        "explanation": "港口的水深、遮蔽、交通連結和海況都會影響停泊與貨物轉運。",
        "tag": "港口條件"
      },
      {
        "id": "so-2-11",
        "stem": "海外勢力在臺灣建造城堡或要塞，主要可能有什麼用途？",
        "options": [
          "保證永遠不與人衝突",
          "只供現代遊客拍照",
          "軍事防守與控制據點",
          "讓海水完全停止流動"
        ],
        "answer": 2,
        "explanation": "城堡與要塞常有軍事防禦、保護據點與控制交通的功能，不能只以今天的觀光用途理解。",
        "tag": "統治與建築"
      },
      {
        "id": "so-2-12",
        "stem": "從歷史角度看，臺南安平一帶的城堡遺跡可以協助研究什麼？",
        "options": [
          "臺灣所有年代的每一件事",
          "未來一百年的確切天氣",
          "每位居民完全相同的感受",
          "當時海外勢力在臺灣的活動與建築"
        ],
        "answer": 3,
        "explanation": "建築遺跡是歷史證據之一，可配合文獻、考古資料了解活動及用途，但不能單獨回答所有問題。",
        "tag": "歷史遺跡"
      },
      {
        "id": "so-2-13",
        "stem": "海外勢力拓展貿易時，也可能帶來哪項變化？",
        "options": [
          "宗教、語言、作物與技術的交流",
          "所有地方文化立刻完全相同",
          "所有原有居民都沒有任何回應",
          "不同社群從此永不接觸"
        ],
        "answer": 0,
        "explanation": "海上往來不只運送商品，也促成宗教、語言、技術與生活方式的接觸和變化。",
        "tag": "文化交流"
      },
      {
        "id": "so-2-14",
        "stem": "評估荷蘭在臺統治對不同社群的影響，哪個做法最好？",
        "options": [
          "只看一位統治者的宣傳",
          "比較商人、原住民族與移民等不同立場的資料",
          "認定每個人感受都完全相同",
          "只用今天的電影情節當證據"
        ],
        "answer": 1,
        "explanation": "不同社群可能面對不同利益、負擔與衝突，應比較多種來源和立場。",
        "tag": "多元觀點"
      },
      {
        "id": "so-2-15",
        "stem": "荷蘭統治下徵收稅負與管理貿易，可能造成什麼影響？",
        "options": [
          "保證所有人收入完全相同",
          "完全不會影響任何交易",
          "增加統治收入，也可能使部分居民負擔或不滿",
          "使所有居民都自願接受所有規定"
        ],
        "answer": 2,
        "explanation": "稅與貿易管理可增加收入，也可能增加居民負擔；需要從不同立場看待影響。",
        "tag": "統治與社會"
      },
      {
        "id": "so-2-16",
        "stem": "鄭成功在 1661 年率軍來臺，之後在 1662 年使荷蘭結束在臺統治。哪個先後順序正確？",
        "options": [
          "荷蘭結束在臺統治 → 鄭成功率軍來臺",
          "兩件事都發生在 1624 年",
          "兩件事都發生在 1895 年",
          "鄭成功率軍來臺 → 荷蘭結束在臺統治"
        ],
        "answer": 3,
        "explanation": "1661 年先於 1662 年。排列歷史事件時，要比較年份並確認事件內容。",
        "tag": "歷史時序"
      },
      {
        "id": "so-2-17",
        "stem": "把以下事件依時間先後排列：甲、荷蘭在南部建立據點（1624）；乙、西班牙在北部建立據點（1626）；丙、鄭成功率軍來臺（1661）。",
        "options": [
          "甲 → 乙 → 丙",
          "丙 → 乙 → 甲",
          "乙 → 甲 → 丙",
          "甲 → 丙 → 乙"
        ],
        "answer": 0,
        "explanation": "比較年份可知 1624 最早、1626 其次、1661 最後，因此順序為甲、乙、丙。",
        "tag": "歷史時序"
      },
      {
        "id": "so-2-18",
        "stem": "十七世紀荷蘭與西班牙在臺灣的競爭，最能反映哪個背景？",
        "options": [
          "臺灣位於所有海上航線之外",
          "海外勢力爭取東亞貿易據點與影響力",
          "兩者只想參加現代運動比賽",
          "各國完全不重視商品與港口"
        ],
        "answer": 1,
        "explanation": "爭取港口及商業利益是海外勢力競爭的重要背景，臺灣也受國際局勢影響。",
        "tag": "國際局勢"
      },
      {
        "id": "so-2-19",
        "stem": "鄭氏政權在臺推動農業開墾，可能與哪個需求有關？",
        "options": [
          "讓所有農田永久荒廢",
          "使所有居民只靠海外送餐",
          "供應軍民糧食與建立統治基礎",
          "禁止任何人取得食物"
        ],
        "answer": 2,
        "explanation": "軍隊與居民需要穩定糧食，農業開墾能提供資源，也會改變土地利用。",
        "tag": "鄭氏時期"
      },
      {
        "id": "so-2-20",
        "stem": "開墾面積擴大時，對原先使用土地的社群可能產生什麼影響？",
        "options": [
          "所有社群一定都毫無影響",
          "所有河川自然停止流動",
          "原有社群不可能有自己的需求",
          "土地使用改變，可能產生協商或衝突"
        ],
        "answer": 3,
        "explanation": "土地可能同時是不同社群的生活資源，開墾變化可能帶來合作、協商或衝突。",
        "tag": "土地與社群"
      },
      {
        "id": "so-2-21",
        "stem": "研究大航海時代的臺灣，哪一組資料最適合交互參照？",
        "options": [
          "當時地圖、文書、考古遺物與相關研究",
          "只有現代廣告與未查證傳聞",
          "只看遊戲中的虛構世界",
          "只問一位同學猜年份"
        ],
        "answer": 0,
        "explanation": "不同類型證據各有用途與限制，交互比較可補足單一資料的不足。",
        "tag": "史料判讀"
      },
      {
        "id": "so-2-22",
        "stem": "一份十七世紀商人的日記說某商品「非常有價值」。閱讀時最需要注意什麼？",
        "options": [
          "日記中每個評價對所有人都一定相同",
          "作者的商業立場、寫作背景與其他證據",
          "只要是古文就完全不會偏頗",
          "不需知道日記的年代"
        ],
        "answer": 1,
        "explanation": "日記保留個人觀察，也反映作者立場；應結合背景和其他證據解讀。",
        "tag": "史料觀點"
      },
      {
        "id": "so-2-23",
        "stem": "古地圖畫出的海岸線和今日地圖不同，最合理的處理方式是什麼？",
        "options": [
          "立刻認定古人沒有任何知識",
          "直接把兩張地圖都丟掉",
          "比較測繪技術、比例與環境變化等因素",
          "完全不看地圖製作年代"
        ],
        "answer": 2,
        "explanation": "測量精度、繪圖目的、比例尺與海岸地形變化，都可能造成不同年代地圖的差異。",
        "tag": "古今地圖"
      },
      {
        "id": "so-2-24",
        "stem": "同一座古城在不同時期具有不同名稱，最適合如何研究？",
        "options": [
          "只憑名稱長短決定年代",
          "認定不同名字一定是不同地點",
          "只保留今天名稱，刪去過去紀錄",
          "將名稱、使用時期與相關統治背景對照"
        ],
        "answer": 3,
        "explanation": "地名可能隨使用者與統治變化，將地點、年代和名稱對照可避免混淆。",
        "tag": "地名與歷史"
      },
      {
        "id": "so-2-25",
        "stem": "歷史地圖若標示臺灣周邊多條航線，最能幫助理解什麼？",
        "options": [
          "臺灣與其他地區的海上連結",
          "每艘船每天的精確位置",
          "所有居民的姓名",
          "未記錄商品的全部價格"
        ],
        "answer": 0,
        "explanation": "航線圖能表現地區間的連結和交通網絡，但不能提供圖上未記錄的所有細節。",
        "tag": "航線判讀"
      },
      {
        "id": "so-2-26",
        "stem": "描述外來勢力與在地社群互動，哪個說法較完整？",
        "options": [
          "永遠只有合作且沒有衝突",
          "可能同時存在貿易、合作、文化接觸與衝突",
          "永遠只有戰爭且沒有交流",
          "在地社群完全沒有選擇與行動"
        ],
        "answer": 1,
        "explanation": "歷史互動具有多面性，不同時期和社群可能同時發生合作、交換、抵抗與衝突。",
        "tag": "多元互動"
      },
      {
        "id": "so-2-27",
        "stem": "觀察大航海時代商品交換，為什麼要同時討論「好處」與「代價」？",
        "options": [
          "因為所有交易結果都完全一樣",
          "因為只看收入就能解釋所有影響",
          "因為貿易可能帶來收入，也可能影響勞動、社群與環境",
          "因為歷史事件完全不能評估"
        ],
        "answer": 2,
        "explanation": "經濟獲利不代表每個社群都同樣受益，也可能伴隨勞動負擔、資源消耗和衝突。",
        "tag": "影響分析"
      },
      {
        "id": "so-2-28",
        "stem": "想知道荷蘭與鄭氏先後在臺活動的時間，最適合製作哪種工具？",
        "options": [
          "每週菜單",
          "天氣符號表",
          "座位抽籤箱",
          "時間軸"
        ],
        "answer": 3,
        "explanation": "時間軸將事件依年代排列，便於看出先後、持續期間與事件之間的關係。",
        "tag": "歷史工具"
      },
      {
        "id": "so-2-29",
        "stem": "參觀歷史遺跡時，哪個做法有助於理解與保存？",
        "options": [
          "閱讀解說、記錄疑問並遵守參觀規定",
          "在古牆上刻下名字",
          "任意帶走磚塊作紀念",
          "忽略年代，只猜故事"
        ],
        "answer": 0,
        "explanation": "解說和實物可協助理解歷史；遵守規定、保持遺跡完整，才能讓更多人學習。",
        "tag": "文化資產"
      },
      {
        "id": "so-2-30",
        "stem": "學習「臺灣登上國際舞臺」後，哪個結論最合理？",
        "options": [
          "臺灣歷史只由單一人物決定",
          "臺灣的發展與地理位置、在地社群及跨海互動都有關",
          "臺灣與周邊世界完全無關",
          "只要記住一個年代就理解全部歷史"
        ],
        "answer": 1,
        "explanation": "地理條件、各社群的行動、商業需求與國際勢力相互影響，應綜合理解歷史。",
        "tag": "單元統整"
      }
    ]
  }
];
  const units = [];
  const seq = (a,b) => Array.from({length:b-a+1},(_,i)=>a+i);
  function add(id,subject,parent,code,name,subtitle,oldId,numbers,rows) {
    const previous=legacy.find(u=>u.id===oldId);
    const questions=numbers.map(n=>({...previous.questions[n-1],options:[...previous.questions[n-1].options]}));
    rows.forEach((r,i)=>{
      const answer=(numbers.length+i)%4;
      const options=r.slice(2,5); options.splice(answer,0,r[1]);
      questions.push({id:id+'-new-'+String(i+1).padStart(2,'0'),stem:r[0],options,answer,explanation:r[5],tag:r[6]});
    });
    units.push({id,subject,parent,code,title:code+'｜'+name,subtitle,scope:'五上原創練習小節；編號為本站編排，實際範圍以老師通知為準',questions});
  }
  add('so-s2-1','social','單元2｜臺灣登上國際舞臺','2-1','大航海時代與臺灣','海上航線、貿易需求與臺灣的跨海連結','so-2',[1,2,7,8,9,10,13,18,21,22,23,25,26,27,30],[
    ['商人地圖畫出臺灣通往日本與東南亞的航線。最能支持哪個結論？','臺灣曾與周邊地區發生海上連結','所有船都在同一天出發','每個居民都當商人','海上航行從來沒有風險','多條航線可呈現跨地區連結，但不能證明每艘船的時間或所有人的職業。','情境航線'],
    ['港口帳冊同時記錄運入與運出的商品。最適合研究哪個問題？','港口與外地交換了哪些物品？','每位居民喜歡什麼顏色？','船員晚上做什麼夢？','全島每個家庭的姓名？','進出口帳冊可提供商品流向與交易線索，不能回答未記錄的個人生活。','情境史料用途'],
    ['船隊想選擇能補給又便於轉運的據點。除了位置，最應考慮哪項條件？','淡水、停泊條件與補給來源','地名是否有相同字數','港口介紹字體大小','船員衣服顏色是否一致','遠航需要水與物資，停泊和補給條件都會影響據點選擇。','情境據點選擇'],
    ['甲地盛產某商品，乙地有需求，兩地商人跨海買賣。這屬於什麼活動？','跨地區貿易','完全沒有交換的自給生活','只在同一家庭內分配','沒有人的自然現象','商品由一地運往另一地出售或交換，屬跨地區貿易。','情境貿易概念'],
    ['歷史展同時展示外來陶瓷與本地器物。哪個研究問題最適合？','兩類器物如何反映本地生活與對外往來？','哪一群人天生最聰明？','為什麼所有器物一定同價？','古人是否天天使用手機？','器物來源與使用方式能幫助理解本地生產及跨地區交換，不應拿來評定族群高低。','情境器物交流'],
    ['一份商人紀錄只寫鹿皮售價上升。若要知道生態影響，還應補查什麼？','獵捕量、鹿群變化與在地生活資料','只看商人名字的筆畫','今日教室的座位表','任選一張無地點照片','價格本身不足以說明生態，需要資源利用及數量變化等資料。','情境影響探究'],
    ['課本談「航海技術改進」。哪個例子最直接有助遠洋航行？','較可靠的船隻與航向判讀方法','把航海圖全部丟棄','讓船上完全沒有補給','只依船身顏色決定方向','船舶和導航知識的發展可增加遠航能力，但仍須考慮海況與補給。','情境技術'],
    ['船隊在同一港口補給後又前往其他市場，這個港口可能具有什麼功能？','轉運與補給據點','保證所有船永不離港','使所有交易永久停止','只用來存放沒有用途的空氣','中途停靠、補給與貨物轉運都是海上交通網絡中據點的可能功能。','情境港口功能'],
    ['兩位學生討論貿易。甲只看獲利，乙也查勞動負擔與資源消耗。哪個分析較完整？','乙，同時考量收益與其他影響','甲，收入可代表所有社群的經驗','兩者都不需要資料','只要商品有賣出就沒有任何代價','貿易可能帶來利益，也可能產生勞動及環境成本，應從多個面向分析。','情境觀點比較'],
    ['展板寫：「十七世紀，臺灣商品進入海外市場。」哪句報告符合原意？','臺灣與外地的經濟往來是當時歷史的一部分','臺灣完全沒有本地居民','所有居民都在同一年離開臺灣','臺灣自此沒有任何文化差異','商品進入海外市場表示對外經濟連結，不能因此推論人口消失或文化完全一致。','情境文意'],
    ['小隊想知道當時人為何爭取臺灣港口，哪組線索最有用？','航線位置、商業需求及軍事活動資料','各地小學生今日午餐','現代明星的衣服品牌','一張沒有海岸的座位圖','港口競爭與航線、商品和勢力擴張有關，這些資料較能回答原因。','情境原因探究'],
    ['把「帆船圖像」直接當成當時每艘船的精確外形，問題在哪裡？','圖像可能有創作目的，需比較其他船舶證據','畫在紙上的東西一定比實物準確','只要圖有顏色就完全真實','圖像永遠不可能有研究價值','圖像能提供線索，但比例、用途及細節可能受作者目的影響，需交互核對。','情境圖像史料'],
    ['大航海時代的「交流」除了買賣商品，還可能包括什麼？','語言、信仰、作物與技術的接觸','所有地方立刻使用相同語言','每個地方的文化立即消失','人們不再與他人接觸','人群移動可帶來多方面文化接觸，但結果會因社群與情境不同而異。','交流面向'],
    ['「臺灣地理位置重要」和「歷史只由地理決定」之間，應如何區分？','位置提供條件，人們的行動與國際局勢也會影響發展','只要知道經緯度就知道每件歷史事件','人們完全不會做選擇','國際局勢從來不影響海上往來','位置是因素之一，商人、在地社群、政權及國際情勢的行動也會影響歷史。','位置與行動'],
    ['研究跨海貿易時，為什麼要標示商品的「出發地」與「目的地」？','了解資源與市場如何透過路線連結','保證所有商品都在出發地使用','讓圖例不再需要說明','證明航行不需要時間','出發地和目的地可幫助呈現流向，分析產地與市場的連結。','商品流向']
  ]);
  add('so-s2-2','social','單元2｜臺灣登上國際舞臺','2-2','荷蘭與西班牙在臺灣','南北據點、年代比較、統治與不同社群的經驗','so-2',[3,4,5,6,11,12,14,15,17,24,29],[
    ['導覽介紹「十七世紀荷蘭在臺南一帶建立統治中心」。該地大致位於臺灣哪一部？','南部','東北部','北部基隆沿海','臺灣以外的北極','臺南位於臺灣南部，是荷蘭在臺主要統治中心所在區域。','情境歷史空間'],
    ['小隊查到西班牙在 1626 年於雞籠建立據點。今日要找相應地區，應查哪個城市？','基隆','臺中','嘉義','屏東','雞籠是基隆的舊稱之一，研究舊地名時要與今日地名對照。','情境古今地名'],
    ['展示板寫甲：荷蘭南部據點；乙：西班牙北部據點。哪組地點配對正確？','甲—臺南；乙—基隆與淡水','甲—基隆；乙—臺南安平','甲—臺中山區；乙—嘉義平原','甲—花蓮山區；乙—屏東內陸','荷蘭以南部臺南一帶為中心；西班牙曾在北部基隆與淡水設點。','情境據點配對'],
    ['時間軸標示「荷蘭 1624；西班牙 1626」。兩次建立據點的年份相差多久？','2 年','16 年','24 年','26 年','1626－1624＝2 年；先比較年份，再計算差距。','情境年代計算'],
    ['某組將「西班牙 1626」貼在「荷蘭 1624」左邊，時間軸由左到右是早到晚。應如何修改？','把 1624 放在 1626 左邊','把兩者都改成 2026','刪除全部年份','把 1626 說成比 1624 早','1624 早於 1626，早到晚的時間軸應讓 1624 在左側。','情境時序'],
    ['參訪安平古堡時，有人說「今天看到的每塊磚都一定是十七世紀原物」。應如何判斷？','查閱建築增改建與保存紀錄','只憑磚的顏色就完全確定','看遊客人數多少決定','所有古蹟都從未修建','歷史建築可能經過增改建與修復，需對照資料了解不同部分的年代。','情境古蹟判讀'],
    ['展板說荷蘭與西班牙希望掌握貿易據點。城堡靠近海港，可能有何作用？','保護據點並控制海上往來','使每個港口都不再有船','完全只供今天拍照','讓海水變成淡水','城堡的軍事防禦與據點管理，可和當時海上競爭及貿易需求一起理解。','情境建築用途'],
    ['一份荷蘭商人的紀錄強調獲利。若研究在地居民經驗，最好怎麼補充？','增加不同社群的記錄、考古與相關研究','把商人觀點當成所有居民觀點','直接刪掉所有不一樣的資料','只比較文件紙張大小','商業紀錄反映特定立場，加入其他證據有助呈現不同居民的經驗。','情境多元史料'],
    ['同學把「貿易收入增加」改寫成「每位居民都變富」。哪個問題最明顯？','總收入變化不能直接證明每個人的所得相同','收入增加表示完全沒有交易','居民都不可能參與經濟活動','歷史資料永遠不能比較','總體收益與分配是不同問題，社群和個人的利益與負擔可能不同。','情境推論範圍'],
    ['某史料寫居民需繳交稅負。研究時最適合追問什麼？','向誰徵收、用途為何，以及居民如何回應？','稅表用什麼顏色就能解釋全部？','每個人是否一定都很開心？','為什麼所有地區永遠相同？','制度的對象、用途和回應有助分析統治與生活影響，不能假設所有人感受一樣。','情境制度探究'],
    ['北部與南部的十七世紀遺址各發現外來器物。最適合如何比較？','標示年代、地點及來源，再分析交流情形','只要都在臺灣就當成同一天的物品','直接把所有器物混在一起不編號','只按器物大小猜統治者姓名','年代和出土位置是比較的基礎，器物來源則有助了解交流。','情境遺址比較'],
    ['歷史資料指出西班牙於 1626 年在北臺建立據點，荷蘭在 1642 年擊敗其北臺據點守軍。先後順序為何？','西班牙設點→荷蘭擊敗守軍','荷蘭擊敗守軍→西班牙首次設點','兩件事都在 1624 年','兩件事都在 1662 年','1626 年在前，1642 年在後，應按年份排列事件。','情境時序資料'],
    ['某資料記錄「1626 年至 1642 年西班牙在北臺活動」。只依年份相減，這段時間相差幾年？','16 年','6 年','26 年','42 年','1642－1626＝16；此題只計算年份差，不處理實際月份天數。','情境年代計算'],
    ['熱蘭遮堡與今日安平地區的歷史最有關的是哪個勢力？','荷蘭','西班牙在基隆的軍隊','北極探險隊','現代高速鐵路公司','熱蘭遮堡是荷蘭在臺南安平一帶的重要據點，不能和西班牙北部據點混淆。','歷史建築'],
    ['西班牙與荷蘭先後在北臺競爭，主要說明什麼？','臺灣據點與當時東亞海上競爭有關','臺灣從來沒有跨海互動','所有勢力只為參加運動會','港口完全沒有商業價值','對據點的競爭需連結貿易、航路及勢力擴張的背景理解。','國際背景'],
    ['比較同一時期不同勢力的活動，哪種圖最清楚？','同時標示據點位置與活動時段的地圖','只列今天午餐的表格','沒有地名也沒有年代的色塊','個人星座配對表','位置與時段能一起呈現歷史空間及時間，避免把不同時期混為同時。','比較工具'],
    ['歷史介紹提到傳教、語言記錄與貿易。較合理的理解是什麼？','當時接觸可能同時包含宗教、文化與經濟面向','只有商業才算人群互動','所有在地社群都沒有回應','所有語言因此立即相同','交流與統治牽涉多方面接觸，各社群也可能以不同方式參與或回應。','互動面向'],
    ['為何介紹荷西在臺活動時，也應描述原有居民與其他移民？','他們也是歷史中的行動者，有自身需求與回應','歷史只和城堡名稱有關','在地居民沒有任何生活','只要有外來勢力，就不必研究其他人','臺灣原有社群與移民共同參與歷史，了解其行動能補足單一統治者觀點。','歷史主體'],
    ['一份資料把西班牙據點寫成「臺南」，另一份官方解說寫「基隆與淡水」。最合適的處理是什麼？','查明兩份來源與所指事件，核對後修正','直接以字數多的那份為準','完全不管地點和時期','只看自己先讀到哪一份','歷史資料衝突時要比較出處、時期與所述事件，不以外觀或先後決定。','資料核實']
  ]);
  add('so-s2-3','social','單元2｜臺灣登上國際舞臺','2-3','鄭氏時期與歷史影響','鄭成功來臺、農業與土地變化，從史料理解不同經驗','so-2',[16,19,20,28],[
    ['時間軸要標示鄭成功率軍來臺的年份。應選哪個？','1661 年','1624 年','1626 年','1895 年','官方文博資料記載鄭成功於 1661 年率軍來臺，須和荷蘭、西班牙設點年份分開。','年代概念'],
    ['展板寫：「鄭成功於 1661 年率軍來臺，荷蘭於 1662 年結束在臺統治。」哪件先發生？','鄭成功率軍來臺','荷蘭結束在臺統治','兩者都在 1626 年發生','兩者年份完全相同','比較 1661 與 1662，可知率軍來臺先發生，翌年荷蘭結束統治。','情境時序'],
    ['小隊把「荷蘭 1624 設點、鄭成功 1661 來臺、荷蘭 1662 結束統治」排成時間軸。正確順序為何？','1624→1661→1662','1662→1661→1624','1661→1624→1662','1624→1662→1661','由早到晚按年份大小排列，1624 最早，其次 1661，最後 1662。','情境年代整合'],
    ['鄭氏推動軍隊駐地開墾，若從補給需求分析，最直接想解決什麼？','軍民所需的糧食供應','所有海水的鹽度','每位居民的身高','太陽升起的方向','駐軍與居民需要穩定糧食，耕作和開墾可提供生活與統治所需資源。','情境農業需求'],
    ['某地原為居民使用的獵場，後來被開為農田。研究影響時最應了解什麼？','原使用者的需求、土地使用變化及協商情形','只計算新田地顏色有幾種','認定原使用者不可能有意見','只看統治者是否喜歡地名','土地變化可能影響原有生活，需要理解不同使用者的權益、需求與回應。','情境土地變遷'],
    ['地方記錄同時提到開墾帶來糧食，也提到土地衝突。報告應怎麼寫？','同時說明糧食供應與不同社群受到的影響','只寫每個人都獲利','只寫所有人感受完全一致','刪除所有不符合單一觀點的內容','農業增加可能帶來資源，也可能改變既有土地關係，應保留多面向影響。','情境影響分析'],
    ['博物館展示「永曆通寶」，說明為鄭氏時期在臺流通的貨幣。最適合用來探討什麼？','當時的交易與政權象徵','每位居民的全部存款','今日所有商店售價','未來股票漲跌','貨幣可提供交換活動與政權名號等線索，但無法單憑一枚錢知道所有人的財產。','情境貨幣史料'],
    ['一份開墾紀錄只列新增田地面積。若要研究原住民族生活變化，還需要什麼？','相關社群的土地利用、生活與回應資料','只知道紀錄者用什麼筆','只看田地面積是否整數','不需要任何其他資訊','面積只說明土地數量變化，居民經驗需要其他社群資料補充。','情境資料限制'],
    ['學生把「鄭氏在臺發展」寫成「臺灣歷史只由鄭成功一人決定」。主要問題是什麼？','忽略其他人物、社群、環境與國際因素','正確，其他人從未做任何事','只要有領導者就沒有其他社會活動','只需把人物名字寫更大就完整','歷史由多方行動和條件共同影響，不能以單一人物解釋全部變化。','情境歷史解釋'],
    ['古地圖與現代地圖的安平海岸形狀不同。研究鄭氏時期交通時，應怎麼做？','參考當時海岸、港口與地形資料','只以今日道路推定全部古航線','認為海岸從不會變動','把所有不同的地圖當作同一年','過去的海岸與港口可能不同，研究當時交通需參考相應年代的環境資料。','情境歷史環境'],
    ['一份地方傳說說某地「自鄭氏時期開始開墾」。報告前最適合做什麼？','找文獻、地圖與其他資料交互核對','直接把傳說每個細節當確定事實','只詢問一位同學猜測','因為是傳說就完全禁止研究','傳說可保存地方記憶，也需其他證據確認年代和事件細節。','情境地方史'],
    ['某展覽只展示將領的故事。若想呈現鄭氏時期日常生活，可增加什麼？','農民、商人、原住民族與家庭生活的資料','只增加將領名字的字體大小','刪除所有生活器物','只放未註明來源的遊戲劇情','多種社群與日常器物能呈現軍事事件以外的生活經驗。','情境展覽策畫'],
    ['某資料寫「1661 至 1683 年為鄭氏時期」。1680 年的器物可放在哪個區段？','鄭氏時期','西班牙 1626 年設點以前','十九世紀後期','二十一世紀','1680 介於 1661 和 1683 之間，所以符合題目所給的鄭氏時期範圍。','情境時間區間'],
    ['同一塊土地在荷蘭與鄭氏時期用途不同。最能協助比較的方式是什麼？','製表對照年代、用途與使用社群','只依地名第一個字分類','不記錄年代就混在一起','只比較資料紙張厚度','固定地點再比較不同時期用途和居民，可看出延續與變化。','情境比較方法'],
    ['若軍民人數增加，卻沒有同步增加糧食供應，最可能需要關注什麼？','食物與補給是否足夠','太陽是否改從西邊升起','所有石頭是否變成黃金','每條河是否一定消失','人口與軍隊增加會提高糧食需求，需要安排耕作、儲存或交換等供應方式。','情境資源需求'],
    ['甲資料稱開墾使糧食增加，乙資料記錄部分居民失去獵場。兩份資料是否一定互相矛盾？','不一定，可能反映不同面向與社群經驗','一定矛盾，所有人只能有同一經驗','只有字較多的資料可以存在','因為不同就完全不能研究','同一變化可同時增加農作產量並改變既有土地使用，需比較觀點及證據。','情境多元觀點'],
    ['Cindy 想了解鄭氏時期商品交換。哪組資料較直接？','貨幣、交易記錄與港口相關資料','只有今日校慶海報','只看現代遊戲角色圖','沒有年代的星座表','交易、貨幣與港口資料可提供經濟活動線索，仍要確認年代及來源。','情境經濟探究'],
    ['一張畫作描繪鄭成功率軍來臺，但創作於事件數百年後。使用時應注意什麼？','畫作反映後世詮釋，細節需與當時資料核對','畫家一定親眼看過每個細節','畫作年份就是事件發生年份','只要有船便可證明所有軍艦完全相同','後世作品能呈現記憶與想像，不能直接當成事件現場的完整紀錄。','情境圖像年代'],
    ['學生將 1662 年標成十六世紀。正確應改成哪個世紀？','十七世紀','十五世紀','十八世紀','二十世紀','1601 至 1700 年屬十七世紀，因此 1662 年是十七世紀。','情境世紀換算'],
    ['在研究報告中寫「這項開墾可能影響居民生活」，為何使用「可能」？','目前證據支持推論，但尚不足以概括全部情形','表示完全不需任何證據','表示所有居民感受已確定相同','表示作者拒絕查資料','推論須配合證據強度，使用「可能」可避免把尚未充分確認的解釋寫成定論。','情境推論語言'],
    ['將鄭氏時期放進臺灣歷史時間軸，有何幫助？','看出與荷蘭時期等事件的先後與變化','取代所有地圖與器物資料','保證知道每個人的心情','證明每個事件只發生一天','時間軸有助掌握順序與時段，仍需其他資料解釋原因和影響。','歷史工具'],
    ['研究鄭氏開墾時，為何也要看河流、平原與水源？','自然條件影響耕作與聚落安排','地理完全決定每個人的思想','農田不需任何水與土壤','歷史與任何地點都無關','水源、地形及土地條件會影響農業和居住選擇，但仍有人的安排與技術。','環境與發展'],
    ['「統治者建立制度」與「居民接受制度」應如何研究？','分別查制度內容及不同居民的回應','只要有制度就代表每人自願接受','只看制度名稱便了解所有影響','完全不需要居民相關資料','制度規定和實際回應是不同層面，需從執行及居民經驗理解。','制度與回應'],
    ['介紹鄭氏時期最完整的做法是哪個？','結合軍事、農業、貿易與不同社群生活','只背一個人物名字就涵蓋全部','把所有影響都說成相同','只看虛構故事且不註明來源','多面向資料可幫助理解政權、資源與社群互動，不宜只依單一人物故事。','單元整合'],
    ['文化資產中的古城、器物與文書，彼此有什麼關係？','可互相補充，幫助理解不同面向的歷史','每種資料都能獨自回答全部問題','只需保留最漂亮的一種','年代不同也不必標示','建築、器物與文書的資訊和限制不同，交互參照可形成較完整的理解。','證據整合'],
    ['學完荷西與鄭氏時期後，哪個研究態度較合適？','確認時間地點、比較來源，理解不同人的經驗','只記住自己喜歡的結論','把不同時期人物混為同一人','所有資料只看標題不用讀','歷史學習需要時空脈絡、證據與多元經驗，才能有根據地解釋過去。','歷史素養']
  ]);
  add('so-s1-1','social','單元1｜臺灣的位置與先民足跡','1-1','地圖與臺灣的位置','地圖要素、比例尺、相對位置與地理資料判讀','so-1',[1,2,3,4,5,6,7,8,9,10,26],[
    ['校園地圖的上方標示「南」。小安想找北邊的操場，應先往圖面的哪一側找？','下方','上方','右方','左方','地圖上方既是南，與南相反的北就在下方；不能假設所有地圖都上北下南。','情境方位'],
    ['小隊沿地圖先向東走，再向北走。若地圖上北下南，他們在圖上先往哪邊、再往哪邊？','先右，再上','先左，再下','先上，再右','先下，再左','上北下南時，東在右、北在上，依兩段路線順序判讀。','情境路線'],
    ['地圖圖例說藍線為河流、黑線為道路。Cindy 想找水域，應先追蹤哪個符號？','藍線','黑線','所有文字','紙張摺痕','依此圖的圖例，藍線代表河流；符號意義應以該張地圖的說明為準。','情境圖例'],
    ['圖上 1 公分代表 500 公尺。兩地直線相距 4 公分，實際直線約多遠？','2 公里','200 公里','125 公尺','4 公里','4×500＝2000 公尺，1000 公尺＝1 公里，因此約 2 公里。','情境比例尺'],
    ['A 圖 1 公分代表 100 公尺，B 圖 1 公分代表 1 公里。兩張圖大小相同，哪張較適合看校門口附近的細節？','A 圖','B 圖','兩圖細節一定相同','只看圖紙厚度決定','A 圖每公分涵蓋的實地範圍較小，同樣大小可較詳細呈現校門附近。','情境選圖'],
    ['小明在臺灣東岸面向太平洋，依題意大致朝哪個方向？','東方','西方','北方','南方','臺灣東側面向太平洋，因此面向該側海域時大致朝東。','情境相對位置'],
    ['家人想從臺灣前往大致位於臺灣南方的菲律賓。地圖上的航線整體應朝哪個方向延伸？','南方','正北方','西北方','東北方','菲律賓大致在臺灣南方，題目問的是兩地的整體相對位置。','情境位置'],
    ['地圖只畫出兩地的直線距離。小安說「搭車一定走完全相同的距離」，問題在哪裡？','實際道路可能彎曲，里程未必等於直線距離','所有車都能穿越建築','比例尺完全不能換算距離','直線距離總比道路里程更長','比例尺可換算直線距離，但車輛要依道路行駛，路程可能更長。','情境距離'],
    ['旅遊地圖沒有畫公車站。要規劃公車行程，最應補查哪份資料？','有站點和路線資訊的交通圖','只有山脈高度的地形圖','只列動物種類的海報','全班座位表','規劃公車需要站點與路線，應選符合問題需要的地圖或資料。','情境資料選用'],
    ['小隊比較兩張不同年份的港口地圖，發現海岸線不同。最合適的下一步是什麼？','確認年代、繪製方法與海岸變化資料','立刻認定其中一張是騙人','只選顏色較漂亮的圖','完全不看比例尺和圖例','年代、測繪方式及地形改變都可能影響圖面，應先比較條件再判斷。','情境古今地圖'],
    ['一張圖同時畫出臺灣、日本與菲律賓。若要描述「日本大致在臺灣東北方」，參考地點是哪裡？','臺灣','日本','菲律賓','地圖標題','「在臺灣東北方」以臺灣為起點判讀其他地點，參考地點是臺灣。','情境參考點'],
    ['地圖標示「北方 ↑」，學校在公園西邊。公園大致畫在學校哪一側？','右側','左側','正下方','正上方','學校在公園西邊，反過來公園就在學校東邊；上北時東在右。','情境位置反推'],
    ['臺灣海峽主要位於臺灣本島哪一側？','西側','東側','正上方天空','島內中央山頂','臺灣海峽位於本島西側，介於臺灣與中國大陸之間。','地理概念'],
    ['閱讀一張地圖前，先看標題有什麼幫助？','知道地圖主題與涵蓋地區','知道每位居民的心情','確定明天一定晴天','保證所有地圖都同一比例','地圖標題可提示主題和範圍，幫助判斷是否符合查詢需求。','地圖要素'],
    ['比例尺「1：100000」表示圖上 1 公分約為實際多少？','1 公里','100 公里','1 公尺','10 公分','1 公分代表 100000 公分，即 1000 公尺，也就是 1 公里。','比例尺換算'],
    ['哪個問題最適合使用臺灣與周邊地區的區域地圖回答？','日本與臺灣大致在哪個相對方位？','Cindy 今天心情如何？','哪位學生最喜歡紅色？','媽媽午餐吃了什麼？','區域地圖可顯示各地位置與方位，無法提供未標記的個人生活資訊。','地圖用途'],
    ['若只憑「靠海」就認定某地一定有大型港口，推論有何不足？','還需考量水深、海況與交通等條件','靠海地點完全不能航行','港口不需要任何自然條件','世界上所有海岸都一樣','靠海是條件之一；是否適合建港還要看停泊、海況及交通連結等。','位置與發展'],
    ['方位中的「東北」位於哪兩個基本方向之間？','東與北','東與南','西與北','西與南','東北是東方與北方之間的方向，可在方位圖上對照。','基本方位'],
    ['同一地點在校園圖與東亞圖中的大小差很多，最主要需要比較什麼？','兩圖的比例尺與呈現範圍','兩張紙的價錢','讀圖者的身高','印刷油墨的氣味','地圖縮小實地的程度不同，比例尺和範圍會影響同一地點在圖上的大小。','地圖比較']
  ]);
  add('so-s1-2','social','單元1｜臺灣的位置與先民足跡','1-2','史前臺灣','史前生活、考古證據與不超出證據的推論','so-1',[11,12,13,14,15,16,17,18,19,27,28,29,30],[
    ['考古筆記寫：「出土陶罐內有炭化穀物。」哪個推論最符合證據？','人們可能曾盛裝或處理穀物','每位居民每天都吃完全相同的食物','村落一定只有一個人','當時已使用電冰箱','陶罐內的穀物可支持盛裝或處理的可能，但不能直接得知每個人的完整生活。','情境證據'],
    ['遺址找到石製箭鏃，附近也有動物骨骼。研究者可優先探討什麼？','工具可能如何用於漁獵活動','古人手機的品牌','每個人的確切名字','當時高速鐵路票價','工具與動物遺留可作為研究漁獵的線索；其他資訊無法由此得知。','情境探究'],
    ['某遺址同時發現農具、魚骨與果核。哪句報告最恰當？','當地人可能有農耕、漁撈及植物採集等食物來源','當地人一定從不捕魚','發現農具就表示所有人只吃稻米','果核證明他們有現代果汁機','不同遺留提示多種生活活動，應綜合證據，避免用一種器物排除其他方式。','情境整合'],
    ['小安畫「新石器聚落」時安排農田與住屋。哪項安排最有生活上的道理？','靠近可取水處，並避開容易淹水的位置','把所有房屋畫在深海中','農田完全不需要水','只按畫紙空白決定住處','取水和適合居住的地形有助於農耕定居，仍須考慮水災等環境條件。','情境聚落'],
    ['小隊看到石器表面有磨製痕跡。哪個說法較負責任？','記錄痕跡並比較製作技術與用途','只看表面就說知道製作者姓名','認定磨製器物都是塑膠','把磨痕刮掉讓它更亮','磨製痕跡能提供加工技術線索，須保留並與其他資料比較。','情境技術'],
    ['博物館把「實物」和「想像復原圖」放在一起。閱讀復原圖時應注意什麼？','復原結合證據與推測，可能隨研究修正','復原圖的每個細節都已有直接證據','彩色圖片一定比實物更古老','只要標為復原就不必看說明','復原圖有助理解，但圖中服裝、動作等細節可能含推測，應看證據說明。','情境展覽閱讀'],
    ['同學說：「史前沒有文字，所以沒有人類生活。」應如何用證據回應？','人類製作的工具與生活遺跡顯示當時有人活動','只說聲音大的人一定對','沒有文字就沒有任何工具','所有古物都是恐龍製作','史前指缺少當地文字紀錄，考古遺留仍可證明人類活動。','情境概念澄清'],
    ['若把遺物拿離原本的土層卻不記錄，主要會損失什麼？','遺物與位置、年代及周邊物件的關係','物件的所有重量','現代天氣預報','展示櫃的售價','出土脈絡是理解遺物的重要資訊，未記錄就移動會破壞彼此關聯。','情境考古紀錄'],
    ['在兩個相距很遠的遺址發現相似器物。下一步哪個做法最合理？','比較材質、年代與製作方式，研究是否有交流','立刻宣稱兩地每個人都認識','只因外形相似就認定同一天製造','忽略器物來源，只看照片亮度','相似外形是研究線索，仍須更多證據才能判斷交流或共同技術。','情境交流推論'],
    ['一位學生只拍器物正面。若要讓研究紀錄更完整，還應補充什麼？','尺寸、材質、出土位置與不同角度影像','只加漂亮的濾鏡','只記錄自己的星座','把原始紀錄全部刪掉','研究紀錄需要可比較與可回查的資料，包含大小、材料和出土脈絡。','情境記錄'],
    ['展板寫「部分新石器人群開始農耕」。哪個改寫保留原意？','有些人群種植作物，但生活方式可能並存','當時每個人都只務農','全臺同一天停止捕魚','只要農耕就不需要工具','「部分」不是「全部」；農耕可與漁獵、採集同時存在。','情境文字判讀'],
    ['同一件史前器物，甲報告說是容器、乙報告說是裝飾。最應增加哪項資料？','器形、使用痕跡及出土情境的比較','研究者喜歡的顏色','展示館的餐點排名','物件照片的按讚數','器形和使用痕跡可協助推測功能，出土情境則提供與其他活動的關係。','情境比較證據'],
    ['製作「舊石器→新石器」學習圖時，哪個變化最合適放入？','部分人群發展磨製石器、陶器與農作','所有石器瞬間全部消失','所有人立刻改用汽車','人們從此完全不需要水源','新石器時代出現磨製、燒陶及農作等技術與生活發展，但並非一夕全面改變。','時代變遷'],
    ['為什麼研究史前臺灣不能只讀今天的課本而完全不看出土資料？','出土資料是建立與檢驗解釋的重要證據','課本的文字可以代替所有實物','遺物只適合當裝飾','史前研究完全不需要證據','課本整理研究成果，出土資料則是許多歷史解釋的重要依據，兩者可互相配合。','研究方法'],
    ['「打製石器」的製作重點最接近哪一項？','敲擊石材形成所需形狀與刃口','把石頭種進土裡長大','用電腦直接列印塑膠','把每顆石頭都融成玻璃','打製主要利用敲擊使石材剝落，取得適合使用的形狀與邊緣。','石器技術'],
    ['哪些線索較可能協助了解史前人的食物來源？','動植物遺留與器物使用痕跡','現代便利商店促銷單','今日手機通話紀錄','未來餐廳菜單','骨骼、種子、貝殼與器物殘留等，可以協助推論飲食；現代商品資料不能直接代替。','食物研究'],
    ['學校規劃史前生活展，哪個展示標籤最清楚區分「觀察」與「推論」？','觀察：有魚骨；推論：可能利用水域食物','觀察：每個人都愛吃魚；推論：找到魚骨','觀察：古人每天都開車；推論：沒有車輪','觀察與推論完全相同，不必區分','魚骨是可觀察的遺留，利用水域食物是據此提出的解釋，兩者要分清楚。','證據與推論']
  ]);
  add('so-s1-3','social','單元1｜臺灣的位置與先民足跡','1-3','原住民族文化','理解文化多樣性、環境知識與文化傳承','so-1',[20,21,22,23,24,25],[
    ['參訪前，主辦部落告知某段祭儀不開放拍照。班級應怎麼做？','先理解說明並遵守主辦方規範','躲起來拍攝再上傳','用閃光燈引起注意','認為所有儀式都必須公開','參與文化活動應尊重當地社群的安排，先了解哪些內容可參與或記錄。','情境文化尊重'],
    ['班級採訪兩位不同族群長者，聽到不同的傳說。最合適的理解是什麼？','不同社群可能保存不同的歷史記憶與故事','只有一種故事可以存在','其中一位一定完全沒有文化','所有原住民族的故事都必須相同','文化與歷史記憶具有多樣性，應理解故事的社群和背景，不因不同就排斥。','情境文化多樣'],
    ['同學在報告中寫「所有原住民族都住高山」。哪個修正較恰當？','各族與個人的居住地多樣，也有平原、海岸與都市生活','所有族人都一定住海上','每個人都住同一棟大樓','居住地完全不需要查證','原住民族的生活分布多樣，不能以高山概括所有族群與個人。','情境去除刻板印象'],
    ['導覽員解釋傳統屋頂材料與當地雨量有關。這最適合放進哪個研究主題？','文化如何回應自然環境','族群天生能力的高低','所有地方建築完全相同','住屋和環境毫無關係','材料選擇和建築方式可反映居民對氣候及環境的知識與回應。','情境環境文化'],
    ['學生想介紹族語，哪一種展示方式更有助於理解？','標明語言名稱、使用背景並採用經確認的發音','把所有族語混稱為同一語言','隨意拼出聲音當標準','只用嘲笑的方式模仿','族語具有不同語言與使用情境，清楚標示並確認資料有助尊重與準確理解。','情境語言學習'],
    ['社區邀長者與年輕人一起錄製族語故事。活動最直接的目的可能是什麼？','讓不同世代共同保存並使用語言','證明年輕人不能學新科技','使每種文化停止變化','禁止居民與其他社群交流','故事錄製可運用科技協助族語傳承，也讓不同世代共同參與。','情境文化傳承'],
    ['報告把某位族人的職業推論成「全族都從事這個工作」。主要問題是什麼？','用個人的例子概括整個群體','職業永遠和生活沒有關係','每份報告都不能提到人物','只要照片清楚就一定正確','一個人的工作不代表所有人的工作，研究要避免以偏概全。','情境推論範圍'],
    ['班上比較兩個部落的飲食，發現食材不同。應優先調查哪項因素？','當地資源、歷史交流與生活選擇','哪個名字比較長','哪張餐桌比較新','哪個族群天生比較優秀','飲食與可取得資源、交流及選擇都有關，不能用飲食差異評定族群高低。','情境飲食探究'],
    ['某部落把傳統編織用於現代背包。這個例子最能說明什麼？','文化可延續既有知識，也可發展新的表現方式','文化一旦改變就全部消失','傳統工藝完全不能有新用途','每個族人都必須製作同一款包','文化傳承可以包含創作與調整，傳統技術也能在當代生活中繼續使用。','情境文化變遷'],
    ['訪談時，長者不確定一件事的確切年份。學生應如何記錄？','如實標明不確定，並找其他資料對照','任意填一個看起來整齊的年份','刪除所有訪談內容','把自己的猜測當長者原話','口述資料有價值，也可能有時間記憶的限制；標明不確定並交互查證較妥當。','情境口述歷史'],
    ['展覽同時放入傳統服飾與當代族人作品，有何幫助？','呈現文化的歷史延續與當代生活','證明族人只能穿傳統衣服','讓人認為文化從不改變','排除族人自己的想法','文化既有傳承也有當代創作，同時展示可避免把族群固定在過去。','情境展示觀點'],
    ['某族青年用族語創作歌曲。哪個說法較合理？','族語能用於當代創作與日常表達','族語只能在古代使用','所有族語只能唱同一首歌','使用新樂器就不能表達族群文化','語言是活的交流工具，可出現在新歌曲、媒體與生活情境中。','情境當代文化'],
    ['Cindy 想知道某祭儀的意義，哪個提問最適合？','這個活動對參與的族人有什麼意義？','你們每個人為什麼都完全相同？','哪一族一定比另一族高等？','為什麼所有活動都只是表演？','開放且不帶預設的提問，能讓受訪者說明自身觀點和文化意義。','情境訪談提問'],
    ['一張舊照片只有人物，沒有地點、日期或族群說明。報告中應如何使用？','先查來源與背景，不憑服飾直接猜全部身分','直接說照片代表所有原住民族','把猜測寫成確定事實','只看人物高矮判斷年代','影像需要來源和背景才能準確解讀；單憑外觀不足以確認全部資訊。','情境影像判讀'],
    ['居民用當地材料修復傳統住屋，又加入防災設計。最能說明什麼？','傳統知識與當代技術可以一起運用','改善防災必定消除所有文化','住屋只能永遠維持一樣','使用當代技術的人就沒有文化','生活需求會改變，居民可結合傳統材料知識和現代技術改善居住。','情境知識運用'],
    ['學校要設計多語歡迎牌，最合適的流程是什麼？','邀使用者確認語言、文字與適用情境','任意用網路亂碼代替族語','把每種族語都寫成同一個詞','只憑中文字數猜譯文','和實際使用者共同確認，能減少錯譯並呈現語言多樣性。','情境共同參與'],
    ['關於族群文化與個人選擇，下列何者較正確？','同一族群內，人們的興趣與生活也可能不同','同族每個人一定有相同喜好','族群名稱能決定每個人的所有行為','只要知道族名就不必認識個人','文化提供共同背景，但個人的生活、喜好與經驗仍有差異。','文化與個人'],
    ['了解傳統環境知識時，為什麼需要知道知識使用的地點與季節？','同一做法可能與當地氣候、資源及時序有關','所有知識在任何地點都必定完全相同','季節和生活從來沒有關係','只要知道地名就知道一切','環境知識形成於具體生活經驗，地點與季節有助理解其適用背景。','環境知識'],
    ['比較不同文化時，哪個原則最合適？','理解背景、尊重差異並檢查資料來源','以自己的習慣當唯一標準','先決定誰比較高等再找例子','只憑網路笑話判斷','比較文化應以理解為目的，尊重差異並用可靠資料支持說明。','文化比較'],
    ['原住民族語言的保存，除了錄音之外還需要什麼？','在家庭、學校或社區有實際學習與使用機會','把所有錄音永遠鎖住不用','要求學習者停止提問','只把語言當作裝飾符號','錄音可保存資料，實際使用與世代傳承則能讓語言繼續發揮溝通作用。','語言傳承'],
    ['為什麼不宜把臺灣所有原住民族文化合併成一種固定形象？','各族及各社群有自己的語言、歷史與生活經驗','每個人的生活都完全一樣','不同地區都沒有任何歷史','只有一張照片需要保存','不同族群與社群具有多樣的歷史和生活，單一形象容易遮蔽差異。','多樣性理解'],
    ['「尊重文化」是否表示研究時不能提出問題？','可以提問，但應理解背景並以尊重的方式討論','所有資料都不能再查證','只能完全不閱讀資料','只准背誦而不能理解','尊重與探究可以並行，合適的提問和查證有助更深入理解。','尊重與探究'],
    ['一份文化報告同時使用族人訪談、文化機構資料與地圖，主要優點是什麼？','可從不同資料互相補充與核對','資料越多就一定不會有錯誤','可以省略全部來源','因此不必了解任何背景','多種資料能互補，但仍要比較來源、時代與立場，並保留查證過程。','資料整合'],
    ['文化傳承活動由族人自己參與規劃，為何有意義？','讓相關社群能表達自身觀點與傳承需求','保證每個參與者意見完全相同','表示外界永遠不能學習','讓活動不需要任何討論','社群參與使文化介紹更能回應自身經驗，仍可透過討論呈現內部多樣觀點。','文化主體']
  ]);
  add('en-s2-1','english','Unit 2｜How Do You Go to School?','2-1','交通方式字詞','交通片語與 on foot，讀懂生活中的交通資訊','en-2',[1,2,3,4,5,6,7,8,20,21],[
    ['交通紀錄寫 “Cindy: by bus”。Cindy 用哪種方式上學？','搭公車','搭火車','騎腳踏車','步行','by bus 是搭公車；先找 Cindy 這一列再讀交通方式。','情境字詞'],
    ['小安說：「我今天走路去圖書館。」他的交通方式應記為哪個片語？','on foot','by train','by car','by taxi','走路即步行，固定片語是 on foot。','情境字詞'],
    ['行程卡寫「回家方式：搭火車」，英文欄該選哪個？','by train','by bike','by bus','by scooter','train 是火車，所以交通方式為 by train。','情境字詞'],
    ['Read: “Dad: by car; Sue: by bike.” Sue 使用哪種交通工具？','腳踏車','汽車','火車','公車','Sue 後面寫 by bike，即騎腳踏車；by car 是 Dad 的資料。','情境資料'],
    ['班上要把「搭捷運」的貼紙貼到調查表，哪個標籤合適？','by metro','by foot','on car','by desk','metro 是捷運；by metro 與 by MRT 都能表示搭捷運。','情境字詞'],
    ['Leo 寫 “I go to school by a bus.”，交通片語應如何修改？','改成 by bus','改成 by buses a','改成 on foot bus','改成 by school','以 by 表交通方式時，這裡直接用 by bus，不在 bus 前加 a。','情境改錯'],
    ['兩張卡片分別寫「by taxi」和「by train」。要找搭計程車的人，應選哪張？','by taxi','by train','兩張都選','兩張都不選','taxi 是計程車，train 是火車；兩個單字的開頭雖相近，意思不同。','情境字詞'],
    ['校門口調查有 bus 8 人、bike 5 人、on foot 12 人。步行者有幾人？','12 人','8 人','5 人','25 人','on foot 表示步行，其後的數量是 12；25 是全部人數。','情境資料'],
    ['媽媽今天以機車接送 Cindy，紀錄表的英文交通方式應選什麼？','by scooter','by train','by bike','on foot','本單元 scooter 表示機車，by scooter 為搭乘機車的交通方式。','情境字詞'],
    ['Read: “Monday: by MRT; Tuesday: on foot.” 星期二的方式是什麼？','步行','搭捷運','搭汽車','搭火車','Tuesday 是星期二，對應 on foot，所以是步行。','情境資料'],
    ['旅行卡上需要把「搭汽車、騎腳踏車」依序填入。哪組正確？','by car / by bike','by bike / by car','by bus / by taxi','on foot / by train','car 是汽車，bike 是腳踏車，依中文順序填 by car / by bike。','情境配對'],
    ['Read: “I walk to school.” 哪個交通片語與 walk 在這裡意思相同？','on foot','by taxi','by MRT','by scooter','walk 是步行，因此 walk to school 與 go to school on foot 意思相近。','情境同義'],
    ['哪一組交通片語全部正確？','by car, by bus, on foot','by a car, by bus, by foot','on car, by bus, by foot','by car, on a foot, by foot','一般交通工具使用 by＋工具名稱；步行例外，用 on foot。','片語辨識'],
    ['哪個英文單字表示「火車」？','train','taxi','bike','bus','train 是火車；taxi 為計程車，bike 為腳踏車，bus 為公車。','交通字詞'],
    ['哪個英文單字表示「腳踏車」？','bike','car','train','taxi','bike 是腳踏車，by bike 表示騎腳踏車。','交通字詞'],
    ['哪一組中英文配對錯誤？','by bus／搭火車','by car／搭汽車','on foot／步行','by taxi／搭計程車','bus 是公車，因此 by bus 應配搭公車；搭火車是 by train。','配對檢查'],
    ['「搭捷運」的兩種英文說法，哪組意思相同？','by MRT / by metro','by bike / by train','on foot / by bus','by taxi / by car','MRT 和 metro 在此皆指捷運，因此兩者的交通方式相同。','同義片語'],
    ['哪個片語的介系詞使用正確？','on foot','by foot','from foot','at foot','步行固定寫為 on foot，不能直接比照其他工具用 by foot。','片語辨識'],
    ['下列哪個單字是交通工具，而不是國名？','scooter','India','Spain','Japan','scooter 是機車，其餘三個都是國家名稱。','字詞分類'],
    ['把「搭計程車、搭火車、步行」配成英文，哪組順序正確？','by taxi / by train / on foot','by train / by taxi / on foot','on foot / by train / by taxi','by bike / by bus / by car','依序找 taxi＝計程車、train＝火車、on foot＝步行。','字詞配對']
  ]);
  add('en-s2-2','english','Unit 2｜How Do You Go to School?','2-2','do／does 與 go／goes','用助動詞詢問交通方式，練習直述句與簡答','en-2',[9,10,11,12,13,14,15,16,17,18,19,22,23,28,29],[
    ['Cindy 要介紹她的父母：“My parents ___ to work by MRT.” 空格應填什麼？','go','goes','is go','going','My parents 是複數，現在簡單式用 go。','情境文法'],
    ['老師問 Sue 的上學方式：“How ___ Sue go to school?” 空格填什麼？','does','do','are','am','Sue 是第三人稱單數，問一般動詞 go 的問題時使用 does。','情境問句'],
    ['Leo 回答 “I go to school on foot.”，前面的問題最可能是什麼？','How do you go to school?','Where are you from?','How old are you?','What color is your book?','回答內容是上學方式，因此問題須詢問 How do you go to school?。','情境對話'],
    ['Amy 寫 “Does Tom goes to school by bus?”，哪一處需要修改？','goes 改為 go','Does 改為 Are','bus 改為 buses','school 改為 schools','問句已有 does，主要動詞要用原形 go。','情境改錯'],
    ['你和朋友都搭火車上學。回答 “Do you go to school by train?” 時，哪句合適？','Yes, we do.','Yes, we does.','Yes, we are.','Yes, he does.','說話者代表自己和朋友，用 we；Do 的肯定簡答保留 do。','情境簡答'],
    ['Ben 並不騎腳踏車上學。有人問 “Does Ben go to school by bike?”，哪個回答正確？','No, he doesn’t.','No, he don’t.','Yes, he does.','No, they aren’t.','Ben 以 he 代替，Does 問句的否定簡答是 No, he doesn’t.。','情境簡答'],
    ['May 介紹姐姐每天搭公車：“My sister ___ to school by bus.” 空格填什麼？','goes','go','does goes','are go','My sister 指一位姐姐或妹妹，第三人稱單數用 goes。','情境文法'],
    ['兩位學生的資料都寫「走路上學」。報告 “They ___ go to school by car.” 應填哪個否定詞？','don’t','doesn’t','isn’t','aren’t','They 是複數，否定一般動詞 go 使用 don’t；交通事實也顯示不是搭車。','情境否定'],
    ['老師問 “Does Mia go to school by MRT?”，Mia 確實搭捷運。以 she 回答應選什麼？','Yes, she does.','Yes, she do.','Yes, she is.','No, she doesn’t.','Does＋單數主詞的肯定簡答為 Yes, she does.。','情境簡答'],
    ['Cindy 介紹自己和弟弟：“My brother and I ___ to school by bus.” 空格填什麼？','go','goes','is go','does','My brother and I 可換成 we，使用 go。','情境文法'],
    ['你想問兩位朋友如何上學：“How ___ your friends go to school?” 空格填什麼？','do','does','is','am','your friends 是複數，用助動詞 do 形成一般動詞問句。','情境問句'],
    ['Tom 寫 “He don’t go to school by car.”，應怎麼修正？','don’t 改為 doesn’t','go 改為 goes，其他不變','car 改為 cars','He 改為 His','He 是第三人稱單數，否定使用 doesn’t，後面的 go 保持原形。','情境改錯'],
    ['Ann 說 “My dad goes to work by train.” 你要問「他搭火車上班嗎？」應選哪句？','Does he go to work by train?','Do he goes to work by train?','Is he go to work by train?','Does he goes to work by train?','直述句的 goes 變成問句時，使用 Does he go，動詞恢復原形。','情境轉換'],
    ['A: “___ do you go to school?” B: “By bus.” 哪個疑問詞適合？','How','Where','Who','What color','回答 By bus 為交通方式，因此用 How 問「如何」。','情境問詞'],
    ['Nina 想說「我們不走路上學」，哪句完整正確？','We don’t go to school on foot.','We doesn’t go to school on foot.','We don’t goes to school on foot.','We not go to school by foot.','We 搭配 don’t go，步行使用 on foot，兩部分都要正確。','情境否定']
  ]);
  add('en-s2-3','english','Unit 2｜How Do You Go to School?','2-3','交通閱讀應用','讀懂每週交通表、人物對話與簡單行程','en-2',[24,25,26,27,30],[
    ['Read: “Amy goes to school by bus. Her dad goes to work by car.” How does Amy go to school?','By bus.','By car.','By train.','On foot.','題目問 Amy，而非爸爸；第一句的交通方式是 by bus。','閱讀找訊息'],
    ['週表：Monday—by bike；Tuesday—by bus；Wednesday—on foot。How does Ken go to school on Tuesday?','By bus.','By bike.','On foot.','By taxi.','Tuesday 是星期二，表中相對應的方式為 by bus。','表格閱讀'],
    ['Read: “Sam and Leo go to school by MRT. Sue goes by taxi.” Who does NOT go by MRT?','Sue','Sam','Leo','Both Sam and Leo','Sam 和 Leo 搭捷運，Sue 搭計程車，因此未搭捷運的是 Sue。','閱讀排除'],
    ['Read: “A: Does May go to school by car? B: No. She goes by bus.” Which statement is true?','May goes to school by bus.','May goes to school by car.','May walks to school.','May rides a bike to school.','對話否定汽車，再提供公車為正確方式，所以要選搭公車。','對話判讀'],
    ['Read: “I’m Ben. I walk to school every day. My home is near my school.” Which phrase describes Ben’s way to school?','On foot.','By train.','By scooter.','By taxi.','walk to school 的意思是走路上學，與 on foot 相同。','閱讀同義'],
    ['交通調查：by bus—6 人；on foot—4 人；by bike—2 人。How many students go on foot?','Four.','Six.','Two.','Twelve.','找到 on foot 一列，對應的人數是 4。題目不問總人數。','表格數量'],
    ['Read: “On sunny days, Mia goes to school by bike. On rainy days, she goes by bus.” It is rainy. How does Mia go?','By bus.','By bike.','By train.','On foot.','rainy days 表示雨天；短文明確說雨天搭公車。','條件閱讀'],
    ['Read: “Tom goes to school by train. His sister goes to school by train, too.” Which is true?','They both go by train.','Only Tom goes by train.','Only his sister goes by train.','They both walk.','too 表示「也」，所以 Tom 和姐姐或妹妹都搭火車。','閱讀比較'],
    ['Read: “Nora is from Japan. She goes to school by MRT.” Which information is NOT given?','Her age.','Her country.','Her way to school.','Her name.','短文包含名字、國家、上學方式，沒有年齡，不能從其他資訊推定。','閱讀資訊界線'],
    ['Read: “A: How do you go to school? B: By taxi. A: Me, too!” How does A go to school?','By taxi.','By train.','On foot.','By bike.','A 的 Me, too! 表示自己的方式也和 B 一樣，因此也是搭計程車。','對話推論'],
    ['名單：Amy—on foot；Bo—by bus；Cal—by bike。Who walks to school?','Amy','Bo','Cal','All three','on foot 與 walks 都表示步行，所以 Amy 是走路上學的人。','表格同義'],
    ['Read: “Cindy goes to the park by bus. She goes to school on foot.” How does Cindy go to school?','On foot.','By bus.','By car.','By taxi.','前句的公車是去公園的方式；上學的方式要看第二句 on foot。','閱讀目的地'],
    ['Read: “Ann and I go to school by MRT. We are classmates.” Who does “We” refer to?','Ann and the speaker.','Ann only.','The speaker only.','All teachers.','Ann and I 是 Ann 和說話者兩人，下一句用 We 代替。','閱讀指代'],
    ['交通週記：Mon—on foot；Tue—by bus；Wed—by bus；Thu—by bike；Fri—on foot。How many days are by bus?','Two days.','One day.','Three days.','Five days.','by bus 出現在星期二和星期三，共兩天。','資料計數'],
    ['Read: “Ken goes to school by scooter with his mom. His dad goes to work by train.” Who goes by train?','Ken’s dad.','Ken.','Ken’s mom.','Ken and his mom.','火車是爸爸去上班的方式；Ken 和媽媽搭機車。','閱讀人物'],
    ['Read: “Sue: by bike. May: by bus. Leo: on foot.” Which report has a mistake?','May goes to school by bike.','Sue goes to school by bike.','May goes to school by bus.','Leo walks to school.','May 的資料是 by bus，報告寫成 by bike 與原資料不符。','閱讀核對'],
    ['Read: “Dad drives a car to work. I take the bus to school.” Which pair matches the text?','Dad—by car; I—by bus','Dad—by bus; I—by car','Dad—on foot; I—by bike','Dad—by train; I—by taxi','drives a car 對應 by car；take the bus 對應 by bus。','閱讀片語'],
    ['Read: “A: Do you go to school by bike, Tom? B: No, I don’t. I go on foot.” Does Tom walk to school?','Yes, he does.','No, he doesn’t.','Yes, they do.','No, she doesn’t.','Tom 說 on foot，就是走路；轉述時以 he 代替 Tom，回答 Yes, he does.。','對話轉述'],
    ['Read: “On Monday, Eva goes by bus. On Friday, she goes by MRT.” Which question has the answer “By MRT”?','How does Eva go on Friday?','How does Eva go on Monday?','Where is Eva from?','How old is Eva?','By MRT 是星期五的方式，所以問題必須指定 Friday。','閱讀提問'],
    ['交通紀錄：A 組—bus 3 人；B 組—bike 5 人；C 組—on foot 4 人。Which group has the most students?','Group B.','Group A.','Group C.','All groups have the same number.','most 指最多；3、5、4 之中 5 最大，為 B 組。','資料比較'],
    ['Read: “My name is Jill. I go to school by train. My friend Bob goes by bus.” Are their ways to school the same?','No, they are different.','Yes, both go by train.','Yes, both go by bus.','Yes, both walk.','Jill 搭火車，Bob 搭公車，方式不同，所以選 different。','閱讀比較'],
    ['Read: “The bus is for Amy. The taxi is for Sue. The bike is for Ben.” Which vehicle is for Sue?','The taxi.','The bus.','The bike.','The train.','短文第二句直接將 Sue 與 taxi 配對，因此選計程車。','閱讀配對'],
    ['Read: “Leo goes to school on foot. He goes home by bus.” Which statement is correct?','Leo’s ways to school and home are different.','Leo goes to school by bus.','Leo goes home on foot.','Leo uses a taxi both ways.','上學是步行，回家是公車；方向不同時的方式可能不同，須分別讀取。','閱讀行程'],
    ['Read: “May takes the MRT to school. Her teacher takes the MRT, too.” Who uses the MRT?','May and her teacher.','Only May.','Only her teacher.','Neither of them.','第二句的 too 表示老師也搭捷運，所以兩人都使用 MRT。','閱讀整合'],
    ['Read: “Kai is from Taiwan. He goes to school by bus.” Which question can the text answer?','How does Kai go to school?','What is Kai’s favorite food?','What color is Kai’s bike?','How old is Kai’s dad?','短文直接說上學方式 by bus，可以回答交通問題；其餘三項未提及。','閱讀證據']
  ]);
  add('en-s1-1','english','Unit 1｜Where Are You From?','1-1','國家字詞','辨認七個國家字詞，搭配名牌與旅行資料閱讀','en-1',[1,2,3,4,5,6,18],[
    ['名牌寫著「Name: Hana / Country: Japan」。Hana 來自哪裡？','日本','印度','西班牙','澳洲','Country 欄的 Japan 是日本。閱讀名牌時，先找到欄位再對照內容。','情境字詞'],
    ['國際筆友活動中，你要把「來自英國」的卡片放進 the UK 信封。應放哪一張？','I am from the UK.','I am from the USA.','I am from India.','I am from Japan.','the UK 是英國，the USA 是美國；信封與卡片的國名要相符。','情境字詞'],
    ['老師說：「請找出來自澳洲的學生。」四張資料卡中該選哪張？','Mia — Australia','Leo — India','Ann — Spain','Bo — Taiwan','Australia 對應澳洲，因此應選 Mia 的資料卡。','情境字詞'],
    ['Cindy 想寄明信片給住在印度的朋友，地址的國家欄應填哪個字？','India','Japan','Spain','Taiwan','印度的英文是 India；地址國家欄應使用正確的國名。','情境字詞'],
    ['班級地圖上「西班牙」的位置需要貼上英文標籤。應選哪個？','Spain','Australia','Japan','India','Spain 是西班牙；將地名和英文字詞對應後再貼標籤。','情境字詞'],
    ['Read: “Amy: Taiwan; Ben: the USA.” 哪位學生的資料寫著美國？','Ben','Amy','Both Amy and Ben','Neither Amy nor Ben','the USA 是美國，資料列在 Ben 後面，因此答案是 Ben。','情境字詞'],
    ['海報寫「Country of the day: the UK」。今天介紹哪個國家？','英國','美國','日本','澳洲','the UK 表示英國，不能因為縮寫相似而和 the USA 混淆。','情境字詞'],
    ['旅行紀錄有 Japan、India、Spain。哪個國家沒有列在紀錄中？','Australia','Japan','India','Spain','紀錄依序是日本、印度、西班牙，沒有 Australia（澳洲）。','情境字詞'],
    ['桌上卡片為「臺灣／澳洲／美國」。哪組英文標籤能依序配對？','Taiwan / Australia / the USA','Japan / Australia / the UK','Taiwan / India / the USA','Spain / Japan / the UK','先配對 Taiwan＝臺灣，再看 Australia＝澳洲，最後 the USA＝美國。','情境配對'],
    ['學生寫下 “I am from Spian.”，老師圈出國名。正確拼字是什麼？','Spain','Spane','Spien','Spine','西班牙的正確拼字為 Spain，a 和 i 的順序要注意。','情境拼字'],
    ['國家調查表中，Japan 有 3 人，India 有 2 人，Taiwan 有 4 人。來自日本的有幾人？','3 人','2 人','4 人','9 人','Japan 是日本，讀取 Japan 後面的數量 3 即可；9 是三組總人數。','情境資料'],
    ['小隊規定「拿到美國卡的學生到 A 桌」。Leo 拿到 the USA，該去哪裡？','A 桌','英國組的 B 桌','日本組的 C 桌','印度組的 D 桌','the USA 對應美國，因此應依規則到 A 桌。','情境字詞'],
    ['哪一組中文與英文配對完全正確？','澳洲—Australia；印度—India','澳洲—India；印度—Australia','澳洲—Spain；印度—Japan','澳洲—Taiwan；印度—Spain','Australia 為澳洲，India 為印度，國名不能互換。','字詞配對'],
    ['選出「日本、臺灣」依序正確的英文。','Japan, Taiwan','Taiwan, Japan','India, Japan','Spain, Taiwan','題目先列日本再列臺灣，所以順序為 Japan, Taiwan。','字詞配對'],
    ['哪個單字拼字正確，意思是「澳洲」？','Australia','Australlia','Austrelia','Australi','澳洲是 Australia；注意中間的 tra 及結尾 lia。','國名拼字'],
    ['哪個國名的第一個字母應由小寫改為大寫？','taiwan','Taiwan','Japan','India','國名屬專有名詞，taiwan 應寫為 Taiwan，首字母大寫。','大小寫'],
    ['哪一組包含「英國」和「美國」兩個國家名稱？','the UK and the USA','India and Japan','Taiwan and Spain','Spain and Australia','the UK 是英國，the USA 是美國，兩者須分辨清楚。','縮寫辨識'],
    ['把國家名稱補完整：J _ p a n。缺少哪個字母？','a','i','o','u','Japan 的拼字為 J-a-p-a-n，因此第二個字母是 a。','國名拼字'],
    ['下列哪個是國名，能放在 “from ___” 的空格中？','India','eleven','happy','pencil','India 是國名；eleven 是數字，happy 是形容詞，pencil 是物品。','詞義分類'],
    ['哪一組字詞都屬於本小節的國家名稱？','Japan, Spain, India','bus, train, bike','red, blue, green','book, desk, pen','Japan、Spain、India 都是國名，其餘分別是交通工具、顏色和物品。','詞義分類'],
    ['哪一個拼字和「印度」對應？','India','Indai','Idnia','Indea','India 是印度，字母順序為 I-n-d-i-a。','國名拼字'],
    ['在 “the UK” 和 “the USA” 中，哪個共同的小字不能省略於本課標準寫法？','the','a','an','to','本課國家名稱的標準寫法是 the UK 和 the USA，縮寫前使用 the。','國名寫法'],
    ['哪一對「英文／中文」配錯了？','Spain／日本','India／印度','Taiwan／臺灣','Australia／澳洲','Spain 是西班牙；日本應為 Japan，所以 Spain／日本 配錯。','配對檢查']
  ]);
  add('en-s1-2','english','Unit 1｜Where Are You From?','1-2','be from 問答','am／is／are、代名詞與來自哪裡的生活對話','en-1',[7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,27,28,29],[
    ['Cindy 介紹自己：“Hello! I ___ Cindy. I am from Taiwan.” 空格填什麼？','am','is','are','does','介紹自己時，主詞 I 要搭配 am；句子為 I am Cindy.。','情境文法'],
    ['老師指著兩位學生說：“This is Dan. This is Sue. They ___ from Japan.” 空格填什麼？','are','am','is','be','Dan 和 Sue 共有兩人，以 they 代替，be 動詞用 are。','情境文法'],
    ['你的朋友問 “Are you from Taiwan?”，你確實來自臺灣。最合適的簡答是什麼？','Yes, I am.','Yes, you are.','Yes, I is.','Yes, they are.','對方用 you 問你，回答時改用 I；肯定簡答是 Yes, I am.。','情境問答'],
    ['Kate 來自英國而非澳洲。有人問 “Is Kate from Australia?”，應如何回答？','No, she isn’t.','Yes, she is.','No, he isn’t.','Yes, I am.','題目已說 Kate 不來自澳洲；此處用 she 代替 Kate，否定簡答為 No, she isn’t.。','情境問答'],
    ['Ben 介紹自己和妹妹：“My sister and I ___ from Spain.” 空格填什麼？','are','is','am','does','My sister and I 指「妹妹和我」兩人，可用 we 代替，因此使用 are。','情境文法'],
    ['老師說：“Leo is from India.” 你想問 Leo 來自哪裡，哪句正確？','Where is Leo from?','Where are Leo from?','Where Leo is from?','How is Leo from?','Leo 是單數，問句把 is 放在主詞前，形成 Where is Leo from?。','情境問句'],
    ['資料顯示 Tom 與 Ann 都來自美國。有人問 “Are they from the USA?”，應回答什麼？','Yes, they are.','Yes, they is.','No, they aren’t.','Yes, he is.','題目指出兩人都來自美國；they 搭配 are，因此肯定簡答是 Yes, they are.。','情境問答'],
    ['新同學回答 “I’m from Australia.” 你剛才最可能問了什麼？','Where are you from?','How old are you?','What color is it?','How do you go to school?','回答提供來源國家 Australia，因此問句應為詢問來自哪裡的 Where are you from?。','情境對話'],
    ['Amy 寫 “My friend are from Japan.”，她介紹的是一位朋友。應改哪個字？','are 改成 is','My 改成 They','from 改成 by','Japan 改成 japan','My friend 為單數，所以 be 動詞由 are 改為 is。','情境改錯'],
    ['你要否定「我來自印度」，哪句能放在自我介紹中？','I am not from India.','I not from India.','I are not from India.','I is not from India.','I 的 be 動詞是 am，否定時在 am 後加 not，成為 I am not from India.。','情境否定'],
    ['兩位同學說 “We are from the UK.”，在報告中可把 We are 換成什麼縮寫？','We’re','We’s','We’m','Were’','We are 的縮寫是 We’re，撇號表示省略的字母。','情境縮寫'],
    ['A: “Where is your brother from?” B: “___ from Taiwan.” 此處 brother 以 he 代替。','He’s','She’s','They’re','You’re','題目指定 brother 以 he 代替；He is 可縮寫為 He’s，因此回答 He’s from Taiwan.。','情境代名詞']
  ]);
  add('en-s1-3','english','Unit 1｜Where Are You From?','1-3','國家主題閱讀理解','從名單、對話和短文找資料，再做簡單比較','en-1',[23,24,25,26,30],[
    ['Read: “I’m May. I’m from Japan. My friend Sam is from India.” Where is Sam from?','India','Japan','Spain','Taiwan','第二句後半明確寫 Sam is from India.；不要把 May 的國家當成 Sam 的。','閱讀找訊息'],
    ['Read: “Amy and Sue are from Spain. Ken is from Taiwan.” How many students are from Spain?','Two.','One.','Three.','Four.','來自西班牙的人是 Amy 和 Sue，共兩人；Ken 來自臺灣。','閱讀數量'],
    ['Read: “A: Are you from the UK, Bob? B: No. I’m from the USA.” Where is Bob from?','The USA.','The UK.','Japan.','India.','Bob 先否定英國，再說自己來自美國，應以後句的正面資訊作答。','對話推讀'],
    ['Read: “Nina is from Australia. Her brother is from Australia, too.” Which is true?','They are both from Australia.','Only Nina is from Australia.','Her brother is from Japan.','They are from the UK.','too 表示「也」，說明哥哥或弟弟和 Nina 一樣來自澳洲。','閱讀代詞'],
    ['名單：Leo—India；Mia—Japan；Bo—Spain。Who is from Japan?','Mia','Leo','Bo','All three','Japan 與 Mia 配在同一列，所以來自日本的是 Mia。','表格閱讀'],
    ['Read: “My name is Lin. I am from Taiwan. I am eleven.” Which question is NOT answered?','How does Lin go to school?','What is Lin’s name?','Where is Lin from?','How old is Lin?','短文有姓名、來源地和年齡，未提上學交通方式，因此不能回答 How does Lin go to school?。','閱讀資訊界線'],
    ['Read: “Alex is from the UK. Kim is from the USA.” Which statement is correct?','Alex and Kim are from different countries.','Alex and Kim are both from the UK.','Kim is from Japan.','Alex is from the USA.','different countries 指不同國家；兩人的來源分別為英國和美國。','閱讀比較'],
    ['Read: “A: Where are you from? B: I’m from Spain. A: Me, too!” What do we know about A?','A is from Spain.','A is from India.','A is from Japan.','A is from Australia.','Me, too! 表示「我也是」，呼應 B 來自西班牙，因此 A 也來自西班牙。','對話推論'],
    ['Read: “Jill is from India, not Japan. Her friend Ted is from Japan.” Who is from India?','Jill','Ted','Both Jill and Ted','Neither Jill nor Ted','Jill 的資料明確排除日本並肯定印度；Ted 才來自日本。','閱讀否定'],
    ['Read: “We are Dan and Ann. We are from Taiwan.” Who does “We” mean?','Dan and Ann','Dan only','Ann only','Their teacher','前句說話者自稱 Dan 和 Ann，所以 We 指他們兩人。','閱讀代詞'],
    ['活動分組：Team A—Japan；Team B—Australia；Team C—the UK。Mary is from Australia. Which team is for Mary?','Team B','Team A','Team C','No team','Team B 對應 Australia；將 Mary 的來源和分組表比對即可。','閱讀應用'],
    ['Read: “I’m Tom. I’m from the USA. This is my friend Eva. She’s from Spain.” What does “She” refer to?','Eva','Tom','The USA','Spain','She 是指前句介紹的 Eva，不是地名。閱讀時要把代名詞連回人物。','閱讀指代'],
    ['Read: “Name: Ben / Country: the UK / Age: 10.” Which introduction matches the card?','I’m Ben. I’m from the UK.','I’m Ben. I’m from India.','I’m ten. I’m from Japan.','I’m Eva. I’m from the UK.','名牌同時給出 Ben 和 the UK；正確介紹的姓名與國家都要吻合。','資料整合'],
    ['Read: “The red card is for Japan. The blue card is for Spain. Sara is from Spain.” Which card is for Sara?','The blue card.','The red card.','Both cards.','No card.','Spain 對應藍卡，Sara 來自 Spain，因此選藍卡。','閱讀規則'],
    ['Read: “Ken and May are classmates. Ken is from India. May is from Australia.” Are they from the same country?','No, they aren’t.','Yes, they are.','Yes, he is.','No, she isn’t.','兩人是同學，但來源國家不同；題目主詞為 they，回答 No, they aren’t.。','閱讀比較'],
    ['Read: “Dear Mia, I’m Ron. I’m from Japan. Nice to meet you!” Who writes the message?','Ron','Mia','Japan','The teacher','Dear Mia 是收件人，I’m Ron 才指出寫信者是 Ron。','書信閱讀'],
    ['Read: “Lily: I’m from Taiwan. Max: I’m from Taiwan, too. Sue: I’m from Spain.” Which two students are from the same country?','Lily and Max','Lily and Sue','Max and Sue','All three students','Lily 和 Max 都說來自臺灣；Sue 來自西班牙。','閱讀分類'],
    ['Read: “Three friends: Ann is from the UK. Bo is from India. Cal is from the USA.” Which country is NOT on the list?','Japan','India','The UK','The USA','名單有英國、印度和美國，沒有日本 Japan。','閱讀排除'],
    ['Read: “A: Is your friend from Spain? B: No, he isn’t. He is from Australia.” Which country is the friend from?','Australia','Spain','Taiwan','Japan','No 否定 Spain，後句 He is from Australia. 提供正確來源。','對話找訊息'],
    ['Read: “Name: Amy. Country: India. Name: Ben. Country: Japan.” Which report has a mistake?','Amy is from Japan.','Amy is from India.','Ben is from Japan.','Amy and Ben are from different countries.','資料中 Amy 來自 India，不是 Japan，所以 Amy is from Japan. 與資料不符。','閱讀查錯'],
    ['Read: “Nora is from the UK. She likes blue.” Can we tell how old Nora is?','No. Her age is not given.','Yes. She is ten.','Yes. She is eleven.','Yes. She is twelve.','短文只提來源與喜歡的顏色，沒有年齡，不能憑想像補充。','閱讀資訊界線'],
    ['Read: “A: I’m from Japan. And you? B: I’m from Taiwan.” What does “And you?” ask here?','Where are you from?','How old are you?','Do you like buses?','What is this?','前句談來源地，And you? 是把相同問題轉問對方，相當於 Where are you from?。','對話語意'],
    ['Read: “Name: Cindy / Country: Taiwan.” A student reports, “She’s from Taiwan.” Is the country correct?','Yes, it matches the card.','No, the card says Japan.','No, the card says Spain.','No, the card says India.','卡片 Country 欄為 Taiwan，報告也說 Taiwan，因此國家資訊相符。','閱讀核對'],
    ['Read: “Ben is from Spain. His teacher is from the USA.” Which question has the answer “The USA”?','Where is Ben’s teacher from?','Where is Ben from?','What is Ben’s name?','How old is Ben?','美國是 Ben 老師的來源地，因此須問 Where is Ben’s teacher from?。','閱讀提問'],
    ['Read: “Mia and Tom are from Australia. Leo and Sue are from Japan.” How many countries are mentioned?','Two.','One.','Three.','Four.','文中有四人，但只提 Australia 和 Japan 兩個國家；題目問國家數而非人數。','閱讀計數']
  ]);
  units.sort((a,b)=>a.subject.localeCompare(b.subject)||a.code.localeCompare(b.code,undefined,{numeric:true}));
  window.LANGUAGE_SOCIAL_UNITS = units;
})();
