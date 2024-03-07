//! Selecionar os elementos
const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMessages = document.querySelectorAll(".error-message");

//! Envio do formulário e chamadas das funções
form.addEventListener("submit", (event) => {
  event.preventDefault();

  resetErrors();
  validateInputs();
});

//! Função de error
function setError(input, errorMessage) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.textContent = errorMessage;
  input.parentElement.classList.add("error");
}

//!Função para limpar erros
function resetErrors() {
  errorMessages.forEach((msg) => {
    msg.textContent = "";
  });
  nome.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  assunto.parentElement.classList.remove("error");
  mensagem.parentElement.classList.remove("error");
}

//! Função para validar os inputs
function validateInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const assuntoValue = assunto.value.trim();
  const mensagemValue = mensagem.value.trim();

  if (nomeValue === "") {
    setError(nome, "O nome não pode ficar em branco");
  }

  if (emailValue === "") {
    setError(email, "O E-mail não pode ficar em branco");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "E-mail inválido");
  }
  if (assuntoValue === "") {
    setError(assunto, "O assunto não pode ficar em branco");
  }

  if (mensagemValue === "") {
    setError(mensagem, "A mensagem não pode ficar em branco");
  }
}

//!Função para validar o email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
