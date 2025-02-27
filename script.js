document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles
    particlesJS('particles', {
        particles: {
            number: { value: 80 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });

    // Text animation sequencing
    const animateElements = document.querySelectorAll('.animate-text');
    animateElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'fadeInUp 0.8s forwards';
        }, index * 300);
    });

    // Parallax effect
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 90;
        const y = (window.innerHeight - e.pageY * 2) / 90;
        document.querySelector('.love-card').style.transform = 
            `translateY(-10px) rotateX(${y}deg) rotateY(${x}deg)`;
    });

    // Audio on hover
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2857/2857-preview.mp3');
    document.querySelector('.love-card').addEventListener('mouseenter', () => {
        audio.play();
    });
});
// Add this to script.js
function updateCanvasHeight() {
    const canvas = document.getElementById('particles');
    const body = document.body;
    canvas.style.height = body.scrollHeight + 'px';
}

// Update on load and resize
window.addEventListener('load', updateCanvasHeight);
window.addEventListener('resize', updateCanvasHeight);

// Update when animations might change height
setTimeout(updateCanvasHeight, 1000);
