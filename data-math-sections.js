/* 原創五上數學小節題庫。請先載入 data-math.js。
 * 教材依臺北市官方五上康軒數學目錄：
 * https://tten.tp.edu.tw/Login/Downment?grade=5&spid=625c176d-8a1e-4d65-b845-b548c4f84e06&subject=Mathematics
 * 1-1 至 4-4 為依學習活動整理的小節編碼，不宣稱與紙本活動標題逐字相同。
 * 8-1 為整數四則提前練習；P-1 為綜合應用。每小節 30 題，含至少 10 題情境。
 * 小數用千分位整數計算；除法分數答案約為最簡，擴分題依題目指定分母表示。
 * 保留全部原 ma-1～ma-6 題目 ID，使舊錯題可繼續解析。
 */
(function () {
  'use strict';
  const original = window.MATH_UNITS;
  if (!original || original.length !== 6) throw new Error('請先載入原數學題庫 data-math.js');
  const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
  const lcm = (a, b) => a / gcd(a, b) * b;
  const fs = n => Array.from({ length: n }, (_, i) => i + 1).filter(i => n % i === 0);
  const dec = n => `${n < 0 ? '-' : ''}${Math.floor(Math.abs(n) / 1000)}.${String(Math.abs(n) % 1000).padStart(3, '0')}`;
  const frac = (n, d) => { const g = gcd(n, d); return `${n / g}/${d / g}`; };
  const units = [];
  function section(code, parent, name, subtitle) {
    const u = { id: `ma-s${code.toLowerCase()}`, subject: 'math', parent, code,
      title: `${code}｜${name}`, subtitle, scope: `${parent}；${code} ${name}`, questions: [] };
    units.push(u); return u;
  }
  function keep(u, source, predicate = () => true) {
    for (const q of original.find(x => x.id === source).questions.filter(predicate)) u.questions.push({ ...q, options: [...q.options] });
  }
  function add(u, stem, correct, candidates, explanation, tag) {
    const answerText = String(correct);
    const wrong = [...new Set(candidates.map(String))].filter(x => x !== answerText).slice(0, 3);
    if (wrong.length !== 3) throw new Error(`選項不足 ${u.code} ${stem}`);
    const answer = u.questions.length % 4, options = [...wrong];
    options.splice(answer, 0, answerText);
    u.questions.push({ id: `${u.id}-${String(u.questions.length + 1).padStart(2, '0')}`, stem, options, answer, explanation, tag });
  }
  function num(u, stem, value, wrong, explanation, tag, format = String) {
    if (!Number.isInteger(value)) throw new Error(`非整數縮放結果 ${stem}`);
    add(u, stem, format(value), [...wrong, value + 1, value + 2, value + 3, value + 4].filter(Number.isInteger).map(format), explanation, tag);
  }
  function rational(u, stem, n, d, explanation, tag) {
    const correct = frac(n, d), wrong = [];
    for (const [a, b] of [[n + 1, d], [n, d + 1], [n + 2, d + 1], [n + 3, d], [n, d + 2]]) {
      const candidate = frac(a, b);
      if (candidate !== correct && !wrong.includes(candidate)) wrong.push(candidate);
    }
    add(u, stem, correct, wrong, explanation, tag);
  }
  const p1 = '第一單元｜多位小數與加減', p2 = '第二單元｜因數與公因數';
  const p3 = '第三單元｜倍數與公倍數', p4 = '第四單元｜擴分、約分與通分';
  const a11 = section('1-1', p1, '認識多位小數', '從位值、千分位與測量情境讀懂多位小數。');
  const a12 = section('1-2', p1, '小數大小比較', '對齊位值，判斷排序、範圍與接近程度。');
  const a13 = section('1-3', p1, '多位小數加減', '三位小數直式、未知數與多步生活應用。');
  const a14 = section('1-4', p1, '小數取概數', '判斷保留位與下一位，練習進位及概數應用。');
  const a21 = section('2-1', p2, '因數', '整除、因數配對、矩形排列與分組限制。');
  const a22 = section('2-2', p2, '公因數與最大公因數', '共同因數、最多分組、最長切割與條件限制。');
  const a31 = section('3-1', p3, '倍數', '倍數序列、區間個數、整包購買與週期。');
  const a32 = section('3-2', p3, '倍數判別', '利用末位與數字和判斷 2、3、5、9、10 的倍數。');
  const a33 = section('3-3', p3, '公倍數與最小公倍數', '共同週期、最少購買與範圍中的公倍數。');
  const a41 = section('4-1', p4, '用分數表示整數相除', '把平均分配的商寫成最簡分數。');
  const a42 = section('4-2', p4, '擴分', '分子分母同乘，處理等值分數與格數換算。');
  const a43 = section('4-3', p4, '約分', '利用公因數化簡，理解部分與全體。');
  const a44 = section('4-4', p4, '通分與分數比較', '找公分母，比較分數大小與情境中的進度。');
  const a81 = section('8-1', '提前練習｜整數四則', '整數四則提前練習', '三步計算、括號優先與分配律。');
  const ap = section('P-1', '綜合應用｜生活數學', '綜合生活應用', '以多步推理整合小數、因倍數、分數與整數四則。');
  keep(a13, 'ma-1');
  keep(a21, 'ma-2', q => ['列舉因數', '因數整除判斷', '因數與範圍'].includes(q.tag));
  keep(a22, 'ma-2', q => !['列舉因數', '因數整除判斷', '因數與範圍'].includes(q.tag));
  keep(a31, 'ma-3', q => q.tag === '指定範圍的倍數');
  keep(a33, 'ma-3', q => q.tag !== '指定範圍的倍數');
  keep(a42, 'ma-4', q => ['擴分求分子', '等值分數辨識', '情境｜等值分數換算座位'].includes(q.tag));
  keep(a43, 'ma-4', q => ['最簡分數', '情境｜部分與全體約分'].includes(q.tag));
  keep(a44, 'ma-4', q => !['擴分求分子', '等值分數辨識', '情境｜等值分數換算座位', '最簡分數', '情境｜部分與全體約分'].includes(q.tag));
  keep(a81, 'ma-5'); keep(ap, 'ma-6');

  for (let t = 0; t < 3; t++) {
    const n = [73846, 92573, 68129][t], thousandDigit = n % 10, hundredDigit = Math.floor(n / 10) % 10;
    num(a11, `${dec(n)} 中，千分位上的數字是多少？`, thousandDigit, [hundredDigit, Math.floor(n / 100) % 10, Math.floor(n / 1000) % 10], `小數點右邊依序為十分位、百分位、千分位；${dec(n)} 的第三位是 ${thousandDigit}。`, '位值辨識');
    num(a11, `${dec(n)} 中，百分位數字 ${hundredDigit} 所表示的值是多少？`, hundredDigit * 10, [hundredDigit, hundredDigit * 100, hundredDigit * 1000], `百分位的單位是 0.01；${hundredDigit}×0.01＝${dec(hundredDigit * 10)}。`, '數字代表的值', dec);
    const whole = [46, 57, 83][t], h = [7, 4, 6][t], k = [8, 9, 3][t], composed = whole * 1000 + h * 10 + k;
    num(a11, `${whole} 個 1、${h} 個 0.01 和 ${k} 個 0.001 合起來是多少？`, composed, [whole * 1000 + h * 100 + k, whole * 1000 + h * 10 + k * 100, whole * 1000 + h + k], `${whole}＋${dec(h * 10)}＋${dec(k)}＝${dec(composed)}；十分位沒有單位量，要補 0。`, '小數組成', dec);
    const units = [40753, 68124, 95236][t];
    num(a11, `${units} 個千分之一合起來是多少？`, units, [units * 10, Math.floor(units / 10), units + 1000], `1000 個千分之一合成 1；${units}÷1000＝${dec(units)}，所以寫成 ${dec(units)}。`, '千分之一合成', dec);
    add(a11, `哪個算式正確展開 ${dec(n)}？`, `${Math.floor(n / 1000)}＋${dec(Math.floor(n / 100) % 10 * 100)}＋${dec(hundredDigit * 10)}＋${dec(thousandDigit)}`, [`${Math.floor(n / 1000)}＋${dec(Math.floor(n / 100) % 10 * 10)}＋${dec(hundredDigit * 100)}＋${dec(thousandDigit)}`, `${Math.floor(n / 1000)}＋${dec(n % 1000 * 10)}`, `${Math.floor(n / 1000)}＋${dec(n % 1000 + 1000)}`], `將各位分開：整數部分 ${Math.floor(n / 1000)}；十分位 ${dec(Math.floor(n / 100) % 10 * 100)}；百分位 ${dec(hundredDigit * 10)}；千分位 ${dec(thousandDigit)}，相加為 ${dec(n)}。`, '位值展開');
    const mass = [27486, 38527, 46739][t];
    num(a11, `科學課秤得材料重 ${mass} 公克。以公斤表示，應記錄成多少公斤？`, mass, [mass * 10, Math.floor(mass / 10), mass + 1000], `1 公斤＝1000 公克。${mass}÷1000＝${dec(mass)} 公斤；公克對應公斤的千分位。`, '情境｜公克換公斤', dec);
    const meter = [12067, 23048, 34029][t], digit = meter % 10;
    num(a11, `捲尺讀值是 ${dec(meter)} 公尺。最右邊的數字 ${digit} 代表多少公尺？`, digit, [digit * 10, digit * 100, digit * 1000], `${digit} 位在千分位，表示 ${digit} 個 0.001 公尺；${digit}×0.001＝${dec(digit)} 公尺。`, '情境｜測量刻度', dec);
    const liters = [8056, 12084, 16097][t];
    num(a11, `記錄表寫著水量 ${dec(liters)} 公升。這相當於多少個 0.001 公升？`, liters, [liters * 10, Math.floor(liters / 10), liters + 1000], `1 公升含 1000 個 0.001 公升；${dec(liters)}÷0.001＝${liters}，也就是 ${liters} 個千分之一公升。`, '情境｜單位量個數');
    const length = [37058, 48069, 59074][t];
    add(a11, `小玲把緞帶長度記成 ${dec(length)} 公尺。哪個敘述正確？`, '十分位的 0 表示沒有整個 0.1 公尺的部分', ['百分位是 0', '小數中的 0 都可以直接刪除', '最右邊數字表示十分之幾公尺'], `${dec(length)} 的小數第一位是 0，第二位是 ${Math.floor(length / 10) % 10}，第三位是 ${length % 10}；中間的 0 用來保留位值，刪除後數值會改變。`, '情境｜零的占位');
    const distance = [14628, 25849, 36752][t];
    rational(a11, `跑步紀錄是 ${dec(distance)} 公里。若用「公里」為單位寫成分數，哪個分數與紀錄相同？（選最簡分數）`, distance, 1000, `${dec(distance)}＝${distance}/1000；分子、分母同除以 ${gcd(distance, 1000)}，得到 ${frac(distance, 1000)} 公里。`, '情境｜小數與千分數');

    const x = [34768, 58249, 76385][t], y = x + [81, 39, 107][t], choices = [x + 5, y, x - 11, x + 2];
    add(a12, `${dec(x)} ○ ${dec(y)}，○ 應填什麼？`, '＜', ['＞', '＝', '無法判斷'], `整數部分先比較，再依十分位、百分位、千分位比較。${dec(x)} 比 ${dec(y)} 小，所以填＜。`, '逐位比較');
    add(a12, `下列四個數中，最大的是哪個？`, dec(y), choices.filter(v => v !== y).map(dec), `把小數位對齊：${[...choices].sort((a, b) => a - b).map(dec).join('＜')}，最右邊 ${dec(y)} 最大。`, '最大值');
    const arr = [x, x + 90, x + 9], asc = [...arr].sort((a, b) => a - b);
    add(a12, `將 ${arr.map(dec).join('、')} 由小到大排列，哪個正確？`, asc.map(dec).join('＜'), [[asc[1], asc[0], asc[2]], [asc[2], asc[1], asc[0]], [asc[0], asc[2], asc[1]]].map(v => v.map(dec).join('＜')), `從最高位逐位比較，最先出現不同的位值決定大小；正確次序是 ${asc.map(dec).join('＜')}。`, '三數排序');
    const low = [18230, 32450, 56780][t], good = low + 4;
    add(a12, `哪個數大於 ${dec(low)} 且小於 ${dec(low + 10)}？`, dec(good), [dec(low), dec(low + 10), dec(low + 11)], `題目用「大於」和「小於」，兩端都不包含；${dec(low)}＜${dec(good)}＜${dec(low + 10)}。`, '開區間判斷');
    const part = [38204, 53706, 64108][t], missing = [4, 5, 6][t], target = part + missing * 10;
    num(a12, `使 ${Math.floor(part / 1000)}.${Math.floor(part / 100) % 10}□${part % 10} 大於 ${dec(target - 10)} 且小於 ${dec(target + 10)}，□ 應填哪個數字？`, missing, [missing - 1, missing + 1, 0], `整數、十分位和千分位固定，只比較百分位；${dec(target - 10)}＜${dec(target)}＜${dec(target + 10)}，所以填 ${missing}，兩端不算。`, '缺位數字');
    const masses = [23745 + t * 1000, 23754 + t * 1000, 23705 + t * 1000, 23750 + t * 1000], min = Math.min(...masses);
    add(a12, `四箱材料分別重 ${masses.map(dec).join('、')} 公斤。搬運時先搬最輕的一箱，應選哪個重量？`, dec(min), masses.filter(v => v !== min).map(dec), `四個重量的整數與十分位相同，先比百分位，再比千分位；由小到大為 ${[...masses].sort((a, b) => a - b).map(dec).join('＜')}，所以最輕是 ${dec(min)} 公斤。`, '情境｜重量比較');
    const goal = [5000, 8000, 12000][t], near = goal - 7, ds = [goal - 42, goal + 16, goal - 31];
    add(a12, `路線目標長 ${dec(goal)} 公里。哪個實測長度最接近目標？`, dec(near), ds.map(dec), `與目標的差分別為 ${[near, ...ds].map(v => dec(Math.abs(v - goal))).join('、')} 公里；最小差是 ${dec(7)}，所以 ${dec(near)} 公里最接近。`, '情境｜接近程度');
    const eq = [7250, 8360, 9470][t], short = (eq / 1000).toFixed(2);
    add(a12, `甲記錄 ${short} 公升，乙記錄 ${dec(eq)} 公升。比較兩人的水量，哪個正確？`, '兩者相等', ['甲較多', '乙較多', '位數不同不能比較'], `小數末尾補 0 不改變數值；${short}＝${dec(eq)}，對齊位值後每一位都一樣，因此水量相等。`, '情境｜等值小數');
    const results = [12876 + t * 1000, 12867 + t * 1000, 12907 + t * 1000, 12879 + t * 1000], ranked = [...results].sort((a, b) => a - b);
    add(a12, `短跑四人的秒數是 ${results.map(dec).join('、')} 秒，秒數越少名次越前。第二名的成績是哪個？`, dec(ranked[1]), ranked.filter(v => v !== ranked[1]).map(dec), `秒數由小到大為 ${ranked.map(dec).join('＜')}；第一名是 ${dec(ranked[0])} 秒，第二名是 ${dec(ranked[1])} 秒。`, '情境｜比賽名次');
    const lower = [46000, 57000, 68000][t], reading = lower + 63;
    add(a12, `溫度計每小格代表 0.001 度。${dec(reading)} 度位在下列哪兩個相鄰 0.010 度刻度之間？`, `${dec(lower + 60)} 和 ${dec(lower + 70)}`, [`${dec(lower + 50)} 和 ${dec(lower + 60)}`, `${dec(lower + 70)} 和 ${dec(lower + 80)}`, `${dec(lower + 600)} 和 ${dec(lower + 700)}`], `${dec(lower + 60)}＜${dec(reading)}＜${dec(lower + 70)}；先對齊百分位，再看千分位，讀值位在這兩條刻度之間。`, '情境｜刻度定位');

    const round = (v, step) => Math.floor((v + step / 2) / step) * step;
    let v = [48675, 73948, 12586][t], r = round(v, 1000);
    num(a14, `將 ${dec(v)} 四捨五入取到個位，結果是多少？`, r, [r - 1000, r + 1000, v], `保留個位，看十分位 ${Math.floor(v / 100) % 10}；滿 5 進 1，所以得到 ${dec(r)}。`, '取到個位', dec);
    v = [38674, 72949, 56485][t]; r = round(v, 100);
    num(a14, `將 ${dec(v)} 四捨五入取到十分位，結果是多少？`, r, [Math.floor(v / 100) * 100, r + 100, round(v, 10), r - 100], `保留十分位，看百分位 ${Math.floor(v / 10) % 10}；依四捨五入得到 ${dec(r)}，末尾兩個 0 可省略。`, '取到十分位', dec);
    v = [57846, 69875, 23994][t]; r = round(v, 10);
    num(a14, `將 ${dec(v)} 四捨五入取到百分位，結果是多少？`, r, [r - 10, r + 10, round(v, 100)], `保留百分位，看千分位 ${v % 10}；${v % 10 >= 5 ? '滿 5，百分位進 1' : '未滿 5，直接捨去'}，得到 ${dec(r)}。`, '取到百分位', dec);
    v = [29995, 49996, 79998][t]; r = round(v, 10);
    num(a14, `${dec(v)} 取到百分位時需要連續進位，正確結果是多少？`, r, [r - 10, r + 10, r - 100], `千分位 ${v % 10} 滿 5，使百分位的 9 進位；再向十分位及個位連續進位，${dec(v)} 約為 ${dec(r)}。`, '連續進位', dec);
    v = [78346, 92573, 64128][t];
    num(a14, `把 ${dec(v)} 取到十分位，應觀察哪個數字決定是否進位？`, Math.floor(v / 10) % 10, [Math.floor(v / 100) % 10, v % 10, Math.floor(v / 1000) % 10], `取到十分位時要看右邊緊鄰的百分位；${dec(v)} 的百分位數字是 ${Math.floor(v / 10) % 10}。`, '判斷觀察位');
    v = [16785, 24936, 35847][t]; r = round(v, 100);
    num(a14, `登山紀錄 ${dec(v)} 公里，報告要求取到十分位，應填多少公里？`, r, [r - 100, r + 100, round(v, 1000)], `保留到 0.1 公里，查看百分位 ${Math.floor(v / 10) % 10}，四捨五入後為 ${dec(r)} 公里。`, '情境｜里程概數', dec);
    v = [27436, 38575, 46984][t]; r = round(v, 10);
    num(a14, `電子秤顯示 ${dec(v)} 公斤，貨單要求取到 0.01 公斤。應記為多少？`, r, [r - 10, r + 10, round(v, 100)], `0.01 公斤是百分位，查看千分位 ${v % 10}，得到 ${dec(r)} 公斤。`, '情境｜重量概數', dec);
    v = [12865, 14724, 18956][t]; r = round(v, 1000);
    num(a14, `某原料每公斤 ${dec(v)} 元，店員先把單價取到整數元，單價約是多少元？`, r, [r - 1000, r + 1000, round(v, 100)], `取整數元就是保留個位，查看十分位 ${Math.floor(v / 100) % 10}；四捨五入後約 ${dec(r)} 元。`, '情境｜單價估計', dec);
    v = [39865, 57734, 68628][t]; r = round(v, 100);
    num(a14, `實測路線 ${dec(v)} 公里，公告取到十分位成 ${dec(r)} 公里。公告值與實測值相差幾公里？`, Math.abs(r - v), [100 - Math.abs(r - v), Math.abs(r - v) + 10, Math.abs(r - v) * 10], `先將 ${dec(v)} 四捨五入成 ${dec(r)}；用較大值減較小值，差為 ${dec(Math.abs(r - v))} 公里。`, '情境｜概數誤差', dec);
    const one = [18346, 24765, 35627][t], two = [27583, 38124, 46978][t];
    num(a14, `買兩段材料分別長 ${dec(one)}、${dec(two)} 公尺。先各自取到整公尺，再加總估計，合計約幾公尺？`, round(one, 1000) + round(two, 1000), [round(one + two, 1000), round(one, 1000) + round(two, 1000) + 1000, round(one, 1000) + round(two, 1000) - 1000], `${dec(one)} 約 ${dec(round(one, 1000))}，${dec(two)} 約 ${dec(round(two, 1000))}；依題意先各自取概數後相加，合計 ${dec(round(one, 1000) + round(two, 1000))} 公尺。`, '情境｜先取概數再估算', dec);

    let total = [144, 180, 216][t], divisor = [12, 15, 18][t];
    num(a21, `已知 ${total}＝${divisor}×□，與 ${divisor} 配對的因數是多少？`, total / divisor, [total / divisor + 1, divisor + 1, total - divisor], `因數可以成對出現；${total}÷${divisor}＝${total / divisor}，所以配對為 ${divisor} 和 ${total / divisor}。`, '因數配對');
    total = [96, 120, 144][t];
    add(a21, `哪一組完整列出 ${total} 的所有正因數，沒有遺漏或多列？`, fs(total).join('、'), [fs(total).slice(1).join('、'), fs(total).filter(x => x !== 4).join('、'), [...fs(total), total - 1].join('、')], `由乘積配對：${fs(total).filter(x => x <= Math.sqrt(total)).map(x => `${x}×${total / x}`).join('、')}；合併去重後為 ${fs(total).join('、')}。`, '完整列舉因數');
    total = [168, 192, 240][t]; const row = [14, 16, 20][t];
    num(a21, `有 ${total} 張卡片，每排放 ${row} 張且剛好排完，可以排幾排？`, total / row, [total / row + 1, row, total / row - 1], `每排張數×排數＝總張數，所以 ${total}÷${row}＝${total / row} 排；兩個數都是 ${total} 的因數。`, '情境｜矩形排列');
    total = [108, 144, 180][t]; const factorLow = [7, 10, 13][t], factorHigh = [13, 19, 21][t], eligible = fs(total).filter(x => x > factorLow && x < factorHigh);
    num(a21, `有 ${total} 人要分成相同人數的小隊。隊數大於 ${factorLow} 且小於 ${factorHigh}，符合條件的隊數共有幾種？`, eligible.length, [eligible.length + 1, eligible.length - 1, 4], `隊數必須是 ${total} 的因數；在範圍內的因數是 ${eligible.join('、')}，因此共有 ${eligible.length} 種。`, '情境｜分組條件個數');
    total = [120, 168, 216][t]; const edgeLimit = [10, 12, 15][t], max = Math.max(...fs(total).filter(x => x <= edgeLimit));
    num(a21, `烘焙社有 ${total} 片餅乾，要每袋裝相同片數並全部裝完；每袋最多 ${edgeLimit} 片。每袋最多可以裝幾片？`, max, [max - 1, max + 1, edgeLimit + 1], `每袋片數必須整除 ${total}。列出不超過 ${edgeLimit} 的因數 ${fs(total).filter(x => x <= edgeLimit).join('、')}，最大是 ${max}。`, '情境｜包裝上限');
    total = [84, 126, 180][t]; const sides = fs(total).filter(x => x <= Math.sqrt(total));
    num(a21, `用 ${total} 個相同小正方形排成實心長方形，旋轉後相同的排法只算一種，共有幾種不同長寬配對？`, sides.length, [fs(total).length, sides.length + 1, sides.length - 1], `只需列短邊不大於長邊的因數配對：${sides.map(x => `${x}×${total / x}`).join('、')}，共 ${sides.length} 種。`, '情境｜不重複長寬配對');
    total = [150, 210, 270][t]; const bad = [16, 16, 16][t], valid = fs(total).filter(x => x > 1 && x < total).slice(0, 3);
    add(a21, `工廠有 ${total} 個零件，下列哪種每盒數量不能剛好裝完、不留零件？`, bad, valid, `${valid.map(x => `${total}÷${x}＝${total / x}`).join('；')} 都整除；${total}÷${bad}＝${Math.floor(total / bad)} 餘 ${total % bad}，所以每盒 ${bad} 個不行。`, '情境｜非因數辨識');

    let ga = [120, 168, 252][t], gb = [180, 252, 378][t], gg = gcd(ga, gb);
    add(a22, `${ga} 和 ${gb} 的所有正公因數是哪一組？`, fs(gg).join('、'), [fs(gg).slice(1).join('、'), fs(ga).join('、'), [...fs(gg), gg + 1].join('、')], `先求最大公因數 ${gg}；所有公因數就是 ${gg} 的因數：${fs(gg).join('、')}。`, '列出所有公因數');
    num(a22, `兩數的最大公因數是 ${gg}，它們的正公因數中，除了 1 和 ${gg} 本身，還有幾個？`, fs(gg).length - 2, [fs(gg).length, fs(gg).length - 1, gg - 2], `公因數是 ${fs(gg).join('、')}，共 ${fs(gg).length} 個；扣掉 1 和 ${gg}，剩 ${fs(gg).length - 2} 個。`, '公因數排除端點');
    const third = gg * [5, 7, 11][t], tri = gcd(gcd(ga, gb), third);
    num(a22, `${ga}、${gb}、${third} 三數的最大公因數是多少？`, tri, [tri / 2, tri * 2, tri + 1], `先找 ${ga} 與 ${gb} 的最大公因數 ${gg}，再求 ${gg} 與 ${third} 的最大公因數，得到 ${tri}。`, '三數最大公因數');

    const multiple = [18, 24, 35][t], kth = [17, 19, 16][t];
    num(a31, `${multiple} 的正倍數依序排列，第 ${kth} 個是多少？`, multiple * kth, [multiple * (kth - 1), multiple * (kth + 1), multiple + kth], `第 1 個正倍數是 ${multiple}×1，第 ${kth} 個是 ${multiple}×${kth}＝${multiple * kth}。`, '第幾個正倍數');
    let start = [250, 340, 450][t], stop = [650, 860, 1090][t], count = Math.floor(stop / multiple) - Math.ceil(start / multiple) + 1;
    num(a31, `${start} 到 ${stop} 之間（包含兩端）有幾個 ${multiple} 的倍數？`, count, [count + 1, count - 1, Math.floor(stop / multiple)], `第一個是 ${multiple * Math.ceil(start / multiple)}（第 ${Math.ceil(start / multiple)} 個正倍數）；最後是 ${multiple * Math.floor(stop / multiple)}（第 ${Math.floor(stop / multiple)} 個）。個數＝${Math.floor(stop / multiple)}－${Math.ceil(start / multiple)}＋1＝${count}。`, '倍數區間個數');
    const seqStart = multiple * [8, 9, 11][t];
    num(a31, `連續三個 ${multiple} 的倍數是 ${seqStart}、□、${seqStart + multiple * 2}。□ 是多少？`, seqStart + multiple, [seqStart + 1, seqStart + multiple - 1, seqStart + multiple * 3], `相鄰的 ${multiple} 倍數相差 ${multiple}；${seqStart}＋${multiple}＝${seqStart + multiple}，再加 ${multiple} 得 ${seqStart + multiple * 2}。`, '倍數序列缺項');
    const goodMult = multiple * [23, 27, 31][t];
    add(a31, `下列哪個數是 ${multiple} 的倍數？`, goodMult, [goodMult + 1, goodMult - 1, goodMult + 2], `${goodMult}÷${multiple}＝${goodMult / multiple}，沒有餘數；其他選項除以 ${multiple} 都有餘數。`, '倍數整除辨識');
    let pack = [24, 36, 48][t], need = [385, 674, 889][t], packs = Math.ceil(need / pack);
    num(a31, `貼紙每包 ${pack} 張，只能整包購買。至少需要 ${need} 張，最少要買幾張？`, packs * pack, [(packs - 1) * pack, (packs + 1) * pack, need], `${need}÷${pack}＝${Math.floor(need / pack)} 餘 ${need % pack}；不足一包仍要多買一包，所以買 ${packs} 包，共 ${packs}×${pack}＝${packs * pack} 張。`, '情境｜至少整包量');
    const period = [18, 24, 35][t], elapsed = [137, 193, 284][t], next = Math.floor(elapsed / period) * period + period;
    num(a31, `灑水器從第 0 分鐘開始，每 ${period} 分鐘啟動一次。現在是第 ${elapsed} 分鐘，下一次啟動是第幾分鐘？`, next, [next - period, next + period, elapsed + period], `啟動時刻為 ${period} 的倍數；${elapsed}÷${period} 的整數商是 ${Math.floor(elapsed / period)}，下一次為 ${period}×${Math.floor(elapsed / period) + 1}＝${next} 分鐘。`, '情境｜下一個週期');
    const budget = [1850, 2360, 3170][t], price = [75, 85, 95][t], can = Math.floor(budget / price);
    num(a31, `社團有 ${budget} 元，每套材料 ${price} 元。買最多完整套數時，總共花幾元？`, can * price, [(can + 1) * price, (can - 1) * price, budget], `花費是 ${price} 的倍數，且不可超過 ${budget}；${budget}÷${price}＝${can} 餘 ${budget % price}，所以花 ${can}×${price}＝${can * price} 元。`, '情境｜預算內最大倍數');
    const gap = [16, 24, 32][t], road = gap * [18, 21, 24][t];
    num(a31, `直線步道長 ${road} 公尺，從起點開始每隔 ${gap} 公尺立一個牌，起點與終點都立。共需幾個牌？`, road / gap + 1, [road / gap, road / gap - 1, road / gap + 2], `共有 ${road}÷${gap}＝${road / gap} 段間隔；兩端都立，牌數比間隔數多 1，所以共 ${road / gap + 1} 個。`, '情境｜倍數間隔含兩端');
    const unit = [28, 32, 45][t], goalLow = [400, 600, 800][t], goalHigh = [550, 780, 1000][t], available = Math.floor(goalHigh / unit) - Math.ceil(goalLow / unit) + 1;
    num(a31, `一列有 ${unit} 個座位。只開放完整列，總開放座位須在 ${goalLow} 到 ${goalHigh} 個之間（含兩端），共有幾種可行的列數？`, available, [available + 1, available - 1, Math.floor(goalHigh / unit)], `最少開放 ${Math.ceil(goalLow / unit)} 列，最多 ${Math.floor(goalHigh / unit)} 列；整數列數共 ${Math.floor(goalHigh / unit)}－${Math.ceil(goalLow / unit)}＋1＝${available} 種。`, '情境｜範圍中的整列數');

    const even = [384726, 527418, 693852][t];
    add(a32, `下列哪個六位數是 2 的倍數？`, even, [even + 1, even + 3, even + 5], `2 的倍數末位必須是 0、2、4、6、8；${even} 末位是 ${even % 10}，其餘末位都是奇數。`, '2 的倍數判別');
    const five = [284735, 563245, 796315][t];
    add(a32, `下列哪個數是 5 的倍數，但不是 10 的倍數？`, five, [five - 5, five + 1, five + 2], `5 的倍數末位是 0 或 5；不是 10 的倍數就不能以 0 結尾，因此選末位為 5 的 ${five}。`, '5 與 10 聯合判別');
    const digitSum = v => String(v).split('').reduce((s, x) => s + Number(x), 0), nine = [384759, 563247, 796329][t];
    const n9 = nine + ((9 - digitSum(nine) % 9) % 9);
    add(a32, `下列哪個數是 9 的倍數？`, n9, [n9 + 1, n9 + 2, n9 + 4], `${n9} 的數字和是 ${digitSum(n9)}，是 9 的倍數；其餘三個數的數字和都不是 9 的倍數。`, '9 的倍數判別');
    const prefix = [5275, 6385, 7496][t], required = (9 - digitSum(prefix) % 9) % 9;
    num(a32, `五位數 ${prefix}□ 是 9 的倍數，□ 應填哪個數字？`, required, [(required + 1) % 10, (required + 2) % 10, (required + 3) % 10], `前四位數字和＝${digitSum(prefix)}；加上 ${required} 得 ${digitSum(prefix) + required}，恰為 9 的倍數，所以填 ${required}。0 到 9 中只有這個數符合。`, '缺位與數字和');
    const six = [287646, 396852, 584736][t];
    add(a32, `哪個數同時是 2 和 3 的倍數？`, six, [six + 1, six + 2, six + 4], `${six} 的末位是偶數且數字和 ${digitSum(six)} 為 3 的倍數，所以兩項都符合；其餘選項至少一項不符合。`, '2 與 3 聯合判別');
    const cards = [247536, 358647, 469758][t];
    add(a32, `學校印了 ${cards} 張卡片，全部平均分給 3 個社團，能不能剛好分完？`, '可以，因為數字和是 3 的倍數', ['不可以，因為末位不是 0', '不可以，因為張數太大', '可以，因為末位是偶數'], `數字和＝${digitSum(cards)}，${digitSum(cards)}÷3＝${digitSum(cards) / 3}；因此 ${cards} 是 3 的倍數，可以每團 ${cards / 3} 張。`, '情境｜3 組平均分配');
    const pens = [378450, 486720, 593810][t];
    add(a32, `工廠要把鉛筆每盒裝 10 枝，下列哪個總枝數可以剛好裝完？`, pens, [pens + 1, pens + 5, pens + 8], `每盒 10 枝要檢查是否為 10 的倍數；只有 ${pens} 末位是 0，可裝 ${pens / 10} 盒。`, '情境｜10 枝裝盒');
    const cookies = [257835, 368745, 479655][t];
    add(a32, `餅乾共有 ${cookies} 片，打算每袋 5 片。下列哪個方法能最快判斷會不會剩餘？`, '看末位是 0 或 5，所以不會剩餘', ['只看第一位是不是 5', '只看數字和是不是 5', '末位不是 0，所以一定會剩餘'], `${cookies} 的末位是 5，所以是 5 的倍數；${cookies}÷5＝${cookies / 5}，可全部裝完。`, '情境｜5 片裝袋');
    const nineItems = [n9, n9 + 1, n9 + 2, n9 + 4];
    add(a32, `九個班要平均分配徽章且不能剩餘，下列哪個總數可行？`, n9, nineItems.slice(1), `總數要是 9 的倍數。${n9} 的數字和 ${digitSum(n9)} 可被 9 整除，故每班 ${n9 / 9} 枚；其餘總數不能被 9 整除。`, '情境｜9 班分配');
    const carton = [124560, 237480, 348750][t];
    add(a32, `倉庫總零件數要能每袋 2 個、每袋 5 個或每袋 10 個都剛好分完。下列哪個總數符合？`, carton, [carton + 2, carton + 5, carton + 9], `同時符合三種分法，只要是 10 的倍數；${carton} 末位為 0，也必為 2、5 的倍數。其餘選項至少一種會剩餘。`, '情境｜多種包裝檢查');

    const ca = [16, 20, 28][t], cb = [24, 30, 42][t], cc = [40, 45, 63][t], cl = lcm(lcm(ca, cb), cc);
    num(a33, `數量必須同時是 ${ca}、${cb}、${cc} 的倍數，而且大於 ${cl}。符合條件的最小正整數是多少？`, cl * 2, [cl, cl * 3, ca + cb + cc], `三數的最小公倍數是 ${cl}；公倍數依序為 ${cl}、${cl * 2}、${cl * 3}……。必須大於 ${cl}，所以取下一個 ${cl * 2}。`, '公倍數嚴格下限');

    const dividend = [17, 23, 29][t], denominator = [12, 15, 18][t];
    rational(a41, `${dividend}÷${denominator} 的商，用最簡分數表示是多少？`, dividend, denominator, `整數相除可寫成「被除數/除數」：${dividend}÷${denominator}＝${dividend}/${denominator}；最大公因數為 ${gcd(dividend, denominator)}，最簡為 ${frac(dividend, denominator)}。`, '除法化分數');
    const nn = [42, 63, 84][t], dd = [30, 45, 60][t];
    rational(a41, `把 ${nn}÷${dd} 的結果寫成最簡分數，答案是？`, nn, dd, `${nn}÷${dd}＝${nn}/${dd}；分子分母同除以 ${gcd(nn, dd)}，得到 ${frac(nn, dd)}。`, '除法後約分');
    const answerN = [7, 11, 13][t], answerD = [9, 12, 15][t], scale = [8, 6, 4][t];
    num(a41, `${answerN * scale}÷□＝${answerN}/${answerD}，□ 應填多少？`, answerD * scale, [answerD, answerN * scale, answerD * scale + scale], `把右邊擴分為 ${answerN * scale}/${answerD * scale}；商的分子與被除數相同，所以除數是分母 ${answerD * scale}。驗算 ${answerN * scale}÷${answerD * scale}＝${answerN}/${answerD}。`, '由商逆推除數');
    const quotientN = [31, 43, 55][t], quotientD = [12, 15, 18][t];
    num(a41, `${quotientN}÷${quotientD} 的商介於哪兩個相鄰整數之間？請選較小的整數。`, Math.floor(quotientN / quotientD), [Math.floor(quotientN / quotientD) - 1, Math.floor(quotientN / quotientD) + 1, quotientD], `${quotientD}×${Math.floor(quotientN / quotientD)}＝${quotientD * Math.floor(quotientN / quotientD)}＜${quotientN}＜${quotientD * (Math.floor(quotientN / quotientD) + 1)}；因此商介於 ${Math.floor(quotientN / quotientD)} 和 ${Math.floor(quotientN / quotientD) + 1}。`, '商的整數範圍');
    const lessN = [23, 29, 37][t], lessD = [28, 35, 42][t];
    add(a41, `${lessN}÷${lessD} 的商和 1 比較，哪個敘述正確？`, '商小於 1，因為被除數小於除數', ['商大於 1，因為兩數都大於 1', '商等於 1，因為是整數相除', '沒有餘數才能比較'], `商＝${lessN}/${lessD}；分子 ${lessN} 小於分母 ${lessD}，所以每份不足 1，商小於 1。`, '除法與 1 比較');
    const ribbon = [29, 37, 43][t], people = [12, 15, 18][t];
    rational(a41, `長 ${ribbon} 公尺的緞帶平均分成 ${people} 段，每段長幾公尺？請選最簡分數。`, ribbon, people, `每段長＝總長÷段數＝${ribbon}÷${people}＝${frac(ribbon, people)} 公尺；反乘 ${people} 可得到總長 ${ribbon}。`, '情境｜長度平均分');
    const food = [21, 28, 35][t], children = [18, 24, 30][t];
    rational(a41, `${food} 個相同披薩平均分給 ${children} 人，每人分得幾個披薩？請選最簡分數。`, food, children, `每人分得 ${food}÷${children}＝${food}/${children}；分子分母同除以 ${gcd(food, children)}，得到 ${frac(food, children)} 個。`, '情境｜食物平均分');
    const grain = [25, 34, 46][t], bags = [14, 21, 28][t];
    rational(a41, `${grain} 公斤米平均裝成 ${bags} 袋，每袋淨重幾公斤？請選最簡分數。`, grain, bags, `每袋淨重＝${grain} 公斤÷${bags} 袋＝${grain}/${bags} 公斤，約分後為 ${frac(grain, bags)} 公斤。`, '情境｜重量平均裝袋');
    const paint = [19, 27, 33][t], walls = [12, 18, 24][t];
    rational(a41, `${paint} 公升油漆平均用在 ${walls} 面同樣大的牆，每面用幾公升？請選最簡分數。`, paint, walls, `每面用量＝總量÷面數＝${paint}÷${walls}＝${paint}/${walls}；約分得到 ${frac(paint, walls)} 公升。`, '情境｜油漆平均分配');
    const minutes = [47, 59, 73][t], rounds = [12, 15, 18][t];
    rational(a41, `機器做完 ${rounds} 次相同作業共花 ${minutes} 分鐘，每次時間相同。一次作業需幾分鐘？請選最簡分數。`, minutes, rounds, `一次時間＝總時間÷次數＝${minutes}÷${rounds}＝${frac(minutes, rounds)} 分鐘；以分數記錄可以保留精確值。`, '情境｜平均每次時間');

    const rn = [7, 11, 13][t], rd = [18, 24, 30][t], rk = [5, 6, 7][t];
    num(a42, `${rn}/${rd} 擴分後分子是 ${rn * rk}，分母應是多少？`, rd * rk, [rd + rk, rd * rk + rk, rd * (rk - 1)], `分子乘以 ${rk}，分母也要乘以 ${rk}：${rd}×${rk}＝${rd * rk}，所以是 ${rn * rk}/${rd * rk}。`, '擴分求分母');
    num(a42, `${rn}/${rd}＝${rn * rk}/${rd * rk}，分子、分母各乘了多少？`, rk, [rk - 1, rk + 1, rd], `先用新分子÷原分子：${rn * rk}÷${rn}＝${rk}；再用新分母驗算 ${rd * rk}÷${rd}＝${rk}。`, '求擴分倍數');
    add(a42, `關於把 ${rn}/${rd} 擴分，下列哪個做法會改變分數大小？`, `分子、分母都加 ${rk}`, [`分子、分母都乘 ${rk}`, `分子、分母都乘 ${rk + 1}`, `分子、分母都乘 ${rk + 2}`], `同乘相同的非零數才保留比值；${rn}/${rd} 與 ${rn + rk}/${rd + rk} 交叉相乘分別為 ${rn * (rd + rk)}、${(rn + rk) * rd}，不相等，故同加 ${rk} 改變大小。`, '擴分錯誤辨識');
    const grid = rd * rk;
    num(a42, `同一張圖原本平均分 ${rd} 格，塗了 ${rn} 格。重新等分成 ${grid} 個小格且塗色範圍不變，會塗幾個小格？`, rn * rk, [rn, rn + rk, grid - rn * rk], `每個原格再分成 ${rk} 小格，塗色格數也乘 ${rk}：${rn}×${rk}＝${rn * rk}，比例仍為 ${rn}/${rd}。`, '情境｜方格細分');
    const seats = [180, 240, 300][t], denominator2 = [12, 15, 20][t], numerator2 = [7, 8, 13][t];
    num(a42, `演講廳共有 ${seats} 個座位，保留其中的 ${numerator2}/${denominator2} 給學生。學生保留席有幾個？`, seats / denominator2 * numerator2, [seats / denominator2, seats - seats / denominator2 * numerator2, seats / denominator2 * numerator2 + seats / denominator2], `分母 ${denominator2} 擴成 ${seats} 要乘 ${seats / denominator2}，分子也同乘，得到 ${seats / denominator2 * numerator2}/${seats}，因此有 ${seats / denominator2 * numerator2} 個。`, '情境｜保留席換算');
    const routeDen = [16, 18, 24][t], routeN = [9, 11, 13][t], routeTotal = routeDen * [5, 6, 7][t];
    num(a42, `路線全程分成 ${routeTotal} 個等長小段，小隊已完成全程 ${routeN}/${routeDen}。已走完幾個小段？`, routeN * routeTotal / routeDen, [routeN, routeTotal - routeN * routeTotal / routeDen, routeN * routeTotal / routeDen + 1], `${routeN}/${routeDen} 擴成分母 ${routeTotal}，要同乘 ${routeTotal / routeDen}；分子變成 ${routeN * routeTotal / routeDen}，即已完成的小段數。`, '情境｜進度小段數');
    const recipeDen = [14, 18, 22][t], recipeN = [9, 13, 15][t], scoopTotal = recipeDen * [4, 5, 6][t];
    num(a42, `一桶混合飲品分成 ${scoopTotal} 小杯，果汁占整桶的 ${recipeN}/${recipeDen}。同樣容量換算，果汁相當於幾小杯？`, recipeN * scoopTotal / recipeDen, [recipeN, scoopTotal - recipeN * scoopTotal / recipeDen, recipeN * scoopTotal / recipeDen + 1], `將 ${recipeN}/${recipeDen} 擴成分母 ${scoopTotal}：同乘 ${scoopTotal / recipeDen}，得到 ${recipeN * scoopTotal / recipeDen}/${scoopTotal}，即 ${recipeN * scoopTotal / recipeDen} 小杯。`, '情境｜容量等值換算');

    const sn = [126, 168, 210][t], sd = [180, 240, 300][t], sg = gcd(sn, sd);
    num(a43, `將 ${sn}/${sd} 約成最簡分數時，分子與分母可以直接同除以哪個最大整數？`, sg, [sg / 2, sg * 2, sg + 1], `要同除以最大公因數；${sn}、${sd} 的最大公因數是 ${sg}，所以 ${sn}÷${sg}＝${sn / sg}、${sd}÷${sg}＝${sd / sg}。`, '約分用最大公因數');
    const bestN = [17, 19, 23][t], bestD = [28, 30, 36][t];
    add(a43, `下列哪個已是最簡分數？`, `${bestN}/${bestD}`, [`${bestN * 2}/${bestD * 2}`, `${bestN * 3}/${bestD * 3}`, `${bestN * 4}/${bestD * 4}`], `${bestN} 與 ${bestD} 的最大公因數為 1，不能再同除以大於 1 的整數；其他三個分數分子、分母分別有公因數 2、3、4。`, '辨識最簡分數');
    const baseN = [5, 7, 11][t], baseD = [12, 18, 24][t], baseK = [14, 16, 18][t];
    num(a43, `□/${baseD * baseK} 約成最簡分數後為 ${baseN}/${baseD}，□ 是多少？`, baseN * baseK, [baseN, baseN * baseK + baseK, baseN + baseK], `分母 ${baseD * baseK}÷${baseK}＝${baseD}，所以原分子÷${baseK}＝${baseN}；原分子＝${baseN}×${baseK}＝${baseN * baseK}。`, '約分逆推原分子');
    const bottles = [240, 360, 420][t], recycled = [156, 234, 273][t];
    rational(a43, `環保活動收回 ${bottles} 個瓶子，其中 ${recycled} 個是塑膠瓶。塑膠瓶占全部的幾分之幾？請選最簡分數。`, recycled, bottles, `先寫部分/全部＝${recycled}/${bottles}；同除以最大公因數 ${gcd(recycled, bottles)}，得到 ${frac(recycled, bottles)}。`, '情境｜回收比例');
    const marbles = [180, 240, 300][t], removed = [66, 88, 110][t], left = marbles - removed;
    rational(a43, `原有 ${marbles} 顆彈珠，送出 ${removed} 顆。剩下的占原來的幾分之幾？請選最簡分數。`, left, marbles, `先求剩下 ${marbles}－${removed}＝${left} 顆；比例 ${left}/${marbles} 同除以 ${gcd(left, marbles)}，得到 ${frac(left, marbles)}。`, '情境｜剩餘比例');
    const attempts = [168, 210, 252][t], hits = [120, 150, 180][t];
    rational(a43, `射門練習共 ${attempts} 次，射進 ${hits} 次。進球次數占全部練習的幾分之幾？請選最簡分數。`, hits, attempts, `進球/總次數＝${hits}/${attempts}；最大公因數為 ${gcd(hits, attempts)}，同除後是 ${frac(hits, attempts)}。`, '情境｜運動成功比例');
    const tank = [480, 600, 720][t], filled = [336, 420, 504][t];
    rational(a43, `水槽可裝 ${tank} 公升，現有 ${filled} 公升。水量占容量的幾分之幾？請選最簡分數。`, filled, tank, `現有量/總容量＝${filled}/${tank}；同除以最大公因數 ${gcd(filled, tank)}，得到 ${frac(filled, tank)}。`, '情境｜容量比例');
    const pagesTotal = [288, 360, 432][t], pagesRead = [198, 248, 297][t];
    rational(a43, `一本書共 ${pagesTotal} 頁，小華已讀 ${pagesRead} 頁。已讀部分占全書的幾分之幾？請選最簡分數。`, pagesRead, pagesTotal, `已讀比例＝${pagesRead}/${pagesTotal}；最大公因數為 ${gcd(pagesRead, pagesTotal)}，約分得 ${frac(pagesRead, pagesTotal)}。`, '情境｜閱讀比例');

    const fA = [[7, 12], [11, 18], [13, 20]][t], fB = [[5, 8], [7, 12], [5, 8]][t], fC = [[3, 5], [3, 5], [2, 3]][t], all = [fA, fB, fC];
    const sorted = [...all].sort((a, b) => a[0] * b[1] - b[0] * a[1]), common = all.reduce((acc, v) => lcm(acc, v[1]), 1);
    const describe = v => `${v[0]}/${v[1]}`, maxFraction = sorted[2];
    add(a44, `${all.map(describe).join('、')} 三個分數中，哪個最大？`, describe(maxFraction), [...all.filter(v => v !== maxFraction).map(describe), '三者相等'], `通分到分母 ${common}：${all.map(v => `${describe(v)}＝${v[0] * common / v[1]}/${common}`).join('、')}。同分母比分子，最大是 ${describe(maxFraction)}。`, '三分數比較');
    add(a44, `把 ${all.map(describe).join('、')} 由小到大排列，哪個正確？`, sorted.map(describe).join('＜'), [[sorted[1], sorted[0], sorted[2]], [sorted[2], sorted[1], sorted[0]], [sorted[0], sorted[2], sorted[1]]].map(v => v.map(describe).join('＜')), `最小公分母為 ${common}；通分後的分子由小到大為 ${sorted.map(v => v[0] * common / v[1]).join('、')}，所以 ${sorted.map(describe).join('＜')}。`, '三分數排序');
    const dl = [18, 24, 30][t], dr = [24, 36, 45][t], lcd = lcm(dl, dr);
    num(a44, `把 5/${dl} 和 7/${dr} 都化成分母 ${lcd * 2}，這個分母是最小公分母的幾倍？`, 2, [1, 3, 4], `${dl} 與 ${dr} 的最小公倍數是 ${lcd}；${lcd * 2}÷${lcd}＝2。通分可用公倍數，但此分母不是最小公分母。`, '公分母與最小公分母');
    const speedWinner = fA[0] * fB[1] > fB[0] * fA[1] ? '甲車' : '乙車', cm2 = lcm(fA[1], fB[1]);
    add(a44, `甲乙兩車走同一條路，甲已走全程 ${describe(fA)}，乙已走 ${describe(fB)}。哪輛車距離終點較近？`, speedWinner, ['甲車', '乙車', '一樣近', '無法比較'].filter(v => v !== speedWinner), `以同一全程為基準，已走越多就離終點越近。通分為 ${fA[0] * cm2 / fA[1]}/${cm2}、${fB[0] * cm2 / fB[1]}/${cm2}，所以 ${speedWinner} 已走較多、離終點較近。`, '情境｜距離終點比較');
    const sizes = [[11, 16, 13, 20], [13, 18, 17, 24], [17, 24, 21, 30]][t], [uN, uD, vN, vD] = sizes, cupWinner = uN * vD < vN * uD ? '甲杯' : '乙杯', cc2 = lcm(uD, vD);
    add(a44, `甲杯有 ${uN}/${uD} 公升、乙杯有 ${vN}/${vD} 公升。要選水量較少的一杯，應選哪杯？`, cupWinner, ['甲杯', '乙杯', '一樣多', '分母較大的一定較少'].filter(v => v !== cupWinner), `通分到 ${cc2}：甲 ${uN * cc2 / uD}/${cc2} 公升、乙 ${vN * cc2 / vD}/${cc2} 公升。比較分子可知 ${cupWinner} 水量較少。`, '情境｜實際水量比較');
  }

  const ids = new Set();
  for (const u of units) {
    if (u.questions.length !== 30) throw new Error(`${u.code} 題數必須為30，實為${u.questions.length}`);
    if (u.questions.filter(q => q.tag.startsWith('情境')).length < 10) throw new Error(`${u.code} 情境題不足`);
    if (new Set(u.questions.map(q => q.tag)).size < 6) throw new Error(`${u.code} 題型不足`);
    for (const q of u.questions) {
      if (ids.has(q.id) || q.options.length !== 4 || new Set(q.options).size !== 4 || !Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3 || !q.explanation) throw new Error(`結構錯誤 ${q.id}`);
      ids.add(q.id);
    }
  }
  for (const u of original) for (const q of u.questions) if (!ids.has(q.id)) throw new Error(`原題遺失 ${q.id}`);
  window.MATH_SECTION_UNITS = units;
})();
