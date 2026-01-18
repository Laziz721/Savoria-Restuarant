const menuToggleEl = document.getElementById("menu-toggle");
const navLinksEl = document.getElementById("nav-links");

menuToggleEl.addEventListener("click", () => {
  navLinksEl.classList.toggle("active");
});