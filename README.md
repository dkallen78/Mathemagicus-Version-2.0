# Mathemagicus-Version-2.0

This is a more advanced version of my original Mathemagicus game (will be uploaded later). 

As it stands now, the game has almost all of the code in it to start the game and create and display all of the elements for the game. 

Right now, I just have a simple engine that can advance levels of addition and randomly get a monster based on the players level in that operation (addition, subtraction, multiplication, and division). 

Included in this project are the html, css, and js files.

## 11/16/17

### Update 

Added animations for when the player or the enemy takes damage

### Update 2 

Added basic boss monster functionality

Added transition effects for the character select screen and the dungeon select screen

Moved the getLevel() function to the global scope

### Update 3

Added the Algebra spell to the game. It lets the monster randomly change a simple addition problem into a basic missing term problem. The higher the level of the monster, the more likely it is to cast Algebra.

I also included all of the .gif assets for the game in a .rar file

## 11/17/17

### Update

Added lots of stuff for learning the first spell and making sure it works properly. Short on time, more details later...

## 11/18/17

### Update

I added the subtraction functionality in and got it working properly.

I also put in the triangle/fireball spell and some flashing animations for that. I had to modify my checkAnswers() function to accept an additional argument that determines how much damage an attack does.

## 11/19/17

## Update

I updated the hint functionality to cover subtraction problems. Since I did that, I could also improve the hints for the algebra/missing term problems. 

## Update 2

I added functionality to generate multiplication problems. The formula to determine the multiplier is a bit ugly but it does what I want it to.

I added hint functionality for multiplication problems. There's more redundancy than I would like in the code so I need to go back to it and find a way to remove that.

## Update 3

I added functionality to generate multiplication problems. I used the same formula to get terms as I did for the multiplication problems so it would have the same progression of difficulty.

### Up next: more spells, determining boss rewards, and making division hints

I've figured out some of the boss rewards that I have yet to put in. At levels 6 the player will get a health boost. At addition level 6 they will learn a healing spell. After clearing the 10th level of a dungeon they will get an upgrade to their damage. I'm going to include a polymorph monster spell, a nova (damage) spell, either a slow or stop time spell, a spell to reduce the dificulty of the problem, and I'm torn between a strength spell (more damage per attack for one encounter) and a confuse spell (making the monster attack itself). We'll see how much of this I can fit in tomorrow =P
