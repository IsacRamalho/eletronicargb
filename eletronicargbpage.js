const tabButtons = document.querySelectorAll('.aba-botao');
const tabPanes = document.querySelectorAll('.painel-guias');

// Função para ativar uma aba específica
function activateTab(index) {
  // Remover a classe 'active' de todos os botões e painéis
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabPanes.forEach(pane => pane.classList.remove('active'));

  // Adicionar a classe 'active' ao botão e painel correspondentes
  tabButtons[index].classList.add('active');
  tabPanes[index].classList.add('active');
}
tabButtons[3].addEventListener('click', () => {
    activateTab(0);
  
    // Redirecionar para a página de contato
    window.location.href = 'sobre.html';
  });
  
  // Ativar a primeira aba por padrão
  activateTab(0);

// Ativar a aba de contato quando o botão for clicado
tabButtons[1].addEventListener('click', () => {
  activateTab(1);

  // Redirecionar para a página de contato
  window.location.href = 'contato.html';
});

// Ativar a primeira aba por padrão
activateTab(0);
