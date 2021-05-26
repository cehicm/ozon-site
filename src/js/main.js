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
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
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
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

// Close Submenu From Anywhere
function closeSubmenu(evt) {
  let isClickInside = menu.contains(evt.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
if (toggle) {
  toggle.addEventListener("click", toggleMenu, false);
}

for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

//Calculator
const calculateServices = () => {
  const selectCalc = parseFloat(document.querySelector(".select-calc").value);
  const userInput = document.querySelector(".calc-form-input").value;
  const resultSpan = document.querySelector(".result-span");

  if (userInput === "" || userInput == 0 || !selectCalc) {
    resultSpan.innerHTML = "Unesite ispravnu vrednost";
    return;
  } else {
    const result = document.querySelector(".result-span");
    result.innerHTML = selectCalc * userInput + "rsd";
  }
};

calcBtn.addEventListener("click", calculateServices);

//slideshow
// $(".slideshow > div:gt(0)").hide();

// setInterval(function () {
//   $(".slideshow > div:first")
//     .fadeOut(4000)
//     .next()
//     .fadeIn(4000)
//     .end()
//     .appendTo(".slideshow");
// }, 4000);

const divs = document.querySelectorAll("div");

if (divs.target.contains("jstcache")) {
  document.style.display = "none";
}
