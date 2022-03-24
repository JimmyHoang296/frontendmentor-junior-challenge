let btn = document.querySelector('.change-quote')
let quoteID = document.querySelector('.advice-id')
let quoteContent = document.querySelector('.advice-text')
btn.addEventListener('click', () => {
    fetch('	https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {            
           quoteID.innerHTML = `ADVICE #${data.slip.id}`  
           quoteContent.innerHTML = data.slip.advice

        });

})
