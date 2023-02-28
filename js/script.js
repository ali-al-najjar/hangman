const categories_container = document.getElementById("categories_container");
const categories = document.getElementById('categories');
const letters = document.getElementById("letters");
const hanging_man = document.getElementById("hanging_man");
const new_game = document.getElementById("new_game");
const header = document.getElementById('header');
const alphabet = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const user_input = document.getElementById('user_input');
let tries = 0;
let count = 0;

let word ="";

let flag = false;

const categories_dictionary = {
  cities:["Beirut","Baabda","Baalbeck","Saida","Sour"],
  cars:["Toyota","Mercedes","Honda","Nissan","Ferrari"],
};

console.log(categories_dictionary);

const categoriesButtons = () => {
  header.innerHTML = `<div>Choose from the below categories</div>`;
  let category_button = document.createElement("div");
  for (let key in categories_dictionary){
    category_button.innerHTML += `<button class="category" onclick ="createWord('${key}')">${key} </button>`;
  }
  categories_container.appendChild(category_button);

};

const createWord = (category) =>{
  let categories_buttons = document.querySelectorAll(".category");
  categories_buttons.forEach((button) => {
    if (button.innerText.toLowerCase() === category){
      button.classList.add("active");
      flag= false;
    }else{
    button.disabled = true;
    }  
  });

  letters.classList.remove('hide');
  user_input.innerText="";

  let words = categories_dictionary[category];
  word = words[Math.floor(Math.random() * words.length)];
  word = word.toUpperCase();
  console.log(word);

  
};


const alphabetLetter = () => {
  for (let i=0; i<alphabet.length;i++){
    letters.innerHTML += `<button class = letter>${alphabet[i]}</button`;
    
  }
}


const start_game = () => {
  tries = 0;
  count = 0;
  categoriesButtons();
  alphabetLetter();
  
};

new_game.addEventListener("click",start_game);


window.onload = start_game;



