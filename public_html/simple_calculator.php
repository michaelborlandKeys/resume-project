<!DOCTYPE html>
<html lang="eng">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
         <!-- CSS files-->    
    <?php include("../resources/default_style_sheets.php"); ?>   
    <link rel="stylesheet" type="text/css" href="css/simple_calc.css" />
	<title>Simple Calculator</title>
</head>
<body>
	<div  class="container" id="calculator_page_container">
       <div class=" row header_for_calculator">
        <h1 class="default_page_headings" style="text-decoration: underline;">Simple Calculator</h1>
       </div> 
       <div class="col-sm-3 col-md-6 col-lg-12 calc_directions" id="calulator_description"> 
        <h2 class="calc_directions">Calculator Description </h2>
       </div>
       <div class="col-sm-3 col-md-6 col-lg-12 rules_calc">
         <h3 class="other_page_headings" id="page_break" style="text-decoration: underline;">Calculator Guidelines</h3> 
         <p>Test </p>
	</div>
        
    <div class="row">
        <div class="calculator_form_structure" id="s_Calculator_form">
            <div class="calculator_label">
                <h4 class="col-sm-3 col-md-6 col-lg-12 C_calculator" id="calc_heading_label">Simple Calculator<br /><small><em>(No order of operations, calculates in the order entered)</em></small></h4>
            </div>

            <form  class="col-sm-3 col-md-6 col-lg-12 C_calculator C_calculator" id="calulator_style" accept-charset="utf-8">
                <input type="text" name="calculation" class="col-sm-3 col-md-4 col-lg-7" id="calculation">
                <button type="button" class="btn btn-lg btn-group" id="button_7">7</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_8">8</button>
                <button type="button" class="btn btn-lg btn-group" id="button_9">9</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_4">4</button>
                <button type="button" class="btn btn-lg btn-group" id="button_5">5</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_6">6</button>
                <button type="button" class="btn btn-lg btn-group" id="button_3">3</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_2">2</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_1">1</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_0">0</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_decimal">.</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_clear">C</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_equals">=</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_addition">+</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_substraction">-</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_multiplication">*</button> 
                <button type="button" class="btn btn-lg btn-group" id="button_division">/</button> 


            </form>
        </div>    
    </div>
</div>





 <div id="script_loading">
   
    <?php include("../resources/default_script_loading.php") ?>
        <!--JavaScript  Files running the front-end application --> 
        <script src="js/simple_calculator.js" type="text/javascript" charset="utf-8"></script>
    </div>
</body>
</html>