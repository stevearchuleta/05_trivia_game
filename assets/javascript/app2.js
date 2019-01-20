// NOTE: THE ARRAY OF QUESTIONS BELOW -- AND THE OBJECT FOR THE TRIVIACONTROLLER THAT FOLLOWS THE ARRAY -- WERE WRITTEN PRIOR TO THE FOLLOWING 'POPULATE' FUNCTION.

//
function populate(){
if(trivia.isEnded()) {
  //display scores
  // showScores();
}

else {
    //display question
    var element = document.getElementById('question');
    element.innerHTML = trivia.getQuestionIndex().text;
 
}
}

//function to populate the question
//the following list of questions "sends" three parameters to the Questions function which is located in the questions.js file. Those three parameters are: text, choices, & answer. 
var questions =[
  new Question("Why do we use multiple .js files for one Javascript program?", ["A", "B", "C", "D"], "C"),
  new Question("What is the keyword 'prototype'?",["A", "B", "C", "D"], "A"),
  new Question("What is cursor:pointer in CSS?",["A", "B", "C", "D"], "B"),
  new Question("What does the keyword 'this' mean in Javascript?",["A", "B", "C", "D"], "D"),
  new Question("What is ______________________",["A", "B", "C", "D"], "C")
];

//create an object for this triviaController and use the questions that we just created as a parameter
var trivia = new Trivia(questions);

//call the 'populate' function
populate();
