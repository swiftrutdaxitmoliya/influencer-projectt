module.exports = {
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/img/hero-pattern.svg')",
            }
        }
    },
};




document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    // Open mobile menu
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
    });

    // Close mobile menu
    menuClose.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });
});


function toggleFAQ(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '–';
    } else {
        content.classList.add('hidden');
        icon.textContent = '+';
    }
}