import "./styles.css";
import { CardProjetos } from "../../Components/cardProjetos";
import imc from "../../img/projetos/imc.png";
import trafego from "../../img/projetos/trafego.png";

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
          ${CardProjetos(imc, "Calculadora de IMC", "Aplicação web para cálculo do Índice de Massa Corporal (IMC), onde o usuário insere peso e altura para obter seu IMC acompanhado de uma interpretação baseada na classificação padrão. O desenvolvimento foi feito em React, com estilização utilizando Styled-components e gerenciamento de estado global via Context API. O projeto também incorpora JavaScript (ES6+) e TypeScript, demonstrando práticas modernas de desenvolvimento front-end.", "https://calculeseuimc-msp.vercel.app/", "https://github.com/marcelomdsp/calculo-de-imc-react").outerHTML}

          ${CardProjetos(trafego, "Landing Page de Tráfego Pago", "Este projeto é uma landing page desenvolvida para apresentar meus serviços como Gestor de Tráfego Pago, com foco em ajudar negócios locais a atrair mais clientes diariamente através de estratégias de anúncios personalizadas. A página destaca os serviços oferecidos, a proposta de valor e conta com otimização SEO para melhorar a visibilidade nos motores de busca. O projeto foi construído utilizando React para a estrutura de componentes, Vite para otimização e build, Tailwind CSS para estilização rápida e responsiva, e TypeScript para maior segurança e robustez no código, com deploy realizado na HostGator.", "https://marcelods.com/", "https://github.com/marcelomdsp/marcelo-gestaodetrafego").outerHTML}

          ${CardProjetos("../../img/projetos/3fJ1P48.png", "Projeto To Do List", "Uma aplicação web para gerenciar tarefas diárias, permitindo adicionar, editar e excluir itens de uma lista de afazeres.", "https://github.com/marcelomdsp/to-do-list").outerHTML}
        </div>
      </div>
    </div>
  `;
  return projetos;
}