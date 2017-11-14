
<!DOCTYPE html>
<html lang="eng">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <!-- CSS files-->
    <?php include("../resources/default_style_sheets.php"); ?>
    <link rel="stylesheet" type="text/css" href="css/index_resume.css" />
    <title>Resume Index Michael M. B.</title>
</head>

<body>
   
<div class="container">
     <div class="row"> 
         <h1  class="page_headings" id="page-header" style="text-decoration: underline;"> Michael's Resume</h1>
    </div>
        <div class="row" >
    <div class="col-sm-5 col-md-5 col-lg-5" dropdown" id="nav_button">
    <button class="btn btn-lg btn-group dropdown-toggle" type="button" id="idex_menu" data-toggle="dropdown">Resume Site Index
    <span class="caret"></span></button>
    
             <ul class="dropdown-menu">
                 <li class="dropdown-header" id="main_dropdown_header">Developer's Resume Information</li>
                 	<li class="dropdown-item"><a href="index.php">Resume Index</a></li>
                    <li class="dropdown-item"><a href="resume_about.php">About Developer</a></li>
                    <li class="dropdown-item"><a href="home.php">Home</a></li>
                    <li class="dropdown-item"><a href="resume_experience.php">Experience</a></li> 
                 <li class="dropdown-header" id="C_dropdown_header">Programs Originally Written in C#</li>
                    <li class="dropdown-item"><a href="guessing_game.php"> Michael's Guessing Game</a></li>
                    <li class="dropdown-item"><a href="simple_calculator.php">Simple Calculator</a></li>
                    <li class="dropdown-item"><a href="calculate_grade.php">Grade Generator</a></li> 
                <li class="dropdown-header" id="python_dropdown_header">Programs Originally in Python</li>
                <li class="dropdown-header" id="other_dropdown_header">Other Programs written to display other Skills</li>
                <li class="dropdown-header" id="java_dropdown_header">Programs Originally in Java</li>
                <li class="dropdown-header" id="capstone_dropdown_header">Capstone Project</li>
             

                <li class="dropdown-header" id="bottom_menu_header">Resume Site Updates/QnA</li>

                

        
            </ul>

    </div>
        </div>
            </div>

    <div id="script_loading">
         <!-- libraries i am loading with an include to make it less cluttered-->
        <?php include("../resources/default_script_loading.php"); ?>
        <!--JavaScript I programmed -->
           
    </div>

</body>
</html>


