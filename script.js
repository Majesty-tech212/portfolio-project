// Smooth Scroll for Navigation
const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Scroll Animation for Sections
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('visible');
};

const debounce = (func, delay = 20) => {
    let timeout;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// Trigger animation check on load and scroll
window.addEventListener('DOMContentLoaded', handleScrollAnimation);
window.addEventListener('scroll', debounce(handleScrollAnimation));

// Button Hover Animation
const buttons = document.querySelectorAll('button, .btn');

const scaleElement = (element, scale, shadow) => {
    element.style.transform = `scale(${scale})`;
    element.style.boxShadow = shadow;
};

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        scaleElement(button, 1.05, '0 4px 8px rgba(0, 0, 0, 0.2)');
    });

    button.addEventListener('mouseleave', () => {
        scaleElement(button, 1, '0 2px 4px rgba(0, 0, 0, 0.1)');
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
});
