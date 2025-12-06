document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('floating-shapes');
    if (container) {
        for (let i = 0; i < 30; i++) {
            const shape = document.createElement('div');
            shape.classList.add('shape');
            const size = (Math.random() * 60 + 15);
            shape.style.width = shape.style.height = size + 'px';
            // place randomly across the screen
            shape.style.left = (Math.random() * 100) + 'vw';
            shape.style.top = (Math.random() * 100) + 'vh';
            shape.style.animationDuration = (Math.random() * 25 + 15) + 's';
            shape.style.animationDelay = (Math.random() * 15) + 's';
            container.appendChild(shape);
        }
    }

    // Add small stagger to each card animation
    document.querySelectorAll('.skill-card, .contact-card, .project-card').forEach((card, idx) => {
        card.style.animationDelay = (idx * 0.1) + 's';
    });
});