const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

// Intersection Observers

// Toggle mobile menu
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector(
      "a"
    ).innerHTML = `<svg class="bars-icon" viewBox="0 0 100 80">
    <rect width="100" height="20"></rect>
    <rect y="30" width="100" height="20"></rect>
    <rect y="60" width="100" height="20"></rect>
  </svg>`;
  } else {
    menu.classList.add("active");
    toggle.querySelector(
      "a"
    ).innerHTML = `<svg viewBox="0 0 40 40" enable-background="new 0 0 40 40">
    <line class="close-icon" x1="15" y1="15" x2="25" y2="25"></line>
    <line class="close-icon" x1="25" y1="15" x2="15" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
  </path>
  </svg>`;
  }
}

// Activate Submenu
function toggleItem() {
  this.classList.contains("submenu-active")
    ? this.classList.remove("submenu-active")
    : menu.querySelector(".submenu-active")
    ? (menu.querySelector(".submenu-active").classList.remove("submenu-active"),
      this.classList.add("submenu-active"))
    : this.classList.add("submenu-active");
}

// Close Submenu From Anywhere
function closeSubmenu(evt) {
  let isClickInside = menu.contains(evt.target);

  !isClickInside && menu.querySelector(".submenu-active")
    ? menu.querySelector(".submenu-active").classList.remove("submenu-active")
    : null;
}

for (let item of items) {
  item.querySelector(".submenu")
    ? item.addEventListener("click", toggleItem, false)
    : null;
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

toggle ? toggle.addEventListener("click", toggleMenu, false) : null;
