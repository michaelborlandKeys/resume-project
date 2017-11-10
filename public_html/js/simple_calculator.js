
 var default_number_calculator = 0; 
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
var expression_total =  $('#calculation_2').val(); 


if(operation=="+"){
  expression_total = parseFloat(number_1)+parseFloat(number_2);


}
else if(operation=="-")
{
	  expression_total = parseFloat(number_1)-parseFloat(number_2);
	  

}

else if(operation=="*")
{
	  expression_total = parseFloat(number_1)*parseFloat(number_2);
	   document.getElementById("calculation_2").disabled = true; 

}

else if(operation=="/")
{
	  expression_total = parseFloat(number_1)/parseFloat(number_2);
	   

}
else if(operation=="SQR")
{
	  expression_total = parseFloat(number_1)*number_1;
	  $('#calculation_1').val("");
	   document.getElementById("calculation_1").disabled = true; 
	  
}

else
{
	expression_total= $('#calculation_2').val(0); 

}




 return expression_total= $('#calculation_2').val(expression_total);
       
  
 
	 



}

 function clear_btn()
 {
 	clear="C"
 	if(clear=="C"){
 		$('#calculation_2').val(""); 
 		$('#calculation').val("");
 		$('#calculation_1').val("");
 		 document.getElementById("calculation_1").disabled = false; 


 }
 }
