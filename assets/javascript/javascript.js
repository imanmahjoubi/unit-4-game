$( document ).ready(function(){
    var audioElement = document.createElement("audio");
    var Random=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(Random);
  var num1= Math.floor(Math.random()*11+1);
  var num2= Math.floor(Math.random()*11+1);
  var num3= Math.floor(Math.random()*11+1);
  var num4= Math.floor(Math.random()*11+1);
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;


$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
      Random=Math.floor(Math.random()*101+19);
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
function youwon(){
    audioElement.setAttribute("src", "assets/sound/win.mp3");
    audioElement.play();
    wins++;
    $('#numberWins').text(wins);
    reset();
}
function youlose(){
    audioElement.setAttribute("src", "assets/sound/gameover.wav");
    audioElement.play();
    losses++;
     $('#numberLosses').text(losses);
    reset()
}
 function eatFood (n){
     audioElement.setAttribute("src", "assets/sound/eat.wav");
     audioElement.play();
     if(n == 1) {userTotal = userTotal + num1;}
     if(n == 2) {userTotal = userTotal + num2;}
     if(n == 3) {userTotal = userTotal + num3;}
     if(n == 4) {userTotal = userTotal + num4;}
     $('#finalTotal').text(userTotal);
     if (userTotal == Random){
         youwon();
         alert("You won!");
     }
     else if ( userTotal > Random){
         youlose();
         alert ("You lose!");

     }
 }
  $('#one').on ('click', function(){
      eatFood(1);
  });

  $('#two').on ('click', function(){
      eatFood(2);
  });
  $('#three').on ('click', function(){
      eatFood(3);
  });
  $('#four').on ('click', function(){
      eatFood(4);
  });   
}); 