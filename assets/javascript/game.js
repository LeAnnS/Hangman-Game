

//When the user presses a key...
alert("hi");
	
//on "Key-dn" We randomly select a word from our word array
//We generate a random number between 0 and 9 (the number of words in our array)

//This array holds all of our baby-word choices
var baby-wordOptions = ["DIAPERS", "BOTTLES", "PACIFIER", "ONESIE", "RATTLE", "PLAYPEN", "STROLLER", "NURSERY", "CRADLE", "NAPTIME" ]

//We display a quantity of spaces equivalent to the quantity of letters in the word

//On "Key-up" We compare the key selection to the letters in the word

	//If selection = yes, the letter IS in the word, we reveal the letter

	//if selection = no, the letter IS NOT in the word, AND is new, 
		//we record the letter in the "already guessed field"
		//we reduce the number of guesses remaining by 1

	//if selection = no, and the letter is in the "already guessed field", 
		//We display the message "Try Another Letter"

//Repeat until
	//All letters in the word are revealed
		//We add +1 to the number of wins
		//We play sound "Baby Giggling"
		//We re-set the game
		//Display message "You Win! - Press Any Key to Play Again!"

	//Number of Guesses Remaining = 0
		//We play sound "Baby Crying"
		//We re-set the game
		//Display message "Press Any Key to Play Again!"
