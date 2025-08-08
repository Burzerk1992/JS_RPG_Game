let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;

let fighting;

let monsterHealth;
let inventory = ["stick"]

//These are the viarbles for the buttons on the UI
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [];

function goTown() {
    //sets the text of button1 to go to store and invoke the goStore function
    button1.innerText = "Go to store";
    button1.onclick = goStore;
    //sets the text of button2 to go to cave and invoke the goCave function
    button2.innerText = "Go to cave";
    button2.onclick = goCave;
    //sets the text of button3 to fight dragon and invoke the fightDragon function
    button3.innerText = "Fight Dragon"
    button3.onclick =  fightDragon;
    //set text value to reflect that the player is in the town square
    text.innerText = "You are in the town square. You see a sign that says \"Store\"."
}

function goStore() {
    //sets the text of button1 to buy 10 health and invoke the buyHealth function
    button1.innerText = "Buy 10 health (10 gold)";
    button1.onclick = buyHealth;
    //sets the text of button2 to buy weapon and invoke the buyWeapon function
    button2.innerText = "Buy weapon (30 gold)";
    button2.onclick = buyWeapon;
    //sets the text of button3 to go to twown and invoke the goTown function
    button3.innerText = "Go to town square"
    button3.onclick =  goTown;
    //set text value to reflect that the player is in the store
    text.innerText = "You enter the store."
}

function goCave() {
    console.log("Going to cave.")
}

function fightDragon() {
    console.log("Fighting dragon.")
}

function buyHealth(){

}

function buyWeapon(){

}

function update(location){

}

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;