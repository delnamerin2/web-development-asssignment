let number = Math.floor(Math.random() * 100);
let guess;
let guesses = [];
console.log(number);
while(true){
    guess = parseInt(prompt("Enter your guess : "));
    if(guess==number){
        alert("You got it right !!!!!");
        alert("Number of guesses taken = "+guesses.length+"\nThe guesses were "+guesses);
        break;
    }
    else if(number-guess>0)
        alert("go a bit higher");
    else    
        alert("Go a bit lower");
    guesses.push(guess);
}
