document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-button").addEventListener("click",showMenu)
    document.getElementById("close-menu").addEventListener("click",closeMenu)
        function showMenu() {
        const menu = document.querySelector(".menu");
        menu.style.height="100%";
        console.log("showMenu");
    }
    function closeMenu() {
        const menu = document.querySelector(".menu");
        menu.style.height="0";
        console.log("closeMenu");

    }
    function addClickToMenuItems() {
       let menuItems = document.querySelectorAll("section.menu ul > li");
       for(let menuItem of menuItems) {
        menuItem.addEventListener("click",closeMenu);
       }
    }
    addClickToMenuItems();
})