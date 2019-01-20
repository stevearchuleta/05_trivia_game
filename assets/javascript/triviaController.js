//Write a function called Triva and isert a parameter called question.
//Set the parameter question equal to a variable called this.questions.
//This function contains the scores, the question index, and the questions.
function Trivia(questions){
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

//function that aquires the index of the current question
//prototype is a keyword; it ....
Trivia.prototype.getQuestionIndex = function(){
  return this.questions[this.questionIndex]
}

//function that determines if our Trivia Game has ended or not
//prototype is a keyword; it means...
Trivia.prototype.isEnded = function(){
  return this.questions.length === this.questionIndex;
}

//function to determine whether or not the user's guess matches the correct answer
//prototype is a keyword; it means...
//implement the third index of the quesiton... we want to navigate to a new question even if the user has selected the wrong awswer
//if the user's answer is correct, increase the score by 1
Trivia.prototype.guess = function (answer){
  this.questionIndex++;
  if(this.getQuestionIndex().correctAnswer(answer)){
  this.score++;
  }
}