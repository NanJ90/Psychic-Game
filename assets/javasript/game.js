function computerChoice() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 9; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(computerChoice());

// document.onkeyup=function(event){
// 	var userGuess= event.key;    
//       var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
//       alert(userGuess + computerGuess);
//       $youChose.innerHTML= "<h1>"+ userGuess + "</h1>";
//       $theComputerChose.innerHTML="<h1>"+computerGuess + "</h1>";
// }