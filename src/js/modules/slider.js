const slider = (sliderSelector, dir, prev, next) => {
  const sliderElement = document.querySelectorAll(sliderSelector);
  let sliderIndex = 1;
  let intervalIndex;

  // main function to initialise slider
  const sliderInit = function () {
    if (sliderIndex > sliderElement.length) {
      sliderIndex = 1;
    }
    if (sliderIndex < 1) {
      sliderIndex = sliderElement.length;
    }

    sliderElement.forEach((item) => {
      item.style.display = "none";
      item.classList.add("animated");
    });

    sliderElement[sliderIndex - 1].style.display = "block";
  };

  // function of intrval
  const interval = (vertical = false) => {
    if (vertical) {
      intervalIndex = setInterval(() => {
        sliderIndex += 1;
        sliderInit();
      }, 3000);
    } else {
      intervalIndex = setInterval(() => {
        sliderIndex += 1;
        sliderElement.forEach((item) => {
          item.classList.remove("fadeInLeft");
          item.classList.add("fadeInRight");
        });
        sliderInit();
      }, 3000);
    }
  };

  const changeSlider = (n) => {
    sliderIndex += n;
    sliderInit();
  };

  if (dir === "vertical") {
    sliderElement.forEach((item) => {
      item.classList.add("fadeInDown");
    });

    interval(true);

    sliderElement[0].parentNode.addEventListener("mouseenter", () => {
      clearInterval(intervalIndex);
    });

    sliderElement[0].parentNode.addEventListener("mouseleave", () => {
      interval(true);
    });
  } else {
    let prevButton = document.querySelector(prev);
    let nextButton = document.querySelector(next);

    nextButton.addEventListener("click", () => {
      sliderElement.forEach((item) => {
        item.classList.remove("fadeInLeft");
        item.classList.add("fadeInRight");
      });
      changeSlider(1);
    });

    prevButton.addEventListener("click", () => {
      sliderElement.forEach((item) => {
        item.classList.remove("fadeInRight");
        item.classList.add("fadeInLeft");
      });
      changeSlider(-1);
    });

    interval();

    sliderElement[0].parentNode.addEventListener("mouseenter", () => {
      clearInterval(intervalIndex);
    });

    sliderElement[0].parentNode.addEventListener("mouseleave", () => {
      interval();
    });
  }

  sliderInit();
};

export default slider;
