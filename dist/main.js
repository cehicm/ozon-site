const toggle=document.querySelector(".toggle"),menu=document.querySelector(".menu"),items=document.querySelectorAll(".item"),faders=document.querySelectorAll(".fade-in"),sliders=document.querySelectorAll(".slide-in"),calcBtn=document.getElementById("calculate"),appearOptions={threshold:0,rootMargin:"0px 0px -250px 0px"},appearOnScroll=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))}),appearOptions);function toggleMenu(){menu.classList.contains("active")?(menu.classList.remove("active"),toggle.querySelector("a").innerHTML="<i class='fas fa-bars'></i>"):(menu.classList.add("active"),toggle.querySelector("a").innerHTML="<i class='fas fa-times'></i>")}function toggleItem(){this.classList.contains("submenu-active")?this.classList.remove("submenu-active"):menu.querySelector(".submenu-active")?(menu.querySelector(".submenu-active").classList.remove("submenu-active"),this.classList.add("submenu-active")):this.classList.add("submenu-active")}function closeSubmenu(e){!menu.contains(e.target)&&menu.querySelector(".submenu-active")&&menu.querySelector(".submenu-active").classList.remove("submenu-active")}faders.forEach((e=>{appearOnScroll.observe(e)})),sliders.forEach((e=>{appearOnScroll.observe(e)})),toggle&&toggle.addEventListener("click",toggleMenu,!1);for(let e of items)e.querySelector(".submenu")&&e.addEventListener("click",toggleItem,!1),e.addEventListener("keypress",toggleItem,!1);document.addEventListener("click",closeSubmenu,!1);const calculateServices=e=>{e.preventDefault();const t=parseFloat(document.querySelector(".select-calc").value),s=document.querySelector(".calc-form-input").value,c=document.querySelector(".result-span");if(""!==s&&0!=s)if(t){document.querySelector(".result-span").innerHTML=t*s+"rsd"}else c.innerHTML="Odaberite uslugu";else c.innerHTML="Unesite ispravnu vrednost"};calcBtn.addEventListener("click",calculateServices);