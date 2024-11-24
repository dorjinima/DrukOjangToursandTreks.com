'use strict';

/**
 * Navbar Toggle
 */

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector("[data-overlay]");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const navLinks = document.querySelectorAll("[data-nav-link]");

    const navElemArr = [navOpenBtn, navCloseBtn, overlay];

    const toggleNavbar = function() {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    };

    navElemArr.forEach(elem => {
        if (elem) {
            elem.addEventListener("click", toggleNavbar);
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", toggleNavbar);
    });
});

/**
 * Header Sticky & Go to Top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 200) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});
