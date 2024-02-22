// HAMBURGER MENU
const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.getElementById("navbar-links");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("myModal");

menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
  menuToggle.classList.toggle("change");
});

navbarLinks.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.classList.remove("show");
    menuToggle.classList.remove("change");
    modal.style.display = "none";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
