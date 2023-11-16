function toggleSubMenu(menuId) {
    var subMenu = document.getElementById(menuId);
    if (subMenu.style.display === "none" || subMenu.style.display === "") {
        subMenu.style.display = "block";
    } else {
        subMenu.style.display = "none";
    }
}
