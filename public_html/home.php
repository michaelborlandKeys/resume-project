<!DOCTYPE html>
<html lang="eng">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
         <!-- CSS files-->    
    <?php include("../resources/default_style_sheets.php"); ?>
    <link rel="stylesheet" type="text/css" href="css/undercontruction.css">
	<title>Home</title>
</head>
<body>
<?php include("../resources/nav_bar_resume.php"); ?>

<div class="container">
    <div class="row">
        <div class="homepage_heading">
            <h1 class="page_headings" id="home_page_heading" style="text-decoration: underline;">Michael B.'s Developer Resume Home</h1> 
        </div>

    </div>
      <div class="site_content_summary" id="summary_list">
    <h2 class="site_checklist" id="style_summary">Michael's Resume Site Summary</h2>



        </div>
        
</div>

 <div id="script_loading">
   
    <?php include("../resources/default_script_loading.php") ?>
        <!--JavaScript I programmed --><!-- 
       <script src="js/hovering_style_change.js" type="text/javascript" charset="utf-8" async defer></script>  -->
       <script>
           $( "#summary_list" ).load( "../resources/documents_and_notes/test.html" );
       </script>

  
       
    </div>
</body>
</html>