"use strict";function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var toggle=document.querySelector(".toggle"),menu=document.querySelector(".menu"),items=document.querySelectorAll(".item"),sliders=document.querySelectorAll(".slide-in"),calcBtn=document.getElementById("calculate"),appearOptions={threshold:0,rootMargin:"0px 0px -250px 0px"},appearOnScroll=new IntersectionObserver((function(e,t){e.forEach((function(e){!e.isIntersecting||e.target.classList.add("appear")&&t.unobserve(e.target)}))}),appearOptions);function toggleMenu(){menu.classList.contains("active")?(menu.classList.remove("active"),toggle.querySelector("a").innerHTML='<svg class="bars-icon" viewBox="0 0 100 80">\n    <rect width="100" height="20"></rect>\n    <rect y="30" width="100" height="20"></rect>\n    <rect y="60" width="100" height="20"></rect>\n  </svg>'):(menu.classList.add("active"),toggle.querySelector("a").innerHTML='<svg viewBox="0 0 40 40" enable-background="new 0 0 40 40">\n    <line class="close-icon" x1="15" y1="15" x2="25" y2="25"></line>\n    <line class="close-icon" x1="25" y1="15" x2="15" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>\n  </path>\n  </svg>')}function toggleItem(){this.classList.contains("submenu-active")?this.classList.remove("submenu-active"):menu.querySelector(".submenu-active")?(menu.querySelector(".submenu-active").classList.remove("submenu-active"),this.classList.add("submenu-active")):this.classList.add("submenu-active")}function closeSubmenu(e){!menu.contains(e.target)&&menu.querySelector(".submenu-active")&&menu.querySelector(".submenu-active").classList.remove("submenu-active"),toggle&&toggle.addEventListener("click",toggleMenu,!1)}sliders.forEach((function(e){appearOnScroll.observe(e)}));var _step,_iterator=_createForOfIteratorHelper(items);try{for(_iterator.s();!(_step=_iterator.n()).done;){var item=_step.value;item.querySelector(".submenu")&&item.addEventListener("click",toggleItem,!1),item.addEventListener("keypress",toggleItem,!1)}}catch(e){_iterator.e(e)}finally{_iterator.f()}document.addEventListener("click",closeSubmenu,!1),screen.width>500&&($(".carousel > div:gt(0)").hide(),setInterval((function(){$(".carousel > div:first").fadeOut(4e3).next().fadeIn(4e3).end().appendTo(".carousel")}),4e3));var calculateServices=function(e){e.preventDefault();var t=parseFloat(document.querySelector(".select-calc").value),n=document.querySelector(".calc-form-input").value,r=document.querySelector(".result-span"),s=t*n;r.innerHTML=""===n||0==n?"Unesite ispravnu vrednost":t?s<=900?"900rsd":s+"rsd":"Odaberite uslugu"};calcBtn.addEventListener("click",calculateServices);var showHideContent=function(){var e=document.getElementById("hidden-reviews"),t=document.getElementById("updated-content");e.classList.contains("hide-review")?e.classList.contains("hide-review")&&(e.classList.remove("hide-review"),t.classList.add("hide-review")):(e.classList.add("hide-review"),t.innerHTML='\n  <p class="review-content">\n  <object class="quote-icon"data="./src/images/SVG/quote-left-solid.svg" type="image/svg+xml"></object>\n  Vrhunska usluga!! Tačni i profesionalni. S.S<object class="quote-icon" data="./src/images/SVG/quote-right-solid.svg" type="image/svg+xml"></object></p>\n  \n  <p class="review-content">\n  <object class="quote-icon"data="./src/images/SVG/quote-left-solid.svg" type="image/svg+xml"></object>\n  Vrhunska usluga!! Tačni i profesionalni. S.S<object class="quote-icon" data="./src/images/SVG/quote-right-solid.svg" type="image/svg+xml"></object></p>\n  \n  <p class="review-content">\n  <object class="quote-icon"data="./src/images/SVG/quote-left-solid.svg" type="image/svg+xml"></object>\n  Vrhunska usluga!! Tačni i profesionalni. S.S<object class="quote-icon" data="./src/images/SVG/quote-right-solid.svg" type="image/svg+xml"></object></p>\n  '),e.classList.contains("hide-review")&&t.classList.remove("hide-review")};setInterval(showHideContent,6e3);