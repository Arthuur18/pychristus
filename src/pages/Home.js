function Home() {
  return `<div class="content-container">
          <!-- Hero Breadcrumb -->
          <div class="breadcrumb font-label-md">
            <span class="breadcrumb-item">Guia</span>
            <span class="material-symbols-outlined breadcrumb-separator"
              >chevron_right</span
            >
            <span class="breadcrumb-item active">Introdução</span>
          </div>

          <article class="article">
            <!-- Title Section -->
            <header class="article-header">
              <h1 class="article-title font-display">O que é Python?</h1>
              <div class="title-accent-line"></div>
            </header>

            <!-- Explanatory Text -->
            <section class="article-section">
              <p class="font-body-lg">
                Python é uma linguagem de programação de alto nível,
                interpretada, de propósito geral e extremamente versátil. Criada
                por Guido van Rossum e lançada pela primeira vez em 1991, sua
                filosofia de design enfatiza a legibilidade do código com o uso
                de indentação significativa.
              </p>
              <p class="font-body-md">
                A beleza do Python reside em ser <strong>simples</strong> o
                suficiente para quem está começando, mas
                <strong>poderosa</strong> o suficiente para alimentar sistemas
                de inteligência artificial da NASA, servidores do Instagram e
                processamento de dados do Google.
              </p>
            </section>

            <!-- Admonition / Callout: Learning Tip -->
            <c-admonition type="learning tip" content="Python é uma das linguagens mais amadas por iniciantes devido à sua sintaxe próxima da linguagem humana."></c-admonition>

            <!-- Admonition / Callout: Common Error -->
            <c-admonition type="error" content="Não se esqueça de usar a indentação correta! Em Python, um espaço a mais ou a menos pode mudar completamente a lógica do seu código ou causar erros de execução."></c-admonition>

            <!-- Code Block -->
            <c-codeblock code="<pre class='code-block__pre'><code class='code-block__code'><span class='comment'># Isso exibe uma mensagem na tela</span>
<span class='function'>print</span>(<span class='string'>'Olá, mundo!'</span>)</code></pre>">
            </c-codeblock>

            <!-- CTA Section -->
            <section class="cta-section">
              <div class="cta-text font-body-sm">
                Pronto para começar sua jornada?
              </div>
              <a class="cta-button font-label-md" href="fundamentals">
                <span>Próximo: Fundamentos</span>
                <span class="material-symbols-outlined cta-button-icon"
                  >arrow_forward</span
                >
              </a>
            </section>
          </article>
        </div>
`;
}

export default Home;
