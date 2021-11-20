let toggleBtn = document.getElementById('toggleBtn')
let cardList = document.querySelector('.card-list')

toggleBtn.addEventListener('click', () => {
    if (toggleBtn.checked){
        cardList.classList.add('show-monthly')
    }else{
        cardList.classList.remove('show-monthly')
    }

})

