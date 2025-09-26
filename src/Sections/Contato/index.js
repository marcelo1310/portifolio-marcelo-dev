import "./styles.css";
import { Botao } from "../../Components/Botao";

export function Contato() {

  const contato = document.createElement("section");
  contato.innerHTML = `
    <div id="contato" class="contato-container">
    <div class="area-contato">
        <h2>Fale Comigo</h2>
        <p>Estou aberto a contribuir no desenvolvimento de projetos que entreguem resultados reais.</p>
        <div class="info-contato"> 
          <p><i class="fa-solid fa-phone"></i> (21)99655-3987  (WhatssApp)</p>
          <p><i class="fa-solid fa-envelope"></i>marcelopaulomsp@gmail.com</p>
          <div class="redes-sociais">
            <a href="https://github.com/marcelomdsp" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/marcelopaulomsp/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
       
        <div class="btn-contato">
        <p>Ou se preferir, envie uma mensagem pelo WhatsApp </br>clicando no botão abaixo:</p>
        </div>



     </div>
    </div>
  `;

   const btnContato = Botao("Fale no WhatsApp", "#contato");
      contato.querySelector(".btn-contato").appendChild(btnContato);
  return contato;
}
