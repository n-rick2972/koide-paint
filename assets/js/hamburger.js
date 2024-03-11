const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".header-menu-wrapper");

btn.addEventListener("click", () => {
  if (btn.classList.contains("open")) {
    btn.classList.remove("open");
  } else {
    btn.classList.add("open");
  }
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
  } else {
    nav.classList.add("open");
  }
});
