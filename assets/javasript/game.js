var userGuess = document.getElementById("guess");
	
	document.onkeyup = function(event) {
	userGuess.textContent = event.key;

	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var computerChoice = letters[Math.floor(Math.random() * letters.length)];
	console.log(computerChoice);

		}
	