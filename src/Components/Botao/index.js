import "./styles.css";
export function Botao(texto, link, animacao) {
  const botao = document.createElement("a");

  botao.innerText = texto;
  botao.href = link;
  botao.classList.add("botao");
  botao.classList.add(animacao);
  botao.target = "_blank";

  return botao;
}
