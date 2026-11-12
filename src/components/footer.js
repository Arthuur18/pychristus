class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <style>
          .footer {
            max-width: 980px;
            padding: 2rem var(--page-margin);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            background-color: var(--color-surface-container);
            margin-left: 420px;
            margin-bottom: 50px;
          }

          @media (min-width: 768px) {
            .footer {
              flex-direction: row;
            }
          }  

          /* Phone screens */
          @media (max-width: 768px) {
            .footer {
              max-width: 500px;
              margin: 0 20px 20px 20px;
            }
          }  

          /* Tablets screens */
          @media (max-width: 1020px) {
            .footer {
              max-width: 1000px;
              margin: 0 20px 20px 20px;
            }
          }  
          
          .footer-brand {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .footer-logo {
            font-weight: bold;
            color: var(--color-primary);
          }
          .footer-copy {
            margin: 0;
            color: var(--color-on-surface-variant);
          }
          .footer-links {
            display: flex;
            gap: 1.5rem;
          }
          .footer-link {
            color: var(--color-on-surface-variant);
            text-decoration: none;
            cursor: pointer;
            transition: color 0.2s;
          }
          .footer-link:hover {
            text-decoration: underline;
          }
      </style>

      <footer class="footer">
          <div class="footer-brand">
              <span class="footer-logo font-headline-sm">PyChristus</span>
              <p class="footer-copy font-body-sm">
                Desenvolvido por Arthur Teixeira Nunes.
              </p>
          </div>
          <div class="footer-links">
              <a class="footer-link font-body-sm" href="#">Privacidade</a>
              <a class="footer-link font-body-sm" href="#">Termos</a>
              <a class="footer-link font-body-sm" href="#">Contato</a>
          </div>
      </footer>
    `;
  }
}

customElements.define("c-footer", Footer);
