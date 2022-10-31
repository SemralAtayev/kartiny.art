const modals = () => {
  function bindModal(
    modalTriggerSelector,
    modalWindowSelector,
    dataModalCloseSelector,
    closeOnOverlays = true
  ) {
    const modalTrigger = document.querySelectorAll(modalTriggerSelector);
    const modalWindow = document.querySelector(modalWindowSelector);
    const modalClose = document.querySelectorAll(dataModalCloseSelector);
    const windows = document.querySelectorAll("[data-modal]");
    const scroll = calcScroll();

    function calcScroll() {
      const scrollDiv = document.createElement('div');
      scrollDiv.classList.add("scroll_div");
      scrollDiv.style.height = "50px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.overflowY = 'scroll';
      scrollDiv.style.visibility = 'hidden';
      document.querySelector('body').append(scrollDiv);
  
      const scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      return scrollWidth;
    }

    

    windows.forEach((e) => {
      e.style.display = "none";
    });

    //click on trigger to call modal block
    modalTrigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        //close all modal windows
        windows.forEach((e) => {
          e.classList.remove("fadeIn");
          e.classList.add("fadeOut");
          e.style.display = "none";
        });

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
        }, 700);

        document.body.style.overflow = "";
        document.body.style.marginRight = '0px';
      });
    });

    // click on other space rather than modal window
    modalWindow.addEventListener("click", (e) => {
      if (e.target && e.target === modalWindow && closeOnOverlays) {
        //close all modal windows
        windows.forEach((e) => {
          e.classList.remove("fadeIn");
          e.classList.add("fadeOut");
      
        });

        modalWindow.classList.remove("fadeIn");
        modalWindow.classList.add("fadeOut");
        setTimeout(() => {
          modalWindow.style.display = "none";
        }, 700);
        document.body.style.overflow = "";
        document.body.style.marginRight = '0px';
      }
    });
  }

  function timerModal(selector, timer) {
    setTimeout(function () {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, timer);
  }

  bindModal(".button-design", ".popup-design", ".popup-close");

  timerModal(".popup", 6000);
};

export default modals;
