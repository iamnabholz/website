// GET CURRENT LOCAL TIME AND DISPLAY IT
const now = new Date();

const current = now.toLocaleTimeString('default', {
  timeZone: "America/La_Paz",
  // en-US can be set to 'default' to use user's browser settings
  hour: 'numeric',
  minute: '2-digit',
});

document.getElementById("current-time").innerHTML = current;

// HIDE ARROW INDICATOR ON SCROLL
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    document.getElementById('work').classList.add("hide");
  } else {
    document.getElementById('work').classList.remove("hide");
  }

  elementInViewport();
});

window.addEventListener('load', () => {
  elementInViewport();
})

var elements = document.getElementsByClassName("appear");

function elementInViewport(value) {
  for (let i = 0; i < elements.length; i++) {
    const myElement = elements[i];
    var bounding = myElement.getBoundingClientRect();
    var myElementHeight = (myElement.offsetHeight -= 120);
    var myElementWidth = myElement.offsetWidth;

    var bounding = myElement.getBoundingClientRect();

    if (bounding.top >= -myElementHeight
      && bounding.left >= -myElementWidth
      && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

      myElement.classList.remove("hidden");
    } else {
      if (window.scrollY < bounding.top) {
        myElement.classList.add("hidden");
      }
    }
  }
}