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
const locations = [
    {
        name: "town square",
        "button_text": ["Go to store", "Go to cave", "Fight dragon"],
        "button_function": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button_text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button_function": [buyHealth, buyWeapon, goTown],
        text: 
    }
];

function goTown() {
    update(locations[0]);
};

function goStore() {
};

function goCave() {
    console.log("Going to cave.")
};

function fightDragon() {
    console.log("Fighting dragon.")
};

function buyHealth(){

};

function buyWeapon(){

};

function update(location){
    //sets the text of button1 to go to store and invoke the goStore function
    button1.innerText = location["button text"][0];
    button1.onclick = location["button functions"][0];
    //sets the text of button2 to go to cave and invoke the goCave function
    button2.innerText = location["button text"][1];
    button2.onclick = location["button functions"][1];
    //sets the text of button3 to fight dragon and invoke the fightDragon function
    button3.innerText = location["button text"][2];
    button3.onclick =  location["button functions"][2];
    //set text value to reflect that the player is in the town square
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
};

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
