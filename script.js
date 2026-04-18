document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATA INJECTION ---
    
    // 1. Hero
    const heroCmd = document.getElementById('hero-command');
    const heroOutput = document.getElementById('hero-output');
    const nextPrompt = document.getElementById('next-prompt');
    
    heroCmd.textContent = PORTFOLIO_DATA.hero.command;
    document.getElementById('hero-match').textContent = PORTFOLIO_DATA.hero.matchLine;
    document.getElementById('hero-name').textContent = PORTFOLIO_DATA.hero.name;
    document.getElementById('hero-title').textContent = PORTFOLIO_DATA.hero.title;
    document.getElementById('hero-subtitle').textContent = PORTFOLIO_DATA.hero.subtitle;

    // 2. About
    const aboutContainer = document.getElementById('about-container');
    PORTFOLIO_DATA.about.forEach(paragraph => {
        const p = document.createElement('p');
        p.innerHTML = `<span class="prompt">></span> ${paragraph}`;
        aboutContainer.appendChild(p);
    });

    // 3. Skills
    const skillsContainer = document.getElementById('skills-container');
    PORTFOLIO_DATA.skills.forEach(skillCategory => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category terminal-box fade-up';
        
        let itemsHtml = '';
        skillCategory.items.forEach(item => {
            if(item.match) {
                itemsHtml += `<li><span class="match">${item.name}</span></li>`;
            } else {
                itemsHtml += `<li>${item.name}</li>`;
            }
        });

        categoryDiv.innerHTML = `
            <h3><i class="${skillCategory.icon}"></i> ${skillCategory.category}</h3>
            <ul>${itemsHtml}</ul>
        `;
        skillsContainer.appendChild(categoryDiv);
    });

    // 4. Experience
    const expContainer = document.getElementById('experience-container');
    PORTFOLIO_DATA.experience.forEach(job => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'timeline-item fade-up';
        itemDiv.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content terminal-box">
                <h3>${job.title}</h3>
                <h4>${job.company} <span>[${job.date}]</span></h4>
                <p>${job.description}</p>
            </div>
        `;
        expContainer.appendChild(itemDiv);
    });

    // 5. Research & Publications
    const researchContainer = document.getElementById('research-container');
    if (PORTFOLIO_DATA.publications && PORTFOLIO_DATA.publications.length > 0) {
        PORTFOLIO_DATA.publications.forEach(pub => {
            const a = document.createElement('a');
            a.href = pub.link;
            a.target = "_blank";
            a.className = 'cert-card terminal-box fade-up';
            a.innerHTML = `
                <i class="${pub.icon} cert-icon" style="color: var(--accent);"></i>
                <h3>${pub.title}</h3>
                <p style="color: var(--accent-cyan); font-size: 0.8rem; margin-bottom: 10px;">${pub.publisher}</p>
                <p style="text-align: left; border-top: 1px dashed var(--bg-tertiary); padding-top: 10px;">${pub.description}</p>
                <span class="verify-link" style="display:block; margin-top:15px;">[ Read Paper ]</span>
            `;
            researchContainer.appendChild(a);
        });
    }

    // 6. Certifications
    const certsContainer = document.getElementById('certs-container');
    PORTFOLIO_DATA.certifications.forEach(cert => {
        const a = document.createElement('a');
        a.href = cert.link;
        a.target = "_blank";
        a.className = 'cert-card terminal-box fade-up';
        a.innerHTML = `
            <i class="${cert.icon} cert-icon"></i>
            <h3>${cert.title}</h3>
            <p>${cert.issuer}</p>
            <span class="verify-link">[ Verify Output ]</span>
        `;
        certsContainer.appendChild(a);
    });

    // 6. Recommendations
    const recsContainer = document.getElementById('recs-container');
    PORTFOLIO_DATA.recommendations.forEach(rec => {
        const div = document.createElement('div');
        div.className = 'rec-card terminal-box fade-up';
        
        // Generate a fake Git commit hash for the DevOps vibe
        const fakeCommit = Math.random().toString(16).substr(2, 7);

        div.innerHTML = `
            <div class="rec-meta">
                <span class="log-level" style="color: var(--accent);">[PIPELINE: SUCCESS]</span>
                <span class="timestamp">COMMIT: ${fakeCommit}</span>
            </div>
            <div class="rec-header">
                <h3><i class="fas fa-fingerprint"></i> <a href="${rec.link}" target="_blank">${rec.name}</a></h3>
                <p class="rec-title">> ${rec.title}</p>
            </div>
            <div class="rec-payload">
                <p class="rec-text">${rec.text}</p>
            </div>
        `;
        recsContainer.appendChild(div);
    });

    // 7. Contact
    const emailBtn = document.getElementById('contact-email-btn');
    emailBtn.href = `mailto:${PORTFOLIO_DATA.contact.email}`;
    emailBtn.innerHTML = `> send_message --to ${PORTFOLIO_DATA.contact.email}`;
    
    document.getElementById('contact-linkedin').href = PORTFOLIO_DATA.contact.linkedin;
    document.getElementById('contact-email').href = `mailto:${PORTFOLIO_DATA.contact.email}`;


    // --- ANIMATIONS & INTERACTIONS ---

    // Typewriter
    let charIndex = 0;
    const commandText = PORTFOLIO_DATA.hero.command;
    heroCmd.textContent = ''; // clear it before typing
    
    function typeCommand() {
        if (charIndex < commandText.length) {
            heroCmd.textContent += commandText.charAt(charIndex);
            charIndex++;
            const speed = Math.random() * 70 + 30;
            setTimeout(typeCommand, speed);
        } else {
            setTimeout(() => {
                heroOutput.classList.remove('hidden');
                setTimeout(() => {
                    nextPrompt.classList.remove('hidden');
                }, 500); 
            }, 800);
        }
    }
    
    setTimeout(typeCommand, 1000);

    // Scroll Reveal
    const fadeUpElements = document.querySelectorAll('.fade-up, .section-title');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    // Ensure elements have fade-up class
    document.querySelectorAll('.section-title').forEach(el => el.classList.add('fade-up'));
    
    // Slight delay to allow JS injection to finish before observing
    setTimeout(() => {
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    }, 100);

    // Smooth Scrolling
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

    // Mobile Menu
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

    // Theme Toggle Logic
    const themeCheckbox = document.getElementById('theme-toggle-checkbox');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    // Check saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if(themeCheckbox) themeCheckbox.checked = true;
        if(moonIcon) moonIcon.style.color = 'var(--text-secondary)';
        if(sunIcon) sunIcon.style.color = 'var(--accent)';
    }

    if(themeCheckbox) {
        themeCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.add('light-theme');
                localStorage.setItem('portfolio-theme', 'light');
                moonIcon.style.color = 'var(--text-secondary)';
                sunIcon.style.color = 'var(--accent)';
            } else {
                document.body.classList.remove('light-theme');
                localStorage.setItem('portfolio-theme', 'dark');
                moonIcon.style.color = 'var(--accent)';
                sunIcon.style.color = 'var(--text-secondary)';
            }
        });
    }
});
