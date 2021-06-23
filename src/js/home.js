// Intersection Observers
const sliders = document.querySelectorAll(".slide-in");

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

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//slideshow

// if (screen.width > 500) {
//   $(".carousel > div:gt(0)").hide();

//   setInterval(function () {
//     $(".carousel > div:first")
//       .fadeOut(4000)
//       .next()
//       .fadeIn(4000)
//       .end()
//       .appendTo(".carousel");
//   }, 4000);
// }

//Calculator
const calcBtn = document.getElementById("calculate");

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

//.append() ?

//break the array appart and then push it into the box?

// const showHideContent = () => {
//   const hiddenReviews = document.getElementById("hidden-reviews");
//   const updatedContent = document.getElementById("updated-content");
//   const newReviewText = `
//       <p class="review-content">
//       <object class="quote-icon"data="./src/images/SVG/quote-left-solid.svg" type="image/svg+xml"></object>
//       Brzi korektni,laki za dogovor. D.M.<object class="quote-icon" data="./src/images/SVG/quote-right-solid.svg" type="image/svg+xml"></object></p>

//       <p class="review-content">
//       <object class="quote-icon"data="./src/images/SVG/quote-left-solid.svg" type="image/svg+xml"></object>
//       Vrhunska usluga!! Tačni i profesionalni. S.S<object class="quote-icon" data="./src/images/SVG/quote-right-solid.svg" type="image/svg+xml"></object></p>`;

//   !hiddenReviews.classList.contains("hide-review")
//     ? (hiddenReviews.classList.add("hide-review"),
//       (updatedContent.innerHTML = newReviewText))
//     : hiddenReviews.classList.contains("hide-review")
//     ? (hiddenReviews.classList.remove("hide-review"),
//       updatedContent.classList.add("hide-review"))
//     : false;

//   hiddenReviews.classList.contains("hide-review")
//     ? updatedContent.classList.remove("hide-review")
//     : false;
// };

// setInterval(showHideContent, 6000);
