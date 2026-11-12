class BackAndForward extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get linkBack() {
    return this.getAttribute("linkBack");
  }

  set linkBack(l) {
    this.setAttribute("linkBack", l);
  }

  get linkForward() {
    return this.getAttribute("linkForward");
  }

  set linkForward(l) {
    this.setAttribute("linkForward", l);
  }

  get textBack() {
    return this.getAttribute("textBack");
  }

  set textBack(t) {
    this.setAttribute("textBack", t);
  }

  get textForward() {
    return this.getAttribute("textForward");
  }

  set textForward(t) {
    this.setAttribute("textForward", t);
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["type", "textBack"];
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        .back-forward-fundamentals {
            display: flex;
            justify-content: space-between;
            margin-top: 100px;
        }

        a > button {
            max-width: 30rem;
            min-width: 20rem;
            padding: 1rem;
            background-color: var(--color-primary);
            color: var(--color-on-primary);
            border: none;
            border-radius: 30px;
            font-family: var(--font-family-display);
            font-size: 16px;
            box-shadow: 0px 2px 5px 0px #5050506b;
            cursor: pointer;
        }

        @media (max-width: 700px) {
            .back-forward-fundamentals {
                flex-direction: column;
                align-items: center;
                gap: 2rem;
              }
        }
      </style>
       <div class="back-forward-fundamentals">
            <a href=${this.linkBack} class="button-back">
                <button>Anterior: ${this.textBack}</button>
            </a>
            <a href=${this.linkForward} class="button-forward">
                <button>Próximo: ${this.textForward}</button>
            </a>
        </div>
    `;
  }
}

customElements.define("c-back-and-forward", BackAndForward);
