// Animations JavaScript

// Scroll Animation Observer
const observeElements = (selector, className = 'animated') => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
};

// Apply scroll animations to various elements
document.addEventListener('DOMContentLoaded', () => {
    // Add animate-on-scroll class to elements that should animate
    const animatedElements = [
        '.problem-card',
        '.feature-box',
        '.product-card',
        '.team-member',
        '.spec-item',
        '.contact-item'
    ];

    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('animate-on-scroll');
        });
    });

    // Observe all elements with animate-on-scroll class
    observeElements('.animate-on-scroll', 'animated');
});

// Stagger Animation for Lists
const staggerAnimation = (selector, delay = 100) => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.children;
                Array.from(items).forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        item.style.transition = 'all 0.6s ease';

                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    }, index * delay);
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
};

// Apply stagger animation to specific containers
staggerAnimation('.problem-grid', 150);
staggerAnimation('.solution-features', 120);
staggerAnimation('.product-features', 80);

// Parallax Effect
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
});

// Hover Card Effect (3D tilt)
const cards = document.querySelectorAll('.problem-card, .feature-box, .product-card, .team-member');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Text Reveal Animation
const revealText = (selector) => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                entry.target.textContent = '';
                entry.target.style.opacity = '1';

                let charIndex = 0;
                const interval = setInterval(() => {
                    if (charIndex < text.length) {
                        entry.target.textContent += text[charIndex];
                        charIndex++;
                    } else {
                        clearInterval(interval);
                    }
                }, 30);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
};

// Apply text reveal to specific headings (optional)
// revealText('.section-title');

// Ripple Effect on Buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Loading Animation (if needed)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Fade out loading screen if you have one
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }
});

// Number Counter with Easing
const easeOutQuad = (t) => t * (2 - t);

const animateValue = (element, start, end, duration) => {
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const startTime = Date.now();

    const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);

        current = start + (range * easedProgress);
        element.textContent = Math.floor(current);

        if (progress === 1) {
            clearInterval(timer);
            element.textContent = end;
        }
    }, 16); // ~60fps
};

// Image Lazy Load with Fade In
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('fade-in');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Scroll Progress Indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, #E94560, #ff6b81);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();
