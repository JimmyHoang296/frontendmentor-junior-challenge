let product = document.querySelector('.product');
let product_dropdown = document.querySelector('.product_dropdown');
let company = document.querySelector('.company');
let company_dropdown = document.querySelector('.company_dropdown');
let connect = document.querySelector('.connect');
let connect_dropdown = document.querySelector('.connect_dropdown');

showDropDown (product, product_dropdown)
showDropDown (company, company_dropdown)
showDropDown (connect, connect_dropdown)
hideDropDown (product, product_dropdown)
hideDropDown (company, company_dropdown)
hideDropDown (connect, connect_dropdown)



function showDropDown (nav, dropdown) {
    nav.addEventListener('click', ()=>{
        dropdown.style.display = dropdown.style.display=="none" ? 'flex':'none';
    })
}

function hideDropDown (nav, dropdown){
    window.addEventListener('click', (e) =>{
        if(e.target !== nav){
            if (dropdown.style.display=='flex'){
                dropdown.style.display = 'none'
            }
        }
    })
}

