// JavaScript code to update the question displayed
let questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "Who wrote 'To Kill a Mockingbird'?",
    "What is the largest ocean on Earth?",
    "What year did the Titanic sink?"
];

// Keep track of the current question
let currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
    const quesElement = document.getElementById("ques");
    quesElement.innerText = questions[currentQuestionIndex];
}

// Function to go to the next question
function next() {
    // Increase the question index
    currentQuestionIndex++;

    // Loop back to the first question if we've reached the end
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }

    // Display the next question
    displayQuestion();
}

// Initial display
displayQuestion();
