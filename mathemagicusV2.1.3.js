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
var damageReceived = 0;
var damageDealt = 0;
var healthRecovered = 0;
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

var spellsCast = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
//
//These arrays hold two values in each node.
//monstersKilled[x][0] is the index of the monster
//that has been killed.
//monstersKilled[x][1] is the number of that
//monster that have been killed.
var additionMonstersKilled = [];
var subtractionMonstersKilled = [];
var multiplicationMonstersKilled = [];
var divisionMonstersKilled = [];
//
//This set of variables is used for counting
//the variables that determine whether the
//player unlocks an achievement
var fortyTwoCount = 0;
var lastSecondCount = 0;
var flashCount = 0;
var primeCount = 0;
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
  59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
  137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
//
//The source of all the image files for the
//monsters in the addition dungeon
var additionMonsters = ["imp.gif", "Hornet.gif", "Wererat.gif", "Spider.gif", "Wolf.gif", "scorpion.gif", "cobra.gif",
                       "pirate.gif", "bone.gif", "Bomb.gif", "crawl.gif", "gator.gif", "gargoyle.gif", "KumKum.gif",
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
  playerBaseDamage = 1;
  damageBoost = 0;
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
  fortyTwoCount = 0;
  lastSecondCount = 0;
  flashCount = 0;
  primeCount = 0;
  additionMonstersKilled = [];
  subtractionMonstersKilled = [];
  multiplicationMonstersKilled = [];
  divisionMonstersKilled = [];
  spellsCast = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  spellArray = [];
  additionAverage = [0, 0];
  subtractionAverage = [0, 0];
  multiplicationAverage = [0, 0];
  divisionAverage = [0, 0];
  damageReceived = 0;
  damageDealt = 0;
  healthRecovered = 0;
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

  setTimeout(function() {
    document.onkeydown = function(e) {
      e = e || window.event;
      checkArrowKeys(e.keyCode);
    }
  }, 100);

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
  characterImg2.onclick = function() {
    document.onkeypress = "";
    townIntro();
  }
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

  function checkArrowKeys(key) {
    key = key || window.event;
    switch (key) {
      case 13:
        townIntro();
        break;
      case 37:
        shiftRight();
        break;
      case 39:
        shiftLeft();
        break;
    }
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
//At this point, the function is poorly named
//since it also sets up the monster book and
//will set up the competitive mode.
function dungeonEntrance() {
  let additionDoor = "";
  let subtractionDoor = "";
  let multiplicationDoor = "";
  let divisionDoor = "";
  let turnPageEnabled = false;
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
  additionDoorImg.tabIndex = "1";
  additionDoorTD.appendChild(additionDoorImg);
  firstRow.appendChild(additionDoorTD);
  //
  //This block sets up the subtraction dungeon elements
  let subtractionDoorTD = document.createElement("td");
  let subtractionDoorImg = document.createElement("img");
  subtractionDoorImg.tabIndex = "2";
  subtractionDoorTD.appendChild(subtractionDoorImg);
  firstRow.appendChild(subtractionDoorTD);
  //
  //This block sets up the multiplication dungeon elements
  let multiplicationDoorTD = document.createElement("td");
  let multiplicationDoorImg = document.createElement("img");
  multiplicationDoorImg.tabIndex = "3";
  multiplicationDoorTD.appendChild(multiplicationDoorImg);
  secondRow.appendChild(multiplicationDoorTD);
  //
  //This block sets up the division dungeon elements
  let divisionDoorTD = document.createElement("td");
  let divisionDoorImg = document.createElement("img");
  divisionDoorImg.tabIndex = "4";
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

  setTimeout(function() {
    document.onkeydown = function(e) {
      e = e || window.event;
      checkArrowKeys(e.keyCode);
    }
  }, 100);

  function checkArrowKeys(key) {
    //key = key || window.event;
    switch (key) {
      case 13:
        switch (operator) {
          case "+":
          case "-":
          case "*":
          case "/":
            if (getLevel() > 0) {
              document.onkeydown = "";
              setTimeout(function() {
                dungeon(operator);
              }, 10);
            }
            break;
          case "down":
            operator = "up";
            setTimeout(function() {
              bookScreen();
            }, 10);
            break;
          case "up":
            operator = "down";
            setTimeout(function() {
              dungeonSelectScreen();
            }, 10);
            break;
        }
        break;
      case 37: //Left
        switch (operator) {
          case "+":
            additionDoorImg.focus()
            break;
          case "-":
            additionDoorImg.focus();
            operator = "+";
            break;
          case "/":
            multiplicationDoorImg.focus();
            operator = "*";
            break;
        }
        break;
      case 38: //Up
        switch (operator) {
          case "+":
            additionDoorImg.focus();
            break;
          case "*":
            additionDoorImg.focus();
            operator = "+";
            break;
          case "/":
            subtractionDoorImg.focus();
            operator = "-";
            break;
          case "down":
            multiplicationDoorImg.focus();
            operator = "*";
            break;
          case "up":
            operator = "down";
            setTimeout(function() {
              dungeonSelectScreen();
            }, 10);
            break;
        }
        break;
      case 39: //Right
        switch (operator) {
          case "+":
            subtractionDoorImg.focus();
            operator = "-";
            break;
          case "*":
            divisionDoorImg.focus();
            operator = "/";
            break;
        }
        break;
      case 40: //Down
        switch (operator) {
          case "+":
            multiplicationDoorImg.focus();
            operator = "*";
            break;
          case "-":
            divisionDoorImg.focus();
            operator = "/";
            break;
          case "*":
          case "/":
            nextScreen.focus();
            operator = "down";
            break;
          case "down":
            operator = "up";
            setTimeout(function() {
              bookScreen();
            }, 10);
            break;
          //
          //How do I determine the correct arguments to call
          //when I run the function????
          /*case "up":
            operator = "right";
            let turnButton = document.getElementsByClassName("turnPageButtons");
            if (typeof turnButton[1] === "object") {
              turnButton[1].focus();
            } else {
              turnButton[0].focus();
              console.log(turnButton[0].getAttribute("click"));
            }
            break;*/
          case "right":

        }
        break;
    }
  }
  //
  //This function shifts the screen to the book view
  function bookScreen() {
    operator = "up";
    turnPageEnabled = true;
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
    operator = "down";
    turnPageEnabled = false;
    monsterBook.style.top = "470px";
    nextScreen.style.top = "417px";
    nextScreen.style.transform = "scale(1, -1)";
    nextScreen.onclick = bookScreen;
    dungeonTable.style.top = "14px";
  }
  //
  //This function handles the animation of turning
  //a page to the left.
  //currentPage is the page DOM object from which the
  //function is called.
  //targetPage is the function that creates the elements
  //for the next page to be displayed.
  //index is an optional argument that is passed only if
  //targetPage needs an argument to display properly.
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
  //currentPage is the page DOM object from which the
  //function is called.
  //targetPage is the function that creates the elements
  //for the next page to be displayed.
  //index is an optional argument that is passed only if
  //targetPage needs an argument to display properly.
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
      //
      //The only way I can get this page turn to animate
      //cleanly and consistently is to include this console.clear()...
      //I want to find a better way...
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
    document.onkeypress = function(e) {
      e = e || window.event;
      if (e.keyCode === 39 && turnPageEnabled) {
        document.onkeypress = "";
        turnPageLeft(titlePage, contentsPage);
      }
    }

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
    quickButton[4].onclick = function() {turnPageLeft(tableOfContents, achievementsPage);}

    quickButton[0].parentNode.removeChild(quickButton[0]);

    let pageTurnButtons = turnPageButtons(tableOfContents);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
    turnButton[0].onclick = function() {turnPageRight(tableOfContents, makeTitlePage);}
    turnButton[1].onclick = function() {turnPageLeft(tableOfContents, statusPage);}
    document.onkeypress = function(e) {
      e = e || window.event;
      if (e.keyCode === 37 && turnPageEnabled) {
        document.onkeypress = "";
        turnPageRight(tableOfContents, makeTitlePage);
      } else if (e.keyCode === 39 && turnPageEnabled) {
        document.onkeypress = "";
        turnPageLeft(tableOfContents, statusPage);
      }
    }

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

    p = document.createElement("p");
    br = document.createElement("br");
    span = document.createElement("span");
    span.onclick = function() {turnPageLeft(tableOfContents, achievementsPage);}
    node1 = document.createTextNode("Achievements");
    node2 = document.createTextNode("A list of the achievements " + playerName + " has earned.");

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
    quickButton[4].onclick = function() {turnPageLeft(status, achievementsPage);}

    quickButton[1].parentNode.removeChild(quickButton[1]);

    let pageTurnButtons = turnPageButtons(status);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
    turnButton[0].onclick = function() {turnPageRight(status, contentsPage);}
    turnButton[1].onclick = function() {turnPageLeft(status, spellsPage);}
    document.onkeypress = function(e) {
      e = e || window.event;
      if (e.keyCode === 37 && turnPageEnabled) {
        document.onkeypress = "";
        turnPageRight(status, contentsPage);
      } else if (e.keyCode === 39 && turnPageEnabled) {
        document.onkeypress = "";
        turnPageLeft(status, spellsPage);
      }
    }

    //
    //This block makes and places the <div> and <image>
    //elements for the status page of the book
    let playerCameoDiv = document.createElement("div");
    playerCameoDiv.id = "playerCameoDiv";
    playerCameoDiv.onclick = function() {
      playerCameoImg.src = "./mages/" + mages[mageIndex][1];
      setTimeout(function() {
        playerCameoImg.src = "./mages/" + mages[mageIndex][0];
      }, 1000);
    }
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
    p.style.textAlign = "right";
    p.style.marginRight = "10px";
    p.style.fontSize = "1.5em";
    p.style.marginBottom = "10px";
    status.appendChild(p);
    //
    //This displays the max health and damage of the player
    p = document.createElement("p");
    p.style.marginTop = "-27px";
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
    quickButton[4].onclick = function() {turnPageLeft(spells, achievementsPage);}
    quickButton[2].parentNode.removeChild(quickButton[2]);

    let pageTurnButtons = turnPageButtons(spells);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
    turnButton[0].onclick = function() {turnPageRight(spells, statusPage);}
    if (spellArray[0] >= 0) {
      turnButton[1].onclick = function() {turnPageLeft(spells, spellDetailPage, spellArray[0]);}
    } else {
      turnButton[1].onclick = function() {turnPageLeft(spells, monstersPage);}
    }
    document.onkeypress = function(e) {
      e = e || window.event;
      if (e.keyCode === 37 && turnPageEnabled) {
        document.onkeypress = "";
        turnPageRight(spells, statusPage);
      } else if (e.keyCode === 39 && turnPageEnabled) {
        document.onkeypress = "";
        if (spellArray[0] >= 0) {
          turnPageLeft(spells, spellDetailPage, spellArray[0]);
        } else {
          turnPageLeft(spells, monstersPage);
        }
      }
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
    for (let index in spellArray) {
      span = document.createElement("span");
      br = document.createElement("br");
      text = document.createTextNode(spellBookContent[spellArray[index]][0]);
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
  //index is the index of the spellArray
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
    quickButton[4].onclick = function() {turnPageLeft(spell, achievementsPage);}

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
    document.onkeypress = function(e) {
      e = e || window.event;
      if (e.keyCode === 37 && turnPageEnabled) {
        document.onkeypress = "";
        if (spellArray.indexOf(index) === 0) {
          turnPageRight(spell, spellsPage);
        } else {
          turnPageRight(spell, spellDetailPage, (index - 1));
        }
      } else if (e.keyCode === 39 && turnPageEnabled) {
        document.onkeypress = "";
        if (index < (spellArray.length - 1)) {
          turnPageLeft(spell, spellDetailPage, (index + 1));
        } else {
          turnPageLeft(spell, monstersPage);
        }
      }
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
    quickButton[4].onclick = function() {turnPageLeft(monsters, achievementsPage);}
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
      turnButton[1].onclick = function() {turnPageLeft(monsters, achievementsPage);}
    }
    document.onkeypress = function(e) {
      e = e || window.event;
      if (e.keyCode === 37 && turnPageEnabled) {
        document.onkeypress = "";
        if (spellArray[0] >= 0) {
          turnPageRight(monsters, spellDetailPage, (spellArray.length - 1));
        } else {
          turnPageRight(monsters, spellsPage);
        }
      } else if (e.keyCode === 39 && turnPageEnabled) {
        document.onkeypress = "";
        if (typeof(additionMonstersKilled[0]) == "object") {
          turnPageLeft(monsters, monsterBasePage, "+");
        } else {
          turnPageLeft(monsters, achievementsPage);
        }
      }
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
  //type of monster
  //monsterClass is a string that determines which
  //base page to create (+, -, *, /)
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
    quickButton[4].onclick = function() {turnPageLeft(monsterList, achievementsPage);}

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
        document.onkeypress = function(e) {
          e = e || window.event;
          if (e.keyCode === 37 && turnPageEnabled) {
            document.onkeypress = "";
            turnPageRight(monsterList, monstersPage);
          } else if (e.keyCode === 39 && turnPageEnabled) {
            document.onkeypress = "";
            turnPageLeft(monsterList, monsterDetailPage, ["+", additionMonstersKilled[0][0]]);
          }
        }
        break;
      case "-":
        monsterArray = subtractionMonstersKilled;
        masterArray = subtractionMonsters;
        monsterNames = subtractionMonsterNames;
        node = document.createTextNode("Subtraction Monsters");
        last = (additionMonstersKilled.length - 1);
        turnButton[0].onclick = function() {turnPageRight(monsterList, monsterDetailPage, ["+", additionMonstersKilled[last][0]]);}
        turnButton[1].onclick = function() {turnPageLeft(monsterList, monsterDetailPage, ["-", subtractionMonstersKilled[0][0]]);}
        document.onkeypress = function(e) {
          e = e || window.event;
          if (e.keyCode === 37 && turnPageEnabled) {
            document.onkeypress = "";
            turnPageRight(monsterList, monsterDetailPage, ["+", additionMonstersKilled[last][0]]);
          } else if (e.keyCode === 39 && turnPageEnabled) {
            document.onkeypress = "";
            turnPageLeft(monsterList, monsterDetailPage, ["-", subtractionMonstersKilled[0][0]]);
          }
        }
        break;
      case "*":
        monsterArray = multiplicationMonstersKilled;
        masterArray = multiplicationMonsters;
        monsterNames = multiplicationMonsterNames;
        node = document.createTextNode("Multiplication Monsters");
        last = (subtractionMonstersKilled.length - 1);
        turnButton[0].onclick = function() {turnPageRight(monsterList, monsterDetailPage, ["-", subtractionMonstersKilled[last][0]]);}
        turnButton[1].onclick = function() {turnPageLeft(monsterList, monsterDetailPage, ["*", multiplicationMonstersKilled[0][0]]);}
        document.onkeypress = function(e) {
          e = e || window.event;
          if (e.keyCode === 37 && turnPageEnabled) {
            document.onkeypress = "";
            turnPageRight(monsterList, monsterDetailPage, ["-", subtractionMonstersKilled[last][0]]);
          } else if (e.keyCode === 39 && turnPageEnabled) {
            document.onkeypress = "";
            turnPageLeft(monsterList, monsterDetailPage, ["*", multiplicationMonstersKilled[0][0]]);
          }
        }
        break;
      case "/":
        monsterArray = divisionMonstersKilled;
        masterArray = divisionMonsters;
        monsterNames = divisionMonsterNames;
        node = document.createTextNode("Division Monsters");
        last = (multiplicationMonstersKilled.length - 1);
        turnButton[0].onclick = function() {turnPageRight(monsterList, monsterDetailPage, ["*", multiplicationMonstersKilled[last][0]]);}
        turnButton[1].onclick = function() {turnPageLeft(monsterList, monsterDetailPage, ["/", divisionMonstersKilled[0][0]]);}
        document.onkeypress = function(e) {
          e = e || window.event;
          if (e.keyCode === 37 && turnPageEnabled) {
            document.onkeypress = "";
            turnPageRight(monsterList, monsterDetailPage, ["*", multiplicationMonstersKilled[last][0]]);
          } else if (e.keyCode === 39 && turnPageEnabled) {
            document.onkeypress = "";
            turnPageLeft(monsterList, monsterDetailPage, ["/", divisionMonstersKilled[0][0]]);
          }
        }
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
  //currentMonster is an array.
  //currentMonster[0] is a string that tells the function
  //which class the monster is (+, -, *, /)
  //currentMonster[1] is the index of the monster in the
  //...Monsters/...MonsterNames arrays
  function monsterDetailPage(currentMonster) {
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
    quickButton[4].onclick = function() {turnPageLeft(monsterDetail, achievementsPage);}

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
            turnButton[1].onclick = function() {turnPageLeft(monsterDetail, achievementsPage);}
          }
        }
        document.onkeypress = function(e) {
          e = e || window.event;
          if (e.keyCode === 37 && turnPageEnabled) {
            document.onkeypress = "";
            if (findMonster(monsterArray, currentMonster[1]) == 0) {
              turnPageRight(monsterDetail, monsterBasePage, "+");
            } else {
              let next = (findMonster(monsterArray, currentMonster[1]) - 1);
              turnPageRight(monsterDetail, monsterDetailPage, ["+", monsterArray[next][0]]);
            }
          } else if (e.keyCode === 39 && turnPageEnabled) {
            document.onkeypress = "";
            if (findMonster(monsterArray, currentMonster[1]) < (monsterArray.length - 1)) {
              let next = (findMonster(monsterArray, currentMonster[1]) + 1);
              turnPageLeft(monsterDetail, monsterDetailPage, ["+", monsterArray[next][0]]);
            } else {
              if ((subtractionMonstersKilled[0] + 1)) {
                turnPageLeft(monsterDetail, monsterBasePage, "-");
              } else {
                turnPageLeft(monsterDetail, achievementsPage);
              }
            }
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
            turnButton[1].onclick = function() {turnPageLeft(monsterDetail, achievementsPage);}
          }
        }
        document.onkeypress = function(e) {
          e = e || window.event;
          if (e.keyCode === 37 && turnPageEnabled) {
            document.onkeypress = "";
            if (findMonster(monsterArray, currentMonster[1]) == 0) {
              turnPageRight(monsterDetail, monsterBasePage, "-");
            } else {
              let next = (findMonster(monsterArray, currentMonster[1]) - 1);
              turnPageRight(monsterDetail, monsterDetailPage, ["-", monsterArray[next][0]]);
            }
          } else if (e.keyCode === 39 && turnPageEnabled) {
            document.onkeypress = "";
            if (findMonster(monsterArray, currentMonster[1]) < (monsterArray.length - 1)) {
              let next = (findMonster(monsterArray, currentMonster[1]) + 1);
              turnPageLeft(monsterDetail, monsterDetailPage, ["-", monsterArray[next][0]]);
            } else {
              if ((multiplicationMonstersKilled[0] + 1)) {
                turnPageLeft(monsterDetail, monsterBasePage, "*");
              } else {
                turnPageLeft(monsterDetail, achievementsPage);
              }
            }
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
            turnButton[1].onclick = function() {turnPageLeft(monsterDetail, achievementsPage);}
          }
        }
        document.onkeypress = function(e) {
          e = e || window.event;
          if (e.keyCode === 37 && turnPageEnabled) {
            document.onkeypress = "";
            if (findMonster(monsterArray, currentMonster[1]) == 0) {
              turnPageRight(monsterDetail, monsterBasePage, "*");
            } else {
              let next = (findMonster(monsterArray, currentMonster[1]) - 1);
              turnPageRight(monsterDetail, monsterDetailPage, ["*", monsterArray[next][0]]);
            }
          } else if (e.keyCode === 39 && turnPageEnabled) {
            document.onkeypress = "";
            if (findMonster(monsterArray, currentMonster[1]) < (monsterArray.length - 1)) {
              let next = (findMonster(monsterArray, currentMonster[1]) + 1);
              turnPageLeft(monsterDetail, monsterDetailPage, ["*", monsterArray[next][0]]);
            } else {
              if ((divisionMonstersKilled[0] + 1)) {
                turnPageLeft(monsterDetail, monsterBasePage, "/");
              } else {
                turnPageLeft(monsterDetail, achievementsPage);
              }
            }
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
          turnButton[1].onclick = function() {turnPageLeft(monsterDetail, achievementsPage);}
        }
        document.onkeypress = function(e) {
          e = e || window.event;
          if (e.keyCode === 37 && turnPageEnabled) {
            document.onkeypress = "";
            if (findMonster(monsterArray, currentMonster[1]) == 0) {
              turnPageRight(monsterDetail, monsterBasePage, "/");
            } else {
              let next = (findMonster(monsterArray, currentMonster[1]) - 1);
              turnPageRight(monsterDetail, monsterDetailPage, ["/", monsterArray[next][0]]);
            }
          } else if (e.keyCode === 39 && turnPageEnabled) {
            document.onkeypress = "";
            if (findMonster(monsterArray, currentMonster[1]) < (monsterArray.length - 1)) {
              let next = (findMonster(monsterArray, currentMonster[1]) + 1);
              turnPageLeft(monsterDetail, monsterDetailPage, ["/", monsterArray[next][0]]);
            } else {
              turnPageLeft(monsterDetail, achievementsPage);
            }
          }
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

    //Number of monsters killed
    p = document.createElement("p");
    node = document.createTextNode("Number Killed: " + monsterArray[findMonster(monsterArray, currentMonster[1])][1]);
    p.appendChild(node);
    monsterDetail.appendChild(p);

    //Level of monster
    if (currentMonster[1] < 30) {
      var monsterLevel = Math.ceil((currentMonster[1] + 1) / 3);
    } else {
      var monsterLevel = (((currentMonster[1] % 30) * 2) + 2) + " Boss";
    }
    p = document.createElement("p");
    node = document.createTextNode("Level " + monsterLevel);
    p.appendChild(node);
    monsterDetail.appendChild(p);

    //Hit points of monster
    if (monsterArray[findMonster(monsterArray, currentMonster[1])][1] > 4) {
      p = document.createElement("p");
      if (currentMonster[1] < 30) {
        node = document.createTextNode("Hit Points: " + Math.ceil(((currentMonster[1] + 1) / 3) + 1));
      } else {
        var monsterLevel = (((currentMonster[1] % 30) * 2) + 2);
        node = document.createTextNode("Hit Points: " + ((monsterLevel * 2) + (monsterLevel / 2) + 5));
      }
      p.appendChild(node);
      monsterDetail.appendChild(p);
    }

    //Damage monster inflicts
    if (monsterArray[findMonster(monsterArray, currentMonster[1])][1] > 9) {
      p = document.createElement("p");
      node = document.createTextNode("Damage: " + Math.ceil((currentMonster[1] + 1) / 9));
      p.appendChild(node);
      monsterDetail.appendChild(p);
    }

    //Range of problem difficulty for monster
    if (monsterArray[findMonster(monsterArray, currentMonster[1])][1] > 19) {
      if (currentMonster[1] < 30) {
        var level = Math.ceil((currentMonster[1] + 1) / 3);
      } else {
        var level = (((currentMonster[1] % 30) * 2) + 2);
      }
      switch (currentMonster[0]) {
        case "+":
          var floor1 = 0;
          var floor2 = 0;
          var ceiling1 = level * 10;
          var ceiling2 = ceiling1;
          var operation = "+";
          break;
        case "-":
          var floor1 = 1;
          var floor2 = 0;
          var ceiling1 = level * 10;
          var ceiling2 = ceiling1;
          var operation = "-";
          break;
        case "*":
          var floor1 = 1;
          var floor2 = 0;
          var ceiling1 = level + 5;
          var ceiling2 = ((level + 5) - ((((level % 2) + level) / 2) - 1));
          var operation = "*";
          break;
        case "/":
          var floor1 = 1;
          var floor2 = 1;
          var ceiling1 = 5 * ((level + 5) - ((((level % 2) + level) / 2) - 1));
          var ceiling2 = level + 5;
          var operation = "/";
          break;
      }

      p = document.createElement("p");
      node = document.createTextNode("Attack: (" + floor1 + " - " + ceiling1 + ") " + operation + " (" + floor2 + " - " + ceiling2 + ")");
      p.appendChild(node);
      monsterDetail.appendChild(p);
    }

    let monsterDetailDiv = document.createElement("div");
    monsterDetailDiv.id = "monsterDetailDiv";
    if (monsterArray[findMonster(monsterArray, currentMonster[1])][1] < 5) {
      monsterDetailDiv.style.border = "3px solid black";
    } else if (monsterArray[findMonster(monsterArray, currentMonster[1])][1] < 10) {
      monsterDetailDiv.style.border = "3px solid #cd7f32";
    } else if (monsterArray[findMonster(monsterArray, currentMonster[1])][1] < 20) {
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
  //This function makes the achievements page
  function achievementsPage() {
    let achievementPage = document.createElement("div");
    achievementPage.className = "bookPage";
    achievementPage.id = "achievementPage";

    let quickButtons = makeQuickButtons(achievementPage);

    let quickButton = quickButtons.getElementsByClassName("quickButtons");
    quickButton[0].onclick = function() {turnPageRight(achievementPage, contentsPage);}
    quickButton[1].onclick = function() {turnPageRight(achievementPage, statusPage);}
    quickButton[2].onclick = function() {turnPageRight(achievementPage, spellsPage);}
    quickButton[3].onclick = function() {turnPageRight(achievementPage, monstersPage);}
    quickButton[4].parentNode.removeChild(quickButton[4]);

    let pageTurnButtons = turnPageButtons(achievementPage);
    let turnButton = pageTurnButtons.getElementsByClassName("turnPageButtons");
    if (Array.isArray(divisionMonstersKilled[0])) {
      let index = divisionMonstersKilled.length - 1;
      turnButton[0].onclick = function() {turnPageRight(achievementPage, monsterDetailPage, ["/", divisionMonstersKilled[index][0]]);}
    } else if (Array.isArray(multiplicationMonstersKilled[0])) {
      let index = multiplicationMonstersKilled.length - 1;
      turnButton[0].onclick = function() {turnPageRight(achievementPage, monsterDetailPage, ["*", multiplicationMonstersKilled[index][0]]);}
    } else if (Array.isArray(subtractionMonstersKilled[0])) {
      let index = subtractionMonstersKilled.length - 1;
      turnButton[0].onclick = function() {turnPageRight(achievementPage, monsterDetailPage, ["-", subtractionMonstersKilled[index][0]]);}
    } else if (Array.isArray(additionMonstersKilled[0])) {
      let index = additionMonstersKilled.length - 1;
      turnButton[0].onclick = function() {turnPageRight(achievementPage, monsterDetailPage, ["+", additionMonstersKilled[index][0]]);}
    } else {
      turnButton[0].onclick = function() {turnPageRight(achievementPage, monstersPage);}
    }
    document.onkeypress = function(e) {
      e = e || window.event;
      if (e.keyCode === 37 && turnPageEnabled) {
        document.onkeypress = "";
        if (Array.isArray(divisionMonstersKilled[0])) {
          let index = divisionMonstersKilled.length - 1;
          turnPageRight(achievementPage, monsterDetailPage, ["/", divisionMonstersKilled[index][0]]);
        } else if (Array.isArray(multiplicationMonstersKilled[0])) {
          let index = multiplicationMonstersKilled.length - 1;
          turnPageRight(achievementPage, monsterDetailPage, ["*", multiplicationMonstersKilled[index][0]]);
        } else if (Array.isArray(subtractionMonstersKilled[0])) {
          let index = subtractionMonstersKilled.length - 1;
          turnPageRight(achievementPage, monsterDetailPage, ["-", subtractionMonstersKilled[index][0]]);
        } else if (Array.isArray(additionMonstersKilled[0])) {
          let index = additionMonstersKilled.length - 1;
          turnPageRight(achievementPage, monsterDetailPage, ["+", additionMonstersKilled[index][0]]);
        } else {
          turnPageRight(achievementPage, monstersPage);
        }
      }
    }

    turnButton[1].parentNode.removeChild(turnButton[1]);

    let p = document.createElement("p");
    p.style.fontWeight = "bold";
    p.style.fontSize = "1.5em";
    p.style.textDecoration = "underline";
    if (playerName.charAt(playerName.length - 1) == "s") {
      var text = document.createTextNode(playerName + "' Achievements");
    } else {
      var text = document.createTextNode(playerName + "'s Achievements");
    }
    p.appendChild(text);
    achievementPage.appendChild(p);

    let table = document.createElement("table");
    table.id = "achievementTable"
    let tr = document.createElement("tr");
    /*
    This controls the achievement for total number of
    monsters killed*/
    let td = makeAchievementElement("graveyard.png");
    if (totalMonstersKilled > 99) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = totalMonstersKilled + " monsters killed.";
      if (totalMonstersKilled > 499) {
        td.firstChild.style.backgroundColor = "#d4af37";
      } else if (totalMonstersKilled > 199) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstChild.style.backgroundColor = "#cd7f32";
      }

    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for total questions
    answered in less than 1 second*/
    td = makeAchievementElement("sprint.png");
    if (flashCount > 0) {
      td.lastChild.style.filter = "opacity(100%)";
      if (flashCount == 1) {
        td.lastChild.title = flashCount + " question answered in less than 1 second.";
      } else {
        td.lastChild.title = flashCount + " questions answered in less than 1 second.";
      }
      if (flashCount > 49) {
        td.firstChild.style.backgroundColor = "#d4af37";
      } else if (flashCount > 9) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstChild.style.backgroundColor = "#cd7f32";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for total number of
    questions answered with less than 1 second remaining*/
    td = makeAchievementElement("stopwatch.png");
    if (lastSecondCount > 0) {
      td.lastChild.style.filter = "opacity(100%)";
      if (lastSecondCount == 1) {
        td.lastChild.title = lastSecondCount + " question answered with less than 1 second remaining.";
      } else {
        td.lastChild.title = lastSecondCount + " questions answered with less than 1 second remaining.";
      }
      if (lastSecondCount > 49) {
        td.firstChild.style.backgroundColor = "#d4af37";
      } else if (lastSecondCount > 9) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstChild.style.backgroundColor = "#cd7f32";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for total number of
    answers equal to 42*/
    td = makeAchievementElement("dolphin.png");
    if (fortyTwoCount > 0) {
      td.lastChild.style.filter = "opacity(100%)";
      if (fortyTwoCount === 1) {
        td.lastChild.title = fortyTwoCount + " answer equal to 42.";
      } else {
        td.lastChild.title = fortyTwoCount + " answers equal to 42.";
      }
      if (fortyTwoCount > 41) {
        td.firstChild.style.backgroundColor = "#d4af37";
      } else if (fortyTwoCount > 9) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstChild.style.backgroundColor = "#cd7f32";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for total number of
    answers equal to a prime number*/
    td = makeAchievementElement("prime.png");
    if (primeCount > 0) {
      td.lastChild.style.filter = "opacity(100%)";
      if (primeCount == 1) {
        td.lastChild.title = primeCount + " answer equal to a prime number.";
      } else {
        td.lastChild.title = primeCount + " answers equal to a prime number.";
      }
      if (primeCount > 99) {
        td.firstChild.style.backgroundColor = "#d4af37";
      } else if (primeCount > 19) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstChild.style.backgroundColor = "#cd7f32";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    table.appendChild(tr);

    tr = document.createElement("tr");
    /*
    This controls the achievement that tracks the
    total amount of damage done to enemies*/
    td = makeAchievementElement("bleeding-wound.png");
    if (damageDealt > 199) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = damageDealt + " damage inflicted on monsters.";
      if (damageDealt > 1499) {
        td.firstChild.style.backgroundColor = "#b70000";
      } else if (damageDealt > 999) {
        td.firstChild.style.backgroundColor = "#ff5656";
      } else {
        td.firstChild.style.backgroundColor = "#ff9393";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for tracking how
    much damage the player has received*/
    td = makeAchievementElement("heart-minus.png");
    if (damageReceived > 9) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = damageReceived + " damage inflicted on " + playerName + ".";
      if (damageReceived > 49) {
        td.firstChild.style.backgroundColor = "#d4af37";
      } else if (damageReceived > 19) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstCild.style.backgroundColor = "#cd7f32";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for tracking how
    much health the player has recovered*/
    td = makeAchievementElement("medical-pack.png");
    if (healthRecovered > 9) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = healthRecovered + " health recovered.";
      if (healthRecovered > 49) {
        td.firsthCild.style.backgroundColor = "#d4af37";
      } else if (healthRecovered > 19) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstChild.style.backgroundColor = "#cd7f32";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for how much damage
    the player has inflicted with spells*/
    td = makeAchievementElement("fire-ray.png");
    let attackSpells = (spellsCast[3] + spellsCast[9]);
    if (attackSpells > 4) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = attackSpells + " attack spells cast.";
      if (attackSpells > 24) {
        td.firstChild.style.backgroundColor = "#d4af37";
      } else if (attackSpells > 9) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstChild.style.backgroundColor = "#cd7f32";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for how many times the
    player has used the fibonacci magic*/
    td = makeAchievementElement("help.png");
    let hintSpells = (spellsCast[0] + spellsCast[1] + spellsCast[2] + spellsCast[10] + spellsCast[11]);
    if (hintSpells > 4) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = hintSpells + " Fibonacci spells cast.";
      if (hintSpells > 24) {
        td.firstChild.style.backgroundColor = "#d4af37";
      } else if (hintSpells > 9) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstChild.style.backgroundColor = "#cd7f32";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    table.appendChild(tr);

    tr = document.createElement("tr");
    /*
    This controls the achievement for how many spells
    the player has cast*/
    td = makeAchievementElement("spell-book.png");
    let totalSpellsCast = spellsCast.reduce(getSum);
    if (totalSpellsCast > 10) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = totalSpellsCast + " spells cast.";
      if (totalSpellsCast > 99) {
        td.firstChild.style.backgroundColor = "#d4af37";
      } else if (totalSpellsCast > 49) {
        td.firstChild.style.backgroundColor = "#c0c0c0";
      } else {
        td.firstChild.style.backgroundColor = "#cd7f32";
      }
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for the players progress
    through the addition dungeon*/
    td = makeAchievementElement("laurels-plus.png");
    if (additionMonstersKilled.length == 35) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = "Defeated one of every monster in the Addition Dungeon.";
      td.firstChild.style.backgroundColor = "#d4af37";
    } else if (additionLevel > 10) {
      td.firstChild.style.backgroundColor = "#c0c0c0";
      td.lastChild.title = "Completed the Addition Dungeon."
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for the players progress
    through the subtraction dungeon*/
    td = makeAchievementElement("laurels-minus.png");
    if (subtractionMonstersKilled.length == 35) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = "Defeated one of every monster in the Subtraction Dungeon.";
      td.firstChild.style.backgroundColor = "#d4af37";
    } else if (subtractionLevel > 10) {
      td.firstChild.style.backgroundColor = "#c0c0c0";
      td.lastChild.title = "Completed the Subtraction Dungeon."
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for the players progress
    through the multiplication dungeon*/
    td = makeAchievementElement("laurels-times.png");
    if (multiplicationMonstersKilled.length == 35) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = "Defeated one of every monster in the Multiplication Dungeon.";
      td.firstChild.style.backgroundColor = "#d4af37";
    } else if (multiplicationLevel > 10) {
      td.firstChild.style.backgroundColor = "#c0c0c0";
      td.lastChild.title = "Completed the Multiplication Dungeon."
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    /*
    This controls the achievement for the players progress
    through the division dungeon*/
    td = makeAchievementElement("laurels-divide.png");
    if (divisionMonstersKilled.length == 35) {
      td.lastChild.style.filter = "opacity(100%)";
      td.lastChild.title = "Defeated one of every monster in the Division Dungeon.";
      td.firstChild.style.backgroundColor = "#d4af37";
    } else if (divisionLevel > 10) {
      td.firstChild.style.backgroundColor = "#c0c0c0";
      td.lastChild.title = "Completed the Division Dungeon."
    } else {
      td.lastChild.style.filter = "opacity(30%)";
    }
    tr.appendChild(td);
    table.appendChild(tr);

    achievementPage.appendChild(table);

    return achievementPage;

    function getSum(total, num) {
      return total + num;
    }

    function makeAchievementElement(imgSource) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let img = document.createElement("img");
      let div = document.createElement("div");
      div.style.borderRadius = "5px";
      img.src = "./icons/" + imgSource;
      img.className = "achievementImg";
      div.appendChild(img);
      td.appendChild(div);
      return td;
    }
  }
  //
  //This function makes the quick buttons that
  //go at the top of most book pages.
  //targetElement is the DOM object to which the
  //quick buttons will be displayed
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

    let achievementsButton = document.createElement("input");
    achievementsButton.className = "quickButtons";
    achievementsButton.type = "button";
    achievementsButton.value = "Achievements";
    quickButtonDiv.appendChild(achievementsButton);

    targetElement.appendChild(quickButtonDiv);

    return quickButtonDiv;
  }
  //
  //This function creates and displays the two
  //turn page buttons at the bottom corners of
  //each of my pages
  //targetElement is the DOM object to which the
  //turn page buttons will be displayed
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
//divID is the id of the div element to which the text
//is to be typed.
//textString is the text that is to be typed.
//nextFunction and typingComplete are mutually exclusive
//callback functions.
//nextFunction is the function that is appended to the onClick
//property of a next button that is only displayed if this
//argument is a function.
//typingComplete is a function that is called after the typing
//has completed
function typeText(divID, textString, nextFunction, typingComplete) {
  let i = 0;
  let waitTime = 0;
  let fillText = false;
  let div = document.getElementById(divID);
  div.innerHTML = ""; //Clears the innerHTML of the element to be typed in

  setTimeout(function() {
      document.onkeypress = function() {
        fillText = true;
        document.onkeypress = "";
      }
    }, 100);
  typer();
  //This is a recursive function that runs until the end of the text string
  function typer() {
    if (fillText) {
      div.innerHTML = textString;
      fillText = false;
      i = textString.length;
      typer();
    } else if (i < textString.length) {
      div.innerHTML += textString.charAt(i);
      if (((textString.charAt(i) == ".") || (textString.charAt(i) == ",")) && ((i + 2) < textString.length)) {
        waitTime = 150;  //This gives a brief pause for "." and "," as long as it's
      } else {           //not the end of the string
        waitTime = 30;
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
      setTimeout(function() {
        nextButton.focus();
      }, 100);
    } else if (typeof typingComplete === "function") {  //If this function is present it will only
      typingComplete();                                 //run once the typing has completed and there
    }                                                   //is no nextFunction()
  }
}
//
//This function checks for specific key presses in the answer input box
//event is the key press
//answer is the answer to the question that will be passed to the
//checkAnswer() function if enter is pressed
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
//later and figure out if it stays or if it goes.
//operation is a string that determines which dungeons
//are opened.
function dungeon(operation) {
  operator = operation;
  makeDungeonScreen();
  var playerLevel = getLevel();
  monster = new newMonster(playerLevel);
  var levelProgressDiv = document.getElementById("levelProgressDiv");
  levelProgressDiv.style.width = "0px";
  battle(0);
}
//
//This is the function that I return to as the "base" of all
//the combat/math
//The special paramater is for when I need the battle function
//to behave differently than normal
//Codes
//0 - normal
//1 - incorrect answer, reuse old terms
function battle(special) {
  document.onkeydown = "";
  if (special < 1) {
    terms = getTerms();
    var algebraIndex = monster.index;
    var sequenceIndex = monster.index;
  }
  algebra = false;
  sequence = false;
  width = 340;

  var countdownBarFront = document.getElementById("countdownBarFront");
  var countdownTimer = document.getElementById("countdownTimer");

  spellsOn();
  //
  //This if statement determines whether the monster will
  //attack with algebra, sequence, or a normal attack
  if (special === 2) {
    algebra = true;
    displayAlgebraProblem();
  } else if (special === 3) {
    sequence = true;
    displaySequenceProblem();
  } else if ((getRandomNumber(0, 100) <= monster.index) && (special !== 1)) {
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
        displayAlgebraProblem();
        clearInterval(algebraMagic);
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
  //
  //The monster uses Sequence!
} else if ((getRandomNumber(0, 100) <= monster.index) && (special !== 1)) {
    problemDiv.innerHTML = "The " + monster.name + " used Sequence!";
    sequence = true;
    terms = getTerms("sequence");
    answer = terms[4];
    var sequenceFlash = 10;
    let sequenceMagic = setInterval(castSequence, 100);

    function castSequence() {
      if (sequenceFlash < 1) {
        displaySequenceProblem();
        clearInterval(sequenceMagic);

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
  //
  //Normal math!
  } else {
    answer = terms[2];
    problemDiv.innerHTML = terms[0] + " " + operator + " <span style=\"color:#ffbaba\">" + terms[1] + "</span> =\
      <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[2] + ")\"/>";
    timer = setInterval(timeDown, 10);
    var answerInput = document.getElementById("answerInput");
    answerInput.focus();
  }

  function displayAlgebraProblem() {
    problemDiv.innerHTML = terms[0] + " " + operator +
      " <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[1] + ")\"/> = " +
      terms[2];
    timer = setInterval(timeDown, 10);
    var answerInput = document.getElementById("answerInput");
    answerInput.focus();
  }

  function displaySequenceProblem() {
    problemDiv.innerHTML = terms[0] + ", " + terms[1] + ", " + terms[2] + ", " + terms[3] +
      ", <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[4] + ")\"/>,...";
    var answerInput = document.getElementById("answerInput");
    answerInput.focus();
    timer = setInterval(timeDown, 10);
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
//termType is an optional string that determines what
//type of values to generate.
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
      var answer = getRandomNumber(1, ((level + 5) - ((((level % 2) + level) / 2) - 1)));
      var constant1 = constant2 * answer;
      break;
  }
  return [constant1, constant2, answer];
}
//
//This function handles all the logic that goes into
//checking answers and progressing the game
//answer is a number (for now) that is the correct
//answer to the problem.
//damage is a number that dictates how much damage
//to deal to the monster if the player is correct
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
  if ((answerInput.value == answer) || (answer === "spell") || (answer === "heal")) {
    checkForSpells();
    damageDealt += (damage + damageBoost);
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
        if (newNumber <= 1) {
          flashCount++;
        }
        if (newNumber >= 9) {
          lastSecondCount++;
        }
        if (answer === 42) {
          fortyTwoCount++;
        }
        if (primes.includes(answer)) {
          primeCount++;
        }
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

      //
      //This progresses the level progress bar at the top of the screen
      if (monstersKilled < 11) {
        var levelProgressDiv = document.getElementById("levelProgressDiv");
        levelProgressDiv.style.width = (monstersKilled * 8) + "px";
      }

      checkMonster();
      problemDiv.innerHTML = "Great job, you defeated the " + monster.name + "!<br /><br />";

      //
      //This if checks to see if you've killed enough monsters
      //to clear the level
      if (monstersKilled >= 10) {
        //insertNextButton("Next", levelUp);
        setTimeout(levelUp, 1000);
      //
      //If not then it generates a new monster
      } else {
        setTimeout(nextMonster, 1000);
      }

    //
    //If the monster isn't killed yet, the player is hit
    //with another question right away, speeding up the
    //game a bit
    } else {
      //problemDiv.innerHTML = "Great job!<br /><br />";
      //insertNextButton("Next Problem", battle);
      battle(0);
    }

  //
  //The second half of this if statement controls the stuff
  //that happens when an answer is wrong
  //
  //If the answer is incorrect then all this happens
  } else {
    //
    //Reduce player health and keep track of total damage
    //received throughout the game
    damageReceived += monster.damage;
    playerHealth -= monster.damage;

    if (playerHealth < 1) {
      playerHealth = 0;
    }
    //
    //Adjusts the players health bar
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
    //
    //If the player still has health left, do this
    } else {
      problemDiv.innerHTML = "Oh no! " + answerInput.value + " didn't work!<br /><br />";
      let special = 0;
      if (algebra) {
        special = 2;
      } else if (sequence) {
        special = 3;
      } else {
        special = 1;
      }
      insertNextButton("Try Again", function(){ return battle(special); });
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
    battle(0);
  }
  //
  //This function does all the stuff associated with levelling
  //up and then tosses the player out of the dungeon
  function levelUp() {
    playerLevel = getLevel();
    if (monstersKilled > 10) {
      problemDiv.innerHTML = "You've cleared the level!<br /><br />";
    } else {
      problemDiv.innerHTML = "You cleared level " + playerLevel + "!<br /><br />";
    }

    if (((playerLevel % 2)  === 0) && (monstersKilled === 10) && (playerLevel < 11)) {
      switch (operator) {
        case "+":
          if (playerLevel == 2) { //Fibonacci Spell
            spellArray.push(0);
            problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
            progressLevel();
            fibonacciSpells++;
            document.getElementById("fibonacciCount").innerHTML = fibonacciSpells;
            insertNextButton("Next", function() {dropScroll("./scrolls/fibonacciScroll.gif");});
          }
          if (playerLevel == 4) { //Subtraction Dungeon
            problemDiv.innerHTML += "Something seems to be happening...<br /><br />";
            subtractionLevel++;
            progressLevel();
            var shakeCount = 12;
            var dungeonShake = setInterval(shakeDungeon, 100);
            insertNextButton("Next", bossEncounter);
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
            squareSpells++;
            document.getElementById("squareCount").innerHTML = squareSpells;
            insertNextButton("Next", function() {dropScroll("./scrolls/squareScroll.gif");});
          }
          if (playerLevel == 8) { //Pyramid/Time Spell
            spellArray.push(5);
            spellArray.sort();
            problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
            progressLevel();
            pyramidSpells++;
            document.getElementById("pyramidCount").innerHTML = pyramidSpells;
            insertNextButton("Next", function() {dropScroll("./scrolls/pyramidScroll.gif");});
          }
          if (playerLevel == 10) {//Damage Boost
            problemDiv.innerHTML += "You feel stronger than you did before...<br />Damage +1!<br /><br />";
            playerBaseDamage++;
            playerHealth = maxHealth;
            progressLevel();
            var healthBarFront = document.getElementById("healthBarFront");
            healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
            insertNextButton("Next", bossEncounter);
          }
          break;
        case "-":
          if (playerLevel == 2) { //Triangle/Fireball Spell
            spellArray.push(3);
            spellArray.sort();
            problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
            progressLevel();
            triangleSpells++;
            document.getElementById("triangleCount").innerHTML = triangleSpells;
            insertNextButton("Next", function() {dropScroll("./scrolls/triangleScroll.gif");});
          }
          if (playerLevel == 4) { //Multiplication Dungeon
            problemDiv.innerHTML += "Something seems to be happening...<br /><br />";
            multiplicationLevel++;
            progressLevel();
            var shakeCount = 12;
            var dungeonShake = setInterval(shakeDungeon, 100);
            insertNextButton("Next", bossEncounter);
          }
          if (playerLevel == 6) { //Health Boost
            problemDiv.innerHTML += "You feel healthier than you did before...<br />Max Health +2!<br /><br />";
            maxHealth += 2;
            playerHealth += 2;
            progressLevel();
            var healthBarFront = document.getElementById("healthBarFront");
            healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
            insertNextButton("Next", bossEncounter);
          }
          if (playerLevel == 8) { //Pentagon/Reduce Terms Spell
            spellArray.push(6);
            spellArray.sort();
            problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
            progressLevel();
            pentagonSpells++;
            document.getElementById("pentagonCount").innerHTML = pentagonSpells;
            insertNextButton("Next", function() {dropScroll("./scrolls/pentagonScroll.gif");});
          }
          if (playerLevel == 10) {//Damage Boost
            problemDiv.innerHTML += "You feel stronger than you did before...<br />Damage +1!<br /><br />";
            playerBaseDamage++;
            playerHealth = maxHealth;
            progressLevel();
            var healthBarFront = document.getElementById("healthBarFront");
            healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
            insertNextButton("Next", bossEncounter);
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
            insertNextButton("Next", bossEncounter);
          }
          if (playerLevel == 6) { //Health Boost
            problemDiv.innerHTML += "You feel healthier than you did before...<br />Max Health +2!<br /><br />";
            maxHealth += 2;
            playerHealth += 2;
            progressLevel();
            var healthBarFront = document.getElementById("healthBarFront");
            healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
            insertNextButton("Next", bossEncounter);
          }
          if (playerLevel == 8) { //Hexagon/Strength Spell
            spellArray.push(7);
            spellArray.sort();
            problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
            progressLevel();
            hexagonSpells++;
            document.getElementById("hexagonCount").innerHTML = hexagonSpells;
            insertNextButton("Next", function() {dropScroll("./scrolls/hexagonScroll.gif");});
          }
          if (playerLevel == 10) {//Damage Boost
            problemDiv.innerHTML += "You feel stronger than you did before...<br />Damage +1!<br /><br />";
            playerBaseDamage++;
            playerHealth = maxHealth;
            progressLevel();
            var healthBarFront = document.getElementById("healthBarFront");
            healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
            insertNextButton("Next", bossEncounter);
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
            cubeSpells++;
            document.getElementById("cubeCount").innerHTML = cubeSpells;
            insertNextButton("Next", function() {dropScroll("./scrolls/cubeScroll.gif");});
          }
          if (playerLevel == 6) { //Health Boost
            problemDiv.innerHTML += "You feel healthier than you did before...<br />Max Health +2!<br /><br />";
            maxHealth += 2;
            playerHealth += 2;
            progressLevel();
            var healthBarFront = document.getElementById("healthBarFront");
            healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
            insertNextButton("Next", bossEncounter);
          }
          if (playerLevel == 8) { //Star/Nova Spell
            spellArray.push(9);
            spellArray.sort();
            problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
            progressLevel();
            starSpells++;
            document.getElementById("starCount").innerHTML = starSpells;
            insertNextButton("Next", function() {dropScroll("./scrolls/starScroll.gif");});
          }
          if (playerLevel == 10) {//Damage Boost
            problemDiv.innerHTML += "You feel stronger than you did before...<br />Damage +1!<br /><br />";
            playerBaseDamage++;
            playerHealth = maxHealth;
            progressLevel();
            var healthBarFront = document.getElementById("healthBarFront");
            healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
            insertNextButton("Next", bossEncounter);
          }
          break;
      }
    } else {
      if (monstersKilled < 11) {
        progressLevel();
      }
      insertNextButton("Next", dungeonEntrance);
      monstersKilled = monstersPerFight;
    }


    /*if (((playerLevel % 2)  == 0) && (monstersKilled == 10) && (playerLevel < 11)) {
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
      }*/


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
    let scrollDiv = document.getElementById("scrollDiv");
    if (scrollDiv) {
      scrollDiv.parentNode.removeChild(scrollDiv);
    }
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
    scrollNextButton.onclick = bossEncounter;
    //
    //These three lines put all of the previous elements that
    //were set up into the play area
    scrollDiv.appendChild(scrollImg);
    scrollDiv.appendChild(scrollNextButton);
    playArea.appendChild(scrollDiv);
    //
    //The setTimeout function ensures that the scroll appears
    //on screen with the intended transition effect
    setTimeout(function() {
      scrollDiv.style.filter = "opacity(100%)";
    }, 10);
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
        document.getElementById("squareCount").innerHTML = squareSpells;
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
//array is the array to be searched
//index is the item to be searched for
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
//array is the array to be searched
//index is the index whose value we want
//to return
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
  let levelProgressDiv = document.createElement("div");
  levelProgressDiv.id = "levelProgressDiv";
  let levelDisplay = document.createElement("div");
  levelDisplay.id = "levelDisplay";
  levelDisplay.innerHTML = "Level " + playerLevel;
  levelDiv.appendChild(levelProgressDiv);
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
//playerLevel is usually the level of the player,
//but it is also used to generate a lower level
//monster for the polymorph monster spell
function newMonster(playerLevel) {
  damageBoost = 0;

  this.index = getRandomNumber(0, ((playerLevel * 3) - 1));
  if (this.index > 33) {
    this.index = getRandomNumber(0, 33);
  }
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
  playerLevel = (getLevel() - 1);
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
    let fibonacciImg = document.getElementById("fibonacciImg");
    if ((spellsCast[0] === 0) && (spellsCast[10] === 0) && (spellsCast[11] === 0)) {
      fibonacciImg.classList.add("highlightNewSpell");
    }
    fibonacciImg.style.filter = "opacity(100%)";
    fibonacciImg.onclick = function(){castFibonacci();}
    fibonacciCast = false;
  }
  if (subtractionLevel > 2) {     //Triangle Spells
    let triangleImg = document.getElementById("triangleImg");
    if (spellsCast[3] === 0) {
      triangleImg.classList.add("highlightNewSpell");
    }
    triangleImg.style.filter = "opacity(100%)";
    triangleImg.onclick = function(){castTriangle();}
  }
  if (additionLevel > 6) {        //Square Spells
    let squareImg = document.getElementById("squareImg");
    if (spellsCast[4] === 0) {
      squareImg.classList.add("highlightNewSpell");
    }
    squareImg.style.filter = "opacity(100%)";
    squareImg.onclick = function(){castSquare();}
  }
  if (subtractionLevel > 8) {     //Pentagon Spells
    let pentagonImg = document.getElementById("pentagonImg");
    if (spellsCast[6] === 0) {
      pentagonImg.classList.add("highlightNewSpell");
    }
    pentagonImg.style.filter = "opacity(100%)";
    pentagonImg.onclick = function(){castPentagon();}
    pentagonCast = false;
  }
  if (multiplicationLevel > 8) {  //Hexagon Spells
    let hexagonImg = document.getElementById("hexagonImg");
    if (spellsCast[7] === 0) {
      hexagonImg.classList.add("highlightNewSpell");
    }
    hexagonImg.style.filter = "opacity(100%)";
    hexagonImg.onclick = function(){castHexagon();}
  }
  if (additionLevel > 8) {        //Pyramid Spells
    let pyramidImg = document.getElementById("pyramidImg");
    if (spellsCast[5] === 0) {
      pyramidImg.classList.add("highlightNewSpell");
    }
    pyramidImg.style.filter = "opacity(100%)";
    pyramidImg.onclick = function(){castPyramid();}
    pyramidCast = false;
  }
  if (divisionLevel > 4) {        //Cube Spells
    let cubeImg = document.getElementById("cubeImg");
    if (spellsCast[8] === 0) {
      cubeImg.classList.add("highlightNewSpell");
    }
    cubeImg.style.filter = "opacity(100%)";
    cubeImg.onclick = function(){castCube();}
  }
  if (divisionLevel > 8) {        //Star Spells
    let starImg = document.getElementById("starImg");
    if (spellsCast[9] === 0) {
      starImg.classList.add("highlightNewSpell");
    }
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
//I have an animation for this, but I'm not totally happy with it.
//I want something a little more flashy...
function castFibonacci() {
  let fibonacciImg = document.getElementById("fibonacciImg");
  fibonacciImg.classList.remove("highlightNewSpell");
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

    fibonacciAnimation();
    spellsCast[10]++
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
    fibonacciAnimation();
    spellsCast[11]++;
    fibonacciSpells--;
    fibonacciCount.innerHTML = fibonacciSpells;
    return;
  }
  //
  //This switch determines which hint to display
  switch (operator) {
    case "+":
      additionHint(terms[0], terms[1]);
      spellsCast[0]++;
      break;
    case "-":
      subtractionHint(terms[0], terms[1]);
      spellsCast[0]++;
      break;
    case "*":
      if (multiplicationLevel < 3) {
        hintString = "Your magic doesn't seem to be working!";
      } else {
        multiplicationHint(terms[0], terms[1]);
      }
      spellsCast[1]++;
      break;
    case "/":
      if (divisionLevel < 3) {
        hintString = "Your magic doesn't seem to be working!";
      } else {
        divisionHint(terms[0], terms[1]);
      }
      spellsCast[2]++;
      break;
   }


  fibonacciAnimation();
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

  function fibonacciAnimation() {
    hintDiv.style.visibility = "visible";
    var possible = "1234567890+-/*()";
    var randomString = "";
    let spellCount = 1;
    var randomString = "";
    if (hintString.includes("<span style=\"color:#ffbaba\">")) {
      var shortener1 = hintString.match(/<span style="color:#ffbaba">/gi);
    } else {
      var shortener1 = [];
    }
    if (hintString.includes("</span>")) {
      var shortener2 = hintString.match(/<\/span>/gi);
    } else {
      var shortener2 = [];
    }
    if (hintString.includes("<br />")) {
      var shortener3 = hintString.match(/<br \/>/gi);
    } else {
      var shortener3 = [];
    }
    var shortener = (shortener1.length + shortener2.length + shortener3.length);
    var charactersToPrint = (hintString.length - ((shortener1.length * 28) + (shortener2.length * 7) + (shortener3.length * 6)));
    var span1 = 0;
    var span2 = 0;
    var br1 = 0;
    var randomCount = 0;
    let spellCast = setInterval(castSpell, 50);
    clearInterval(timer);
    function castSpell() {
      randomString = "";
      if (spellCount >= (charactersToPrint + shortener)) {
        hintDiv.innerHTML = hintString;
        var answerInput = document.getElementById("answerInput");
        answerInput.focus();
        clearInterval(spellCast);
        if (!pyramidCast) {
          timer = setInterval(timeDown, 10);
        }
      } else {
        span1 = 0;
        span2 = 0;
        br1 = 0;
        hintLoop:
        for (var j = 0; j < spellCount; j++) {
          var spanMod = ((span1 * 27) + (span2 * 6) + (br1 * 5))

          if ((hintString.charAt(j + spanMod) == "<") && (hintString.charAt(j + 6 + spanMod) == ">")) {
            randomString += "</span>";
            span2++;
          } else if ((hintString.charAt(j + spanMod) == "<") && (hintString.charAt(j + 5 + spanMod) == ">")) {
            randomString += "<br />";
            br1++;
          } else if (hintString.charAt(j + spanMod) == "<") {
            randomString += "<span style=\"color:#ffbaba\">";
            span1++;
          } else  {
            randomString += hintString.charAt((j + spanMod));
          }

        }
        for (let i = randomCount; i < ((charactersToPrint - 1) + shortener); i++) {

          randomString += possible.charAt(getRandomNumber(0, (possible.length - 1)));

        }
        spellCount++;
        randomCount++;
        hintDiv.innerHTML = randomString;
      }
    }
  }
}
//
//This function handles my triangle/fireball spell
//I may want to play with the animation a bit...
function castTriangle() {
  let triangleImg = document.getElementById("triangleImg");
  triangleImg.classList.remove("highlightNewSpell");
  let hintDiv = document.getElementById("hintDiv");
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

  spellsCast[3]++;
  triangleSpells--;
  document.getElementById("triangleCount").innerHTML = triangleSpells;

  function fireballAnimation() {
    var canvas = document.createElement("canvas");
    canvas.id = "euclidCanvas";
    let levelDiv = document.getElementById("levelDiv");
    playArea.insertBefore(canvas, levelDiv);

    var sparkCanvas1 = document.createElement("canvas");
    sparkCanvas1.height = 21;
    sparkCanvas1.width = 21;
    sparkCanvas1.className = "sparkCanvas";
    var sparkContext1 = sparkCanvas1.getContext("2d");
    playArea.appendChild(sparkCanvas1);
    var sparkTop1;
    var sparkLeft1;

    var sparkCanvas2 = document.createElement("canvas");
    sparkCanvas2.height = 21;
    sparkCanvas2.width = 21;
    sparkCanvas2.className = "sparkCanvas";
    var sparkContext2 = sparkCanvas2.getContext("2d");
    playArea.appendChild(sparkCanvas2);
    var sparkTop2;
    var sparkLeft2;

    var sparkCanvas3 = document.createElement("canvas");
    sparkCanvas3.height = 21;
    sparkCanvas3.width = 21;
    sparkCanvas3.className = "sparkCanvas";
    var sparkContext3 = sparkCanvas3.getContext("2d");
    playArea.appendChild(sparkCanvas3);
    var sparkTop3;
    var sparkLeft3;

    var sparkCanvas4 = document.createElement("canvas");
    sparkCanvas4.height = 21;
    sparkCanvas4.width = 21;
    sparkCanvas4.className = "sparkCanvas";
    var sparkContext4 = sparkCanvas4.getContext("2d");
    playArea.appendChild(sparkCanvas4);
    var sparkTop4;
    var sparkLeft4;

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
    }, 34);

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
      drawSpark((lineX1 - 10), 240, sparkCanvas1, sparkContext1);

      context.moveTo(lineX2, 250);
      lineX2 += lineXinterval;
      context.lineTo(lineX2, 250);
      drawSpark((lineX2 - 10), 240, sparkCanvas2, sparkContext2);

      context.lineWidth = lineWidth;
      context.strokeStyle = baseColor;
      context.stroke();

      if (lineX2 > 450) {
        clearInterval(lineDraw);
        playArea.removeChild(sparkCanvas1);
        playArea.removeChild(sparkCanvas2);
      }
      context.shadowBlur = 5;
      context.shadowColor = baseShadow;
    }

    function drawCircle1() {
      context.beginPath();
      context.arc(150, 250, 150, (circleStart1 * Math.PI), (circleAngle1 * Math.PI));
      context.lineWidth = lineWidth;
      context.strokeStyle = baseColor;
      context.stroke();
      circleStart1 = circleAngle1;
      circleAngle1 += circleInterval1;

      let xPos = (140 + (150 * Math.cos(circleStart1 * Math.PI)));
      let yPos = (240 + (150 * Math.sin(circleStart1 * Math.PI)));

      drawSpark(xPos, yPos, sparkCanvas3, sparkContext3);

      if (circleAngle1 > 2) {
        context.beginPath();
        context.arc(150, 250, 150, (circleStart1 * Math.PI), (2 * Math.PI));
        context.lineWidth = lineWidth;
        context.strokeStyle = baseColor;
        context.stroke();
        clearInterval(circleDraw1);
        playArea.removeChild(sparkCanvas3);
      }
      context.shadowBlur = 5;
      context.shadowColor = baseShadow;
    }

    function drawCircle2() {
      context.beginPath()
      context.arc(300, 250, 150, (circleStart2 * Math.PI), (circleAngle2 * Math.PI), true);
      context.lineWidth = lineWidth;
      context.strokeStyle = baseColor;
      context.stroke();
      circleStart2 = circleAngle2;
      circleAngle2 -= circleInterval2;


      let xPos = (290 + (150 * Math.cos(circleStart2 * Math.PI)));
      let yPos = (240 + (150 * Math.sin(circleStart2 * Math.PI)));

      drawSpark(xPos, yPos, sparkCanvas4, sparkContext4);

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
        playArea.removeChild(sparkCanvas4);
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

    function drawSpark(x, y, sparkCanvas, sparkContext) {
      sparkContext.clearRect(0, 0, 21, 21);
      sparkContext.stroke();

      var spark1 = getRandomNumber(0, 21);
      var spark2 = getRandomNumber(0, 21);
      var spark3 = getRandomNumber(0, 21);
      var spark4 = getRandomNumber(0, 21);

      sparkCanvas.style.top = y;
      sparkCanvas.style.left = x;

      sparkContext.beginPath();
      sparkContext.moveTo(10, 10);
      sparkContext.lineTo(21, spark1);
      sparkContext.moveTo(10, 10);
      sparkContext.lineTo(spark2, 21);
      sparkContext.moveTo(10, 10);
      sparkContext.lineTo(0, spark3);
      sparkContext.moveTo(10, 10);
      sparkContext.lineTo(spark4, 0);
      sparkContext.closePath();
      sparkContext.strokeStyle = "yellow";
      sparkContext.stroke();
    }
  }
}
//
//This function handles my square/healing spell
function castSquare() {
  let squareImg = document.getElementById("squareImg");
  squareImg.classList.remove("highlightNewSpell");
  let hintDiv = document.getElementById("hintDiv");
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
  setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 75);
  var playerDiv = document.getElementById("playerDiv");
  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaBlue");
      let answerInput = document.getElementById("answerInput");
      answerInput.focus();
      playerHealth += heal;
      if (playerHealth > maxHealth) {
        playerHealth = maxHealth;
      }
      let healthBarFront = document.getElementById("healthBarFront");
      healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
      if (!pyramidCast) {
        timer = setInterval(timeDown, 10);
      }
    } else {
      if ((spellFlash % 2) == 0) {
        playArea.classList.remove("playAreaBlue");
        var squareSpellAnimation = document.createElement("div");
        squareSpellAnimation.id = "squareSpellAnimation";
        squareSpellAnimation.innerHTML = "+";
        squareSpellAnimation.style.left = (((spellFlash / 2) * (10 + (spellFlash / 2))) - 3) + "%";
        playerDiv.appendChild(squareSpellAnimation);
        setTimeout(function() {
          squareSpellAnimation.style.bottom = "100%";
          squareSpellAnimation.style.filter = "opacity(0%)";
        }, 100);

        setTimeout(function() {
          playerDiv.removeChild(squareSpellAnimation);
        }, 2100);
      } else {
        requestAnimationFrame(function() {
          playArea.classList.add("playAreaBlue");
        });
      }
    }
    spellFlash--;
  }
  healthRecovered += heal;
  spellsCast[4]++;
  squareSpells--;
  document.getElementById("squareCount").innerHTML = squareSpells;
}
//
//This function handles my pentagon/reduce terms spell
function castPentagon() {
  let pentagonImg = document.getElementById("pentagonImg");
  pentagonImg.classList.remove("highlightNewSpell");
  fibonacciCast = false;
  let fibonacciImg = document.getElementById("fibonacciImg");
  fibonacciImg.style.filter = "opacity(100%)";
  fibonacciImg.onclick = function(){castFibonacci();}
  let hintDiv = document.getElementById("hintDiv");
  //
  //If the player has no magic, then no magic is cast
  if (!pentagonSpells) {
    hintDiv.innerHTML = "You don't have any Pentagon Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }
  clearInterval(timer);
  hintDiv.innerHTML = "You cast Lovelace's Reduction!";
  hintDiv.style.visibility = "visible";
  setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
  let spellFlash = 10;
  var possible = "1234567890/*+-";
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

  function castSpell() {
    var text = "";
    for (let i = 0; i < 15; i++) {
      text += possible.charAt(getRandomNumber(0, (possible.length - 1)));
    }
    problemDiv.innerHTML = text;
    if (spellFlash < 1) {
      clearInterval(spellCast);
      if (!pyramidCast) {
        timer = setInterval(timeDown, 10);
      }
      playArea.classList.remove("playAreaOrange");
      problemDiv.innerHTML = terms[0] + " " + operator + " <span style=\"color:#ffbaba\">" + terms[1] + "</span> =\
        <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[2] + ")\"/>";
      var answerInput = document.getElementById("answerInput");
      answerInput.focus();
    } else {
      if ((spellFlash % 2) == 0) {
        requestAnimationFrame(function() {
          playArea.classList.remove("playAreaOrange");
        });
      } else {
        requestAnimationFrame(function() {
          playArea.classList.add("playAreaOrange");
        });
      }
    }
    spellFlash--;
  }
  spellsCast[6]++;
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
  let hexagonImg = document.getElementById("hexagonImg");
  hexagonImg.classList.remove("highlightNewSpell");
  let hintDiv = document.getElementById("hintDiv");
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
  setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 100);
  damageBoost++;
  var playerImg = document.getElementById("playerImg");
  var playerImgHeight = 100;
  clearInterval(timer);
  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaWhite");

      setTimeout(function() {
        requestAnimationFrame(function() {
          playerImg.style.height = 100;
          if (!pyramidCast) {
            timer = setInterval(timeDown, 10);
          }
        });
      }, 500);
      setTimeout(function() {
        playerImg.removeAttribute("style");
      }, 500);
    } else {
      if ((spellFlash % 2) == 0) {
        playerImgHeight += 25;
        requestAnimationFrame(function() {
          playerImg.style.height = playerImgHeight;
          playArea.classList.remove("playAreaWhite");
        });
      } else {
        requestAnimationFrame(function() {
          playArea.classList.add("playAreaWhite");
        });
      }
    }
    spellFlash--;
  }
  spellsCast[7]++;
  hexagonSpells--;
  document.getElementById("hexagonCount").innerHTML = hexagonSpells;
}
//
//This function handles my pyramid/time spell
function castPyramid() {
  let pyramidImg = document.getElementById("pyramidImg");
  pyramidImg.classList.remove("highlightNewSpell");
  let hintDiv = document.getElementById("hintDiv");
  clearInterval(timer);
  //
  //If the player has no magic, then no magic is cast
  if (!pyramidSpells) {
    hintDiv.innerHTML = "You don't have any Pyramid Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }

  pyramidAnimation();
  hintDiv.innerHTML = "You cast Huygen's Stop Time!";
  hintDiv.style.visibility = "visible";
  setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
  let spellFlash = 9;
  var animationDone = false;
  let z = setInterval(function() {
    if (animationDone) {
      spellCast = setInterval(castSpell, 75);
      clearInterval(z);
    }
  }, 10);

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      var canvas = document.getElementById("timeCanvas");
      playArea.removeChild(canvas);
      var handCanvas = document.getElementById("handCanvas");
      playArea.removeChild(handCanvas);
      playArea.classList.remove("playAreaGreen");
      let answerInput = document.getElementById("answerInput");
      answerInput.focus();
    } else {
      if ((spellFlash % 2) == 0) {
        requestAnimationFrame(function() {
          playArea.classList.remove("playAreaGreen");
        });
      } else {
        requestAnimationFrame(function() {
          playArea.classList.add("playAreaGreen");
        });
      }
    }
    spellFlash--;
  }
  spellsCast[5]++;
  pyramidSpells--;
  document.getElementById("pyramidCount").innerHTML = pyramidSpells;

  pyramidCast = true;
  pyramidImg = document.getElementById("pyramidImg");
  pyramidImg.style.filter = "opacity(30%)";
  pyramidImg.onclick = "";

  function pyramidAnimation() {
    var canvas = document.createElement("canvas");
    canvas.id = "timeCanvas";
    let levelDiv = document.getElementById("levelDiv");
    playArea.insertBefore(canvas, levelDiv);

    var context = canvas.getContext("2d");
    context.canvas.width = 450;
    context.canvas.height = 450;

    var handCanvas = document.createElement("canvas");
    handCanvas.id = "handCanvas";
    playArea.insertBefore(handCanvas, canvas);

    var handContext = handCanvas.getContext("2d");
    handCanvas.width = 450;
    handCanvas.height = 450;

    var lineWidth = 5;
    var baseColor = "rgba(0, 255, 0, 1)"
    var baseShadow = "rgba(255, 0, 0, 1)"

    context.beginPath();
    context.arc(225, 225, 200, 0, (2 * Math.PI));

    for (let i = 0; i < 2; i += .166666666) {
      let xPos = (225 + (150 * Math.cos(i * Math.PI)));
      let yPos = (225 + (150 * Math.sin(i * Math.PI)));

      let xPos2 = (225 + (190 * Math.cos(i * Math.PI)));
      let yPos2 = (225 + (190 * Math.sin(i * Math.PI)));

      context.moveTo(xPos, yPos);
      context.lineTo(xPos2, yPos2);
    }

    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.shadowColor = "black";
    context.lineWidth = lineWidth * 2;
    context.strokeStyle = baseColor;

    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(225, 225, 10, 0, (2 * Math.PI));
    context.fillStyle = baseColor;
    context.fill();
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.shadowColor = "black";
    context.closePath();

    var minuteAngle = 1.5;
    var hourAngle = 0.5;
    var timeIncrement = 0.125;

    var flashing = false;


    var pyramidTimer = setInterval(function() {
      handContext.clearRect(0, 0, 450, 450);
      if (hourAngle > 1.5) {
        clearInterval(pyramidTimer);
        minuteAngle = 1.5;
        hourAngle = 1.5;
        drawClock();
        animationDone = true;
      }
      if (((Math.floor(minuteAngle + .5) % 2) == 0) && (!flashing)) {
        flashing = true;
        requestAnimationFrame(function() {
          playArea.classList.add("playAreaGreenFlash");
        });
        setTimeout(function() {
          requestAnimationFrame(function() {
            playArea.classList.remove("playAreaGreenFlash");
          });
        }, 160);
      }
      if ((Math.floor(minuteAngle + .5) % 2) != 0) {
        flashing = false;
      }
      if (hourAngle > 1.37) {
        timeIncrement = 0.03333333;
      } else if (hourAngle > 1.25) {
        timeIncrement = 0.05555555;
      }
      drawClock();
      incrementClock();
    }, 10);

    function drawClock() {
      var minuteX1 = (225 + (20 * Math.cos(minuteAngle * Math.PI)));
      var minuteY1 = (225 + (20 * Math.sin(minuteAngle * Math.PI)));

      var minuteX2 = (225 + (180 * Math.cos(minuteAngle * Math.PI)));
      var minuteY2 = (225 + (180 * Math.sin(minuteAngle * Math.PI)));

      var hourX1 = (225 + (20 * Math.cos(hourAngle * Math.PI)));
      var hourY1 = (225 + (20 * Math.sin(hourAngle * Math.PI)));

      var hourX2 = (225 + (100 * Math.cos(hourAngle * Math.PI)));
      var hourY2 = (225 + (100 * Math.sin(hourAngle * Math.PI)));

      handContext.beginPath();
      handContext.moveTo(minuteX1, minuteY1);
      handContext.lineTo(minuteX2, minuteY2);
      handContext.strokeStyle = baseColor;
      handContext.lineWidth = 15;
      handContext.shadowOffsetX = 5;
      handContext.shadowOffsetY = 5;
      handContext.shadowBlur = 5;
      handContext.shadowColor = "black";
      handContext.stroke();
      handContext.closePath();

      handContext.beginPath();
      handContext.moveTo(hourX1, hourY1);
      handContext.lineTo(hourX2, hourY2);
      handContext.strokeStyle = baseColor;
      handContext.lineWidth = 20;
      handContext.shadowOffsetX = 5;
      handContext.shadowOffsetY = 5;
      handContext.shadowBlur = 5;
      handContext.shadowColor = "black";
      handContext.stroke();
      handContext.closePath();
    }

    function incrementClock() {
      minuteAngle += timeIncrement;
      hourAngle += (timeIncrement / 12);
    }


  }
}
//
//This function handles my cube/polymorph monster spell
function castCube() {
  let cubeImg = document.getElementById("cubeImg");
  cubeImg.classList.remove("highlightNewSpell");
  let hintDiv = document.getElementById("hintDiv");
  clearInterval(timer);
  spellsOff();
  //
  //If the player has no magic, then no magic is cast
  if (!cubeSpells) {
    hintDiv.innerHTML = "You don't have any Cube Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    timer = setInterval(timeDown, 10);
    return;
  }
  //
  //If the player is fighting one of the boss monsters
  //the spell won't work
  if ((monster.index > 29) && (getLevel() < 9)) {
    hintDiv.innerHTML = "You can't polymorph the " + monster.name + "!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    timer = setInterval(timeDown, 10);
    return;
  }

  hintDiv.innerHTML = "You cast Fermet's Polymorph Monster!";
  hintDiv.style.visibility = "visible";
  setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 75);
  var monsterDiv = document.getElementById("monsterDiv");
  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaPurple");
      let newMonsterLevel = getRandomNumber(1, (Math.ceil(getLevel() / 2)));
      monsterDiv.style.transform = "rotateY(-180deg)";
      monster = new newMonster(newMonsterLevel);
      monsterDiv.style.transform = "rotateY(-360deg)";
      //battle();
      if (!pyramidCast) {
        timer = setInterval(timeDown, 10);
      }
    } else {
      if ((spellFlash % 2) == 0) {
        requestAnimationFrame(function() {
          playArea.classList.remove("playAreaPurple");
        });
        if ((spellFlash % 4) == 0) {
          requestAnimationFrame(function() {
            monsterDiv.style.transform = "rotateY(-" + (spellFlash * 360) + "deg)";
          });
        }
      } else {
        requestAnimationFrame(function() {
          playArea.classList.add("playAreaPurple");
        });
      }
    }
    spellFlash--;
  }
  spellsCast[8]++;
  cubeSpells--;
  document.getElementById("cubeCount").innerHTML = cubeSpells;
}
//
//This function handles my star/nova spell
function castStar() {
  let starImg = document.getElementById("starImg");
  starImg.classList.remove("highlightNewSpell");
  let hintDiv = document.getElementById("hintDiv");
  //
  //If the player has no magic, then no fireball is cast
  if (!starSpells) {
    hintDiv.innerHTML = "You don't have any Star Magic!";
    hintDiv.style.visibility = "visible"; //This displays the hint area
    setTimeout(function() {hintDiv.innerHTML = ""; hintDiv.style.visibility = "hidden";}, 1500)
    return;
  }
  clearInterval(timer);
  var animationDone = false;
  var spellCast;
  novaAnimation();

  hintDiv.innerHTML = "You cast Brahe's Nova!";
  hintDiv.style.visibility = "visible";
  let spellFlash = 9;
  let z = setInterval(function() {
    if (animationDone) {
      spellCast = setInterval(castSpell, 75);
      clearInterval(z);
    }
  }, 10);

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaYellow");
      var canvas = document.getElementById("novaCanvas");
      playArea.removeChild(canvas);
      checkAnswer("spell", 10);
    } else {
      if ((spellFlash % 2) == 0) {
        requestAnimationFrame(function() {
          playArea.classList.remove("playAreaYellow");
        });
      } else {
        requestAnimationFrame(function() {
          playArea.classList.add("playAreaYellow");
        });
      }
    }
    spellFlash--;
  }
  spellsCast[9]++;
  starSpells--;
  document.getElementById("starCount").innerHTML = starSpells;

  function novaAnimation() {
    var canvas = document.createElement("canvas");
    canvas.id = "novaCanvas";
    let levelDiv = document.getElementById("levelDiv");
    playArea.insertBefore(canvas, levelDiv);

    var context = canvas.getContext("2d");
    context.canvas.width = 450;
    context.canvas.height = 450;

    var sparkBox = 81;
    var sparkBoxCenter = 40;

    var sparkCanvas1 = makeSparkCanvas()
    var sparkContext1 = sparkCanvas1.getContext("2d");
    playArea.appendChild(sparkCanvas1);

    var sparkCanvas2 = makeSparkCanvas()
    var sparkContext2 = sparkCanvas2.getContext("2d");
    playArea.appendChild(sparkCanvas2);

    var sparkCanvas3 = makeSparkCanvas()
    var sparkContext3 = sparkCanvas3.getContext("2d");
    playArea.appendChild(sparkCanvas3);

    var sparkCanvas4 = makeSparkCanvas()
    var sparkContext4 = sparkCanvas4.getContext("2d");
    playArea.appendChild(sparkCanvas4);

    var sparkCanvas5 = makeSparkCanvas()
    var sparkContext5 = sparkCanvas5.getContext("2d");
    playArea.appendChild(sparkCanvas5);

    var sparkCanvas6 = makeSparkCanvas()
    var sparkContext6 = sparkCanvas6.getContext("2d");
    playArea.appendChild(sparkCanvas6);

    var lineWidth = 10;
    var baseColor = "rgba(233, 249, 0, 1)"
    var baseShadow = "rgba(255, 0, 0, 1)"

    var point1 = 1.5;
    var point2 = 2.16666666;
    var point3 = 2.83333333;
    var point4 = 0.5;
    var point5 = 1.16666666;
    var point6 = 1.83333333;
    var starRadius = 0;

    var interval = 0.05;
    var animationRate = 25;
    var animationCounter = 0;

    var starGrow = setInterval(function() {
      context.clearRect(0, 0, 450, 450);
      growStar();
      starRadius += 7;
      if (starRadius > 150) {
        clearInterval(starGrow);
        requestAnimationFrame(function() {
          playArea.classList.add("playAreaYellowFlash");
        });
        setTimeout(function() {
          requestAnimationFrame(function() {
            playArea.classList.remove("playAreaYellowFlash");
          });
        }, 750);
        var starTimer = setInterval(function() {
          context.clearRect(0, 0, 450, 450);
          drawStar();
          drawSparks();

          incrementStar();
          animationCounter += animationRate;
          if (animationCounter > 1000) {
            interval = 0.075;
          }
          if (animationCounter > 2000) {
            clearInterval(starTimer);
            point1 = 1.5;
            point2 = 2.16666666;
            point3 = 2.83333333;
            point4 = 0.5;
            point5 = 1.16666666;
            point6 = 1.83333333;
            context.clearRect(0, 0, 450, 450);
            playArea.removeChild(sparkCanvas1);
            playArea.removeChild(sparkCanvas2);
            playArea.removeChild(sparkCanvas3);
            playArea.removeChild(sparkCanvas4);
            playArea.removeChild(sparkCanvas5);
            playArea.removeChild(sparkCanvas6);
            drawStar();
            playArea.classList.add("playAreaYellowFlash");
            setTimeout(function() {
              requestAnimationFrame(function() {
                playArea.classList.remove("playAreaYellowFlash");
              });
            }, 250);
            animationDone = true;
          }
        }, animationRate);
      }
    }, animationRate);

    function incrementStar() {
      point1 += interval;
      point2 += interval;
      point3 += interval;
      point4 += interval;
      point5 += interval;
      point6 += interval;
    }

    function growStar() {
      triangle1x1 = (225 + (starRadius * Math.cos(point1 * Math.PI)));
      triangle1y1 = (225 + (starRadius * Math.sin(point1 * Math.PI)));

      triangle1x2 = (225 + (starRadius * Math.cos(point2 * Math.PI)));
      triangle1y2 = (225 + (starRadius * Math.sin(point2 * Math.PI)));

      triangle1x3 = (225 + (starRadius * Math.cos(point3 * Math.PI)));
      triangle1y3 = (225 + (starRadius * Math.sin(point3 * Math.PI)));

      triangle2x1 = (225 + (starRadius * Math.cos(point4 * Math.PI)));
      triangle2y1 = (225 + (starRadius * Math.sin(point4 * Math.PI)));

      triangle2x2 = (225 + (starRadius * Math.cos(point5 * Math.PI)));
      triangle2y2 = (225 + (starRadius * Math.sin(point5 * Math.PI)));

      triangle2x3 = (225 + (starRadius * Math.cos(point6 * Math.PI)));
      triangle2y3 = (225 + (starRadius * Math.sin(point6 * Math.PI)));

      context.beginPath();

      context.moveTo(triangle1x1, triangle1y1);
      context.lineTo(triangle1x2, triangle1y2);
      context.lineTo(triangle1x3, triangle1y3);
      context.lineTo(triangle1x1, triangle1y1);
      context.lineTo(triangle1x2, triangle1y2);

      context.moveTo(triangle2x1, triangle2y1);
      context.lineTo(triangle2x2, triangle2y2);
      context.lineTo(triangle2x3, triangle2y3);
      context.lineTo(triangle2x1, triangle2y1);
      context.closePath();

      context.shadowOffsetX = 5;
      context.shadowOffsetY = 5;
      context.shadowBlur = 5;
      context.shadowColor = "black";
      context.lineWidth = lineWidth;
      context.strokeStyle = baseColor;
      context.stroke();
    }

    function drawStar() {
      triangle1x1 = getX(225, 150, point1);
      triangle1y1 = getY(225, 150, point1);

      triangle1x2 = getX(225, 150, point2);
      triangle1y2 = getY(225, 150, point2);

      triangle1x3 = getX(225, 150, point3);
      triangle1y3 = getY(225, 150, point3);

      triangle2x1 = getX(225, 150, point4);
      triangle2y1 = getY(225, 150, point4);

      triangle2x2 = getX(225, 150, point5);
      triangle2y2 = getY(225, 150, point5);

      triangle2x3 = getX(225, 150, point6);
      triangle2y3 = getY(225, 150, point6);

      context.beginPath();

      context.moveTo(triangle1x1, triangle1y1);
      context.lineTo(triangle1x2, triangle1y2);
      context.lineTo(triangle1x3, triangle1y3);
      context.lineTo(triangle1x1, triangle1y1);
      context.lineTo(triangle1x2, triangle1y2);

      context.moveTo(triangle2x1, triangle2y1);
      context.lineTo(triangle2x2, triangle2y2);
      context.lineTo(triangle2x3, triangle2y3);
      context.lineTo(triangle2x1, triangle2y1);
      context.closePath();

      context.shadowOffsetX = 5;
      context.shadowOffsetY = 5;
      context.shadowBlur = 5;
      context.shadowColor = "black";
      context.lineWidth = lineWidth;
      context.strokeStyle = baseColor;
      context.stroke();
    }

    function drawSpark(sparkCanvas, sparkContext, angle) {
      let x = getX(225, 157, angle);
      let y = getY(225, 157, angle);

      y -= sparkBoxCenter;
      x -= sparkBoxCenter;

      angle = ((angle * Math.PI) * (180 / Math.PI))

      setTimeout(function() {
        sparkContext.clearRect(0, 0, sparkBox, sparkBox);
        sparkContext.stroke();
      }, (animationRate * 3));

      var spark1 = getRandomNumber((sparkBox / 4), ((sparkBox * 3) / 4));
      var spark2 = getRandomNumber((sparkBox / 4), ((sparkBox * 3) / 4));
      var spark3 = getRandomNumber((sparkBox / 4), ((sparkBox * 3) / 4));
      var spark4 = getRandomNumber((sparkBox / 4), ((sparkBox * 3) / 4));

      sparkCanvas.style.top = y;
      sparkCanvas.style.left = x;
      sparkCanvas.style.transform = "rotate(" + angle + "deg)";

      sparkContext.beginPath();
      sparkContext.moveTo(sparkBoxCenter, sparkBoxCenter);
      sparkContext.lineTo(spark1, 0);
      sparkContext.moveTo(sparkBoxCenter, sparkBoxCenter);
      sparkContext.lineTo(spark2, 0);
      sparkContext.moveTo(sparkBoxCenter, sparkBoxCenter);
      sparkContext.lineTo(spark3, 0);
      sparkContext.moveTo(sparkBoxCenter, sparkBoxCenter);
      sparkContext.lineTo(spark4, 0);
      sparkContext.closePath();
      //sparkContext.lineWidth = 2;
      sparkContext.strokeStyle = "orange";
      sparkContext.stroke();
    }

    function drawSparks() {
      drawSpark(sparkCanvas1, sparkContext1, point1);
      drawSpark(sparkCanvas2, sparkContext2, point2);
      drawSpark(sparkCanvas3, sparkContext3, point3);
      drawSpark(sparkCanvas4, sparkContext4, point4);
      drawSpark(sparkCanvas5, sparkContext5, point5);
      drawSpark(sparkCanvas6, sparkContext6, point6);
    }

    function makeSparkCanvas() {
      var sparkCanvas = document.createElement("canvas");
      sparkCanvas.height = sparkBox;
      sparkCanvas.width = sparkBox;
      sparkCanvas.className = "sparkCanvas";
      return sparkCanvas;
    }

    function getX(center, radius, angle) {
      return (center + (radius * Math.cos(angle * Math.PI)));
    }

    function getY(center, radius, angle) {
      return (center + (radius * Math.sin(angle * Math.PI)));
    }
  }
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
  localStorage.setItem("fortyTwoCount", fortyTwoCount);
  localStorage.setItem("lastSecondCount", lastSecondCount);
  localStorage.setItem("flashCount", flashCount);
  localStorage.setItem("primeCount", primeCount);
  localStorage.setItem("damageReceived", damageReceived);
  localStorage.setItem("damageDealt", damageDealt);
  localStorage.setItem("healthRecovered", healthRecovered);
  localStorage.setItem("spellsCast", JSON.stringify(spellsCast));
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
  playerHealth = parseInt(localStorage.getItem("playerHealth"), 10);
  maxHealth = parseInt(localStorage.getItem("maxHealth"), 10);
  playerBaseDamage = parseInt(localStorage.getItem("playerBaseDamage"), 10);
  mageIndex = parseInt(localStorage.getItem("mageIndex"), 10);
  totalMonstersKilled = parseInt(localStorage.getItem("totalMonstersKilled"), 10);
  additionLevel = parseInt(localStorage.getItem("additionLevel"), 10);
  subtractionLevel = parseInt(localStorage.getItem("subtractionLevel"), 10);
  multiplicationLevel = parseInt(localStorage.getItem("multiplicationLevel"), 10);
  divisionLevel = parseInt(localStorage.getItem("divisionLevel"), 10);
  fortyTwoCount = parseInt(localStorage.getItem("fortyTwoCount"), 10);
  lastSecondCount = parseInt(localStorage.getItem("lastSecondCount"), 10);
  flashCount = parseInt(localStorage.getItem("flashCount"), 10);
  primeCount = parseInt(localStorage.getItem("primeCount"), 10);
  damageReceived = parseInt(localStorage.getItem("damageReceived"), 10);
  damageDealt = parseInt(localStorage.getItem("damageDealt"), 10);
  healthRecovered = parseInt(localStorage.getItem("healthRecovered"), 10);
  spellsCast = JSON.parse(localStorage.getItem("spellsCast"));
  spellArray = JSON.parse(localStorage.getItem("spellArray"));
  additionMonstersKilled = JSON.parse(localStorage.getItem("additionMonstersKilled"));
  additionAverage = JSON.parse(localStorage.getItem("additionAverage"));
  subtractionMonstersKilled = JSON.parse(localStorage.getItem("subtractionMonstersKilled"));
  subtractionAverage = JSON.parse(localStorage.getItem("subtractionAverage"));
  multiplicationMonstersKilled = JSON.parse(localStorage.getItem("multiplicationMonstersKilled"));
  multiplicationAverage = JSON.parse(localStorage.getItem("multiplicationAverage"));
  divisionMonstersKilled = JSON.parse(localStorage.getItem("divisionMonstersKilled"));
  divisionAverage = JSON.parse(localStorage.getItem("divisionAverage"));
  fibonacciSpells = parseInt(localStorage.getItem("fibonacciSpells"), 10);
  triangleSpells = parseInt(localStorage.getItem("triangleSpells"), 10);
  squareSpells = parseInt(localStorage.getItem("squareSpells"), 10);
  pentagonSpells = parseInt(localStorage.getItem("pentagonSpells"), 10);
  hexagonSpells = parseInt(localStorage.getItem("hexagonSpells"), 10);
  pyramidSpells = parseInt(localStorage.getItem("pyramidSpells"), 10);
  cubeSpells = parseInt(localStorage.getItem("cubeSpells"), 10);
  starSpells = parseInt(localStorage.getItem("starSpells"), 10);
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
  localStorage.removeItem("fortyTwoCount");
  localStorage.removeItem("lastSecondCount");
  localStorage.removeItem("flashCount");
  localStorage.removeItem("primeCount");
  localStorage.removeItem("damageReceived");
  localStorage.removeItem("damageDealt");
  localStorage.removeItem("healthRecovered");
  localStorage.removeItem("spellsCast");
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
  fibonacciSpells = 59;
  triangleSpells = 59;
  squareSpells = 59;
  pentagonSpells = 59;
  hexagonSpells = 59;
  pyramidSpells = 59;
  cubeSpells = 59;
  starSpells = 59;
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
