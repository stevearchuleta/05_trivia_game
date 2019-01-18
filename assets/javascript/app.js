//global variables
var time = 20;
var correctAnswers;
var wrongAnswers;
var intervalId;
var questions = 
{
q1 :  ['What does API stand for?'],
answers1: [{a:'b', c:'d', e:'f', g:'h'}],
// },
q2 :  ['What does AJAX stand for?'],
answers2:  [{i:'j', k:'l', m:'n', o:'p'}],
// },
q3 :  ['What does JSON stand for?'],
answers3:  [{q:'r', s:'t', u:'v', w:'x'}],
// },
q4 :  ['What is a REST API?'],
answers4:  [{aa:'bb', cc:'dd', ee:'ff', gg:'hh'}],
// },
q5 :  ['What is the jQuery AJAX method to request data?'],
answers5:  [{ii:'jj', kk:'ll', mm:'nn', oo:'pp'}],
// },
q6 :  ['What does ___________________________________?'],
answers6:  [{qq:'rr', ss:'tt', uu:'vv', ww:'xx'}]
// }
};
console.log(questions.answers4[0].aa);

//functions
function startGame(){

}

function gamePlay(){

  $('.startBtn').on('click', function(){
    $('button').remove('.startBtn');
    quest1();
  });
}

//create newDiv with class= "quest q1"; append newDiv to btn-container; set timer.
function quest1(){
  var newDiv = $('<div class=" quest q1">');
  // var newDiv = $('<div class=" quest q1">');
  newDiv.html(questions.q4);
  $('.btnContainer').append(newDiv);

  intervalId = setInterval(timeCount, 1000);
}


function timeCount(){
  var timeDiv = $('<div class=" remainingTime">');
  timeDiv.html('Time Remaining' + time);
  $('.btnContainer').append(timeDiv);

  time--;
  console.log(time);

  //clear and stop time
  if(time === 0){
    clearInterval(intervalId);
  
  //debug
  console.log(true);
}
}
gamePlay();