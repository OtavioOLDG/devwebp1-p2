export function exibirMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Mensagem alterada pelo JavaScript!";
}

document.addEventListener("DOMContentLoaded", () => {
  exibirMensagem();
});
