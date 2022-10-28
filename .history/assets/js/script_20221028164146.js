"use strict";
/*navbar toggle*/
let navOpenBtn=document.querySelector("[data-nav-btn-open]")
let navCloseBtn=document.querySelector("[data-nav-btn-close]")
let navData=document.querySelector("[data-nav]")
let navOvelay=document.querySelector("[data-overlay]")

let elementArr=["data-nav-btn-open","data-nav-btn-close","data-nav","data-overlay"];
for(let i=0;i<elementArr.length;i++){
    elementArr[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active")
    })
}
/*nav
let navLink=document.querySelector('[data-navbar-link]');
for(let i=0;i<navLink.length;i++){
    navLink[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active")
    })
}