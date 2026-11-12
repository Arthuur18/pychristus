function FlowControl() {
    return `
    <div class="content-container">
        <!-- Breadcrumbs -->
          <nav class="breadcrumb font-label-md">
            <span class="breadcrumb-item">Guia</span>
            <span class="material-symbols-outlined breadcrumb-separator"
              >chevron_right</span
            >
            <span class="breadcrumb-item active">Controle de Fluxo</span>
          </nav>
        
        <article class="article">
            <!-- Hero Section -->
            <header class="article-header">
              <h1 class="article-title font-display">Controle de Fluxo</h1>
              <div class="title-accent-line"></div>
              <p class="font-body-lg">
                A tomada de decisão é o coração de qualquer programa. No Python,
                usamos estruturas de controle de fluxo para direcionar a execução do
                código com base em condições lógicas. Através de
                <span class="font-bold text-on-surface">if</span>,
                <span class="font-bold text-on-surface">elif</span> e
                <span class="font-bold text-on-surface">else</span>, podemos criar
                sistemas inteligentes que respondem a diferentes entradas de dados.
              </p>
            </header>
        <!-- Cards Section: Bento Grid Layout -->
            <section class="flow-cards">
            <!-- if Card -->
            <div class="flow-card flow-card-primary">
                <div class="flex items-center justify-between">
                <span class="font-headline-md text-headline-md font-bold"
                    >if</span
                >
                <span
                    class="material-symbols-outlined text-primary"
                    data-icon="alt_route"
                    >alt_route</span
                >
                </div>
                <p class="font-body-md text-body-md text-on-surface-variant">
                A condição básica. Se a expressão for verdadeira, o bloco de
                código indentado será executado.
                </p>
            </div>
            <!-- elif Card -->
            <div class="flow-card">
                <div class="flex items-center justify-between">
                <span class="font-headline-md text-headline-md font-bold"
                    >elif</span
                >
                <span
                    class="material-symbols-outlined text-on-surface-variant"
                    data-icon="add_road"
                    >add_road</span
                >
                </div>
                <p class="font-body-md text-body-md text-on-surface-variant">
                Abreviação de "else if". Permite verificar múltiplas condições em
                sequência caso a anterior falhe.
                </p>
            </div>
            <!-- else Card -->
            <div class="flow-card">
                <div class="flex items-center justify-between">
                <span class="font-headline-md text-headline-md font-bold"
                    >else</span
                >
                <span
                    class="material-symbols-outlined text-on-surface-variant"
                    data-icon="subdirectory_arrow_right"
                    >subdirectory_arrow_right</span
                >
                </div>
                <p class="font-body-md text-body-md text-on-surface-variant">
                A rota de fuga. Executa o código se nenhuma das condições
                anteriores for atendida.
                </p>
            </div>
            </section>
            <!-- Code Block Example -->
        <c-codeblock code="<pre class='code-block__pre'><code class='code-block__code'><span class='comment'># Verificação de Nota de Estudante</span>
nota =<span class='number'> 85</span>         

<span class='operator'>if </span><span>nota >= 90: </span>
    <span class='function'>print</span>(<span class='string'>'Conceito A - Excelente!'</span>) 
<span class='operator'>elif</span><span> nota >= 70:</span>
    <span class='function'>print</span>(<span class='string'>'Conceito B - Aprovado'</span>)
<span class='operator'>elif</span><span> nota >= 50:</span>
    <span class='function'>print</span>(<span class='string'>'Conceito C - Recuperação'</span>) 
<span class='operator'>else</span><span>: </span>
    <span class='function'>print</span>(<span class='string'>'Conceito D - Reprovado'</span>) 
</code></pre>"></c-codeblock>
        
        <!-- Admonition / Callout: Common Error -->
        <c-admonition type="error" content="Ao contrário de outras linguagens que usam chaves {}, o Python utiliza a indentação (espaços) para definir o escopo do bloco. Além disso, cada declaração condicional DEVE terminar com dois pontos :. <br><br> <strong>Errado: </strong> <br> if x > 0 <br>
print(x) # Erro de sintaxe e indentação
            <br />"></c-admonition>
      </main>
  `;
}

export default FlowControl;
