"use strict";var sliders=document.querySelectorAll(".slide-in"),appearOptions={threshold:0,rootMargin:"0px 0px -250px 0px"},appearOnScroll=new IntersectionObserver((function(e,t){e.forEach((function(e){!e.isIntersecting||e.target.classList.add("appear")&&t.unobserve(e.target)}))}),appearOptions);sliders.forEach((function(e){appearOnScroll.observe(e)})),screen.width>500&&($(".carousel > div:gt(0)").hide(),setInterval((function(){$(".carousel > div:first").fadeOut(4e3).next().fadeIn(4e3).end().appendTo(".carousel")}),4e3));var calcBtn=document.getElementById("calculate"),calculateServices=function(e){e.preventDefault();var t=parseFloat(document.querySelector(".select-calc").value),s=document.querySelector(".calc-form-input").value,a=document.querySelector(".result-span"),n=t*s;a.innerHTML=""===s||0==s?"Unesite ispravnu vrednost":t?n<=900?"900rsd":n+"rsd":"Odaberite uslugu"};calcBtn.addEventListener("click",calculateServices);var showHideContent=function(){var e=document.getElementById("hidden-reviews"),t=document.getElementById("updated-content");e.classList.contains("hide-review")?e.classList.contains("hide-review")&&(e.classList.remove("hide-review"),t.classList.add("hide-review")):(e.classList.add("hide-review"),t.innerHTML='\n      <p class="review-content">\n      <object class="quote-icon" data="/src/images/SVG/level-down-alt-solid.svg" type="image/svg+xml"></object>\n      Brzi korektni,laki za dogovor. D.M.<object class="quote-icon" data="src/images/SVG/level-up-alt-solid.svg" type="image/svg+xml"></object></p>\n\n      <p class="review-content">\n      <object class="quote-icon" data="/src/images/SVG/level-down-alt-solid.svg" type="image/svg+xml"></object>\n      Godinama isključivo ovde perem tepihe. Profesionalna usluga i korektne cene. S.C.<object class="quote-icon" data="src/images/SVG/level-up-alt-solid.svg" type="image/svg+xml"></object></p>'),e.classList.contains("hide-review")&&t.classList.remove("hide-review")};