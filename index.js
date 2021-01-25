// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!

const input = require('readline-sync');

let candidateName = input.question("Please Enter Your Name: ");
// console.log(candidateName);
let quizQuestion1 = "True or false: 5000 meters = 5 kilometers. ";
let quizAnswer1 = 'true';
let candidateAnswer1 = input.question(quizQuestion1);
let lowerAnswer1 = candidateAnswer1.toLowerCase();
// console.log(candidateAnswer1);

if (quizAnswer1 === lowerAnswer1) {
  console.log("Question 1: Correctly Answered by " + candidateName)
} else {
  console.log("Question 1: Answered Incorrectly by " + candidateName)
}
