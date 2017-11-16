var playArea = document.getElementById("playArea");
var playerName = "";
var playerHealth = 10;
var operator = "+";
var timer;
var additionLevel = 1;
//var addend1, addend2;
var subtractionLevel, multiplicationLevel, divisionLevel = 0;
var mage, mageFight, mageHurt, mageDead = 0;
mage = "whiteMage.gif";
mageFight = "whiteMageFight.gif";
mageHurt = "whiteMageHurt.gif";
mageDead = "whiteMageDead.gif";
var damagePlayer, damageMonster;
var fibonacciSpells = 0;
var fibonacciNumbers = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var triangleSpells = 0;
var triangleNumbers = [3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136];
var squareSpells = 0;
var squareNumbers = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
var pyramidSpells = 0;
var pyramidNumbers = [5, 14, 30, 55, 91, 140];
var cubeSpells = 0;
var cubeNumbers = [8, 27, 64, 125];
var hexagonSpells = 0;
var hexagonNumbers = [6, 15, 28, 45, 66, 91, 120];
var starSpells = 0;
var starNumbers = [13, 37, 73, 121];
var octagonSpells = 0;
var octagonNumbers = [9, 25, 49, 81, 121]
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
  playerHealth = 1;
  additionLevel = 1;
  subtractionLevel = 0;
  multiplicationLevel = 0;
  divisionLevel = 0;
  fibonacciSpells = 0;
  triangleSpells = 0;
  squareSpells = 0;
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
  let newGameButton = document.createElement("input");//These seven lines put the New Game button in the table
  newGameButton.setAttribute("type", "button");       //and define its attributes
  newGameButton.setAttribute("value", "New Game");
  newGameButton.setAttribute("class", "startButtons");
  newGameButton.onclick = newGame;
  newGameTD.appendChild(newGameButton);
  tableRow.appendChild(newGameTD);
  let continueButton = document.createElement("input");//These six lines put the Continue button in the table
  continueButton.setAttribute("type", "button");       //and define its attributes
  continueButton.setAttribute("value", "Continue");
  continueButton.setAttribute("class", "startButtons");
  continueButton.onclick = function() {dungeon(additionLevel);}
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
    operator = "+";
    additionDoorImg.onclick = function() {dungeon(additionLevel);}
  } else {
    additionDoor = "additionDoorClosed.gif";
  }
  if (subtractionLevel) {
    subtractionDoor = "subtractionDoorOpen.gif";
    subtractionDoorImg.onclick = subtractionDungeon;
  } else {
    subtractionDoor = "subtractionDoorClosed.gif";
  }
  if (multiplicationLevel) {
    multiplicationDoor = "multiplicationDoorOpen.gif";
    multiplicationDoorImg.onclick = multiplicationDungeon;
  } else {
    multiplicationDoor = "multiplicationDoorClosed.gif";
  }
  if (divisionLevel) {
    divisionDoor = "divisionDoorOpen.gif";
    divisionDoorImg.onclick = divisionDungeon;
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
      checkAnswer(answer);
      /*if (!algebraTest) {
        checkAnswer(addend2);
      } else {
        checkAnswer(sum);
      }*/
      break;
    /*case 97: //"a" key, Fibonacci Spell
      event.preventDefault(); //prevents the writing of the "a" key
      if (playerLevel > 1) {
        castFibonacci();
        break;
      }
    case 115: //"s" key, Triangle Spell
      event.preventDefault(); //prevents the writing of the "s" key
      if (playerLevel > 2) {
        if (!algebraTest) {
          algebraHint(addend1, sum);
        } else {
          getHint(addend1, addend2);
        }
      }
      break;
    case 100: //"d" key, Square Spell
      if (playerLevel > 3) {
        castSquare();
        break;
      }
    case 102: //"f" key, Pyramid Spell
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
function dungeon(playerLevel) {
  makeDungeonScreen();
  monster = new newMonster(playerLevel);
  battle();

  /*var addend1 = getRandomNumber(0, (additionLevel * 10));
  var addend2 = getRandomNumber(0, (additionLevel * 10));
  let sum = addend1 + addend2;
  let problemDiv = document.getElementById("problemDiv");
  //
  // I'm not sure if I should stick to using innerHTML since it's cleaner
  //or create three appendChild calls to get addend2 to be red...
  //let additionProblem = document.createTextNode(addend1 + " + " + addend2 + " = ");
  //problemDiv.appendChild(additionProblem);
  problemDiv.innerHTML = addend1 + " + <span style=\"color:#ffbaba\">" + addend2 + "</span> =\
    <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + sum + ")\"/>";*/
  //
  //The above code does what I want it to, but I want to find a way to do it through the DOM
  //like I was trying to do below...
  //
  /*let answerInput = document.createElement("input");
  answerInput.setAttribute("type", "number");
  answerInput.setAttribute("id", "answerInput");
  problemDiv.appendChild(answerInput);*/
  //answerInput.addEventListener("keypress", checkKeyPress(event));
  //answerInput.onkeypress = checkKeyPress(evt);


}
//
//This is the function that I return to as the "base" of all
//the combat/math
function battle() {
  var terms = getTerms();
  var width = 340;
  var countdownBarFront = document.getElementById("countdownBarFront");
  var countdownTimer = document.getElementById("countdownTimer");
  problemDiv.innerHTML = terms[0] + " " + operator + " <span style=\"color:#ffbaba\">" + terms[1] + "</span> =\
    <input id=\"answerInput\" type=\"number\" onKeyPress=\"checkKeyPress(event, " + terms[2] + ")\"/>";
  let answerInput = document.getElementById("answerInput");
  answerInput.focus();

  timer = setInterval(timeDown, 10);
  //
  //This function handles the countdown bar
  function timeDown() {
    if (width < 1) {          //When the countdown ends, the setInterval is stopped
      clearInterval(timer);   //and a wrong answer is passed to checkAnswer()
      countdownTimer.innerHTML = "0.00";
      checkAnswer(-terms[2]);
    } else {
      width -= .34;   //How much the countdown bar decreases in size every 10 milliseconds
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

    case "*": //Multiplication

    case "/": //Division

  }
  return [constant1, constant2, answer];
}
//
//This function will become a lot bigger, but it handles all the logic
//that goes into checking answers and progressing the game
function checkAnswer(answer) {
  clearInterval(timer);

  var playerImg = document.getElementById("playerImg");
  var playerDiv = document.getElementById("playerDiv");
  var slash = document.getElementById("slash");
  var monsterImg = document.getElementById("monsterImg");
  var monsterDiv = document.getElementById("monsterDiv");
  var blast = document.getElementById("blast");

  let problemDiv = document.getElementById("problemDiv");
  let answerInput = document.getElementById("answerInput");
  //
  //The first half of this if statement handles the stuff that
  //happens when an answer is correct
  if (answerInput.value == answer) {
    monster.hp--;

    var monsterHealthBarFront = document.getElementById("monsterHealthBarFront");
    monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";

    var damageFlash = 6;
    damageMonster = setInterval(monsterDamage, 100);

    //
    //This if checks to see if the monster is killed or not
    if (monster.hp == 0) {
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
    playerHealth--;

    var healthBarFront = document.getElementById("healthBarFront");
    healthBarFront.style.height = (playerHealth * 11) + "px";

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
    if (((playerLevel % 2)  == 0) && (monstersKilled == 10)) {
      insertNextButton("Next", bossEncounter);
    } else {
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
      monstersKilled = 9;
      insertNextButton("Next", dungeonEntrance);

    }
  }

  function bossEncounter() {
    problemDiv.innerHTML = "There's a monster blocking your path out of the dungeon. \
      It looks stronger than the others...<br /><br />"
    monster = new newBoss();
    monsterImg.style.filter = "brightness(100%)";
    monsterHealthBarFront.style.height = ((monster.hp / monster.maxHp) * 110) + "px";
    insertNextButton("Next", battle);
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
  //
  //This block creates the box that shows the
  //level at the top of the screen
  let levelDiv = document.createElement("div");
  levelDiv.setAttribute("id", "levelDiv");
  let levelDisplay = document.createTextNode("Level " + additionLevel); //This will have to be added in-dungeon
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
  healthBarFront.style.height = (playerHealth * 11) + "px";
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
  this.hp = Math.ceil(((this.index + 1) / 3) + 1);
  this.maxHp = this.hp;
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
  this.hp = (playerLevel * 2) + (playerLevel / 2) + 5;
  this.maxHp = this.hp;

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
