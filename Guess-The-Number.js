let targetNumber;
let attemptsLeft;
let score = 0;
let rounds = 0;

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    rounds++;
    document.getElementById('message').innerText = '';
    document.getElementById('score').innerText = `Score: ${score} | Rounds: ${rounds}`;
    guessNumber();
}

function guessNumber() {
    if (attemptsLeft > 0) {
        let userGuess = prompt(`Attempts left: ${attemptsLeft}\nEnter your guess (1-100):`);
        userGuess = parseInt(userGuess);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            guessNumber();
        } else {
            attemptsLeft--;
            if (userGuess === targetNumber) {
                let points = attemptsLeft + 1;
                score += points;
                document.getElementById('message').innerText = `Congratulations! You guessed the number ${targetNumber} in ${10 - attemptsLeft} attempts. You earned ${points} points.`;
                document.getElementById('score').innerText = `Score: ${score} | Rounds: ${rounds}`;
                if (confirm("Do you want to play another round?")) {
                    startGame();
                }
            } else if (userGuess < targetNumber) {
                document.getElementById('message').innerText = `Too low! Try again.`;
                guessNumber();
            } else {
                document.getElementById('message').innerText = `Too high! Try again.`;
                guessNumber();
            }
        }
    } else {