
document.getElementById("btn_home").addEventListener("click", function() {
    window.location.href = "./cardápio.html"; // Aqui você coloca o link para onde deseja redirecionar
});


   
   const menuIcon = document.querySelector('.menu-icon');
    const menuLateral = document.getElementById('menu-lateral');
    
    menuIcon.addEventListener('click', () => {
      // Abre o menu lateral quando o ícone é clicado
      menuLateral.style.right = '0';
    });
    
    // Adicione um ouvinte de evento de clique ao documento para fechar o menu lateral
    document.addEventListener('click', (event) => {
      const isMenuClicked = menuIcon.contains(event.target) || menuLateral.contains(event.target);
    
      if (!isMenuClicked) {
        // Fecha o menu lateral se o clique não estiver dentro dele ou no ícone
        menuLateral.style.right = '-250px';
      }
    });

