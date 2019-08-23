
var time;
var seconds;
var qCounter = 0;
var currentQuestion;
var correctAnswers;
var wrongAnswers;
var correctAnswer;
var incorrectAnswer;
var answered;
var unanswered;
var userSelect;


var triviaQuestions = 
[{
  question :  '1. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '2. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '3. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '4. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '5. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '6. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '7. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '8. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '9. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '10. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '11. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
},{
  question :  '12. This poisonous species can have white, blue, or pink flowers and is also known by the common name Larkspur.',
  answerList: ['Delphinium', 'Nerium', 'Digitalis', 'Aconitum'],
  answer: 0
}
];

var photoArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12'];

var messages = {
  correct: "Yes, that's correct!",
  incorrect: "No, that's incorrect.",
  endTime: "Time has expired.",
  finished: "Your score tally is..."
}

// START BUTTON
  $('.startBtn').on('click', function() {
    $(this).hide();
    newGame();
  });

  $('#startOverBtn').on('click', function(){
    $(this).hide();
    newGame();
  });

  // PRIME GAME FOR NEW QUESTION
function newGame(){
  $('#finalMessage').empty();
  $('#correctAnswers').empty();
  $('#incorrectAnswers').empty();
  $('#unanswered').empty();
  currentQuestion = 0;
  correctAnswer = 0;
  incorrectAnswer = 0;
  unanswered = 0;
  newQuestion();
}

function newQuestion() {
  $('#message').empty();
  $('#question').empty();
  $('#correctAnswer').empty();
  $('#photo').empty();

  // the 'answered' variable is initiated to true because there is a possibility that the user's time may expire whereupon 'answered' will then be marked as false.
  answered = true;
 
  // WRITE A NUMERIC PROGRESSION OF QUESTIONS to DOM
  $('#currentQuestion').html('Question #' + (currentQuestion + 1) + ' of ' + triviaQuestions.length);
  
  //ADD QUESTION TO DOM
  $('#question').append('<div class= "questionInput">' + triviaQuestions[currentQuestion].question + '</div>');
  
  // ADD ANSWER CHOICES TO DOM
  for ( var i =0; i < 4; i++ ) {
    
    var choices = $('.answerButton');

    choices.attr({'data-index' : i});

    choices.addClass('thisChoice');
    
    if (i === 0) {
      
      $('#choice0').append('<span class="answerValue">' + triviaQuestions[currentQuestion].answerList[i] + '</span>');
      
    } 
    else if (i === 1) {
      
      $('#choice1').append('<span class="answerValue">' + triviaQuestions[currentQuestion].answerList[i] + '</span>');
      
    }
      else if (i === 2) {

        $('#choice2').append('<span class="answerValue">' + triviaQuestions[currentQuestion].answerList[i] + '</span>');
        
      }
      else if (i === 3 ) {
        
        $('#choice3').append('<span class="answerValue">' + triviaQuestions[currentQuestion].answerList[i] + '</span>');
        
      }
    }

    countdown();
   
    // WHEN USER SELECTS 
    $('.thisChoice').on('click', function(){
      userSelect = $(this).data('index');
      clearInterval(time);
      revealAnswer();
    });
  }
  
  function countdown () {
    seconds = 30;
    answered = true;
    time = setInterval(displayCountdown, 1000);
  }
  

  //WRITE TIME to DOM
  function displayCountdown() {
    seconds--;
    $('#timeRemaining').text('Time Remaining:');
    $('#seconds').text(seconds +  ' seconds');
   
    console.log(seconds);
    
      //CLEAR TIME at ZERO SECONDS; SET ANSWERED TO FALSE;
      if(seconds === 0) {
        console.log ('time remaining = ' + seconds);
        clearInterval(time);
        answered = false;
        revealAnswer();
  }
}

function revealAnswer () {
    $('#currentQuestion').empty();
    
    $('.questionInput').empty();
    // $('.questionInput').remove();
    $('.thisChoice').empty();
    //remove answers
    // $('.button').remove();

    
    var correctAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];

    var correctAnswerIndex = triviaQuestions[currentQuestion].answer;

    $('#photo').html('<img src = "assets/images/' + photoArray[currentQuestion] + '.jpeg" width = "400px">');

      // differentiate a correct answer from an incorrect answer from an unanswered answer then write to DOM
      if ((userSelect == correctAnswerIndex) && (answered == true)) {
          correctAnswer++;
          $('message').html(messages.correct);
        
      } else if ((userSelect != correctAnswerIndex) && (answered == true)) {
          incorrectAnswer++;
          $('message').html(messages.incorrect);
          $('#correctAnswer').html('The correct answer was: ' + correctAnswerText);
      } else {
        unanswered++;
        $('message').html(messages.endTime);
        $('#correctAnswer').html('The correct answer was: ' + correctAnswerText);
        answered = true;
      }

      if (currentQuestion == (triviaQuestions.length - 1)) {
        setTimeout(scoreboard, 5000)
      } else {
        currentQuestion++;
        setTimeout(newQuestion, 5000);
      }

    }

function scoreboard () {
  $('#timeRemaining').empty();
  $('#seconds').empty();
  $('#message').empty();
  $('#correctedAnswer').empty();
  $('#photo').empty();

  $('#finalMessage').html(messages.finished);
  $('#correctAnswers').html('Number of Correct Answers: ' + correctAnswer);
  $('#incorrectAnswers').html('Number of Incorrect Answers: ' + incorrectAnswer);
  $('#unanswered').html('Unanswered: ', unanswered);
  $('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Would you like to start over?');

}

  
