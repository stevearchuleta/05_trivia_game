//The Question function will havce three (3) parameters: the text of the question, the four (4) button choices, and the one (1) correct button answer.
function Question(text, choices, answer){
  //the three (3) parameters are stored inisde these three (3) variables.
  this.text = text;
  this.choices = choices;
  this.answer = answer;
  }
  //Write a function to varify if the correct answer was selected.
  //Becasue the following function is being written above the constructor function, we first select the object name - "Question" - and apply a prototype to it. Set this corrctAnswer prototype funtion equal to a choice function. Choice is the parameter which will eventually equate to a user's click of one (1) of the four (4) choice options.
  Questions.prototype.correctAnswer = function(choice){
  //if the choice is equal to the answer, we will retrun choice === this.answer, meaning that we will return true.
  return choice = this.answer;
  }