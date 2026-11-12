import Icons from "./icons.js";

class Admonition extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(t) {
    this.setAttribute("type", t);
  }

  get content() {
    return this.getAttribute("content");
  }

  set content(c) {
    this.setAttribute("content", c);
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["type", "content"];
  }

  render() {
    this.shadow.innerHTML = `
        <style>
          /* Admonitions / Callouts */
          .admonition {
            padding: 1.5rem;
            display: flex;
            gap: 1rem;
            border-left: 4px solid;
            border-top-right-radius: var(--radius-lg);
            border-bottom-right-radius: var(--radius-lg);
          }
          .admonition-info {
            background-color: var(--color-surface-container-highest);
            border-left-color: var(--color-primary);
          }

          .admonition-info svg {
            fill: var(--color-on-surface-variant);
          }

          .admonition-danger {
            background-color: var(--color-error-container);
            border-left-color: #ef4444;
            margin-top: 2rem;
          }

          .admonition-danger svg {
            fill: #ef4444;
          }

          .admonition-icon {
            flex-shrink: 0;
          }
          .admonition-title {
            margin: 0 0 0.25rem 0;
            font-weight: 600;
            color: var(--color-on-surface);
          }
          .admonition-text {
            margin: 0;
            color: var(--color-on-surface-variant);
          }
        </style>
        <div class="admonition ${this.type === "learning tip" ? "admonition-info" : "admonition-danger"}">
            <span class="material-symbols-outlined admonition-icon"
            style="font-variation-settings: &quot;FILL&quot; 1"
            >${this.type === "learning tip" ? Icons.LampIcon() : Icons.ErrorIcon()}</span
            >
            <div class="admonition-content">
              <p class="admonition-title font-body-md">${this.type === "learning tip" ? "Dica de aprendizado" : "Erro comum"}</p>
              <p class="admonition-text font-body-sm">
                  ${this.content}
              </p>
            </div>
        </div>
    `;
  }
}

customElements.define("c-admonition", Admonition);
