const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];

questions = ["1. Who was the first American woman in space? ","2. True or false: 5000 meters = 5 kilometers. ","3. (5+3)/2*10 ","4. Given the array [8, 'orbit', 'Trajectory', 45], what entry is at index 2? ","5. What is the minimum crew for the ISS? "]

correctAnswers = ['Sally Ride','True','40','Trajectory','3'];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Name of Candidate: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (i = 0; i < questions.length; i++) {
  candidateAnswers.push(input.question(questions[i]));
  console.log(`Your answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}\n`)
}

}



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let candidatePoints = 0;
let totalPoints = 5;

for (i = 0; i < candidateAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    candidatePoints += 1;
  }
}

  let grade = candidatePoints / totalPoints * 100;
  
console.log(`Your score: ${grade}%  (${candidatePoints} out of ${totalPoints})`);

if (grade >= 80) {
  console.log("Congratulations! You passed.")
} else {
  console.log("You failed.")
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};