<!DOCTYPE html>
<html lang="eng">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <title>Calculate Letter Grade</title> 
     <?php include("../resources/default_style_sheets.php"); ?>
     <link rel="stylesheet" type="text/css" href="css/calculate_grade.css">
</head>
<body>
	  <?php include("../resources/nav_bar_resume.php"); ?>
	<div class="container">
     <div class="row"> 
         <h1  class="page_headings col-sm-5 col-md-5 col-lg-5" id="page-header" style="text-decoration: underline;">Grade Book</h1>
    </div>
    	 <div class="row  col-sm-3 col-md-6 col-lg-12">
    	 	<h2  class="description_heading" style="text-decoration: underline;">Grade Book Description</h2>
    	 </div>
    	<div class="container">
        	<div class="row col-sm-3 col-md-6 col-lg-12" id= "grade_book_id">
        		<div class="form_grade_book" id="grade_book_section">
        			<div class="grade_book_label">
                <h4 class="col-sm-3 col-md-6 col-lg-12 C_calculator" id="book_heading_label"> Letter Grade Calculator<br /><small><em>(This will give the typical College GPA)</em></small></h4>
            </div>
     			<form class="col-sm-3 col-md-6 col-lg-12" id="grade_book_form">
     				
		     				<label  for="grade_input_percentage" id="input_1_label">Grade Percentage: </label>
		     				<input type="text" class=" input_label" name="grade_input_percentage" id="grade_input_percentage" size=10>
		     				<label  for="grade_output_lettergrade" id="output_1_label"> Your Letter Grade: </label>
		     				<input disabled type="text" class="output_label_2" name="grade_output_lettergrade" id="grade_output" size=2>
		     				<label  for="grade_output_gpa" id="output_2_label"> Your GPA: </label>
		     				<input disabled type="text" class="output_label_2" name="grade_output_gpa" id="gpa_output" size=4>
		     				<button type="button" class="btn btn-sm" id="letter_grade_button" onclick="calculate_Letter_grade()"> Calculate</button>
        				</form>	


        		
        	</div>
        </div>
     </div>  

        </div>
    
  <?php include("../resources/default_script_loading.php"); ?>
  <script src="js/calculate_grade.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>