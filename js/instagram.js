// Hide button Instagram
window.addEventListener('load', function() {
    setTimeout(function() {
      var elementToHide = document.querySelector('a[href="https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instashow&utm_term=127.0.0.1&utm_campaign=free-widget"]');
      if (elementToHide) {
        elementToHide.style.display = 'none';
      }
    }, 1000);
  });
  

// Adiciona a função de alternar tema ao botão de alternar
document.getElementById('btn-toggle').addEventListener('click', function() {
    // Obtém o elemento html que representa o link de CSS
    var cssLink = document.querySelector('link[data-theme="default"]');
  
    // Verifica se o link atual é o tema padrão ou o tema escuro
    if (cssLink.getAttribute('href') == 'css/new-skin/new-skin.css') {
      // Troca o atributo href do link para carregar o arquivo CSS do tema escuro
      cssLink.setAttribute('href', 'css/template-dark/dark.css');
    } else {
      // Troca o atributo href do link para carregar o arquivo CSS do tema padrão
      cssLink.setAttribute('href', 'css/new-skin/new-skin.css');
    }
  
    // Obtém o elemento do ícone dentro do botão
    var icon = document.querySelector('#btn-toggle i');
  
    // Alterna entre as classes de ícone "fa-sun" e "fa-moon"
    icon.classList.toggle('fa-sun-o');
    icon.classList.toggle('fa-moon-o');
  });
  