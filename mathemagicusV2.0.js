var playArea = document.getElementById("playArea");
var playerName = "";
var playerHealth = 10;
var maxHealth = 10;
var playerDamage = 1;
var operator = "+";
var timer;
var additionLevel = 1;
var subtractionLevel, multiplicationLevel, divisionLevel = 0;
var mage, mageFight, mageHurt, mageDead = 0;
mage = "whiteMage.gif";
mageFight = "whiteMageFight.gif";
mageHurt = "whiteMageHurt.gif";
mageDead = "whiteMageDead.gif";
var damagePlayer, damageMonster;
var terms = [];
var algebra = false;
var fibonacciSpells = 0;
var fibonacciNumbers = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var triangleSpells = 0;
var triangleNumbers = [3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136];
var squareSpells = 0;
var squareNumbers = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
var pentagonSpells = 0;
var pentagonNumbers = [5, 12, 22, 35, 51, 70, 92, 117, 145, 176];
var tetrahedralSpells = 0;
var tetrahedraNumbers = [4, 10, 20, 35, 56, 84, 120, 165];
var pyramidSpells = 0;
var pyramidNumbers = [5, 14, 30, 55, 91, 140];
var cubeSpells = 0;
var cubeNumbers = [8, 27, 64, 125];
var hexagonSpells = 0;
var hexagonNumbers = [7, 19, 37, 61, 91, 127, 169];
var starSpells = 0;
var starNumbers = [13, 37, 73, 121];
var octagonSpells = 0;
var octagonNumbers = [9, 25, 49, 81, 121];
var octahedronSpells = 0;
var octahedronNumbers = [6, 19, 44, 85, 146];
var monster = {};
var monstersKilled = 0;
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
  playerHealth = 4;
  maxHealth = 10;
  playerDamage = 1;
  additionLevel = 7;
  subtractionLevel = 3;
  multiplicationLevel = 3;
  divisionLevel = 5;
  fibonacciSpells = 10;
  triangleSpells = 10;
  squareSpells = 10;
  pyramidSpells = 0;
  cubeSpells = 0;
  monstersKilled = 9;
}
//
//Sets up the title screen
function gameStart() {
  resetStartVariables();
  playArea.innerHTML = "";
  //
  //These five lines put the title on the screen
  let titleDiv = document.createElement("div");
  titleDiv.setAttribute("id", "titleDiv");
  let title = document.createTextNode("Mathemagicus");
  titleDiv.appendChild(title);
  playArea.appendChild(titleDiv);
  //
  //This block puts the buttons for New Game and Continue on the screen
  let newGameButtons = document.createElement("table");
  newGameButtons.setAttribute("id", "newGameButtons");//Sets the id for the table for styling
  let tableRow = document.createElement("tr");
  let newGameTD = document.createElement("td");//The <td>s for the two buttons
  let continueTD = document.createElement("td");
  //
  //These seven lines put the New Game button in the table
  //and define its attributes
  let newGameButton = document.createElement("input");
  newGameButton.setAttribute("type", "button");
  newGameButton.setAttribute("value", "New Game");
  newGameButton.setAttribute("class", "startButtons");
  newGameButton.onclick = newGame;
  newGameTD.appendChild(newGameButton);
  tableRow.appendChild(newGameTD);
  //
  //These seven lines put the Continue button in the table
  //and define its attributes
  let continueButton = document.createElement("input");
  continueButton.setAttribute("type", "button");
  continueButton.setAttribute("value", "Continue");
  continueButton.setAttribute("class", "startButtons");
  continueButton.onclick = dungeonEntrance;
  continueTD.appendChild(continueButton);
  tableRow.appendChild(continueTD);

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
  enterNameDiv.setAttribute("id", "enterNameDiv");
  enterNameDiv.setAttribute("class", "textBox");
  let enterName = document.createTextNode("Please enter your name:");
  enterNameDiv.appendChild(enterName);
  lineBreak = document.createElement("br");
  enterNameDiv.appendChild(lineBreak);
  //
  //This block displays the text input box
  let nameTextBox = document.createElement("input");
  nameTextBox.setAttribute("type", "text");
  nameTextBox.setAttribute("id", "nameTextBox");
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
  cameoImg.setAttribute("id", "cameoImg");
  cameoDiv.setAttribute("id", "cameo");
  cameoDiv.appendChild(cameoImg);
  playArea.appendChild(cameoDiv);
  //
  //This block puts the text box on the screen
  let introTextDiv = document.createElement("div");
  introTextDiv.setAttribute("class", "textBox");
  introTextDiv.setAttribute("id", "introTextDiv");
  playArea.appendChild(introTextDiv);
  typeText("introTextDiv", introText, 0, showMages); //This function "types" the text into the box
  //
  //This block sets up the table for the character select
  let chooseCharacterTable = document.createElement("table");  //These lines set up the table for display
  let tableCaption = document.createElement("caption");
  let tableTitle = document.createTextNode("Choose your mage:");
  tableCaption.appendChild(tableTitle);
  chooseCharacterTable.appendChild(tableCaption);
  chooseCharacterTable.setAttribute("id", "characterTable");
  let tableRow = document.createElement("tr");
  let blackMageTD = document.createElement("td");   //These six lines put the Black Mage into
  let blackMageImg = document.createElement("img"); //their box and initializes their attributes
  blackMageImg.src = "blackMage.gif";
  blackMageImg.onclick = chooseBlack;
  blackMageTD.appendChild(blackMageImg);
  tableRow.appendChild(blackMageTD);
  let whiteMageTD = document.createElement("td");   //These six lines put the White Mage into
  let whiteMageImg = document.createElement("img"); //their box and initializes their attributes
  whiteMageImg.src = "whiteMage.gif";
  whiteMageImg.onclick = chooseWhite;
  whiteMageTD.appendChild(whiteMageImg);
  tableRow.appendChild(whiteMageTD);
  chooseCharacterTable.appendChild(tableRow);
  //
  //This function doesn't run until the text has finished typing
  //Basically, you can't choose your mage until after the NPC is done talking
  function showMages() {
    playArea.appendChild(chooseCharacterTable);
  }
}
//
//Introduces the basic game plot
function townIntro() {
  let table = document.getElementById("characterTable");
  playArea.removeChild(table);
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
    additionDoor = "additionDoorOpen.gif";
    additionDoorImg.onclick = function() {dungeon("+");}
  } else {
    additionDoor = "additionDoorClosed.gif";
  }
  if (subtractionLevel) {
    subtractionDoor = "subtractionDoorOpen.gif";
    subtractionDoorImg.onclick = function() {dungeon("-");}
  } else {
    subtractionDoor = "subtractionDoorClosed.gif";
  }
  if (multiplicationLevel) {
    multiplicationDoor = "multiplicationDoorOpen.gif";
    multiplicationDoorImg.onclick = function() {dungeon("*");}
  } else {
    multiplicationDoor = "multiplicationDoorClosed.gif";
  }
  if (divisionLevel) {
    divisionDoor = "divisionDoorOpen.gif";
    divisionDoorImg.onclick = function() {dungeon("/");}
  } else {
    divisionDoor = "divisionDoorClosed.gif";
  }
  //
  //Defines the src for the door images
  additionDoorImg.src = additionDoor;
  subtractionDoorImg.src = subtractionDoor;
  multiplicationDoorImg.src = multiplicationDoor;
  divisionDoorImg.src = divisionDoor;
  //
  //Finishes displaying the <table> in the play area
  dungeonTable.appendChild(firstRow);
  dungeonTable.appendChild(secondRow);
  playArea.appendChild(dungeonTable);
}
//
//The stuff that happens when the player chooses the black mage
//This can probably be an internal function to chooseCharacter()
function chooseBlack() {
  mage = "blackMage.gif";
  mageHurt = "blackMageHurt.gif";
  mageFight = "blackMageFight.gif";
  mageDead = "blackMageDead.gif";
  townIntro();
}
//
//The stuff that happens when the player chooses the white mage
//This can probably be an internal function to chooseCharacter()
function chooseWhite() {
  mage = "whiteMage.gif";
  mageHurt = "whiteMageHurt.gif";
  mageFight = "whiteMageFight.gif";
  mageDead = "whiteMageDead.gif";
  townIntro();
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
      nextButton.setAttribute("type", "button");        //or next function
      nextButton.setAttribute("value", "Next");
      nextButton.setAttribute("id", "nextButton");
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
      checkAnswer(answer, playerDamage);
      break;
    case 97: //"a" key, Fibonacci Spell
      event.preventDefault(); //prevents the writing of the "a" key
      if (document.getElementById("hintDiv").innerHTML) {
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
        break;
      }
    /*case 102: //"f" key, Pyramid Spell
      if (playerLevel > 4) {
        castPyramid();
        break;
      }
    case 103: //"g" key, Cube Spell
      if (playerLevel > 7) {
        castCube();
        break;
      }*/
  }
}
//
//I'm not sure I need this but I think I do, I'll come back to it
//later and figure out if it stays or if it goes
function dungeon(operation) {
  makeDungeonScreen();
  operator = operation;
  var playerLevel = getLevel();
  monster = new newMonster(playerLevel);
  battle();
}
//
//This is the function that I return to as the "base" of all
//the combat/math
function battle() {
  terms = getTerms();
  var width = 340;
  var answer;
  var countdownBarFront = document.getElementById("countdownBarFront");
  var countdownTimer = document.getElementById("countdownTimer");

  spellsOn();

  if (getRandomNumber(0, 100) <= monster.index) {
    problemDiv.innerHTML = "The " + monster.name + " used Algebra!";
    algebra = true;
    answer = terms[1];
    let algebraFlash = 10;
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
  } else {
    answer = terms[2];
    problemDiv.innerHTML = terms[0] + " " + operator + " <span style=\"color:#ffbaba\">" + terms[1] + "</span> =\
      <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[2] + ")\"/>";
    timer = setInterval(timeDown, 10);
    var answerInput = document.getElementById("answerInput");
    answerInput.focus();
  }
  //
  //This function handles the countdown bar
  function timeDown() {
    if (width < 1) {          //When the countdown ends, the setInterval is stopped
      clearInterval(timer);   //and a wrong answer is passed to checkAnswer()
      countdownTimer.innerHTML = "0.00";
      checkAnswer(-answer);
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

}
//
//This function gets the terms for an arithmetic problem
//based on which operation the player is solving for
function getTerms() {
  switch (operator) {
    case "+": //Addition
      var constant1 = getRandomNumber(0, (additionLevel * 10));
      var constant2 = getRandomNumber(0, (additionLevel * 10));
      var answer = constant1 + constant2;
      break;
    case "-": //Subtraction
      //
      //I could use the same trick I did with
      //generating the division terms here with
      //the subtraction terms to lose the while
      //loop...
      var constant1 = getRandomNumber(1, (subtractionLevel * 10));
      var constant2 = getRandomNumber(0, (subtractionLevel * 10));
      while (constant2 > constant1) {
        constant2 = getRandomNumber(0, (subtractionLevel * 10));
      }
      var answer = constant1 - constant2;
      break;
    case "*": //Multiplication
      //
      //This variable declaration is just to shorten the name
      //temporarily to make the constant2 formula take up
      //less space
      var lvl = multiplicationLevel;
      var constant1 = getRandomNumber(0, (lvl + 5));
      //
      //There might be a better formula for getting this
      //progression of products but this works for now
      var constant2 = getRandomNumber(0, ((lvl + 5) - ((((lvl % 2) + lvl) / 2) - 1)));
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
      var lvl = divisionLevel;
      var constant2 = getRandomNumber(0, (lvl + 5));
      //
      //There might be a better formula for getting this
      //progression of products but this works for now
      var answer = getRandomNumber(0, ((lvl + 5) - ((((lvl % 2) + lvl) / 2) - 1)));
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
  if ((answerInput.value == answer) || (answer == "spell")) {
    checkForSpells();
    monster.hp -= damage;
    if (monster.hp < 1) {
      monster.hp = 0;
    }
    var monsterHealthBarFront = document.getElementById("monsterHealthBarFront");
    monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";

    var damageFlash = 6;
    damageMonster = setInterval(monsterDamage, 100);
    //
    //This if checks to see if the monster is killed or not
    if (monster.hp < 1) {
      monstersKilled++;
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

    var damageFlash = 6;
    damagePlayer = setInterval(playerDamage, 100);

    if (playerHealth < 1) {
      problemDiv.innerHTML = "You have succumbed to the " + monster.name + "'s attack!<br /><br />";
      insertNextButton("Continue", gameStart);
    } else {
      problemDiv.innerHTML = "The answer was " + Math.abs(answer) + "<br /><br />";
      insertNextButton("Next Problem", battle);
    }
  }
  //
  //This function handles the animation for monster damage
  function monsterDamage() {

    playerImg.src = mageFight;
    monsterImg.style.filter = "brightness(50%)";

    if (damageFlash <= 0) {
      playerImg.src = mage;
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
    playerImg.src = mageHurt;

    if (damageFlash <= 0) {
      if (playerHealth < 1) {
        playerImg.src = mageDead;
      } else {
        playerImg.src = mage;
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
    playerLevel = getLevel();
    monster = new newMonster(playerLevel);
    monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";
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
            if (playerLevel == 2) {
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("fibonacciScroll.gif");});
            }
            if (playerLevel == 4) {
              problemDiv.innerHTML += "Something seems to be happening...<br /><br />";
              subtractionLevel++;
              progressLevel();
              var shakeCount = 12;
              var dungeonShake = setInterval(shakeDungeon, 100);
              insertNextButton("Next", dungeonEntrance)
            }
            if (playerLevel == 6) {
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              maxHealth += 2;
              var healthBarFront = document.getElementById("healthBarFront");
              healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("squareScroll.gif");});
            }
            break;
          case "-":
            if (playerLevel == 2) {
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("triangleScroll.gif");});
            }
            if (playerLevel == 4) {
              problemDiv.innerHTML += "Something seems to be happening...<br /><br />";
              multiplicationLevel++;
              progressLevel();
              var shakeCount = 12;
              var dungeonShake = setInterval(shakeDungeon, 100);
              insertNextButton("Next", dungeonEntrance)
            }
            break;
          case "*":
            if (playerLevel == 2) {
              problemDiv.innerHTML += "The " + monster.name + " seems to have dropped something...<br /><br />";
              progressLevel();
              insertNextButton("Next", function() {dropScroll("fibonacciScroll2.gif");});
            }
            if (playerLevel == 4) {
              problemDiv.innerHTML += "Something seems to be happening...<br /><br />";
              divisionLevel++;
              progressLevel();
              var shakeCount = 12;
              var dungeonShake = setInterval(shakeDungeon, 100);
              insertNextButton("Next", dungeonEntrance)
            }
            break;
          case "/":

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

      monstersKilled = 9;
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
    scrollDiv.setAttribute("id", "scrollDiv");
    scrollDiv.style.filter = "opacity(0%)";
    //
    //These three lines set up the scroll image
    let scrollImg = document.createElement("img");
    scrollImg.setAttribute("id", "scrollImg");
    scrollImg.src = scrollGif;
    //
    //These five lines set up the next button that appears
    //at the bottom of the scroll
    let scrollNextButton = document.createElement("input");
    scrollNextButton.setAttribute("type", "button");
    scrollNextButton.setAttribute("value", "Next");
    scrollNextButton.setAttribute("id", "scrollNextButton");
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
  //
  //This function checks the correct answers to see if they
  //are in one of my sets of special numbers
  function checkForSpells() {
    //
    //Checks for Fibonacci Numbers
    if ((additionLevel > 2) && (fibonacciNumbers.includes(answer))) {
      if (fibonacciSpells < 9) {
        fibonacciSpells++;
        document.getElementById("fibonacciCount").innerHTML = fibonacciSpells;
      }
    }
    //
    //Checks for Triangle Numbers
    if ((subtractionLevel > 2) && (triangleNumbers.includes(answer))) {
      if (triangleSpells < 9) {
        triangleSpells++;
        document.getElementById("triangleCount").innerHTML = triangleSpells;
      }
    }
    //
    //Checks for Square Numbers
    if ((additionLevel > 6) && (squareNumbers.includes(answer))) {
      if (squareSpells < 9) {
        squareSpells++;
        document.getElementById("triangleCount").innerHTML = triangleSpells;
      }
    }
  }



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
  levelDiv.setAttribute("id", "levelDiv");
  let levelDisplay = document.createTextNode("Level " + playerLevel);
  levelDiv.appendChild(levelDisplay);
  playArea.appendChild(levelDiv);
  //
  //This block creates the box that the problem
  //will be displayed in
  let problemDiv = document.createElement("div");
  problemDiv.setAttribute("id", "problemDiv");
  problemDiv.setAttribute("class", "textBox");
  //problemDiv.innerHTML = "1 + 2 + 3 + 4 + 5 = ?"  //Sample text
  playArea.appendChild(problemDiv);
  //
  //This block creates the box that the hint
  //will be displayed in
  let hintDiv = document.createElement("div");
  hintDiv.setAttribute("id", "hintDiv");
  hintDiv.setAttribute("class", "textBox");
  //hintDiv.innerHTML = "I'll get you Black Dynamite, if it's the last thing I do!!!";  //Sample text
  playArea.appendChild(hintDiv);
  hintDiv.style.visibility = "hidden";
  //
  //This block creates the elements needed for the
  //countdown bar
  let countdownBarBack = document.createElement("div");
  countdownBarBack.setAttribute("id", "countdownBarBack");
  let countdownBarFront = document.createElement("div");
  countdownBarFront.setAttribute("id", "countdownBarFront");
  let countdownTimer = document.createElement("div");
  countdownTimer.setAttribute("id", "countdownTimer");
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
  spellBar.setAttribute("id", "spellBar");
  //
  //This block creates everything needed for the
  //fibonacci spell
  let fibonacciDiv = document.createElement("div");
  let fibonacciImg = document.createElement("img");
  fibonacciImg.src = "fibonacci.gif";
  fibonacciImg.setAttribute("id", "fibonacciImg");
  fibonacciImg.style.filter = "opacity(10%)";
  fibonacciDiv.appendChild(fibonacciImg);
  let fibonacciCount = document.createElement("div");
  fibonacciCount.setAttribute("id", "fibonacciCount");
  fibonacciCount.innerHTML = fibonacciSpells;
  fibonacciDiv.appendChild(fibonacciCount);
  spellBar.appendChild(fibonacciDiv);
  //
  //This block creates everything needed for the
  //triangle spell
  let triangleDiv = document.createElement("div");
  let triangleImg = document.createElement("img");
  triangleImg.src = "triangle.gif";
  triangleImg.setAttribute("id", "triangleImg");
  triangleImg.style.filter = "opacity(10%)";
  triangleDiv.appendChild(triangleImg);
  let triangleCount = document.createElement("div");
  triangleCount.setAttribute("id", "triangleCount");
  triangleCount.innerHTML = triangleSpells;
  triangleDiv.appendChild(triangleCount);
  spellBar.appendChild(triangleDiv);
  //
  //This block creates everything needed for the
  //square spell
  let squareDiv = document.createElement("div");
  let squareImg = document.createElement("img");
  squareImg.src = "square.gif";
  squareImg.setAttribute("id", "squareImg");
  squareImg.style.filter = "opacity(10%)";
  squareDiv.appendChild(squareImg);
  let squareCount = document.createElement("div");
  squareCount.setAttribute("id", "squareCount");
  squareCount.innerHTML = squareSpells;
  squareDiv.appendChild(squareCount);
  spellBar.appendChild(squareDiv);
  //
  //This block creates everything needed for the
  //pyramid spell
  let pyramidDiv = document.createElement("div");
  let pyramidImg = document.createElement("img");
  pyramidImg.src = "pyramid.gif";
  pyramidImg.setAttribute("id", "pyramidImg");
  pyramidImg.style.filter = "opacity(10%)";
  pyramidDiv.appendChild(pyramidImg);
  let pyramidCount = document.createElement("div");
  pyramidCount.setAttribute("id", "pyramidCount");
  pyramidCount.innerHTML = pyramidSpells;
  pyramidDiv.appendChild(pyramidCount);
  spellBar.appendChild(pyramidDiv);
  //
  //This block creates everything needed for the
  //cube spell
  let cubeDiv = document.createElement("div");
  let cubeImg = document.createElement("img");
  cubeImg.src = "cube.gif";
  cubeImg.setAttribute("id", "cubeImg");
  cubeImg.style.filter = "opacity(10%)";
  cubeDiv.appendChild(cubeImg);
  let cubeCount = document.createElement("div");
  cubeCount.setAttribute("id", "cubeCount");
  cubeCount.innerHTML = cubeSpells;
  cubeDiv.appendChild(cubeCount);
  spellBar.appendChild(cubeDiv);
  playArea.appendChild(spellBar);
  //
  //The combatDiv holds the player and monster
  //health bars as well as the images for the
  //player and monster
  let combatDiv = document.createElement("div");
  combatDiv.setAttribute("id", "combatDiv");
  //
  //The player health bar
  let healthBarBack = document.createElement("div");
  healthBarBack.setAttribute("id", "healthBarBack");
  let healthBarFront = document.createElement("div");
  healthBarFront.setAttribute("id", "healthBarFront");
  healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";
  healthBarBack.appendChild(healthBarFront);
  combatDiv.appendChild(healthBarBack);
  //
  //The player's image
  let playerDiv = document.createElement("div");
  playerDiv.setAttribute("id", "playerDiv");
  let playerImg = document.createElement("img");
  playerImg.setAttribute("id", "playerImg");
  playerImg.src = mage;
  playerDiv.appendChild(playerImg);
  let slash = document.createElement("img");
  slash.setAttribute("id", "slash");
  slash.src = "slash.gif";
  slash.style.visibility = "hidden";
  playerDiv.appendChild(slash);
  combatDiv.appendChild(playerDiv);
  //
  //The monster's image
  let monsterDiv = document.createElement("div");
  monsterDiv.setAttribute("id", "monsterDiv");
  let monsterImg = document.createElement("img");
  monsterImg.setAttribute("id", "monsterImg");
  monsterDiv.appendChild(monsterImg);
  let blast = document.createElement("img");
  blast.setAttribute("id", "blast");
  blast.src = "blast.gif";
  blast.style.visibility = "hidden";
  monsterDiv.appendChild(blast);
  combatDiv.appendChild(monsterDiv);
  //
  //The monster health bar
  let monsterHealthBarBack = document.createElement("div");
  monsterHealthBarBack.setAttribute("id", "monsterHealthBarBack");
  let monsterHealthBarFront = document.createElement("div");
  monsterHealthBarFront.setAttribute("id", "monsterHealthBarFront");
  monsterHealthBarBack.appendChild(monsterHealthBarFront);
  combatDiv.appendChild(monsterHealthBarBack);
  playArea.appendChild(combatDiv);
}
//
//This function gets a new monster object and puts it on the screen
function newMonster(playerLevel) {
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
  this.damage = Math.ceil(playerLevel / 3);
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
  this.index = (playerLevel / 2) + 29;
  //
  //Boss 1  Level 2   10 HP   3 dmg
  //Boss 2  Level 4   15 HP   3 dmg
  //Boss 3  Level 6   20 HP   4 dmg
  //Boss 4  Level 8   25 HP   4 dmg
  //Boss 5  Level 10  30 HP   5 dmg

  //this.hp = (playerLevel * 2) + (playerLevel / 2) + 5;
  this.hp = 1; //I only use this for testing and debugging
  this.maxHp = this.hp;
  this.damage = (Math.floor(this.hp / 10) + 2);
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
  if (additionLevel > 2) {
    fibonacciImg = document.getElementById("fibonacciImg");
    fibonacciImg.style.filter = "opacity(100%)";
    fibonacciImg.onclick = function(){castFibonacci();}
  }
  if (subtractionLevel > 2) {
    triangleImg = document.getElementById("triangleImg");
    triangleImg.style.filter = "opacity(100%)";
    triangleImg.onclick = function(){castTriangle();}
  }
  if (additionLevel > 6) {
    squareImg = document.getElementById("squareImg");
    squareImg.style.filter = "opacity(100%)";
    squareImg.onclick = function(){castSquare();}
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

  /*document.getElementById("square").onclick = "";
  document.getElementById("pyramid").onclick = "";
  document.getElementById("cube").onclick = "";*/
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
    algebra = false;
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
        hintString += terms[2] + " / " + terms[0] + " = ?";
        if (divisionLevel > 2) {
          hintString += "<br />";
        }
        break;
      case "/":

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

  }
  //
  //These last four lines display the final hint to the hintDiv
  //and update the count of Fibonacci Spells
  hintDiv.innerHTML = hintString;
  hintDiv.style.visibility = "visible";
  fibonacciSpells--;
  fibonacciCount.innerHTML = fibonacciSpells;
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

  let damage = 1;
  let i = 0;
  let totalLevels = additionLevel + subtractionLevel + multiplicationLevel + divisionLevel;
  while (totalLevels >= triangleNumbers[i]) {
    damage++;
    i++
  }

  hintDiv.innerHTML = "You cast Euclid's Fireball!";
  hintDiv.style.visibility = "visible";
  let spellFlash = 10;
  let spellCast = setInterval(castSpell, 75);

  function castSpell() {
    if (spellFlash < 1) {
      clearInterval(spellCast);
      playArea.classList.remove("playAreaRed");
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

}

function castSquare() {
  hintDiv = document.getElementById("hintDiv");
  //
  //If the player has no magic, then no fireball is cast
  if (!squareSpells) {
    hintDiv.innerHTML = "You don't have any Square Magic!";
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
      var healthBarFront = document.getElementById("healthBarFront");
      healthBarFront.style.height = ((playerHealth / maxHealth) * 110) + "px";

      checkAnswer("spell", 0);
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
      playArea.classList.remove("playAreaWhite");
      checkAnswer("spell", 10);
    } else {
      if ((spellFlash % 2) == 0) {
        playArea.classList.remove("playAreaWhite");
      } else {
        playArea.classList.add("playAreaWhite");
      }
    }
    spellFlash--;
  }
  starSpells--;
  document.getElementById("starCount").innerHTML = starSpells;
}
