// JavaScript for the portfolio website

// 1. Scroll-up Button functionality
const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 2. Toggle Mobile Menu (Hamburger Menu)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// 3. Typing Effect for the Home Section
const typingText = document.querySelector('.typing');
const typingText2 = document.querySelector('.typing-2');

const typeWriter = (text, element, speed) => {
    let i = 0;
    let txt = '';
    let isDeleting = false;

    function type() {
        const currentText = text.slice(0, i);
        element.textContent = currentText;

        if (isDeleting) {
            i--;
        } else {
            i++;
        }

        if (!isDeleting && i === text.length) {
            isDeleting = true;
            setTimeout(type, 1500);  // Pause before deleting
        } else if (isDeleting && i === 0) {
            isDeleting = false;
            setTimeout(type, 1500);  // Pause before typing again
        } else {
            setTimeout(type, speed);
        }
    }

    type();
};

// Initialize typing effects
const homeText = "Welcome to my portfolio!";
const aboutMeText = "Front End Developer & Engineer";

typeWriter(homeText, typingText, 150);
typeWriter(aboutMeText, typingText2, 100);

// 4. Owl Carousel functionality for Teams Section (Certificates Carousel)
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,  // Number of items to display
        margin: 10,  // Space between items
        loop: true,  // Infinite loop
        autoplay: true,  // Autoplay
        autoplayTimeout: 3000,  // Time between auto slides
        autoplayHoverPause: true,  // Pause on hover
        responsive: {
            0: {
                items: 1,  // 1 item on small screens
            },
            768: {
                items: 2,  // 2 items on medium screens
            },
            1024: {
                items: 3,  // 3 items on larger screens
            }
        }
    });
});
