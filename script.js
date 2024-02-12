// JavaScript code to update the question displayed
let questions = [
    "1.What is the capital of Nepal?",
    "2.What is 2 + 2?",
    "3.Who is the founder of Apple?",
    "4.React is framework of?",
    "5.What is the first programming language?"
];

// Array of names to cycle through
let names = [
    ["Pokhara", "Chitwan", "Hetauda", "Kathmandu"],
    ["5", "3", "4", "0"],
    ["Sanam Rai", "Elon Musk", "Sharukh khan", "Steve Jobs"],
    ["Python", "JavaScript", "CSS", "Java"],
    ["C", "C++", "JAVA", "Plankalkul"]
];

// Keep track of the current question
let currentQuestionIndex = 0;

// Variable to keep track of the current set of names
let currentIndex = 0;

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

     // Move to the next set of names
     currentIndex = (currentIndex + 1) % names.length;

     // Update button texts with the new set of names
     document.getElementById("opt1").innerText = names[currentIndex][0];
     document.getElementById("opt2").innerText = names[currentIndex][1];
     document.getElementById("opt3").innerText = names[currentIndex][2];
     document.getElementById("opt4").innerText = names[currentIndex][3];
}



// Initial display
displayQuestion();
