const menuIcon = document.getElementById('menu-icon');
const menuContainer = document.querySelector('.menu-container');
const navbarNavigation = document.querySelector('.navbar-navigation');

menuIcon.addEventListener('click', () => {
    // Modifica o Display
    menuContainer.style.display = 'flex';
    menuContainer.style.flexDirection = 'column';

    // Alinha os Itens ao Centro
    navbarNavigation.style.justifyContent = 'center';
    navbarNavigation.style.alignItems = 'center';

    // Esconde o menu
    menuIcon.style.display = 'none';
});

// Fecha o Menu quando clica fora
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuContainer.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
        // Reseta o Código
        menuContainer.style.display = '';
        menuContainer.style.flexDirection = '';
        navbarNavigation.style.justifyContent = '';
        navbarNavigation.style.alignItems = '';
        menuIcon.style.display = '';
    }
});
