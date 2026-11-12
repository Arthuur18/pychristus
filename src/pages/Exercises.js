function Exercises() {
  return `
    <div class="content-container">
          <!-- Breadcrumbs -->
          <nav class="breadcrumb font-label-md">
            <span class="breadcrumb-item">Guia</span>
            <span class="material-symbols-outlined breadcrumb-separator"
              >chevron_right</span
            >
            <span class="breadcrumb-item active">Exercícios</span>
          </nav>

          <article class="article">
            <!-- Hero Section -->
            <header class="article-header">
              <h1 class="article-title font-display">Exercícios</h1>
              <div class="title-accent-line"></div>
              <p class="font-body-lg">
                Reforce seu aprendizado com nossa lista curada de problemas. Do "Olá Mundo" a estruturas de dados complexas, cada desafio foi projetado para testar sua lógica e sintaxe.
              </p>
            <section class="progresso" aria-labelledby="progresso-rotulo">
                <div>
                    <p class="progresso__rotulo" id="progresso-rotulo">Progresso Geral</p>
                    <div class="progresso__linha">
                    <p class="progresso__contagem" aria-live="polite">
                        <span id="concluidos">0</span> / <span id="total">0</span>
                    </p>
                    <div class="barra" id="barra" role="progressbar" aria-labelledby="progresso-rotulo"
                        aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                        <div class="barra__preenchimento" id="barra-preenchimento"></div>
                    </div>
                    <span class="progresso__percentual" id="percentual">0%</span>
                    </div>
                </div>

                <div class="progresso__acoes">
                    <button class="botao-primario" id="btn-continuar" type="button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                        <path d="M7 5.5v13l11-6.5z"/>
                    </svg>
                    <span id="btn-continuar-texto">Continuar Exercício</span>
                    </button>
                    <button class="botao-texto" id="btn-reiniciar" type="button">Reiniciar progresso</button>
                </div>
            </section>

            <div id="lista">
                <noscript><p class="aviso">Ative o JavaScript para ver a lista de exercícios.</p></noscript>
            </div>
          </article>
        </div>
    `;
}

export default Exercises;
