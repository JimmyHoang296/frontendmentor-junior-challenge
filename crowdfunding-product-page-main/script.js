let bookmarkBtn = document.querySelector(".bookmark-btn")
let overlay = document.querySelector('.modal-container')
let selectProjectBtn = document.getElementById('back-this-project')
let closeModalBtn = document.getElementById('close-btn')
let modalItemList = document.querySelectorAll('.modal-product-card')
let headerCloseBtn = document.querySelector('.header-close-btn')
let hambergerBtn = document.querySelector('.hamberger-btn')
let header = document.getElementsByTagName('header')[0]

headerCloseBtn.addEventListener('click', ()=>{
    changeState(header, 'menu-active')
})

hambergerBtn.addEventListener('click', ()=>{
    changeState(header, 'menu-active')
})

bookmarkBtn.addEventListener('click', ()=> {
    if (bookmarkBtn.classList.contains("bookmarked")){
        bookmarkBtn.classList.remove("bookmarked")
        bookmarkBtn.getElementsByTagName('span')[0].innerHTML = "Bookmark"
    }else{
        bookmarkBtn.classList.add('bookmarked')
        bookmarkBtn.getElementsByTagName('span')[0].innerHTML = "Bookmarked"
    }
})

selectProjectBtn.addEventListener('click', ()=> {changeState( overlay, 'on-modal')})

closeModalBtn.addEventListener('click', ()=> {changeState( overlay, 'on-modal')})

modalItemList.forEach(item => {
    let itemHeader = item.querySelector('.modal-product-header')
    let itemRadioBtn = item.querySelector('.product-selector-label')

    itemHeader.addEventListener('click', ()=> {
        selectPledge(this)
    })
    itemRadioBtn.addEventListener('click', ()=> {
        selectPledge(this)
    })
    function selectPledge(clickElement) {
        clickElement.addEventListener('click', () => {
            modalItemList.forEach(item => {
                item.classList.remove('on-selection')
            })
            changeState(item, 'on-selection')
        })
    }
})



function changeState (item, stateName){
    if (item.classList.contains(stateName)){
        item.classList.remove(stateName)
    }else{
        item.classList.add(stateName)
    }
}

