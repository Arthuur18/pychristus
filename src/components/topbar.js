import Icons from "./icons";
import lightLogo from "../../assets/imgs/logo-light-theme.png";
import darkLogo from "../../assets/imgs/logo-dark-theme.png";

class Topbar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.toogleSidebar();
  }

  toogleSidebar() {
    const sidebarToggleBtn = this.shadow.querySelector(".menu-btn");
    const sidebar = document.querySelector("c-navbar").shadowRoot.querySelector(".sidebar");

    if (sidebarToggleBtn && sidebar) {
      sidebarToggleBtn.addEventListener("click", (event) => {
        event.preventDefault();
        sidebar.classList.toggle("open");
      });
    }
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        .top-bar {
            position: fixed;
            width: 100%;
            height: 64px;
            z-index: 50;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 var(--gutter);
            background-color: var(--color-surface);
            border-bottom: 1px solid var(--color-outline-variant);
            transition:
                background-color 0.3s,
                border-color 0.3s;
        }

        html.dark .top-bar {
            background-color: var(--color-inverse-surface);
        }

        .brand-container {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .brand-logo {
            height: 60px;
            width: auto;
        }

        .dark-logo {
            display: none;
        }

        .brand-name {
            color: var(--color-primary);
        }

        .menu-btn {
            background: none;
            border: none;
            padding: 0.5rem;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            color: var(--color-on-surface);
        }

        svg path {
          fill: var(--color-on-surface-variant);
        }

        @media (max-width: 1020px) {
            .menu-btn {
                display: block;
            }
        }

        .nav-link {
            color: var(--color-on-surface-variant);
            text-decoration: none;
            padding-bottom: 0.25rem;
            cursor: pointer;
            transition:
                color 0.2s,
                border-color 0.2s;
        }
        .nav-link:hover,
            .nav-link.active {
            color: var(--color-primary);
        }
        .nav-link.active {
            border-bottom: 2px solid var(--color-primary);
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-right: 45px;
        }

        .theme-toggle-btn {
            background: none;
            border: none;
            padding: 0.5rem;
            border-radius: var(--radius-full);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-on-surface-variant);
            transition: background-color 0.2s;

            .moon-icon {
              display: none;
            }
            
        }
            
        .theme-toggle-btn:hover {
            background-color: var(--color-surface-variant);
        }
      </style>
      
      <header class="top-bar">
      <div class="brand-container">
        <img
          alt="PyChristus Logo"
          class="brand-logo light-logo"
          src="${lightLogo}"
        />
        <img
          alt="PyChristus Logo"
          class="brand-logo dark-logo"
          src="${darkLogo}"
        />
        <span class="brand-name font-headline-md font-bold">PyChristus</span>
      </div>
      <div class="header-actions">
        <button class="theme-toggle-btn">
          <span class="sun-icon">${Icons.SunIcon()}</span>
          <span class="moon-icon">${Icons.MoonIcon()}</span>
        </button>
        <button class="menu-btn">
          <span>${Icons.MenuIcon()}</span>
        </button>
        
      </div>
    </header>
    `;
  }
}

customElements.define("c-topbar", Topbar);
