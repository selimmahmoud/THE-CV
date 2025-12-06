from flask import Flask, render_template_string

app = Flask(__name__)

SELIM_PORTFOLIO = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Selim Mahmoud - Developer</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: #0a0a0a;
            color: #fff;
            font-family: 'Arial', sans-serif;
            overflow-x: hidden;
            min-height: 100vh;
            position: relative;
        }
        /* Simple floating shapes background */
        .floating-shapes {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: -3;
            overflow: hidden;
            pointer-events: none;
        }
        .shape {
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            animation: floatUp linear infinite;
            opacity: 0.4;
        }
        .shape:nth-child(odd) {
            background: rgba(255,100,100,0.15);
        }
        @keyframes floatUp {
            0% { transform: translateY(120vh) scale(1); opacity: 0; }
            10% { opacity: 0.4; }
            90% { opacity: 0.4; }
            100% { transform: translateY(-20vh) scale(1.1); opacity: 0; }
        }
        .lang-bg {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: -2;
            opacity: 0.12;
        }
        .bg-element {
            position: absolute;
            font-size: 160px;
            animation: float 8s ease-in-out infinite;
        }
        .python-icon { color: #3776ab; top: 10%; left: 5%; animation-delay: 0s; }
        .flask-icon { color: #00ff88; top: 50%; left: 15%; font-size: 110px; animation-delay: 2s; }
        .code-icon { color: #ffffff; top: 70%; right: 20%; font-size: 140px; animation-delay: 4s; }
        .terminal-icon { color: #cccccc; top: 20%; right: 10%; font-size: 90px; animation-delay: 1s; }
        .bracket-icon { color: #888888; top: 80%; left: 25%; font-size: 180px; animation-delay: 3s; }
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(2deg); }
            66% { transform: translateY(-25px) rotate(-3deg); }
        }
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 10;
        }
        .hero {
            text-align: center;
            padding: 100px 0;
            background: linear-gradient(180deg, rgba(10,10,10,0.8) 0%, transparent 100%);
        }
        .name {
            font-family: 'Orbitron', sans-serif;
            font-weight: 900;
            font-size: clamp(3rem, 8vw, 7rem);
            color: #ff4444;
            margin-bottom: 20px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
        }
        .title {
            font-size: clamp(1.2rem, 4vw, 2rem);
            opacity: 0.9;
            margin-bottom: 40px;
            animation: fadeInUp 1s ease 0.5s forwards;
            opacity: 0;
        }
        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }
        .section {
            margin: 80px 0;
            padding: 40px;
            background: rgba(20,20,20,0.6);
            border-radius: 20px;
            border: 1px solid rgba(0,255,136,0.2);
            backdrop-filter: blur(10px);
        }
        .section h2 {
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            margin-bottom: 30px;
            color: #ff4444;
            position: relative;
        }
        .section h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60px;
            height: 4px;
            background: #ff4444;
            border-radius: 3px;
        }
        .skills-grid, .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }
        .skill-card, .project-card {
            background: rgba(0,0,0,0.5);
            padding: 25px;
            border-radius: 15px;
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
            animation: slideIn 0.8s ease forwards;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .skill-card:hover, .project-card:hover {
            transform: translateY(-10px);
            border-color: #ff4444;
            box-shadow: 0 20px 40px rgba(255,68,68,0.3);
        }
        .project-title {
            font-family: 'Orbitron', sans-serif;
            font-weight: 900;
            font-size: 1.7rem;
            margin-bottom: 10px;
            color: #ff4444;
        }
        .view-more-btn {
            margin-top: 25px;
            padding: 12px 25px;
            font-size: 1rem;
            border: none;
            border-radius: 30px;
            background: #ff4444;
            color: #fff;
            cursor: pointer;
            font-weight: 700;
            letter-spacing: 0.8px;
            transition: all 0.3s ease;
            align-self: start;
        }
        .view-more-btn:hover {
            background: #cc3333;
            transform: scale(1.05);
        }
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }
        .contact-card {
            background: rgba(0,0,0,0.7);
            padding: 30px;
            border-radius: 20px;
            border: 2px solid rgba(0,255,136,0.3);
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            word-break: break-word;
        }
        .contact-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0,255,136,0.1), transparent);
            transition: left 0.5s;
        }
        .contact-card:hover::before {
            left: 100%;
        }
        .contact-card:hover {
            transform: scale(1.05);
            border-color: #00ff88;
            box-shadow: 0 20px 50px rgba(0,255,136,0.3);
        }
        .contact-icon {
            font-size: 3rem;
            margin-bottom: 15px;
            display: block;
        }
        .phone-number, .email-address {
            font-size: 1.5rem;
            font-weight: bold;
            color: #00ff88;
            text-decoration: none;
            display: block;
            margin-top: 10px;
            cursor: pointer;
        }
        .code-snippet {
            background: #1a1a1a;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            margin: 20px 0;
            border-left: 4px solid #ff4444;
            overflow-x: auto;
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }
    </style>
</head>
<body>
    <div class="floating-shapes" id="floating-shapes"></div>

    <div class="lang-bg">
        <div class="python-icon">🐍</div>
        <div class="flask-icon">🔥</div>
        <div class="code-icon">💻</div>
        <div class="terminal-icon">⌨️</div>
        <div class="bracket-icon">⟨⟩</div>
    </div>

    <div class="container">
        <section class="hero">
            <h1 class="name">Selim Mahmoud</h1>
            <p class="title">15-year-old developer working with Python, Flask, CSS, HTML & AI Modeling</p>
        </section>

        <section class="section">
            <h2>About Me</h2>
            <p>Hey! I'm Selim Mahmoud, a 15-year-old developer passionate about coding. I spend my time building projects and learning new ways to create awesome stuff with code.</p>
            <div class="code-snippet">print("Hello from Selim's portfolio!")</div>
        </section>

        <section class="section">
            <h2>Skills</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <h3>🐍 Python</h3>
                    <p>Mastered Python and love building projects with it. From scripts to web apps!</p>
                </div>
                <div class="skill-card">
                    <h3>🔥 Flask</h3>
                    <p>Creating web applications and websites using Flask framework.</p>
                </div>
                <div class="skill-card">
                    <h3>🎨 CSS</h3>
                    <p>Modern responsive designs with advanced CSS animations and styling.</p>
                </div>
                <div class="skill-card">
                    <h3>📄 HTML</h3>
                    <p>Clean semantic HTML5 structure for modern web applications.</p>
                </div>
                <div class="skill-card">
                    <h3>🤖 AI Modeling</h3>
                    <p>Building and training AI models for intelligent applications.</p>
                </div>
            </div>
        </section>

        <section class="section">
            <h2>Selected Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-title">AI Chatbot</div>
                    <p>Built with Flask and NLP to simulate human conversations like ChatGPT5.</p>
                    <button class="view-more-btn" onclick="alert('AI Chatbot: This project uses Flask as backend and Natural Language Processing to create interactive chat experiences.')">View More</button>
                </div>
                <div class="project-card">
                    <div class="project-title">Image Recognition</div>
                    <p>AI-powered image analysis and object detection systems.</p>
                    <button class="view-more-btn" onclick="alert('Image Recognition: Building computer vision systems that can identify objects, faces, and patterns in images using AI models.')">View More</button>
                </div>
                <div class="project-card">
                    <div class="project-title">Small Game Developer & Tester</div>
                    <p>Designing, developing, and testing small games with focus on fun and stability.</p>
                    <button class="view-more-btn" onclick="alert('Game Dev & Testing: Creating games from scratch, testing gameplay mechanics and fixing bugs to ensure smooth experiences.')">View More</button>
                </div>
            </div>
        </section>

        <section class="section">
            <h2>Get In Touch</h2>
            <div class="contact-grid">
                <div class="contact-card">
                    <span class="contact-icon">📍</span>
                    <h3>From Egypt</h3>
                    <p>Benha, Egypt</p>
                    <p>Student at AMS</p>
                </div>
                <div class="contact-card">
                    <span class="contact-icon">📱</span>
                    <h3>Phone</h3>
                    <p>Reach out anytime!</p>
                    <a href="tel:+201551640604" class="phone-number">0155 1640 604</a>
                </div>
                <div class="contact-card">
                    <span class="contact-icon">✉️</span>
                    <h3>Email</h3>
                    <p>You can email me anytime</p>
                    <a href="mailto:yope2311@gmail.com" class="email-address">yope2311@gmail.com</a>
                </div>
            </div>
        </section>
    </div>

    <script>
        // Simple floating shapes
        function createFloatingShapes() {
            const container = document.getElementById('floating-shapes');
            for (let i = 0; i < 30; i++) {
                const shape = document.createElement('div');
                shape.classList.add('shape');
                shape.style.width = shape.style.height = (Math.random() * 60 + 15) + 'px';
                shape.style.left = Math.random() * 100 + 'vw';
                shape.style.animationDuration = (Math.random() * 25 + 15) + 's';
                shape.style.animationDelay = Math.random() * 15 + 's';
                container.appendChild(shape);
            }
        }

        document.querySelectorAll('.skill-card, .contact-card, .project-card').forEach((card, idx) => {
            card.style.animationDelay = (idx * 0.1) + 's';
        });

        window.addEventListener('load', createFloatingShapes);
    </script>
</body>
</html>
"""

@app.route('/')
def home():
    return render_template_string(SELIM_PORTFOLIO)

if __name__ == '__main__':
    print("🚀 Selim's Portfolio - PERFECT SKILLS & PROJECTS!")
    print("📋 Save as 'solly.py'")
    print("📱 Run: python solly.py")
    print("🌐 Open: http://127.0.0.1:5000")
    print("-" * 50)
    app.run(debug=True, host='127.0.0.1', port=5000)
