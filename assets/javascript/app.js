//global variables
var time = 20;
var qCounter = 0;
var hiddenImage = false;
var correctAnswers;
var wrongAnswers;
var intervalId;
var questions = 
{
q1 :  ['What does API stand for?'],
q2 :  ['What does AJAX stand for?'],
q3 :  ['What does JSON stand for?'],
q4 :  ['What is a REST API?'],
q5 :  ['What is the jQuery AJAX method to request data?'],
q6 :  ['What does ___________________________________?']
};
var answers = 
{
  answers1:  [{a:'Applied Physics Institute', b:'Associated Press International', c:'Application Program Interface', d:'Aloysius Poindexter Illuminati'}],
  answers2:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
  answers3:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
  answers4:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
  answers5:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
  answers6:  [{a:'a1', b:'b1', c:'c1', d:'d1'}],
};
console.log(questions.q2);
console.log(answers.answers1[0]);

//functions
function startGame(){

}

function gamePlay(){

  $('.startBtn').on('click', function(){
    //hide the start button
    $('.startBtn').hide();
    //removes all buttons with class startBtn
    //$('button').remove('.startBtn');
    timeCount();
    quest1();
    chooseCheckAnswer();
  });
}

function timeCount (){
  time = 7;
  interval = setInterval(timeRemaining, 1000);
  //add a div to btnContainer announcing Time Remaining
  $('.btnContainer').append('<div class="timeRem">' + 'Time Remaining: ' + '<div class="timerCountDown"></div>' + '</div>');
}

//print the time remaining to the DOM. At time === 0, stop timer.
function timeRemaining(){
  //decrement time variable by one
  time--;
  //print time remaining to DOM
  $('.timerCountDown').text(time + ' seconds');
  //test & debug
  console.log(time);
  //once time reaches zero; time === 0
    if(time === 0){
    //test & debug
    console.log ('time =' + time);
    //stop time at zero
    clearInterval(interval);
    //remove button answers
    $('.button').remove();
    //remove question
    $('.questionInput').remove('.timeRem');
    //display correct answer
    disCorAnsw();
    }
  }
    function disCorAnsw (){
    //display correct answer: counter 1 = question 1; counter 2 = question 2;
      if(qCounter === 1){
        var newDiv2 = $('<div class="corAnsw">');
        var correctAnswer = newDiv2.text('Time has expired' + 'The correct answer is ' + answers.answers1[0][3]);
        $('.btnContainer').append(correctAnswer);
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
//create newDiv with class= "quest q1"; append newDiv with current question into btn-container; set timer.
function quest1(){
  qCounter++;
  //add question to question input div
  $('.btnContainer').append('<div class= "questionInput">' + questions.q1 + '</div>');
  //add answers choices
  $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers1[0][1] + '</button>');
  $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers1[0][2] + '</button>');
  $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers1[0][3] + '</button>');
  $('.btnContainer').append('<button class="answerVal" value=1>' + answers.answers1[0][4] + '</button>');
}
  function quest2(){
    qCounter++;
    //add question to question input div
    $('.btnContainer').append('<div class= "questionInput">' + questions.q2 + '</div>');
    //add answers choices
    $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers2[0][1] + '</button>');
    $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers2[0][2] + '</button>');
    $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers2[0][3] + '</button>');
    $('.btnContainer').append('<button class="answerVal" value=1>' + answers.answers2[0][4] + '</button>');

  }
    function chooseCheckAnswer(){ 
      $('button').on('click', function(){
        var checkCorrectAnswer = $(this).attr('value');
        console.log(checkCorrectAnswer);
        clearInterval(interval);
        if(checkCorrectAnswer === 1){
          console.log('Correct');
          $('button').remove();
          $('questionInput').remove();
        
        }  
    });
  }

  // var newDiv = $('<div class=" quest q1">');
  // var newDiv = $('<div class=" quest q1">');
  // newDiv.html(questions.q4);
  // $('.btnContainer').append(newDiv);
  
  // intervalId = setInterval(timeCount, 1000);



//     }
//     $('.btnContainer').append('correctAnswer');
    

//   var timeDiv = $('<div class=" remainingTime">');
//   timeDiv.html('Time Remaining' + time);
//   console.log(time);


//   //clear and stop time
  
//   //debug
//   console.log(true);
gamePlay();
