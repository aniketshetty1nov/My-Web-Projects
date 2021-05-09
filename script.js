const currencyEl_one = document.getElementById('currency_one');
const amountEl_one  = document.getElementById('amount_one');
const currencyEl_two = document.getElementById('currency_two');
const amountEl_two=document.getElementById('amount_two')
// console.log(amountEl_one.value)
const rate_El= document.getElementById('rate');

const swap = document.getElementById('swap');

function Calculate(){
    const currencyone= currencyEl_one.value;
    const currencytwo= currencyEl_two.value;

    console.log(currencyone)

    fetch(`https://open.exchangerate-api.com/v6/latest/${currencyone}`)
    .then(res => { console.log(res.json()) })
    .then(data =>{
        console.log(data)
    });

}


// Event Listeners
currencyEl_one.addEventListener('change',Calculate);
currencyEl_two.addEventListener('change',Calculate);
amountEl_one.addEventListener('input',Calculate);
amountEl_two.addEventListener('input',Calculate);

