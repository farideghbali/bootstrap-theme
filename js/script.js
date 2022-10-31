const nav = document.getElementById("custom-navigation");
window.addEventListener("scroll", function () {
    if (scrollY > 100) {
        nav.classList.add("navbar-shirink")
    } else {
        nav.classList.remove("navbar-shirink")
    }
})