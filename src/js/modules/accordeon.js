const accordeon = (headerSelector) =>{
    const headers = document.querySelectorAll(headerSelector);

    headers.forEach(element => {
        element.addEventListener('click', function(){
            element.nextElementSibling.classList.toggle('active');
        });
    });
};

export default accordeon;