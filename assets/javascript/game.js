// Here we created an on-click event that responds to button clicks of the crystal image.
$(".babygroup-image").on("click", function() {

	//When the user clicks on the picture...the computer selects a word from the baby-word choices.
	//create an array that lists out all of the options
	var babywordOptions = ["DIAPERS", "BOTTLES", "PACIFIER", "ONESIE", "RATTLE", "PLAYPEN", "STROLLER", "NURSERY", "CRADLE", "NAPTIME"]

	// Computer randomly chooses a word from the options array.
	var computerChoice = babywordOptions[Math.floor(Math.random() * babywordOptions.length)];

	// Clicking the picture triggers an alert message.
	console.log("The computer chose: " + computerChoice);

	//for now - display the computerChoice in the html doc
	document.getElementById("wordBlanks").innerHTML = computerChoice;



  	
//We display a quantity of spaces equivalent to the quantity of letters in the word
	//determine the quantity of letters in the chosen word.

	//display blank spaces equivalent to the quantity of letters in the chosen word.

//On "Key-up" We compare the key selection to the letters in the word
	//capture the key press, convert it to upper case, and save it to a variable
	// var letter =String.fromCharCode (event.keycode).toUpperCase();

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

});
