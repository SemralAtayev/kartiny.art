// import checkForNumbers from "./checkForNumbers";

const forms = () => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  let upload = document.querySelectorAll('[name = "upload"]');


  //   checkForNumbers('input[name = "user_phone"]');

  // clearing all inputs after form sent
  let clearAllInputs = function (inputSelector) {
    inputSelector.forEach((input) => {
      input.value = "";
    });

    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
  });
  };

  // request variable
  let request = async function (url, data) {
    let fetchRequest = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await fetchRequest.text();
  };

  //messages : text

  let messagesToShow = {
    loading: "Идет загрузка",
    sucsess: "Спасибо, мы вам перезвоним",
    fail: "Неудачная попытка",
  };
  //messages : img
  let imgStatusPath = {
    load: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  let pathOfServer = {
    design: "assets/design.php",
    orderCall: "assets/server.php",
  };

  // let cutTheName = function(selector){
  //     let name = selector.files[0].name;
  //     console.log(name);
  // };

  upload.forEach((inputText) => {
    inputText.addEventListener('input', ()=>{
      let name = inputText.files[0].name.split('.');
      let dot;
      let nearDiv = inputText.previousElementSibling;

      name[0].length > 5 ? dot = '...' : dot = '.';      
      
      if( name[0].length > 5 ){
        nearDiv.textContent = name[0].slice(0,5) + dot + name[1];
      } else {
        nearDiv.textContent = name;
      }        
      
    });
  });

  const sendRequest = function () {
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        //creating div to place img and text
        let messageStatus = document.createElement("div");
        messageStatus.classList.add("status");
        //appending to form block
        form.parentNode.appendChild(messageStatus);

        //remove form from popup
        form.classList.add("animated", "fadeOutUp");
        setTimeout(() => {
          form.style.display = "none";
        }, 400);

        let imgMessage = document.createElement("img");
        imgMessage.classList.add("animated", "fadeInUp");
        imgMessage.setAttribute("src", imgStatusPath.load);
        messageStatus.appendChild(imgMessage);

        let textBlock = document.querySelector("p");
        textBlock.textContent = messagesToShow.loading;
        messageStatus.appendChild(textBlock);

        let formData = new FormData(form);
        let api;
        form.closest(".popup-design") || form.classList.contains("calc_form")
          ? (api = pathOfServer.design)
          : (api = pathOfServer.orderCall);
        

        request(api, formData)
          .then((request) => {
            imgMessage.setAttribute("src", imgStatusPath.ok);
            textBlock.textContent = messagesToShow.sucsess;
            console.log(request);
          })
          .catch((error) => {
            messageStatus.textContent = messagesToShow.error;
            console.throw(error);
          })
          .finally(() => {
            clearAllInputs(inputs);
            setTimeout(() => {
              //delete message block
              messageStatus.remove();
              //close all modal windows 
              form.classList.remove("fadeOutUp");
              form.classList.add("animated", 'fadeInUp');             
              form.style.display = "block";

              document.body.style.overflow = "";
              // clear fomr data
              formData = {};
              console.log(formData);
            }, 5000);
          });
      });
    });
  };

  sendRequest();
};

export default forms;
