var  player = window.prompt("Please enter a Username, otherwise a default one will be entered for you.","Player 1");
var theme = "";
var message_trigger="Tyler Borland";
var birthday_trigger="Grandpa";
var birthday_name="Gary Rewalt";
var nickname ="Ty";
var failed_entry="P1"; 
var birthday_audio = document.getElementById("audio_test");
var lastvisited_theme= "";  


function gameTitle()
{ 

	theme="Default Theme"; 

	
	$('#player_input').val(""); 
	$('#Michael_number').val(""); 



 if(player == message_trigger || player == nickname)
  {
      document.getElementById("versus_player").innerHTML= "Michael's Guessing Game";
      document.getElementById("test_player_heading").innerHTML="Current Player:"+" "+player;
      document.getElementById("test_theme_heading").innerHTML="Current Theme:"+" "+theme;
      //birthday_audio.play();
	  window.alert("Hi "+player+" "+"You decided to play at this time"+" "+Date()+" "+"Hope you have Fun");
    
}
else if(player == birthday_trigger || player == birthday_name)
 {
     document.getElementById("versus_player").innerHTML= "Michael's Guessing Game";
     document.getElementById("test_player_heading").innerHTML="Current Player:"+" "+player;
     document.getElementById("test_theme_heading").innerHTML="Current Theme:"+" "+theme;
     window.alert("Hi"+" "+player+" "+" "+"Hope you have Fun playing my Guessing Game, Happy Birthday Love Michael");

 }
	 else if(player.length <= 15  && player.length >= 2)  {
		document.getElementById("versus_player").innerHTML= "Michael's Guessing Game";
		document.getElementById("test_player_heading").innerHTML="Current Player:"+" "+player;
		 document.getElementById("test_theme_heading").innerHTML="Current Theme:"+" "+theme;
		 window.alert("Hi"+" "+player+" "+"have fun playing Michael's Guessing Game"+" "+"on"+" "+Date());

	}
	 
	else
	{
		document.getElementById("versus_player").innerHTML= "Michael's Guessing Game";
		document.getElementById("test_player_heading").innerHTML="Current Player:"+" "+failed_entry;
		 document.getElementById("test_theme_heading").innerHTML="Current Theme:"+" "+$theme;
		window.alert("Failed to enter a Username 2 to 15 long,Retry!");

		
	}
}

var versus_player = $('#playGuess');
versus_player.on("click",gameTitle); 


function defaultTheme()

{

theme="Default Theme"; 



 

	$("#versus_player").css({"color": "#C62D42"});
	$("#test_theme_heading").css({"color": "#C62D42"});
	$("#test_player_heading").css({"color": "#C62D42"});
	$(".modal-header").css({"background-color": "#ffe6e6","border-bottom":"white 1px solid"});
	$(".modal-body").css({"background-color": "#ffe6e6","color":"#C62D42"}); 
	$('.modal-footer').css({"border-color":"white","background-color":"#ffe6e6"}); 
	$('.modal-content').css({"background-color": "#ffe6e6"}); 
	$('.btn').css({"background-color":"white","color":"black"}); 
	$(document).ready(function(){
    	$(".btn").hover(function(){
        	$(this).css({"color": "#C62D42","opacity":".7"});
        	}, function(){
        	$(this).css({"color": "black","opacity":".7"});
    		});
				});
	$(document).ready(function(){
    	$(".close").hover(function(){
        	$(this).css({"color": "black","opacity":".7"});
        	}, function(){
        	$(this).css({"color": "#C62D42","opacity":".7"});
    		});
				});

	// end of css script 

	if(theme=="Default Theme")
	{	
		 
		document.getElementById("versus_player").innerHTML= "Michael's Guessing Game";
		document.getElementById("test_player_heading").innerHTML="Current Player:"+" "+player;
		 document.getElementById("test_theme_heading").innerHTML="Current Theme:"+" "+theme; 

	

	}

}






function halloweenTheme()
{
	//Halloween Theme
	
	 theme="Halloween Theme"; 



	
 
	$("#versus_player").css({"color": "black"});
	$("#test_theme_heading").css({"color": "black"});
	$("#test_player_heading").css({"color": "black"});
	$(".modal-header").css({"background-color": "orange","border-bottom":"black 1px solid"});
	$(".modal-body").css({"background-color": "orange","color":"black"}); 
	$('.modal-footer').css({"border-color":"black","background-color":"orange"}); 
	$('.modal-content').css({"background-color": "orange"}); 
	$('.btn').css({"background-color":"black","color":"white","opacity":"1"}); 
	$(document).ready(function(){
    	$(".btn").hover(function(){
        	$(this).css({"color": "red","opacity":".8"});
        	}, function(){
        	$(this).css({"color": "white","opacity":"1"});
    		});
				});
	$(document).ready(function(){
    	$(".close").hover(function(){
        	$(this).css({"color": "red","opacity":".8"});
        	}, function(){
        	$(this).css({"color": "black","opacity":"1"});
    		});
				});

	// end of css script 

if(theme=="Halloween Theme")
	{
		document.getElementById("versus_player").innerHTML= "Michael's Guessing Game";
		document.getElementById("test_player_heading").innerHTML="Current Player:"+" "+player;
		document.getElementById("test_theme_heading").innerHTML="Current Theme:"+" "+theme; 

	

	}
}

function darkTheme()

{

theme="Dark Theme"; 


 
	$("#versus_player").css({"color": "#fdeb00"});
	$("#test_theme_heading").css({"color": "#fdeb00"});
	$("#test_player_heading").css({"color": "#fdeb00"});
	$(".modal-header").css({"background-color": "black","border-bottom":"white 1px solid"});
	$(".modal-body").css({"background-color": "black","color":"#C62D42"}); 
	$('.modal-footer').css({"border-color":"white","background-color":"black"}); 
	$('.modal-content').css({"background-color": "black"}); 
	$('.btn').css({"background-color":"#C62D42","color":"#fdeb00","opacity":".8"}); 
	$(document).ready(function(){
    	$(".btn").hover(function(){
        	$(this).css({"color": "#fdeb00","opacity":".5"});
        	}, function(){
        	$(this).css({"color": "#fdeb00","opacity":".8"});
    		});
				});
	$(document).ready(function(){
    	$(".close").hover(function(){
        	$(this).css({"color": "#C62D42","opacity":".7"});
        	}, function(){
        	$(this).css({"color": "#fdeb00","opacity":".7"});
    		});
				});

	// end of css script 

	if(theme=="Dark Theme")
	{	
		document.getElementById("versus_player").innerHTML= "Michael's Guessing Game";
		document.getElementById("test_player_heading").innerHTML="Current Player:"+" "+player;
		document.getElementById("test_theme_heading").innerHTML="Current Theme:"+" "+theme; 


	

	}

}
