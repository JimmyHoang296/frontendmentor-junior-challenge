let main = document.querySelector('.main')
let toogle = document.querySelector('.toggle')

toogle.addEventListener('click', () => {
    if(main.classList.contains('dark-theme')){
        main.classList.remove('dark-theme')
        main.classList.add('light-theme')
    }else{
        main.classList.remove('light-theme')
        main.classList.add('dark-theme')
    }
})