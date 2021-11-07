let slider = document.querySelector('.range')
let sliderThumb = document.querySelector('.thumb')
let sliderTrack = document.querySelector('.track-inner')
let pageviews = document.querySelector('.pageview-number')
let toggleYear = document.querySelector('.checkbox-yearly')
let monthlyPrice = document.querySelector('.monthly-price')

function updateSlider (value) {

    sliderTrack.style.width = `${value}%`
    sliderThumb.style.left = `${value}%`
    pageviews.innerHTML = `${value*2}K`
    updatePrice(toggleYear.checked, value)

}

// change value oninput slider
slider.oninput = (e) => updateSlider(e.target.value)

updateSlider(50)

// change price with toggle
toggleYear.onchange = (e) => updatePrice(e.target.checked, slider.value)


function updatePrice (toggleState, sliderValue){
    if (toggleState){
        monthlyPrice.innerHTML = `$${(sliderValue/50 * 16 *0.75).toFixed(2)}`
    }else{
        monthlyPrice.innerHTML = `$${(sliderValue/50 * 16).toFixed(2)}`
    }
}