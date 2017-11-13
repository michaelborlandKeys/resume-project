

 function calculate_Letter_grade()
 {

 	var number_user_entered = $('#grade_input_percentage').val(); 
 	var grade_percentage = $('#grade_input_percentage').val(parseFloat(number_user_entered)); 
 	var regExpression_grade = /^\d{1,3}[.]*\d{0,2}$/; 
 	var letter_grade =$('#grade_output').val() ; 
 	 var gpa = $('#gpa_output').val(); 
 	var valid_form = true; 
 	var storeGrades = [number_user_entered,letter_grade,gpa]; 
 	var temp = storeGrades; 
 	if (regExpression_grade.test(number_user_entered))
 	{
 		valid_form = true; 
 		  $('#grade_input_percentage').val(parseFloat(number_user_entered));
 		      console.log(temp);
            console.log("valid input");

 	} 
 
 else
 {
 	valid_form = false; 
 	$('#grade_input_percentage').val("Invalid input"); 
     console.log("Invalid input");



 }
}
