var playArea = document.getElementById("playArea");
//
//These variables hold the values for the
//player's information such as damage and name
var playerName = "";
var playerHealth = 10;
var maxHealth = 10;
var playerBaseDamage = 1;
var damageBoost = 0;
//
//These are variables that need to be available
//anywhere for determining level and stopping
//the timer
var operator = "+";
var timer;
var width;
var additionLevel = 1;
var subtractionLevel, multiplicationLevel, divisionLevel = 0;
//
//Mage variables for holding the information about which
//mage the player has chosen and where to find the image
var mages = [
  ["mage0.gif", "mage0fight.gif", "mage0hurt.gif", "mage0dead.gif"],
  ["mage1.gif", "mage1fight.gif", "mage1hurt.gif", "mage1dead.gif"],
  ["mage2.gif", "mage2fight.gif", "mage2hurt.gif", "mage2dead.gif"],
  ["mage3.gif", "mage3fight.gif", "mage3hurt.gif", "mage3dead.gif"],
  ["mage4.gif", "mage4fight.gif", "mage4hurt.gif", "mage4dead.gif"],
  ["mage5.gif", "mage5fight.gif", "mage5hurt.gif", "mage5dead.gif"],
  ["mage6.gif", "mage6fight.gif", "mage6hurt.gif", "mage6dead.gif"]
];
var mageIndex = 0;
//
//I don't know if these two need to be global...
var damagePlayer, damageMonster;
//
//Variables for displaying the math problems
var terms = [];
var answer;
var additionAverage = [0, 0];
var subtractionAverage = [0, 0];
var multiplicationAverage = [0, 0];
var divisionAverage = [0, 0];
var algebra = false;
var sequence = false;

var pageBackgrounds = [
  "page1.gif",
  "page2.gif",
  "page3.gif",
  "page4.gif"
];

var spellArray = [];
var spellBookContent = [
  ["Fibonacci's Associative Spell", "fibonacciSpellBook1.gif"],
  ["Fibonacci's Distributive Spell", "fibonacciSpellBook2.gif"],
  ["Fibonacci's Distributive Spell 2", "fibonacciSpellBook3.gif"],
  ["Euclid's Fireball Spell", "triangleSpellBook.gif"],
  ["Nightengale's Healiing Spell", "squareSpellBook.gif"],
  ["Huygen's Stop Time Spell", "pyramidSpellBook.gif"],
  ["Lovelace's Reduction Spell", "pentagonSpellBook.gif"],
  ["Hercules' Strength Spell", "hexagonSpellBook.gif"],
  ["Fermet's Polymorph Monster Spell", "cubeSpellBook.gif"],
  ["Brahe's Nova Spell", "starSpellBook.gif"]
];

//
//Hint spells
var fibonacciSpells = 0;
var fibonacciCast = false;
var fibonacciNumbers = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
//
//Fireball spells
var triangleSpells = 0;
var triangleNumbers = [3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136];
//
//Health spells
var squareSpells = 0;
var squareNumbers = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
//
//Reduce terms spells
var pentagonSpells = 0;
var pentagonCast = false;
var pentagonNumbers = [5, 12, 22, 35, 51, 70, 92, 117, 145, 176];

var tetrahedralSpells = 0;
var tetrahedraNumbers = [4, 10, 20, 35, 56, 84, 120, 165];
//
//Time spells
var pyramidSpells = 0;
var pyramidCast = false;
var pyramidNumbers = [5, 14, 30, 55, 91, 140];
//
//Polymorph monster spells
var cubeSpells = 0;
var cubeCast = false;
var cubeNumbers = [8, 27, 64, 125];
//
//Strength spells
var hexagonSpells = 0;
var hexagonNumbers = [7, 19, 37, 61, 91, 127, 169];
//
//Nova spells
var starSpells = 0;
var starNumbers = [13, 37, 73, 121];

var octagonSpells = 0;
var octagonNumbers = [9, 25, 49, 81, 121];

var octahedronSpells = 0;
var octahedronNumbers = [6, 19, 44, 85, 146];
//
//Monster variables, there are a lot of these...
var monster = {};
var monstersKilled = 0;
var totalMonstersKilled = 0;
//
//This value is strictly for debugging purposes.
//In the course of normal gameplay, the player
//would have to fight 10 monsters per level.
//This variable reduces that number so they only
//have to fight (10 - mPF) per level.
var monstersPerFight = 0;

var additionMonstersKilled = [];
var subtractionMonstersKilled = [];
var multiplicationMonstersKilled = [];
var divisionMonstersKilled = [];
//
//The source of all the image files for the
//monsters in the addition dungeon
var additionMonsters = ["imp.gif", "Hornet.gif", "Wererat.gif", "Spider.gif", "Wolf.gif", "scorpion.gif", "cobra.gif",
                       "pirate.gif", "bone.gif", "bomb.gif", "crawl.gif", "gator.gif", "gargoyle.gif", "KumKum.gif",
                       "Zombie.gif", "bigeye.gif", "badman.gif", "medusa.gif", "vampire.gif", "Pede.gif", "DarkGeneral.gif",
                       "Worm.gif", "ankylo.gif", "Drake.gif", "Garm.gif", "GoldKnight.gif", "Ogre.gif", "RedOgre.gif",
                       "Shadow.gif", "Wyvern.gif", "Soldier.gif", "Silenus.gif", "garland.gif", "Earth.gif", "Lich.gif"];
//
//The names of all the monsters
//in the addition dungeon
var additionMonsterNames = ["Imp", "Hornet", "Wererat", "Spider", "Wolf", "Scorpion", "Cobra", "Pirate", "Bone", "Bomb",
                          "Crawl", "Gator", "Gargoyle", "Hedge Mage", "Zombie", "Bigeye", "Sell Sword", "Medusa", "Vampire",
                          "Centipede", "Dark General", "Worm", "Ankylo", "Drake", "Garm", "Gold Knight", "Ogre", "Red Ogre",
                          "Shadow", "Wyvern", "Soldier", "Silenus", "Garland", "Earth Fiend", "Lich"];
//
//The source of all the image files for the
//monsters in the subtraction dungeon
var subtractionMonsters = ["grimp.gif", "arachnid.gif", "asp.gif", "kyzoku.gif", "grwolf.gif", "mummy.gif", "QueenBee.gif",
                         "rbone.gif", "rgoyle.gif", "GiantRat.gif", "frgator.gif", "evilman.gif", "Specter.gif", "grmedusa.gif",
                         "Wizard.gif", "Bovian.gif", "creep.gif", "Mine.gif", "FrostGiant.gif", "Ghost.gif", "GreenOgre.gif",
                         "mage.gif", "DreadKnight.gif", "Magician.gif", "Gottos.gif", "Naga.gif", "GreatPede.gif",
                         "MantisDevil.gif", "SeaSnake.gif", "DeathRider.gif", "Sergeant.gif", "VampireLady.gif",
                         "FrostDragon.gif", "Lamia.gif", "Kraken.gif"];
//
//The names of all the monsters
//in the subtraction dungeon
var subtractionMonsterNames = ["Grey Imp", "Arachnid", "Asp", "Kyzoku", "Blue Wolf", "Mummy", "Wasp", "Red Bone", "Redgoyle",
                             "Giant Rat", "Frost Gator", "Mercenary", "Fiend", "Green Medusa", "Wizard", "Bovian", "Creep",
                             "Mine", "Frost Giant", "Ghost", "Green Ogre", "Mage", "Dread Knight", "Magician", "Gottos",
                             "Naga", "Greater Centipede", "Mantis", "Sea Snake", "Death Rider", "Sergeant", "Vampire Wraith",
                             "Frost Dragon", "Lamia", "Kraken"];
//
//The source of all the image files for the
//monsters in the multiplication dungeon
var multiplicationMonsters = ["FarDarrig.gif", "PetitMage.gif", "Tarantula.gif", "bull.gif", "fighter.gif", "frwolf.gif",
                            "ghoul.gif", "Balloon.gif", "DeadHead.gif", "OgreChief.gif", "oddeye.gif", "SpecterKnight.gif",
                            "SeaSnake.gif", "Sorceror.gif", "ImperialShadow.gif", "RedGiant.gif", "wzvamp.gif", "KingLizard.gif",
                            "Eye.gif", "Cerberus.gif", "BigHorn.gif", "Chronos.gif", "BlueDragon.gif", "Kunoichi.gif",
                            "SandWorm.gif", "Peryton.gif", "Hydra.gif", "SeaDragon.gif", "RoyalGuard.gif", "RedAnkylo.gif",
                            "Captain.gif", "RedDragon.gif", "IronClaws.gif", "Fire.gif", "Kary.gif"];
//
//The names of all the monsters
//in the multiplication dungeon
var multiplicationMonsterNames = ["Goblin", "Ring Tail", "Tarantula", "Bull", "Fighter", "Frost Wolf", "Ghoul", "Balloon",
                                "Dead Head", "Ogre Chief", "Oddeye", "Specter Knight", "Sea Snake", "Sorceror", "Imperial Shadow",
                                "Red Giant", "Wizard Vampire", "King Lizard", "Beholder", "Cerberus", "Big Horn", "Chronos",
                                "Blue Dragon", "Kunoichi", "Sand Worm", "Peryton", "Hydra", "Sea Dragon", "Royal Guard",
                                "Red Ankylo", "Captain", "Red Dragon", "Iron Claws", "Fire Fiend", "Kali"];
//
//The source of all the image files for the
//monsters in the division dungeon
var divisionMonsters = ["Leprechaun.gif", "geist.gif", "Werewolf.gif", "Petit.gif", "catman.gif", "lobster.gif", "Darklegs.gif",
                      "OgreMage.gif", "astos.gif", "Grenade.gif", "Sorcerer.gif", "Lizardman.gif", "GreyWorm.gif", "Giant.gif",
                      "rhydra.gif", "Minotaur.gif", "Wraith.gif", "WizardOgre.gif", "Pterodactyl.gif", "Skull.gif",
                      "ShadowMaster.gif", "WildHorn.gif", "GasDragon.gif", "Phantom.gif", "Emperor1.gif", "MantisKing.gif",
                      "VampireGirl.gif", "BlackKnight.gif", "DeathClaw.gif", "GreyNaga.gif", "General.gif", "QueenLamia.gif",
                      "BeastDemon.gif", "ZombieDragon.gif", "Tiamat.gif"];
//
//The names of all the monsters
//in the division dungeon
var divisionMonsterNames = ["Grey Goblin", "Geist", "Werewolf", "Red Ringtail", "Werecat", "Blue Scorpion", "Darklegs",
                          "Ogre Mage", "Astos", "Grenade", "Flayer", "Lizardman", "Grey Worm", "Giant", "Red Hydra", "Minotaur",
                          "Wraith", "Wizard Ogre", "Pterodactyl", "Skull", "Shadow Master", "Wild Horn", "Gas Dragon",
                          "Phantom", "Wizard Knight", "Mantis King", "Vampire Queen", "Black Knight", "Death Claw", "Grey Naga",
                          "General", "Queen Lamia", "Beast Demon", "Zombie Dragon", "Tiamat"];

//
//Gets random number for the math problems from a floor to a ceiling
function getRandomNumber(floor, ceiling) {
  let range = (ceiling - floor) + 1;
  return Math.floor((Math.random() * range) + floor);
}
//
//This function resets the variables for new games
//It also provides an easy place to change their
//values for easier debugging
function resetStartVariables() {
  playerHealth = 10;
  maxHealth = 10;
  playerDamage = 1;
  mageIndex = 0;
  additionLevel = 1;
  subtractionLevel = 0;
  multiplicationLevel = 0;
  divisionLevel = 0;
  fibonacciSpells = 0;
  triangleSpells = 0;
  squareSpells = 0;
  pentagonSpells = 0;
  hexagonSpells = 0;
  pyramidSpells = 0;
  cubeSpells = 0;
  starSpells = 0;
  monstersKilled = 0;
  totalMonstersKilled = 0;
}
//
//Sets up the title screen
function gameStart() {
  resetStartVariables();
  playArea.innerHTML = "";
  //
  //These five lines put the title on the screen
  let titleDiv = document.createElement("div");
  titleDiv.id = "titleDiv";
  let title = document.createTextNode("Mathemagicus");
  titleDiv.appendChild(title);
  playArea.appendChild(titleDiv);
  //
  //This block puts the buttons for New Game and Continue on the screen
  let newGameButtons = document.createElement("table");
  newGameButtons.id = "newGameButtons";//Sets the id for the table for styling
  let tableRow = document.createElement("tr");
  let newGameTD = document.createElement("td");//The <td>s for the two buttons
  let continueTD = document.createElement("td");
  //
  //These seven lines put the New Game button in the table
  //and define its attributes
  let newGameButton = document.createElement("input");
  newGameButton.type = "button";
  newGameButton.value = "New Game";
  newGameButton.className = "startButtons";
  newGameButton.onclick = function() {
    deleteValues();
    newGame();
  }
  newGameTD.appendChild(newGameButton);
  tableRow.appendChild(newGameTD);
  //
  //These seven lines put the Continue button in the table
  //and define its attributes
  let continueButton = document.createElement("input");
  continueButton.type = "button";
  continueButton.value = "Continue";
  continueButton.className = "startButtons";
  continueButton.onclick = retrieveValues;
  continueTD.appendChild(continueButton);
  tableRow.appendChild(continueTD);

  /*let debug = document.createElement("input");
  debug.id = "debug";
  debug.type = "button";
  debug.value = "Developer";
  debug.onclick = developer();
  playArea.appendChild(debug);*/

  newGameButtons.appendChild(tableRow);//This puts the <tr> with my buttons into the table
  playArea.appendChild(newGameButtons);//This puts the <table> onto the screen
}
//
//The New Game screen with player name input
function newGame() {
  let lineBreak = document.createElement("br");
  //
  //These two lines remove the buttons from the start screen
  let newGameButtons = document.getElementById("newGameButtons");
  playArea.removeChild(newGameButtons);
  //
  //This block displays the "Enter your name" prompt
  let enterNameDiv = document.createElement("div");
  enterNameDiv.id = "enterNameDiv";
  enterNameDiv.className = "textBox";
  let enterName = document.createTextNode("Please enter your name:");
  enterNameDiv.appendChild(enterName);
  lineBreak = document.createElement("br");
  enterNameDiv.appendChild(lineBreak);
  //
  //This block displays the text input box
  let nameTextBox = document.createElement("input");
  nameTextBox.type = "text";
  nameTextBox.id = "nameTextBox";
  nameTextBox.setAttribute("onKeyDown", "if(event.keyCode==13) chooseCharacter()")
  enterNameDiv.appendChild(nameTextBox);
  lineBreak = document.createElement("br");
  enterNameDiv.appendChild(lineBreak);
  //
  //This puts it all into the playArea and puts the focus on the nameTextBox
  playArea.appendChild(enterNameDiv);
  document.getElementById("nameTextBox").focus();
}
//
//The character select screen and dialogue
function chooseCharacter() {
  playerName = document.getElementById("nameTextBox").value;
  if (playerName == "Indiana Jones") {
    godMode();
  }
  let introText = "Welcome to Arithmeticia. You must be " + playerName +
                  ", the mage that we sent for. Let me get a better look at you.";
  let titleDiv = document.getElementById("titleDiv"); //Removes the Mathemagicus title
  playArea.removeChild(titleDiv);                     //from the screen
  let enterNameDiv = document.getElementById("enterNameDiv"); //Removes the enter name text box
  playArea.removeChild(enterNameDiv);                         //from the screen
  //
  //This block puts the NPC cameo on the screen
  let cameoDiv = document.createElement("div");
  let cameoImg = document.createElement("img");
  cameoImg.src = "Tellah.gif";
  cameoImg.id = "cameoImg";
  cameoDiv.id = "cameo";
  cameoDiv.appendChild(cameoImg);
  playArea.appendChild(cameoDiv);
  //
  //This block puts the text box on the screen
  let introTextDiv = document.createElement("div");
  introTextDiv.className = "textBox";
  introTextDiv.id = "introTextDiv";
  playArea.appendChild(introTextDiv);
  typeText("introTextDiv", introText, 0, showMages); //This function "types" the text into the box
  //
  //This block of code puts together all the pieces needed
  //for character selection
  var characterSelectText = document.createElement("div");
  characterSelectText.id = "characterSelectText";
  characterSelectText.innerHTML = "Choose your mage:";

  var leftButton = document.createElement("input");
  leftButton.id = "leftButton";
  leftButton.className = "selectButtons";
  leftButton.type = "button";
  leftButton.value = "<";
  leftButton.onclick = shiftRight;

  var rightButton = document.createElement("input");
  rightButton.id = "rightButton";
  rightButton.className = "selectButtons";
  rightButton.type = "button";
  rightButton.value = ">";
  rightButton.onclick = shiftLeft;

  var characterDiv1 = document.createElement("div");
  characterDiv1.id = "characterDiv1";
  var characterDiv2 = document.createElement("div");
  characterDiv2.id = "characterDiv2";

  var characterDiv3 = document.createElement("div");
  characterDiv3.id = "characterDiv3";

  var characterImg1 = document.createElement("img");
  characterImg1.className = "characterImg";
  characterDiv1.appendChild(characterImg1);
  characterImg1.src = "./mages/" + mages[6][0];

  var characterImg2 = document.createElement("img");
  characterImg2.className = "characterImg";
  characterDiv2.appendChild(characterImg2);
  characterImg2.src = "./mages/" + mages[0][0];
  characterImg2.onclick = townIntro;

  var characterImg3 = document.createElement("img");
  characterImg3.className = "characterImg";
  characterDiv3.appendChild(characterImg3);
  characterImg3.src = "./mages/" + mages[1][0];
  //
  //This function doesn't run until the text has finished typing
  //Basically, you can't choose your mage until after the NPC is
  //done talking
  function showMages() {
    playArea.appendChild(characterSelectText);
    playArea.appendChild(leftButton);
    playArea.appendChild(characterDiv1);
    playArea.appendChild(characterDiv2);
    playArea.appendChild(characterDiv3);
    playArea.appendChild(rightButton);
  }
  //
  //This function shifts the list of available mages to the left
  function shiftLeft() { //Right arrow button
    playArea.removeChild(characterDiv1);
    mageIndex++;

    if (mageIndex >= mages.length) {
      mageIndex = 0;
    }
    /*console.clear();
    console.log("index is " + mageIndex);
    console.log("(index + 1) % " + mages.length + " is " + ((mageIndex + 1) % mages.length));*/

    characterDiv2.id = "characterDiv1";
    characterDiv1 = characterDiv2;

    characterDiv3.id = "characterDiv2";
    characterDiv2 = characterDiv3;
    characterImg2 = characterImg3;
    characterImg2.onclick = townIntro;


    characterDiv3 = document.createElement("div");
    characterDiv3.id = "characterDiv3";
    characterImg3 = document.createElement("img");
    characterImg3.className = "characterImg";
    characterDiv3.appendChild(characterImg3);
    characterImg3.src = "./mages/" + mages[(mageIndex + 1) % mages.length][0];
    playArea.insertBefore(characterDiv3, rightButton);
  }
  //
  //This function shifts the list of available mages to the right
  function shiftRight() { //left arrow button
    playArea.removeChild(characterDiv3);
    mageIndex--

    if (mageIndex < 0) {
      mageIndex = mages.length - 1;
    }
    /*console.clear();
    console.log("index is " + mageIndex);
    console.log("(index + 6) % " + mages.length + " is " + ((mageIndex + 1) % 7));*/

    characterDiv2.id = "characterDiv3";
    characterDiv3 = characterDiv2;

    characterDiv1.id = "characterDiv2";
    characterDiv2 = characterDiv1;
    characterImg2 = characterImg1;
    characterImg2.onclick = townIntro;

    characterDiv1 = document.createElement("div");
    characterDiv1.id = "characterDiv1";
    characterImg1 = document.createElement("img");
    characterImg1.className = "characterImg";
    characterDiv1.appendChild(characterImg1);
    characterImg1.src = "./mages/" + mages[(mageIndex + 6) % mages.length][0];
    playArea.insertBefore(characterDiv1, characterDiv2);
  }
}
//
//Introduces the basic game plot
function townIntro() {
  playArea.removeChild(characterSelectText);
  playArea.removeChild(leftButton);
  playArea.removeChild(characterDiv1);
  playArea.removeChild(characterDiv2);
  playArea.removeChild(characterDiv3);
  playArea.removeChild(rightButton);

  let skipButton = document.createElement("input");
  skipButton.id = "skipButton";
  skipButton.type = "button";
  skipButton.value = "Skip Intro";
  skipButton.onclick = dungeonEntrance;
  playArea.appendChild(skipButton);

  let textString = "Ah, that's better. We asked you to come because we have a monster problem. ";
  typeText("introTextDiv", textString, introPart2, 0);

  function introPart2() {
    let textString = "The old dungeons beneath the city are overrun with monsters and they've been attacking the townsfolk. ";
    typeText("introTextDiv", textString, introPart3, 0);
  }
  function introPart3() {
    let textString = "We need you to clear out the old dungeons to make our town safe again. ";
    typeText("introTextDiv", textString, introPart4, 0);
  }
  function introPart4() {
    let textString = "Only one dungeon is open right now. The other three are sealed with some kind of magic. ";
    typeText("introTextDiv", textString, introPart5, 0);
  }
  function introPart5() {
    let textString = "Here are the dungeons. Thank you so much for your help getting rid of those monsters. ";
    typeText("introTextDiv", textString, dungeonEntrance, 0);
  }
}
//
//Sets up the dungeon entrance screen
function dungeonEntrance() {
  let additionDoor = "";
  let subtractionDoor = "";
  let multiplicationDoor = "";
  let divisionDoor = "";
  //
  //This block sets up the <table> elements for the dungeon screen
  playArea.innerHTML = "";
  playArea.style.height = "450px";

  let dungeonTable = document.createElement("table");
  dungeonTable.id = "dungeonTable";
  let firstRow = document.createElement("tr");
  let secondRow = document.createElement("tr");
  //
  //This block sets up the addition dungeon elements
  let additionDoorTD = document.createElement("td");
  let additionDoorImg = document.createElement("img");
  additionDoorTD.appendChild(additionDoorImg);
  firstRow.appendChild(additionDoorTD);
  //
  //This block sets up the subtraction dungeon elements
  let subtractionDoorTD = document.createElement("td");
  let subtractionDoorImg = document.createElement("img");
  subtractionDoorTD.appendChild(subtractionDoorImg);
  firstRow.appendChild(subtractionDoorTD);
  //
  //This block sets up the multiplication dungeon elements
  let multiplicationDoorTD = document.createElement("td");
  let multiplicationDoorImg = document.createElement("img");
  multiplicationDoorTD.appendChild(multiplicationDoorImg);
  secondRow.appendChild(multiplicationDoorTD);
  //
  //This block sets up the division dungeon elements
  let divisionDoorTD = document.createElement("td");
  let divisionDoorImg = document.createElement("img");
  divisionDoorTD.appendChild(divisionDoorImg);
  secondRow.appendChild(divisionDoorTD);
  //
  //This block of ifs determines which door gif to display
  //and assigns an onclick function to open doors
  if (additionLevel) {
    additionDoor = "./doors/additionDoorOpen.gif";
    additionDoorImg.onclick = function() {dungeon("+");}
  } else {
    additionDoor = "./doors/additionDoorClosed.gif";
  }
  if (subtractionLevel) {
    subtractionDoor = "./doors/subtractionDoorOpen.gif";
    subtractionDoorImg.onclick = function() {dungeon("-");}
  } else {
    subtractionDoor = "./doors/subtractionDoorClosed.gif";
  }
  if (multiplicationLevel) {
    multiplicationDoor = "./doors/multiplicationDoorOpen.gif";
    multiplicationDoorImg.onclick = function() {dungeon("*");}
  } else {
    multiplicationDoor = "./doors/multiplicationDoorClosed.gif";
  }
  if (divisionLevel) {
    divisionDoor = "./doors/divisionDoorOpen.gif";
    divisionDoorImg.onclick = function() {dungeon("/");}
  } else {
    divisionDoor = "./doors/divisionDoorClosed.gif";
  }
  //
  //Defines the src for the door images
  additionDoorImg.src = additionDoor;
  subtractionDoorImg.src = subtractionDoor;
  multiplicationDoorImg.src = multiplicationDoor;
  divisionDoorImg.src = divisionDoor;
  //
  //This block of code creates the button that shifts the
  //screen up and down
  var nextScreen = document.createElement("input");
  nextScreen.id = "nextScreen";
  nextScreen.type = "button";
  nextScreen.value = "^";
  nextScreen.onclick = bookScreen;
  //
  //This block creates the <div> that holds all the
  //pages of the book and the first page
  var monsterBook = document.createElement("div");
  monsterBook.id = "monsterBook";
  var titlePage = makeTitlePage();
  monsterBook.appendChild(titlePage);
  //
  //Finishes displaying the elements of the screen in the play area
  dungeonTable.appendChild(firstRow);
  dungeonTable.appendChild(secondRow);
  playArea.appendChild(dungeonTable);
  playArea.appendChild(nextScreen);
  playArea.appendChild(monsterBook);
  //
  //This function shifts the screen to the book view
  function bookScreen() {
    dungeonTable.style.top = "-450px";
    nextScreen.style.top = "10px";
    nextScreen.style.transform = "scale(1, 1)";
    nextScreen.onclick = dungeonSelectScreen;
    monsterBook.style.top = "40px";
  }
  //
  //This function shifts the screen to the
  //dungeon select view
  function dungeonSelectScreen() {
    monsterBook.style.top = "470px";
    nextScreen.style.top = "417px";
    nextScreen.style.transform = "scale(1, -1)";
    nextScreen.onclick = bookScreen;
    dungeonTable.style.top = "14px";
  }
  //
  //This function handles the animation of turning
  //a page to the left
  function turnPageLeft(currentPage, targetPage, index) {
    let nextPage = targetPage(index);
    let bg = getRandomNumber(0, 3);
    nextPage.style.backgroundImage = "url(./book/" + pageBackgrounds[bg] +")";
    monsterBook.appendChild(nextPage);
    currentPage.style.zIndex = "2";
    currentPage.style.transformOrigin = "0 200px 0px";
    requestAnimationFrame(function() {currentPage.style.transform = "perspective(2000px) rotateY(-90deg)";});
    setTimeout(function() {
      requestAnimationFrame(function() {
        monsterBook.removeChild(currentPage);
      });
    }, 750);
  }
  //
  //This function handles the animation of turning a
  //page to the right. It does not like to run as it
  //should most of the time and I need to vigorously
  //debug it
  function turnPageRight(currentPage, targetPage, index) {
    currentPage.style.zIndex = "1";
    let nextPage = targetPage(index);
    if (nextPage.id == "titlePage") {
      nextPage.style.backgroundImage = "url(./book/bookCover.gif)";
    } else {
      let bg = getRandomNumber(0, 3);
      nextPage.style.backgroundImage = "url(./book/" + pageBackgrounds[bg] +")";
    }
    nextPage.style.zIndex = "2";
    nextPage.style.transformOrigin = "0 200px 0px";
    nextPage.style.transform = "perspective(2000px) rotateY(-90deg)";
    monsterBook.insertBefore(nextPage, currentPage);
    setTimeout(function() {
      //let itBe = function() {}
      console.clear();
      requestAnimationFrame(function() {nextPage.style.transform = "perspective(2000px) rotateY(0deg)";});
    }, 100);
    setTimeout(function() {
      //console.log("removing old page");
      requestAnimationFrame(function() {monsterBook.removeChild(currentPage);});
    }, 850);

  }
  //
  //This function makes the cover of my book even
  //though it is called title page
  function makeTitlePage() {
    titlePage = document.createElement("div");
    titlePage.className = "bookPage";
    titlePage.id = "titlePage";

    let pageTurnButtons = turnPageButtons(titlePage);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
    turnButton[1].onclick = function() {turnPageLeft(titlePage, contentsPage);}
    turnButton[0].parentNode.removeChild(turnButton[0]);

    var p = document.createElement("p");
    var br = document.createElement("br");
    var node1 = document.createTextNode("Liber");
    var node2 = document.createTextNode("Mathemagicus");
    p.appendChild(node1);
    p.appendChild(br);
    p.appendChild(node2);
    titlePage.appendChild(p);

    return titlePage;
  }
  //
  //This function handles the set up of the
  //table of contents page. I need to make it
  //look better
  function contentsPage() {
    let tableOfContents = document.createElement("div");
    tableOfContents.className = "bookPage";
    tableOfContents.id = "tableOfContents";

    let quickButtons = makeQuickButtons(tableOfContents);

    let quickButton = quickButtons.getElementsByClassName("quickButtons");
    quickButton[1].onclick = function() {turnPageLeft(tableOfContents, statusPage);}
    quickButton[2].onclick = function() {turnPageLeft(tableOfContents, spellsPage);}
    quickButton[3].onclick = function() {turnPageLeft(tableOfContents, monstersPage);}

    quickButton[0].parentNode.removeChild(quickButton[0]);

    let pageTurnButtons = turnPageButtons(tableOfContents);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
    turnButton[0].onclick = function() {turnPageRight(tableOfContents, makeTitlePage);}
    turnButton[1].onclick = function() {turnPageLeft(tableOfContents, statusPage);}

    let p = document.createElement("p");
    p.style.textAlign = "center";
    p.style.fontSize = "1.5em";
    p.style.fontWeight = "bold";
    p.style.textDecoration = "underline";
    let br = document.createElement("br");
    let node = document.createTextNode("Table of Contents");
    p.appendChild(node);
    p.appendChild(br);
    tableOfContents.appendChild(p);

    p = document.createElement("p");
    br = document.createElement("br");
    let span = document.createElement("span");
    span.onclick = function() {turnPageLeft(tableOfContents, statusPage);}
    let node1 = document.createTextNode("Status");
    if (playerName.charAt(playerName.length - 1) == "s") {
      var node2 = document.createTextNode("A list of " + playerName + "' progress.");
    } else {
      var node2 = document.createTextNode("A list of " + playerName + "'s progress.");
    }
    span.appendChild(node1);
    p.appendChild(span);
    p.appendChild(br);
    p.appendChild(node2);
    tableOfContents.appendChild(p);

    p = document.createElement("p");
    br = document.createElement("br");
    span = document.createElement("span");
    span.onclick = function() {turnPageLeft(tableOfContents, spellsPage);}
    node1 = document.createTextNode("Spells");
    node2 = document.createTextNode("A list of the spells " + playerName + " has learned.");

    span.appendChild(node1);
    p.appendChild(span);
    p.appendChild(br);
    p.appendChild(node2);
    tableOfContents.appendChild(p);

    p = document.createElement("p");
    br = document.createElement("br");
    span = document.createElement("span");
    span.onclick = function() {turnPageLeft(tableOfContents, monstersPage);}
    node1 = document.createTextNode("Monsters");
    node2 = document.createTextNode("A list of the monsters " + playerName + " has encountered.");

    span.appendChild(node1);
    p.appendChild(span);
    p.appendChild(br);
    p.appendChild(node2);
    tableOfContents.appendChild(p);


    return tableOfContents;
  }
  //
  //This function makes the layout of the status
  //page of the player's book
  function statusPage() {
    let status = document.createElement("div");
    status.className = "bookPage";
    status.id = "statusPage";
    //
    //This makes the buttons at the top of the book
    //for faster navigation
    let quickButtons = makeQuickButtons(status);
    //
    //This assigns the proper function to the
    //quick buttons at the top of the book
    let quickButton = quickButtons.getElementsByClassName("quickButtons");
    quickButton[0].onclick = function() {turnPageRight(status, contentsPage);}
    quickButton[2].onclick = function() {turnPageLeft(status, spellsPage);}
    quickButton[3].onclick = function() {turnPageLeft(status, monstersPage);}

    quickButton[1].parentNode.removeChild(quickButton[1]);

    let pageTurnButtons = turnPageButtons(status);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
    turnButton[0].onclick = function() {turnPageRight(status, contentsPage);}
    turnButton[1].onclick = function() {turnPageLeft(status, spellsPage);}

    //
    //This block makes and places the <div> and <image>
    //elements for the status page of the book
    let playerCameoDiv = document.createElement("div");
    playerCameoDiv.id = "playerCameoDiv";
    let playerCameoImg = document.createElement("img");
    playerCameoImg.id = "playerCameoImg";
    playerCameoImg.src = "./mages/" + mages[mageIndex][0];
    playerCameoDiv.appendChild(playerCameoImg);
    status.appendChild(playerCameoDiv);
    //
    //This makes the players name
    let p = document.createElement("p");
    let node1 = document.createTextNode(playerName);
    let strong = document.createElement("strong");
    let underline = document.createElement("u");
    strong.appendChild(node1);
    underline.appendChild(strong);
    p.appendChild(underline);
    p.style.fontSize = "1.5em";
    p.style.marginBottom = "10px";
    status.appendChild(p);
    //
    //This displays the max health and damage of the player
    p = document.createElement("p");
    node1 = document.createTextNode("Max Health: " + maxHealth);
    let node2 = document.createTextNode("Max Damage: " + playerBaseDamage);
    p.appendChild(node1);
    let br = document.createElement("br");
    p.appendChild(br);
    p.appendChild(node2);
    status.appendChild(p);
    //
    //This displays the total monsters killed
    p = document.createElement("p");
    node1 = document.createTextNode("Monsters Killed: " + totalMonstersKilled);
    p.appendChild(node1);
    status.appendChild(p);
    //
    //This long chunk displays the different levels of the player

    p = document.createElement("p");
    let node = document.createTextNode("Addition Level: " + additionLevel);
    p.appendChild(node);
    br = document.createElement("br");
    p.appendChild(br);
    let averageInfo = appendAverageInfo(additionAverage);
    p.appendChild(averageInfo);
    br = document.createElement("br");
    p.appendChild(br)

    node = document.createTextNode("Subtraction Level: " + subtractionLevel);
    p.appendChild(node);
    br = document.createElement("br");
    p.appendChild(br)
    averageInfo = appendAverageInfo(subtractionAverage);
    p.appendChild(averageInfo);
    br = document.createElement("br");
    p.appendChild(br);


    node = document.createTextNode("Multiplication Level: " + multiplicationLevel);
    p.appendChild(node);
    br = document.createElement("br");
    p.appendChild(br)
    averageInfo = appendAverageInfo(multiplicationAverage);
    p.appendChild(averageInfo);
    br = document.createElement("br");
    p.appendChild(br);

    node = document.createTextNode("Division Level: " + divisionLevel);
    p.appendChild(node);
    br = document.createElement("br");
    p.appendChild(br)
    averageInfo = appendAverageInfo(divisionAverage);
    p.appendChild(averageInfo);

    status.appendChild(p);

    /*let span = document.createElement("span");
    node = document.createTextNode = ("Average Answer Time: " + additionAverage[0]);
    span.appendChild(node);
    span.appendChild(br);
    node = document.createTextNode = ("Questions Answered: " + additionAverage[1]);
    span.appendChild(node);
    p.appendChild(span);

    node1 = document.createTextNode("Addition Level: " + additionLevel);
    node2 = document.createTextNode("Subtraction Level: " + subtractionLevel);
    let node3 = document.createTextNode("Multiplication Level: " + multiplicationLevel);
    let node4 = document.createTextNode("Division Level: " + divisionLevel);
    p.appendChild(node1);
    br = document.createElement("br");
    p.appendChild(br);
    p.appendChild(node2);
    br = document.createElement("br");
    p.appendChild(br);
    p.appendChild(node3);
    br = document.createElement("br");
    p.appendChild(br);
    p.appendChild(node4);
    br = document.createElement("br");
    p.appendChild(br);*/

    let saveGame = document.createElement("input");
    saveGame.id = "saveGame";
    saveGame.type = "button";
    saveGame.value = "Save Game";
    saveGame.onclick = saveValues;
    status.appendChild(saveGame);

    return status;

    function appendAverageInfo(array) {
      let span = document.createElement("span");
      let node = document.createTextNode("Average Answer Time: " + array[0].toFixed(2));
      span.appendChild(node);
      let br = document.createElement("br");
      span.appendChild(br);
      node = document.createTextNode("Questions Answered: " + array[1]);
      span.appendChild(node);
      return span;
    }
  }
  //
  //This function makes the layout of the spells
  //page of the player's book.
  function spellsPage() {
    let spells = document.createElement("div");
    spells.className = "bookPage";
    spells.id = "spellsPage";

    let quickButtons = makeQuickButtons(spells);

    let quickButton = quickButtons.getElementsByClassName("quickButtons");
    quickButton[0].onclick = function() {turnPageRight(spells, contentsPage);}
    quickButton[1].onclick = function() {turnPageRight(spells, statusPage);}
    quickButton[3].onclick = function() {turnPageLeft(spells, monstersPage);}

    quickButton[2].parentNode.removeChild(quickButton[2]);

    let pageTurnButtons = turnPageButtons(spells);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
    turnButton[0].onclick = function() {turnPageRight(spells, statusPage);}
    if (spellArray[0] >= 0) {
      turnButton[1].onclick = function() {turnPageLeft(spells, spellDetailPage, spellArray[0]);}
    } else {
      turnButton[1].onclick = function() {turnPageLeft(spells, monstersPage);}
    }


    if (playerName.charAt(playerName.length - 1) == "s") {
      var text = document.createTextNode(playerName + "' Spells");
    } else {
      var text = document.createTextNode(playerName + "'s Spells");
    }
    var p = document.createElement("p");
    var br = document.createElement("br");
    var underline = document.createElement("u");
    var strong = document.createElement("strong");
    strong.appendChild(text);
    underline.appendChild(strong);
    p.appendChild(underline);
    p.appendChild(br);
    spells.appendChild(p);

    //
    //Iterates through the spells the player has acquired
    //and places them in the spells object
    for (let index of spellArray) {
      span = document.createElement("span");
      br = document.createElement("br");
      text = document.createTextNode(spellBookContent[index][0]);
      span.onclick = function() {turnPageLeft(spells, spellDetailPage, (index - 1));}
      span.appendChild(text);
      span.appendChild(br);
      spells.appendChild(span);
      index++;
    }

    return spells;
  }
  //
  //This function handles the individual spell pages
  function spellDetailPage(index) {
    let spell = document.createElement("div");
    spell.className = "bookPage";
    spell.id = "spellsDetailPage";

    let quickButtons = makeQuickButtons(spell);

    let quickButton = quickButtons.getElementsByClassName("quickButtons");
    quickButton[0].onclick = function() {turnPageRight(spell, contentsPage);}
    quickButton[1].onclick = function() {turnPageRight(spell, statusPage);}
    quickButton[2].onclick = function() {turnPageRight(spell, spellsPage);}
    quickButton[3].onclick = function() {turnPageLeft(spell, monstersPage);}

    let pageTurnButtons = turnPageButtons(spell);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");

    if (spellArray.indexOf(index) === 0) {
      turnButton[0].onclick = function() {turnPageRight(spell, spellsPage);}
    } else {
      turnButton[0].onclick = function() {turnPageRight(spell, spellDetailPage, (index - 1));}
    }
    if (index < (spellArray.length - 1)) {
      turnButton[1].onclick = function() {turnPageLeft(spell, spellDetailPage, (index + 1));}
    } else {
      turnButton[1].onclick = function() {turnPageLeft(spell, monstersPage);}
    }

    var spellDiv = document.createElement("div");
    spellDiv.id = "spellDetailDiv";
    var spellImg = document.createElement("img");
    spellImg.src = "./scrolls/" + spellBookContent[spellArray[index]][1];
    spellImg.style.height = "330px";
    spellDiv.appendChild(spellImg);
    spell.appendChild(spellDiv);

    return spell;
  }
  //
  //This function makes the main monster page
  //of my monster book
  function monstersPage() {
    let monsters = document.createElement("div");
    monsters.className = "bookPage";
    monsters.id = "monsterPage";

    let quickButtons = makeQuickButtons(monsters);

    let quickButton = quickButtons.getElementsByClassName("quickButtons");
    quickButton[0].onclick = function() {turnPageRight(monsters, contentsPage);}
    quickButton[1].onclick = function() {turnPageRight(monsters, statusPage);}
    quickButton[2].onclick = function() {turnPageRight(monsters, spellsPage);}
    quickButton[3].parentNode.removeChild(quickButton[3]);

    let pageTurnButtons = turnPageButtons(monsters);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
    if (spellArray[0] >= 0) {
      turnButton[0].onclick = function() {turnPageRight(monsters, spellDetailPage, (spellArray.length - 1));}
    } else {
      turnButton[0].onclick = function() {turnPageRight(monsters, spellsPage);}
    }
    if (typeof(additionMonstersKilled[0]) == "object") {
      turnButton[1].onclick = function() {turnPageLeft(monsters, monsterBasePage, "+");}
    } else {
      turnButton[1].parentNode.removeChild(turnButton[1]);
    }

    let p = document.createElement("p");
    let strong = document.createElement("strong");
    let u = document.createElement("u");
    let br = document.createElement("br");
    let node = document.createTextNode("Capitulum Prodigium");
    strong.appendChild(node);
    u.appendChild(strong);
    p.appendChild(u);
    p.appendChild(br);
    monsters.appendChild(p);

    let span = document.createElement("span");
    strong = document.createElement("strong");
    u = document.createElement("u");
    br = document.createElement("br");
    node = document.createTextNode("Addition Monsters");
    let node2 = document.createTextNode(": " + additionMonstersKilled.length);
    span.appendChild(node);
    if (typeof(additionMonstersKilled[0]) == "object") {
      span.onclick = function() {turnPageLeft(monsters, monsterBasePage, "+");}
    } else {
      span.onclick = "";
    }

    monsters.appendChild(span);
    monsters.appendChild(node2);
    monsters.appendChild(br);

    span = document.createElement("span");
    strong = document.createElement("strong");
    u = document.createElement("u");
    br = document.createElement("br");
    node = document.createTextNode("Subtraction Monsters");
    node2 = document.createTextNode(": " + subtractionMonstersKilled.length);
    span.appendChild(node);
    if (typeof(subtractionMonstersKilled[0]) == "object") {
      span.onclick = function() {turnPageLeft(monsters, monsterBasePage, "-");}
    } else {
      span.onclick = "";
    }
    monsters.appendChild(span);
    monsters.appendChild(node2);
    monsters.appendChild(br);

    span = document.createElement("span");
    strong = document.createElement("strong");
    u = document.createElement("u");
    br = document.createElement("br");
    node = document.createTextNode("Multiplication Monsters");
    node2 = document.createTextNode(": " + multiplicationMonstersKilled.length)
    span.appendChild(node);
    if (typeof(multiplicationMonstersKilled[0]) == "object") {
      span.onclick = function() {turnPageLeft(monsters, monsterBasePage, "*");}
    } else {
      span.onclick = "";
    }
    monsters.appendChild(span);
    monsters.appendChild(node2);
    monsters.appendChild(br);

    span = document.createElement("span");
    strong = document.createElement("strong");
    u = document.createElement("u");
    br = document.createElement("br");
    node = document.createTextNode("Division Monsters");
    node2 = document.createTextNode(": " + divisionMonstersKilled.length);
    span.appendChild(node);
    if (typeof(divisionMonstersKilled[0]) == "object") {
      span.onclick = function() {turnPageLeft(monsters, monsterBasePage, "/");}
    } else {
      span.onclick = "";
    }
    monsters.appendChild(span);
    monsters.appendChild(node2);
    monsters.appendChild(br);

    return monsters;
  }
  //
  //This function makes the base page for each
  //type of monster (+, -, *, /)
  function monsterBasePage(monsterClass) {
    let monsterList = document.createElement("div");
    monsterList.className = "bookPage";
    monsterList.id = "monsterListPage";

    var monsterArray;
    var masterArray;
    var monsterNames;
    var last;

    let quickButtons = makeQuickButtons(monsterList);

    let quickButton = quickButtons.getElementsByClassName("quickButtons");
    quickButton[0].onclick = function() {turnPageRight(monsterList, contentsPage);}
    quickButton[1].onclick = function() {turnPageRight(monsterList, statusPage);}
    quickButton[2].onclick = function() {turnPageRight(monsterList, spellsPage);}
    quickButton[3].onclick = function() {turnPageRight(monsterList, monstersPage);}

    let pageTurnButtons = turnPageButtons(monsterList);
    var turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");

    let p = document.createElement("p");
    p.style.textDecoration = "underline";
    p.style.fontWeight = "bold";
    p.style.fontSize = "1.5em";
    p.style.margin = "10px";
    var node;
    let br = document.createElement("br");

    switch (monsterClass) {
      case "+":
        monsterArray = additionMonstersKilled;
        masterArray = additionMonsters;
        monsterNames = additionMonsterNames;
        node = document.createTextNode("Addition Monsters");
        turnButton[0].onclick = function() {turnPageRight(monsterList, monstersPage);}
        turnButton[1].onclick = function() {turnPageLeft(monsterList, monsterDetailPage, ["+", additionMonstersKilled[0][0]]);}
        break;
      case "-":
        monsterArray = subtractionMonstersKilled;
        masterArray = subtractionMonsters;
        monsterNames = subtractionMonsterNames;
        node = document.createTextNode("Subtraction Monsters");
        last = (additionMonstersKilled.length - 1);
        turnButton[0].onclick = function() {turnPageRight(monsterList, monsterDetailPage, ["+", additionMonstersKilled[last][0]]);}
        turnButton[1].onclick = function() {turnPageLeft(monsterList, monsterDetailPage, ["-", subtractionMonstersKilled[0][0]]);}
        break;
      case "*":
        monsterArray = multiplicationMonstersKilled;
        masterArray = multiplicationMonsters;
        monsterNames = multiplicationMonsterNames;
        node = document.createTextNode("Multiplication Monsters");
        last = (subtractionMonstersKilled.length - 1);
        turnButton[0].onclick = function() {turnPageRight(monsterList, monsterDetailPage, ["-", subtractionMonstersKilled[last][0]]);}
        turnButton[1].onclick = function() {turnPageLeft(monsterList, monsterDetailPage, ["*", multiplicationMonstersKilled[0][0]]);}
        break;
      case "/":
        monsterArray = divisionMonstersKilled;
        masterArray = divisionMonsters;
        monsterNames = divisionMonsterNames;
        node = document.createTextNode("Division Monsters");
        last = (multiplicationMonstersKilled.length - 1);
        turnButton[0].onclick = function() {turnPageRight(monsterList, monsterDetailPage, ["*", multiplicationMonstersKilled[last][0]]);}
        turnButton[1].onclick = function() {turnPageLeft(monsterList, monsterDetailPage, ["/", divisionMonstersKilled[0][0]]);}
        break;
    }

    p.appendChild(node);
    p.appendChild(br);
    monsterList.appendChild(p);

    let table = document.createElement("table");
    table.id = "monsterListTable";

    for (let i = 0; i < monsterArray.length; i += 3) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let node1 = document.createTextNode((monsterArray[i][0] + 1) + ". " + monsterNames[monsterArray[i][0]]);
      td1.appendChild(node1);
      td1.onclick = function() {turnPageLeft(monsterList, monsterDetailPage, [monsterClass, monsterArray[i][0]]);}
      tr.appendChild(td1);
      if (typeof(monsterArray[i + 1]) == "object") {
        let td2 = document.createElement("td");
        let node2 = document.createTextNode((monsterArray[i + 1][0] + 1) + ". " + monsterNames[monsterArray[i + 1][0]]);
        td2.appendChild(node2);
        td2.onclick = function() {turnPageLeft(monsterList, monsterDetailPage, [monsterClass, monsterArray[i + 1][0]]);}
        tr.appendChild(td2);
      }
      if (typeof(monsterArray[i + 2]) == "object") {
        let td3 = document.createElement("td");
        let node3 = document.createTextNode((monsterArray[i + 2][0] + 1) + ". " + monsterNames[monsterArray[i + 2][0]]);
        td3.appendChild(node3);
        td3.onclick = function() {turnPageLeft(monsterList, monsterDetailPage, [monsterClass, monsterArray[i + 2][0]]);}
        tr.appendChild(td3);
      }
      table.appendChild(tr);
    }

    monsterList.appendChild(table);

    return monsterList;
  }
  //
  //This function makes the individual monster pages
  //in the monster book
  function monsterDetailPage(currentMonster) {
    //
    //currentMonster[0] = operation; indicates which set of arrays to use
    //currentMonster[1] = index of monster to display

    var monsterArray;
    var masterArray;
    var monsterNames;
    var imgSrcString = "";

    let monsterDetail = document.createElement("div");
    monsterDetail.className = "bookPage";
    monsterDetail.id = "monsterDetailPage";

    let quickButtons = makeQuickButtons(monsterDetail);

    let quickButton = quickButtons.getElementsByClassName("quickButtons");
    quickButton[0].onclick = function() {turnPageRight(monsterDetail, contentsPage);}
    quickButton[1].onclick = function() {turnPageRight(monsterDetail, statusPage);}
    quickButton[2].onclick = function() {turnPageRight(monsterDetail, spellsPage);}
    quickButton[3].onclick = function() {turnPageRight(monsterDetail, monstersPage);}

    let pageTurnButtons = turnPageButtons(monsterDetail);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");

    switch (currentMonster[0]) {
      case "+":
        monsterArray = additionMonstersKilled;
        masterArray = additionMonsters;
        monsterNames = additionMonsterNames;
        imgSrcString = "./monsters/addition/";
        if (findMonster(monsterArray, currentMonster[1]) == 0) {
          turnButton[0].onclick = function() {turnPageRight(monsterDetail, monsterBasePage, "+");}
        } else {
          let next = (findMonster(monsterArray, currentMonster[1]) - 1);
          turnButton[0].onclick = function() {turnPageRight(monsterDetail, monsterDetailPage, ["+", monsterArray[next][0]]);}
        }
        if (findMonster(monsterArray, currentMonster[1]) < (monsterArray.length - 1)) {
          let next = (findMonster(monsterArray, currentMonster[1]) + 1);
          turnButton[1].onclick = function() {turnPageLeft(monsterDetail, monsterDetailPage, ["+", monsterArray[next][0]]);}
        } else {
          if ((subtractionMonstersKilled[0] + 1)) {
            turnButton[1].onclick = function() {turnPageLeft(monsterDetail, monsterBasePage, "-");}
          } else {
            turnButton[1].parentNode.removeChild(turnButton[1]);
          }
        }
        break;
      case "-":
        monsterArray = subtractionMonstersKilled;
        masterArray = subtractionMonsters;
        monsterNames = subtractionMonsterNames;
        imgSrcString = "./monsters/subtraction/";
        if (findMonster(monsterArray, currentMonster[1]) == 0) {
          turnButton[0].onclick = function() {turnPageRight(monsterDetail, monsterBasePage, "-");}
        } else {
          let next = (findMonster(monsterArray, currentMonster[1]) - 1);
          turnButton[0].onclick = function() {turnPageRight(monsterDetail, monsterDetailPage, ["-", monsterArray[next][0]]);}
        }
        if (findMonster(monsterArray, currentMonster[1]) < (monsterArray.length - 1)) {
          let next = (findMonster(monsterArray, currentMonster[1]) + 1);
          turnButton[1].onclick = function() {turnPageLeft(monsterDetail, monsterDetailPage, ["-", monsterArray[next][0]]);}
        } else {
          if ((multiplicationMonstersKilled[0] + 1)) {
            turnButton[1].onclick = function() {turnPageLeft(monsterDetail, monsterBasePage, "*");}
          } else {
            turnButton[1].parentNode.removeChild(turnButton[1]);
          }
        }
        break;
      case "*":
        monsterArray = multiplicationMonstersKilled;
        masterArray = multiplicationMonsters;
        monsterNames = multiplicationMonsterNames;
        imgSrcString = "./monsters/multiplication/";
        if (findMonster(monsterArray, currentMonster[1]) == 0) {
          turnButton[0].onclick = function() {turnPageRight(monsterDetail, monsterBasePage, "*");}
        } else {
          let next = (findMonster(monsterArray, currentMonster[1]) - 1);
          turnButton[0].onclick = function() {turnPageRight(monsterDetail, monsterDetailPage, ["*", monsterArray[next][0]]);}
        }
        if (findMonster(monsterArray, currentMonster[1]) < (monsterArray.length - 1)) {
          let next = (findMonster(monsterArray, currentMonster[1]) + 1);
          turnButton[1].onclick = function() {turnPageLeft(monsterDetail, monsterDetailPage, ["*", monsterArray[next][0]]);}
        } else {
          if ((divisionMonstersKilled[0] + 1)) {
            turnButton[1].onclick = function() {turnPageLeft(monsterDetail, monsterBasePage, "/");}
          } else {
            turnButton[1].parentNode.removeChild(turnButton[1]);
          }
        }
        break;
      case "/":
        monsterArray = divisionMonstersKilled;
        masterArray = divisionMonsters;
        monsterNames = divisionMonsterNames;
        imgSrcString = "./monsters/division/";
        if (findMonster(monsterArray, currentMonster[1]) == 0) {
          turnButton[0].onclick = function() {turnPageRight(monsterDetail, monsterBasePage, "/");}
        } else {
          let next = (findMonster(monsterArray, currentMonster[1]) - 1);
          turnButton[0].onclick = function() {turnPageRight(monsterDetail, monsterDetailPage, ["/", monsterArray[next][0]]);}
        }
        if (findMonster(monsterArray, currentMonster[1]) < (monsterArray.length - 1)) {
          let next = (findMonster(monsterArray, currentMonster[1]) + 1);
          turnButton[1].onclick = function() {turnPageLeft(monsterDetail, monsterDetailPage, ["/", monsterArray[next][0]]);}
        } else {
          turnButton[1].parentNode.removeChild(turnButton[1]);
        }
        break;
    }

    let p = document.createElement("p");
    p.style.textDecoration = "underline";
    p.style.fontWeight = "bold";
    p.style.fontSize = "1.5em";
    //p.style.margin = "10px";
    p.style.textAlign = "center";
    var node = document.createTextNode((currentMonster[1] + 1) + ". " + monsterNames[currentMonster[1]]);
    let br = document.createElement("br");

    p.appendChild(node);
    monsterDetail.appendChild(p);

    p = document.createElement("p");
    if (currentMonster[1] < 30) {
      node = document.createTextNode("Hit Points: " + Math.ceil(((currentMonster[1] + 1) / 3) + 1));
    } else {
      var monsterLevel = (((currentMonster[1] % 30) * 2) + 2);
      node = document.createTextNode("Hit Points: " + ((monsterLevel * 2) + (monsterLevel / 2) + 5));
    }
    p.appendChild(node);
    monsterDetail.appendChild(p);

    p = document.createElement("p");
    node = document.createTextNode("Damage: " + Math.ceil((currentMonster[1] + 1) / 9));
    p.appendChild(node);
    monsterDetail.appendChild(p);

    p = document.createElement("p");
    node = document.createTextNode("Number Killed: " + monsterArray[findMonster(monsterArray, currentMonster[1])][1]);
    p.appendChild(node);
    monsterDetail.appendChild(p);

    if (currentMonster[1] < 30) {
      var monsterLevel = Math.ceil((currentMonster[1] + 1) / 3);
    } else {
      var monsterLevel = (((currentMonster[1] % 30) * 2) + 2) + " Boss";
    }
    p = document.createElement("p");
    node = document.createTextNode("Level " + monsterLevel);
    p.appendChild(node);
    monsterDetail.appendChild(p);

    let monsterDetailDiv = document.createElement("div");
    monsterDetailDiv.id = "monsterDetailDiv";
    if (monsterArray[findMonster(monsterArray, currentMonster[1])][1] < 10) {
      monsterDetailDiv.style.border = "3px solid black";
    } else if (monsterArray[findMonster(monsterArray, currentMonster[1])][1] < 50) {
      monsterDetailDiv.style.border = "3px solid #cd7f32";
    } else if (monsterArray[findMonster(monsterArray, currentMonster[1])][1] < 100) {
      monsterDetailDiv.style.border = "3px solid #c0c0c0";
    } else {
      monsterDetailDiv.style.border = "3px solid #d4af37";
    }
    let monsterDetailImg = document.createElement("img");
    monsterDetailImg.id = "monsterImg";
    monsterDetailImg.src = imgSrcString + masterArray[currentMonster[1]];
    monsterDetailDiv.appendChild(monsterDetailImg);
    monsterDetail.appendChild(monsterDetailDiv);

    return monsterDetail;
  }
  //
  //This function makes the quick buttons that
  //go at the top of most book pages
  function makeQuickButtons(targetElement) {
    let quickButtonDiv = document.createElement("div");
    quickButtonDiv.id = "quickButtonDiv";

    let contentsButton = document.createElement("input");
    contentsButton.className = "quickButtons";
    contentsButton.type = "button";
    contentsButton.value = "TOC";
    quickButtonDiv.appendChild(contentsButton);

    let statusButton = document.createElement("input");
    statusButton.className = "quickButtons";
    statusButton.type = "button";
    statusButton.value = "Status";
    quickButtonDiv.appendChild(statusButton);

    let spellsButton = document.createElement("input");
    spellsButton.className = "quickButtons";
    spellsButton.type = "button";
    spellsButton.value = "Spells";
    quickButtonDiv.appendChild(spellsButton);

    let monstersButton = document.createElement("input");
    monstersButton.className = "quickButtons";
    monstersButton.type = "button";
    monstersButton.value = "Monsters";
    quickButtonDiv.appendChild(monstersButton);

    targetElement.appendChild(quickButtonDiv);

    return quickButtonDiv;
  }
  //
  //This function creates and displays the two
  //turn page buttons at the bottom corners of
  //each of my pages
  function turnPageButtons(targetElement) {
    let pageTurnButtons = document.createElement("div");
    pageTurnButtons.id = "pageTurnButtons";

    let leftButton = document.createElement("input");
    leftButton.className = "turnPageButtons";
    leftButton.id = "leftPageButton";
    leftButton.type = "button";
    leftButton.value = "<";
    pageTurnButtons.appendChild(leftButton);

    let rightButton = document.createElement("input");
    rightButton.className = "turnPageButtons";
    rightButton.id = "rightPageButton";
    rightButton.type = "button";
    rightButton.value = ">";
    pageTurnButtons.appendChild(rightButton);

    targetElement.appendChild(pageTurnButtons);

    return(pageTurnButtons);
  }
}
//
//The function that handles the text typing effect
//and any functions that need to come after it's done typing
function typeText(divID, textString, nextFunction, typingComplete) {
  let i = 0;
  let waitTime = 0;
  let div = document.getElementById(divID);
  div.innerHTML = ""; //Clears the innerHTML of the element to be typed in
  typer();
  //This is a recursive function that runs until the end of the text string
  function typer() {
    if (i < textString.length) {
      div.innerHTML += textString.charAt(i);
      if (((textString.charAt(i) == ".") || (textString.charAt(i) == ",")) && ((i + 2) < textString.length)) {
        waitTime = 300;  //This gives a brief pause for "." and "," as long as it's
      } else {           //not the end of the string
        waitTime = 60;
      }
      i++;
      setTimeout(typer, waitTime); //The recursion after a brief pause
    } else if (typeof nextFunction === "function") {    //If this function is present it will display
      let nextButton = document.createElement("input"); //a button to advance the text to the next string
      nextButton.type = "button";                       //or next function
      nextButton.value = "Next";
      nextButton.id = "nextButton";
      nextButton.onclick = nextFunction;
      div.appendChild(nextButton);
      nextButton.focus();
    } else if (typeof typingComplete === "function") {  //If this function is present it will only
      typingComplete();                                 //run once the typing has completed and there
    }                                                   //is no nextFunction()
  }
}
//
//This function checks for specific key presses in the answer input box
function checkKeyPress(event, answer) {
  var key = event.which;
  switch(key) {
    case 13: //Enter key, check answer
      checkAnswer(answer, playerBaseDamage);
      break;
    case 97: //"a" key, Fibonacci Spell
      event.preventDefault(); //prevents the writing of the "a" key
      if (fibonacciCast) {
        break;
      }
      if (additionLevel > 2) {
        castFibonacci();
      }
      break;
    case 115: //"s" key, Triangle Spell
      event.preventDefault(); //prevents the writing of the "s" key
      if (subtractionLevel > 2) {
        castTriangle();
      }
      break;
    case 100: //"d" key, Square Spell
      event.preventDefault(); //prevents the writing of the "d" key
      if (additionLevel > 6) {
        castSquare();
      }
      break;
    case 101: //"e" key, Pentagon Spell
      event.preventDefault(); //prevents the writing of the "e" key
      if (pentagonCast) {
        break;
      }
      if (subtractionLevel > 8) {
        castPentagon();
      }
      break;
    case 102: //"f" key, Pyramid Spell
      event.preventDefault(); //prevents the writing of the key
      if (pyramidCast) {
        break;
      }
      if (additionLevel > 8) {
        castPyramid();
      }
      break;
    case 113: //"q" key, Cube Spell
      event.preventDefault(); //prevents the writing of the key
      if (cubeCast) {
        break;
      }
      if (divisionLevel > 2) {
        castCube();
      }
      break;
    case 114: //"r" key, Hexagon Spell
      event.preventDefault(); //prevents the writing of the key
      if (multiplicationLevel > 8) {
        castHexagon();
      }
      break;
    case 119: //"w" key, Nova Spell
      event.preventDefault(); //prevents the writing of the key
      if (divisionLevel > 8) {
        castStar();
      }
      break;
  }
}
//
//I'm not sure I need this but I think I do, I'll come back to it
//later and figure out if it stays or if it goes
function dungeon(operation) {
  operator = operation;
  makeDungeonScreen();
  var playerLevel = getLevel();
  monster = new newMonster(playerLevel);
  battle();
}
//
//This is the function that I return to as the "base" of all
//the combat/math
function battle() {
  terms = getTerms();
  algebra = false;
  sequence = false;
  width = 340;

  var countdownBarFront = document.getElementById("countdownBarFront");
  var countdownTimer = document.getElementById("countdownTimer");

  spellsOn();

  if (getRandomNumber(0, 100) <= monster.index) {
    problemDiv.innerHTML = "The " + monster.name + " used Algebra!";
    algebra = true;
    answer = terms[1];
    var algebraFlash = 10;
    let algebraMagic = setInterval(castAlgebra, 100);
    //
    //This function flashes the screen and displays
    //the modified problem for the player
    function castAlgebra() {
      //
      //This if statement runs once the flash counter algebraFlash
      //has finished. It displays the modified problem and starts the timer
      if (algebraFlash < 1) {
        problemDiv.innerHTML = terms[0] + " " + operator +
          " <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[1] + ")\"/> = " +
          terms[2];
        clearInterval(algebraMagic);
        timer = setInterval(timeDown, 10);
        var answerInput = document.getElementById("answerInput");
        answerInput.focus();
      //
      //This runs while algebraFlash is counting down.
      //It changes the brightness of the screen to
      //create a flash effect
      } else {
        if ((algebraFlash % 2) == 0) {
          playArea.style.filter = "brightness(50%)";
        } else {
          playArea.style.filter = "brightness(100%)";
        }
        algebraFlash--; //One less time to run the function
      }
    }
  } else if (getRandomNumber(0, 100) <= monster.index) {
    problemDiv.innerHTML = "The " + monster.name + " used Sequence!";
    sequence = true;
    terms = getTerms("sequence");
    answer = terms[4];
    var sequenceFlash = 10;
    let sequenceMagic = setInterval(castSequence, 100);

    function castSequence() {
      if (sequenceFlash < 1) {
        problemDiv.innerHTML = terms[0] + ", " + terms[1] + ", " + terms[2] + ", " + terms[3] +
          ", <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[4] + ")\"/>,...";
        clearInterval(sequenceMagic);
        timer = setInterval(timeDown, 10);
        var answerInput = document.getElementById("answerInput");
        answerInput.focus();
      //
      //This runs while sequenceFlash is counting down.
      //It changes the brightness of the screen to
      //create a flash effect
      } else {
        if ((sequenceFlash % 2) == 0) {
          playArea.style.filter = "brightness(50%)";
        } else {
          playArea.style.filter = "brightness(100%)";
        }
        sequenceFlash--; //One less time to run the function
      }
    }
  } else {
    answer = terms[2];
    problemDiv.innerHTML = terms[0] + " " + operator + " <span style=\"color:#ffbaba\">" + terms[1] + "</span> =\
      <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[2] + ")\"/>";
    timer = setInterval(timeDown, 10);
    var answerInput = document.getElementById("answerInput");
    answerInput.focus();
  }
}
//
//This function handles the countdown bar
function timeDown() {
  if (width < 1) {          //When the countdown ends, the setInterval is stopped
    clearInterval(timer);   //and a wrong answer is passed to checkAnswer()
    countdownTimer.innerHTML = "0.00";
    checkAnswer(-answer, 0);
  } else {
    width -= 0.34;   //How much the countdown bar decreases in size every 10 milliseconds
    //
    //These three lines display the time left on top of the
    //countdown timer
    countdownBarFront.style.width = width + "px";
    let timeLeft = (width / 34);
    countdownTimer.innerHTML = timeLeft.toFixed(2);
  }
}
//
//This function gets the terms for an arithmetic problem
//based on which operation the player is solving for
function getTerms(termType) {
  if (monster.index < 30) {
    var level = Math.ceil((monster.index + 1) / 3);
  } else {
    var level = (((monster.index % 30) * 2) + 2);
  }
  if (termType == "sequence") {
    var sequenceTerms = [];
    switch (operator) {
      case "+": //Addition
        var interval = getRandomNumber(2, (level + 1));
        var range = interval * 5;
        var start = getRandomNumber(1, (100 - range));
        break;
      case "-": //Subtraction
        var interval = getRandomNumber(2, (level + 1));
        var range = interval * 5;
        var start = getRandomNumber((range + 1), 100);
        break;
      case "*": //Multiplication
        var interval = getRandomNumber(1, (Math.ceil((level + 1) / 2)));
        var range = interval * 10;
        var start = getRandomNumber(1, (100 - range));
        break;
      case "/": //Division
        var interval = getRandomNumber(1, (Math.ceil((level + 1) / 2)));
        var range = interval * 10;
        var start = getRandomNumber((range + 1), 100);
        break;
    }
    var increment = interval;
    for (let i = 0; i < 6; i++) {
      sequenceTerms[i] = start;
      switch (operator) {
        case "+":
          start += interval;
          break;
        case "-":
          start -= interval;
          break;
        case "*":
          start += interval;
          interval += increment;
          break;
        case "/":
          start -= interval;
          interval += increment;
          break;
      }
    }
    return [sequenceTerms[0], sequenceTerms[1], sequenceTerms[2], sequenceTerms[3], sequenceTerms[4]];
  }
  switch (operator) {
    case "+": //Addition
      var constant1 = getRandomNumber(0, (level * 10));
      var constant2 = getRandomNumber(0, (level * 10));
      var answer = constant1 + constant2;
      break;
    case "-": //Subtraction
      //
      //I could use the same trick I did with
      //generating the division terms here with
      //the subtraction terms to lose the while
      //loop...
      var constant1 = getRandomNumber(1, (level * 10));
      var constant2 = getRandomNumber(0, (level * 10));
      while (constant2 > constant1) {
        constant2 = getRandomNumber(0, (level * 10));
      }
      var answer = constant1 - constant2;
      break;
    case "*": //Multiplication
      //
      //This variable declaration is just to shorten the name
      //temporarily to make the constant2 formula take up
      //less space
      var constant1 = getRandomNumber(1, (level + 5));
      //
      //There might be a better formula for getting this
      //progression of products but this works for now
      var constant2 = getRandomNumber(0, ((level + 5) - ((((level % 2) + level) / 2) - 1)));
      var answer = constant1 * constant2;
      break;
    case "/": //Division
      //
      //This logic is essentially the same as that for the
      //multiplication problems but I changed the names of the
      //variables to suit a division problem. I like the multiplication
      //progression and I wanted to keep the division progression
      //the same
      //
      //This variable declaration is just to shorten the name
      //temporarily to make the answer formula take up
      //less space
      var constant2 = getRandomNumber(1, (level + 5));
      //
      //There might be a better formula for getting this
      //progression of products but this works for now
      var answer = getRandomNumber(0, ((level + 5) - ((((level % 2) + level) / 2) - 1)));
      var constant1 = constant2 * answer;
      break;
  }
  return [constant1, constant2, answer];
}
//
//This function will become a lot bigger, but it handles all the logic
//that goes into checking answers and progressing the game
function checkAnswer(answer, damage) {
  clearInterval(timer);
  spellsOff();

  var playerImg = document.getElementById("playerImg");
  var playerDiv = document.getElementById("playerDiv");
  var slash = document.getElementById("slash");
  var monsterImg = document.getElementById("monsterImg");
  var monsterDiv = document.getElementById("monsterDiv");
  var blast = document.getElementById("blast");

  let problemDiv = document.getElementById("problemDiv");
  let answerInput = document.getElementById("answerInput");
  let hintDiv = document.getElementById("hintDiv");
  hintDiv.style.visibility = "hidden";
  hintDiv.innerHTML = "";

  //
  //The first half of this if statement handles the stuff that
  //happens when an answer is correct
  if ((answerInput.value == answer) || (answer == "spell") || (answer == "heal")) {
    checkForSpells();
    monster.hp -= (damage + damageBoost);

    if (monster.hp < 1) {
      monster.hp = 0;
    }
    var monsterHealthBarFront = document.getElementById("monsterHealthBarFront");
    monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";

    if (answer != "heal") {
      var damageFlash = 6;
      var damageDiv = document.createElement("div");
      damageDiv.id = "damageDiv";
      damageDiv.innerHTML = (damage + damageBoost);
      monsterDiv.appendChild(damageDiv);
      damageMonster = setInterval(monsterDamage, 100);
      requestAnimationFrame(function() {damageDiv.style.bottom = "100%";});
      requestAnimationFrame(function() {damageDiv.style.filter = "opacity(0%)";});
      if (answer != "spell") {
        var newNumber = (10 - Number(document.getElementById("countdownTimer").innerHTML))
        switch (operator) {
          case "+":
            additionAverage = getAverage(additionAverage, newNumber);
            break;
          case "-":
            subtractionAverage = getAverage(subtractionAverage, newNumber);
            break;
          case "*":
            multiplicationAverage = getAverage(multiplicationAverage, newNumber);
            break;
          case "/":
            divisionAverage = getAverage(divisionAverage, newNumber);
            break;
        }
      }
    }

    //
    //This if checks to see if the monster is killed or not
    if (monster.hp < 1) {
      monstersKilled++;
      totalMonstersKilled++;
      checkMonster();
      problemDiv.innerHTML = "Great job, you defeated the " + monster.name + "!<br /><br />";
      //
      //This if checks to see if you've killed enough monsters
      //to clear the level
      if (monstersKilled >= 10) {
        insertNextButton("Next", levelUp);
      } else {
        insertNextButton("Next Problem", nextMonster);
      }
    } else {
      problemDiv.innerHTML = "Great job!<br /><br />";
      insertNextButton("Next Problem", battle);
    }
  //
  //The second half of this if statement controls the stuff
  //that happens when an answer is wrong
  } else {
    playerHealth -= monster.damage;
    if (playerHealth < 1) {
      playerHealth = 0;
    }

    var healthBarFront = document.getElementById("healthBarFront");
    healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";

    var damageDiv = document.createElement("div");
    damageDiv.id = "damageDiv";
    damageDiv.innerHTML = monster.damage;
    playerDiv.appendChild(damageDiv);

    var damageFlash = 6;
    damagePlayer = setInterval(playerDamage, 100);
    requestAnimationFrame(function() {damageDiv.style.bottom = "100%";});
    requestAnimationFrame(function() {damageDiv.style.filter = "opacity(0%)";});

    if (playerHealth < 1) {
      problemDiv.innerHTML = "You have succumbed to the " + monster.name + "'s attack!<br /><br />";
      insertNextButton("Continue", gameStart);
    } else {
      problemDiv.innerHTML = "The answer was " + Math.abs(answer) + "<br /><br />";
      insertNextButton("Next Problem", battle);
    }
  }

  function getAverage(averageTime, newNumber) {
    averageTime[0] = ((averageTime[0] * averageTime[1]) + newNumber) / (averageTime[1] + 1);
    averageTime[1]++;
    return averageTime;
  }
  //
  //This function handles the animation for monster damage
  function monsterDamage() {

    playerImg.src = "./mages/" + mages[mageIndex][1];
    monsterImg.style.filter = "brightness(50%)";

    if (damageFlash <= 0) {
      setTimeout(function() {monsterDiv.removeChild(damageDiv);}, 1400);
      playerImg.src = "./mages/" + mages[mageIndex][0];
      if (monster.hp > 0) {
        monsterImg.style.filter = "brightness(100%)";
      }
      clearInterval(damageMonster);
    } else {
      if ((damageFlash % 2) == 0) {
        monsterDiv.style.backgroundColor = "red";
        blast.style.visibility = "visible";
      } else {
        monsterDiv.style.backgroundColor = "grey";
        blast.style.visibility = "hidden";
      }
      damageFlash--; //One less time to run the function
    }
  }
  //
  //This function handles the animation for player damage
  function playerDamage() {
    playerImg.src = "./mages/" + mages[mageIndex][2];
    playerImg.style.filter = "brightness(50%)";
    if (damageFlash <= 0) {
      setTimeout(function() {playerDiv.removeChild(damageDiv);}, 1400);
      playerImg.style.filter = "brightness(100%)";
      if (playerHealth < 1) {
        playerImg.src = "./mages/" + mages[mageIndex][3];
      } else {
        playerImg.src = "./mages/" + mages[mageIndex][0];
      }
      clearInterval(damagePlayer);
    } else {
      if ((damageFlash % 2) == 0) {
        playerDiv.style.backgroundColor = "red";
        slash.style.visibility = "visible";
      } else {
        playerDiv.style.backgroundColor = "grey";
        slash.style.visibility = "hidden";
      }
      damageFlash--;
    }
  }
  //
  //This function creates and inserts the next button
  //into my answer response text
  function insertNextButton(buttonString, nextFunction) {
    let nextButton = document.createElement("input");
    nextButton.setAttribute("type", "button");
    nextButton.setAttribute("value", buttonString);
    nextButton.setAttribute("id", "nextButton");
    nextButton.onclick = nextFunction;
    problemDiv.appendChild(nextButton);
    nextButton.focus();
  }
  //
  //This function runs when the monster is killed
  //It gets the next monster and sends the player
  //back to the battle() function
  function nextMonster() {
    var playerLevel = getLevel();
    monster = new newMonster(playerLevel);
    monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";
    monsterImg.style.filter = "brightness(100%)";
    battle();
  }
  //
  //This function does all the stuff associated with levelling
  //up and then tosses the player out of the dungeon
  function levelUp() {
    playerLevel = getLevel();

    problemDiv.innerHTML = "You cleared level " + playerLevel + "!<br /><br />";
    if (((playerLevel % 2)  == 0) && (monstersKilled == 10) && (playerLevel < 11)) {
      insertNextButton("Next", bossEncounter);
    } else {
      if (monstersKilled > 10) {
        switch (operator) {
          case "+":
            if (playerLevel == 2) { //Fibonacci Spell
              spellArray.push(0);
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/fibonacciScroll.gif");});
            }
            if (playerLevel == 4) { //Subtraction Dungeon
              problemDiv.innerHTML += "Something seems to be happening...<br /><br />";
              subtractionLevel++;
              progressLevel();
              var shakeCount = 12;
              var dungeonShake = setInterval(shakeDungeon, 100);
              insertNextButton("Next", dungeonEntrance);
            }
            if (playerLevel == 6) { //Health Spell
              spellArray.push(4);
              spellArray.sort();
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              maxHealth += 2;
              playerHealth += 2;
              var healthBarFront = document.getElementById("healthBarFront");
              healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/squareScroll.gif");});
            }
            if (playerLevel == 8) { //Pyramid/Time Spell
              spellArray.push(5);
              spellArray.sort();
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/pyramidScroll.gif");});
            }
            if (playerLevel == 10) {//Damage Boost
              problemDiv.innerHTML += "You feel stronger than you did before...<br />Damage +1!<br /><br />";
              playerBaseDamage++;
              playerHealth = maxHealth;
              progressLevel();
              var healthBarFront = document.getElementById("healthBarFront");
              healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
              insertNextButton("Next", dungeonEntrance);
            }
            break;
          case "-":
            if (playerLevel == 2) { //Triangle/Fireball Spell
              spellArray.push(3);
              spellArray.sort();
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/triangleScroll.gif");});
            }
            if (playerLevel == 4) { //Multiplication Dungeon
              problemDiv.innerHTML += "Something seems to be happening...<br /><br />";
              multiplicationLevel++;
              progressLevel();
              var shakeCount = 12;
              var dungeonShake = setInterval(shakeDungeon, 100);
              insertNextButton("Next", dungeonEntrance);
            }
            if (playerLevel == 6) { //Health Boost
              problemDiv.innerHTML += "You feel healthier than you did before...<br />Max Health +2!<br /><br />";
              maxHealth += 2;
              playerHealth += 2;
              progressLevel();
              var healthBarFront = document.getElementById("healthBarFront");
              healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
              insertNextButton("Next", dungeonEntrance);
            }
            if (playerLevel == 8) { //Pentagon/Reduce Terms Spell
              spellArray.push(6);
              spellArray.sort();
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/pentagonScroll.gif");});
            }
            if (playerLevel == 10) {//Damage Boost
              problemDiv.innerHTML += "You feel stronger than you did before...<br />Damage +1!<br /><br />";
              playerBaseDamage++;
              playerHealth = maxHealth;
              progressLevel();
              var healthBarFront = document.getElementById("healthBarFront");
              healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
              insertNextButton("Next", dungeonEntrance);
            }
            break;
          case "*":
            if (playerLevel == 2) { //Upgraded Hints
              spellArray.push(1);
              spellArray.sort();
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/fibonacciScroll2.gif");});
            }
            if (playerLevel == 4) { //Division Dungeon
              problemDiv.innerHTML += "Something seems to be happening...<br /><br />";
              divisionLevel++;
              progressLevel();
              var shakeCount = 12;
              var dungeonShake = setInterval(shakeDungeon, 100);
              insertNextButton("Next", dungeonEntrance)
            }
            if (playerLevel == 6) { //Health Boost
              problemDiv.innerHTML += "You feel healthier than you did before...<br />Max Health +2!<br /><br />";
              maxHealth += 2;
              playerHealth += 2;
              progressLevel();
              var healthBarFront = document.getElementById("healthBarFront");
              healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
              insertNextButton("Next", dungeonEntrance);
            }
            if (playerLevel == 8) { //Hexagon/Strength Spell
              spellArray.push(7);
              spellArray.sort();
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/hexagonScroll.gif");});
            }
            if (playerLevel == 10) {//Damage Boost
              problemDiv.innerHTML += "You feel stronger than you did before...<br />Damage +1!<br /><br />";
              playerBaseDamage++;
              playerHealth = maxHealth;
              progressLevel();
              var healthBarFront = document.getElementById("healthBarFront");
              healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
              insertNextButton("Next", dungeonEntrance);
            }
            break;
          case "/":
            if (playerLevel == 2) { //Upgraded Hints
              spellArray.push(2);
              spellArray.sort();
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/fibonacciScroll3.gif");});
            }
            if (playerLevel == 4) { //Cube/Polymorph Spell
              spellArray.push(8);
              spellArray.sort();
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/cubeScroll.gif");});
            }
            if (playerLevel == 6) { //Health Boost
              problemDiv.innerHTML += "You feel healthier than you did before...<br />Max Health +2!<br /><br />";
              maxHealth += 2;
              playerHealth += 2;
              progressLevel();
              var healthBarFront = document.getElementById("healthBarFront");
              healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
              insertNextButton("Next", dungeonEntrance);
            }
            if (playerLevel == 8) { //Star/Nova Spell
              spellArray.push(9);
              spellArray.sort();
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("./scrolls/starScroll.gif");});
            }
            if (playerLevel == 10) {//Damage Boost
              problemDiv.innerHTML += "You feel stronger than you did before...<br />Damage +1!<br /><br />";
              playerBaseDamage++;
              playerHealth = maxHealth;
              progressLevel();
              var healthBarFront = document.getElementById("healthBarFront");
              healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
              insertNextButton("Next", dungeonEntrance);
            }
            break;
        }

        function shakeDungeon() {
          if (shakeCount < 1) {
            clearInterval(dungeonShake);
          } else {
            if ((shakeCount % 2) == 0) {
              playArea.style.marginTop = "20px";
            } else {
              playArea.style.marginTop = "0px";
            }
          }
          shakeCount--;
        }
      } else {
        progressLevel();
        insertNextButton("Next", dungeonEntrance);
      }

      monstersKilled = monstersPerFight;
    }
    //
    //This function progresses the players level.
    //I made it a function because there are two
    //places I want it to run
    function progressLevel() {
      switch (operator) {
        case "+":
          additionLevel++;
          break;
        case "-":
          subtractionLevel++;
          break;
        case "*":
          multiplicationLevel++;
          break;
        case "/":
          divisionLevel++;
          break;
      }
    }
  }
  //
  //This function introduces the boss encounters
  function bossEncounter() {
    let encounterFlash = 10;
    let encounterBoss = setInterval(bossEncounter, 100);
    function bossEncounter() {
      if (encounterFlash < 1) {
        problemDiv.innerHTML = "There's a monster blocking your path out of the dungeon. \
          It looks stronger than the others...<br /><br />"
        monster = new newBoss();
        monsterImg.style.filter = "brightness(100%)";
        monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";
        insertNextButton("Next", battle);
        clearInterval(encounterBoss);
      } else {
        if ((encounterFlash % 2) == 0) {
          playArea.style.filter = "brightness(50%)";
        } else {
          playArea.style.filter = "brightness(100%)";
        }
        encounterFlash--; //One less time to run the function
      }
    }


  }
  //
  //This function runs the first time the player learns the
  //Fibonacci Spell
  function dropScroll(scrollGif) {
    //
    //These three lines set up the container that
    //holds the scroll image
    let scrollDiv = document.createElement("div");
    scrollDiv.id = "scrollDiv";
    scrollDiv.style.filter = "opacity(0%)";
    //
    //These three lines set up the scroll image
    let scrollImg = document.createElement("img");
    scrollImg.id = "scrollImg";
    scrollImg.src = scrollGif;
    //
    //These five lines set up the next button that appears
    //at the bottom of the scroll
    let scrollNextButton = document.createElement("input");
    scrollNextButton.type = "button";
    scrollNextButton.value = "Next";
    scrollNextButton.id = "scrollNextButton";
    scrollNextButton.onclick = dungeonEntrance;
    //
    //These three lines put all of the previous elements that
    //were set up into the play area
    scrollDiv.appendChild(scrollImg);
    scrollDiv.appendChild(scrollNextButton);
    playArea.appendChild(scrollDiv);
    //
    //The setTimeout function ensures that the scroll appears
    //on screen with the intended transition effect
    setTimeout(function() {scrollDiv.style.filter = "opacity(100%)";}, 10);
    scrollNextButton.focus();
  }
  //****************REDUNDANCY*********************
  //This function checks the correct answers to see if they
  //are in one of my sets of special numbers
  function checkForSpells() {
    //
    //Checks for Fibonacci Numbers
    if ((additionLevel > 2) && (fibonacciNumbers.includes(answer))) {
      if (fibonacciSpells < 99) {
        fibonacciSpells++;
        document.getElementById("fibonacciCount").innerHTML = fibonacciSpells;
      }
    }
    //
    //Checks for Triangle Numbers
    if ((subtractionLevel > 2) && (triangleNumbers.includes(answer))) {
      if (triangleSpells < 99) {
        triangleSpells++;
        document.getElementById("triangleCount").innerHTML = triangleSpells;
      }
    }
    //
    //Checks for Square Numbers
    if ((additionLevel > 6) && (squareNumbers.includes(answer))) {
      if (squareSpells < 99) {
        squareSpells++;
        document.getElementById("triangleCount").innerHTML = triangleSpells;
      }
    }
    //
    //Checks for Pentagon Numbers
    if ((subtractionLevel > 8) && (pentagonNumbers.includes(answer))) {
      if (pentagonSpells < 99) {
        pentagonSpells++;
        document.getElementById("pentagonCount").innerHTML = pentagonSpells;
      }
    }
    //
    //Checks for Hexagon Numbers
    if ((multiplicationLevel > 8) && (hexagonNumbers.includes(answer))) {
      if (hexagonSpells < 99) {
        hexagonSpells++;
        document.getElementById("hexagonCount").innerHTML = hexagonSpells;
      }
    }
    //
    //Checks for Pyramid Numbers
    if ((additionLevel > 8) && (pyramidNumbers.includes(answer))) {
      if (pyramidSpells < 99) {
        pyramidSpells++;
        document.getElementById("pyramidCount").innerHTML = pyramidSpells;
      }
    }
    //
    //Checks for Cube Numbers
    if ((divisionLevel > 2) && (cubeNumbers.includes(answer))) {
      if (cubeSpells < 99) {
        cubeSpells++;
        document.getElementById("cubeCount").innerHTML = cubeSpells;
      }
    }
    //
    //Checks for Star Numbers
    if ((divisionLevel > 8) && (starNumbers.includes(answer))) {
      if (starSpells < 99) {
        starSpells++;
        document.getElementById("starCount").innerHTML = starSpells;
      }
    }
  }
  //****************REDUNDANCY*********************
  //This function checks the monster that was just killed
  //to see if it is the array of monsters the player has
  //already killed. If it is, it increments the counter
  //keeping track of the number killed. If it isn't, it
  //adds the monster to the array and sets its kill counter
  //to 1
  function checkMonster() {
    switch(operator) {
      case "+":
        if (monsterSearch(additionMonstersKilled, monster.index)) {
          let monsterIndex = findMonster(additionMonstersKilled, monster.index);
          additionMonstersKilled[monsterIndex][1]++;
          break;
        } else {
          additionMonstersKilled.push([monster.index, 1]);
          additionMonstersKilled.sort(function(a, b){return a[0] - b[0]});
        }
        /*if (additionMonstersKilled.includes(monster.index)) {
          break;
        } else {
          additionMonstersKilled.push(monster.index);
          additionMonstersKilled.sort(function(a, b){return a - b});
        }*/
        break;
      case "-":
        if (monsterSearch(subtractionMonstersKilled, monster.index)) {
          let monsterIndex = findMonster(subtractionMonstersKilled, monster.index);
          subtractionMonstersKilled[monsterIndex][1]++;
          break;
        } else {
          subtractionMonstersKilled.push([monster.index, 1]);
          subtractionMonstersKilled.sort(function(a, b){return a[0] - b[0]});
        }
        /*if (subtractionMonstersKilled.includes(monster.index)) {
          break;
        } else {
          subtractionMonstersKilled.push(monster.index);
          subtractionMonstersKilled.sort(function(a, b){return a - b});
        }*/
        break;
      case "*":
        if (monsterSearch(multiplicationMonstersKilled, monster.index)) {
          let monsterIndex = findMonster(multiplicationMonstersKilled, monster.index);
          multiplicationMonstersKilled[monsterIndex][1]++;
          break;
        } else {
          multiplicationMonstersKilled.push([monster.index, 1]);
          multiplicationMonstersKilled.sort(function(a, b){return a[0] - b[0]});
        }
        break;
      case "/":
        if (monsterSearch(divisionMonstersKilled, monster.index)) {
          let monsterIndex = findMonster(divisionMonstersKilled, monster.index);
          divisionMonstersKilled[monsterIndex][1]++;
          break;
        } else {
          divisionMonstersKilled.push([monster.index, 1]);
          divisionMonstersKilled.sort(function(a, b){return a[0] - b[0]});
        }
        break;
    }
  }
}
//
//This function is my version of the
//array.includes() function, just customized
//for my array of arrays
function monsterSearch(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == index) {
      return true;
    }
  }
  return false;
}
//
//This function is my version of the
//array.indexOf() function, just customized
//for my array of arrays
function findMonster(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == index) {
      return i;
    }
  }
  return -1;
}
//
//I use this function to assign the proper level
//based on the current operator variable
function getLevel() {
  switch (operator) {
    case "+":
      return additionLevel;
      break;
    case "-":
      return subtractionLevel;
      break;
    case "*":
      return multiplicationLevel;
      break;
    case "/":
      return divisionLevel;
      break;
  }
}
//
//This beast of a function creates the dungeon screen
//for the dungeons to interact with. It still has some
//work to be done...
function makeDungeonScreen() {
  playArea.innerHTML = "";
  var playerLevel = getLevel();
  //
  //This block creates the box that shows the
  //level at the top of the screen
  let levelDiv = document.createElement("div");
  levelDiv.id = "levelDiv";
  let levelDisplay = document.createTextNode("Level " + playerLevel);
  levelDiv.appendChild(levelDisplay);
  playArea.appendChild(levelDiv);
  //
  //This block creates the box that the problem
  //will be displayed in
  let problemDiv = document.createElement("div");
  problemDiv.id = "problemDiv";
  problemDiv.className = "textBox";
  //problemDiv.innerHTML = "1 + 2 + 3 + 4 + 5 = ?"  //Sample text
  playArea.appendChild(problemDiv);
  //
  //This block creates the box that the hint
  //will be displayed in
  let hintDiv = document.createElement("div");
  hintDiv.id = "hintDiv";
  hintDiv.className = "textBox";
  //hintDiv.innerHTML = "I'll get you Black Dynamite, if it's the last thing I do!!!";  //Sample text
  playArea.appendChild(hintDiv);
  hintDiv.style.visibility = "hidden";
  //
  //This block creates the elements needed for the
  //countdown bar
  let countdownBarBack = document.createElement("div");
  countdownBarBack.id = "countdownBarBack";
  let countdownBarFront = document.createElement("div");
  countdownBarFront.id = "countdownBarFront";
  let countdownTimer = document.createElement("div");
  countdownTimer.id = "countdownTimer";
  countdownBarBack.appendChild(countdownBarFront);
  countdownBarBack.appendChild(countdownTimer);
  playArea.appendChild(countdownBarBack);
  //
  //The next block of code is massive and creates
  //all of the elements needed for the spell bar.
  //I will have to add more to this in the near
  //future as I come up with new spells for the
  //player to use
  let spellBar = document.createElement("div");
  spellBar.id = "spellBar";
  //
  //This block creates everything needed for the
  //fibonacci spell
  let fibonacciDiv = document.createElement("div");
  let fibonacciImg = document.createElement("img");
  fibonacciImg.src = "./spellIcons/fibonacci.gif";
  fibonacciImg.id = "fibonacciImg";
  fibonacciImg.style.filter = "opacity(10%)";
  fibonacciDiv.appendChild(fibonacciImg);
  let fibonacciCount = document.createElement("div");
  fibonacciCount.id = "fibonacciCount";
  fibonacciCount.innerHTML = fibonacciSpells;
  fibonacciDiv.appendChild(fibonacciCount);
  spellBar.appendChild(fibonacciDiv);
  //
  //This block creates everything needed for the
  //triangle spell
  let triangleDiv = document.createElement("div");
  let triangleImg = document.createElement("img");
  triangleImg.src = "./spellIcons/triangle.gif";
  triangleImg.id = "triangleImg";
  triangleImg.style.filter = "opacity(10%)";
  triangleDiv.appendChild(triangleImg);
  let triangleCount = document.createElement("div");
  triangleCount.id = "triangleCount";
  triangleCount.innerHTML = triangleSpells;
  triangleDiv.appendChild(triangleCount);
  spellBar.appendChild(triangleDiv);
  //
  //This block creates everything needed for the
  //square spell
  let squareDiv = document.createElement("div");
  let squareImg = document.createElement("img");
  squareImg.src = "./spellIcons/square.gif";
  squareImg.id = "squareImg";
  squareImg.style.filter = "opacity(10%)";
  squareDiv.appendChild(squareImg);
  let squareCount = document.createElement("div");
  squareCount.id = "squareCount";
  squareCount.innerHTML = squareSpells;
  squareDiv.appendChild(squareCount);
  spellBar.appendChild(squareDiv);
  //
  //This block creates everything needed for the
  //pentagon spell
  let pentagonDiv = document.createElement("div");
  let pentagonImg = document.createElement("img");
  pentagonImg.src = "./spellIcons/pentagon.gif";
  pentagonImg.id = "pentagonImg";
  pentagonImg.style.filter = "opacity(10%)";
  pentagonDiv.appendChild(pentagonImg);
  let pentagonCount = document.createElement("div");
  pentagonCount.id = "pentagonCount";
  pentagonCount.innerHTML = pentagonSpells;
  pentagonDiv.appendChild(pentagonCount);
  spellBar.appendChild(pentagonDiv);
  //
  //This block creates everything needed for the
  //hexagon spell
  let hexagonDiv = document.createElement("div");
  let hexagonImg = document.createElement("img");
  hexagonImg.src = "./spellIcons/hexagon.gif";
  hexagonImg.id = "hexagonImg";
  hexagonImg.style.filter = "opacity(10%)";
  hexagonDiv.appendChild(hexagonImg);
  let hexagonCount = document.createElement("div");
  hexagonCount.id = "hexagonCount";
  hexagonCount.innerHTML = hexagonSpells;
  hexagonDiv.appendChild(hexagonCount);
  spellBar.appendChild(hexagonDiv);
  //
  //This block creates everything needed for the
  //pyramid spell
  let pyramidDiv = document.createElement("div");
  let pyramidImg = document.createElement("img");
  pyramidImg.src = "./spellIcons/pyramid.gif";
  pyramidImg.id = "pyramidImg";
  pyramidImg.style.filter = "opacity(10%)";
  pyramidDiv.appendChild(pyramidImg);
  let pyramidCount = document.createElement("div");
  pyramidCount.id = "pyramidCount";
  pyramidCount.innerHTML = pyramidSpells;
  pyramidDiv.appendChild(pyramidCount);
  spellBar.appendChild(pyramidDiv);
  //
  //This block creates everything needed for the
  //cube spell
  let cubeDiv = document.createElement("div");
  let cubeImg = document.createElement("img");
  cubeImg.src = "./spellIcons/cube.gif";
  cubeImg.id = "cubeImg";
  cubeImg.style.filter = "opacity(10%)";
  cubeDiv.appendChild(cubeImg);
  let cubeCount = document.createElement("div");
  cubeCount.id = "cubeCount";
  cubeCount.innerHTML = cubeSpells;
  cubeDiv.appendChild(cubeCount);
  spellBar.appendChild(cubeDiv);
  //
  //This block creates everything needed for the
  //star spell
  let starDiv = document.createElement("div");
  let starImg = document.createElement("img");
  starImg.src = "./spellIcons/star.gif";
  starImg.id = "starImg";
  starImg.style.filter = "opacity(10%)";
  starDiv.appendChild(starImg);
  let starCount = document.createElement("div");
  starCount.id = "starCount";
  starCount.innerHTML = starSpells;
  starDiv.appendChild(starCount);
  spellBar.appendChild(starDiv);

  playArea.appendChild(spellBar);

  //
  //The combatDiv holds the player and monster
  //health bars as well as the images for the
  //player and monster
  let combatDiv = document.createElement("div");
  combatDiv.id = "combatDiv";
  //
  //The player health bar
  let healthBarBack = document.createElement("div");
  healthBarBack.id = "healthBarBack";
  let healthBarFront = document.createElement("div");
  healthBarFront.id = "healthBarFront";
  healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
  healthBarBack.appendChild(healthBarFront);
  combatDiv.appendChild(healthBarBack);
  //
  //The player's image
  let playerDiv = document.createElement("div");
  playerDiv.id = "playerDiv";
  let playerImg = document.createElement("img");
  playerImg.id = "playerImg";
  playerImg.src = "./mages/" + mages[mageIndex][0];
  playerDiv.appendChild(playerImg);
  let slash = document.createElement("img");
  slash.id = "slash";
  slash.src = "slash.gif";
  slash.style.visibility = "hidden";
  playerDiv.appendChild(slash);
  combatDiv.appendChild(playerDiv);
  //
  //The monster's image
  let monsterDiv = document.createElement("div");
  monsterDiv.id = "monsterDiv";
  let monsterImg = document.createElement("img");
  monsterImg.id = "monsterImg";
  monsterDiv.appendChild(monsterImg);
  let blast = document.createElement("img");
  blast.id = "blast";
  blast.src = "blast.gif";
  blast.style.visibility = "hidden";
  monsterDiv.appendChild(blast);
  combatDiv.appendChild(monsterDiv);
  //
  //The monster health bar
  let monsterHealthBarBack = document.createElement("div");
  monsterHealthBarBack.id = "monsterHealthBarBack";
  let monsterHealthBarFront = document.createElement("div");
  monsterHealthBarFront.id = "monsterHealthBarFront";
  monsterHealthBarBack.appendChild(monsterHealthBarFront);
  combatDiv.appendChild(monsterHealthBarBack);
  playArea.appendChild(combatDiv);
}
//
//This function gets a new monster object and puts it on the screen
function newMonster(playerLevel) {
  damageBoost = 0;

  this.index = getRandomNumber(0, ((playerLevel * 3) - 1));
  //
  //Level 1   2 HP   1 dmg
  //Level 2   3 HP   1 dmg
  //Level 3   4 HP   1 dmg
  //Level 4   5 HP   2 dmg
  //Level 5   6 HP   2 dmg
  //Level 6   7 HP   2 dmg
  //Level 7   8 HP   3 dmg
  //Level 8   9 HP   3 dmg
  //Level 9   10 HP  3 dmg
  //Level 10  11 HP  4 dmg
  this.hp = Math.ceil(((this.index + 1) / 3) + 1);
  this.maxHp = this.hp;
  this.damage = Math.ceil((this.index + 1) / 9);
  switch (operator) {
    case "+":
      this.src = "./monsters/addition/" + additionMonsters[this.index];
      this.name = additionMonsterNames[this.index];
      break;
    case "-":
      this.src = "./monsters/subtraction/" + subtractionMonsters[this.index];
      this.name = subtractionMonsterNames[this.index];
      break;
    case "*":
      this.src = "./monsters/multiplication/" + multiplicationMonsters[this.index];
      this.name = multiplicationMonsterNames[this.index];
      break;
    case "/":
      this.src = "./monsters/division/" + divisionMonsters[this.index];
      this.name = divisionMonsterNames[this.index];
      break;
  }

  let monsterImg = document.getElementById("monsterImg");
  monsterImg.src = this.src;
  monsterImg.title = this.name;
}
//
//This function gets a new boss monster object and puts it on the screen
function newBoss() {
  playerLevel = getLevel();
  damageBoost = 0;
  this.index = (playerLevel / 2) + 29;
  //
  //Boss 1  Level 2   10 HP   3 dmg
  //Boss 2  Level 4   15 HP   3 dmg
  //Boss 3  Level 6   20 HP   4 dmg
  //Boss 4  Level 8   25 HP   4 dmg
  //Boss 5  Level 10  30 HP   5 dmg

  this.hp = (playerLevel * 2) + (playerLevel / 2) + 5;
  //this.hp = 1; //I only use this for testing and debugging
  this.maxHp = this.hp;
  this.damage = (Math.floor(this.hp / 10) + 2);
  //
  //This if statement does some resizing of two elements
  //to make the floor bosses larger than their normal
  //counterparts to make them more imposing
  if (this.index == 34) {
    playArea.style.height = "474px";
    let monsterDiv = document.getElementById("monsterDiv");
    monsterDiv.style.height = "125px";
    monsterDiv.style.width = "125px";
  }
  switch (operator) {
    case "+":
      this.src = "./monsters/addition/" + additionMonsters[this.index];
      this.name = additionMonsterNames[this.index];
      break;
    case "-":
      this.src = "./monsters/subtraction/" + subtractionMonsters[this.index];
      this.name = subtractionMonsterNames[this.index];
      break;
    case "*":
      this.src = "./monsters/multiplication/" + multiplicationMonsters[this.index];
      this.name = multiplicationMonsterNames[this.index];
      break;
    case "/":
      this.src = "./monsters/division/" + divisionMonsters[this.index];
      this.name = divisionMonsterNames[this.index];
      break;
  }

  let monsterImg = document.getElementById("monsterImg");
  monsterImg.src = this.src;
  monsterImg.title = this.name;
}
//
//This function turns my spells "on" at the beginning of the battle
function spellsOn() {
  if (additionLevel > 2) {        //Fibonacci Spell
    fibonacciImg = document.getElementById("fibonacciImg");
    fibonacciImg.style.filter = "opacity(100%)";
    fibonacciImg.onclick = function(){castFibonacci();}
    fibonacciCast = false;
  }
  if (subtractionLevel > 2) {     //Triangle Spells
    triangleImg = document.getElementById("triangleImg");
    triangleImg.style.filter = "opacity(100%)";
    triangleImg.onclick = function(){castTriangle();}
  }
  if (additionLevel > 6) {        //Square Spells
    squareImg = document.getElementById("squareImg");
    squareImg.style.filter = "opacity(100%)";
    squareImg.onclick = function(){castSquare();}
  }
  if (subtractionLevel > 8) {     //Pentagon Spells
    pentagonImg = document.getElementById("pentagonImg");
    pentagonImg.style.filter = "opacity(100%)";
    pentagonImg.onclick = function(){castPentagon();}
    pentagonCast = false;
  }
  if (multiplicationLevel > 8) {  //Hexagon Spells
    hexagonImg = document.getElementById("hexagonImg");
    hexagonImg.style.filter = "opacity(100%)";
    hexagonImg.onclick = function(){castHexagon();}
  }
  if (additionLevel > 8) {        //Pyramid Spells
    pyramidImg = document.getElementById("pyramidImg");
    pyramidImg.style.filter = "opacity(100%)";
    pyramidImg.onclick = function(){castPyramid();}
    pyramidCast = false;
  }
  if (divisionLevel > 2) {        //Cube Spells
    cubeImg = document.getElementById("cubeImg");
    cubeImg.style.filter = "opacity(100%)";
    cubeImg.onclick = function(){castCube();}
  }
  if (divisionLevel > 8) {        //Star Spells
    starImg = document.getElementById("starImg");
    starImg.style.filter = "opacity(100%)";
    starImg.onclick = function(){castStar();}
  }
}
//
//I'm not sure if I need this function yet but it turns the spells "off"
function spellsOff() {
  fibonacciImg = document.getElementById("fibonacciImg");
  fibonacciImg.style.filter = "opacity(30%)";
  fibonacciImg.onclick = "";

  triangleImg = document.getElementById("triangleImg");
  triangleImg.style.filter = "opacity(30%)";
  triangleImg.onclick = "";

  squareImg = document.getElementById("squareImg");
  squareImg.style.filter = "opacity(30%)";
  squareImg.onclick = "";

  pentagonImg = document.getElementById("pentagonImg");
  pentagonImg.style.filter = "opacity(30%)";
  pentagonImg.onclick = "";

  hexagonImg = document.getElementById("hexagonImg");
  hexagonImg.style.filter = "opacity(30%)";
  hexagonImg.onclick = "";

  pyramidImg = document.getElementById("pyramidImg");
  pyramidImg.style.filter = "opacity(30%)";
  pyramidImg.onclick = "";

  cubeImg = document.getElementById("cubeImg");
  cubeImg.style.filter = "opacity(30%)";
  cubeImg.onclick = "";

  starImg = document.getElementById("starImg");
  starImg.style.filter = "opacity(30%)";
  starImg.onclick = "";
}
//
//This is my long and complicated-looking hint spell: Fibonacci.
//It determines whether the player has enough spells to cast and
//what form the problem is in: algebraic or not.
function castFibonacci() {
  fibonacciImg = document.getElementById("fibonacciImg");
  fibonacciImg.onclick = "";
  hintDiv = document.getElementById("hintDiv");
  fibonacciCount = document.getElementById("fibonacciCount");
  //
  //If the player has no magic, then no hint is shown
  if (!fibonacciSpells) {
    hintDiv.innerHTML = "You don't have any Fibonacci Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    return;
  }
  //
  //This holds the string that will become the hint
  var hintString = "";
  //
  //If the enemy cast Algebra, then this small hint code runs.
  //I will probably update it with better hints as I develop
  //subtraction problems and hints.
  if (algebra) {
    //
    //Determines what the hint will be based on what
    //the current operator is
    switch (operator) {
      case "+":
        hintString += terms[2] + " - " + terms[0] + " = ? <br />";
        subtractionHint(terms[2], terms[0]);
        break;
      case "-":
        hintString += terms[0] + " - " + terms[2] + " = ? <br />";
        subtractionHint(terms[0], terms[2]);
        break;
      case "*":
        hintString += terms[2] + " / " + terms[0] + " = ? <br />";
        if (divisionLevel > 2) {
          divisionHint(terms[2], terms[0]);
        }
        break;
      case "/":
        hintString += terms[0] + " / " + terms[2] + " = ? <br />";
        divisionHint(terms[0], terms[2]);
        break;
    }
    //
    //These five lines display the final hint to the hintDiv,
    //update the count of Fibonacci Spells, and end the function
    hintDiv.innerHTML = hintString;
    hintDiv.style.visibility = "visible";
    fibonacciSpells--;
    fibonacciCount.innerHTML = fibonacciSpells;
    return;
  }
  //
  //If the problem is a number sequence, this logic
  //runs to display a sequence hint
  if (sequence) {
    if ((operator == "+") || (operator == "*")) {
      hintString += terms[1] + " - " + terms[0] + " = ?<br />";
      hintString += terms[2] + " - " + terms[1] + " = ?";
    } else {
      hintString += terms[0] + " - " + terms[1] + " = ?<br />";
      hintString += terms[1] + " - " + terms[2] + " = ?";
    }
    hintDiv.innerHTML = hintString;
    hintDiv.style.visibility = "visible";
    fibonacciSpells--;
    fibonacciCount.innerHTML = fibonacciSpells;
    return;
  }
  //
  //This switch determines which hint to display
  switch (operator) {
    case "+":
      additionHint(terms[0], terms[1]);
      break;
    case "-":
      subtractionHint(terms[0], terms[1]);
      break;
    case "*":
      if (multiplicationLevel < 3) {
        hintString = "Your magic doesn't seem to be working!";
      } else {
        multiplicationHint(terms[0], terms[1]);
      }
      break;
    case "/":
      if (divisionLevel < 3) {
        hintString = "Your magic doesn't seem to be working!";
      } else {
        divisionHint(terms[0], terms[1]);
      }
      break;
   }
  //
  //These last four lines display the final hint to the hintDiv
  //and update the count of Fibonacci Spells
  hintDiv.innerHTML = hintString;
  hintDiv.style.visibility = "visible";
  fibonacciSpells--;
  fibonacciCount.innerHTML = fibonacciSpells;
  fibonacciCast = true;
  fibonacciImg = document.getElementById("fibonacciImg");
  fibonacciImg.style.filter = "opacity(30%)";
  fibonacciImg.onclick = "";
  //
  //This is the logic that handles the addition hints
  function additionHint(addend1, addend2) {

    //
    //These operations seperate the two addends into expanded notation
    var newAddend1 = addend1 % 10;
    var newAddend2 = addend2 % 10;
    addend1 -= newAddend1;
    addend2 -= newAddend2;
    //
    //These two if statements only execute if one of the addends is 0
    if (!addend2 && !newAddend2 && addend1) {
      addend1 += newAddend1;
      newAddend1 = 0;
    }
    if (!addend1 && !newAddend1 && addend2) {
      addend2 += newAddend2;
      newAddend2 = 0;
    }
    //
    //This if statement handles the 10s
    if (addend1 && addend2) {
      hintString += "(" + addend1 + " + <span style=\"color:#ffbaba\">" + addend2 + "</span>)";
    } else if (addend1) { //If there is only one 10s number, then that is the only one output to the string
      hintString += addend1;
    } else if (addend2) {
      hintString += "<span style=\"color:#ffbaba\">" + addend2 + "</span>";
    }
    //
    //This if statement only runs if there is at least one 10s number
    if ((addend1 || addend2) && (newAddend1 || newAddend2)) {
      hintString += " + ";
    }
    //
    //This if statement handles the 1s numbers
    if (newAddend1 && newAddend2) {
      //
      //This if statement regroups the addends for more intuitive addition
      if ((newAddend1 + newAddend2) > 10) {
        let newAddend4 = 10 - newAddend1;
        let newAddend3 = newAddend2 - newAddend4;
        hintString += "(" + newAddend1 + " + <span style=\"color:#ffbaba\">" + newAddend4 +
          "</span>) + <span style=\"color:#ffbaba\">" + newAddend3 + "</span> = ?";
      } else { //No regrouping needed here
        hintString += "(" + newAddend1 + " + <span style=\"color:#ffbaba\">" + newAddend2 + "</span>) = ?";
      }
    } else if (newAddend1) { //These two else ifs handle the output if there's only one 1s number
      hintString += newAddend1 + " = ?";
    } else if (newAddend2) {
      hintString += "<span style=\"color:#ffbaba\">" + newAddend2 + "</span> = ?";
    }
    //
    //If there are no 1s numbers, then this puts the " = ?" on the end
    if (!newAddend1 && !newAddend2) {
      hintString += " = ?";
    }
  }
  //
  //This is the logic that handles the subtraction hints
  function subtractionHint(minuend1, subtrahend1) {

    var minuend2 = minuend1 % 10;
    var subtrahend2 = subtrahend1 % 10;
    minuend1 -= minuend2;
    subtrahend1 -= subtrahend2;

    if (subtrahend2 > minuend2) {
      subtrahend1 += subtrahend2;
      subtrahend2 = 0;
    }

    if (!subtrahend1) {
      hintString += minuend1 + " + ";
    } else if (!minuend2 && !subtrahend2) {
      hintString += minuend1 + " - ";
    } else {
      hintString += "(" + minuend1 + " - <span style=\"color:#ffbaba\">" + subtrahend1 + "</span>) + ";
    }

    if (!subtrahend2 && !minuend2) {
      hintString += "<span style=\"color:#ffbaba\">" + subtrahend1 + "</span> = ?";
    } else if (!subtrahend2) {
      hintString += minuend2 + " = ?";
    } else {
      hintString += "(" + minuend2 + " - <span style=\"color:#ffbaba\">" + subtrahend2 + "</span>) = ?";
    }
  }
  //
  //This is the logic that handles the multiplication hints
  //There's a bit of redundancy here that I want to come back
  //to, to try and make the code more consise
  function multiplicationHint(multiplicand, multiplier1) {

    if (multiplicand == 1) {
      hintString += multiplier1 + " + 0 = ?";
    } else if (multiplier1 == 1) {
      hintString += multiplicand + " + 0 = ?";
    } else if (multiplicand == 2) {
      hintString += multiplier1 + " + " + multiplier1 + " = ?";
    } else if (multiplier1 == 2) {
      hintString += multiplicand + " + " + multiplicand + " = ?";
    } else if ((multiplicand == 10) || (multiplier1 == 10)) {
      hintString += multiplicand + " * <span style=\"color:#ffbaba\">" + multiplier1 + "</span> = ?";
    } else {
      //
      //I type the same bit of code more than a few times here...
      //I bet I can remove one line from each if statement...
      if (multiplier1 < 5) {
        var multiplier2 = multiplier1 - 2;
        hintString += multiplicand + " * (<span style=\"color:#ffbaba\">2</span> + <span style=\"color:#ffbaba\">";
        hintString += multiplier2 + "</span>) = ?<br />";
      } else if (multiplier1 == 5) {
        var multiplier2 = 5;
        hintString += multiplicand + " * (<span style=\"color:#ffbaba\">10</span> - <span style=\"color:#ffbaba\">";
        hintString += multiplier2 + "</span>) = ?<br />";
      } else if (multiplier1 < 8) {
        var multiplier2 = multiplier1 - 5;
        hintString += multiplicand + " * (<span style=\"color:#ffbaba\">5</span> + <span style=\"color:#ffbaba\">";
        hintString += multiplier2 + "</span>) = ?<br />";
      } else if (multiplier1 < 10) {
        var multiplier2 = 10 - multiplier1;
        hintString += multiplicand + " * (<span style=\"color:#ffbaba\">10</span> - <span style=\"color:#ffbaba\">";
        hintString += multiplier2 + "</span>) = ?<br />";
      } else if (multiplier1 > 10) {
        var multiplier2 = multiplier1 - 10;
        hintString += multiplicand + " * (<span style=\"color:#ffbaba\">10</span> + <span style=\"color:#ffbaba\">";
        hintString += multiplier2 + "</span>) = ?<br />";
      }
      //
      //Here is the redundancy. I use the same if statement twice...
      hintString += "(" + multiplicand + " * <span style=\"color:#ffbaba\">";
      if (multiplier1 < 5) {
        var multiplier2 = multiplier1 - 2;
        hintString += "2</span>) + ";
      } else if (multiplier1 == 5) {
        var multiplier2 = 5;
        hintString += "10</span>) - ";
      } else if (multiplier1 < 8) {
        var multiplier2 = multiplier1 - 5;
        hintString += "5</span>) + ";
      } else if (multiplier1 < 10) {
        var multiplier2 = 10 - multiplier1;
        hintString += "10</span>) - ";
      } else if (multiplier1 > 10) {
        var multiplier2 = multiplier1 - 10;
        hintString += "10</span>) + ";
      }

      hintString += "(" + multiplicand + " * <span style=\"color:#ffbaba\">" + multiplier2 + "</span>) = ?";
    }
  }
  //
  //This is the logic that handles the divison hints
  function divisionHint(dividend1, divisor) {
    var quotient = dividend1 / divisor;
    //
    //I like this if statement because it works, but it has some
    //redundancy that I'd like to work out later if I can
    if (divisor == 10) {
      hintString += dividend1 + " / <span style=\"color:#ffbaba\">" + divisor + "</span> = ?";
    } else if (divisor == 5) {
      hintString += dividend1 + " / <span style=\"color:#ffbaba\">" + divisor + "</span> = ?";
    } else if (divisor < 3) {
      hintString += dividend1 + " / <span style=\"color:#ffbaba\">" + divisor + "</span> = ?";
    } else if (dividend1 > (divisor * 10)) {
      let dividend2 = dividend1 - (divisor * 10);
      dividend1 = divisor * 10;
      hintString += "(" + dividend1 + " + " + dividend2 + ") / ";
      hintString += "<span style=\"color:#ffbaba\">" + divisor + "</span> = ?<br />";
      hintString += "(" + dividend1 + " / <span style=\"color:#ffbaba\">" + divisor + "</span>) + ";
      hintString += "(" + dividend2 + " / <span style=\"color:#ffbaba\">" + divisor + "</span>) = ?";
    } else if (dividend1 < (divisor * 5)) {
      let dividend2 = dividend1 - (divisor * 2);
      dividend1 = divisor * 2;
      hintString += "(" + dividend1 + " + " + dividend2 + ") / ";
      hintString += "<span style=\"color:#ffbaba\">" + divisor + "</span> = ?<br />";
      hintString += "(" + dividend1 + " / <span style=\"color:#ffbaba\">" + divisor + "</span>) + ";
      hintString += "(" + dividend2 + " / <span style=\"color:#ffbaba\">" + divisor + "</span>) = ?";
    } else if (dividend1 < (divisor * 8)) {
      let dividend2 = dividend1 - (divisor * 5);
      dividend1 = divisor * 5;
      hintString += "(" + dividend1 + " + " + dividend2 + ") / ";
      hintString += "<span style=\"color:#ffbaba\">" + divisor + "</span> = ?<br />";
      hintString += "(" + dividend1 + " / <span style=\"color:#ffbaba\">" + divisor + "</span>) + ";
      hintString += "(" + dividend2 + " / <span style=\"color:#ffbaba\">" + divisor + "</span>) = ?";
    } else if (dividend1 < (divisor * 10)) {
      let dividend2 = (10 - quotient) * divisor;
      dividend1 = divisor * 10;
      hintString += "(" + dividend1 + " - " + dividend2 + ") / ";
      hintString += "<span style=\"color:#ffbaba\">" + divisor + "</span> = ?<br />";
      hintString += "(" + dividend1 + " / <span style=\"color:#ffbaba\">" + divisor + "</span>) - ";
      hintString += "(" + dividend2 + " / <span style=\"color:#ffbaba\">" + divisor + "</span>) = ?";
    }
  }

}
//
//This function handles my triangle/fireball spell
//I may want to play with the animation a bit...
function castTriangle() {
  hintDiv = document.getElementById("hintDiv");
  //
  //If the player has no magic, then no fireball is cast
  if (!triangleSpells) {
    hintDiv.innerHTML = "You don't have any Triangle Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }
  clearInterval(timer);

  var animationDone = false;
  var spellCast;
  fireballAnimation();
  let damage = 1;
  let i = 0;
  let totalLevels = additionLevel + subtractionLevel + multiplicationLevel + divisionLevel;
  while (totalLevels >= triangleNumbers[i]) {
    damage++;
    i++
  }

  hintDiv.innerHTML = "You cast Euclid's Fireball!";
  hintDiv.style.visibility = "visible";
  let spellFlash = 9;
  //playArea.classList.add("playAreaRed");
  let z = setInterval(function() {
    if (animationDone) {
      spellCast = setInterval(castSpell, 75);
      clearInterval(z);
    }
  }, 10);

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaRed");
      var canvas = document.getElementById("euclidCanvas");
      playArea.removeChild(canvas);
      checkAnswer("spell", damage);
    } else {
      if ((spellFlash % 2) == 0) {
        playArea.classList.remove("playAreaRed");
      } else {
        playArea.classList.add("playAreaRed");
      }
    }
    spellFlash--;
  }

  triangleSpells--;
  document.getElementById("triangleCount").innerHTML = triangleSpells;

  function fireballAnimation() {
    var canvas = document.createElement("canvas");
    canvas.id = "euclidCanvas";
    let levelDiv = document.getElementById("levelDiv");
    playArea.insertBefore(canvas, levelDiv);

    var context = canvas.getContext("2d");
    context.canvas.width = 450;
    context.canvas.height = 450;
    var lineWidth = 5;
    var baseColor = "rgba(255, 0, 0, 1)"
    var baseShadow = "rgba(255, 0, 0, 1)"

    var lineX1 = 225;
    var lineX2 = 226;
    var lineXinterval = 10;
    var lineY = 250;

    var circleStart1 = 0;
    var circleAngle1 = .05;
    var circleInterval1 = .05;

    var circleStart2 = 1;
    var circleAngle2 = .95;
    var circleInterval2 = .05;
    var roundTwo = false;

    var startX = 150;
    var startY = 250;


    var lineDraw = setInterval(function() {
      requestAnimationFrame(function() {
        drawLine1();
      })
    }, 30);

    var circleDraw1 = setInterval(function() {
      requestAnimationFrame(function() {
        drawCircle1();
      })
    }, 20);

    var circleDraw2 = setInterval(function() {
      requestAnimationFrame(function() {
        drawCircle2();
      })
    }, 20);

    function drawLine1() {
      context.beginPath();
      context.moveTo(lineX1, 250);
      lineX1 -= lineXinterval;
      context.lineTo(lineX1, 250);
      context.moveTo(lineX2, 250);
      lineX2 += lineXinterval;
      context.lineTo(lineX2, 250);
      context.lineWidth = lineWidth;
      context.strokeStyle = baseColor;
      context.stroke();

      if (lineX2 > 450) {
        clearInterval(lineDraw);
      }
      context.shadowBlur = 5;
      context.shadowColor = baseShadow;
    }

    function drawCircle1() {
      context.beginPath();
      context.arc(150, 250, 150, (circleStart1 * Math.PI), (circleAngle1 * Math.PI));
      circleStart1 = circleAngle1;
      circleAngle1 += circleInterval1;
      context.lineWidth = lineWidth;
      context.strokeStyle = baseColor;
      context.stroke();
      if (circleAngle1 > 2) {
        context.beginPath();
        context.arc(150, 250, 150, (circleStart1 * Math.PI), (2 * Math.PI));
        context.lineWidth = lineWidth;
        context.strokeStyle = baseColor;
        context.stroke();
        clearInterval(circleDraw1);
      }
      context.shadowBlur = 5;
      context.shadowColor = baseShadow;
    }

    function drawCircle2() {
      context.beginPath()
      context.arc(300, 250, 150, (circleStart2 * Math.PI), (circleAngle2 * Math.PI), true);
      circleStart2 = circleAngle2;
      circleAngle2 -= circleInterval2;
      context.lineWidth = lineWidth;
      context.strokeStyle = baseColor;
      context.stroke();
      if (circleAngle2 < 0) {
        roundTwo = true;
        circleAngle2 = 2
      }
      if ((roundTwo) && (circleAngle2 < 1)) {
        context.beginPath();
        context.arc(300, 250, 150, (circleStart2 * Math.PI), (1 * Math.PI), true);
        context.lineWidth = lineWidth;
        context.strokeStyle = baseColor;
        context.stroke();
        clearInterval(circleDraw2);
        drawTriangle1();
      }
      context.shadowBlur = 5;
      context.shadowColor = baseShadow;
    }

    function drawTriangle1() {
      context.beginPath();
      context.moveTo(150, 250);
      context.lineTo(225, 120);
      context.lineTo(300, 250);
      context.lineTo(150, 250);
      context.closePath();
      context.lineJoin = "round";
      context.lineWidth = lineWidth + 10;
      context.strokeStyle = "rgba(255, 255, 0, .75)";
      context.stroke();

      context.beginPath();
      context.moveTo(150, 250);
      context.lineTo(225, 120);
      context.lineTo(300, 250);
      context.lineTo(150, 250);
      context.closePath();
      context.lineWidth = lineWidth;
      context.strokeStyle = "#ff0000";
      context.stroke();

      playArea.classList.add("playAreaRedFlash");
      setTimeout(function() {
        requestAnimationFrame(function() {
          playArea.classList.remove("playAreaRedFlash");
        });
      }, 250);
      animationDone = true;
    }

  }
}
//
//This function handles my square/healing spell
function castSquare() {
  hintDiv = document.getElementById("hintDiv");
  //
  //If the player has no magic, then no magic is cast
  if (!squareSpells) {
    hintDiv.innerHTML = "You don't have any Square Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }
  //
  //If the player has full health, no magic is cast
  if (playerHealth == maxHealth) {
    hintDiv.innerHTML = "You already have full health!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }
  clearInterval(timer);
  //
  //I think I can make the heal variable global and give it a boost
  //whenever the player progresses past a certain point. It's
  //staying here for now...
  var heal = 2;
  if (subtractionLevel > 6) {
    heal++;
  }
  if (multiplicationLevel > 6) {
    heal++;
  }
  if (divisionLevel > 6) {
    heal++;
  }

  hintDiv.innerHTML = "You cast Nightengale's Health!";
  hintDiv.style.visibility = "visible";
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 75);

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaBlue");

      playerHealth += heal;
      if (playerHealth > maxHealth) {
        playerHealth = maxHealth;
      }
      var healthBarFront = document.getElementById("healthBarFront");
      healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";

      checkAnswer("heal", 0);
    } else {
      if ((spellFlash % 2) == 0) {
        playArea.classList.remove("playAreaBlue");
      } else {
        playArea.classList.add("playAreaBlue");
      }
    }
    spellFlash--;
  }
  squareSpells--;
  document.getElementById("squareCount").innerHTML = squareSpells;
}
//
//This function handles my pentagon/reduce terms spell
function castPentagon() {
  hintDiv = document.getElementById("hintDiv");
  //
  //If the player has no magic, then no magic is cast
  if (!pentagonSpells) {
    hintDiv.innerHTML = "You don't have any Pentagon Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }

  hintDiv.innerHTML = "You cast Lovelace's Reduction!";
  hintDiv.style.visibility = "visible";
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 75);

  terms[0] = Math.ceil(terms[0] / 2);
  terms[1] = Math.ceil(terms[1] / 2);

  switch (operator) {
    case "+":
      terms[2] = terms[0] + terms[1];
      break;
    case "-":
      terms[2] = terms[0] - terms[1];
      break;
    case "*":
      terms[2] = terms[0] * terms[1];
      break;
    case "/":
      terms[1] = getRandomNumber(0, 6);
      terms[2] = getRandomNumber(0, 3);
      terms[0] = terms[1] * terms[2];
      break;
  }

  let problemDiv = document.getElementById("problemDiv");
  problemDiv.innerHTML = terms[0] + " " + operator + " <span style=\"color:#ffbaba\">" + terms[1] + "</span> =\
    <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[2] + ")\"/>";
  var answerInput = document.getElementById("answerInput");
  answerInput.focus();

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaOrange");
    } else {
      if ((spellFlash % 2) == 0) {
        playArea.classList.remove("playAreaOrange");
      } else {
        playArea.classList.add("playAreaOrange");
      }
    }
    spellFlash--;
  }
  pentagonSpells--;
  document.getElementById("pentagonCount").innerHTML = pentagonSpells;

  pentagonCast = true;
  pentagonImg = document.getElementById("pentagonImg");
  pentagonImg.style.filter = "opacity(30%)";
  pentagonImg.onclick = "";
}
//
//This function handles my hexagon/strength spell
function castHexagon() {
  hintDiv = document.getElementById("hintDiv");
  //
  //If the player has no magic, then no magic is cast
  if (!hexagonSpells) {
    hintDiv.innerHTML = "You don't have any Hexagon Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }

  hintDiv.innerHTML = "You cast Hercules' Strength!";
  hintDiv.style.visibility = "visible";
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 75);
  damageBoost++;

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaWhite");
    } else {
      if ((spellFlash % 2) == 0) {
        playArea.classList.remove("playAreaWhite");
      } else {
        playArea.classList.add("playAreaWhite");
      }
    }
    spellFlash--;
  }
  hexagonSpells--;
  document.getElementById("hexagonCount").innerHTML = hexagonSpells;
}
//
//This function handles my pyramid/time spell
function castPyramid() {
  hintDiv = document.getElementById("hintDiv");
  clearInterval(timer);
  //
  //If the player has no magic, then no magic is cast
  if (!pyramidSpells) {
    hintDiv.innerHTML = "You don't have any Pyramid Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }

  hintDiv.innerHTML = "You cast Huygen's Stop Time!";
  hintDiv.style.visibility = "visible";
  setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 75);

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaGreen");
    } else {
      if ((spellFlash % 2) == 0) {
        playArea.classList.remove("playAreaGreen");
      } else {
        playArea.classList.add("playAreaGreen");
      }
    }
    spellFlash--;
  }
  pyramidSpells--;
  document.getElementById("pyramidCount").innerHTML = pyramidSpells;

  pyramidCast = true;
  pyramidImg = document.getElementById("pyramidImg");
  pyramidImg.style.filter = "opacity(30%)";
  pyramidImg.onclick = "";
}
//
//This function handles my cube/polymorph monster spell
function castCube() {
  hintDiv = document.getElementById("hintDiv");
  clearInterval(timer);
  //
  //If the player has no magic, then no magic is cast
  if (!cubeSpells) {
    hintDiv.innerHTML = "You don't have any Cube Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }
  //
  //If the player is fighting one of the boss monsters
  //the spell won't work
  if (monster.index > 29) {
    hintDiv.innerHTML = "You can't polymorph the " + monster.name + "!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }

  hintDiv.innerHTML = "You cast Fermet's Polymorph Monster!";
  hintDiv.style.visibility = "visible";
  setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 75);

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaPurple");
      let newMonsterLevel = getRandomNumber(1, (Math.ceil(getLevel() / 2)));
      monster = new newMonster(newMonsterLevel);
      //battle();
      timer = setInterval(timeDown, 10);
    } else {
      if ((spellFlash % 2) == 0) {
        playArea.classList.remove("playAreaPurple");
      } else {
        playArea.classList.add("playAreaPurple");
      }
    }
    spellFlash--;
  }
  cubeSpells--;
  document.getElementById("cubeCount").innerHTML = cubeSpells;
}
//
//This function handles my star/nova spell
function castStar() {
  hintDiv = document.getElementById("hintDiv");
  //
  //If the player has no magic, then no fireball is cast
  if (!starSpells) {
    hintDiv.innerHTML = "You don't have any Star Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }
  clearInterval(timer);

  hintDiv.innerHTML = "You cast Brahe's Nova!";
  hintDiv.style.visibility = "visible";
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 75);

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaYellow");
      checkAnswer("spell", 10);
    } else {
      if ((spellFlash % 2) == 0) {
        playArea.classList.remove("playAreaYellow");
      } else {
        playArea.classList.add("playAreaYellow");
      }
    }
    spellFlash--;
  }
  starSpells--;
  document.getElementById("starCount").innerHTML = starSpells;
}
//
//This saves all the important values into localStorage
function saveValues() {
  localStorage.setItem("playerName", playerName);
  localStorage.setItem("playerHealth", playerHealth);
  localStorage.setItem("maxHealth", maxHealth);
  localStorage.setItem("playerBaseDamage", playerBaseDamage);
  localStorage.setItem("mageIndex", mageIndex);
  localStorage.setItem("totalMonstersKilled", totalMonstersKilled);
  localStorage.setItem("additionLevel", additionLevel);
  localStorage.setItem("subtractionLevel", subtractionLevel);
  localStorage.setItem("multiplicationLevel", multiplicationLevel);
  localStorage.setItem("divisionLevel", divisionLevel);
  localStorage.setItem("spellArray", JSON.stringify(spellArray));
  localStorage.setItem("additionMonstersKilled", JSON.stringify(additionMonstersKilled));
  localStorage.setItem("additionAverage", JSON.stringify(additionAverage));
  localStorage.setItem("subtractionMonstersKilled", JSON.stringify(subtractionMonstersKilled));
  localStorage.setItem("subtractionAverage", JSON.stringify(subtractionAverage));
  localStorage.setItem("multiplicationMonstersKilled", JSON.stringify(multiplicationMonstersKilled));
  localStorage.setItem("multiplicationAverage", JSON.stringify(multiplicationAverage));
  localStorage.setItem("divisionMonstersKilled", JSON.stringify(divisionMonstersKilled));
  localStorage.setItem("divisionAverage", JSON.stringify(divisionAverage));
  localStorage.setItem("fibonacciSpells", fibonacciSpells);
  localStorage.setItem("triangleSpells", triangleSpells);
  localStorage.setItem("squareSpells", squareSpells);
  localStorage.setItem("pentagonSpells", pentagonSpells);
  localStorage.setItem("hexagonSpells", hexagonSpells);
  localStorage.setItem("pyramidSpells", pyramidSpells);
  localStorage.setItem("cubeSpells", cubeSpells);
  localStorage.setItem("starSpells", starSpells);
}
//
//This function retrieves all the player data
//from local storage when the player continues
function retrieveValues() {
  playerName = localStorage.getItem("playerName");
  if (!playerName) {
    let noSave = document.createElement("div");
    noSave.className = "textBox";
    let node = document.createTextNode("No save file found!");
    noSave.appendChild(node);
    playArea.appendChild(noSave);
    setTimeout(function() {
      playArea.removeChild(noSave);
    }, 3000)
    return;
  }
  playerHealth = parseInt(localStorage.getItem("playerHealth"));
  maxHealth = parseInt(localStorage.getItem("maxHealth"));
  playerBaseDamage = parseInt(localStorage.getItem("playerBaseDamage"));
  mageIndex = parseInt(localStorage.getItem("mageIndex"));
  totalMonstersKilled = parseInt(localStorage.getItem("totalMonstersKilled"));
  additionLevel = parseInt(localStorage.getItem("additionLevel"));
  subtractionLevel = parseInt(localStorage.getItem("subtractionLevel"));
  multiplicationLevel = parseInt(localStorage.getItem("multiplicationLevel"));
  divisionLevel = parseInt(localStorage.getItem("divisionLevel"));
  spellArray = JSON.parse(localStorage.getItem("spellArray"));
  additionMonstersKilled = JSON.parse(localStorage.getItem("additionMonstersKilled"));
  additionAverage = JSON.parse(localStorage.getItem("additionAverage"));
  subtractionMonstersKilled = JSON.parse(localStorage.getItem("subtractionMonstersKilled"));
  subtractionAverage = JSON.parse(localStorage.getItem("subtractionAverage"));
  multiplicationMonstersKilled = JSON.parse(localStorage.getItem("multiplicationMonstersKilled"));
  multiplicationAverage = JSON.parse(localStorage.getItem("multiplicationAverage"));
  divisionMonstersKilled = JSON.parse(localStorage.getItem("divisionMonstersKilled"));
  divisionAverage = JSON.parse(localStorage.getItem("divisionAverage"));
  fibonacciSpells = parseInt(localStorage.getItem("fibonacciSpells"));
  triangleSpells = parseInt(localStorage.getItem("triangleSpells"));
  squareSpells = parseInt(localStorage.getItem("squareSpells"));
  pentagonSpells = parseInt(localStorage.getItem("pentagonSpells"));
  hexagonSpells = parseInt(localStorage.getItem("hexagonSpells"));
  pyramidSpells = parseInt(localStorage.getItem("pyramidSpells"));
  cubeSpells = parseInt(localStorage.getItem("cubeSpells"));
  starSpells = parseInt(localStorage.getItem("starSpells"));

  dungeonEntrance();
}
//
//This function clears the local storage when
//the player starts a new game
function deleteValues() {
  localStorage.removeItem("playerName");
  localStorage.removeItem("playerHealth");
  localStorage.removeItem("maxHealth");
  localStorage.removeItem("playerBaseDamage");
  localStorage.removeItem("mageIndex");
  localStorage.removeItem("totalMonstersKilled");
  localStorage.removeItem("additionLevel");
  localStorage.removeItem("subtractionLevel");
  localStorage.removeItem("multiplicationLevel");
  localStorage.removeItem("divisionLevel");
  localStorage.removeItem("spellArray");
  localStorage.removeItem("additionMonstersKilled");
  localStorage.removeItem("additionAverage");
  localStorage.removeItem("subtractionMonstersKilled");
  localStorage.removeItem("subtractionAverage");
  localStorage.removeItem("multiplicationMonstersKilled");
  localStorage.removeItem("multiplicationAverage");
  localStorage.removeItem("divisionMonstersKilled");
  localStorage.removeItem("divisionAverage");
  localStorage.removeItem("fibonacciSpells");
  localStorage.removeItem("triangleSpells");
  localStorage.removeItem("squareSpells");
  localStorage.removeItem("pentagonSpells");
  localStorage.removeItem("hexagonSpells");
  localStorage.removeItem("pyramidSpells");
  localStorage.removeItem("cubeSpells");
  localStorage.removeItem("starSpells");
}
//
//This function gives the player all the good stuff
function godMode() {
  playerHealth = 100;
  maxHealth = 100;
  playerBaseDamage = 10;
  mageIndex = 0;
  additionLevel = 1;
  subtractionLevel = 1;
  multiplicationLevel = 1;
  divisionLevel = 1;
  fibonacciSpells = 99;
  triangleSpells = 99;
  squareSpells = 99;
  pentagonSpells = 99;
  hexagonSpells = 99;
  pyramidSpells = 99;
  cubeSpells = 99;
  starSpells = 99;
  monstersKilled = 9;
  totalMonstersKilled = 0;
  monstersPerFight = 9;
}
//
//I use this function for testing purposes
//and it is only called from a debug button
//that is normally inactive
function developer() {
  playerHealth = 10;
  maxHealth = 10;
  playerDamage = 1;
  mageIndex = 0;
  additionLevel = 9;
  subtractionLevel = 9;
  multiplicationLevel = 9;
  divisionLevel = 9;
  fibonacciSpells = 10;
  triangleSpells = 10;
  squareSpells = 10;
  pentagonSpells = 10;
  hexagonSpells = 10;
  pyramidSpells = 10;
  cubeSpells = 10;
  starSpells = 10;
  monstersKilled = 9;
  totalMonstersKilled = 0;
  monstersPerFight = 9;

  dungeonEntrance();
}
