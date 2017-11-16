
 var default_number_calculator = 0; 
 var first_number=   $('#Test_1').val();
 var second_number= $('#calculation_1').val()







function calculatorStart ()
{
	$('#Test_1').val(default_number_calculator); 
	$('#calculation_1').val(default_number_calculator); 
	
}



calculatorStart (); 







function calculate(expression_total)

{
 
  
var number_1 = $('#Test_1').val(); 
var number_2 = $('#calculation_1').val();

var operation =$('#calculation_3').val();
 expression_total =  $('#calculation_2').val(); 


if(operation=="+"){
  expression_total = parseFloat(number_1)+parseFloat(number_2);
  console.log("Your Expression"+operation+"="+" "+expression_total);



}
else if(operation=="-")
{
	  expression_total = parseFloat(number_1)-parseFloat(number_2);
	  console.log("Your Expression"+operation+"="+" "+expression_total);

	  

}

else if(operation=="*")
{
	  expression_total = parseFloat(number_1)*parseFloat(number_2);
	   document.getElementById("calculation_2").disabled = true; 
	   console.log("Your Expression"+operation+"="+" "+expression_total);


}

else if(operation=="/")
{
	  expression_total = parseFloat(number_1)/parseFloat(number_2);
	  console.log("Your Expression"+operation+"="+" "+expression_total);

	   

}
else if(operation=="SQR")
{
	  expression_total = parseFloat(number_1)*number_1;
	  $('#calculation_1').val("");
	   document.getElementById("calculation_1").disabled = true; 
	   console.log("Your Expression"+operation+"="+" "+expression_total);
	  
}

else
{
	expression_total= $('#calculation_2').val(0); 

}



 return $('#calculation_2').val(expression_total); 
       
  

}


function btn_1()
{

$(document).ready(function(){
    $("button_1").click(function(){
        $("#Test_1").append(function(){
        
        });
    });
});

}

function btn_2()
{
document.getElementById("Test_1").innnerHTML= value+"2"; 

}

function btn_3()
{
	document.calulator_style.calculation.value+="3"; 

}


function btn_4()
{
	document.calulator_style.calculation.value+="4"; 

}



function btn_5()
{

document.calulator_style.calculation.value+="5"; 

}

function btn_6()
{
document.calulator_style.calculation.value+="6"; 

}

function btn_7()
{
	document.calulator_style.calculation.value+="7"; 

}


function btn_8()
{
	document.calulator_style.calculation.value+="8"; 

}
function btn_9()
{
	document.calulator_style.displayNum.value+="9"; 

}


function btn_0()
{
	document.calulator_style.displayNum.value+="0"; 

}

function btn_add_decimal(){

	document.calulator_style.displayNum.value += "."; 
};


 function clear_btn()
 {
 	clear="C";
 	if(clear=="C"){
 		console.log("Calculator Cleared");
 		$('#calculation_2').val(""); 
 		$('#calculation').val("");
 		$('#calculation_1').val("");
 		 document.getElementById("calculation_1").disabled = false; 


 }
 }
