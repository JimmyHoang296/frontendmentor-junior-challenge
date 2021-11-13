let hambergerBtn = document.querySelector('.hamberger-btn')
let closeBtn = document.querySelector('.close-btn')
let header = document.querySelector('.header')

hambergerBtn.addEventListener('click', () => {
    console.log('activate')
    changeState (header, 'active-nav')
})

closeBtn.addEventListener('click', () => {
    console.log('close')
    changeState (header, 'active-nav')
})

function changeState (item, stateName){
    if(item.classList.contains(stateName)){
        item.classList.remove(stateName)
    }else{
        item.classList.add(stateName)
    }
}

