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
});