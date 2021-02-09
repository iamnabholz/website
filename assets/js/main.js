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
    navigator.clipboard.writeText("lukas@nabholz.work")
}

if (window.location.pathname == "/") {
    window.addEventListener('DOMContentLoaded', () => {
        let rawHeight = window.innerHeight - 80;
        if (rawHeight < 500) {
            rawHeight = 500;
        }
        let height = "height: " + rawHeight + "px;";
        document.getElementById("hero").setAttribute("style", height);
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 15) {
            document.getElementById('works').classList.add("hide");
        } else {
            document.getElementById('works').classList.remove("hide");
        }
    })
}