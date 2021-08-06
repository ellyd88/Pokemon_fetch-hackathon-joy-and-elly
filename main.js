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

async function getPokeData(pokeNum, name){

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

    
    //get name
    let pokeName = data.species.name;
    //create new li tag
    let nameInfo = document.createElement('li');
    //add new li tag to ul
    document.querySelector('#info').appendChild(nameInfo);
    //set inner text of new li to pokeName
    nameInfo.innerText = pokeName;
    // add id
    nameInfo.id = `name${pokeNum}`;
    //add class
    nameInfo.classList = `${name}`;

}

//call function for 4 different pokemon
getPokeData(25, 'pikachu');
getPokeData(1, 'bulbasaur');
getPokeData(7, 'squirtle');
getPokeData(4, 'charmander');