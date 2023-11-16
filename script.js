function toggleSubMenu(menuId) {
    // Oculta todos los sub-menus primero
    document.querySelectorAll('.sub-buttons-container').forEach(function(subMenu) {
        subMenu.style.display = 'none';
    });

    // Muestra el sub-menu clickeado si estaba previamente oculto
    var subMenu = document.getElementById(menuId);
    if (subMenu.style.display === "none" || subMenu.style.display === "") {
        subMenu.style.display = "flex";
    }
}
