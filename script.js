import 'bootstrap/dist/js/bootstrap.bundle.min';

// Função para esconder todos os dropdowns e sub-dropdowns
function hideDropdowns() {
    document.querySelectorAll('.dropdown, .sub-dropdown').forEach(dropdown => {
        dropdown.style.display = 'none';
    });
}

// Esconde todos os dropdowns quando clicar fora deles
document.addEventListener('click', function (e) {
    const dropdowns = document.querySelectorAll('.dropdown, .sub-dropdown');
    let isClickInside = false;

    dropdowns.forEach(dropdown => {
        if (dropdown.contains(e.target)) {
            isClickInside = true;
        }
    });

    if (!isClickInside) {
        hideDropdowns();
    }
});

// Mostra/Esconde dropdown e sub-dropdown ao passar o mouse
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('mouseover', function () {
        const dropdown = this.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    });

    item.addEventListener('mouseout', function (event) {
        const dropdown = this.querySelector('.dropdown');
        const subDropdown = this.querySelector('.sub-dropdown');

        // Verifica se o mouse está saindo do item principal ou do sub-dropdown
        if (dropdown && !dropdown.contains(event.relatedTarget)) {
            dropdown.style.display = 'none';
        }
        if (subDropdown && !subDropdown.contains(event.relatedTarget)) {
            subDropdown.style.display = 'none';
        }
    });
});

// Lida separadamente com sub-dropdowns para garantir comportamento correto
document.querySelectorAll('.dropdown li').forEach(subItem => {
    subItem.addEventListener('mouseover', function () {
        const subDropdown = this.querySelector('.sub-dropdown');
        if (subDropdown) {
            subDropdown.style.display = 'block';
        }
    });

    subItem.addEventListener('mouseout', function (event) {
        const subDropdown = this.querySelector('.sub-dropdown');
        if (subDropdown && !subDropdown.contains(event.relatedTarget)) {
            subDropdown.style.display = 'none';
        }
    });
});




//CSS cadeiras
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.containerCards');
    const cards = document.querySelectorAll('.card');
  
    // Adiciona a classe 'hovering' ao container quando o mouse está sobre um dos cartões
    container.addEventListener('mouseover', (event) => {
      if (event.target.closest('.card')) {
        container.classList.add('hovering');
      }
    });
  
    // Remove a classe 'hovering' do container quando o mouse sai de todos os cartões
    container.addEventListener('mouseout', (event) => {
      // Verifica se o mouse saiu de todos os cartões
      let mouseOutOfCards = true;
      cards.forEach(card => {
        if (card.matches(':hover')) {
          mouseOutOfCards = false;
        }
      });
  
      if (mouseOutOfCards) {
        container.classList.remove('hovering');
      }
    });
  });
  



  let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Rolando para baixo
      header.style.top = '-90px'; // Oculta o cabeçalho (ajuste -90px conforme necessário)
    } else {
      // Rolando para cima
      header.style.top = '0px'; // Mostra o cabeçalho
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para Mobile Safari
  });
