let submitBtn = document.querySelector('.submit-email')
let inputText = document.querySelector('.text-input')

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        return true;
    }else{
        return false;
    }
}

submitBtn.addEventListener('click', () => {
    console.log(ValidateEmail(inputText))
    if (!ValidateEmail(inputText)){
        inputText.classList.add('err')
    }
})

inputText.addEventListener("focus", () => {
    inputText.classList.remove('err')
})