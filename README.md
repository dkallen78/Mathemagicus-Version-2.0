# Mathemagicus-Version-2.0

This is a more advanced version of my original Mathemagicus game (will be uploaded later). 

Mathemagicus is a arithmetic drill game (+, -, *, /) with a simple RPG-type interface placed on top of it. 

My assets are almost entirely borrowed and if the game ever sees wide distribution it will need original pixel-art first.

Included in this project are the html, css, and js files. Also included is a .rar file with all the assets used in the game.

### Up next: maybe number rounding or comparisons(\<, \>), eliminating redundancy, three more achievements, expanding keyboard controls, giving monster spells animations

I've got a program that does number rounding that I might put in if I find the right way to implement it. The same thing goes for comparisons, but they're a bit trickier. 

I've also got a lot of code redundancy that I can likely remove. Some of my code is the way it is because it works, not because it's the most effecient way to do things. I want to go through the whole program at a later point and simplify things.

I want three more achievements!

I want the player to be able to use the arrow keys and the enter key to navigate the Liber Mathemagicus.

I would like the monster magic to have its own animation instead of just flashing the screen.

## 12/18/17

### Update

I've added keyboard functionality for the dungeon selection screen! I want to expand it to the book screen next but for now the player can use the arrow keys to choose which dungeon they want to explore!

## 12/17/17

### Update

I added the ability to go through the slow-type text faster by hitting any key. Instead of being forced to wait for the text to finish typing or skipping the intro entirely, the player can now hit any button to make that block of text appear immediately.

I also added functionality to the character select page that allows the player to only use the keyboard to select their character. Instead of needing to use the mouse, they can now use the arrow keys to select the character, and press enter to move on once they have their selection.

## 12/14/17

### Update 2

I added the animation for pyramid/stop time. It took me a bit of tinkering to get it all working but I think it looks very nice. 

### Update

I have added an animation for the star/nova magic! I've learned a lot more about math than I expected to with this animation. I will never forget that cosine and sine correspond to the x and y position of a point on a circle at a given angle. I also learned how to convert radians into degrees to rotate my spark canvas elements to do the spark effect properly.

While this animation is similar to the triangle/fireball animation, I made some helper functions for this animation to make the code a bit cleaner. I plan on going back to the fireball animation at somepoint and applying those helper functions to it.

## 12/12/17

### Update

I created an animation for the pentagon/reduction magic and changed the animation for the fibonacci/hint magic.

For the pentagon magic a string of random numbers and symbols flashes across the problemDiv before displaying the new terms. That wasn't too hard.

For the hint magic animation I made a string of random characters resolve, one by one, into the needed hint. This was sooooo much harder than I thought it would be and it's still not perfect but it's pretty good. The real trouble came when trying to handle the html tags and not displaying those to the screen but displaying everything else. I had to learn a bit of RegExp to get this done and I learned a bit more about string functions in the process. 

## 12/11/17

### Update

I've added animations for hints, square/heal, and hex/strength. I'm not happy with the hint animation but I can work on it more later. It's essentially just a generic equation spinning and shrinking into the hint area. It can be better and it will but It's more than I had before. 

I also added sparks to the triangle/fireball animation to make it look cooler. I haven't been able to line them up precisely on the circles but I'm getting there. The animation runs so quickly that I have a hard time discerning precisely where they line up...

## 12/09/17

### Update

I've put in achievements! Currently I only have nine but I want to bump that up to 12, I just need to think of three more...

The achievements are visible in the Liber Mathemagicus and most have three levels: bronze, silver, and gold. Once the player has earned the achievement, they will be able to see what they did to earn it.

## 11/29/17

### Update

I made a minor change to the way the monsters are displayed in the monster book. Instead of starting at 0, they now start at 1. I thought that starting at 0 would look weird to a player.

## 11/29/17

### Update

I've fixed the minor issue with averaging the time to answer a question.

I found a bug with the individual spell pages of the book that I fixed. The issue had to do w/ passing the wrong value to a function so that the spell book would show more spells than the player had learned. Working with arrays can get confusing...

I did some work w/ \<canvas\> and animating a Fibonacci spiral for my Fibonacci Spell but it didn't turn out as cool as the Triangle/Fireball Spell so I don't think I'm going to pursue that. Working with \<canvas\> isn't as intuitive as some other programming stuff and I need to play w/ it some more. 

## 11/28/17

### Update

I've been playing around with \<canvas\> because I wanted cooler animations for my spells other than just flashing screens. I'll grant that the transparent, colored, flashing overlays are pretty cool, but I wanted something better; so I made it.

I added a \<canvas\> based animation for Euclid's Fireball. The animation draws out the basic construction of an equilateral triangle based on Euclid's famous method. Then I used a hatchet (@keyframes and defining each frame of the animation) to animate a semi-transparent radial gradient on an ::after pseudo-element. Then the screen flashes red like normal. I need to sync up the timing of the gradient and the screen flashes better.

## 11/27/17

### Update 2

I found a big bug I introduced yesterday by changing some of the setAttribute() calls. I fixed that...

I introduced an average time function that keeps track of the average answer time for questions of each type. Since I was doing that, I could also keep track of the total number of questions answered. Then I put all of that onto the Status Page of the Liber Mathemagicus. I still need to work out some style quirks but for the most part I like it. 

### Update

I found a few bugs in the Liber Mathemagicus functionality. Adding the monsters killed counter in the way I did introduced all kinds of weirdness and it's made some of my code hard to read, especially in the book section. One of the easy fixes I made had to do w/ calculating the correct hitpoints of the boss monsters. Somehow I got that wrong, but it's fixed now.

The feature update I made had to do w/ how the terms of the problems are determined. Originally it had to do with the player's level. The higher the player's level, the more difficult a problem could be. Now the variable controlling the potential difficulty of the problems is based on the monster itself. So no matter what level you are, a level one monster is only ever going to produce level one problems.

I also added a feature that changes the border of the \<div\> containing the monster image in the Liber Mathemagicus based on how many of that monster you have killed. I think I'm going to have to modify it though because the first border change happens after you defeat 10 of that type and at addition level 5 I have yet to defeat 10 of any one monster...

I've also begun marking code that could be "deredundified." I swear that's a word and I'm sticking to it.

## 11/26/17

### Update 3

I undertook a bigger challenge than I expected... I wanted to add in a counter to keep track of how many of each monster the player had killed. I thought it would be smart to just keep it in an array w/ the array of monsters that had been killed. I didn't count on that breaking .includes() and .indexOf()... In the end I kept my "clever" idea of keeping the values in the same place as the list of monsters by rewriting my own versions of those functions to search a specific index of the arrays in my array. THEN I had to update my monster page variable calls in my monster book section which was another huge issue.

I also added a cool effect where the damage done to the monster is shown in red on top of his image before slowly fading away while sliding up. I also did the same thing for player damage. Pretty cool looking.

I also got rid of all the .setAttribute calls and replaced them w/ simpler DOM notation like .id = and .className =

### Update 2

I put in the sequence hints functionality. One thing I've noticed about sequences, finding the next number in an incremental sequence is a pain. I'm keeping it for now, but it's tricky; I need to use my stop time functionality to get it in 10 seconds!

### Update

I added number sequences to the game. All monsters can use it for now and it has the same chance of firing as algebra does.

In the addition dungeon I use a simple additive sequence where the numbers increase by the same amount each time.

In the subtraction dungeon I use a subtractive sequence.

In the multiplication dungeon I use an additive incremental sequence where the interval between numbers increases by a set ammount for every consiecutive number.

In the division dungeon I use an additive decremental sequence.

## 11/25/17

### Update 2 (after midnight)

The game is functionally complete, that is, it has all of the basic functionality that I want in it.

The big addition this time is the save and continue functionality. I used local storage to save all the important values and I delete them all whenever a new game is started. I'm sure there's a way around that but it's not important at this point.

I cleaned up a few display bugs that I hadn't noticed before.

I added a button to skip the townIntro() text dialogue.

I added in a function that lets me debug and test easier and put a button for it on the first page but I commented it out for mass consumption.

### Update

I've finished the basic functionality of the book and made it look nice. There are still improvements to be made but it works. 

The individual monster pages was a little tricky but I got it working. There's a dearth of information on those pages so later I will go back and see what else can be added. The next and previous page logic took me a little bit to work out but it works perfectly now.

I made the table of contents page look nicer and put some "links" to the main sections of it.

I made the background images of the pages be randomly generated between four paper textures I made and "down rendered" from images I found of old paper online.

I made a cover for the book with a leather texture cover that I need to sharpen up later.

## 11/24/17

### Update 2 (after midnight)

I have improved the functionality of the monster pages. I can now dynamically generate a table of monsters based on which monsters I've caught. I had originally intended to make four seperate pages for each operation but that would have been too easy/more work. I decided instead to make one function do the work of all four.

### Update: Liber Mathemagicus

I have a working (finally!) spells page that lists all the spells the player has learned and dynamically generates pages that show the stuff that was on the spell scrolls they were shown when getting the spell.

I have the first page of the monster portion of the book that I will work on later because I have real work to do now (sob).

## 11/23/17

### Update

I realized that if I wanted to create save/continue functionality, I needed a place to allow the player to save their game. Since I needed to make a place, I figured I should make a cool place. I'm creating a "book" in the game where the player can see various things about their character. Other than some transition bugs, things are working pretty well.

I created the basic elements of the "book" and the functionality to change the pages with cool css animations (when they work).

I created a status page where the player can see their basic information.

## 11/22/17

### Update 3

I added the basic functionality for the floor bosses. I have to temporarily resize some elements but I gave them transition animations so it all happens smoothly. I still want to add the functionality for having bosses randomly attack w/ number sequences. I'd also like to add more story elements to the bosses, maybe give them some dialogue.

I went and debugged the hex and cube spells. Both had some odd bugs that I went through and fixed, but both now work properly. I fixed cube spells so they don't work on boss monsters anymore. I also made the range of monsters they could become more dynamic.

I removed the timeDown() function from the scope of the battle() function so that it could be restarted from another function, specifically the polymorph monster function. Now, the timer stops when the spell animation is happening, and resumes when it's over.

### Update 2

I added the functionality for division hints. Like the multiplication hints, there's some code redundancy that I'll need to work out later, but for now it's working and I'm happy with it.

### Update

I got inspired to update my character selection screen. I know it wasn't on my list of things to do, but I had a lot of time at work yesterday and I figured out the basic logic I needed. So instead of only having two characters to choose from, there are now a list of seven possibilities. They only show one at a time and the user can click a button on either side of the mage icon to cycle through them. I built in some pretty CSS transition changes to go along with it to make it look like they were moving instead of just changing instantly. 

I cleaned up my file structure. Instead of having a mess of files all in one directory, I've grouped files together by type. I had to do some minor updates to my code after this, but it's totally worth it since now my main directory isn't a hot mess.

Finally, I included a new .rar file with all of my game assets so if anyone wants to see the current state of the game befoe it goes up on some fly-by-night webhost, they can.

## 11/20/17

### Update 2

I finished putting all of the spells into the game.

I fixed the issue I was having with the healing spell, I just put in an if statement and passed a special value to one of my checkAnswer() arguments.

The Nova Spell does a ton of damage and kills most normal monsters w/ one go.

The Polymorph Monster Spell changes the monster to a very low level one. I need to make that a bit more dynamic so it doesn't always generate a level one monster, but rather a monster lower than the level it already is. I also need to make sure that the spell doesn't work on Boss Monsters.

The Strength Spell ups the damage dealt by the player for one round. I haven't actually tested this yet but it was really simple in theory. It is stackable so the player can cast it more than once and get a bigger boost.

The Time Spell doesn't do anything else other than stop the timer from counting down. It works, it was pretty simple.

The Reduce Terms Spell was kind of tricky but it works well. For everything but division I just divided the terms by 2 and calculated a new answer and put those values into the terms[] array. Then I copied the two lines of code that put the problem onto the screen.

### Update

I added functionality for healing spells and nova spells. I haven't made the nova spells accessible yet, but since the function was virtually identical to the fireball spell it was easy to add. 

One problem I have with the healing spell is that it invokes checkAnswer() which automatically generates a damage animation on the enemy when I cast it... I need to find a way to keep that from happening...

## 11/19/17

### Update 3

I added functionality to generate division problems. I used the same formula to get terms as I did for the multiplication problems so it would have the same progression of difficulty.

### Update 2

I added functionality to generate multiplication problems. The formula to determine the multiplier is a bit ugly but it does what I want it to.

I added hint functionality for multiplication problems. There's more redundancy than I would like in the code so I need to go back to it and find a way to remove that.

### Update

I updated the hint functionality to cover subtraction problems. Since I did that, I could also improve the hints for the algebra/missing term problems. 

## 11/18/17

### Update

I added the subtraction functionality in and got it working properly.

I also put in the triangle/fireball spell and some flashing animations for that. I had to modify my checkAnswers() function to accept an additional argument that determines how much damage an attack does.

## 11/17/17

### Update

Added lots of stuff for learning the first spell and making sure it works properly. Short on time, more details later...

## 11/16/17

### Update 3

Added the Algebra spell to the game. It lets the monster randomly change a simple addition problem into a basic missing term problem. The higher the level of the monster, the more likely it is to cast Algebra.

I also included all of the .gif assets for the game in a .rar file

### Update 2 

Added basic boss monster functionality

Added transition effects for the character select screen and the dungeon select screen

Moved the getLevel() function to the global scope

### Update 

Added animations for when the player or the enemy takes damage
