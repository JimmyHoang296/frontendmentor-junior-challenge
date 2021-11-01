let hambergerBtn = document.querySelector('.header-hamberger')
let headerNav = document.querySelector('.header-nav-bar')
let navList = document.querySelectorAll('.header-nav')

hambergerBtn.addEventListener('click', switchBtn)

navList.forEach(nav => {
    nav.addEventListener('click', switchBtn)
})


function switchBtn(){
    if (headerNav.classList.contains('active')){
        headerNav.classList.remove('active')
    }else{
        headerNav.classList.add('active')
    }

}