import { NIVEIS } from "./levelsExercises";

const CHAVE_STORAGE = "exercicios-python:concluidos";

const ICONE_CHECK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" ' +
  'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
  '<circle cx="12" cy="12" r="9.25"/>' +
  '<path class="check__marca" d="M8 12.5l2.7 2.7L16 9.8"/>' +
  "</svg>";

/* ---------- Estado ---------- */

export function iniciarExercicios(raiz = document) {
  const todos = NIVEIS.flatMap((nivel) =>
    nivel.grupos.flatMap((grupo) => grupo.exercicios),
  );
  const concluidos = carregarProgresso(todos);

  /* ---------- Elementos fixos da página ---------- */
  const $lista = document.getElementById("lista");
  const $concluidos = document.getElementById("concluidos");
  const $total = document.getElementById("total");
  const $percentual = document.getElementById("percentual");
  const $barra = document.getElementById("barra");
  const $preenchimento = document.getElementById("barra-preenchimento");
  const $btnContinuar = document.getElementById("btn-continuar");
  const $btnContinuarTexto = document.getElementById("btn-continuar-texto");
  const $btnReiniciar = document.getElementById("btn-reiniciar");

  /* ---------- Criação de elementos ---------- */
  function criar(tag, { classe, texto, atributos } = {}, filhos = []) {
    const no = document.createElement(tag);
    if (classe) no.className = classe;
    if (texto !== undefined) no.textContent = texto;
    if (atributos) {
      Object.entries(atributos).forEach(([nome, valor]) =>
        no.setAttribute(nome, valor),
      );
    }
    filhos.forEach((filho) => no.append(filho));
    return no;
  }

  function criarExercicio(ex) {
    const idResolucao = "resolucao-" + ex.id;

    const check = criar("button", {
      classe: "check",
      atributos: {
        type: "button",
        "data-id": ex.id,
        "aria-pressed": "false",
        "aria-label": "Marcar exercício " + ex.id + " como concluído",
      },
    });
    check.innerHTML = ICONE_CHECK;

    const corpo = criar("div", { classe: "exercicio__corpo" }, [
      criar("p", {
        classe: "exercicio__titulo",
        texto: "Exercício " + ex.id + ": " + ex.titulo,
      }),
      criar("p", { classe: "exercicio__descricao", texto: ex.descricao }),
    ]);

    const verResolucao = criar("button", {
      classe: "ver-resolucao",
      texto: "Ver Resolução",
      atributos: {
        type: "button",
        "aria-expanded": "false",
        "aria-controls": idResolucao,
      },
    });

    const copiar = criar("button", {
      classe: "copiar",
      texto: "Copiar código",
      atributos: { type: "button" },
    });

    const pre = criar(
      "pre",
      {
        atributos: {
          tabindex: "0",
          "aria-label": "Código da resolução do exercício " + ex.id,
        },
      },
      [criar("code", { texto: ex.codigo.trim() })],
    );

    const painel = criar(
      "div",
      { classe: "resolucao", atributos: { id: idResolucao, hidden: "" } },
      [
        criar("div", { classe: "resolucao__barra" }, [
          criar("span", { texto: "Resolução em Python" }),
          copiar,
        ]),
        pre,
      ],
    );

    return criar(
      "li",
      {
        classe: "exercicio",
        atributos: { id: "exercicio-" + ex.id, tabindex: "-1" },
      },
      [check, corpo, verResolucao, painel],
    );
  }

  function renderizar() {
    NIVEIS.forEach((nivel) => {
      const idTitulo = "titulo-" + nivel.id;

      const cabecalho = criar("div", { classe: "secao__cabecalho" }, [
        criar("h2", {
          classe: "secao__titulo",
          texto: nivel.nome,
          atributos: { id: idTitulo },
        }),
        criar("span", {
          classe: "selo selo--" + nivel.id,
          texto: nivel.rotulo,
        }),
        criar("span", {
          classe: "secao__contagem",
          atributos: { "data-nivel": nivel.id },
        }),
      ]);

      const secao = criar(
        "section",
        { classe: "secao", atributos: { "aria-labelledby": idTitulo } },
        [cabecalho],
      );

      nivel.grupos.forEach((grupo) => {
        const bloco = criar("div", { classe: "grupo" });

        if (grupo.titulo) {
          bloco.append(
            criar("h3", { classe: "grupo__titulo", texto: grupo.titulo }),
          );
        }

        const ul = criar("ul", { classe: "exercicios" });
        grupo.exercicios.forEach((ex) => ul.append(criarExercicio(ex)));
        bloco.append(ul);
        secao.append(bloco);
      });

      $lista.append(secao);
    });
  }

  /* ---------- Atualização da interface ---------- */
  function atualizar() {
    const total = todos.length;
    const feitos = concluidos.size;
    const pct = Math.round((feitos / total) * 100);

    $concluidos.textContent = feitos;
    $total.textContent = total;
    $percentual.textContent = pct + "%";
    $preenchimento.style.width = pct + "%";
    $barra.setAttribute("aria-valuenow", pct);

    todos.forEach((ex) => {
      const item = raiz.getElementById("exercicio-" + ex.id);
      const feito = concluidos.has(ex.id);
      item.classList.toggle("concluido", feito);
      item.querySelector(".check").setAttribute("aria-pressed", String(feito));
    });

    document.querySelectorAll("[data-nivel]").forEach((no) => {
      const nivel = NIVEIS.find((n) => n.id === no.dataset.nivel);
      const ids = nivel.grupos.flatMap((g) => g.exercicios.map((ex) => ex.id));
      const feitosNivel = ids.filter((id) => concluidos.has(id)).length;
      no.textContent = feitosNivel + "/" + ids.length + " concluídos";
    });

    if (feitos === 0) {
      $btnContinuarTexto.textContent = "Começar Exercício";
    } else if (feitos === total) {
      $btnContinuarTexto.textContent = "Revisar Exercícios";
    } else {
      $btnContinuarTexto.textContent = "Continuar Exercício";
    }

    $btnReiniciar.disabled = feitos === 0;
  }

  /* ---------- Ações ---------- */
  function alternarConcluido(id) {
    if (concluidos.has(id)) {
      concluidos.delete(id);
    } else {
      concluidos.add(id);
    }
    salvarProgresso(concluidos);
    atualizar();
  }

  function alternarResolucao(botao) {
    const painel = raiz.getElementById(botao.getAttribute("aria-controls"));
    const abrir = painel.hidden;

    painel.hidden = !abrir;
    botao.setAttribute("aria-expanded", String(abrir));
    botao.textContent = abrir ? "Ocultar Resolução" : "Ver Resolução";
  }

  async function copiarCodigo(botao) {
    const codigo = botao
      .closest(".resolucao")
      .querySelector("code").textContent;

    try {
      await navigator.clipboard.writeText(codigo);
      botao.textContent = "Copiado!";
    } catch (erro) {
      botao.textContent = "Não foi possível copiar";
    }

    setTimeout(() => {
      botao.textContent = "Copiar código";
    }, 1800);
  }

  function continuar() {
    const proximo = todos.find((ex) => !concluidos.has(ex.id)) || todos[0];
    const item = raiz.getElementById("exercicio-" + proximo.id);
    const reduzMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    item.scrollIntoView({
      behavior: reduzMovimento ? "auto" : "smooth",
      block: "center",
    });
    item.focus({ preventScroll: true });

    item.classList.add("destaque");
    setTimeout(() => item.classList.remove("destaque"), 1800);
  }

  function reiniciar() {
    if (concluidos.size === 0) return;

    const confirmou = window.confirm(
      "Apagar todo o progresso? Essa ação não pode ser desfeita.",
    );
    if (!confirmou) return;

    concluidos.clear();
    salvarProgresso(concluidos);
    atualizar();
  }

  /* ---------- Eventos ---------- */
  $lista.addEventListener("click", (evento) => {
    const check = evento.target.closest(".check");
    if (check) {
      alternarConcluido(Number(check.dataset.id));
      return;
    }

    const ver = evento.target.closest(".ver-resolucao");
    if (ver) {
      alternarResolucao(ver);
      return;
    }

    const copiar = evento.target.closest(".copiar");
    if (copiar) {
      copiarCodigo(copiar);
    }
  });

  $btnContinuar.addEventListener("click", continuar);
  $btnReiniciar.addEventListener("click", reiniciar);

  /* ---------- Início ---------- */
  renderizar();
  atualizar();
}

/* ---------- Persistência (localStorage) ---------- */
function carregarProgresso(todos) {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_STORAGE));
    if (Array.isArray(salvo)) {
      const idsValidos = new Set(todos.map((ex) => ex.id));
      return new Set(salvo.filter((id) => idsValidos.has(id)));
    }
  } catch (erro) {
    /* storage indisponível ou conteúdo inválido: começa do zero */
  }
  return new Set();
}

function salvarProgresso(concluidos) {
  try {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify([...concluidos]));
  } catch (erro) {
    /* sem storage: o progresso vale só enquanto a página estiver aberta */
  }
}
