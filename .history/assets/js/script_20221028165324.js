"use strict";
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
/*navbarLinks**/
let navLinks=document.querySelectorAll('[data-navbar-link]');
for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}