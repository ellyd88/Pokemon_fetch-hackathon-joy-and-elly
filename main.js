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

//Import images from API

async function getPokeData(pokeNum){

    //fetch data from API
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`);
    const data = await response.json();

    //get pokemon image from data
    let pokeImage = data.sprites.other['official-artwork'].front_default;
    //create new image tag
    let image = document.createElement('img');
    //add new image tag to images div
    document.querySelector('#images').appendChild(image);
    //set src of new image tag to image from data
    image.src = pokeImage;
    //add class
    image.classList = `pokeImages`;
    //add id
    image.id = `image${pokeNum}`;

}

//call function for 4 different pokemon
getPokeData(25);
getPokeData(1);
getPokeData(7);
getPokeData(4);