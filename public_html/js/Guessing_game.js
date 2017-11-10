var mikes_target = 0; 
var number_of_guesses = 0; 
var guess_count= 0; 





function generate_Michael_Target()
{
  	var randomNumber = Math.floor(Math.random()*99)+1;
  	mikes_target = randomNumber; 
     

	console.log(mikes_target); 
} 

var generate_random_number =  $('#playGuess'); 
generate_random_number.on("click",generate_Michael_Target);

function generate_New_Target()
{

  	var random_new_target = Math.floor(Math.random()*99)+1;
  	mikes_target = random_new_target;
  	 $('#player_input').val(""); 
  	 $('#Michael_number').val("");
     number_of_guesses = 0; 
     guess_count= 0; 
  	 document.getElementById("player_input").disabled = false; 
  	 document.getElementById("clear_guess_Button").disabled = false; 
  	 document.getElementById("guessButton").disabled = false; 
     // $('#play_guessing_game').modal('show');


//
	console.log(mikes_target); 
}
var generate_new_number = $('#new_number'); 
generate_new_number.on("click",generate_New_Target); 

 function player_Guess()
 {
 	
 	  if($('#player_input').val() > 99 || $('#player_input').val() <= 0 )
 	 {
 	 		$('#player_input').val("Sorry Values to guess 1-99"); 
      
 	 		//console.log(mikes_target);
        guess_count++; 
     number_of_guesses=guess_count; 
    console.log("Guess Total "+number_of_guesses);

 	 }
 	 
 	 else if($('#player_input').val() < mikes_target)
 	 {
	 	 	$('#Michael_number').val("Go Higher"); 
	 	 	//console.log(mikes_target); 
     guess_count++; 
     number_of_guesses=guess_count; 
      console.log("Guess Total "+number_of_guesses);
 	 }

 	 else if($('#player_input').val() > mikes_target)
 	 {
 	 		$('#Michael_number').val("Go Lower"); 
     guess_count++; 
     number_of_guesses=guess_count; 
 	 		//console.log(mikes_target);
      console.log("Guess Total "+number_of_guesses);

 	 }
 	  else if($('#player_input').val() == mikes_target)
 	 {
 	 		//$('#Michael_number').val("Congratulations you found Mike's Number"+" "+mikes_target); 
 	 		//console.log(mikes_target);
       guess_count++; 
       number_of_guesses=guess_count; 
      console.log("Guess Total "+number_of_guesses);
      window.alert("It took you"+" "+number_of_guesses+" "+"Guesses to Find Mikes Number: "+mikes_target+"Congratulations"); 
        $('#play_guessing_game').modal('hide');
        $('#player_input').val(""); 
        $('#Michael_number').val("");
         number_of_guesses = 0; 
         guess_count= 0;
         mikes_target = 0;  
         document.getElementById("player_input").disabled = false; 
         document.getElementById("clear_guess_Button").disabled = false; 
         document.getElementById("guessButton").disabled = false; 

      
 	 }

 	 else
 	 {
 	 	$('#player_input').val("Only enter numbers 1-99"); 
 	 	//console.log($('#player_input').val())
     guess_count++; 
     number_of_guesses=guess_count; 
    console.log("Guess Total "+number_of_guesses);

 	 }
 	  
 }
var guess_button = $('#guessButton'); 
guess_button.on("click",player_Guess); 

function clearing_your_Guess()
{

 	$('#player_input').val(""); 

}
var clear_guess = $('#clear_guess_Button'); 
clear_guess.on("click",clearing_your_Guess); 

function getAnwser()
{
	$('#Michael_number').val("Nice try, try again by clicking New Number"+" "+mikes_target); 
	document.getElementById("player_input").disabled = true; 
  	 document.getElementById("clear_guess_Button").disabled = true; 
  	 document.getElementById("guessButton").disabled = true; 
	$('#player_input').val("Field disabled, because you got the answer"); 
  window.alert("You gave up after"+" "+number_of_guesses+" "+"Guesses"); 

	
}
var answer_Button= $('#answerButton'); 
answer_Button.on("click",getAnwser); 

function guessReset()
{
	 $('#player_input').val(""); 
  	$('#Michael_number').val("");
     number_of_guesses = 0; 
     guess_count= 0;
     mikes_target = 0;  
  	 document.getElementById("player_input").disabled = false; 
  	 document.getElementById("clear_guess_Button").disabled = false; 
  	 document.getElementById("guessButton").disabled = false; 

}
var guess_game_X= $('#X'); 
guess_game_X.on("click", guessReset);
var guess_game_close= $('#exitGuess'); 
guess_game_close.on("click",guessReset);

