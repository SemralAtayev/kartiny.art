const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(slides);
          
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e){}

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

};

export default sliders;

//my version of slider

// const slider = (sliderSelector, dir, prev, next) => {
//     const sliderElement = document.querySelectorAll(sliderSelector);
//     let sliderIndex = 1;
//     let intervalIndex;
  
//     // main function to initialise slider
//     const sliderInit = function () {
//       if (sliderIndex > sliderElement.length) {
//         sliderIndex = 1;
//       }
//       if (sliderIndex < 1) {
//         sliderIndex = sliderElement.length;
//       }
  
//       sliderElement.forEach((item) => {
//         item.style.display = "none";
//         item.classList.add("animated");
//       });
  
//       sliderElement[sliderIndex - 1].style.display = "block";
//     };
  
//     // wrapper for sliderInit t plus and minus 1, to show prev and next 
//     const changeSlider = (n) => {
//       sliderIndex += n;
//       sliderInit();
//     };
  
//     // function of intrval
//     const interval = (vertical = false) => {
//       if (vertical) {
//         intervalIndex = setInterval(() => {
//           sliderIndex += 1;
//           sliderInit();
//         }, 3000);
//       } else {
//         intervalIndex = setInterval(() => {
//           sliderIndex += 1;
//           sliderElement.forEach((item) => {
//             item.classList.remove("fadeInLeft");
//             item.classList.add("fadeInRight");
//           });
//           sliderInit();
//         }, 3000);
//       }
//     };
  
   
  
//     if (dir === "vertical") {
//       sliderElement.forEach((item) => {
//         item.classList.add("fadeInDown");
//       });
  
//       interval(true);
  
//       sliderElement[0].parentNode.addEventListener("mouseenter", () => {
//         clearInterval(intervalIndex);
//       });
  
//       sliderElement[0].parentNode.addEventListener("mouseleave", () => {
//         interval(true);
//       });
//     } else {
//       let prevButton = document.querySelector(prev);
//       let nextButton = document.querySelector(next);
  
//       nextButton.addEventListener("click", () => {
//         sliderElement.forEach((item) => {
//           item.classList.remove("fadeInLeft");
//           item.classList.add("fadeInRight");
//         });
//         changeSlider(1);
//       });
  
//       prevButton.addEventListener("click", () => {
//         sliderElement.forEach((item) => {
//           item.classList.remove("fadeInRight");
//           item.classList.add("fadeInLeft");
//         });
//         changeSlider(-1);
//       });
  
//       interval();
  
//       sliderElement[0].parentNode.addEventListener("mouseenter", () => {
//         clearInterval(intervalIndex);
//       });
  
//       sliderElement[0].parentNode.addEventListener("mouseleave", () => {
//         interval();
//       });
//     }
  
//     sliderInit();
//   };
  
//   export default slider;
  