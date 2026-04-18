document.addEventListener('DOMContentLoaded', () => {
    // 1. Terminal Typewriter Effect
    const typingText = document.querySelector('.typing-text-1');
    const heroOutput = document.getElementById('hero-output');
    const nextPrompt = document.getElementById('next-prompt');
    
    // Save the original text and clear it
    const commandText = typingText.textContent;
    typingText.textContent = '';
    
    let charIndex = 0;
    
    function typeCommand() {
        if (charIndex < commandText.length) {
            typingText.textContent += commandText.charAt(charIndex);
            charIndex++;
            // Random typing speed between 30ms and 100ms for realism
            const speed = Math.random() * 70 + 30;
            setTimeout(typeCommand, speed);
        } else {
            // Finished typing, simulate processing delay before showing output
            setTimeout(() => {
                heroOutput.classList.remove('hidden');
                setTimeout(() => {
                    nextPrompt.classList.remove('hidden');
                }, 500); // Show next prompt slightly after output
            }, 800);
        }
    }
    
    // Start typing after short delay
    setTimeout(typeCommand, 1000);

    // 2. Scroll Reveal Animations
    const fadeUpElements = document.querySelectorAll('.terminal-box, .section-title');

    fadeUpElements.forEach(el => {
        el.classList.add('fade-up');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    fadeUpElements.forEach(el => {
        observer.observe(el);
    });

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const yOffset = -80; 
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });

    // 4. Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'var(--bg-secondary)';
            navLinks.style.border = '1px solid var(--bg-tertiary)';
            navLinks.style.padding = '20px';
            navLinks.style.width = '200px';
        });
    }
});
