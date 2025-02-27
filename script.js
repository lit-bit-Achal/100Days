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

    // Text animations
    const animateElements = document.querySelectorAll('.animate-text');
    animateElements.forEach((el, index) => {
        setTimeout(() => el.style.animation = 'fadeInUp 0.8s forwards', index * 300);
    });

    // Signature animations
    setTimeout(() => {
        document.querySelector('.forever-text').style.animation = 'fadeInRight 1s forwards';
    }, 3500);

    setTimeout(() => {
        document.querySelector('.animated-signature').style.animation = 'signatureStroke 2s forwards';
    }, 4000);

    // Dynamic canvas height
    function updateCanvasHeight() {
        const canvas = document.getElementById('particles');
        canvas.style.height = document.documentElement.scrollHeight + 'px';
    }
    window.addEventListener('resize', updateCanvasHeight);
    updateCanvasHeight();
});
<script>
document.addEventListener('mousemove', (e) => {
                const emoji = document.createElement('div');
                emoji.className = 'emoji-trail';
                emoji.textContent = ['❤️', '🌹', '😘', '✨'][Math.floor(Math.random()*4)];
                emoji.style.left = `${e.clientX}px`;
                emoji.style.top = `${e.clientY}px`;
                document.body.appendChild(emoji);
                
                emoji.addEventListener('animationend', () => emoji.remove());
            });
  
</script>
