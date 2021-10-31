let selectedItem = document.querySelector('.selected')
inputData(selectedItem.innerHTML.toLowerCase())

function inputData (selectedTimeframe){
    
    fetch ('./data.json')
            .then(resp => resp.json())
            .then(function (data) {
                for (let i=0; i < data.length; i++) {
                    let itemID = data[i].title.toLowerCase() 
                    itemID = itemID == 'self care'? 'self-care': itemID
    
                    let item = document.getElementById(itemID)
                    let curentTime = data[i].timeframes[selectedTimeframe].current
                    curentTime = curentTime == 0 ? curentTime + 'hr': curentTime + 'hrs'
                    let previousTime = data[i].timeframes[selectedTimeframe].previous
                    previousTime = previousTime == 0? previousTime + 'hr': previousTime + 'hrs'
                    
                    switch (selectedTimeframe){
                        case 'daily':
                            previousTime = 'Yesterday - ' + previousTime
                            break
                        case 'weekly':
                            previousTime = 'Last week - ' + previousTime
                            break
                        case 'monthly':
                            previousTime = 'Last month - ' + previousTime
                            break
                    }


                    item.querySelector('.card-infor__current-status').innerHTML = curentTime
                    item.querySelector('.card-infor__history').innerHTML = previousTime
                }
            })
}


let selectors = document.querySelectorAll('.period-selector')

selectors.forEach(selector => {
    selector.addEventListener('click', () =>{
        if (selector.classList.contains('selected')){return}
        selectors.forEach(selector => selector.classList.remove('selected'))
        selector.classList.add('selected')
        inputData (selector.innerHTML.toLowerCase())
    })
})