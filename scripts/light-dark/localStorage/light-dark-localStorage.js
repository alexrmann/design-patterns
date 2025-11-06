// Requires GDPR compliance

const html = document.querySelector("html");
const mode = localStorage.getItem("mode");

if (mode === "light") switchLight();
if (mode === "dark") switchDark();

// three functions used by buttons and radios

function switchAuto() {
  html.style.setProperty("color-scheme", "light dark");
  localStorage.removeItem("mode");
}

function switchLight() {
  html.style.setProperty("color-scheme", "light");
  localStorage.setItem("mode", "light");
}

function switchDark() {
  html.style.setProperty("color-scheme", "dark");
  localStorage.setItem("mode", "dark");
}

// single function used by select element
function switchMode(mode) {
  html.style.setProperty("color-scheme", mode === "auto" ? "light dark" : mode);
  localStorage.setItem("mode", mode);
}