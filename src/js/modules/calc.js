const calc = (
  sizeSelector,
  materialSelector,
  serviceSelector,
  promocode,
  resultSelecor,
) => {
  const sizeBlock = document.querySelector(sizeSelector),
    materialBlock = document.querySelector(materialSelector),
    servicelBlock = document.querySelector(serviceSelector),
    promoBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(resultSelecor);
  let sum = 0;

  const calcFunc = function () {
    sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+servicelBlock.value));

    // if(promoBlock.value === 'IWANTPOPART'){
    //     sum = sum * 0.7;
    // } else if (sizeBlock.value && materialBlock.value){
    //     resultBlock.innerHTML = sum;
    // } else if (sizeBlock.value == "" || materialBlock.value == ""){
    //     resultBlock.innerHTML = "Не выбран размер или материал картины";
    // }
    // else {

    // }

    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.innerHTML = "Не выбран размер или материал картины";
    } else if (promoBlock.value == "IWANTPOPART") {
        resultBlock.innerHTML = Math.round(sum * 0.7);
    } else {
        resultBlock.innerHTML = sum;
    }
  };

  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  servicelBlock.addEventListener("change", calcFunc);
  promoBlock.addEventListener("input", calcFunc);
};

export default calc;
