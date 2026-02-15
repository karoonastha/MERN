document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const menu = document.getElementById("menu");
  const icon = menuIcon.querySelector("i");

  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      icon.classList.replace("fa-bars", "fa-xmark");
    } else {
      icon.classList.replace("fa-xmark", "fa-bars");
    }
  });
});
