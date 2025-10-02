// Portfolio JavaScript - Smooth animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.project-card, .approach-item, .skill-category');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Advanced navbar scroll effect
    const navbar = document.querySelector('.nav');
    let lastScrollTop = 0;
    let ticking = false;

    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Keep navbar always visible
        navbar.classList.remove('hidden');
        
        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Enhanced project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        // Staggered animation on load
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.2)';
            
            // Add subtle rotation effect
            this.style.transform += ' rotateX(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
        });

        // Magnetic effect disabled to prevent movement
    });

    // Subtle parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const gradientArc = document.querySelector('.gradient-arc');
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        const scrollPercent = scrolled / heroHeight;
        
        if (hero && scrollPercent < 1) {
            // Very subtle parallax for hero content
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
                heroContent.style.opacity = 1 - scrollPercent * 0.3;
            }
            
            // Parallax for gradient arc
            if (gradientArc) {
                gradientArc.style.transform = `translateX(-50%) translateY(${scrolled * 0.1}px)`;
            }
        }
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateParallax();
                updateHeroTitleColor();
            });
            ticking = true;
        }
    });

    // Simple fade-in effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }

    // Hero title color fade effect on scroll
    function updateHeroTitleColor() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        
        // Calculate fade effect based on scroll position
        const fadeStart = heroHeight * 0.2; // Start fading at 20% of hero height
        const fadeEnd = heroHeight * 0.8;   // Complete fade at 80% of hero height
        
        // Debug log
        console.log('Scroll:', scrollTop, 'Hero Height:', heroHeight, 'Fade Start:', fadeStart, 'Fade End:', fadeEnd);
        
        if (scrollTop <= fadeStart) {
            heroTitle.style.color = '#1a1a1a'; // Original dark color
            console.log('Color: Dark');
        } else if (scrollTop >= fadeEnd) {
            heroTitle.style.color = '#cccccc'; // Light gray color
            console.log('Color: Light');
        } else {
            // Smooth transition between fadeStart and fadeEnd
            const fadeProgress = (scrollTop - fadeStart) / (fadeEnd - fadeStart);
            // Interpolate between dark (#1a1a1a) and light gray (#cccccc)
            const r = Math.round(26 + (204 - 26) * fadeProgress);
            const g = Math.round(26 + (204 - 26) * fadeProgress);
            const b = Math.round(26 + (204 - 26) * fadeProgress);
            heroTitle.style.color = `rgb(${r}, ${g}, ${b})`;
            console.log('Color: Interpolated', `rgb(${r}, ${g}, ${b})`, 'Progress:', fadeProgress);
        }
    }

    // Enhanced contact link animations
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach((link, index) => {
        // Staggered animation
        link.style.animationDelay = `${index * 0.1}s`;
        
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.02)';
            this.style.background = 'rgba(255, 255, 255, 0.05)';
            this.querySelector('.link-arrow').style.transform = 'translateX(8px) scale(1.2)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.background = 'transparent';
            this.querySelector('.link-arrow').style.transform = 'translateX(0) scale(1)';
        });
    });

    // Mobile menu toggle (if needed)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Smooth reveal animation for sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Cursor trail effect (optional)
    let mouseX = 0, mouseY = 0;
    let ballX = 0, ballY = 0;
    const speed = 0.1;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        ballX += (mouseX - ballX) * speed;
        ballY += (mouseY - ballY) * speed;
        
        // Create cursor trail effect
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = ballX + 'px';
        trail.style.top = ballY + 'px';
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
        
        requestAnimationFrame(animate);
    }
    
    // Uncomment to enable cursor trail
    // animate();

    // Loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero elements
        const heroElements = document.querySelectorAll('.hero-title, .hero-cta');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 6px;
        background: linear-gradient(90deg, #1a1a1a, #666);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Add smooth transitions to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .contact-link');
    interactiveElements.forEach(el => {
        el.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to scroll events
    const throttledScroll = throttle(function() {
        // Scroll-based animations here
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScroll);

    // Add enhanced CSS for advanced animations
    const style = document.createElement('style');
    style.textContent = `
        .cursor-trail {
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(26, 26, 26, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: trailFade 1s ease-out forwards;
        }
        
        @keyframes trailFade {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .section-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
        }
        
        .nav.hidden {
            transform: translateY(-100%);
        }
        
        body.loaded .hero-title,
        body.loaded .hero-cta {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero-title,
        .hero-cta {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }
        
        .project-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .contact-link {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Smooth scrolling enhancement */
        html {
            scroll-behavior: smooth;
        }
        
        /* Performance optimizations */
        .nav, .hero, .project-card, .contact-link {
            will-change: transform;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Fade up animation for project pages
    function initFadeUpAnimation() {
        const fadeElements = document.querySelectorAll('.fade-up');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Initialize fade up animation
    initFadeUpAnimation();

    console.log('Portfolio loaded successfully! 🚀');
});
