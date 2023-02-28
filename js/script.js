const categories_container = document.getElementById("categories_container");
const categories = document.getElementById('categories');
const letters = document.getElementById("letters");
const hanging_man = document.getElementById("hanging_man");
const hanging_img = document.getElementById("hanging_img");
const new_game = document.getElementById("new_game");
const result = document.getElementById("result");
const header = document.getElementById('header');
const alphabet = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const stickman = ["./images/1.png","./images/2.png","./images/3.png","./images/4.png","./images/5.png","./images/6.png"];


const user_input = document.getElementById('user_input');
let tries = 0;
let count = 0;

let word ="";

let flag = false;

const categories_dictionary = {
  cities:["Beirut","Baabda","Baalbeck","Saida","Sour"],
  cars:["Toyota","Mercedes","Honda","Nissan","Ferrari"],
};


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

  let display_word_hidden = word.replace(/./g,`<span class="dashes">_</span>`);
  user_input.innerHTML=display_word_hidden;
  
};


const alphabetLetter = () => {
  for (let i=0; i<alphabet.length;i++){
    let button = document.createElement("button");
    button.classList.add("letter");
    button.innerText = alphabet[i];
    letters.append(button);

    button.addEventListener("click",() =>{
      let letter_array = word.split("");
      let dashes = document.getElementsByClassName("dashes");
      if(letter_array.includes(button.innerText)){
        letter_array.forEach((letter,index) =>{
          if(letter === button.innerText){
            dashes[index].innerText = letter;
            count +=1;
            if(count == letter_array.length){
              result.innerHTML=`<div class="won">You Won! The word was ${word}</div>`;
            }
          }
        });
      }else{
        tries +=1;
        if(tries === 1){
           hanging_img.src=stickman[0];
        }else if(tries === 2){
          hanging_img.src=stickman[1];
        }else if(tries === 3){
          hanging_img.src=stickman[2];
        }else if(tries === 4){
          hanging_img.src=stickman[3];
        }else if(tries === 5){
          hanging_img.src=stickman[4];
        }else{
          hanging_img.src=stickman[5];
        }
        
        if (tries == 6){
          result.innerHTML=`<div class="lost">You Lost!The word was ${word}</div>`;
        }
        button.disabled = true;
      }
    })
    
    
  }
}

const startGame = () => {
  tries = 0;
  count = 0;
  user_input.innerHTML="";
  new_game.classList.add("hide");
  letters.classList.add("hide");
  categoriesButtons();
  alphabetLetter();
  
};

new_game.addEventListener("click",startGame);


window.onload = startGame;



