
 var default_number_calculator = 0; 
/*
  var valid_number = $('#calculation_input_full_simple').val(); 
  var regExpression_Calculator = /^\d{12}$/ ;
  var valid_form = false; 

  function validate_Calculator()
  {
  	 if(regExpression_Calculator.test(valid_number))
        {
            valid_form=true;
          
            console.log("valid input");

        }
        else
        {
            valid_form = false;
          
            $('#calculation_input_full_simple').val("Invalid Input");


        }
  }
   var clickEquals_btn = $('#button_equals_full');
  clickEquals_btn.on("click",validate_Calculator);*/


function btn_1()
{

document.calc_forms.displayNum.value+="1"; 

}

function btn_2()
{
document.calc_forms.displayNum.value+="2"; 

}

function btn_3()
{
	document.calc_forms.displayNum.value+="3"; 

}


function btn_4()
{
	document.calc_forms.displayNum.value+="4"; 

}



function btn_5()
{

document.calc_forms.displayNum.value+="5"; 

}

function btn_6()
{
document.calc_forms.displayNum.value+="6"; 

}

function btn_7()
{
	document.calc_forms.displayNum.value+="7"; 

}


function btn_8()
{
	document.calc_forms.displayNum.value+="8"; 

}
function btn_9()
{
	document.calc_forms.displayNum.value+="9"; 

}


function btn_0()
{
	document.calc_forms.displayNum.value+="0"; 

}

function btn_add_plus(){

	document.calc_forms.displayNum.value += "+"; 
};

function btn_add_decimal(){

	document.calc_forms.displayNum.value += "."; 
};
function btn_add_Minus(){

	document.calc_forms.displayNum.value += "-"; 
};
function btn_add_divide(){

	document.calc_forms.displayNum.value += "/"; 
};
function btn_add_multiply(){

	document.calc_forms.displayNum.value += "*"; 
};

function btn_clearing(){

	document.calc_forms.displayNum.value = ""; 
};


function add_btn_equals() {
//uses eval, which is not recommended for this, i am going to write a proper evaluate method. for short term convenience i am using eval

	var equals_btn = eval(document.calc_forms.displayNum.value); 
	document.calc_forms.displayNum.value = equals_btn;
}



function calculatorStart ()
{
	$('#calculation').val(default_number_calculator); 
	$('#calculation_1').val(default_number_calculator); 
	
}



calculatorStart (); 


function calculate(expression_total)

{
 
  
var number_1 = $('#calculation').val(); 
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
