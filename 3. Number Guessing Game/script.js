let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

document.getElementById('checkButton').addEventListener('click', checkGuess);
document.getElementById('restartButton').addEventListener('click', restartGame);

function checkGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');
    const attempts = document.getElementById('attempts');

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attemptsLeft--;
    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number ${randomNumber} correctly!`;
        endGame();
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Your number is too low.';
    } else {
        feedback.textContent = 'Your number is too high.';
    }

    attempts.textContent = `You have ${attemptsLeft} ${attemptsLeft === 1 ? 'chance' : 'chances'} left.`;

    if (attemptsLeft === 0) {
        feedback.textContent = `Game over! The correct number was ${randomNumber}.`;
        endGame();
    }
}

function endGame() {
    document.getElementById('checkButton').disabled = true;
    document.getElementById('restartButton').classList.remove('hidden');
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    document.getElementById('checkButton').disabled = false;
    document.getElementById('restartButton').classList.add('hidden');
    document.getElementById('feedback').textContent = 'Enter your guess:';
    document.getElementById('attempts').textContent = 'You have 10 chances';
    document.getElementById('guessInput').value = '';
}
