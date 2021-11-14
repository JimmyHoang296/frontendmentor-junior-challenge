let slideIndex = 1
let nextSlideBtn = document.querySelector('.slider-to-right')
let prevSlideBtn = document.querySelector('.slider-to-left')

showDivs(slideIndex)
nextSlideBtn.addEventListener('click', ()=> {
    plusDiv (1)
})
prevSlideBtn.addEventListener('click', ()=> {
    plusDiv (-1)
})

function plusDiv(n){
    showDivs(slideIndex += n)
}

function showDivs(n){
    let i
    let x = document.querySelectorAll('.card')

    if (n > x.length){slideIndex  = 1}
    if (n < 1) {slideIndex = x.length}

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    
    x[slideIndex-1].style.display = 'block'
 
}