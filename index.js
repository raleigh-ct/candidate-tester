// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!

const input = require('readline-sync');

let candidateName = input.question("Please Enter Your Name: ");

let questions = ["True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', "Who was the first American woman in space? ", "What is the minimum crew size for the International Space Station (ISS)? "];

let answers = ["true", "40", "trajectory", "sally ride", "3"];

let correctAnswers = 0;
let questionCount = 5;

let candidateAnswers = [];

let percentageGrade = 0;
let status = '';

for (let i=0; i < questions.length; i++) {
candidateAnswers.push(input.question(questions[i]).toLowerCase());

if (answers[i] === candidateAnswers[i]) {
  console.log(`Correctly Answered by ${candidateName}`)
  correctAnswers += 1;
} else {
  console.log(`Answered Incorrectly by ${candidateName}`)
}
}

percentageGrade = (correctAnswers/questionCount) * 100;

if (percentageGrade >= 80) {
  status = "PASSED" 
} else {
  status = "FAILED"
}




console.log(`
Candidate Name: ${candidateName}
1) ${questions[0]}
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${answers[0]}

2) ${questions[1]}
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${answers[1]}

3) ${questions[2]}
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${answers[2]}

4) ${questions[3]}
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${answers[3]}

5) ${questions[4]}
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${answers[4]}

>>> Overall Grade: ${percentageGrade}% (${correctAnswers} of ${questionCount} responses correct) <<<
>>> ${status} <<<
`)