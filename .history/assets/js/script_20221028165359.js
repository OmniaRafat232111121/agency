
/*navbar toggle*/
let navOpenBtn=document.querySelector("[data-nav-open-btn]")
let navCloseBtn=document.querySelector("[data-nav-close-btn]")
let navData=document.querySelector("[data-nav]")
let navOvelay=document.querySelector("[data-overlay]")

let elementArr=["data-nav-btn-open","data-nav-btn-close","data-nav","data-overlay"];
for(let i=0;i<elementArr.length;i++){
    elementArr[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    })
}
/*navbarLinks**/
let navLinks=document.querySelectorAll('[data-navbar-link]');
for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}