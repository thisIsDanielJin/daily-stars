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
        const maxScore = Math.max(...scores.map(s => s.score));

        container.innerHTML = scores.map((s, i) => {
            const isBest = s.score === maxScore;
            return `
            <div class="score-card${isBest ? ' score-card--best' : ''}" style="animation-delay: ${i * 0.1}s; --card-accent: ${s.accent}; --card-accent-end: ${s.accentEnd}; --bounce-delay: ${i * 0.4}s">
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
