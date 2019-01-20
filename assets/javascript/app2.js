// NOTE: THE ARRAY OF QUESTIONS BELOW -- AND THE OBJECT FOR THE TRIVIACONTROLLER THAT FOLLOWS THE ARRAY -- WERE WRITTEN PRIOR TO THE FOLLOWING 'POPULATE' FUNCTION.

//
function populate(){
if(trivia.isEnded()) {
  //display scores
  showScores();
}

else {
    //display question
    var element = document.getElementById("question");
    element.innerHTML = trivia.getQuestionIndex().text;
 
    //show choices
    var choices = trivia.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++){
        var element = document.getElementById("choice" + i)
        element.innerHTML = choices[i];  
        guess("btn" + i + choices[i]);
      }
      showProgress();
}
};

function guess(id, guess){
  var button = document.getElementById(id);
  button.onclick = function(){
    trivia.guess(guess);
    populate();
    }
  };

  function showProgress(){
    var currentQuestionNumber = triva.getQuestionIndex +1;
    var element = document.getElementById('progress');
    element.innerHTML = "Question " + currentQuestionNumber + "of " + trivia.questions.length;
  }

function showScores(){
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'> Your Scores: " +trivia.scores + "/h2";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

//function to populate the question
//the following list of questions "sends" three parameters to the Questions function which is located in the questions.js file. Those three parameters are: text, choices, & answer. 
var questions =[
  new Question("Why do we use multiple .js files for one Javascript program?", ["A", "B", "C", "D"], "C"),
  new Question("What is the keyword 'prototype'?",["E", "F", "G", "H"], "E"),
  new Question("What is cursor:pointer in CSS?",["I", "J", "K", "L"], "J"),
  new Question("What does the keyword 'this' mean in Javascript?",["M", "N", "O", "P"], "P"),
  new Question("What is ______________________",["Q", "R", "S", "T"], "S")
];

//create an object for this triviaController and use the questions that we just created as a parameter
var trivia = new Trivia(questions);

//call the 'populate' function
populate();
