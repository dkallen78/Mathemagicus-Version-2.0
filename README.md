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

### Update

I updated the hint functionality to cover subtraction problems. Since I did that, I could also improve the hints for the algebra/missing term problems. 

### Update 2

I added functionality to generate multiplication problems. The formula to determine the multiplier is a bit ugly but it does what I want it to.

I added hint functionality for multiplication problems. There's more redundancy than I would like in the code so I need to go back to it and find a way to remove that.

### Update 3

I added functionality to generate division problems. I used the same formula to get terms as I did for the multiplication problems so it would have the same progression of difficulty.

## 11/20/17

### Update

I added functionality for healing spells and nova spells. I haven't made the nova spells accessible yet, but since the function was virtually identical to the fireball spell it was easy to add. 

One problem I have with the healing spell is that it invokes checkAnswer() which automatically generates a damage animation on the enemy when I cast it... I need to find a way to keep that from happening...

### Update 2

I finished putting all of the spells into the game.

I fixed the issue I was having with the healing spell, I just put in an if statement and passed a special value to one of my checkAnswer() arguments.

The Nova Spell does a ton of damage and kills most normal monsters w/ one go.

The Polymorph Monster Spell changes the monster to a very low level one. I need to make that a bit more dynamic so it doesn't always generate a level one monster, but rather a monster lower than the level it already is. I also need to make sure that the spell doesn't work on Boss Monsters.

The Strength Spell ups the damage dealt by the player for one round. I haven't actually tested this yet but it was really simple in theory. It is stackable so the player can cast it more than once and get a bigger boost.

The Time Spell doesn't do anything else other than stop the timer from counting down. It works, it was pretty simple.

The Reduce Terms Spell was kind of tricky but it works well. For everything but division I just divided the terms by 2 and calculated a new answer and put those values into the terms[] array. Then I copied the two lines of code that put the problem onto the screen.

## 11/22/17

### Update

I got inspired to update my character selection screen. I know it wasn't on my list of things to do, but I had a lot of time at work yesterday and I figured out the basic logic I needed. So instead of only having two characters to choose from, there are now a list of seven possibilities. They only show one at a time and the user can click a button on either side of the mage icon to cycle through them. I built in some pretty CSS transition changes to go along with it to make it look like they were moving instead of just changing instantly. 

I cleaned up my file structure. Instead of having a mess of files all in one directory, I've grouped files together by type. I had to do some minor updates to my code after this, but it's totally worth it since now my main directory isn't a hot mess.

Finally, I included a new .rar file with all of my game assets so if anyone wants to see the current state of the game befoe it goes up on some fly-by-night webhost, they can.

### Update 2

I added the functionality for division hints. Like the multiplication hints, there's some code redundancy that I'll need to work out later, but for now it's working and I'm happy with it.

### Update 3

I added the basic functionality for the floor bosses. I have to temporarily resize some elements but I gave them transition animations so it all happens smoothly. I still want to add the functionality for having bosses randomly attack w/ number sequences. I'd also like to add more story elements to the bosses, maybe give them some dialogue.

I went and debugged the hex and cube spells. Both had some odd bugs that I went through and fixed, but both now work properly. I fixed cube spells so they don't work on boss monsters anymore. I also made the range of monsters they could become more dynamic.

I removed the timeDown() function from the scope of the battle() function so that it could be restarted from another function, specifically the polymorph monster function. Now, the timer stops when the spell animation is happening, and resumes when it's over.

### Up next: adding the continue functionality, adding number sequences to potential boss attacks

I want the bosses to do more attacks, like number sequences. I like the random algebra attacks and I want to find more ways to mix it up for the player.

Adding continue functionality will involve using local storage for values that I want to persist.
