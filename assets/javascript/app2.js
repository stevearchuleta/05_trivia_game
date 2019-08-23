//global variables
// ================================================
var time = 40;

var intervalId;

var hiddenImage = false;

var correctAnswers;

var wrongAnswers;

var qCounter = 0;

var questions = 
{
q1 :  ['This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.'],
q2 :  ['What does stand for?'],
q3 :  ['What does stand for?'],
q4 :  ['What is a ?'],
q5 :  ['What is the ?'],
q6 :  ['What does ___________________________________?']
};

var answers = 
{
  answers1:  [{a:'Delphinium', b:'Nerium', c:'Digitalis', d:'Aconitum'}],
  answers2:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
  answers3:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
  answers4:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
  answers5:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
  answers6:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
};

console.log("questions object with the q1 array: ", questions.q1);
console.log("answers object with the answers1 array's first value: ", answers.answers1[0]);


//functions
// ================================================
function startGame() 
{

}

function gamePlay() {

  $('.startBtn').on('click', function() {
    //detach the start button
    $('.startBtn').detach();
    //removes all buttons with class startBtn
    $('button').remove('.startBtn');
    // timeCount();
    quest1();
    CheckAnswer();
  });

}

function timeCount (){
  time = 40;
  interval = setInterval(timeRemaining, 1000);

  //add a div to btnContainer announcing Time Remaining
  $('.butttonContainer').append('<div class="timeRem">' + 'Time Remaining: ' + '<div class="timerCountDown"></div>' + '</div>');
}

//print the time remaining to the DOM. At time === 0, stop timer.
function timeRemaining() {
  //decrement time variable by one
  time--;
  //print time remaining to DOM
  $('.timerCountDown').text(time + ' seconds');
  //test & debug
    console.log('time: ', time);
  //once time reaches zero; time === 0
    if(time === 0) {
    //test & debug
    console.log ('time remaining at zero: ' + time);
    //stop time at zero
    clearInterval(interval);
    //remove button answers
    $('.button').remove();
    //remove question
    $('.questionInput').remove('.timeRem');
    //display correct answer
    displayCorrectAnswer();
    }
  }










  

//create newDiv with class= "quest q1"; append newDiv with current question into btn-container; set timer.
function quest1() { 
  qCounter++;
  //add question to question input div
  $('#question').append('<div class= "questionInput">' + questions.q1 + '</div>');
  //add answers choices
  $('#choice0').append('<span class="answerVal" value=1>' + answers.answers1[0]['a'] + '</span>');
  $('#choice1').append('<span class="answerVal" value=0>' + answers.answers1[0]['b'] + '</span>');
  $('#choice2').append('<span class="answerVal" value=0>' + answers.answers1[0]['c'] + '</span>');
  $('#choice3').append('<span class="answerVal" value=0>' + answers.answers1[0]['d'] + '</span>');

}

console.log('#choice0: ', $('choice0'));

function CheckAnswer(){ 
  $('.answerButton').on('click', function(event) {
    var checkCorrectAnswer = $(this).value;
      console.log('check Correct Answer Value: ', checkCorrectAnswer);
    clearInterval(interval);
    if(checkCorrectAnswer == 1) {
      console.log('Correct');
      $('.answerVal').remove();
      console.log($('.answerVal').remove());
      $('questionInput').remove();
    
    } 
     
});
}


function displayCorrectAnswer () {
  //display correct answer: counter 1 = question 1; counter 2 = question 2;
    if ( qCounter === 1 ) {
      var newDiv2 = $('<div class="correctAnswer">');
      var correctAnswer = newDiv2.text('Time has expired. ' + 'The correct answer is: ' + answers.answers1[0]['a']);
      $('#progress').append(correctAnswer);
      //remove the correct answer after 5 seconds and also removes the time remaining in order to start the timer again; advance to the next question
      setTimeout(function()
      {
        $('div)').remove('.corAnsw');
        $('div)').remove('.timeRem');
        timeCount();
        quest2();
        chooseCheckAnswer();
      }, 5000);
    };
  }


// NOTE: THE ARRAY OF QUESTIONS BELOW -- AND THE OBJECT FOR THE TRIVIACONTROLLER THAT FOLLOWS THE ARRAY -- WERE WRITTEN PRIOR TO THE FOLLOWING 'POPULATE' FUNCTION.

//



// function populate(){
// if(trivia.isEnded()) {
//   //display scores
//   showScores();
// }

// else {
//     //display question
//     var element = document.getElementById("question");
//     element.innerHTML = trivia.getQuestionIndex().text;
 
//     //show choices
//     var choices = trivia.getQuestionIndex().choices;
//       for(var i = 0; i < choices.length; i++){
//         var element = document.getElementById("choice" + i)
//         element.innerHTML = choices[i];  
//         guess("btn" + i + choices[i]);
//       }
//       showProgress();
// }
// };

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
// var questions =[
//   new Question("Why do we use multiple .js files for one Javascript program?", ["A", "B", "C", "D"], "C"),
//   new Question("What is the keyword 'prototype'?",["E", "F", "G", "H"], "E"),
//   new Question("What is cursor:pointer in CSS?",["I", "J", "K", "L"], "J"),
//   new Question("What does the keyword 'this' mean in Javascript?",["M", "N", "O", "P"], "P"),
//   new Question("What is ______________________",["Q", "R", "S", "T"], "S")
// ];

//create an object for this triviaController and use the questions that we just created as a parameter
var trivia = new Trivia(questions);

//call the 'populate' function
// populate();
gamePlay();