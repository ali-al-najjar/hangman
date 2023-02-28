const categories_container = document.getElementById("categories_container");
const categories = document.getElementById('categories');
const letters = document.getElementById("letters");
const hanging_man = document.getElementById("hanging_man");
const new_game = document.getElementById("new_game");
let tries = 0;
let count = 0;
let alphabet = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let created_word ="";
let header = document.getElementById('header');
let flag = false;

let categories_dictionary = {
  cities:["Beirut","Baabda","Baalbeck","Saida","Sour"],
  cars:["Toyota","Mercedes","Honda","Nissan","Ferrari"]
}

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
 
}
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



