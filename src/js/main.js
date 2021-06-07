const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const calcBtn = document.getElementById("calculate");

// Intersection Observers
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    !entry.isIntersecting
      ? true
      : entry.target.classList.add("appear") &&
        appearOnScroll.unobserve(entry.target);
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// Toggle mobile menu

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

// Activate Submenu
function toggleItem() {
  this.classList.contains("submenu-active")
    ? this.classList.remove("submenu-active")
    : menu.querySelector(".submenu-active")
    ? menu
        .querySelector(".submenu-active")
        .classList.remove("submenu-active") &&
      this.classList.add("submenu-active")
    : this.classList.add("submenu-active");
}

// Close Submenu From Anywhere
function closeSubmenu(evt) {
  let isClickInside = menu.contains(evt.target);

  !isClickInside && menu.querySelector(".submenu-active")
    ? menu.querySelector(".submenu-active").classList.remove("submenu-active")
    : null;

  toggle ? toggle.addEventListener("click", toggleMenu, false) : null;
}

for (let item of items) {
  item.querySelector(".submenu")
    ? item.addEventListener("click", toggleItem, false)
    : null;
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

//Calculator
const calculateServices = (evt) => {
  evt.preventDefault();
  const selectCalc = parseFloat(document.querySelector(".select-calc").value);
  const userInput = document.querySelector(".calc-form-input").value;
  const resultSpan = document.querySelector(".result-span");
  const result = selectCalc * userInput;

  userInput === "" || userInput == 0
    ? (resultSpan.innerHTML = "Unesite ispravnu vrednost")
    : !selectCalc
    ? (resultSpan.innerHTML = "Odaberite uslugu")
    : result <= 900
    ? (resultSpan.innerHTML = "900rsd")
    : (resultSpan.innerHTML = result + "rsd");
};

calcBtn.addEventListener("click", calculateServices);

//slideshow
// $(".carousel > div:gt(0)").hide();

// setInterval(function () {
//   $(".carousel > div:first")
//     .fadeOut(5000)
//     .next()
//     .fadeIn(5000)
//     .end()
//     .appendTo(".carousel");
// }, 5000);
