// checking logs in the console

console.log('hello world')

// below is to change the counter

const counterText = document.querySelector('#counter')

const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const plusBtn = document.querySelector('#plus-btn')

let count = 0;

console.log(counterText);

function increase() {
    count++
    counterText.textContent = count
    // console.log(count)
}

function decrease() {
    count--
    counterText.textContent = count
    // console.log(count)
}

function reset() {
    count = 0
    counterText.textContent = count
    // console.log(count)
}


minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)

// below is to change themes

const themeBtns = document.querySelectorAll('.theme-buttons')

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', selectTheme)
}

function selectTheme(event) {
    const theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
    
    const buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}

// below is to create the food list

const inputField = document.querySelector('#food-input');
const foodBtn = document.querySelector('#food-btn');
const foodList = document.querySelector('#food-list');

let newFood = '';

function newFoodHandler(event) {
    newFood = event.target.value;
}

function addNewFood() {
    let newPara = document.createElement('p');
    newPara.textContent = newFood;
    foodList.appendChild(newPara);
}

console.log(foodList);

inputField.addEventListener('change', newFoodHandler);
foodBtn.addEventListener('click', addNewFood);
