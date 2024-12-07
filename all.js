
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');


    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
    });

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

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentUrl = window.location.pathname;

    navLinks.forEach((link) => {

        if (link.getAttribute("href") === currentUrl || link.getAttribute("href") === `.${currentUrl}`) {
            const icon = link.nextElementSibling;
            if (icon && icon.classList.contains("icon")) {
                icon.classList.remove("hidden");
            }
            link.style.color = '#3798BA';
            link.style.fontWeight = 'bold';
        }
    });
});
