var inputbox = document.getElementById("inputbox");
var result = document.getElementById("result");
var guesscount = document.getElementById("guesscount");
var noofguess = 3;
var hearts = "❤️❤️❤️";
var randomnumber = Math.floor(Math.random() * 5) + 1; 

function checknumber() {
    if (Number(inputbox.value) === randomnumber) {
        alert("You got it right, congratulations!");
        result.textContent = "You are right!";
    } else {
        noofguess -= 1; 

        if (noofguess === 2) {
            hearts = "❤️❤️"; 
        } else if (noofguess === 1) {
            hearts = "❤️"; 
        } else if (noofguess === 0) {
            hearts="";
            alert("You lost. The generated number was: " + randomnumber);
            inputbox.disabled = true; 
        }

        guesscount.textContent = `Available guesses: ${hearts}`; 
        result.textContent = "You are wrong!"; 
    }
}




