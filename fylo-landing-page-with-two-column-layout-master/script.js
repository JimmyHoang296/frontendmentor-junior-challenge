let formSubmits = document.querySelectorAll(".form")

formSubmits.forEach (form => {
    let emailInput = form.querySelector('.email-input')
    let submitBtn = form.querySelector('.submit-btn')

    submitBtn.addEventListener('click', () => {
        if (!ValidateEmail(emailInput)){
            form.classList.add('err')
        }
    })

    emailInput.addEventListener('focus', () =>{
        form.classList.remove('err')
    })

})

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        return true;
    }else{
        return false;
    }
}

