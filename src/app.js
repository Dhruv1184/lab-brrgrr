// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger

var wholeWheatBun = 10;


//Ingredient of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)

var Ingredient = {
  Patty: 80,
  Cheese: 10,
  Tomato: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the Ingredient in the burger

var state = {
  Patty: true,
  Cheese: true,
  Tomato: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly

function renderAll() {
  renderPatty();
  renderCheese();
  renderTomato();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");

  //you can also use getElementById

  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {

  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM

  let cheese = document.querySelector("#cheese");
  if(state.Cheese){
    cheese.style.display = "inherit";
  }else{
    cheese.style.display = "none";
  }
}

function renderTomato() {

  //Trial 1 - Change the visibility of Tomato based on state by manipulating the DOM

  let Tomato = document.querySelector("#tomato");
  if(state.Tomato){
    Tomato.style.display = "inherit"
  }else{
    Tomato.style.display = "none"
  }
}

function renderOnions() {

  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM

  let onions = document.querySelector("#onion");
  if(state.Onions){
    onions.style.display = "inherit"
  }else{
    onions.style.display = "none"
  }
}

function renderLettuce() {

  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM

  let lettuce = document.querySelector("#lettuce");
  if(state.Lettuce){
    lettuce.style.display = "inherit"
  }else{
    lettuce.style.display = "none"
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function(){
  state.Cheese = !state.Cheese;
  renderAll();
}

// Trial 2 - Setup event listener for the Tomato button

document.querySelector(".btn-Tomato").onclick = function(){
  state.Tomato = !state.Tomato;
  renderAll();
}


// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function(){
  state.Onions = !state.Onions;
  renderAll();
}


// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function(){
  state.Lettuce = !state.Lettuce;
  renderAll();
}


//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons(){
  for(key in state){
    if(state[key]){
      document.querySelector(".btn-" + key.toLowerCase()).classList.add("active")
    }else{
      document.querySelector(".btn-" + key.toLowerCase()).classList.remove("active")
    }
  }
}


//Challenge 2 - Render only the items selected in the Ingredient board based on the state
function renderIngredientBoard(){
  let i = 0;
  let elements = document.querySelectorAll(".items");
  for(key in state){
    if(state[key]){
      elements[i++].style.display = "inherit";
    }else{
      elements[i++].style.display = "none";
    }
  }
}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on Ingredient
function renderPrice(){
  let totalPrice = 20;
  for(key in state){
    if(state[key]){
      totalPrice+= Ingredient[key];
    }
  }
  document.querySelector("body > footer > div.Rectangle3 > div > p.price-details").innerHTML = "INR " + totalPrice;
}