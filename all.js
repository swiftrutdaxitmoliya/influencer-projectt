// toggle Button
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


// toggle pop-up
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


// header color and bold
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


// Select all the tabs and contents
const descriptionTab = document.getElementById('description-tab');
const scheduleTab = document.getElementById('schedule-tab');
const reviewsTab = document.getElementById('reviews-tab');

const descriptionContent = document.getElementById('description-content');
const scheduleContent = document.getElementById('schedule-content');
const reviewsContent = document.getElementById('reviews-content');

function showTabContent(activeTab, activeContent) {

    const tabs = [descriptionTab, scheduleTab, reviewsTab];
    const contents = [descriptionContent, scheduleContent, reviewsContent];


    tabs.forEach(tab => {
        tab.classList.remove('bg-[#3798BA]', 'text-white');
        tab.classList.add('bg-[#71717112]', 'text-[#717171]');
    });
    contents.forEach(content => content.classList.add('hidden'));


    activeTab.classList.add('bg-[#3798BA]', 'text-white');
    activeTab.classList.remove('bg-[#71717112]', 'text-[#717171]');
    activeContent.classList.remove('hidden');
}


descriptionTab.addEventListener('click', () => showTabContent(descriptionTab, descriptionContent));
scheduleTab.addEventListener('click', () => showTabContent(scheduleTab, scheduleContent));
reviewsTab.addEventListener('click', () => showTabContent(reviewsTab, reviewsContent));


showTabContent(descriptionTab, descriptionContent);