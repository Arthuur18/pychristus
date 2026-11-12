function Fundamentals() {
  return `
    <div class="content-container">
          <!-- Breadcrumbs -->
          <nav class="breadcrumb font-label-md">
            <span class="breadcrumb-item">Guia</span>
            <span class="material-symbols-outlined breadcrumb-separator"
              >chevron_right</span
            >
            <span class="breadcrumb-item active">Fundamentos</span>
          </nav>

          <article class="article">
            <!-- Hero Section -->
            <header class="article-header">
              <h1 class="article-title font-display">Fundamentos de Python</h1>
              <div class="title-accent-line"></div>
              <p class="font-body-lg">
                Nesta seção, exploramos os pilares que sustentam a linguagem
                Python. Você aprenderá como o computador armazena informações e
                como realizamos operações básicas.
              </p>
            </header>

            <div class="article-section">
              <!-- Section 1 -->
              <section
                id="o-que-sao-fundamentos"
                class="reveal-section hidden-reveal"
              >
                <h2 class="font-headline-md">O que são Fundamentos?</h2>
                <p class="font-body-md">
                  Os fundamentos de uma linguagem de programação referem-se às
                  regras básicas de sintaxe, gramática e estrutura que permitem
                  que o código seja interpretado corretamente pela máquina.
                </p>
                <p class="font-body-md">
                  Dominar esses conceitos é como aprender o alfabeto antes de
                  escrever um romance: sem entender como Python organiza blocos
                  de código ou lida com notas explicativas, é impossível
                  construir aplicações complexas e escaláveis.
                </p>
              </section>

              <!-- Section 2: Comentários -->
              <section
                id="comentarios-em-python"
                class="reveal-section hidden-reveal"
              >
                <h2 class="font-headline-md">Comentários em Python</h2>
                <p class="font-body-md">
                  Comentários são notas para humanos que o Python ignora. Use
                  <code
                    class="font-code-block"
                    style="
                      background-color: var(--color-surface-container);
                      padding: 0.25rem 0.5rem;
                      border-radius: var(--radius-default);
                      color: var(--color-primary);
                    "
                    >#</code
                  >
                  para comentários de uma linha.
                </p>
                <!-- Code Block -->
            <c-codeblock code="<pre class='code-block__pre'><code class='code-block__code'><span class='comment'># Isso é um comentário em Python</span>
<span class='function'>print</span>(<span class='string'>'Python é incrível'</span>) <span class='comment'># Comentário após código</span></code></pre>">
            </c-codeblock>

                <!-- Tip Box (Admonition) -->
                <c-admonition type="learning tip" content="Use comentários para explicar o 'porquê' do código, não o 'quê' ele faz. O código deve ser legível por si só. "></c-admonition>
              </section>

              <!-- Section 3: Indentação -->
              <section id="indentacao" class="reveal-section hidden-reveal">
                <h2 class="font-headline-md">Indentação</h2>
                <p class="font-body-md">
                  Em Python, o espaço no início da linha é obrigatório para
                  definir blocos de código. Diferente de outras linguagens que
                  usam chaves
                  <code>{}</code>, Python usa o vazio para criar hierarquia.
                </p>

                <!-- Error Box (Admonition Danger) -->
                <c-admonition type="error" content="O erro IndentationError acontece quando você esquece os 4 espaços obrigatórios ou mistura espaços com tabulações. "></c-admonition>
              </section>

              <!-- Section 4: Próximos Passos -->
              <section
                class="reveal-section hidden-reveal"
                style="
                  padding-top: 2rem;
                  border-top: 1px solid var(--color-outline-variant);
                ">
                <h2 class="font-headline-md">Próximos Passos</h2>
                <div class="next-steps-grid">
                  <a class="next-step-card" href="/vars">
                    <div>
                      <span class="card-module">Módulo 01</span>
                      <h3 class="card-title font-headline-md">Variáveis</h3>
                    </div>
                    <div class="card-footer">
                      <span class="font-caption">Explorar agora</span>
                      <span
                        class="material-symbols-outlined"
                        style="font-size: 14px"
                        >arrow_forward</span
                      >
                    </div>
                  </a>

                  <a class="next-step-card" href="/data-types">
                    <div>
                      <span class="card-module">Módulo 02</span>
                      <h3 class="card-title font-headline-md">
                        Tipos de Dados
                      </h3>
                    </div>
                    <div class="card-footer">
                      <span class="font-caption">Explorar agora</span>
                      <span
                        class="material-symbols-outlined"
                        style="font-size: 14px"
                        >arrow_forward</span
                      >
                    </div>
                  </a>

                  <a class="next-step-card" href="/operators">
                    <div>
                      <span class="card-module">Módulo 03</span>
                      <h3 class="card-title font-headline-md">Operadores</h3>
                    </div>
                    <div class="card-footer">
                      <span class="font-caption">Explorar agora</span>
                      <span
                        class="material-symbols-outlined"
                        style="font-size: 14px"
                        >arrow_forward</span
                      >
                    </div>
                  </a>
                </div>
              </section>
            </div>
          </article>
        </div>
  `;
}

export default Fundamentals;
