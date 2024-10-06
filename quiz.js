// Function to check the answer
function checkAnswer() {
    // Correct answer is "4"
    const correctAnswer = "4";
    
    // Get the selected answer using the name attribute
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Feedback element
    const feedback = document.getElementById("feedback");

    // If no option is selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "red";
        return;
    }

    // Check if the selected answer matches the correct answer
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
