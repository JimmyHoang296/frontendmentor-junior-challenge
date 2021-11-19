let hambergerBtn = document.querySelector('.hamberger-btn')
let closeBtn = document.querySelector('.close-btn')
let header = document.querySelector('.header')

hambergerBtn.addEventListener('click', () => {
    header.classList.add('header-active')
})

closeBtn.addEventListener('click', () => {
    console.log ('close')
    header.classList.remove('header-active')
})