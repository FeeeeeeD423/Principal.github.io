function showSubMenu(subMenuId) {
    // Oculta los botones principales
    document.getElementById('main-buttons').style.display = 'none';

    // Muestra los sub-botones correspondientes
    document.getElementById(subMenuId).style.display = 'flex';
}

function showMainMenu() {
    // Muestra los botones principales
    document.getElementById('main-buttons').style.display = 'flex';

    // Oculta todos los sub-menús
    var subMenus = document.querySelectorAll('.sub-menu');
    subMenus.forEach(function(subMenu) {
        subMenu.style.display = 'none';
    });
}
