// Scroll Effects JavaScript

// Smooth Reveal on Scroll
class ScrollReveal {
    constructor(options = {}) {
        this.options = {
            threshold: options.threshold || 0.15,
            rootMargin: options.rootMargin || '0px',
            reset: options.reset || false
        };

        this.observer = new IntersectionObserver(
            this.handleIntersect.bind(this),
            this.options
        );

        this.elements = [];
    }

    handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                if (!this.options.reset) {
                    this.observer.unobserve(entry.target);
                }
            } else if (this.options.reset) {
                entry.target.classList.remove('is-visible');
            }
        });
    }

    reveal(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add('scroll-reveal');
            this.observer.observe(el);
            this.elements.push(el);
        });
    }

    destroy() {
        this.elements.forEach(el => {
            this.observer.unobserve(el);
        });
        this.elements = [];
    }
}

// Initialize scroll reveal
const scrollReveal = new ScrollReveal({
    threshold: 0.15,
    reset: false
});

// Add scroll reveal to elements
document.addEventListener('DOMContentLoaded', () => {
    scrollReveal.reveal('.section-header');
    scrollReveal.reveal('.problem-card');
    scrollReveal.reveal('.feature-box');
    scrollReveal.reveal('.product-showcase');
    scrollReveal.reveal('.team-member');
    scrollReveal.reveal('.contact-item');
});

// Add CSS for scroll reveal
const scrollRevealStyles = document.createElement('style');
scrollRevealStyles.textContent = `
    .scroll-reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .scroll-reveal.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(scrollRevealStyles);

// Parallax Scroll Effect
const parallaxScroll = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;

        if (scrolled <= heroHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / heroHeight);
        }
    });
};

parallaxScroll();

// Hide/Show Navbar on Scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Scroll Spy for Navigation
const scrollSpy = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(section => observer.observe(section));
};

scrollSpy();

// Add active state styles
const scrollSpyStyles = document.createElement('style');
scrollSpyStyles.textContent = `
    .nav-menu a.active {
        color: var(--highlight);
        background: rgba(233, 69, 96, 0.1);
    }
`;
document.head.appendChild(scrollSpyStyles);

// Scroll to Top on Page Load (for hash links)
if (window.location.hash) {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 1);

    setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// Detect Scroll Direction
let scrollDirection = 'down';
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        scrollDirection = 'down';
    } else if (currentScroll < lastScroll) {
        scrollDirection = 'up';
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;

    // You can use scrollDirection for custom effects
    document.body.setAttribute('data-scroll-direction', scrollDirection);
});

// Scroll Performance Optimization
let ticking = false;

const scrollHandler = () => {
    // Your scroll logic here
    console.log('Optimized scroll handler');
    ticking = false;
};

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(scrollHandler);
        ticking = true;
    }
});

// Section Fade In/Out Based on Scroll Position
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '-50px'
});

sections.forEach(section => {
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});

// Scroll-based Animation Trigger
const triggerAnimation = (element, animationClass) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(element);
};

// Example: Trigger pulse animation on stats
document.querySelectorAll('.stat-item').forEach(stat => {
    triggerAnimation(stat, 'pulse');
});

// Console log for debugging
console.log('Scroll effects initialized');
