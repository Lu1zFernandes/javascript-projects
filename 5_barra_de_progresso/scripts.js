//! Selecionar os elementos
const progressBar = document.querySelector(".progress");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let progress = 0;

//! Função de atualizar a barra de progresso
function updateProgressBar() {
  progressBar.style.width = progress + "%";
}

//! Função de avançar a barra de progresso
function nextStap() {
  progress += 10;
  if (progress > 100) progress = 100;
  updateProgressBar();
}

//! Função de retroceder a barra de progresso
function previousStap() {
  progress -= 10;
  if (progress < 0) progress = 0;
  updateProgressBar();
}

//!Botões da chamada da função
nextBtn.addEventListener("click", nextStap);
previousBtn.addEventListener("click", previousStap);
