const calc = (
  sizeSelector,
  materialSelector,
  optionsSelector,
  promocodeSelector,
  resBlock,
  state,
) => {
  const size = document.querySelector(sizeSelector),
    material = document.querySelector(materialSelector),
    options = document.querySelector(optionsSelector),
    promocode = document.querySelector(promocodeSelector),
    res = document.querySelector(resBlock);
  let sum = 0;


  const getSum = function () {
    sum = Math.round((+size.value) * (+material.value) + (+options.value));

    if (size.value == "" || material.value == "") {
      res.innerHTML = "Не хватает одного параметра";
    } else if (promocode.value == "IWANTPOPART") {
      res.innerHTML = Math.round(sum * 0.7);
    } else {
      res.innerHTML = sum;
    } 
    state.summa = sum;
   
  };

  size.addEventListener('change', getSum);
  material.addEventListener('change', getSum);
  options.addEventListener('change', getSum);
  promocode.addEventListener('input', getSum);
  
 
};


export default calc;
