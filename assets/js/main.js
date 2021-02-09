let opened = false;

function openMenu() {
    document.getElementById("menu-button").classList.toggle("change");
    document.getElementById("menu").classList.toggle("menu-open");

    if (opened) {
        opened = false;
        document.getElementById("header-title").style.color = "#0F245B";
        document.querySelector("body").style.overflow = 'visible';
    } else {
        opened = true;
        document.getElementById("header-title").style.color = "white";
        document.querySelector("body").style.overflow = 'hidden';
    }
}

function copyEmail(element) {
    var noti = document.getElementById("noti");
    noti.style.display = "block";
    noti.style.left = element.offsetLeft + "px";
    noti.style.top = element.offsetTop + (element.clientHeight * 1.2) + "px";
    navigator.clipboard.writeText("lukas@nabholz.work");
    setTimeout(function () {
        noti.style.display = "none";
    }, 1200);
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