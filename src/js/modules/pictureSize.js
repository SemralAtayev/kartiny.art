const pictureSize = (pictureSizeSelector) => {
  const imageBlocks = document.querySelectorAll(pictureSizeSelector);

  imageBlocks.forEach(function (block) {
    block.querySelector("img").classList.add("animated", "fadeIn");

    block.addEventListener("mouseenter", () => {
      let imageSrc =
        block.querySelector("img").getAttribute("src").slice(0, -4) + "-1.png";
      block.querySelector("img").src = imageSrc;
      const detailsOfImage = block.querySelectorAll("p:not(.sizes-hit)");
      detailsOfImage.forEach((el) => {
        el.style.display = "none";
      });
    });

    block.addEventListener("mouseleave", () => {
      let imageSrc =
        block.querySelector("img").getAttribute("src").slice(0, -6) + ".png";
      block.querySelector("img").src = imageSrc;
      const detailsOfImage = block.querySelectorAll("p:not(.sizes-hit)");
      detailsOfImage.forEach((el) => {
        el.style.display = "block";
      });
    });
  });
};

export default pictureSize;
