// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            const submenu = this.querySelector(".submenu");
            if (submenu) {
                submenu.classList.toggle("show");
                event.preventDefault();
            }
        });
    });
});
