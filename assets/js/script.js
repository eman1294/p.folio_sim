// navbar chanhing color
let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.replace("bg-transperent", "navbar-replacment")
    }
});
window.addEventListener("scroll", function () {
    if (window.scrollY <= 50) {
        navbar.classList.replace("navbar-replacment", "bg-transperent")
    }
});

/*-------------------------------------------------------------------*/
//loading screen
let body = document.body;
body.style.overflow = "hidden";
document.querySelector(".loading").style.opacity = "1";
document.querySelector(".loading").style.visibility = "visible";
document.querySelector(".loading").style.transition = "1s";

window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loading").style.opacity = "0";
        document.querySelector(".loading").style.visibility = "hidden";
        document.querySelector(".loading").style.transition = "1s";
        body.style.overflow = "scroll";
    }, 2000);

})
/*-------------------------------------------------------------------*/
// up icon move to the top of the page
let up = document.querySelector(".up");
up.style.opacity = '0';
up.style.visibility = "hidden";
up.style.transition = ".3s"
window.addEventListener('scroll', function () {
    let about_position = this.document.getElementById("about").offsetTop;
    if (window.scrollY >= about_position) {
        up.style.opacity = '1';
        up.style.visibility = "visible";
        up.style.transition = ".3s"
    }
    else if (window.scrollY < about_position) {
        up.style.opacity = '0';
        up.style.visibility = "hidden";
        up.style.transition = ".3s"
    }
})
let up_btn = document.getElementById("up_btn");
up_btn.addEventListener("click", function () {
    window.scroll({
    top : 0,
    behavior:"smooth"
    });
});