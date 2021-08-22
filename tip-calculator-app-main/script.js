let bill = document.getElementById("bill_input");
let custom_percent = document.getElementById('pcTip_custom');
let people = document.getElementById('noPeople_input');
let radioList = document.getElementsByName('tip_selection')

let personAmount = document.getElementById('person_amount')
let totalAmount =document.getElementById('total_amount')
let resetBtn = document.getElementById('resetBtn')

let caution_bill = document.getElementById('caution_bill')
let caution_percent = document.getElementById('caution_percent')
let caution_people = document.getElementById('caution_people')

let billValue = 0
let percent = 0
let numOfPeople = 0

// check valid input number

setInputFilter(people, numberValid)
setInputFilter(bill, numberValid)
setInputFilter(custom_percent, numberValid)

//unchecked all radio when focus on custom

custom_percent.addEventListener('focus', () =>{
    radioList.forEach( radio => radio.checked = false)
    percent = ""
})

//Set pecentage value
radioList.forEach(radio =>{
    radio.addEventListener('change', ()=>{
        if (radio.checked = true){
            console.log (radio.value)
            percent = radio.value
            custom_percent.value = ""
            updateResult()
        }
    } )
})

custom_percent.addEventListener('input', ()=>{
    if (parseFloat(custom_percent.value)!== 0){
        percent = parseFloat(custom_percent.value)
    }
})
//enter key
afterEnter(people)
afterEnter(bill)
afterEnter(custom_percent, people)

//afterupdate
afterUpdate (bill, caution_bill)
afterUpdate (custom_percent,caution_percent)
afterUpdate (people, caution_people)

//reset btn

resetBtn.addEventListener('click', resetValue)

// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }

function numberValid (value) {
return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
}

function afterEnter (currentInput, secondInput){
    currentInput.addEventListener('keyup',(e)=>{
        if (e.keyCode == 13){
            currentInput.blur()
        }
    })
}

function updateResult () {
    if(billValue>0 && percent > 0 && numOfPeople >0){
        let personTip = ( billValue* percent /100/numOfPeople).toFixed(1)
        let totalTip = (personTip*numOfPeople).toFixed(1)
        console.log ('updateResult')
        personAmount.innerText = `$${personTip}`
        totalAmount.innerText = `$${totalTip}`
        resetBtn.classList.add ('activeBtn')

        return
    }
    personAmount.innerText = `$0.00`
    totalAmount.innerText = `$0.00`
    resetBtn.classList.remove ('activeBtn')
}
function setValue(){
    billValue = bill.value
    numOfPeople = people.value
}

function resetValue(){
    bill.value = ""
    custom_percent.value = ""
    people.value = ""
    personAmount.innerText = `$0.00`
    totalAmount.innerText = `$0.00`
    radioList.forEach(radio => radio.checked = false)
}

function afterUpdate(element, cautionElement){
    element.addEventListener('input', ()=>{

        if (element.value == "0") {
            cautionElement.style.display = 'unset'
            return
        }

        console.log('value ok')
        cautionElement.style.display = 'none'
        setValue()
        updateResult()
    })
}