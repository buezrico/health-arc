function openMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const links = document.querySelector(".links");
  console.log("Working");
  menuBtn.classList.toggle("menu-btn-active");
  links.classList.toggle("show-menu");
}
