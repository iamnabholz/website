let opened = false;

function openMenu() {
    document.getElementById("menu-button").classList.toggle("change");
    if (opened) {
        opened = false;
        document.getElementById("menu").style.display = "none";
    } else {
        opened = true;
        document.getElementById("menu").style.display = "block";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let root = document.documentElement;
    let height = (window.innerHeight - 80) + "px";
    root.style.setProperty('--viewport-height', height);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
        document.getElementById('works').classList.add("hide");
    } else {
        document.getElementById('works').classList.remove("hide");
    }
})