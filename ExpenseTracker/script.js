const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount'); 


const dummyTransections = [
    {id:1, text: 'Flower', amount: -20},
    {id:2, text: 'Salary', amount: 300},
    {id:3, text: 'Book', amount: -10},
    {id:4, text: 'Camera', amount: 150}
]


let transections = dummyTransections;


// Add transections to DOM list
function addTransactionDOM(transection){
    // Get sign
    const sign = transection.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    item.classList.add(transection.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `${transection.text} <span>${sign}${Math.abs(transection.amount)}
    </>span <button class="delete-btn>">x</button>`;

    list.appendChild(item);
}


// Initilize app
function init(){
    list.innerHTML = '';

    transections.forEach(addTransactionDOM);
}

init();