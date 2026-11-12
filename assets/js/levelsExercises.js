/*
  Dados dos exercícios.

  Para adicionar um exercício, inclua um novo objeto no array "exercicios"
  do grupo desejado. O "id" precisa ser um número único: o progresso
  é salvo usando esse id.
*/
export const NIVEIS = [
  {
    id: "iniciante",
    nome: "Fundamentos & I/O",
    rotulo: "Iniciante",
    grupos: [
      {
        titulo: null,
        exercicios: [
          {
            id: 1,
            titulo: "Apresentação pessoal",
            descricao:
              "Peça nome, idade e cidade com input() e mostre uma frase formatada com f-string. Calcule também em que ano a pessoa fará 100 anos.",
            codigo: String.raw`
from datetime import date

nome = input("Qual é o seu nome? ")
idade = int(input("Quantos anos você tem? "))
cidade = input("Em que cidade você mora? ")

print(f"Olá, {nome}! Você tem {idade} anos e mora em {cidade}.")

ano_100 = date.today().year + (100 - idade)
print(f"Você fará 100 anos em {ano_100}.")
`,
          },
          {
            id: 2,
            titulo: "Calculadora de operações",
            descricao:
              "Leia dois números decimais e exiba soma, subtração, multiplicação, divisão, divisão inteira, resto e potência, sempre com duas casas decimais.",
            codigo: String.raw`
a = float(input("Primeiro número: "))
b = float(input("Segundo número: "))

print(f"Soma: {a + b:.2f}")
print(f"Subtração: {a - b:.2f}")
print(f"Multiplicação: {a * b:.2f}")
print(f"Potência: {a ** b:.2f}")

if b != 0:
    print(f"Divisão: {a / b:.2f}")
    print(f"Divisão inteira: {a // b:.2f}")
    print(f"Resto: {a % b:.2f}")
else:
    print("Divisão, divisão inteira e resto: não é possível dividir por zero.")
`,
          },
          {
            id: 3,
            titulo: "Conversor de temperatura",
            descricao:
              "Leia uma temperatura em Celsius e mostre o equivalente em Fahrenheit e Kelvin. Fórmulas: F = C × 9/5 + 32 e K = C + 273,15.",
            codigo: String.raw`
celsius = float(input("Temperatura em Celsius: "))

fahrenheit = celsius * 9 / 5 + 32
kelvin = celsius + 273.15

print(f"{celsius:.1f} °C = {fahrenheit:.1f} °F = {kelvin:.2f} K")
`,
          },
          {
            id: 4,
            titulo: "Troco da compra",
            descricao:
              "Leia o preço do produto, a quantidade e o valor pago. Mostre o total e o troco; se o valor não cobrir a compra, informe quanto falta.",
            codigo: String.raw`
preco = float(input("Preço do produto: R$ "))
quantidade = int(input("Quantidade: "))
pago = float(input("Valor pago: R$ "))

total = preco * quantidade
print(f"Total da compra: R$ {total:.2f}")

if pago >= total:
    print(f"Troco: R$ {pago - total:.2f}")
else:
    print(f"Valor insuficiente. Faltam R$ {total - pago:.2f}.")
`,
          },
        ],
      },
    ],
  },

  {
    id: "medio",
    nome: "Lógica & Estruturas de Dados",
    rotulo: "Médio",
    grupos: [
      {
        titulo: "Controle de fluxo",
        exercicios: [
          {
            id: 5,
            titulo: "Classificador de IMC",
            descricao:
              "Leia peso e altura, calcule o IMC e classifique em abaixo do peso, normal, sobrepeso ou obesidade usando if, elif e else. Exiba o IMC com uma casa decimal.",
            codigo: String.raw`
peso = float(input("Peso (kg): "))
altura = float(input("Altura (m): "))

imc = peso / altura ** 2

if imc < 18.5:
    categoria = "abaixo do peso"
elif imc < 25:
    categoria = "peso normal"
elif imc < 30:
    categoria = "sobrepeso"
else:
    categoria = "obesidade"

print(f"Seu IMC é {imc:.1f}: {categoria}.")
`,
          },
          {
            id: 6,
            titulo: "Tabuada com validação",
            descricao:
              "Peça um inteiro entre 1 e 10 e repita a pergunta com while até o valor ser válido. Depois, mostre a tabuada completa com for.",
            codigo: String.raw`
numero = int(input("Digite um número de 1 a 10: "))

while numero < 1 or numero > 10:
    print("Valor inválido. Tente novamente.")
    numero = int(input("Digite um número de 1 a 10: "))

for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")
`,
          },
          {
            id: 7,
            titulo: "Jogo de adivinhação",
            descricao:
              "O programa sorteia um número de 1 a 50 e o usuário tem 7 tentativas, com dicas de maior ou menor. Use break ao acertar e informe o resultado final.",
            codigo: String.raw`
import random

segredo = random.randint(1, 50)
tentativas_max = 7
acertou = False

for tentativa in range(1, tentativas_max + 1):
    palpite = int(input(f"Tentativa {tentativa}/{tentativas_max} - seu palpite: "))

    if palpite == segredo:
        acertou = True
        break
    elif palpite < segredo:
        print("O número é maior.")
    else:
        print("O número é menor.")

if acertou:
    print(f"Parabéns! Você acertou em {tentativa} tentativa(s).")
else:
    print(f"Você perdeu. O número era {segredo}.")
`,
          },
        ],
      },
      {
        titulo: "Estruturas de dados",
        exercicios: [
          {
            id: 8,
            titulo: "Lista de compras",
            descricao:
              "Crie um menu em loop para adicionar, remover, listar (numerados) e ordenar itens de uma lista. Trate a remoção de um item que não existe.",
            codigo: String.raw`
itens = []

while True:
    print("\n1 - Adicionar item")
    print("2 - Remover item")
    print("3 - Listar itens")
    print("4 - Ordenar alfabeticamente")
    print("5 - Sair")
    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        item = input("Item: ").strip()
        if item:
            itens.append(item)
    elif opcao == "2":
        item = input("Item a remover: ").strip()
        if item in itens:
            itens.remove(item)
        else:
            print("Esse item não está na lista.")
    elif opcao == "3":
        if not itens:
            print("A lista está vazia.")
        for i, item in enumerate(itens, start=1):
            print(f"{i}. {item}")
    elif opcao == "4":
        itens.sort(key=str.lower)
        print("Lista ordenada.")
    elif opcao == "5":
        break
    else:
        print("Opção inválida.")
`,
          },
          {
            id: 9,
            titulo: "Contador de palavras",
            descricao:
              "Conte quantas vezes cada palavra aparece em uma frase usando um dicionário, ignorando maiúsculas e pontuação. Mostre da mais frequente para a menos frequente.",
            codigo: String.raw`
import string

frase = input("Digite uma frase: ").lower()

for pontuacao in string.punctuation:
    frase = frase.replace(pontuacao, "")

contagem = {}
for palavra in frase.split():
    contagem[palavra] = contagem.get(palavra, 0) + 1

ordenado = sorted(contagem.items(), key=lambda par: par[1], reverse=True)

for palavra, quantidade in ordenado:
    print(f"{palavra}: {quantidade}")
`,
          },
          {
            id: 10,
            titulo: "Agenda de contatos",
            descricao:
              "Use um dicionário de dicionários (telefone e e-mail) para cadastrar, buscar, listar e excluir contatos. Use um set para impedir e-mails duplicados.",
            codigo: String.raw`
agenda = {}
emails_usados = set()


def cadastrar():
    nome = input("Nome: ").strip()
    telefone = input("Telefone: ").strip()
    email = input("E-mail: ").strip().lower()

    if nome in agenda:
        print("Já existe um contato com esse nome.")
    elif email in emails_usados:
        print("Esse e-mail já está cadastrado.")
    else:
        agenda[nome] = {"telefone": telefone, "email": email}
        emails_usados.add(email)
        print("Contato cadastrado.")


def buscar():
    nome = input("Nome a buscar: ").strip()
    contato = agenda.get(nome)
    if contato:
        print(f"{nome} - {contato['telefone']} - {contato['email']}")
    else:
        print("Contato não encontrado.")


def listar():
    if not agenda:
        print("A agenda está vazia.")
    for nome, contato in agenda.items():
        print(f"{nome} - {contato['telefone']} - {contato['email']}")


def excluir():
    nome = input("Nome a excluir: ").strip()
    contato = agenda.pop(nome, None)
    if contato:
        emails_usados.discard(contato["email"])
        print("Contato excluído.")
    else:
        print("Contato não encontrado.")


acoes = {"1": cadastrar, "2": buscar, "3": listar, "4": excluir}

while True:
    print("\n1 - Cadastrar | 2 - Buscar | 3 - Listar | 4 - Excluir | 5 - Sair")
    opcao = input("Escolha uma opção: ")

    if opcao == "5":
        break

    acoes.get(opcao, lambda: print("Opção inválida."))()
`,
          },
        ],
      },
    ],
  },

  {
    id: "avancado",
    nome: "Orientação a Objetos & Arquivos",
    rotulo: "Avançado",
    grupos: [
      {
        titulo: null,
        exercicios: [
          {
            id: 11,
            titulo: "Sistema de biblioteca",
            descricao:
              "Modele Livro, Usuario e Biblioteca com empréstimo e devolução. Cada usuário pode ter no máximo 3 livros e não se empresta livro já emprestado; use exceções personalizadas e __str__.",
            codigo: String.raw`
class BibliotecaError(Exception):
    """Erro base das regras da biblioteca."""


class LivroIndisponivelError(BibliotecaError):
    pass


class LimiteEmprestimosError(BibliotecaError):
    pass


class Livro:
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor
        self.disponivel = True

    def __str__(self):
        status = "disponível" if self.disponivel else "emprestado"
        return f"{self.titulo} ({self.autor}) - {status}"


class Usuario:
    LIMITE = 3

    def __init__(self, nome):
        self.nome = nome
        self.livros = []

    def __str__(self):
        return f"{self.nome} ({len(self.livros)}/{self.LIMITE} livros)"


class Biblioteca:
    def __init__(self):
        self.livros = []
        self.usuarios = []

    def cadastrar_livro(self, livro):
        self.livros.append(livro)

    def cadastrar_usuario(self, usuario):
        self.usuarios.append(usuario)

    def emprestar(self, livro, usuario):
        if not livro.disponivel:
            raise LivroIndisponivelError(f"'{livro.titulo}' já está emprestado.")
        if len(usuario.livros) >= Usuario.LIMITE:
            raise LimiteEmprestimosError(
                f"{usuario.nome} atingiu o limite de {Usuario.LIMITE} livros."
            )
        livro.disponivel = False
        usuario.livros.append(livro)

    def devolver(self, livro, usuario):
        if livro in usuario.livros:
            usuario.livros.remove(livro)
            livro.disponivel = True

    def listar_disponiveis(self):
        return [livro for livro in self.livros if livro.disponivel]


# Teste rápido
biblioteca = Biblioteca()
ana = Usuario("Ana")
biblioteca.cadastrar_usuario(ana)

acervo = [
    ("Dom Casmurro", "Machado de Assis"),
    ("O Cortiço", "Aluísio Azevedo"),
    ("Capitães da Areia", "Jorge Amado"),
    ("Vidas Secas", "Graciliano Ramos"),
]
for titulo, autor in acervo:
    biblioteca.cadastrar_livro(Livro(titulo, autor))

try:
    for livro in biblioteca.livros:
        biblioteca.emprestar(livro, ana)
except BibliotecaError as erro:
    print(f"Erro: {erro}")

print(ana)
for livro in biblioteca.listar_disponiveis():
    print(livro)
`,
          },
          {
            id: 12,
            titulo: "Analisador de vendas em CSV",
            descricao:
              "Leia um vendas.csv com tratamento de erros, calcule o faturamento total e por categoria, e descubra o produto mais vendido. Salve um relatorio.json e use type hints e um decorator que mede o tempo.",
            codigo: String.raw`
import csv
import json
import time
from functools import wraps


def medir_tempo(funcao):
    @wraps(funcao)
    def wrapper(*args, **kwargs):
        inicio = time.perf_counter()
        resultado = funcao(*args, **kwargs)
        duracao = time.perf_counter() - inicio
        print(f"{funcao.__name__} levou {duracao:.4f}s")
        return resultado

    return wrapper


@medir_tempo
def ler_vendas(caminho: str) -> list[dict]:
    vendas = []
    try:
        with open(caminho, newline="", encoding="utf-8") as arquivo:
            for numero, linha in enumerate(csv.DictReader(arquivo), start=2):
                try:
                    vendas.append({
                        "produto": linha["produto"],
                        "categoria": linha["categoria"],
                        "quantidade": int(linha["quantidade"]),
                        "preco": float(linha["preco"]),
                    })
                except (ValueError, KeyError):
                    print(f"Linha {numero} ignorada: dados inválidos.")
    except FileNotFoundError:
        print(f"Arquivo '{caminho}' não encontrado.")
    return vendas


def faturamento_total(vendas: list[dict]) -> float:
    return sum(v["quantidade"] * v["preco"] for v in vendas)


def faturamento_por_categoria(vendas: list[dict]) -> dict[str, float]:
    resultado: dict[str, float] = {}
    for v in vendas:
        valor = v["quantidade"] * v["preco"]
        resultado[v["categoria"]] = resultado.get(v["categoria"], 0) + valor
    return resultado


def produto_mais_vendido(vendas: list[dict]) -> str:
    quantidades: dict[str, int] = {}
    for v in vendas:
        quantidades[v["produto"]] = quantidades.get(v["produto"], 0) + v["quantidade"]
    return max(quantidades, key=quantidades.get)


vendas = ler_vendas("vendas.csv")

if vendas:
    relatorio = {
        "faturamento_total": round(faturamento_total(vendas), 2),
        "por_categoria": {
            categoria: round(total, 2)
            for categoria, total in faturamento_por_categoria(vendas).items()
        },
        "produto_mais_vendido": produto_mais_vendido(vendas),
    }

    with open("relatorio.json", "w", encoding="utf-8") as arquivo:
        json.dump(relatorio, arquivo, ensure_ascii=False, indent=2)

    print("Relatório salvo em relatorio.json")
`,
          },
        ],
      },
    ],
  },
];
