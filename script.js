(function () {
    const PERSONAL = {
        birthday: { month: 3, day: 2 },
        anniversary: { month: 5, day: 31 },
        hiddenPhrase: 'Hab dich lieb',
        hiddenPhraseBirthday: 'Hab dich lieb. Heute besonders.'
    };

    const STORAGE = {
        streak: 'daily-stars:streak',
        bestStreak: 'daily-stars:best-streak',
        secrets: 'daily-stars:secrets',
        visits: 'daily-stars:visits',
        milestonesShown: 'daily-stars:milestones-shown',
        sound: 'daily-stars:sound',
        starsLit: 'daily-stars:stars-lit'
    };

    const moods = [
        'Tidal', 'Moonlit', 'Dreamy', 'Luminous', 'Ethereal',
        'Fluid', 'Adrift', 'Dissolved', 'Liminal', 'Iridescent',
        'Silvery', 'Hazy', 'Gossamer', 'Misty', 'Deep',
        'Glimmering', 'Oceanic', 'Suspended', 'Boundless', 'Porous',
        'Soft', 'Tender', 'Flowing', 'Translucent', 'Woven'
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

    const icons = {
        love:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.35-9.5-9.2C.74 8.05 3.4 4 7 4c2 0 3.5 1.1 5 3 1.5-1.9 3-3 5-3 3.6 0 6.26 4.05 4.5 7.8C19 16.65 12 21 12 21z"/></svg>',
        health:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c0-7 4-13 14-15-1 9-6 13-12 14"/><path d="M5 21c2-4 5-7 9-9"/></svg>',
        spiritual:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
        career:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
        creativity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>',
        us:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9.5" cy="12" r="5.5"/><circle cx="14.5" cy="12" r="5.5"/></svg>'
    };

    const categories = [
        { name: 'Love', emoji: '❤️', key: 'love', accent: '#f7a3b8', accentEnd: '#f5c3d7' },
        { name: 'Health', emoji: '🌿', key: 'health', accent: '#7dd4a0', accentEnd: '#b8e8c9' },
        { name: 'Spiritual', emoji: '🔮', key: 'spiritual', accent: '#b8a3f7', accentEnd: '#d4c3ff' },
        { name: 'Career', emoji: '⚡', key: 'career', accent: '#f7c948', accentEnd: '#fde68a' },
        { name: 'Creativity', emoji: '🎨', key: 'creativity', accent: '#7ecbf5', accentEnd: '#bde4fa' }
    ];

    const flavorTexts = {
        love: ['tender', 'magnetic', 'woven', 'honeyed', 'glowing', 'braided', 'unguarded', 'nested', 'liquid', 'folded-in', 'known', 'gathered', 'chosen', 'ripening', 'dear', 'threaded', 'soft-bodied', 'near', 'spilled', 'kindled', 'aglow', 'melded', 'cradled', 'found', 'warmed-through'],
        health: ['rooted', 'tidal', 'humming', 'supple', 'alight', 'spring-fed', 'buoyant', 'silver', 'elastic', 'rinsed', 'whole', 'limber', 'bright-bodied', 'restored', 'fluent', 'light-footed', 'clear', 'balanced', 'kindled', 'sea-strong', 'lifted', 'flowing', 'woken', 'even-pulsed', 'glassy'],
        spiritual: ['porous', 'listening', 'thinning', 'attuned', 'liminal', 'cracked-open', 'transparent', 'hollow', 'receptive', 'bell-like', 'knowing', 'sea-glass', 'moonlit', 'under-current', 'fluent', 'threaded', 'aware', 'soft-focused', 'dreaming', 'attuning', 'lit-from-within', 'summoned', 'called', 'drifting', 'awake'],
        career: ['precise', 'taut', 'sharpened', 'aligned', 'in-flow', 'striking', 'composed', 'cutting', 'decisive', 'forging', 'iron-bright', 'pointed', 'in-stride', 'tactical', 'rising', 'focused', 'magnetic', 'building', 'accelerating', 'lucid', 'certain', 'paced', 'calibrated', 'edge-on', 'deliberate'],
        creativity: ['spilling', 'saturated', 'teeming', 'electric', 'generative', 'molten', 'flooded', 'unspooling', 'summoning', 'patterning', 'prolific', 'iridescent', 'spawning', 'pollinating', 'weaving', 'charged', 'fertile', 'volcanic', 'ripe', 'abundant', 'dripping', 'kaleidoscopic', 'sparking', 'painterly', 'percolating']
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

    // Tarot deck — major arcana, all readings positive or neutral. Never negative.
    const tarot = [
        { num: '0',     name: 'The Fool',          reading: 'A clean beginning is offered. Step lightly — the path holds you.' },
        { num: 'I',     name: 'The Magician',      reading: 'Everything you need is already within reach. Today is yours to shape.' },
        { num: 'II',    name: 'The High Priestess',reading: 'Your intuition is the loudest voice in the room. Trust what it whispers.' },
        { num: 'III',   name: 'The Empress',       reading: 'Abundance is gathering around you. Let yourself be filled.' },
        { num: 'IV',    name: 'The Emperor',       reading: 'You hold quiet authority today. Decide once, and the rest follows.' },
        { num: 'V',     name: 'The Hierophant',    reading: 'A wise pattern is showing itself. Old wisdom is meeting your present.' },
        { num: 'VI',    name: 'The Lovers',        reading: 'A choice made from the heart will not lead you wrong today.' },
        { num: 'VII',   name: 'The Chariot',       reading: 'You are moving in the right direction. The current is with you.' },
        { num: 'VIII',  name: 'Strength',          reading: 'Soft hands tame everything today. Your gentleness is your power.' },
        { num: 'IX',    name: 'The Hermit',        reading: 'Stillness reveals what motion hides. A quiet hour will repay you.' },
        { num: 'X',     name: 'Wheel of Fortune',  reading: 'A new turn is in motion. Lucky timing is on your side.' },
        { num: 'XI',    name: 'Justice',           reading: 'Things are settling into their right shape. What is fair will find you.' },
        { num: 'XII',   name: 'The Hanged One',    reading: 'A different angle dissolves what felt stuck. Let yourself float a moment.' },
        { num: 'XIII',  name: 'The Renewal',       reading: 'Something is making room for what comes next. The shedding is gentle.' },
        { num: 'XIV',   name: 'Temperance',        reading: 'You are blending opposites beautifully. Today rewards the middle path.' },
        { num: 'XV',    name: 'The Mirror',        reading: 'What you see in others, you can claim in yourself. Take it back.' },
        { num: 'XVI',   name: 'The Tower',         reading: 'A quiet realisation is freeing you from something outgrown. Breathe.' },
        { num: 'XVII',  name: 'The Star',          reading: 'Hope is your compass today. The water knows the way home.' },
        { num: 'XVIII', name: 'The Moon',          reading: 'Dreams are speaking clearly. Write down what surfaces — it is true.' },
        { num: 'XIX',   name: 'The Sun',           reading: 'Lightness, ease, warmth. Today is uncomplicated and yours.' },
        { num: 'XX',    name: 'Awakening',         reading: 'A long-asleep part of you is waking. Let it stretch fully.' },
        { num: 'XXI',   name: 'The World',         reading: 'A circle is closing beautifully. Stand inside the completeness.' }
    ];

    // -------- helpers --------

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

    function getDateString(date) {
        const now = date || new Date();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        return `${now.getFullYear()}-${m}-${d}`;
    }

    function parseDateString(str) {
        if (typeof str !== 'string') return null;
        const parts = str.split('-').map(Number);
        if (parts.length !== 3 || parts.some(isNaN)) return null;
        const [y, m, d] = parts;
        return new Date(y, m - 1, d);
    }

    function getFormattedDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString('en-US', options);
    }

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour >= 0 && hour < 4) return 'The night is yours, Rong';
        if (hour >= 4 && hour < 6) return 'Before-dawn quiet, Rong';
        if (hour < 12) return 'Good morning, Rong';
        if (hour < 17) return 'Good afternoon, Rong';
        if (hour < 21) return 'Good evening, Rong';
        return 'Sweet dreams, Rong';
    }

    function readJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
            return fallback;
        }
    }

    function writeJSON(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            // ignore
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

    function daysBetween(a, b) {
        const ms = 1000 * 60 * 60 * 24;
        const da = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        const db = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.round((db - da) / ms);
    }

    // -------- daily content --------

    function generateScores() {
        const dateStr = getDateString();
        const scores = [];
        const allHundred = isBirthday();

        categories.forEach((cat) => {
            const seed = hashString(dateStr + cat.key);
            const rng = seededRandom(seed);
            const score = allHundred ? 100 : Math.floor(rng() * 25) + 75;
            const flavorIndex = Math.floor(rng() * flavorTexts[cat.key].length);
            scores.push({ ...cat, score, flavor: flavorTexts[cat.key][flavorIndex] });
        });

        if (isAnniversary()) {
            scores.unshift({
                name: 'Us', emoji: '💕', key: 'us',
                accent: '#f7a3b8', accentEnd: '#f5c3d7',
                score: 100, flavor: 'Today the universe agrees with us.'
            });
        }

        return scores;
    }

    function getDailyQuote() {
        const seed = hashString(getDateString() + 'quote');
        const rng = seededRandom(seed);
        return quotes[Math.floor(rng() * quotes.length)];
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

    function getDailyTarot() {
        const seed = hashString(getDateString() + 'tarot');
        const rng = seededRandom(seed);
        return tarot[Math.floor(rng() * tarot.length)];
    }

    // -------- moon phase (Conway's algorithm, no API) --------

    function getMoonPhase() {
        const now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        const day = now.getDate();
        if (month < 3) { year -= 1; month += 12; }
        const c = 365.25 * year;
        const e = 30.6 * (month + 1);
        const jd = c + e + day - 694039.09;
        const phase = (jd / 29.5305882) % 1;
        const p = phase < 0 ? phase + 1 : phase;

        const phases = [
            { name: 'New Moon',         glyph: '🌑', range: [0, 0.0625] },
            { name: 'Waxing Crescent',  glyph: '🌒', range: [0.0625, 0.1875] },
            { name: 'First Quarter',    glyph: '🌓', range: [0.1875, 0.3125] },
            { name: 'Waxing Gibbous',   glyph: '🌔', range: [0.3125, 0.4375] },
            { name: 'Full Moon',        glyph: '🌕', range: [0.4375, 0.5625] },
            { name: 'Waning Gibbous',   glyph: '🌖', range: [0.5625, 0.6875] },
            { name: 'Last Quarter',     glyph: '🌗', range: [0.6875, 0.8125] },
            { name: 'Waning Crescent',  glyph: '🌘', range: [0.8125, 0.9375] },
            { name: 'New Moon',         glyph: '🌑', range: [0.9375, 1.001] }
        ];
        return phases.find((ph) => p >= ph.range[0] && p < ph.range[1]) || phases[0];
    }

    // -------- season palette --------

    function applySeasonPalette() {
        const m = new Date().getMonth() + 1;
        let season = 'spring';
        if (m === 12 || m <= 2) season = 'winter';
        else if (m >= 3 && m <= 5) season = 'spring';
        else if (m >= 6 && m <= 8) season = 'summer';
        else season = 'autumn';
        document.body.dataset.season = season;
    }

    // -------- streak --------

    function updateStreak() {
        const today = new Date();
        const todayStr = getDateString(today);
        let count = 1;
        let resetMessage = null;
        let wasReset = false;

        try {
            const saved = readJSON(STORAGE.streak, null);
            if (saved) {
                const last = parseDateString(saved.lastDate);
                if (last) {
                    const gap = daysBetween(last, today);
                    if (gap === 0) {
                        count = saved.count || 1;
                    } else if (gap === 1) {
                        count = (saved.count || 0) + 1;
                    } else if (gap > 1) {
                        count = 1;
                        resetMessage = 'the tide always returns';
                        wasReset = true;
                    } else {
                        count = saved.count || 1;
                    }
                }
            }
            writeJSON(STORAGE.streak, { lastDate: todayStr, count });

            const best = readJSON(STORAGE.bestStreak, 0) || 0;
            if (count > best) writeJSON(STORAGE.bestStreak, count);
        } catch (e) {
            // ignore
        }

        return { count, resetMessage, wasReset, best: readJSON(STORAGE.bestStreak, 0) || count };
    }

    function renderStreak(streak) {
        const chip = document.getElementById('streak-chip');
        if (!chip) return;
        const bestSuffix = streak.best > streak.count ? ` <span class="streak-best">· best ${streak.best}</span>` : '';
        chip.innerHTML = `<span class="streak-flame">🔥</span><span class="streak-count">${streak.count}</span><span class="streak-label">day${streak.count === 1 ? '' : 's'}</span>${bestSuffix}`;
        chip.classList.add('streak-chip--visible');
        if (streak.resetMessage) {
            const note = document.getElementById('streak-note');
            if (note) {
                note.textContent = streak.resetMessage;
                note.classList.add('streak-note--visible');
                setTimeout(() => note.classList.remove('streak-note--visible'), 5000);
            }
        }
    }

    // -------- streak milestones --------

    const milestones = [
        { count: 7,   layer: 'milestone-1', label: '7 days · the first week is yours' },
        { count: 30,  layer: 'milestone-2', label: '30 days · a moon cycle of returning' },
        { count: 100, layer: 'milestone-3', label: '100 days · the deep current' },
        { count: 365, layer: 'milestone-4', label: '365 days · a whole year, a whole self' }
    ];

    function applyMilestones(streakCount) {
        const shown = readJSON(STORAGE.milestonesShown, []) || [];
        // Apply visual layers for every reached milestone — these persist permanently
        // even if the streak later resets (they're earned, not current).
        const everReached = readJSON(STORAGE.bestStreak, 0) || 0;
        const reachedNow = Math.max(streakCount, everReached);
        milestones.forEach((m) => {
            if (reachedNow >= m.count) document.body.classList.add(m.layer);
        });
        // Show a celebration toast the first time each milestone is hit
        for (const m of milestones) {
            if (streakCount >= m.count && !shown.includes(m.count)) {
                showMilestoneToast(m.label);
                shown.push(m.count);
                writeJSON(STORAGE.milestonesShown, shown);
                break; // one toast per visit
            }
        }
    }

    function showMilestoneToast(text) {
        const el = document.getElementById('milestone-toast');
        if (!el) return;
        el.textContent = text;
        el.classList.add('milestone-toast--visible');
        setTimeout(() => el.classList.remove('milestone-toast--visible'), 6000);
    }

    // -------- visit log + heatmap --------

    function recordVisit() {
        const visits = readJSON(STORAGE.visits, []) || [];
        const today = getDateString();
        if (!visits.includes(today)) {
            visits.push(today);
            writeJSON(STORAGE.visits, visits);
        }
        return visits;
    }

    function renderHeatmap(visits) {
        const grid = document.getElementById('heatmap-grid');
        const stats = document.getElementById('heatmap-stats');
        if (!grid || !stats) return;

        const visitSet = new Set(visits);
        const today = new Date();
        // Show last 12 weeks (84 days), aligned by weekday
        const days = 84;
        const cells = [];
        for (let i = days - 1; i >= 0; i--) {
            const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
            const ds = getDateString(d);
            const visited = visitSet.has(ds);
            const isToday = i === 0;
            cells.push(`<i class="heatmap-cell${visited ? ' heatmap-cell--on' : ''}${isToday ? ' heatmap-cell--today' : ''}" title="${ds}${visited ? ' · here' : ''}"></i>`);
        }
        grid.innerHTML = cells.join('');

        const last30 = Array.from({ length: 30 }, (_, i) => {
            const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
            return getDateString(d);
        }).filter((ds) => visitSet.has(ds)).length;

        stats.textContent = `${visits.length} day${visits.length === 1 ? '' : 's'} altogether · ${last30} in the last 30`;
    }

    function wireHeatmapToggle() {
        const btn = document.getElementById('heatmap-toggle');
        const drawer = document.getElementById('heatmap-drawer');
        if (!btn || !drawer) return;
        btn.addEventListener('click', () => {
            const open = drawer.classList.toggle('heatmap-drawer--open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
            btn.classList.toggle('heatmap-toggle--open', open);
        });
    }

    // -------- tarot --------

    function renderTarot() {
        const card = getDailyTarot();
        document.getElementById('tarot-card-number').textContent = card.num;
        document.getElementById('tarot-card-name').textContent = card.name;
        document.getElementById('tarot-card-reading').textContent = card.reading;

        const cardEl = document.getElementById('tarot-card');
        if (!cardEl) return;

        const today = getDateString();
        const drawnKey = 'daily-stars:tarot-drawn';
        const drawn = readJSON(drawnKey, null);
        if (drawn === today) {
            cardEl.classList.add('tarot-card--flipped');
        }

        const reveal = () => {
            if (cardEl.classList.contains('tarot-card--flipped')) return;
            cardEl.classList.add('tarot-card--flipped');
            writeJSON(drawnKey, today);
        };
        cardEl.addEventListener('click', reveal);
        cardEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                reveal();
            }
        });
    }

    // -------- lucky strip + moon --------

    function renderMoon() {
        const phase = getMoonPhase();
        document.getElementById('moon-glyph').textContent = phase.glyph;
        document.getElementById('moon-name').textContent = phase.name;

        // Long-press easter egg → show full phase name with whisper
        const item = document.getElementById('lucky-moon');
        if (!item) return;
        let timer = null;
        const start = () => {
            timer = setTimeout(() => {
                item.classList.add('lucky-moon--whispered');
                setTimeout(() => item.classList.remove('lucky-moon--whispered'), 3000);
            }, 700);
        };
        const cancel = () => { if (timer) { clearTimeout(timer); timer = null; } };
        item.addEventListener('mousedown', start);
        item.addEventListener('touchstart', start, { passive: true });
        item.addEventListener('mouseup', cancel);
        item.addEventListener('mouseleave', cancel);
        item.addEventListener('touchend', cancel);
        item.addEventListener('touchcancel', cancel);
    }

    // -------- secrets: konami sequences --------

    function wireDateTaps() {
        const dateEl = document.getElementById('date');
        if (!dateEl) return;
        let count = 0;
        let timer = null;
        dateEl.addEventListener('click', () => {
            count++;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => { count = 0; }, 1500);
            if (count >= 7) {
                count = 0;
                showDaysTogether();
            }
        });
    }

    function showDaysTogether() {
        // Picked an arbitrary anchor — set as you like later
        const anchor = new Date(2018, 4, 31); // 2018-05-31, anniversary year
        const today = new Date();
        const days = daysBetween(anchor, today);
        const note = document.getElementById('streak-note');
        if (note) {
            note.textContent = `${days.toLocaleString()} days woven together`;
            note.classList.add('streak-note--visible');
            setTimeout(() => note.classList.remove('streak-note--visible'), 5000);
        }
    }

    function wireConstellationStars() {
        const stars = document.querySelectorAll('#constellation-stars circle');
        const lit = new Set(readJSON(STORAGE.starsLit, []) || []);
        stars.forEach((star) => {
            const id = star.dataset.star;
            if (lit.has(id)) star.classList.add('star-lit');
            star.style.pointerEvents = 'auto';
            star.style.cursor = 'pointer';
            star.addEventListener('click', () => {
                if (lit.has(id)) return;
                lit.add(id);
                star.classList.add('star-lit');
                writeJSON(STORAGE.starsLit, Array.from(lit));
                if (lit.size === stars.length) {
                    setTimeout(() => {
                        const note = document.getElementById('streak-note');
                        if (note) {
                            note.textContent = 'the whole sky knows you now';
                            note.classList.add('streak-note--visible');
                            setTimeout(() => note.classList.remove('streak-note--visible'), 6000);
                        }
                    }, 400);
                }
            });
        });
    }

    const FISH_GLYPHS = ['🐟', '🐠', '🐡', '🦈', '🐙', '🪼', '🐚', '🐬', '🦑', '🦀'];

    function spawnSwimFish(centerX, centerY, opts = {}) {
        const fish = document.createElement('span');
        fish.className = 'swim-fish';
        fish.textContent = opts.glyph || FISH_GLYPHS[Math.floor(Math.random() * FISH_GLYPHS.length)];
        const direction = opts.direction || (Math.random() < 0.5 ? -1 : 1);
        const driftY = opts.driftY != null ? opts.driftY : (Math.random() - 0.5) * 260;
        const distance = window.innerWidth * (0.55 + Math.random() * 0.4) + 120;
        const duration = 1700 + Math.random() * 1500;
        const size = opts.size || (22 + Math.random() * 22);
        const wave = 18 + Math.random() * 26;
        fish.style.left = centerX + 'px';
        fish.style.top = centerY + 'px';
        fish.style.fontSize = size + 'px';
        fish.style.setProperty('--swim-x', `${direction * distance}px`);
        fish.style.setProperty('--swim-y', `${driftY}px`);
        fish.style.setProperty('--swim-flip', direction === -1 ? '-1' : '1');
        fish.style.setProperty('--swim-wave', `${wave}px`);
        fish.style.animationDuration = duration + 'ms';
        if (opts.delay) fish.style.animationDelay = opts.delay + 'ms';
        document.body.appendChild(fish);
        setTimeout(() => fish.remove(), duration + (opts.delay || 0) + 100);
    }

    function spawnRipple(centerX, centerY, opts = {}) {
        const ring = document.createElement('span');
        ring.className = 'tap-ripple';
        if (opts.color) ring.style.borderColor = opts.color;
        ring.style.left = centerX + 'px';
        ring.style.top = centerY + 'px';
        if (opts.delay) ring.style.animationDelay = opts.delay + 'ms';
        document.body.appendChild(ring);
        setTimeout(() => ring.remove(), 1200 + (opts.delay || 0));
    }

    function spawnSparkles(centerX, centerY, count) {
        const glyphs = ['✦', '✧', '⋆', '✺', '·', '✩', '❋', '⁕'];
        for (let i = 0; i < count; i++) {
            const s = document.createElement('span');
            s.className = 'tap-sparkle';
            s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
            const angle = (Math.PI * 2 * i) / count + Math.random() * 0.6;
            const dist = 70 + Math.random() * 140;
            const dx = Math.cos(angle) * dist;
            const dy = Math.sin(angle) * dist;
            s.style.left = centerX + 'px';
            s.style.top = centerY + 'px';
            s.style.setProperty('--sx', dx + 'px');
            s.style.setProperty('--sy', dy + 'px');
            s.style.fontSize = (10 + Math.random() * 18) + 'px';
            s.style.animationDelay = (Math.random() * 120) + 'ms';
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 1400);
        }
    }

    function spawnDroplets(centerX, centerY, count) {
        for (let i = 0; i < count; i++) {
            const d = document.createElement('span');
            d.className = 'tap-droplet';
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1;
            const speed = 140 + Math.random() * 220;
            const dx = Math.cos(angle) * speed;
            const dy = Math.sin(angle) * speed;
            const fall = 380 + Math.random() * 240;
            const size = 6 + Math.random() * 8;
            d.style.left = centerX + 'px';
            d.style.top = centerY + 'px';
            d.style.width = size + 'px';
            d.style.height = (size * 1.3) + 'px';
            d.style.setProperty('--dx', dx + 'px');
            d.style.setProperty('--dy', dy + 'px');
            d.style.setProperty('--df', fall + 'px');
            d.style.animationDelay = (Math.random() * 60) + 'ms';
            document.body.appendChild(d);
            setTimeout(() => d.remove(), 1800);
        }
    }

    function spawnRisingBubbles(centerX, centerY, count) {
        for (let i = 0; i < count; i++) {
            const b = document.createElement('span');
            b.className = 'tap-bubble';
            const size = 8 + Math.random() * 22;
            const offsetX = (Math.random() - 0.5) * 80;
            const drift = (Math.random() - 0.5) * 140;
            const rise = 240 + Math.random() * 220;
            b.style.left = (centerX + offsetX) + 'px';
            b.style.top = centerY + 'px';
            b.style.width = size + 'px';
            b.style.height = size + 'px';
            b.style.setProperty('--rise', '-' + rise + 'px');
            b.style.setProperty('--bx', drift + 'px');
            b.style.animationDuration = (1400 + Math.random() * 800) + 'ms';
            b.style.animationDelay = (Math.random() * 200) + 'ms';
            document.body.appendChild(b);
            setTimeout(() => b.remove(), 2700);
        }
    }

    function spawnFlash(centerX, centerY) {
        const f = document.createElement('span');
        f.className = 'tap-flash';
        f.style.left = centerX + 'px';
        f.style.top = centerY + 'px';
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 700);
    }

    let comboCount = 0;
    let comboTimer = null;

    function piscesSplash(originRect) {
        const cx = originRect ? originRect.left + originRect.width / 2 : window.innerWidth / 2;
        const cy = originRect ? originRect.top + originRect.height / 2 : 100;
        const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

        comboCount = Math.min(comboCount + 1, 5);
        clearTimeout(comboTimer);
        comboTimer = setTimeout(() => { comboCount = 0; }, 1400);
        const intensity = comboCount;

        spawnFlash(cx, cy);
        spawnRipple(cx, cy);

        if (!reduced) {
            spawnRipple(cx, cy, { delay: 140 });
            spawnRipple(cx, cy, { delay: 280 });
            spawnSparkles(cx, cy, 12 + intensity * 2);
            spawnRisingBubbles(cx, cy, 8 + intensity * 2);
            spawnDroplets(cx, cy, 10 + intensity * 2);
        }

        const schoolSize = reduced ? 2 : 7 + intensity + Math.floor(Math.random() * 3);
        for (let i = 0; i < schoolSize; i++) {
            const dir = i % 2 === 0 ? 1 : -1;
            spawnSwimFish(cx, cy, {
                direction: dir,
                driftY: (Math.random() - 0.5) * 280,
                delay: i * 60,
                size: 24 + Math.random() * 26
            });
        }

        const glyph = document.getElementById('pisces-symbol');
        if (glyph) {
            glyph.classList.remove('pisces-symbol--burst');
            void glyph.offsetWidth;
            glyph.classList.add('pisces-symbol--burst');
            setTimeout(() => glyph.classList.remove('pisces-symbol--burst'), 800);
        }

        if (!reduced && intensity >= 3) {
            document.body.classList.remove('screen-shake');
            void document.body.offsetWidth;
            document.body.classList.add('screen-shake');
            setTimeout(() => document.body.classList.remove('screen-shake'), 500);
        }
    }

    function showHiddenPhrase() {
        const el = document.getElementById('hidden-phrase');
        if (!el) return;
        el.textContent = isBirthday() ? PERSONAL.hiddenPhraseBirthday : PERSONAL.hiddenPhrase;
        el.classList.add('hidden-phrase--visible');
        document.body.classList.add('soften');
        try {
            const found = parseInt(localStorage.getItem(STORAGE.secrets) || '0', 10);
            localStorage.setItem(STORAGE.secrets, String(found + 1));
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
        let lastTouchAt = 0;

        const handleTap = (e) => {
            if (e.cancelable) e.preventDefault();
            piscesSplash(glyph.getBoundingClientRect());
            const now = Date.now();
            taps.push(now);
            while (taps.length && now - taps[0] > WINDOW_MS) taps.shift();
            if (taps.length >= REQUIRED) {
                taps.length = 0;
                showHiddenPhrase();
            }
        };

        glyph.addEventListener('touchstart', (e) => {
            lastTouchAt = Date.now();
            handleTap(e);
        }, { passive: false });

        glyph.addEventListener('click', (e) => {
            if (Date.now() - lastTouchAt < 600) return;
            handleTap(e);
        });
    }

    // -------- bubble cursor trail --------

    function wireCursorBubbles() {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (matchMedia('(hover: none)').matches) return; // skip on touch devices

        const layer = document.getElementById('cursor-bubbles');
        if (!layer) return;
        let last = 0;
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - last < 60) return;
            last = now;
            const b = document.createElement('span');
            b.className = 'cursor-bubble';
            const size = Math.random() * 8 + 4;
            b.style.width = size + 'px';
            b.style.height = size + 'px';
            b.style.left = (e.clientX + (Math.random() - 0.5) * 12) + 'px';
            b.style.top = (e.clientY + (Math.random() - 0.5) * 12) + 'px';
            b.style.animationDuration = (1.4 + Math.random() * 0.6) + 's';
            layer.appendChild(b);
            setTimeout(() => b.remove(), 2200);
        });
    }

    // -------- ambient sound --------

    let audioCtx = null;
    let audioNodes = null;
    let soundOn = false;

    function buildAmbientAudio() {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return null;
        const ctx = new Ctx();
        // Soft brown-noise underwater drone via filtered noise + slow LFO
        const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0;
        for (let i = 0; i < data.length; i++) {
            const white = Math.random() * 2 - 1;
            lastOut = (lastOut + 0.02 * white) / 1.02;
            data[i] = lastOut * 3.5;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 380;
        lp.Q.value = 0.6;

        const gain = ctx.createGain();
        gain.gain.value = 0;

        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.08;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 60;
        lfo.connect(lfoGain).connect(lp.frequency);

        noise.connect(lp).connect(gain).connect(ctx.destination);
        noise.start();
        lfo.start();
        return { ctx, gain };
    }

    function setSound(on) {
        soundOn = on;
        const btn = document.getElementById('sound-toggle');
        const icon = document.getElementById('sound-icon');
        if (btn) btn.classList.toggle('sound-toggle--on', on);
        if (icon) icon.textContent = on ? '𝄢' : '𝄞';
        try { localStorage.setItem(STORAGE.sound, on ? '1' : '0'); } catch (e) { /* ignore */ }

        if (on) {
            if (!audioNodes) audioNodes = buildAmbientAudio();
            if (!audioNodes) return;
            if (audioNodes.ctx.state === 'suspended') audioNodes.ctx.resume();
            audioNodes.gain.gain.cancelScheduledValues(audioNodes.ctx.currentTime);
            audioNodes.gain.gain.linearRampToValueAtTime(0.18, audioNodes.ctx.currentTime + 1.2);
        } else if (audioNodes) {
            audioNodes.gain.gain.cancelScheduledValues(audioNodes.ctx.currentTime);
            audioNodes.gain.gain.linearRampToValueAtTime(0, audioNodes.ctx.currentTime + 0.8);
        }
    }

    function wireSoundToggle() {
        const btn = document.getElementById('sound-toggle');
        if (!btn) return;
        btn.addEventListener('click', () => setSound(!soundOn));
        // Don't auto-restore — autoplay needs a user gesture. Just remember preference visually.
        const saved = localStorage.getItem(STORAGE.sound);
        if (saved === '1') {
            // Show as "off but remembered" — first click will start it
            btn.classList.add('sound-toggle--remembered');
        }
    }

    // -------- date modes --------

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
            return { text: "Today the world made room for you. Take all of it.", author: 'für dich' };
        }
        if (isAnniversary()) {
            return { text: "Two fish, one current. Same direction since the beginning.", author: 'uns' };
        }
        return getDailyQuote();
    }

    // -------- rendering --------

    function renderScores(scores) {
        const container = document.getElementById('scores');
        const maxScore = Math.max(...scores.map(s => s.score));
        const allEqual = scores.every(s => s.score === maxScore);

        container.innerHTML = scores.map((s, i) => {
            const isBest = !allEqual && s.score === maxScore;
            const iconHtml = icons[s.key] || `<span class="emoji-fallback">${s.emoji}</span>`;
            return `
            <div class="score-card${isBest ? ' score-card--best' : ''}${s.key === 'us' ? ' score-card--us' : ''}" style="animation-delay: ${i * 0.1}s; --card-accent: ${s.accent}; --card-accent-end: ${s.accentEnd}; --bounce-delay: ${i * 0.4}s">
                ${isBest ? '<span class="best-badge">★ your superpower today</span>' : ''}
                <div class="score-card-header">
                    <div class="score-card-title">
                        <span class="emoji">${iconHtml}</span>
                        <span class="name">${s.name}</span>
                    </div>
                    <span class="score-value">${s.score}</span>
                </div>
                <div class="score-bar-container">
                    <div class="score-bar" data-score="${s.score}"></div>
                </div>
                <p class="score-flavor">${s.flavor}</p>
            </div>`;
        }).join('');

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
        for (let i = 0; i < 18; i++) {
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
        for (let i = 0; i < 60; i++) {
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

    // -------- service worker --------

    function registerServiceWorker() {
        if (!('serviceWorker' in navigator)) return;
        if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.protocol !== 'file:') return;
        if (location.protocol === 'file:') return; // SW doesn't work on file://
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch(() => { /* ignore */ });
        });
    }

    // -------- init --------

    function init() {
        applySeasonPalette();
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

        const streak = updateStreak();
        renderStreak(streak);
        applyMilestones(streak.count);

        const visits = recordVisit();
        renderHeatmap(visits);
        wireHeatmapToggle();

        renderMoon();
        renderTarot();

        wirePiscesTaps();
        wireDateTaps();
        wireConstellationStars();
        wireCursorBubbles();
        wireSoundToggle();

        registerServiceWorker();
    }

    init();
})();
