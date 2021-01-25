// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!

const input = require('readline-sync');

let candidateName = input.question("Please Enter Your Name: ");

let questions = ["True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', "Who was the first American woman in space? ", "What is the minimum crew size for the International Space Station (ISS)? "];

let answers = ["true", "40", "trajectory", "sally ride", "3"]

let candidateAnswer1 = input.question(questions[3]);
let lowerAnswer1 = candidateAnswer1.toLowerCase();
// console.log(candidateAnswer1);


if (answers[3] === lowerAnswer1) {
  console.log(`Question 1: Correctly Answered by ${candidateName}`)
} else {
  console.log(`Question 1: Answered Incorrectly by ${candidateName}`)
}

