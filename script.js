(function () {
    const PERSONAL = {
        birthday: { month: 3, day: 2 },
        anniversary: { month: 5, day: 31 },
        hiddenPhrase: 'Hab dich lieb',
        hiddenPhraseBirthday: 'Hab dich lieb. Heute besonders.'
    };

    const moods = [
        'Soft', 'Electric', 'Tender', 'Wild', 'Lucid', 'Glowing', 'Tidal',
        'Quiet', 'Radiant', 'Open', 'Floating', 'Bright', 'Magnetic',
        'Dreamy', 'Sparkling', 'Anchored', 'Curious', 'Velvet', 'Sun-kissed',
        'Moonlit', 'Whimsical', 'Honeyed', 'Crystalline', 'Daring', 'Soaring'
    ];

    const luckyColors = [
        { name: 'Seafoam',     hex: '#a8e6cf' },
        { name: 'Lavender',    hex: '#c5a3f7' },
        { name: 'Pearl',       hex: '#f5f0e6' },
        { name: 'Coral',       hex: '#ff9aa2' },
        { name: 'Sky',         hex: '#a3d8f5' },
        { name: 'Rose',        hex: '#f7c8d4' },
        { name: 'Mint',        hex: '#b8e8c9' },
        { name: 'Gold',        hex: '#f7c948' },
        { name: 'Amethyst',    hex: '#9b7bb8' },
        { name: 'Aquamarine',  hex: '#7ecbf5' },
        { name: 'Peach',       hex: '#ffb997' },
        { name: 'Indigo',      hex: '#7c4dbd' }
    ];

    const luckyElements = ['Water', 'Fire', 'Earth', 'Air', 'Ether'];

    const categories = [
        { name: 'Love', emoji: '❤️', key: 'love', accent: '#f7a3b8', accentEnd: '#f5c3d7' },
        { name: 'Health', emoji: '🌿', key: 'health', accent: '#7dd4a0', accentEnd: '#b8e8c9' },
        { name: 'Spiritual', emoji: '🔮', key: 'spiritual', accent: '#b8a3f7', accentEnd: '#d4c3ff' },
        { name: 'Career', emoji: '⚡', key: 'career', accent: '#f7c948', accentEnd: '#fde68a' },
        { name: 'Creativity', emoji: '🎨', key: 'creativity', accent: '#7ecbf5', accentEnd: '#bde4fa' }
    ];

    const flavorTexts = {
        love: [
            'tender', 'magnetic', 'woven', 'honeyed', 'glowing',
            'braided', 'unguarded', 'nested', 'liquid', 'folded-in',
            'known', 'gathered', 'chosen', 'ripening', 'dear',
            'threaded', 'soft-bodied', 'near', 'spilled', 'kindled',
            'aglow', 'melded', 'cradled', 'found', 'warmed-through'
        ],
        health: [
            'rooted', 'tidal', 'humming', 'supple', 'alight',
            'spring-fed', 'buoyant', 'silver', 'elastic', 'rinsed',
            'whole', 'limber', 'bright-bodied', 'restored', 'fluent',
            'light-footed', 'clear', 'balanced', 'kindled', 'sea-strong',
            'lifted', 'flowing', 'woken', 'even-pulsed', 'glassy'
        ],
        spiritual: [
            'porous', 'listening', 'thinning', 'attuned', 'liminal',
            'cracked-open', 'transparent', 'hollow', 'receptive', 'bell-like',
            'knowing', 'sea-glass', 'moonlit', 'under-current', 'fluent',
            'threaded', 'aware', 'soft-focused', 'dreaming', 'attuning',
            'lit-from-within', 'summoned', 'called', 'drifting', 'awake'
        ],
        career: [
            'precise', 'taut', 'sharpened', 'aligned', 'in-flow',
            'striking', 'composed', 'cutting', 'decisive', 'forging',
            'iron-bright', 'pointed', 'in-stride', 'tactical', 'rising',
            'focused', 'magnetic', 'building', 'accelerating', 'lucid',
            'certain', 'paced', 'calibrated', 'edge-on', 'deliberate'
        ],
        creativity: [
            'spilling', 'saturated', 'teeming', 'electric', 'generative',
            'molten', 'flooded', 'unspooling', 'summoning', 'patterning',
            'prolific', 'iridescent', 'spawning', 'pollinating', 'weaving',
            'charged', 'fertile', 'volcanic', 'ripe', 'abundant',
            'dripping', 'kaleidoscopic', 'sparking', 'painterly', 'percolating'
        ]
    };

    const quotes = [
        { text: "I must be a mermaid. I have no fear of depths and a great fear of shallow living.", author: "Anaïs Nin" },
        { text: "I am my own muse. I am the subject I know best.", author: "Frida Kahlo" },
        { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
        { text: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.", author: "Sylvia Plath" },
        { text: "I have sea foam in my veins, I understand the language of waves.", author: "Jean Cocteau" },
        { text: "One must still have chaos in oneself to be able to give birth to a dancing star.", author: "Friedrich Nietzsche" },
        { text: "I dream my painting and I paint my dream.", author: "Vincent van Gogh" },
        { text: "The earth has music for those who listen.", author: "William Shakespeare" },
        { text: "I would always rather be happy than dignified.", author: "Charlotte Brontë" },
        { text: "There is no gate, no lock, no bolt that you can set upon the freedom of my mind.", author: "Virginia Woolf" },
        { text: "I have been bent and broken, but I hope into a better shape.", author: "Charles Dickens" },
        { text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde" },
        { text: "The desire to create is one of the deepest yearnings of the human soul.", author: "Dieter F. Uchtdorf" },
        { text: "I put my heart and my soul into my work, and have lost my mind in the process.", author: "Vincent van Gogh" },
        { text: "In the depth of winter, I finally learned that within me there lay an invincible summer.", author: "Albert Camus" },
        { text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel" },
        { text: "I restore myself when I'm alone.", author: "Marilyn Monroe" },
        { text: "Music is the shorthand of emotion.", author: "Leo Tolstoy" },
        { text: "An artist is not paid for his labor but for his vision.", author: "James McNeill Whistler" },
        { text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott" },
        { text: "The world breaks everyone, and afterward, many are strong at the broken places.", author: "Ernest Hemingway" },
        { text: "Art is not what you see, but what you make others see.", author: "Edgar Degas" },
        { text: "I dwell in possibility.", author: "Emily Dickinson" },
        { text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Søren Kierkegaard" },
        { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
        { text: "I am seeking. I am striving. I am in it with all my heart.", author: "Vincent van Gogh" },
        { text: "The only journey is the one within.", author: "Rainer Maria Rilke" },
        { text: "A woman must have money and a room of her own if she is to write fiction.", author: "Virginia Woolf" },
        { text: "You must do the thing you think you cannot do.", author: "Eleanor Roosevelt" },
        { text: "Beauty is not in the face; beauty is a light in the heart.", author: "Kahlil Gibran" }
    ];

    function seededRandom(seed) {
        let s = seed;
        return function () {
            s = (s * 1664525 + 1013904223) & 0xffffffff;
            return (s >>> 0) / 0xffffffff;
        };
    }

    function hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash);
    }

    function getDateString() {
        const now = new Date();
        return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    }

    function getFormattedDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString('en-US', options);
    }

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning, Rong';
        if (hour < 17) return 'Good afternoon, Rong';
        if (hour < 21) return 'Good evening, Rong';
        return 'Sweet dreams, Rong';
    }

    function generateScores() {
        const dateStr = getDateString();
        const scores = [];
        const allHundred = isBirthday();

        categories.forEach((cat) => {
            const seed = hashString(dateStr + cat.key);
            const rng = seededRandom(seed);
            const score = allHundred ? 100 : Math.floor(rng() * 25) + 75;
            const flavorIndex = Math.floor(rng() * flavorTexts[cat.key].length);
            scores.push({
                ...cat,
                score,
                flavor: flavorTexts[cat.key][flavorIndex]
            });
        });

        if (isAnniversary()) {
            scores.unshift({
                name: 'Us',
                emoji: '💕',
                key: 'us',
                accent: '#f7a3b8',
                accentEnd: '#f5c3d7',
                score: 100,
                flavor: 'Today the universe agrees with us.'
            });
        }

        return scores;
    }

    function getDailyQuote() {
        const dateStr = getDateString();
        const seed = hashString(dateStr + 'quote');
        const rng = seededRandom(seed);
        const index = Math.floor(rng() * quotes.length);
        return quotes[index];
    }

    function getDailyMood() {
        const seed = hashString(getDateString() + 'mood');
        const rng = seededRandom(seed);
        return moods[Math.floor(rng() * moods.length)];
    }

    function getLuckyTrio() {
        const seed = hashString(getDateString() + 'lucky');
        const rng = seededRandom(seed);
        const number = Math.floor(rng() * 99) + 1;
        const color = luckyColors[Math.floor(rng() * luckyColors.length)];
        const element = luckyElements[Math.floor(rng() * luckyElements.length)];
        return { number, color, element };
    }

    function daysBetween(a, b) {
        const ms = 1000 * 60 * 60 * 24;
        const da = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        const db = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.round((db - da) / ms);
    }

    function updateStreak() {
        const STORAGE_KEY = 'daily-stars:streak';
        const today = new Date();
        const todayStr = getDateString();
        let count = 1;
        let resetMessage = null;

        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const saved = JSON.parse(raw);
                const last = new Date(saved.lastDate);
                if (!isNaN(last)) {
                    const gap = daysBetween(last, today);
                    if (gap === 0) {
                        count = saved.count || 1;
                    } else if (gap === 1) {
                        count = (saved.count || 0) + 1;
                    } else if (gap > 1) {
                        count = 1;
                        resetMessage = 'the tide always returns';
                    }
                }
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ lastDate: todayStr, count }));
        } catch (e) {
            // localStorage blocked — fall through with count = 1
        }

        return { count, resetMessage };
    }

    function renderStreak() {
        const { count, resetMessage } = updateStreak();
        const chip = document.getElementById('streak-chip');
        if (!chip) return;
        chip.innerHTML = `<span class="streak-flame">🔥</span><span class="streak-count">${count}</span><span class="streak-label">day${count === 1 ? '' : 's'}</span>`;
        chip.classList.add('streak-chip--visible');
        if (resetMessage) {
            const note = document.getElementById('streak-note');
            if (note) {
                note.textContent = resetMessage;
                note.classList.add('streak-note--visible');
                setTimeout(() => note.classList.remove('streak-note--visible'), 5000);
            }
        }
    }

    function isBirthday() {
        const now = new Date();
        return now.getMonth() + 1 === PERSONAL.birthday.month && now.getDate() === PERSONAL.birthday.day;
    }

    function isAnniversary() {
        const now = new Date();
        return now.getMonth() + 1 === PERSONAL.anniversary.month && now.getDate() === PERSONAL.anniversary.day;
    }

    function spawnSwimFish(originRect) {
        const fish = document.createElement('span');
        fish.className = 'swim-fish';
        fish.textContent = Math.random() < 0.5 ? '🐟' : '🐠';
        const startX = originRect ? originRect.left + originRect.width / 2 : window.innerWidth / 2;
        const startY = originRect ? originRect.top + originRect.height / 2 : 100;
        const driftY = (Math.random() - 0.5) * 120;
        const direction = Math.random() < 0.5 ? -1 : 1;
        const duration = 2400 + Math.random() * 1200;
        fish.style.left = startX + 'px';
        fish.style.top = startY + 'px';
        fish.style.setProperty('--swim-x', `${direction * (window.innerWidth * 0.7 + 100)}px`);
        fish.style.setProperty('--swim-y', `${driftY}px`);
        fish.style.setProperty('--swim-flip', direction === -1 ? '-1' : '1');
        fish.style.animationDuration = duration + 'ms';
        document.body.appendChild(fish);
        setTimeout(() => fish.remove(), duration + 100);
    }

    function showHiddenPhrase() {
        const el = document.getElementById('hidden-phrase');
        if (!el) return;
        el.textContent = isBirthday() ? PERSONAL.hiddenPhraseBirthday : PERSONAL.hiddenPhrase;
        el.classList.add('hidden-phrase--visible');
        document.body.classList.add('soften');
        try {
            const found = parseInt(localStorage.getItem('daily-stars:secrets') || '0', 10);
            localStorage.setItem('daily-stars:secrets', String(found + 1));
        } catch (e) { /* ignore */ }
        setTimeout(() => {
            el.classList.remove('hidden-phrase--visible');
            document.body.classList.remove('soften');
        }, 6000);
    }

    function wirePiscesTaps() {
        const glyph = document.getElementById('pisces-symbol');
        if (!glyph) return;
        const taps = [];
        const WINDOW_MS = 3000;
        const REQUIRED = 5;

        glyph.addEventListener('click', () => {
            spawnSwimFish(glyph.getBoundingClientRect());
            const now = Date.now();
            taps.push(now);
            while (taps.length && now - taps[0] > WINDOW_MS) taps.shift();
            if (taps.length >= REQUIRED) {
                taps.length = 0;
                showHiddenPhrase();
            }
        });
    }

    function renderScores(scores) {
        const container = document.getElementById('scores');
        const maxScore = Math.max(...scores.map(s => s.score));
        const allEqual = scores.every(s => s.score === maxScore);

        container.innerHTML = scores.map((s, i) => {
            const isBest = !allEqual && s.score === maxScore;
            return `
            <div class="score-card${isBest ? ' score-card--best' : ''}${s.key === 'us' ? ' score-card--us' : ''}" style="animation-delay: ${i * 0.1}s; --card-accent: ${s.accent}; --card-accent-end: ${s.accentEnd}; --bounce-delay: ${i * 0.4}s">
                ${isBest ? '<span class="best-badge">★ your superpower today</span>' : ''}
                <div class="score-card-header">
                    <div class="score-card-title">
                        <span class="emoji">${s.emoji}</span>
                        <span class="name">${s.name}</span>
                    </div>
                    <span class="score-value">${s.score}</span>
                </div>
                <div class="score-bar-container">
                    <div class="score-bar" data-score="${s.score}"></div>
                </div>
                <p class="score-flavor">${s.flavor}</p>
            </div>
        `}).join('');

        requestAnimationFrame(() => {
            setTimeout(() => {
                document.querySelectorAll('.score-bar').forEach((bar) => {
                    bar.style.width = bar.dataset.score + '%';
                });
            }, 200);
        });
    }

    function createBubbles() {
        const container = document.getElementById('bubbles');
        const count = 18;

        for (let i = 0; i < count; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 30 + 8;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDuration = (Math.random() * 15 + 10) + 's';
            bubble.style.animationDelay = (Math.random() * 12) + 's';
            container.appendChild(bubble);
        }
    }

    function createConfetti() {
        const container = document.getElementById('confetti');
        if (!container) return;
        const colors = ['#f7c948', '#f7a3b8', '#c5a3f7', '#7ecbf5', '#ffb997', '#fde68a'];
        const count = 60;
        for (let i = 0; i < count; i++) {
            const piece = document.createElement('span');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = (Math.random() * 4) + 's';
            piece.style.animationDuration = (4 + Math.random() * 4) + 's';
            piece.style.transform = `rotate(${Math.random() * 360}deg)`;
            container.appendChild(piece);
        }
    }

    function applyDateMode() {
        if (isBirthday()) {
            document.body.classList.add('birthday-mode');
            createConfetti();
        }
        if (isAnniversary()) {
            document.body.classList.add('anniversary-mode');
        }
    }

    function getModeGreeting() {
        if (isBirthday()) return 'Happy birthday, Rong ♓ ✨';
        return getGreeting();
    }

    function getModeQuote() {
        if (isBirthday()) {
            return {
                text: "Today the world made room for you. Take all of it.",
                author: 'für dich'
            };
        }
        if (isAnniversary()) {
            return {
                text: "Two fish, one current. Same direction since the beginning.",
                author: 'uns'
            };
        }
        return getDailyQuote();
    }

    function init() {
        applyDateMode();
        document.getElementById('greeting').textContent = getModeGreeting();
        document.getElementById('date').textContent = getFormattedDate() + (isAnniversary() ? ' · our day' : '');

        const trio = getLuckyTrio();
        document.getElementById('lucky-number').textContent = trio.number;
        document.getElementById('lucky-color-name').textContent = trio.color.name;
        document.getElementById('lucky-color-dot').style.background = trio.color.hex;
        document.getElementById('lucky-element').textContent = trio.element;

        document.getElementById('mood-word').textContent = getDailyMood();

        const quote = getModeQuote();
        document.getElementById('quote').textContent = quote.text;
        document.getElementById('quote-author').textContent = '— ' + quote.author;

        renderScores(generateScores());
        createBubbles();
        renderStreak();
        wirePiscesTaps();
    }

    init();
})();
