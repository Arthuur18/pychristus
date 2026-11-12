function DataStructures() {
  return `<div class="content-container">
          <!-- Header Section -->
          <header class="article-header">
            <h1 class="article-title font-display">
              Estruturas de Dados em Python
            </h1>
            <div class="title-accent-line"></div>
            <p class="font-body-lg">
              No Python, as estruturas de dados fundamentais nos permitem
              organizar, gerenciar e armazenar coleções de informações de
              maneira eficiente. Entender quando usar cada uma é essencial para
              construir algoritmos performáticos.
            </p>
          </header>
          <!-- Bento-style Feature Cards -->
          <div class="bento-grid">
            <!-- Listas Card -->
            <div class="bento-card">
              <div class="bento-card-header">
                <span class="material-symbols-outlined bento-card-icon"
                  >format_list_numbered</span
                >
                <h2 class="bento-card-title font-headline-md">Listas (List)</h2>
              </div>
              <p class="bento-card-text">
                Sequências de elementos <strong>ordenados</strong> e
                <strong>mutáveis</strong>. Permitem itens duplicados e são
                definidas pelo uso de colchetes
                <code
                  style="
                    background-color: var(--color-surface-container);
                    padding: 0.25rem 0.5rem;
                    border-radius: var(--radius-default);
                    color: var(--color-primary);
                  "
                  >[]</code
                >.
              </p>
              <div class="bento-card-footer">
                <span class="badge">Ordenado</span>
                <span class="badge">Mutável</span>
              </div>
            </div>
            <!-- Dicionários Card -->
            <div class="bento-card">
              <div class="bento-card-header">
                <span class="material-symbols-outlined bento-card-icon"
                  >key</span
                >
                <h2 class="bento-card-title font-headline-md">
                  Dicionários (Dict)
                </h2>
              </div>
              <p class="bento-card-text">
                Coleções de pares <strong>chave-valor</strong>. São
                <strong>não-ordenados</strong> por padrão (em termos de
                indexação numérica) mas altamente eficientes para busca por
                chaves. Definidos por chaves
                <code
                  style="
                    background-color: var(--color-surface-container);
                    padding: 0.25rem 0.5rem;
                    border-radius: var(--radius-default);
                    color: var(--color-primary);
                  "
                  >{}</code
                >.
              </p>
              <div class="bento-card-footer">
                <span class="badge">Mapeado</span>
                <span class="badge">Eficiente</span>
              </div>
            </div>
          </div>
          <!-- Code Example Section -->
          <section class="practical-example">
            <h3 class="practical-example-title font-headline-sm font-bold">
              Exemplo Prático
            </h3>

             <c-codeblock code="<pre class='code-block__pre'><code class='code-block__code'><span class='comment'># Criando uma lista de frutas</span>
frutas =<span> [<span class='string'>'maçã'</span>, <span class='string'>'banana'</span>, <span class='string'>'cereja'</span>]</span>         

<span class='comment'># Criando um dicionário de uma pessoa</span>
<span>pessoa = {</span>
  <span class='string'>'nome': 'João',</span>
  <span class='string'>'idade': <span class='number'>25</span>,</span>
  <span class='string'>'cidade': 'São Paulo'</span>

<span class='comment'># Acessando dados</span>
<span class='function'>print</span>(frutas[<span class='operator'>0</span></span>]) <span class='comment'># Saída: maçã</span>
<span class='function'>print</span>(pessoa[<span class='string'>'nome'</span></span>]) <span class='comment'># Saída: João</span>


</code></pre>"></c-codeblock>
          </section>

          <!-- Error Notification -->
          <c-admonition type="error" content="O erro <strong>IndexError</strong> ocorre quando você tenta
                acessar uma posição da lista que não existe (por exemplo,
                <code>frutas[5]</code> quando a lista só tem 3 itens).
                Lembre-se: em Python, a contagem começa no zero.">
          </c-admonition>
        </div>`;
}

export default DataStructures;
