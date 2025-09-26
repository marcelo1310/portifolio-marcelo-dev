import "./styles.css";
import { CardProjetos } from "../../Components/cardProjetos";
export function Projetos() {
  const projetos = document.createElement("section");
  projetos.innerHTML = `
    <div id="projetos" class="projetos-container">
      <div class="area-projetos">
        <div class="projetos-texto">
          <h2>O que já construí</h2>
          <p>Esta seção reúne alguns dos projetos que desenvolvi ao longo da minha jornada como programador. Cada trabalho reflete meu processo de aprendizado, explorando diferentes linguagens e ferramentas, sempre com foco em criar soluções funcionais, bem estruturadas e de fácil uso.</p>
        </div>

        <div class="projetos-lista">
          ${CardProjetos("https://i.imgur.com/3fJ1P48.png", "Projeto To Do List", "Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres. Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres. Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres. Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres.", "https://github.com/marcelomdsp/to-do-list").outerHTML}
          ${CardProjetos("https://i.imgur.com/3fJ1P48.png", "Projeto To Do List", "Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres.", "https://github.com/marcelomdsp/to-do-list").outerHTML}
          ${CardProjetos("https://i.imgur.com/3fJ1P48.png", "Projeto To Do List", "Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres.", "https://github.com/marcelomdsp/to-do-list").outerHTML}
          ${CardProjetos("https://i.imgur.com/3fJ1P48.png", "Projeto To Do List", "Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres. Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres. Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres.", "https://github.com/marcelomdsp/to-do-list").outerHTML}
        </div>
      </div>
    </div>
  `;
  return projetos;
}