

 function calculate_Letter_grade()
 {

 	var number_user_entered = $('#grade_input_percentage').val(); 
 	var grade_percentage = $('#grade_input_percentage').val(parseFloat(number_user_entered)); 
 	var regExpression_grade = /^[-]*\d{1,3}[.]*\d{0,2}$/; 
 	var letter_grade =$('#grade_output_lettergrade').val(); 
 	 var gpa = $('#grade_output_gpa').val(); 
 	var valid_form = true; 
 
 	if (regExpression_grade.test(number_user_entered))
 	{
 		valid_form = true; 
 		  $('#grade_input_percentage').val(parseFloat(number_user_entered));
 		    
            console.log("valid input");

 } 	
 else
 {
 	valid_form = false; 
 	$('#grade_input_percentage').val("Invalid input"); 



     console.log("Invalid input");

 }


if(number_user_entered < 0 )
{
	 $('#grade_input_percentage').val("Grade Invalid ")
	  $('#grade_output_lettergrade').val("Try");
	  $('#grade_output_gpa').val("Again!");
	

}

else if (number_user_entered  < 65)
{
	$('#grade_output_lettergrade').val("F");
	$('#grade_output_gpa').val("0.00");

}

else if (number_user_entered <=66 || number_user_entered <=65)
{
	$('#grade_output_lettergrade').val("D");
	$('#grade_output_gpa').val("1.00");

}
else if (number_user_entered <=69 || number_user_entered <=67 )
{
	$('#grade_output_lettergrade').val("D+");
	$('#grade_output_gpa').val("1.30");

}
else if (number_user_entered  <= 72 || number_user_entered <=70)
{
	$('#grade_output_lettergrade').val("C-");
	$('#grade_output_gpa').val("1.70");

}
else if (number_user_entered <=76 || number_user_entered <=73)
{
	$('#grade_output_lettergrade').val("C");
	$('#grade_output_gpa').val("2.00");

}

else if (number_user_entered  <=79 ||  number_user_entered <=77)
{
	$('#grade_output_lettergrade').val("C+");
	$('#grade_output_gpa').val("2.30");

}
else if (number_user_entered <=82 ||  number_user_entered <=80)
{
	$('#grade_output_lettergrade').val("B-");
	$('#grade_output_gpa').val("2.70");

}

else if (number_user_entered  <=86 ||  number_user_entered <=83)
{
	$('#grade_output_lettergrade').val("B");
	$('#grade_output_gpa').val("3.00");

}

else if (number_user_entered <=89 || number_user_entered <=87)
{
	$('#grade_output_lettergrade').val("B+");
	$('#grade_output_gpa').val("3.30");

}

else if (number_user_entered <=92 || number_user_entered <=90)
{
	$('#grade_output_lettergrade').val("A-");
	$('#grade_output_gpa').val("3.70");

}

else if (number_user_entered <=96 || number_user_entered <=93)
{
	$('#grade_output_lettergrade').val("A");
	$('#grade_output_gpa').val("4.00");

}

else if (number_user_entered <=100 || number_user_entered <=97)
{
	$('#grade_output_lettergrade').val("A+");
	$('#grade_output_gpa').val("4.00");

}


else if (number_user_entered >=101 )
{
	  $('#grade_input_percentage').val("Grade Invalid ")
	  $('#grade_output_lettergrade').val("Try");
	  $('#grade_output_gpa').val("Again!");
	
}
else 
{
	  $('#grade_input_percentage').val("Please")
	  $('#grade_output_lettergrade').val("try");
	  $('#grade_output_gpa').val("again!");
	
}

}
function clearGrades ()

{
	  $('#grade_input_percentage').val("")
	  $('#grade_output_lettergrade').val("");
	  $('#grade_output_gpa').val("");

}
