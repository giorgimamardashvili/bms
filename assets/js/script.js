window.addEventListener("DOMContentLoaded", () => {
  function burgerClick() {
    const burger = document.querySelector(".mobmenu__burger"),
      rightHead = document.querySelector(".header__right"),
      leftHead = document.querySelector(".header__left.left-header"),
      menu = document.querySelector(".header__mobmenu.mobmenu"),
      lang = document.querySelector(".mobmenu__lang"),
      normMenu = document.querySelector(".mobmenu__left_normal");

    burger.addEventListener("click", () => {
      rightHead.classList.toggle("active");
      leftHead.classList.toggle("active");
      burger.classList.toggle("active");

      if (normMenu) {
        normMenu.classList.toggle("active");
      }
      if (menu) {
        menu.classList.toggle("active");
      }
      if(lang) {
        lang.classList.toggle("active");
      }
    });
  }
  burgerClick();
});
