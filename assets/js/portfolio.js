let menu_overlay = document.querySelector('#menu-overlay');

function mobileMenuToogle() {
    menu_overlay.style.width = "100%";
}

function closeMobileMenu() {
    menu_overlay.style.width = "0";
}

let mobileMenuLinks = document.querySelectorAll('.menu-mobile li a');
for (let i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function () {
        closeMobileMenu();
    });
}