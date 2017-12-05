<!DOCTYPE html>
<html lang="en">
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">  
  <!-- CSS files-->
  <link rel="stylesheet" href="css/contact_me_form.css">
<head>
	<title>Contact Me </title>
</head>
<body>

	<div  class="container" id="email_page_container">
       <div class="row header_for_email">
        <h1 class="page_headings col-sm-5 col-md-5 col-lg-5""  style="text-decoration: underline;">Send Me a Interview Offer</h1>
        <small>(Have not set up email server for this to send me an email automatically, but i will receive these offers quickly.)</small>
       </div>       
    <div class="row">
        <div class="email_form_structure" id="email_form">

            <form  class="col-sm-3 col-md-6 col-lg-12 C_calculator" name="email_style" id="email_style" >
            	<label class="toResumeAdmin" for="To">To:</label>
                <input disabled type="text" name="To" class="col-sm-1 col-md-1 col-lg-3" id="To" size="65" value="Michael M. Borland">


            </form>
        </div>    
    </div>
</div>



    <?php include("../resources/footer.php") ?>
    <div id="script_loading">
         <!-- libraries i am loading with an include to make it less cluttered-->
        <?php include("../resources/default_script_loading.php"); ?>
        <!--JavaScript I programmed -->
           
    </div>
</body>
</html>