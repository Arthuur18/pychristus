// Smooth scrolling for anchor links
// document.querySelectorAll("a").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     if (this.getAttribute("href").startsWith("#")) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute("href"));
//       if (target) {
//         target.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   });
// });

// Theme Toggle Logic
const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const htmlElement = document.documentElement;

function setTheme(theme) {
  const iconSpan = themeToggleBtn
    ? themeToggleBtn.querySelector(".material-symbols-outlined")
    : null;

  if (theme === "dark") {
    htmlElement.classList.remove("light");
    htmlElement.classList.add("dark");
    if (iconSpan) {
      iconSpan.textContent = "dark_mode";
    }
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.classList.remove("dark");
    htmlElement.classList.add("light");
    if (iconSpan) {
      iconSpan.textContent = "light_mode";
    }
    localStorage.setItem("theme", "light");
  }
}

function setLogo(theme) {
  const logo = document.querySelector(".brand-logo");

  const dynamicSourceLogo = `../assets/imgs/logo-${theme}-theme.png`;
  logo.src = dynamicSourceLogo;
}

// Initial theme load
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme);
setLogo(savedTheme);

// Toggle theme on button click
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
    setLogo(currentTheme === "dark" ? "light" : "dark");
  });
}
