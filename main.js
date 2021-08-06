//Greet user

const userInput = document.querySelector('#userInput');
const greeting = document.querySelector('#greeting');
let userName = '';

function greet(e){
    userName = e.target.value;
    greeting.innerText = `Hello ${userName}! 
    Welcome to the Pokémon page.`;
    userInput.style.display = 'none';
}

userInput.addEventListener('change', greet);



