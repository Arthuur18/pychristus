// Theme Toggle Logic
const htmlElement = document.documentElement;
const themeToggleBtn = document.querySelector("c-topbar").shadowRoot.querySelector(".theme-toggle-btn");
const logoDark = document.querySelector("c-topbar").shadowRoot.querySelector('.brand-logo.light-logo');
const logoLight = document.querySelector("c-topbar").shadowRoot.querySelector('.brand-logo.dark-logo');

function setLogo(currentTheme) {
  if (currentTheme === "dark") {
    logoLight.style.display = "none";
    logoDark.style.display = "block";
  } else {
    logoDark.style.display = "none";
    logoLight.style.display = "block";
  }
}

function setTheme(theme) {
  const sunIcon = document.querySelector("c-topbar").shadowRoot.querySelector(".sun-icon");
  const moonIcon = document.querySelector("c-topbar").shadowRoot.querySelector(".moon-icon");

  if (theme === "dark") {
    htmlElement.classList.remove("light");
    htmlElement.classList.add("dark");
    if (sunIcon) {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    }
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.classList.remove("dark");
    htmlElement.classList.add("light");
    if (moonIcon) {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
    localStorage.setItem("theme", "light");
  }
}

// Initial theme load
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme);
setLogo(savedTheme === "dark" ? "light" : "dark");

// Toggle theme on button click
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
    setLogo(currentTheme);
  });
}