const burgerMenu = (burgerTrigger, burgerMenuSelector) => {
  const burgerIcon = document.querySelector(burgerTrigger);
  const burgerMenu = document.querySelector(burgerMenuSelector);

  burgerMenu.style.display = "none";

  burgerIcon.addEventListener("click", function () {
    if (
      getComputedStyle(burgerMenu).display == "none" &&
      window.screen.availWidth < 993
    ) {
      burgerMenu.style.display = "block";
    } else {
      burgerMenu.style.display = "none";
    }
  });

  window.addEventListener("resize", () => {
    if (window.screen.availWidth > 992) {
      burgerMenu.style.display = "none";
    }
  });
};

export default burgerMenu;
