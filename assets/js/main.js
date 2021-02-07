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