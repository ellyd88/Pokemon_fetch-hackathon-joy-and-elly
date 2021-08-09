//Greet user

const userInput = document.querySelector('#userInput');
const greeting = document.querySelector('#greeting');
let userName = '';

function greet(e){
    userName = e.target.value;
    greeting.innerText = `Hello ${userName}! 
    Welcome to the Pokémon page.
    Hover over a Pokémon for some info.`;
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
    image.classList.add(`${name}`);
    //add id
    image.id = `image${pokeNum}`;


    
    //get name
    let pokeName = data.species.name;
    //create new li tag
    let nameInfo = document.createElement('li');
    //add new li tag to ul
    document.querySelector('#info').appendChild(nameInfo);
    //set inner text of new li to pokeName
    nameInfo.innerText = `Name: ${pokeName}
    `;
    // add id
    nameInfo.id = `name${pokeNum}`;
    //add class
    nameInfo.classList = `${name}`;

    //get type
    let pokeType = data.types['0'].type.name;
    //create new li tag
    let typeInfo = document.createElement('li');
    //add new li tag to ul
    document.querySelector('#info').appendChild(typeInfo);
    //set inner text of new li to pokeType
    typeInfo.innerText = `Type: ${pokeType}
    `;
    // add id
    typeInfo.id = `type${pokeNum}`;
    //add class
    typeInfo.classList = `${name}`

    //get weight
    let pokeWeight = data.weight;
    //create new li tag
    let weightInfo = document.createElement('li');
    //add new li tag to ul
    document.querySelector('#info').appendChild(weightInfo);
    //set inner text of new li to pokeWeight
    weightInfo.innerText = `Weight: ${pokeWeight}`;
    // add id
    weightInfo.id = `weight${pokeNum}`;
    //add class
    weightInfo.classList = `${name}`

    
    //mouseEvents
    function handleMouseEventAll(pokemon,pokeNum){
        //select all of the class for one pokemon
        let info = document.querySelectorAll(`.${pokemon}`);
        //cycle through the list items for that pokemon, starting with name([1])
        for (let i = 1; i < info.length; i++) {
            //hide that item
            info[i].style.display = "none";
        }
        
        //when mouse enters the image
        function handleMouseEnter(){
            //select all of the class for one pokemon
            let info = document.querySelectorAll(`.${pokemon}`);
            //cycle through the list items for that pokemon, starting with name([1])
            for (let i = 1; i < info.length; i++) {
                //display that item
                info[i].style.display = "initial";
            }
        }

        //select the image of one pokemon
        let image = document.querySelector(`#image${pokeNum}`);
        //when mouse enters image, call handleMouseEnter function
        image.addEventListener('mouseenter', handleMouseEnter);

        //when mouse leaves image
        function handleMouseLeave(){
            //select all of the class for one pokemon
            let info = document.querySelectorAll(`.${pokemon}`);
            //cycle through the list items for that pokemon, starting with name([1])
            for (let i = 1; i < info.length; i++) {
                //hide that item
                info[i].style.display = "none";
            }
        }
        //when mouse leaves image, call handleMouseLeave function
        image.addEventListener('mouseleave', handleMouseLeave);
    }
    //call handle mouse events for 4 different pokemon
    handleMouseEventAll('pikachu',25);
    handleMouseEventAll('bulbasaur',1);
    handleMouseEventAll('squirtle',7);
    handleMouseEventAll('charmander',4);
    
}

//call function for 4 different pokemon
getPokeData(25, 'pikachu');
getPokeData(1, 'bulbasaur');
getPokeData(7, 'squirtle');
getPokeData(4, 'charmander');