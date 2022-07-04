const now = new Date();

const current = now.toLocaleTimeString('default', {
  timeZone: "America/La_Paz",
  // en-US can be set to 'default' to use user's browser settings
  hour: 'numeric',
  minute: '2-digit',
});

//document.getElementById("current-time").innerHTML = current;