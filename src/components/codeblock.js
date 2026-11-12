class CodeBlock extends HTMLElement {
  COPY_LABEL = "Copiar";
  COPIED_LABEL = "Copiado!";
  RESET_DELAY = 2000;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get code() {
    return this.getAttribute("code");
  }

  set code(c) {
    this.setAttribute("code", c);
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["code"];
  }

  async copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    // Fallback para contextos não seguros (http)
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        .code-block {
            --cb-bg: #000000;
            --cb-header-bg: #111111;
            --cb-border: #2a2a2a;
            --cb-text: #e6e6e6;
            --cb-comment: #4ade80;   /* verde */
            --cb-keyword: #ff79c6;   /* rosa */
            --cb-string: #f1fa8c;    /* amarelo claro */
            --cb-number: #ffb86c;    /* laranja */
            --cb-function: #8be9fd;  /* ciano */
            --cb-operator: #bd93f9;  /* roxo claro */

            background: var(--cb-bg);
            border: 1px solid var(--cb-border);
            border-radius: 10px;
            overflow: hidden;
            margin: 1.5rem 0;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
            }

        /* Barra superior */
        .code-block__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            background: var(--cb-header-bg);
            border-bottom: 1px solid var(--cb-border);
        }

        /* Pontos estilo macOS (apenas decorativos) */
        .code-block__dots {
            display: flex;
            gap: 8px;
        }
    
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: inline-block;
        }

        .dot--red    { background: #ff5f57; }
        .dot--yellow { background: #febc2e; }
        .dot--green  { background: #28c840; }

        /* Botão de copiar */
        .code-block__copy {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 5px 10px;
            font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
            font-size: 12px;
            color: #b5b5b5;
            background: transparent;
            border: 1px solid var(--cb-border);
            border-radius: 6px;
            cursor: pointer;
            transition: color 0.2s, border-color 0.2s, background 0.2s;
        }

        .code-block__copy:hover {
            color: #ffffff;
            border-color: #555555;
            background: rgba(255, 255, 255, 0.06);
        }

        .code-block__copy:focus-visible {
            outline: 2px solid var(--cb-function);
            outline-offset: 2px;
        }

        .code-block__copy.is-copied {
            color: var(--cb-comment);
            border-color: var(--cb-comment);
        }
            
        /* Área do código */
        .code-block__pre {
            margin: 0;
            padding: 16px 18px;
            overflow-x: auto;
            background: var(--cb-bg);
        }

        .code-block__code {
            font-family: "Fira Code", "JetBrains Mono", Consolas, "Courier New", monospace;
            font-size: 14px;
            line-height: 1.65;
            color: var(--cb-text);
            tab-size: 4;
        }

        /* Realce de sintaxe */
        .code-block .comment  { color: var(--cb-comment); font-style: italic; }
        .code-block .keyword  { color: var(--cb-keyword); }
        .code-block .string   { color: var(--cb-string); }
        .code-block .number   { color: var(--cb-number); }
        .code-block .function { color: var(--cb-function); }
        .code-block .operator { color: var(--cb-operator); }
      </style>
      <div class="code-block">
        <div class="code-block__header">
            <div class="code-block__dots" aria-hidden="true">
            <span class="dot dot--red"></span>
            <span class="dot dot--yellow"></span>
            <span class="dot dot--green"></span>
            </div>

            <button class="code-block__copy" type="button" aria-label="Copiar código">
            <svg class="code-block__icon" viewBox="0 0 24 24" width="14" height="14" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="code-block__copy-label">Copiar</span>
            </button>
        </div>

        ${this.code}
     </div>
    `;

    document.addEventListener("click", async () => {
      const button = this.shadow.querySelector(".code-block__copy-label");
      if (!button) return;

      const block = this.shadow.querySelector(".code-block");
      const code = block.querySelector(".code-block__code");
      const label = this.shadow.querySelector(".code-block__copy-label");

      try {
        await this.copyText(code.innerText);

        label.textContent = this.COPIED_LABEL;
        button.classList.add("is-copied");

        clearTimeout(button._resetTimer);
        button._resetTimer = setTimeout(() => {
          label.textContent = this.COPY_LABEL;
          button.classList.remove("is-copied");
        }, this.RESET_DELAY);
      } catch (error) {
        console.error("Não foi possível copiar o código:", error);
      }
    });
  }
}

customElements.define("c-codeblock", CodeBlock);
