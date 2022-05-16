const open_menu = document.getElementById("open_menu")
const nav_elements = document.querySelector(".nav_elements")

open_menu.addEventListener("click", function() {
    if(nav_elements.classList.contains("hide")){
        nav_elements.classList.remove("hide")
    } else {
        nav_elements.classList.add("hide")
    }
})