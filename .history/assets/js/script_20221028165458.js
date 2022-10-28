
/*navbar toggle*/

/*navbarLinks**/
let navLinks=document.querySelectorAll('[data-navbar-link]');
for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}