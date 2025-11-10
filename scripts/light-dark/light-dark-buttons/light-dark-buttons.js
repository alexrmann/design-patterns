const html = document.querySelector('html');

// three functions used by buttons and radios
function switchAuto() {
  html.style.setProperty("color-scheme", "light dark");
}
function switchLight() {
  html.style.setProperty("color-scheme", "light");
}
function switchDark() {
  html.style.setProperty("color-scheme", "dark");
}
