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
     <?php include("../resources/nav_bar_resume.php"); ?>
	<div  class="container" id="calculator_page_container">
       <div class="row header_for_calculator">
        <h1 class="page_headings col-sm-5 col-md-5 col-lg-5""  style="text-decoration: underline;">Simple Calculator</h1>
       </div> 
       <div class="col-sm-3 col-md-6 col-lg-12 calc_directions" id="calulator_description"> 
        <h2 class="calc_directions">Calculator Description </h2>
       </div>
       <div class="col-sm-3 col-md-6 col-lg-12 rules_calc">
         <h3 class="other_page_headings" id="page_break" style="text-decoration: underline;">Calculator Guidelines</h3> 
         <ol>
             <li></li>
         </ol>
	</div>
        
    <div class="row">
        <div class="calculator_form_structure" id="s_Calculator_form">
            <div class="calculator_label">
                <h4 class="col-sm-3 col-md-6 col-lg-12" id="calc_heading_label">Simple Calculator<br /><small><em>(Single Expression Calculator, Keyboard entry only at the moment)</em></small></h4>
            </div>

            <form  class="col-sm-3 col-md-6 col-lg-12 C_calculator" name="calculator_style" id="calulator_style" >
                <input type="text" name="Test_1" class="col-sm-1 col-md-1 col-lg-3" id="Test_1">

                <select name="operations" id="calculation_3" size=1>
                    <option value="+">+</option>
                     <option value="-">-</option>
                      <option value="*">*</option>
                       <option value="/">/</option>
                        <option value="SQR">SQR</option>
                </select> 
                <label for="calculation_2" id="test"> Answer:</label>
                 <input disabled type="text" name="calculation_2" class="col-sm-1 col-md-1 col-lg-6" id="calculation_2">
                 <input type="text" name="calculation_1" class="col-sm-1 col-md-1 col-lg-3" id="calculation_1">
                <input type="button" class="btn btn-lg btn-group" id="button_clear" value="C" onclick="clear_btn()" > 
                <input type="button" class="btn btn-lg btn-group" id="button_equals" value="=" onclick="calculate()">    
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_7" id="button_7" value="7" onclick="btn_7()">
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_8" id="button_8" value="8" onclick="btn_8()" >
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_9" id="button_9"  value="9" onclick="btn_9()" >
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_4" id="button_4" value="4" onclick="btn_4()" >
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_5" id="button_5" value="5" onclick="btn_5()" >
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_6" id="button_6"  value="6" onclick="btn_6()">
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_1" id="button_1" value="1" onclick="btn_1()" >
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_2" id="button_2" value="2" onclick="btn_2()" >
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_3" id="button_3" value="3" onclick="btn_3()" >
                 <input disabled type="button" class="btn btn-lg btn-group" name="button_0" id="button_0" value="0" onclick="btn_0()" >
                 <input disabled type="button" class="btn btn-lg btn-group" id="button_decimal" value="." onclick="btn_add_decimal()"> 
         


            </form>
        </div>    
    </div>
</div>

 <?php include("../resources/footer.php") ?>
 <div id="script_loading">
   
    <?php include("../resources/default_script_loading.php") ?>
        <!--JavaScript  Files running the front-end application --> 
        <script src="js/simple_calculator.js" type="text/javascript" charset="utf-8"></script>

    </div>
</body>
</html>