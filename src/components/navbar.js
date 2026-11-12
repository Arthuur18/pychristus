import router from "../main.js";
import Icons from "./icons.js";

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.resolveLinkBehavior();
    this.setActiveLink();
  }

  resolveLinkBehavior() {
    const anchors = this.shadow.querySelectorAll("a");

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        const href = this.getAttribute("href");
        event.preventDefault();

        router.navigate(href);
      });
    });
  }

  setActiveLink() {
    const links = this.shadow.querySelectorAll(".sidebar-link");

    links.forEach((link) => {
      link.addEventListener("click", function () {
        links.forEach((link) => link.classList.remove("active"));
        if (link.getAttribute("href") === router.currentRoute) {
          link.classList.add("active");
        }
      });
    });
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        .sidebar {
            display: flex;
            flex-direction: column;
            padding: 1rem 0;
            gap: 0.5rem;
            position: fixed;
            left: 0;
            top: 64px;
            width: var(--sidebar-width);
            height: calc(100vh - 64px);
            background-color: var(--color-surface-container-low);
            border-right: 1px solid var(--color-outline-variant);
            overflow-y: auto;
            z-index: 40;
        }
            
        @media (max-width: 1024px) {
            .sidebar {
                display: none;
            }
        }

        .open {
          display: flex;
        }

        .sidebar-header {
            padding: 0 1.5rem;
            margin-bottom: 1.5rem;
        }

        .sidebar-title {
            margin: 0;
            color: var(--color-on-surface);
        }

        .sidebar-subtitle {
            margin: 0.25rem 0 0 0;
            color: var(--color-on-surface-variant);
        }

        .sidebar-menu {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .sidebar-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem 1rem;
            text-decoration: none;
            color: var(--color-on-surface-variant);
            transition:
                background-color 0.15s,
                color 0.15s;
        }

        .sidebar-link:hover {
            background-color: var(--color-surface-variant);
        }

        .sidebar-link.active {
            color: var(--color-on-primary);
            background-color: var(--color-primary);

            svg path {
                fill: var(--color-on-primary);
            }
        }

        .sidebar-link svg {
            fill: var(--color-on-surface-variant);
        }
      </style>
      
      <aside class="sidebar">
        <div class="sidebar-header">
          <h3 class="sidebar-title font-headline-sm font-bold">Documentação</h3>
          <p class="sidebar-subtitle font-label-md">Guia do Iniciante</p>
        </div>
        <nav class="sidebar-menu">
          <a class="sidebar-link font-label-md" href="/">
            ${Icons.InfoIcon()}
            <span class="sidebar-link-text">Introdução</span>
          </a>
          <a class="sidebar-link font-label-md" href="/fundamentals">
            ${Icons.OpenBookIcon()}
            <span class="sidebar-link-text">Fundamentos</span>
          </a>
          <a class="sidebar-link font-label-md" href="/flow-control">
            ${Icons.FlowIcon()}
            <span class="sidebar-link-text">Controle de Fluxo</span>
          </a>
          <a class="sidebar-link font-label-md" href="/loops">
            ${Icons.LoopIcon()}
            <span class="sidebar-link-text">Estruturas de Repetição</span>
          </a>
          <a class="sidebar-link font-label-md" href="/data-structures">
            ${Icons.BarsIcon()}
            <span class="sidebar-link-text">Estruturas de Dados</span>
          </a>
          <a class="sidebar-link font-label-md" href="/functions">
            ${Icons.FuncIcon()}
            <span class="sidebar-link-text">Funções</span>
          </a>
          <a class="sidebar-link font-label-md" href="/exercises">
            ${Icons.ExercisesIcon()}
            <span class="sidebar-link-text">Exercícios</span>
          </a>
        </nav>
      </aside>
    `;
  }
}

customElements.define("c-navbar", Navbar);
