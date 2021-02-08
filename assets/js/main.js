let opened = false;

function openMenu() {
    document.getElementById("menu-button").classList.toggle("change");
    document.getElementById("menu").classList.toggle("menu-open");

    if (opened) {
        opened = false;
        document.getElementById("header-title").style.color = "#0F245B";
    } else {
        opened = true;
        document.getElementById("header-title").style.color = "white";
    }
}

function copyEmail() {
    navigator.clipboard.writeText("hello@nabholz.work")
}

window.addEventListener('DOMContentLoaded', () => {
    let height = "height: " + (window.innerHeight - 80) + "px;";
    document.getElementById("hero").setAttribute("style", height);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
        document.getElementById('works').classList.add("hide");
    } else {
        document.getElementById('works').classList.remove("hide");
    }
})