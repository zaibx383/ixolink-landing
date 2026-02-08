// ===================================
// Ixolink Landing Page JavaScript
// ===================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ===================================
// Navbar Scroll Effect
// ===================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Mobile Menu Toggle
// ===================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger icon
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Client Logos Animation
// ===================================

gsap.fromTo('.client-logos .section-header',
    {
        opacity: 0,
        y: 20
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.client-logos',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    }
);

// Update active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Hero Section Animation (GSAP)
// ===================================

gsap.fromTo('.hero-content',
    {
        opacity: 0,
        y: 40
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    }
);

// ===================================
// Value Cards Animation
// ===================================

gsap.utils.toArray('.value-card').forEach((card, index) => {
    gsap.fromTo(card,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: index * 0.1
        }
    );
});

// ===================================
// Mission & Vision Cards Animation
// ===================================

gsap.utils.toArray('.mv-card').forEach((card, index) => {
    gsap.fromTo(card,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: index * 0.15
        }
    );
});

// ===================================
// Service Cards Animation
// ===================================

gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.fromTo(card,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: index * 0.1
        }
    );
});

// ===================================
// Testimonials Carousel
// ===================================

const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentTestimonial = 0;

function showTestimonial(index) {
    // Remove active class from all cards and dots
    testimonialCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current card and dot
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');

    currentTestimonial = index;
}

function nextTestimonial() {
    let next = currentTestimonial + 1;
    if (next >= testimonialCards.length) {
        next = 0;
    }
    showTestimonial(next);
}

function prevTestimonial() {
    let prev = currentTestimonial - 1;
    if (prev < 0) {
        prev = testimonialCards.length - 1;
    }
    showTestimonial(prev);
}

// Event listeners for carousel controls
nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});

// Auto-rotate testimonials every 5 seconds
let testimonialInterval = setInterval(nextTestimonial, 5000);

// Pause auto-rotate on hover
const testimonialTrack = document.getElementById('testimonialTrack');
testimonialTrack.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

testimonialTrack.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

// ===================================
// Contact Form Animation
// ===================================

gsap.fromTo('.contact-info',
    {
        opacity: 0,
        x: -30
    },
    {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    }
);

gsap.fromTo('.contact-form-wrapper',
    {
        opacity: 0,
        x: 30
    },
    {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        delay: 0.2
    }
);

// ===================================
// Contact Form Submission
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log('Form submitted:', data);

    // Show success message (you can customize this)
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    contactForm.reset();
});

// ===================================
// Section Header Animations
// ===================================

gsap.utils.toArray('.section-header').forEach(header => {
    gsap.fromTo(header,
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );
});

// ===================================
// Parallax Effect for Hero Background
// ===================================

gsap.to('.hero-bg', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// ===================================
// Footer Animation
// ===================================

gsap.fromTo('.footer-grid',
    {
        opacity: 0,
        y: 30
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    }
);

// ===================================
// Utility: Debounce Function
// ===================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// Performance: Refresh ScrollTrigger on Resize
// ===================================

window.addEventListener('resize', debounce(() => {
    ScrollTrigger.refresh();
}, 250));

// ===================================
// Initialize: Show first testimonial
// ===================================

showTestimonial(0);

// ===================================
// Console Message
// ===================================

console.log('%c Ixolink Landing Page ', 'background: #7340FF; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('Data Driven Lead Generation & Web Data Solutions');
