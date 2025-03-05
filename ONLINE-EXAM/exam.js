let timeLeft = 180; // 3 minutes
const timerElement = document.getElementById('timer');
const submitBtn = document.getElementById('submitBtn');
const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0;

// Timer function
const timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft} seconds`;

    // Auto-submit when time runs out
    if (timeLeft <= 0) {
        clearInterval(timer);
        submitExam();
    }

    // Warning at 1 minute remaining
    if (timeLeft === 60) {
        alert("1 minute remaining!");
    }
}, 1000);

// Manual submit
submitBtn.addEventListener('click', submitExam);

// Submit exam function
function submitExam() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked') ? .value;
    if (selectedAnswer) {
        alert(`Your answer: ${selectedAnswer}`);
        // Move to the next question
        questions[currentQuestionIndex].style.display = 'none';
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].style.display = 'block';
        } else {
            alert("Exam submitted!");
            // Redirect to a results page or profile page
            window.location.href = "profile.html";
        }
    } else {
        alert("Please select an answer before submitting!");
    }
}

// Show the first question
questions[currentQuestionIndex].style.display = 'block';