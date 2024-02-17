// JavaScript code to update the question displayed
let questions = [
    { question: "1.What is the capital of Nepal?", answers:["Pokhara", "Chitwan", "Hetauda", "Kathmandu"], correct: "opt4"},
    {question:"2.What is 2 + 2?", answers:["5", "3", "4", "0"], correct: "opt3"},
    {question:"3.Who is the founder of Apple?", answers:["Sanam Rai", "Elon Musk", "Sharukh khan", "Steve Jobs"], correct: "opt4"},
    {question:"4.React is framework of?", answers:["Python", "JavaScript", "CSS", "Java"], correct: "opt2"},
    {question:"5.What is the first programming language?", answers:["C", "C++", "JAVA", "Plankalkul"], correct: "opt4"}
];

// Keep track of the current question
let currentQuestionIndex = 0;

function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("ques").innerText = questionObj.question;
    questionObj.answers.forEach((answer, index) => {
        document.getElementById("opt" + (index + 1)).innerText = answer;
    });
    resetButtonColors();
}

function next() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Loop back to the first question after the last one
    displayQuestion();
}

function checkAnswer(selectedOptionId) {
    resetButtonColors(); // Reset colors before setting the new ones
    const correctOptionId = questions[currentQuestionIndex].correct;
    if (selectedOptionId === correctOptionId) {
        document.getElementById(correctOptionId).style.backgroundColor = "green";
    } else {
        document.getElementById(selectedOptionId).style.backgroundColor = "red";
        document.getElementById(correctOptionId).style.backgroundColor = "green";
    }
}

function resetButtonColors() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("opt" + i).style.backgroundColor = "";
    }
}

// Initialize the first question on page load
window.onload = displayQuestion;