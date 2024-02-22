// HAMBURGER MENU
const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.getElementById("navbar-links");

menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
  menuToggle.classList.toggle("change");
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
