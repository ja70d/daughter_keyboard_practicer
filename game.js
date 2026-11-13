// ===== 游戏数据 =====
// 拼音数据按人教版一年级教材单元顺序排列
const PINYIN_DATA = [
    // 一年级上册 - 识字1（天地人）
    { word: '天', pinyin: 'tian', hint: '蓝天白云', char: 't', unit: '一年级上册·识字1', unitEn: 'Grade 1 Vol.1 · Unit 1' },
    { word: '地', pinyin: 'di', hint: '大地', char: 'd', unit: '一年级上册·识字1', unitEn: 'Grade 1 Vol.1 · Unit 1' },
    { word: '人', pinyin: 'ren', hint: '人们', char: 'r', unit: '一年级上册·识字1', unitEn: 'Grade 1 Vol.1 · Unit 1' },
    { word: '你', pinyin: 'ni', hint: '你好', char: 'n', unit: '一年级上册·识字1', unitEn: 'Grade 1 Vol.1 · Unit 1' },
    { word: '我', pinyin: 'wo', hint: '我们', char: 'w', unit: '一年级上册·识字1', unitEn: 'Grade 1 Vol.1 · Unit 1' },
    { word: '他', pinyin: 'ta', hint: '他们', char: 't', unit: '一年级上册·识字1', unitEn: 'Grade 1 Vol.1 · Unit 1' },
    // 一年级上册 - 识字2（金木水火土）
    { word: '金', pinyin: 'jin', hint: '金子', char: 'j', unit: '一年级上册·识字2', unitEn: 'Grade 1 Vol.1 · Unit 2' },
    { word: '木', pinyin: 'mu', hint: '树木', char: 'm', unit: '一年级上册·识字2', unitEn: 'Grade 1 Vol.1 · Unit 2' },
    { word: '水', pinyin: 'shui', hint: '喝水', char: 's', unit: '一年级上册·识字2', unitEn: 'Grade 1 Vol.1 · Unit 2' },
    { word: '火', pinyin: 'huo', hint: '火车', char: 'h', unit: '一年级上册·识字2', unitEn: 'Grade 1 Vol.1 · Unit 2' },
    { word: '土', pinyin: 'tu', hint: '泥土', char: 't', unit: '一年级上册·识字2', unitEn: 'Grade 1 Vol.1 · Unit 2' },
    // 一年级上册 - 识字3（口耳目）
    { word: '口', pinyin: 'kou', hint: '开口', char: 'k', unit: '一年级上册·识字3', unitEn: 'Grade 1 Vol.1 · Unit 3' },
    { word: '耳', pinyin: 'er', hint: '耳朵', char: 'e', unit: '一年级上册·识字3', unitEn: 'Grade 1 Vol.1 · Unit 3' },
    { word: '目', pinyin: 'mu', hint: '目光', char: 'm', unit: '一年级上册·识字3', unitEn: 'Grade 1 Vol.1 · Unit 3' },
    { word: '手', pinyin: 'shou', hint: '小手', char: 's', unit: '一年级上册·识字3', unitEn: 'Grade 1 Vol.1 · Unit 3' },
    { word: '足', pinyin: 'zu', hint: '足球', char: 'z', unit: '一年级上册·识字3', unitEn: 'Grade 1 Vol.1 · Unit 3' },
    // 一年级上册 - 课文1（秋天）
    { word: '秋', pinyin: 'qiu', hint: '秋天来了', char: 'q', unit: '一年级上册·课文1', unitEn: 'Grade 1 Vol.1 · Text 1' },
    { word: '气', pinyin: 'qi', hint: '天气', char: 'q', unit: '一年级上册·课文1', unitEn: 'Grade 1 Vol.1 · Text 1' },
    { word: '了', pinyin: 'le', hint: '走了', char: 'l', unit: '一年级上册·课文1', unitEn: 'Grade 1 Vol.1 · Text 1' },
    { word: '树', pinyin: 'shu', hint: '大树', char: 's', unit: '一年级上册·课文1', unitEn: 'Grade 1 Vol.1 · Text 1' },
    { word: '叶', pinyin: 'ye', hint: '叶子', char: 'y', unit: '一年级上册·课文1', unitEn: 'Grade 1 Vol.1 · Text 1' },
    // 一年级上册 - 课文2（小小的船）
    { word: '月', pinyin: 'yue', hint: '月亮', char: 'y', unit: '一年级上册·课文2', unitEn: 'Grade 1 Vol.1 · Text 2' },
    { word: '儿', pinyin: 'er', hint: '儿童', char: 'e', unit: '一年级上册·课文2', unitEn: 'Grade 1 Vol.1 · Text 2' },
    { word: '头', pinyin: 'tou', hint: '头发', char: 't', unit: '一年级上册·课文2', unitEn: 'Grade 1 Vol.1 · Text 2' },
    { word: '里', pinyin: 'li', hint: '里面', char: 'l', unit: '一年级上册·课文2', unitEn: 'Grade 1 Vol.1 · Text 2' },
    // 一年级上册 - 课文3（江南）
    { word: '江', pinyin: 'jiang', hint: '长江', char: 'j', unit: '一年级上册·课文3', unitEn: 'Grade 1 Vol.1 · Text 3' },
    { word: '南', pinyin: 'nan', hint: '南方', char: 'n', unit: '一年级上册·课文3', unitEn: 'Grade 1 Vol.1 · Text 3' },
    { word: '可', pinyin: 'ke', hint: '可爱', char: 'k', unit: '一年级上册·课文3', unitEn: 'Grade 1 Vol.1 · Text 3' },
    { word: '鱼', pinyin: 'yu', hint: '小鱼', char: 'y', unit: '一年级上册·课文3', unitEn: 'Grade 1 Vol.1 · Text 3' },
    { word: '东', pinyin: 'dong', hint: '东方', char: 'd', unit: '一年级上册·课文3', unitEn: 'Grade 1 Vol.1 · Text 3' },
    { word: '西', pinyin: 'xi', hint: '西瓜', char: 'x', unit: '一年级上册·课文3', unitEn: 'Grade 1 Vol.1 · Text 3' },
    // 一年级下册 - 识字1
    { word: '春', pinyin: 'chun', hint: '春天', char: 'c', unit: '一年级下册·识字1', unitEn: 'Grade 1 Vol.2 · Unit 1' },
    { word: '风', pinyin: 'feng', hint: '大风', char: 'f', unit: '一年级下册·识字1', unitEn: 'Grade 1 Vol.2 · Unit 1' },
    { word: '花', pinyin: 'hua', hint: '花朵', char: 'h', unit: '一年级下册·识字1', unitEn: 'Grade 1 Vol.2 · Unit 1' },
    { word: '草', pinyin: 'cao', hint: '小草', char: 'c', unit: '一年级下册·识字1', unitEn: 'Grade 1 Vol.2 · Unit 1' },
    // 一年级下册 - 课文1
    { word: '太', pinyin: 'tai', hint: '太阳', char: 't', unit: '一年级下册·课文1', unitEn: 'Grade 1 Vol.2 · Text 1' },
    { word: '阳', pinyin: 'yang', hint: '阳光', char: 'y', unit: '一年级下册·课文1', unitEn: 'Grade 1 Vol.2 · Text 1' },
    { word: '校', pinyin: 'xiao', hint: '学校', char: 'x', unit: '一年级下册·课文1', unitEn: 'Grade 1 Vol.2 · Text 1' },
    { word: '师', pinyin: 'shi', hint: '老师', char: 's', unit: '一年级下册·课文1', unitEn: 'Grade 1 Vol.2 · Text 1' },
    { word: '同', pinyin: 'tong', hint: '同学', char: 't', unit: '一年级下册·课文1', unitEn: 'Grade 1 Vol.2 · Text 1' },
    { word: '学', pinyin: 'xue', hint: '学生', char: 'x', unit: '一年级下册·课文1', unitEn: 'Grade 1 Vol.2 · Text 1' },
    // 一年级下册 - 课文2
    { word: '爸', pinyin: 'ba', hint: '爸爸', char: 'b', unit: '一年级下册·课文2', unitEn: 'Grade 1 Vol.2 · Text 2' },
    { word: '妈', pinyin: 'ma', hint: '妈妈', char: 'm', unit: '一年级下册·课文2', unitEn: 'Grade 1 Vol.2 · Text 2' },
    { word: '哥', pinyin: 'ge', hint: '哥哥', char: 'g', unit: '一年级下册·课文2', unitEn: 'Grade 1 Vol.2 · Text 2' },
    { word: '弟', pinyin: 'di', hint: '弟弟', char: 'd', unit: '一年级下册·课文2', unitEn: 'Grade 1 Vol.2 · Text 2' },
    { word: '姐', pinyin: 'jie', hint: '姐姐', char: 'j', unit: '一年级下册·课文2', unitEn: 'Grade 1 Vol.2 · Text 2' },
    { word: '妹', pinyin: 'mei', hint: '妹妹', char: 'm', unit: '一年级下册·课文2', unitEn: 'Grade 1 Vol.2 · Text 2' },
    // 一年级下册 - 课文3
    { word: '国', pinyin: 'guo', hint: '中国', char: 'g', unit: '一年级下册·课文3', unitEn: 'Grade 1 Vol.2 · Text 3' },
    { word: '中', pinyin: 'zhong', hint: '中间', char: 'z', unit: '一年级下册·课文3', unitEn: 'Grade 1 Vol.2 · Text 3' },
    { word: '红', pinyin: 'hong', hint: '红色', char: 'h', unit: '一年级下册·课文3', unitEn: 'Grade 1 Vol.2 · Text 3' },
    { word: '旗', pinyin: 'qi', hint: '国旗', char: 'q', unit: '一年级下册·课文3', unitEn: 'Grade 1 Vol.2 · Text 3' },
    { word: '星', pinyin: 'xing', hint: '星星', char: 'x', unit: '一年级下册·课文3', unitEn: 'Grade 1 Vol.2 · Text 3' },
    { word: '光', pinyin: 'guang', hint: '光明', char: 'g', unit: '一年级下册·课文3', unitEn: 'Grade 1 Vol.2 · Text 3' },
];

// 英语数据按人教版一年级教材Unit顺序排列
const ENGLISH_DATA = [
    // Unit 1 Hello!
    { word: 'hello', meaning: '你好', emoji: '👋', unit: 'Unit 1 Hello!', unitEn: 'Unit 1' },
    { word: 'hi', meaning: '嗨', emoji: '🖐️', unit: 'Unit 1 Hello!', unitEn: 'Unit 1' },
    { word: 'cat', meaning: '猫', emoji: '🐱', unit: 'Unit 1 Hello!', unitEn: 'Unit 1' },
    { word: 'dog', meaning: '狗', emoji: '🐶', unit: 'Unit 1 Hello!', unitEn: 'Unit 1' },
    // Unit 2 Numbers
    { word: 'one', meaning: '一', emoji: '1️⃣', unit: 'Unit 2 Numbers', unitEn: 'Unit 2' },
    { word: 'two', meaning: '二', emoji: '2️⃣', unit: 'Unit 2 Numbers', unitEn: 'Unit 2' },
    { word: 'three', meaning: '三', emoji: '3️⃣', unit: 'Unit 2 Numbers', unitEn: 'Unit 2' },
    { word: 'four', meaning: '四', emoji: '4️⃣', unit: 'Unit 2 Numbers', unitEn: 'Unit 2' },
    { word: 'five', meaning: '五', emoji: '5️⃣', unit: 'Unit 2 Numbers', unitEn: 'Unit 2' },
    // Unit 3 Colors
    { word: 'red', meaning: '红色', emoji: '🔴', unit: 'Unit 3 Colors', unitEn: 'Unit 3' },
    { word: 'blue', meaning: '蓝色', emoji: '🔵', unit: 'Unit 3 Colors', unitEn: 'Unit 3' },
    { word: 'yellow', meaning: '黄色', emoji: '🟡', unit: 'Unit 3 Colors', unitEn: 'Unit 3' },
    { word: 'green', meaning: '绿色', emoji: '🟢', unit: 'Unit 3 Colors', unitEn: 'Unit 3' },
    // Unit 4 Animals
    { word: 'pig', meaning: '猪', emoji: '🐷', unit: 'Unit 4 Animals', unitEn: 'Unit 4' },
    { word: 'cow', meaning: '牛', emoji: '🐄', unit: 'Unit 4 Animals', unitEn: 'Unit 4' },
    { word: 'duck', meaning: '鸭子', emoji: '🦆', unit: 'Unit 4 Animals', unitEn: 'Unit 4' },
    { word: 'hen', meaning: '母鸡', emoji: '🐔', unit: 'Unit 4 Animals', unitEn: 'Unit 4' },
    { word: 'bird', meaning: '鸟', emoji: '🐦', unit: 'Unit 4 Animals', unitEn: 'Unit 4' },
    { word: 'fish', meaning: '鱼', emoji: '🐟', unit: 'Unit 4 Animals', unitEn: 'Unit 4' },
    // Unit 5 Food
    { word: 'apple', meaning: '苹果', emoji: '🍎', unit: 'Unit 5 Food', unitEn: 'Unit 5' },
    { word: 'cake', meaning: '蛋糕', emoji: '🍰', unit: 'Unit 5 Food', unitEn: 'Unit 5' },
    { word: 'milk', meaning: '牛奶', emoji: '🥛', unit: 'Unit 5 Food', unitEn: 'Unit 5' },
    { word: 'rice', meaning: '米饭', emoji: '🍚', unit: 'Unit 5 Food', unitEn: 'Unit 5' },
    { word: 'egg', meaning: '鸡蛋', emoji: '🥚', unit: 'Unit 5 Food', unitEn: 'Unit 5' },
    // Unit 6 School
    { word: 'book', meaning: '书', emoji: '📖', unit: 'Unit 6 School', unitEn: 'Unit 6' },
    { word: 'pen', meaning: '钢笔', emoji: '🖊️', unit: 'Unit 6 School', unitEn: 'Unit 6' },
    { word: 'bag', meaning: '书包', emoji: '🎒', unit: 'Unit 6 School', unitEn: 'Unit 6' },
    { word: 'desk', meaning: '书桌', emoji: '🪑', unit: 'Unit 6 School', unitEn: 'Unit 6' },
    // Unit 7 Nature
    { word: 'sun', meaning: '太阳', emoji: '☀️', unit: 'Unit 7 Nature', unitEn: 'Unit 7' },
    { word: 'moon', meaning: '月亮', emoji: '🌙', unit: 'Unit 7 Nature', unitEn: 'Unit 7' },
    { word: 'tree', meaning: '树', emoji: '🌳', unit: 'Unit 7 Nature', unitEn: 'Unit 7' },
    { word: 'flower', meaning: '花', emoji: '🌸', unit: 'Unit 7 Nature', unitEn: 'Unit 7' },
    { word: 'water', meaning: '水', emoji: '💧', unit: 'Unit 7 Nature', unitEn: 'Unit 7' },
    // Unit 8 Play
    { word: 'ball', meaning: '球', emoji: '⚽', unit: 'Unit 8 Play', unitEn: 'Unit 8' },
    { word: 'kite', meaning: '风筝', emoji: '🪁', unit: 'Unit 8 Play', unitEn: 'Unit 8' },
    { word: 'doll', meaning: '玩偶', emoji: '🎎', unit: 'Unit 8 Play', unitEn: 'Unit 8' },
    { word: 'car', meaning: '汽车', emoji: '🚗', unit: 'Unit 8 Play', unitEn: 'Unit 8' },
    { word: 'bus', meaning: '公交车', emoji: '🚌', unit: 'Unit 8 Play', unitEn: 'Unit 8' },
];

// ===== 键盘布局 =====
const KEYBOARD_LAYOUT = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

// ===== 游戏状态 =====
let gameState = {
    mode: 'pinyin',       // 'pinyin' 或 'english'
    order: 'sequential',  // 'sequential' 顺序 / 'shuffle' 混杂
    level: 1,
    score: 0,
    combo: 0,
    correctCount: 0,
    wrongCount: 0,
    currentIndex: 0,
    currentInput: '',
    isProcessing: false,
    totalWords: 10,
    currentWord: null,
    usedWords: [],
    keyElements: {},
};

// ===== 音效系统（Web Audio API 合成） =====
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        try {
            audioCtx = new AudioContext();
        } catch (e) {
            console.warn('Audio not supported');
        }
    }
    return audioCtx;
}

// 普通按键音
function playKeySound(type = 'normal') {
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        const now = ctx.currentTime;
        if (type === 'correct') {
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, now); // C5
            oscillator.frequency.exponentialRampToValueAtTime(783.99, now + 0.08); // G5
            gainNode.gain.setValueAtTime(0.12, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            oscillator.start(now);
            oscillator.stop(now + 0.2);
        } else if (type === 'wrong') {
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(180, now);
            oscillator.frequency.exponentialRampToValueAtTime(90, now + 0.15);
            gainNode.gain.setValueAtTime(0.08, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
            oscillator.start(now);
            oscillator.stop(now + 0.15);
        } else {
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(400 + Math.random() * 200, now);
            gainNode.gain.setValueAtTime(0.04, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            oscillator.start(now);
            oscillator.stop(now + 0.08);
        }
    } catch (e) {}
}

// 过关音效
function playCompleteSound() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C E G C
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            const start = ctx.currentTime + i * 0.12;
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0.12, start);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.25);
            osc.start(start);
            osc.stop(start + 0.25);
        });
    } catch (e) {}
}

// Cheer 成功语音 - 合成欢呼声
function playCheerSound() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        // 模拟人群的欢呼声 - 使用噪声 + 多个音高
        const bufferSize = ctx.sampleRate * 1.5; // 1.5秒
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        // 生成类似人群欢呼的噪声
        for (let i = 0; i < bufferSize; i++) {
            const t = i / ctx.sampleRate;
            const envelope = Math.sin(Math.PI * t / 1.5) * Math.exp(-t * 0.3);
            data[i] = (Math.random() * 2 - 1) * 0.3 * envelope;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        // 带通滤波模拟人声频段
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.5);
        filter.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 1.5);
        filter.Q.value = 0.7;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0.0, ctx.currentTime + 1.5);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start(ctx.currentTime);
        noise.stop(ctx.currentTime + 1.5);

        // 叠加几个欢快的上行音阶
        const cheerNotes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
        cheerNotes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            const start = ctx.currentTime + i * 0.1;
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0.0, start);
            gain.gain.linearRampToValueAtTime(0.1, start + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);
            osc.start(start);
            osc.stop(start + 0.3);
        });

    } catch (e) {}
}

// Sigh 失败语音 - 合成叹气声
function playSighSound() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        // 模拟叹气声 - 低频噪声下降 + 气声
        const duration = 1.0;
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            const t = i / ctx.sampleRate;
            // 叹气包络：开始时较强，然后渐渐消失，中间有波动
            const envelope = Math.exp(-t * 2.5) * (1 + 0.3 * Math.sin(t * 8));
            // 低频为主
            data[i] = (Math.random() * 2 - 1) * 0.4 * envelope;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        // 低通滤波 - 闷闷的叹气声
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + duration);
        filter.Q.value = 0.5;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0.0, ctx.currentTime + duration);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start(ctx.currentTime);
        noise.stop(ctx.currentTime + duration);

        // 叠加一个下行的音调（"唉~"）
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.connect(oscGain);
        oscGain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + duration);
        oscGain.gain.setValueAtTime(0.0, ctx.currentTime);
        oscGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.1);
        oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);

    } catch (e) {}
}

// ===== 键盘渲染 =====
function renderKeyboard() {
    const keyboardEl = document.getElementById('keyboard');
    keyboardEl.innerHTML = '';
    gameState.keyElements = {};

    KEYBOARD_LAYOUT.forEach(row => {
        const rowEl = document.createElement('div');
        rowEl.className = 'keyboard-row';
        row.forEach(key => {
            const keyEl = createKey(key);
            rowEl.appendChild(keyEl);
        });
        keyboardEl.appendChild(rowEl);
    });
}

function createKey(key) {
    const keyEl = document.createElement('div');
    keyEl.className = 'key';
    keyEl.textContent = key;
    keyEl.dataset.key = key;
    gameState.keyElements[key] = keyEl;
    return keyEl;
}

function lightUpKey(key, type = 'normal') {
    const keyEl = gameState.keyElements[key];
    if (!keyEl) return;

    keyEl.classList.remove('active', 'active-correct', 'active-wrong');
    void keyEl.offsetWidth; // 强制重绘

    if (type === 'correct') {
        keyEl.classList.add('active-correct');
    } else if (type === 'wrong') {
        keyEl.classList.add('active-wrong');
    } else {
        keyEl.classList.add('active');
    }

    setTimeout(() => {
        keyEl.classList.remove('active', 'active-correct', 'active-wrong');
    }, 150);
}

// ===== 图片动画系统 =====
function playImageEnterAnim() {
    const img = document.getElementById('wordImage');
    const animLayer = document.getElementById('animLayer');
    if (!img) return;

    // 清除之前的动画
    img.className = '';
    animLayer.innerHTML = '';

    // 强制重绘
    void img.offsetWidth;

    // 播放进入动画
    img.classList.add('bounce-in');

    // 进入动画结束后，添加空闲漂浮
    setTimeout(() => {
        img.classList.remove('bounce-in');
        img.classList.add('idle-float');
    }, 600);
}

function playSuccessAnim() {
    const img = document.getElementById('wordImage');
    const animLayer = document.getElementById('animLayer');
    if (!img) return;

    // 停止空闲动画
    img.classList.remove('idle-float');
    void img.offsetWidth;

    // 成功弹跳
    img.classList.add('success-anim');

    // 彩虹光环
    const ring = document.createElement('div');
    ring.className = 'success-ring';
    animLayer.appendChild(ring);
    void ring.offsetWidth;
    ring.classList.add('active');

    // 粒子效果
    const particles = ['⭐', '🎉', '✨', '💫', '🌟', '💖', '🎊', '⚡'];
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        const angle = (i / 8) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.fontSize = (14 + Math.random() * 10) + 'px';
        animLayer.appendChild(particle);
    }

    // 清理
    setTimeout(() => {
        img.classList.remove('success-anim');
        img.classList.add('idle-float');
        ring.remove();
        animLayer.querySelectorAll('.particle').forEach(p => p.remove());
    }, 1000);
}

function playFailAnim() {
    const img = document.getElementById('wordImage');
    if (!img) return;

    img.classList.remove('idle-float');
    void img.offsetWidth;
    img.classList.add('fail-anim');

    setTimeout(() => {
        img.classList.remove('fail-anim');
        img.classList.add('idle-float');
    }, 600);
}

// ===== 游戏逻辑 =====

function getWordsForLevel() {
    const data = gameState.mode === 'pinyin' ? PINYIN_DATA : ENGLISH_DATA;

    // 每关 totalWords 个词，按关卡偏移切片
    // 第 N 关取索引 [ (N-1)*totalWords , N*totalWords )
    const startIdx = (gameState.level - 1) * gameState.totalWords;
    let pool = data.slice(startIdx, startIdx + gameState.totalWords);

    // 如果当前关卡数据用完了（pool 为空或不足），从头循环取
    if (pool.length === 0) {
        pool = data.slice(0, gameState.totalWords);
    }

    // 顺序模式：保持教材原顺序
    // 混杂模式：打乱顺序
    if (gameState.order === 'shuffle') {
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }
    }
    // sequential 模式：保持原始顺序（即教材单元顺序）

    return pool.slice(0, gameState.totalWords);
}

function startGame() {
    gameState.currentIndex = 0;
    gameState.currentInput = '';
    gameState.usedWords = getWordsForLevel();
    gameState.isProcessing = false;

    document.getElementById('score').textContent = gameState.score;
    document.getElementById('combo').textContent = gameState.combo;
    document.getElementById('correct').textContent = gameState.correctCount;
    document.getElementById('wrong').textContent = gameState.wrongCount;
    document.getElementById('levelBadge').textContent = `第 ${gameState.level} 关`;

    document.getElementById('modalOverlay').classList.add('hidden');
    loadNextWord();
}

function loadNextWord() {
    if (gameState.currentIndex >= gameState.totalWords || gameState.currentIndex >= gameState.usedWords.length) {
        completeLevel();
        return;
    }

    gameState.currentWord = gameState.usedWords[gameState.currentIndex];
    gameState.currentInput = '';
    gameState.isProcessing = false;

    // 更新进度
    const progress = (gameState.currentIndex / gameState.totalWords) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `${gameState.currentIndex} / ${gameState.totalWords}`;

    // 更新单元/Unit 标签
    updateUnitBadge();

    // 显示内容
    if (gameState.mode === 'pinyin') {
        showPinyinWord();
    } else {
        showEnglishWord();
    }
}

function updateUnitBadge() {
    const word = gameState.currentWord;
    const badge = document.getElementById('unitBadge');
    if (word && word.unit) {
        badge.innerHTML = `<span>📚 ${word.unit}</span>`;
    } else {
        badge.innerHTML = '';
    }
}

function showPinyinWord() {
    const word = gameState.currentWord;
    document.getElementById('wordShow').textContent = word.word;
    document.getElementById('hintText').textContent = word.hint ? `📝 ${word.hint}` : '';
    document.getElementById('pinyinDisplay').textContent = '';
}

function showEnglishWord() {
    const word = gameState.currentWord;
    document.getElementById('wordMeaning').textContent = word.meaning;
    document.getElementById('wordImage').textContent = word.emoji;
    document.getElementById('wordDisplay').textContent = '';
    // 播放图片进入动画
    playImageEnterAnim();
}

function updateDisplay() {
    const target = gameState.currentWord.pinyin || gameState.currentWord.word;
    const input = gameState.currentInput;

    let displayHTML = '';
    for (let i = 0; i < target.length; i++) {
        if (i < input.length) {
            if (input[i] === target[i]) {
                displayHTML += `<span class="correct-char">${target[i]}</span>`;
            } else {
                displayHTML += `<span class="wrong-char">${target[i]}</span>`;
            }
        } else {
            displayHTML += `<span class="pending-char">${target[i]}</span>`;
        }
    }

    if (gameState.mode === 'pinyin') {
        document.getElementById('pinyinDisplay').innerHTML = displayHTML;
    } else {
        document.getElementById('wordDisplay').innerHTML = displayHTML;
    }
}

function handleInput(key) {
    if (gameState.isProcessing) return;

    const target = gameState.currentWord.pinyin || gameState.currentWord.word;

    if (gameState.currentInput.length < target.length) {
        const expectedChar = target[gameState.currentInput.length];

        if (key === expectedChar) {
            // 正确输入
            gameState.currentInput += key;
            lightUpKey(key, 'correct');
            playKeySound('correct');
            updateDisplay();

            // 检查是否完成当前单词
            if (gameState.currentInput === target) {
                gameState.isProcessing = true;
                gameState.combo++;
                gameState.correctCount++;
                gameState.score += 10 * gameState.combo;

                updateScores();
                showFeedback('✅', 'correct');

                // 英语模式播放成功动画
                if (gameState.mode === 'english') {
                    playSuccessAnim();
                }
                // 播放cheer语音
                playCheerSound();

                setTimeout(() => {
                    gameState.currentIndex++;
                    loadNextWord();
                }, 1000);
            }
        } else {
            // 错误输入
            lightUpKey(key, 'wrong');
            playKeySound('wrong');
            gameState.combo = 0;
            gameState.wrongCount++;
            updateScores();
            showFeedback('❌', 'wrong');

            // 英语模式播放失败动画
            if (gameState.mode === 'english') {
                playFailAnim();
            }
            // 播放叹气语音
            playSighSound();
        }
    }
}

function updateScores() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('combo').textContent = gameState.combo;
    document.getElementById('correct').textContent = gameState.correctCount;
    document.getElementById('wrong').textContent = gameState.wrongCount;

    // 连击动画
    if (gameState.combo > 0 && gameState.combo % 5 === 0) {
        const comboEl = document.getElementById('combo');
        comboEl.style.color = '#f59e0b';
        comboEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            comboEl.style.color = '';
            comboEl.style.transform = '';
        }, 300);
    }
}

function showFeedback(emoji, type) {
    const overlay = document.getElementById('feedbackOverlay');
    overlay.textContent = emoji;
    overlay.className = 'feedback-overlay show';

    setTimeout(() => {
        overlay.classList.remove('show');
    }, 500);
}

function completeLevel() {
    playCompleteSound();

    const accuracy = gameState.correctCount > 0
        ? Math.round((gameState.correctCount / (gameState.correctCount + gameState.wrongCount)) * 100)
        : 0;

    document.getElementById('progressFill').style.width = '100%';
    document.getElementById('progressText').textContent = `${gameState.totalWords} / ${gameState.totalWords}`;

    // 显示结算弹窗
    document.getElementById('modalIcon').textContent = accuracy >= 80 ? '🏆' : accuracy >= 60 ? '🌟' : '💪';
    document.getElementById('modalTitle').textContent = accuracy >= 80 ? '太棒了！' : accuracy >= 60 ? '不错哦！' : '继续加油！';

    document.getElementById('modalStats').innerHTML = `
        <div class="modal-stat-item">
            <div class="modal-stat-value">${gameState.score}</div>
            <div class="modal-stat-label">总分</div>
        </div>
        <div class="modal-stat-item">
            <div class="modal-stat-value">${accuracy}%</div>
            <div class="modal-stat-label">正确率</div>
        </div>
        <div class="modal-stat-item">
            <div class="modal-stat-value">${gameState.correctCount}</div>
            <div class="modal-stat-label">正确数</div>
        </div>
        <div class="modal-stat-item">
            <div class="modal-stat-value">${gameState.wrongCount}</div>
            <div class="modal-stat-label">错误数</div>
        </div>
    `;

    document.getElementById('modalOverlay').classList.remove('hidden');
}

// ===== 事件监听 =====

// 物理键盘输入
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'CapsLock') return;
    if (e.key === 'Enter' || e.key === 'Tab' || e.key === 'Escape') return;
    if (e.key === 'Backspace') return;

    e.preventDefault();

    const key = e.key.toLowerCase();
    if (key >= 'a' && key <= 'z') {
        handleInput(key);
    }
});

// 学科模式切换
document.querySelectorAll('.mode-btn[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn[data-mode]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        gameState.mode = btn.dataset.mode;
        gameState.level = 1;
        gameState.score = 0;
        gameState.combo = 0;
        gameState.correctCount = 0;
        gameState.wrongCount = 0;

        if (gameState.mode === 'pinyin') {
            document.getElementById('pinyinMode').classList.remove('hidden');
            document.getElementById('englishMode').classList.add('hidden');
        } else {
            document.getElementById('pinyinMode').classList.add('hidden');
            document.getElementById('englishMode').classList.remove('hidden');
        }

        renderKeyboard();
        startGame();
        playKeySound('normal');
    });
});

// 顺序/混杂模式切换
document.querySelectorAll('.mode-btn[data-order]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn[data-order]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        gameState.order = btn.dataset.order;
        gameState.level = 1;
        gameState.score = 0;
        gameState.combo = 0;
        gameState.correctCount = 0;
        gameState.wrongCount = 0;

        renderKeyboard();
        startGame();
        playKeySound('normal');
    });
});

// 虚拟键盘点击
document.getElementById('keyboard').addEventListener('click', (e) => {
    const keyEl = e.target.closest('.key');
    if (!keyEl) return;

    const key = keyEl.dataset.key;
    if (key >= 'a' && key <= 'z') {
        handleInput(key);
    }
});

// 下一关
document.getElementById('nextLevelBtn').addEventListener('click', () => {
    gameState.level++;
    console.info(`下一关：${gameState.level}`);
    gameState.combo = 0;
    gameState.correctCount = 0;
    gameState.wrongCount = 0;
    startGame();
});

// 再玩一次
document.getElementById('retryBtn').addEventListener('click', () => {
    gameState.combo = 0;
    gameState.correctCount = 0;
    gameState.wrongCount = 0;
    startGame();
});

// ===== 初始化 =====
function init() {
    renderKeyboard();
    startGame();
}

init();
