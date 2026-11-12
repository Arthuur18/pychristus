function Vars() {
  return `
        <div class="content-container">
          <!-- Breadcrumbs -->
          <nav class="breadcrumb font-body-sm">
            <a class="breadcrumb-item" href="#">Documentação</a>
            <span class="material-symbols-outlined breadcrumb-separator">chevron_right</span>
            <a class="breadcrumb-item" href="#">Fundamentos</a>
            <span class="material-symbols-outlined breadcrumb-separator">chevron_right</span>
            <span class="breadcrumb-item active">Variáveis em Python</span>
          </nav>
          <!-- Page Header -->
          <header class="article-header">
            <h1 class="article-title font-display">Variáveis em Python</h1>
            <div class="title-accent-line"></div>
            <p class="font-body-lg">
              Imagine as variáveis como etiquetas presas a caixas de memória. Em
              Python, uma variável é criada no momento em que você atribui um
              valor a ela pela primeira vez. Não é necessário declarar o tipo
              explicitamente; o Python é inteligente o suficiente para entender
              o que você está guardando.
            </p>
          </header>
          <c-codeblock code="<pre class='code-block__pre'><code class='code-block__code'>nome =<span class='string'>'Maria'</span> <span class='comment'># Criando uma variável de texto</span>
idade =<span class='number'> 18</span> <span class='comment'># Criando uma variável numérica</span>
</code></pre>">
            </c-codeblock>

          <!-- Explanation List -->
          <section class="explanation-list">
            <h3 class="font-headline-sm">Entendendo o Código</h3>
            <div class="explanation-card">
              <p class="explanation-card-text">
                Na primeira linha, definimos <code>nome</code>. Como o valor
                está entre aspas, o Python entende que é uma
                <b>String</b> (texto).
              </p>
            </div>
            <div class="explanation-card">
              <p class="explanation-card-text">
                Na segunda linha, definimos <code>idade</code>. Como o valor é
                um número puro, o Python o classifica como um
                <b>Integer</b> (inteiro).
              </p>
            </div>
          </section>
          <!-- Admonition / Callout -->
          <c-admonition type="error" content="Não comece nomes de variáveis com números (ex:
                <code>1usuario</code>). Use letras, números ou sublinhados,
                mas sempre inicie com uma letra ou <code>_</code>."></c-admonition>
          <c-back-and-forward 
            textBack="Fundamentos" 
            textForward="Tipos de Dados"
            linkBack="/fundamentals"
            linkForward="/data-types"  
          />
        </div>
        <!-- TODO: Add button next to data types -->
  `;
}

export default Vars;
