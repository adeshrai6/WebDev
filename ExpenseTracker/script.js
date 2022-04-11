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


// Add Transaction
function addTransaction(){

    if(text.value.trim() === '' || amount.value.trim() == ''){
        alert('Please add a text or amount');
    }else{
        const transection = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        };

        transections.push(transection);

        addTransactionDOM(transection);

        updateValues();

        text.value = '';
        amount.value = '';
    }
}

// Generate random ID
function generateID() {
    return Math.floor(Math.random() * 10000000);
}

// Add transections to DOM list
function addTransactionDOM(transection){
    // Get sign
    const sign = transection.amount < 0 ? '–' : '+';

    const item = document.createElement('li');

    item.classList.add(transection.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `${transection.text} <span>${sign}${Math.abs(transection.amount)}
    </>span <button class="delete-btn>">x</button>`;

    list.appendChild(item);
}


// Update the balance income and expense 
function updateValues()
{
    const amounts = transections.map(transection => transection.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
                        .filter(item => item > 0)
                        .reduce((acc, item) => (acc += item), 0)
                        .toFixed(2);


    const expense = (amounts
                        .filter(item => item < 0)
                        .reduce((acc, item) => (acc += item), 0) * -1)
                        .toFixed(2);

    balance.innerHTML = `$${total}`;
    money_minus.innerHTML = `$${expense}`;
    money_plus.innerHTML = `$${income}`;

}


// Initilize app
function init(){
    list.innerHTML = '';

    transections.forEach(addTransactionDOM);
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);