const modals = () => {

  let btnPressed = false;

  function bindModal(
    modalTriggerSelector,
    modalWindowSelector,
    dataModalCloseSelector,
    removeTrigger = false
  ) {
    const modalTrigger = document.querySelectorAll(modalTriggerSelector);
    const modalWindow = document.querySelector(modalWindowSelector);
    const modalClose = document.querySelectorAll(dataModalCloseSelector);
    const windows = document.querySelectorAll("[data-modal]");
    let scroll = calcScroll();

    windows.forEach((e) => {
      e.style.display = "none";
    });

    //click on trigger to call modal block
    modalTrigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        btnPressed = true;

        //close all modal windows
        windows.forEach((e) => {
          e.classList.remove("fadeIn");
          e.classList.add("fadeOut");
          e.style.display = "none";
        });

        // remofe trigger if removeTrigger is true

        if (removeTrigger) {
          item.remove();
        }

        modalWindow.classList.add("fadeIn", "animated");
        modalWindow.style.display = "block";
        modalWindow.classList.remove("fadeOut");
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    // click on close button to xlose modal block
    modalClose.forEach((item) => {
      item.addEventListener("click", () => {
        modalWindow.classList.remove("fadeIn");
        modalWindow.classList.add("fadeOut");
        setTimeout(() => {
          modalWindow.style.display = "none";
          modalWindow.classList.remove("fadeOut");
        }, 500);

        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";
      });
    });

    // click on other space rather than modal window
    modalWindow.addEventListener("click", (e) => {
      if (e.target && e.target === modalWindow) {
        //close all modal windows
        windows.forEach((e) => {
          e.classList.remove("fadeIn");
          e.classList.add("fadeOut");
        });

        modalWindow.classList.remove("fadeIn");
        modalWindow.classList.add("fadeOut");
        setTimeout(() => {
          modalWindow.style.display = "none";
        }, 500);
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";
      }
    });
  }

  function timerModal(selector, timer) {
    setTimeout(function () {
      let display;

      document.querySelectorAll("[data-modal]").forEach((elem) => {
        if (getComputedStyle(elem).display !== "none") {
          display = "block";
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, timer);
  }

  function calcScroll() {
    const scrollDiv = document.createElement("div");
    scrollDiv.classList.add("scroll_div");
    scrollDiv.style.height = "50px";
    scrollDiv.style.width = "50px";
    scrollDiv.style.overflowY = "scroll";
    scrollDiv.style.visibility = "hidden";
    document.querySelector("body").append(scrollDiv);

    const scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    return scrollWidth;
  }

  function showGiftAtEnd(giftWindowSelector){
      window.addEventListener('scroll', ()=>{
        if ( !btnPressed && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
          document.querySelector(giftWindowSelector).click();
          console.log(giftWindowSelector);
        }
      });
  }

  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-consultation .popup-close"
  );
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);

  // timerModal(".popup-consultation", 60000);

  showGiftAtEnd(".fixed-gift");
};

export default modals;
