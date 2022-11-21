import { getRequest } from "../services/requests";

const styles = (trigger, selector) => {
  const loadMore = document.querySelector(trigger);

  loadMore.addEventListener("click", function () {
    getRequest("http://localhost:3000/styles").then((res) => {
      renderCart(res);
    });

    loadMore.remove();
  });

  function renderCart(responde) {
    responde.forEach(({src, title, link}) => {
      let cartElement = document.createElement("div");
      cartElement.classList.add(
        "fadeIn",
        "animated",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );
      cartElement.innerHTML = `
      <div class=styles-block>
        <img src=${src} alt>
            <h4>${title}</h4>
            <a href="${link}">Подробнее</a>
      </div>
      `;

      document.querySelector(selector).appendChild(cartElement);
      });
  }
};

export default styles;
