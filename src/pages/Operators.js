function Operators() {
  return `<div class="content-container">
          <!-- Header -->
          <header class="operators-header">
            <h1 class="font-headline-lg operators-title">
              Operadores em Python
            </h1>
            <p class="font-body-lg operators-description">
              Operadores são símbolos especiais em Python que realizam operações
              em variáveis e valores. Eles são os blocos de construção
              fundamentais para manipular dados, realizar cálculos matemáticos e
              construir lógica de decisão em seus programas.
            </p>
          </header>

          <!-- Operator Categories -->
          <section class="operators-grid">
            <!-- Arithmetic -->
            <div class="operator-card">
              <h2 class="operator-card-title font-headline-md">
                <span class="material-symbols-outlined">functions</span>
                Aritméticos
              </h2>
              <ul class="operator-list font-body-md">
                <li class="operator-item">
                  <span>Adição <code class="code-inline">+</code></span>
                  <span class="operator-example">5 + 2 = 7</span>
                </li>
                <li class="operator-item">
                  <span>Multiplicação <code class="code-inline">*</code></span>
                  <span class="operator-example">5 * 2 = 10</span>
                </li>
                <li class="operator-item">
                  <span>Exponenciação <code class="code-inline">**</code></span>
                  <span class="operator-example">5 ** 2 = 25</span>
                </li>
                <li class="operator-item border-none">
                  <span
                    >Divisão Inteira <code class="code-inline">//</code></span
                  >
                  <span class="operator-example">5 // 2 = 2</span>
                </li>
              </ul>
            </div>

            <!-- Comparison -->
            <div class="operator-card">
              <h2 class="operator-card-title font-headline-md">
                <span class="material-symbols-outlined">compare_arrows</span>
                Comparação
              </h2>
              <ul class="operator-list font-body-md">
                <li class="operator-item">
                  <span>Igualdade <code class="code-inline">==</code></span>
                  <span class="operator-example">True/False</span>
                </li>
                <li class="operator-item">
                  <span>Diferente <code class="code-inline">!=</code></span>
                  <span class="operator-example">a != b</span>
                </li>
                <li class="operator-item">
                  <span>Maior que <code class="code-inline">&gt;</code></span>
                  <span class="operator-example">10 &gt; 5</span>
                </li>
                <li class="operator-item border-none">
                  <span
                    >Menor ou igual <code class="code-inline">&lt;=</code></span
                  >
                  <span class="operator-example">x &lt;= y</span>
                </li>
              </ul>
            </div>

            <!-- Logical (Full Width) -->
            <div class="operator-card operator-card-full">
              <h2 class="operator-card-title font-headline-md">
                <span class="material-symbols-outlined">alt_route</span>
                Lógicos
              </h2>
              <div class="logical-operators-grid">
                <div class="logical-item">
                  <code class="logical-code">and</code>
                  <p class="logical-desc">Verdadeiro se ambos forem True.</p>
                </div>
                <div class="logical-item">
                  <code class="logical-code">or</code>
                  <p class="logical-desc">Verdadeiro se um for True.</p>
                </div>
                <div class="logical-item">
                  <code class="logical-code">not</code>
                  <p class="logical-desc">Inverte o valor lógico.</p>
                </div>
              </div>
            </div>
          </section>

          <c-codeblock code="<pre class='code-block__pre'><code class='code-block__code'><span class='comment'># Cálculo de Área e Verificação de Acesso</span>
raio =<span class='number'> 5</span>         
pi =<span class='number'> 3.14159</span>              
area =<span class='number'> pi * (raio ** 2)</span>             

<span class='function'>print</span>(f<span class='string'>'A área do círculo é: <span class='operator'>{</span>area<span class='operator'>}</span>'</span>)  

<span class='comment'># Lógica de Permissão</span>
idade =<span class='number'> 20</span>         
tem_ticket =<span class='function'> True</span>              
pode_entrar =<span> (idade >= 18) <span class='operator'>and</span> tem_ticket </span>  

<span class='operator'>if </span><span>pode_entrar: </span>
    <span class='function'>print</span>(<span class='string'>'Acesso liberado'</span>) 
<span class='operator'>else</span><span>: </span>
    <span class='function'>print</span>(<span class='string'>'Acesso negado'</span>) 
</code></pre>">

</code></pre>"></c-codeblock>

          <!-- Common Error -->
           <c-admonition type="error" content="Você não pode usar operadores aritméticos entre
                'int' e 'str' diretamente. <br><br> <strong>Isso causará um TypeError: </strong> <br> print(10 + '20')
            <br />"></c-admonition>

          <c-back-and-forward 
            textBack="Tipos de Dados" 
            textForward="Controle de Fluxo"
            linkBack="/data-types"
            linkForward="/flow-control"  
          />
        </div>`;
}

export default Operators;
