const toggle=document.querySelector(".toggle"),menu=document.querySelector(".menu"),items=document.querySelectorAll(".item");function toggleMenu(){menu.classList.contains("active")?(menu.classList.remove("active"),toggle.querySelector("a").innerHTML="<i class='fas fa-bars'></i>"):(menu.classList.add("active"),toggle.querySelector("a").innerHTML="<i class='fas fa-times'></i>")}function toggleItem(){this.classList.contains("submenu-active")?this.classList.remove("submenu-active"):menu.querySelector(".submenu-active")?(menu.querySelector(".submenu-active").classList.remove("submenu-active"),this.classList.add("submenu-active")):this.classList.add("submenu-active")}function closeSubmenu(e){!menu.contains(e.target)&&menu.querySelector(".submenu-active")&&menu.querySelector(".submenu-active").classList.remove("submenu-active")}toggle&&toggle.addEventListener("click",toggleMenu,!1);for(let e of items)e.querySelector(".submenu")&&e.addEventListener("click",toggleItem,!1),e.addEventListener("keypress",toggleItem,!1);document.addEventListener("click",closeSubmenu,!1);