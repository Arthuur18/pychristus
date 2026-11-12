function Functions() {
  return `<div class="content-container">
          <!-- Hero Section -->
          <header class="article-header">
            <nav class="breadcrumb font-body-sm">
              <a class="breadcrumb-item" href="#">Documentação</a>
              <span class="material-symbols-outlined breadcrumb-separator"
                >chevron_right</span
              >
              <span class="breadcrumb-item active">Funções</span>
            </nav>
            <h1 class="article-title font-display">Funções em Python</h1>
            <div class="title-accent-line"></div>
            <p class="font-body-lg">
              Funções são blocos de código reutilizáveis que realizam uma tarefa
              específica. Elas ajudam a organizar o programa, evitar repetição e
              tornar o código mais modular e fácil de manter.
            </p>
          </header>
          <!-- Concept Bento Grid -->
          <section class="concept-grid">
            <div class="concept-card">
              <div class="concept-card-icon-wrapper">
                <span class="material-symbols-outlined">code</span>
              </div>
              <h3 class="concept-card-title font-headline-sm font-bold">
                Definição (def)
              </h3>
              <p class="concept-card-desc">
                Usamos a palavra-chave
                <code
                  style="
                    background-color: var(--color-surface-container);
                    padding: 0.125rem 0.25rem;
                    border-radius: var(--radius-default);
                    color: var(--color-primary);
                  "
                  >def</code
                >
                seguida pelo nome da função e parênteses para declarar novos
                comportamentos.
              </p>
            </div>
            <div class="concept-card">
              <div class="concept-card-icon-wrapper">
                <span class="material-symbols-outlined">input</span>
              </div>
              <h3 class="concept-card-title font-headline-sm font-bold">
                Parâmetros
              </h3>
              <p class="concept-card-desc">
                São valores que a função pode receber como entrada para
                processar. Eles agem como variáveis locais dentro do escopo.
              </p>
            </div>
            <div class="concept-card">
              <div class="concept-card-icon-wrapper">
                <span class="material-symbols-outlined">output</span>
              </div>
              <h3 class="concept-card-title font-headline-sm font-bold">
                Retorno (return)
              </h3>
              <p class="concept-card-desc">
                Define como a função envia um resultado de volta para quem a
                chamou, permitindo que o dado seja armazenado em variáveis.
              </p>
            </div>
          </section>
          <!-- Code Example -->
          <section class="practical-example">
            <div class="practical-example-header">
              <h2 class="font-headline-md font-bold" style="margin: 0">
                Exemplo Prático
              </h2>
              <span class="font-code-block">python</span>
            </div>

            <c-codeblock code="<pre class='code-block__pre'><code class='code-block__code'><span class='comment'># Definindo uma função simples</span>
<span class='operator'>def </span><span>saudar(<span class='number'>nome</span>):</span>
  <span class='function'>return</span> f<span class='string'>'Olá, <span class='operator'>{</span>nome<span class='operator'>}</span>!'</span>  

<span class='comment'># Chamando a função</span>  
mensagem =<span class='number'> saudar(</span><span>'Estudante'</span><span class='number'>)</span>         
<span class='function'>print</span>(mensagem) <span class='comment'># Saída: Olá, Estudante</span>

</code></pre>"></c-codeblock>

          </section>

          <!-- Common Error Admonition -->
          <section
            class="admonition admonition-danger"
            style="margin-top: 0; margin-bottom: 4rem"
          >
            <c-admonition type="error" content="Um erro muito comum é esquecer os parênteses na definição ou
                chamada da função, ou não indentar corretamente o bloco de
                código dentro da função. Em Python, a indentação é o que define
                o corpo da função.">
            </c-admonition>
          </section>
        </div>`;
}

export default Functions;
