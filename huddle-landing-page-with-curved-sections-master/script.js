let formSubmit = document.querySelector(".email-submit")
let emailInput = document.querySelector('.email-input')
let submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click', () => {
    if (!ValidateEmail(emailInput)){
        formSubmit.classList.add('err')
    }
})

emailInput.addEventListener('focus', () =>{
    formSubmit.classList.remove('err')
})


function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        return true;
    }else{
        return false;
    }
}

