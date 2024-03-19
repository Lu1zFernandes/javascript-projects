const texto = document.querySelector("#texto");
const entrada = document.querySelector("#entrada");
const reiniciar = document.querySelector("#reiniciar");
const resultado = document.querySelector("#resultado");
const historico = document.querySelector("#historico");
const alternarTemaBtn = document.querySelector("#alternarTema");

const textList = [
  "Exemplo de texto para digitar.",
  "Outro exemplo de texto para digitar.",
  "Mais um exemplo de texto para digitar.",
  "Digite isso.",
  "Você pode digitar isso aqui.",
  "Fim? A jornada não acaba aqui. A morte é apenas um outro caminho que todos temos que tomar.",
  "Trabalho duro é inútil para aqueles que não acreditam em si mesmos",
  "Existem inimigos que não são convencidos com palavras.",
  "A verdadeira coragem não está em saber quando tirar uma vida, mas, sim, em quando poupar uma.",
  "Não devemos nos questionar porque algumas coisas nos acontecem e sim o que podemos fazer com o tempo que nos é dado.",
];

function novoTexto() {
  const index = Math.floor(Math.random() * textList.length);
  texto.textContent = textList[index];
}

function atualizarTeste() {
  iniciar();

  if (entrada.value === texto.textContent) {
    verificar();
  }
}

function iniciar() {
  const statusDoTeste = JSON.parse(localStorage.getItem("testeEmAndamento"));

  if (!statusDoTeste) {
    localStorage.setItem("tempoInicial", new Date().getTime());
    localStorage.setItem("testeEmAndamento", true);
  }
}

function verificar() {
  const tempoFinal = new Date().getTime();
  const tempoInicial = parseInt(localStorage.getItem("tempoInicial"));
  const tempoGasto = (tempoFinal - tempoInicial) / 1000;

  resultado.textContent = `Parabéns! Você levou ${tempoGasto} segundos!`;

  adicionarAoHistorico(texto.textContent, tempoGasto);

  localStorage.setItem("testeEmAndamento", false);
  entrada.value = "";
  novoTexto();
}

function adicionarAoHistorico(textoDigitado, tempoGasto) {
  const itemHistorico = document.createElement("p");
  itemHistorico.textContent = `Texto: "${textoDigitado}" - Tempo: ${tempoGasto} segundos`;
  historico.appendChild(itemHistorico);
}

function reiniciarTeste() {
  entrada.value = "";
  resultado.textContent = "";
  novoTexto();
  localStorage.setItem("testeEmAndamento", false);
  historico.innerHTML = "";
}

function alternarTema() {
  const body = document.body;

  body.classList.toggle("claro");
  body.classList.toggle("escuro");
}

entrada.addEventListener("keyup", atualizarTeste);
reiniciar.addEventListener("click", reiniciarTeste);

alternarTemaBtn.addEventListener("click", alternarTema);

novoTexto();
