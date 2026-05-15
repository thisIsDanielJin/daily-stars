(function () {
    const categories = [
        { name: 'Love', emoji: '❤️', key: 'love' },
        { name: 'Health', emoji: '🌿', key: 'health' },
        { name: 'Spiritual', emoji: '✨', key: 'spiritual' },
        { name: 'Career', emoji: '🚀', key: 'career' },
        { name: 'Creativity', emoji: '🎨', key: 'creativity' }
    ];

    const flavorTexts = {
        love: [
            "Love surrounds you like warm ocean waves today",
            "Your heart is radiating beautiful energy",
            "Someone is thinking of you right now",
            "The connection you share grows stronger each day",
            "Your kindness creates ripples of love everywhere",
            "Today your heart is especially magnetic",
            "Love flows to you effortlessly",
            "You deserve every ounce of love coming your way",
            "The stars align for your deepest connections",
            "Your loving energy lights up every room"
        ],
        health: [
            "Your body feels strong and aligned today",
            "Vitality flows through you like a gentle stream",
            "Today is perfect for nurturing yourself",
            "Your energy levels are beautifully balanced",
            "The universe supports your wellbeing today",
            "You radiate health and inner glow",
            "Your body thanks you for being so kind to it",
            "Everything in your body is working in harmony",
            "Rest and movement both serve you perfectly today",
            "You're glowing from the inside out"
        ],
        spiritual: [
            "Your intuition is crystal clear today",
            "The universe is whispering secrets just for you",
            "You're deeply connected to something greater",
            "Trust the flow — it's carrying you somewhere beautiful",
            "Your inner wisdom knows exactly what to do",
            "Today the spiritual realm wraps you in light",
            "Pisces energy amplifies your intuitive gifts",
            "You're exactly where you're meant to be",
            "The cosmos celebrates your unique spirit",
            "Magic is closer than you think today"
        ],
        career: [
            "Your ideas are brilliant and ready to bloom",
            "Success is gravitating toward you today",
            "Your talents are being noticed by the right people",
            "Today brings unexpected professional blessings",
            "Your hard work is creating beautiful momentum",
            "Opportunities align with your deepest purpose",
            "You're building something truly meaningful",
            "The stars support your ambitions today",
            "Your unique perspective is your superpower",
            "Everything you touch turns to gold today"
        ],
        creativity: [
            "Your imagination is sparkling like the ocean today",
            "Creative ideas flow to you like water",
            "The muse is sitting right beside you",
            "Today your creative spirit is unstoppable",
            "Colors, words, and ideas dance around you",
            "Your creative energy inspires everyone nearby",
            "Something beautiful wants to be made by you today",
            "Your Pisces creativity is at its peak",
            "Let your imagination swim freely today",
            "Every idea you have is worth exploring"
        ]
    };

    const affirmations = [
        "You are worthy of all the beautiful things life has to offer.",
        "The ocean of your potential has no shore.",
        "You bring light to everyone around you simply by being yourself.",
        "Today is full of possibility, and you are ready for all of it.",
        "Your gentle strength moves mountains without making a sound.",
        "The world is better because you're in it.",
        "You flow gracefully through whatever comes your way.",
        "Your dreams are valid and closer than you think.",
        "Like water, you adapt and overcome with beauty and grace.",
        "Every cell in your body vibrates with joy and purpose.",
        "You are a gift to everyone who knows you.",
        "The stars wrote something beautiful when they made you.",
        "Trust yourself — your instincts are always guiding you home.",
        "You deserve rest, joy, and every good thing today.",
        "Your sensitivity is not weakness — it's your greatest power.",
        "The universe conspires in your favor, always.",
        "You are blooming exactly on schedule.",
        "Your presence alone makes the world softer and kinder.",
        "Today, everything flows in your direction.",
        "You carry an ocean of love inside you — let it overflow.",
        "The best version of today is already unfolding for you.",
        "You are deeply loved, even in moments you forget it.",
        "Your spirit shines like moonlight on water.",
        "Everything you need is already within you.",
        "You are the calm in the storm and the light in the dark.",
        "Today honors you as much as you honor it.",
        "Your heart knows the way — follow it fearlessly.",
        "Like the tides, your strength returns again and again.",
        "You make the ordinary feel magical.",
        "The universe smiles when you smile."
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

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning, Rong ♓';
        if (hour < 17) return 'Good afternoon, Rong ♓';
        if (hour < 21) return 'Good evening, Rong ♓';
        return 'Sweet dreams, Rong ♓';
    }

    function generateScores() {
        const dateStr = getDateString();
        const scores = [];

        categories.forEach((cat) => {
            const seed = hashString(dateStr + cat.key);
            const rng = seededRandom(seed);
            const score = Math.floor(rng() * 25) + 75;
            const flavorIndex = Math.floor(rng() * flavorTexts[cat.key].length);
            scores.push({
                ...cat,
                score,
                flavor: flavorTexts[cat.key][flavorIndex]
            });
        });

        return scores;
    }

    function getDailyAffirmation() {
        const dateStr = getDateString();
        const seed = hashString(dateStr + 'affirmation');
        const rng = seededRandom(seed);
        const index = Math.floor(rng() * affirmations.length);
        return affirmations[index];
    }

    function renderScores(scores) {
        const container = document.getElementById('scores');
        container.innerHTML = scores.map((s, i) => `
            <div class="score-card" style="animation-delay: ${i * 0.12}s">
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
        `).join('');

        requestAnimationFrame(() => {
            setTimeout(() => {
                document.querySelectorAll('.score-bar').forEach((bar) => {
                    bar.style.width = bar.dataset.score + '%';
                });
            }, 100);
        });
    }

    function createBubbles() {
        const container = document.getElementById('bubbles');
        const count = 15;

        for (let i = 0; i < count; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 40 + 10;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDuration = (Math.random() * 12 + 8) + 's';
            bubble.style.animationDelay = (Math.random() * 10) + 's';
            container.appendChild(bubble);
        }
    }

    function init() {
        document.getElementById('greeting').textContent = getGreeting();
        document.getElementById('affirmation').textContent = getDailyAffirmation();
        renderScores(generateScores());
        createBubbles();
    }

    init();
})();
