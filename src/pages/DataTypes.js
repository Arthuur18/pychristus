function DataTypes() {
  return `<div class="content-container">
          <!-- Header Section -->
          <header class="article-header">
            <h1 class="article-title font-display">Tipos de Dados em Python</h1>
            <div class="title-accent-line"></div>
            <p class="font-body-lg">
              Python é uma linguagem de
              <strong>tipagem dinâmica</strong>. Isso
              significa que você não precisa declarar o tipo de uma variável ao
              criá-la; o interpretador infere o tipo automaticamente com base no
              valor atribuído. Conhecer os tipos básicos é fundamental para
              manipular informações de forma precisa.
            </p>
          </header>
          <!-- Bento Grid: Core Types -->
          <div class="types-grid">
            <!-- Integers -->
            <div class="types-card">
              <div>
                <div class="types-card-icon-wrapper">
                  <span class="material-symbols-outlined">123</span>
                </div>
                <h3 class="types-card-title font-headline-md font-bold">Inteiros (int)</h3>
                <p class="types-card-desc">
                  Números inteiros sem casas decimais, positivos ou negativos.
                </p>
              </div>
              <div class="types-card-example">
                <code>idade = 25</code>
              </div>
            </div>
            <!-- Floats -->
            <div class="types-card">
              <div>
                <div class="types-card-icon-wrapper">
                  <span class="material-symbols-outlined">decimal_increase</span>
                </div>
                <h3 class="types-card-title font-headline-md font-bold">Ponto Flutuante</h3>
                <p class="types-card-desc">
                  Números decimais. Note que usamos o <strong>ponto (.)</strong> como separador.
                </p>
              </div>
              <div class="types-card-example">
                <code>preco = 49.99</code>
              </div>
            </div>
            <!-- Strings -->
            <div class="types-card">
              <div>
                <div class="types-card-icon-wrapper">
                  <span class="material-symbols-outlined">text_fields</span>
                </div>
                <h3 class="types-card-title font-headline-md font-bold">Strings (str)</h3>
                <p class="types-card-desc">
                  Cadeias de caracteres delimitadas por aspas simples ou duplas.
                </p>
              </div>
              <div class="types-card-example">
                <code>nome = "Python"</code>
              </div>
            </div>
            <!-- Booleans -->
            <div class="types-card">
              <div>
                <div class="types-card-icon-wrapper">
                  <span class="material-symbols-outlined">toggle_on</span>
                </div>
                <h3 class="types-card-title font-headline-md font-bold">Booleanos (bool)</h3>
                <p class="types-card-desc">
                  Valores lógicos binários que representam verdadeiro ou falso.
                </p>
              </div>
              <div class="types-card-example">
                <code>ativo = True</code>
              </div>
            </div>
          </div>
          <!-- Comprehensive Code Example -->
          <c-codeblock code="<pre class='code-block__pre'><code class='code-block__code'><span class='comment'># Definindo diferentes tipos de dados</span>
nome =<span class='string'>'Estudante'</span>         <span class='comment'># String</span>
idade =<span class='number'> 21</span>                <span class='comment'># Integer</span></span>
altura =<span class='number'> 1.75</span>             <span class='comment'># Float</span></span>
esta_matriculado =<span class='function'> True</span>   <span class='comment'># Boolean</span>

<span class='comment'># Verificando os tipos com a função type()</span>
<span class='function'>print</span>(<span class='operator'>type</span>(nome))         <span class='comment'># class 'str'</span>
<span class='function'>print</span>(<span class='operator'>type</span>(idade))        <span class='comment'># class 'int'</span>
<span class='function'>print</span>(<span class='operator'>type</span>(altura))       <span class='comment'># class 'float'</span>
<span class='function'>print</span>(<span class='operator'>type</span>(esta_matriculado)) <span class='comment'># class 'bool'</span>

</code></pre>">

</code></pre>">
            </c-codeblock>
          <c-back-and-forward 
            textBack="Variáveis" 
            textForward="Operadores"
            linkBack="/vars"
            linkForward="/operators"  
          />
        </div>`;
}

export default DataTypes;
