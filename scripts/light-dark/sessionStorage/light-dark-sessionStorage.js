// Does not require GDPR compliance

const html = document.querySelector("html");
const mode = sessionStorage.getItem("mode");

if (mode === "light") switchLight();
if (mode === "dark") switchDark();

// three functions used by buttons and radios

function switchAuto() {
  html.style.setProperty("color-scheme", "light dark");
  sessionStorage.removeItem("mode");
}

function switchLight() {
  html.style.setProperty("color-scheme", "light");
  sessionStorage.setItem("mode", "light");
}

function switchDark() {
  html.style.setProperty("color-scheme", "dark");
  sessionStorage.setItem("mode", "dark");
}

// single function used by select element
function switchMode(mode) {
  html.style.setProperty("color-scheme", mode === "auto" ? "light dark" : mode);
  sessionStorage.setItem("mode", mode);
}