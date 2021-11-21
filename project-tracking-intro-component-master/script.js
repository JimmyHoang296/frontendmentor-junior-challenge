let hambergerMenu = document.querySelector('.hamberger-menu')
let hambergerBtn = document.querySelector('.hamberger-btn')
let closeBtn = document.querySelector('.close-btn')
let headerNav = document.querySelector('.header-nav')

// hambergerBtn.addEventListener('click', () => {
//     headerNav.classList.add('activate')
// })

// closeBtn.addEventListener('click', () => {
//     closeBtn.classList.remove('activate')
// })

hambergerMenu.addEventListener('click', () => {
    if (headerNav.classList.contains('activate')){
        headerNav.classList.remove('activate')
    }else{
        headerNav.classList.add('activate')
    }
})