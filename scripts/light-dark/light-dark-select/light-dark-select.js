const html = document.querySelector('html');

// single function used by select element
function switchMode(mode) {
  html.style.setProperty("color-scheme", mode === "auto" ? "light dark" : mode);
}