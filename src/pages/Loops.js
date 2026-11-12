function Loops() {
  return `
    <div class="content-container">
          <!-- Header -->
          <header class="article-header">
            <h1 class="article-title font-display">
              Estruturas de Repetição em Python
            </h1>
            <div class="title-accent-line"></div>
            <p class="font-body-lg">
              Loops (laços de repetição) são ferramentas fundamentais que
              permitem executar um bloco de código repetidamente enquanto uma
              condição for atendida ou para cada item em uma coleção. Eles
              automatizam tarefas repetitivas, garantindo eficiência e redução
              de redundância no seu código.
            </p>
          </header>
          <!-- Cards Grid -->
          <div class="loop-grid">
            <!-- For Card -->
            <div class="loop-card">
              <div class="loop-card-header">
                <span class="material-symbols-outlined loop-card-icon"
                  >repeat</span
                >
                <h2 class="loop-card-title font-headline-md">O Loop 'for'</h2>
              </div>
              <p class="loop-card-desc">
                O comando <code>for</code> é utilizado para iterar sobre uma
                sequência (seja uma lista, uma tupla, um dicionário, um conjunto
                ou uma string). É ideal quando você sabe exatamente quantas
                vezes deseja repetir a ação ou quando deseja processar cada
                elemento de uma coleção.
              </p>
            </div>
            <!-- While Card -->
            <div class="loop-card">
              <div class="loop-card-header">
                <span class="material-symbols-outlined loop-card-icon"
                  >update</span
                >
                <h2 class="loop-card-title font-headline-md">O Loop 'while'</h2>
              </div>
              <p class="loop-card-desc">
                O comando <code>while</code> executa um bloco de código
                repetidamente desde que uma condição booleana específica
                permaneça verdadeira. É comumente usado quando o número de
                repetições não é conhecido antecipadamente.
              </p>
            </div>
          </div>
          <!-- Example Section -->
          <section class="practical-example">
            <h2
              class="practical-example-title font-headline-sm font-bold flex items-center gap-2"
              style="margin: 0 0 1.5rem 0"
            >
              <span
                class="material-symbols-outlined"
                style="color: var(--color-primary)"
                >terminal</span
              >
              Exemplo Prático
            </h2>
            <c-codeblock code="<pre class='code-block__pre'><code class='code-block__code'><span class='comment'># Exemplo de loop 'for'</span>
nomes =<span> [<span class='string'>'Ana'</span>, <span class='string'>'Bruno'</span>, <span class='string'>'Clara'</span>]</span>         

<span class='operator'>for </span><span>nomes <span class='operator'>in</span> nomes: </span>
  <span class='function'>print</span>(f<span class='string'>'Olá, <span class='operator'>{</span>nome<span class='operator'>}</span>!'</span>)  

<span class='comment'># Exemplo de loop 'while'</span>
contador =<span class='number'> 0</span>         
<span class='operator'>while </span><span>contador < 3: </span>
  <span class='function'>print</span>(f<span class='string'>'Contagem, <span class='operator'>{</span>contador<span class='operator'>}</span>'</span>) 
  <span>contador += 1</span>

</code></pre>"></c-codeblock>
          </section>


          <!-- Error Highlight -->
          <c-admonition type="error" content="Um dos erros mais críticos ao usar <code>while</code> é esquecer
                de atualizar a variável de controle. Se a condição nunca se
                tornar falsa, o programa entrará em um loop infinito, consumindo
                todos os recursos do processador e travando o sistema. Sempre
                verifique se o estado da condição muda dentro do bloco!">
          </c-admonition>
        </div>
    `;
}

export default Loops;
