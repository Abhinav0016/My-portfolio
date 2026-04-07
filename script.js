document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Smooth Scrolling for Mobile Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Dummy (Simplified)
    const menuBtn = id('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            alert('Mobile menu clicked! In a full implementation, this would toggle a sidebar.');
        });
    }

    function id(name) {
        return document.getElementById(name);
    }

    // Contact Form submission handling (Removing preventDefault to allow Google Form POST)
    const contactForm = document.querySelector('.contact-form');
    // If you want to use AJAX/fetch instead of a full page redirect, you would handle that here.
    // For now, we allow the standard Google Forms redirect.
});
