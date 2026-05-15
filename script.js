(function () {
    const categories = [
        { name: 'Love', emoji: '❤️', key: 'love', accent: '#f7a3b8', accentEnd: '#f5c3d7' },
        { name: 'Health', emoji: '🌿', key: 'health', accent: '#7dd4a0', accentEnd: '#b8e8c9' },
        { name: 'Spiritual', emoji: '🔮', key: 'spiritual', accent: '#b8a3f7', accentEnd: '#d4c3ff' },
        { name: 'Career', emoji: '⚡', key: 'career', accent: '#f7c948', accentEnd: '#fde68a' },
        { name: 'Creativity', emoji: '🎨', key: 'creativity', accent: '#7ecbf5', accentEnd: '#bde4fa' }
    ];

    const flavorTexts = {
        love: [
            "The kind of day where even strangers smile at you",
            "Your warmth is contagious — pass it around",
            "Plot twist: someone's writing about you in their journal today",
            "Main character energy in all your relationships",
            "Your love language today? Just existing beautifully",
            "Hearts don't skip beats for everyone — you're special",
            "The universe shipped you with happiness today",
            "Good vibes only, and your vibe check is immaculate",
            "Love is literally orbiting you right now",
            "You make people feel safe just by being near"
        ],
        health: [
            "Your body is a wonderland and it knows what it's doing",
            "Today's forecast: glowing skin and good energy",
            "You woke up and chose thriving",
            "Every cell in you is throwing a little party right now",
            "Your energy today? Chef's kiss",
            "The kind of day where even water tastes better",
            "Your body is on your team — always has been",
            "Stretch, breathe, conquer. In that order.",
            "You're radiating that 'just had a great sleep' glow",
            "Everything is flowing in rhythm today"
        ],
        spiritual: [
            "Your third eye is basically open for business",
            "The universe left you a breadcrumb trail today — follow it",
            "Your intuition? Louder than usual. Listen.",
            "Something magical is trying to find you today",
            "You're vibrating at a frequency that attracts miracles",
            "The fish knows which current to swim — trust yours",
            "Today the veil between you and your best life is thin",
            "Your dreams last night? They meant something. Sit with it.",
            "Cosmic downloads incoming — stay open",
            "You're more connected than you realize right now"
        ],
        career: [
            "Main character arc: the glow-up chapter",
            "Someone important is going to notice you today",
            "Your brain is operating at 'genius bar' level today",
            "Today's energy says: bold moves, no hesitation",
            "You're building something bigger than you realize",
            "The dots are connecting — even the ones you can't see yet",
            "Your next great idea is closer than your phone",
            "Quiet confidence is your superpower today",
            "The kind of day where everything clicks into place",
            "Future you is proud of what you're doing right now"
        ],
        creativity: [
            "Your brain is a Pinterest board of amazing ideas today",
            "Everything you touch gets a little more beautiful",
            "The muse didn't just visit — she moved in",
            "Your creative energy could power a small city",
            "Today's vibe: accidentally making art out of everything",
            "You see the world in colors other people haven't named yet",
            "Inspiration is stalking you in the best way",
            "Your imagination said 'no limits' today",
            "The ideas flowing through you deserve a standing ovation",
            "Creating today isn't work — it's play"
        ]
    };

    const quotes = [
        { text: "The wound is the place where the Light enters you.", author: "Rumi" },
        { text: "I must be a mermaid. I have no fear of depths and a great fear of shallow living.", author: "Anaïs Nin" },
        { text: "She was powerful not because she wasn't scared but because she went on so strongly, despite the fear.", author: "Atticus" },
        { text: "I am not what happened to me. I am what I choose to become.", author: "Carl Jung" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
        { text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha" },
        { text: "The privilege of a lifetime is to become who you truly are.", author: "Carl Jung" },
        { text: "I have sea foam in my veins, I understand the language of waves.", author: "Jean Cocteau" },
        { text: "One day you will tell your story of how you overcame what you went through and it will be someone else's survival guide.", author: "Brené Brown" },
        { text: "She remembered who she was and the game changed.", author: "Lalah Delia" },
        { text: "The cosmos is within us. We are made of star-stuff.", author: "Carl Sagan" },
        { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
        { text: "You are not a drop in the ocean. You are the entire ocean in a drop.", author: "Rumi" },
        { text: "And suddenly you know: It's time to start something new and trust the magic of beginnings.", author: "Meister Eckhart" },
        { text: "The most beautiful things in the world cannot be seen or touched, they are felt with the heart.", author: "Antoine de Saint-Exupéry" },
        { text: "Stars can't shine without darkness.", author: "D.H. Sidebottom" },
        { text: "Be soft. Do not let the world make you hard.", author: "Kurt Vonnegut" },
        { text: "She is water. Powerful enough to drown you, soft enough to cleanse you, deep enough to save you.", author: "Adrian Michael" },
        { text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.", author: "Marcus Aurelius" },
        { text: "I am my own muse. I am the subject I know best.", author: "Frida Kahlo" },
        { text: "The soul always knows what to do to heal itself. The challenge is to silence the mind.", author: "Caroline Myss" },
        { text: "You don't have to be perfect to be amazing.", author: "Unknown" },
        { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
        { text: "Normal is not something to aspire to, it's something to get away from.", author: "Jodie Foster" },
        { text: "I am a forest, and a night of dark trees: but he who is not afraid of my darkness, will find banks full of roses under my cypresses.", author: "Friedrich Nietzsche" },
        { text: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" },
        { text: "Maybe the journey isn't so much about becoming anything. Maybe it's about unbecoming everything that isn't really you.", author: "Paulo Coelho" },
        { text: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.", author: "Sylvia Plath" },
        { text: "And those who were seen dancing were thought to be insane by those who could not hear the music.", author: "Nietzsche" }
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

    function getDailyQuote() {
        const dateStr = getDateString();
        const seed = hashString(dateStr + 'quote');
        const rng = seededRandom(seed);
        const index = Math.floor(rng() * quotes.length);
        return quotes[index];
    }

    function renderScores(scores) {
        const container = document.getElementById('scores');
        container.innerHTML = scores.map((s, i) => `
            <div class="score-card" style="animation-delay: ${i * 0.1}s; --card-accent: ${s.accent}; --card-accent-end: ${s.accentEnd}; --bounce-delay: ${i * 0.4}s">
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

    function init() {
        document.getElementById('greeting').textContent = getGreeting();
        document.getElementById('date').textContent = getFormattedDate();

        const quote = getDailyQuote();
        document.getElementById('quote').textContent = quote.text;
        document.getElementById('quote-author').textContent = '— ' + quote.author;

        renderScores(generateScores());
        createBubbles();
    }

    init();
})();
