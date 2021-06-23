const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-img");

Array.from(document.querySelectorAll(".ImgThumbnail")).forEach((item) => {
  item.addEventListener("click", (event) => {
    modal.style.display = "block";
    modalImage.src = event.target.src;
  });
});
document.querySelector(".modal-close").addEventListener("click", () => {
  modal.style.display = "none";
});
