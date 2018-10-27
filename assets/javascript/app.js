
$("#gameWrapper").hide()
$("#endScreen").hide()
// Start Screen 
    $("#start").on("click", function() {
      $("#startScreen").hide();
      $("#gameWrapper").show();
      $("#endScreen").hide();
    });

var guessRight=0;
var guessWrong=0;
var guessUnanswered=0;

display();


    $("#done").on("click",function(){

        $("#gameWrapper").hide();
        $("#startScreen").hide();
        $("#endScreen").show();
        var q1=document.myForm.q1.value;
        var q2=document.myForm.q2.value;
        var q3=document.myForm.q3.value;
        var q4=document.myForm.q4.value;
        var q5=document.myForm.q5.value;
        var q6=document.myForm.q6.value;
    
        // q1
        if(q1=="b"){
            right();
        }else{
            wrong();
        }
        // q2
        if(q2=="a"){
            right();
        }else{
            wrong();
        }
        // q3
        if(q3=="d"){
            right();
        }else{
            wrong();
        }
        // q4
        if(q4=="b"){
            right();
        }else{
            wrong();
        }
        // q5
        if(q5=="c"){
            right();
        }else{
            wrong();
        }
        // q6
        if(q6=="d"){
            right();
        }else{
            wrong();
        }
        
        display();
        finished();
    }); 





function display() {
    var right = document.getElementById("right");
    var wrong = document.getElementById("wrong");
    right.innerHTML = guessRight;
    wrong.innerHTML = guessWrong;
  };

  function right() {
    guessRight++;
  };
  
  function wrong() {
    guessWrong++;
  };


//   timer 
var audio = new Audio("assets/images/8bit.wav");


setTimeout(timeUp, 1000 * 120);
setTimeout(finished,1000 *1)

// triggers when player hits done button 
function finished() {
    
    audio.play();
  }

//   if player does not finish quiz before the allowed time
  function timeUp(){
    $("#gameWrapper").hide();
    $("#startScreen").hide();
    $("#endScreen").show();
    var q1=document.myForm.q1.value;
    var q2=document.myForm.q2.value;
    var q3=document.myForm.q3.value;
    var q4=document.myForm.q4.value;
    var q5=document.myForm.q5.value;
    var q6=document.myForm.q6.value;

    // q1
    if(q1=="b"){
        right();
    }else{
        wrong();
    }
    // q2
    if(q2=="a"){
        right();
    }else{
        wrong();
    }
    // q3
    if(q3=="d"){
        right();
    }else{
        wrong();
    }
    // q4
    if(q4=="b"){
        right();
    }else{
        wrong();
    }
    // q5
    if(q5=="c"){
        right();
    }else{
        wrong();
    }
    // q6
    if(q6=="d"){
        right();
    }else{
        wrong();
    }
    
    display();
    finished();

  };