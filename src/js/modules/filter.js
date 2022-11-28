const filter = (portfolioMenuSelector, portfolioWrapperSelector) => {
  const triggersPrent = document.querySelectorAll(portfolioMenuSelector);
  const portfolioWrapper = document.querySelectorAll(portfolioWrapperSelector);
  const portfolioNo = document.querySelector(".portfolio-no");

  triggersPrent.forEach((triggerItem) => {

    triggerItem.addEventListener("click", (e) => {
      if (e.target && e.target.tagName == "LI") {
        triggersPrent.forEach((item) => {
          item.classList.remove("active");
        });
        e.target.classList.add("active");
      }

      let triggerItemClass = triggerItem.classList[0];

      if (triggerItemClass == "grandmother" || triggerItemClass == "granddad") {
        portfolioWrapper.forEach((item) => {
          item.classList.add("animated", "fadeIn");
          item.style.display = "none";
        });
        portfolioNo.style.display = "block";
      } else {
        portfolioWrapper.forEach((item) => {
          item.classList.add("animated", "fadeIn");
          item.style.display = "none";
          portfolioNo.style.display = "none";

          if (item.classList.contains(triggerItemClass)) {
            item.style.display = "block";
          }
        });
      }
    });
  });
};

export default filter;
