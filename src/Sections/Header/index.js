import "./styles.css";
import { Botao } from "../../Components/Botao";
export function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
  <div id="header" class="header-container">
    <div class="header-area">
      <a href="#" class="header-logo">MS</a>
      <button class="menu-toggle" aria-label="Abrir Menu"><i class="fa-solid fa-bars"></i></button>
      <nav class="header-nav">
        <ul>
          <li><a class="header-link" href="#hero">Início</a></li>
          <li><a class="header-link" href="#sobre">Sobre</a></li>
          <li><a class="header-link" href="#projetos">Projetos</a></li>
          <li><a class="header-link" href="#contato">Contato</a></li>
        </ul>
        <div class="btn-header"></div>
      </nav>
    </div>
  </div>
    `;

  const toggle = header.querySelector(".menu-toggle");
  const menu = header.querySelector(".header-nav");
  const links = header.querySelectorAll(".header-link");
  const btnHeader = Botao("Falar no WhatsApp", "https://wa.me/5511999999999");
  header.querySelector(".btn-header").appendChild(btnHeader);

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const headerscroll = document.getElementById("header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        headerscroll.classList.add("scrolled");
      } else {
        headerscroll.classList.remove("scrolled");
      }
    });
  });

  return header;
}
