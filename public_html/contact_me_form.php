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
        <div class="contact_me_form" id="contact_me_form">

            <form  class="col-sm-3 col-md-6 col-lg-12 C_calculator" name="contact_offer_form" id="contact_offer_form" >
                  <label class="toResumeAdmin" for="To">Candidate Name&colon;<input disabled type="text" name="To" class="col-sm-1 col-md-1 col-lg-3" id="To" size="13" value="Michael M. Borland"></label>
                  <br />
                    <label class="email_contact" for="developer_email">Candidate Contact Email&colon;<input disabled type="text" name="developer_email"  id="developer_email" size="35" value="mmbprogrammingresume@gmail.com"></label>

                  <br />
                  <label for="company_offer_name">Company Name&colon;<input type="text" name="company_offer_name" id="company_offer_name" placeholder="Exp. Job Interview Offer inc." size="35"></label>
                  <br />
                  <label for="department_name"> Company Department&colon;<input type="text" name="department_name" id="department_name" placeholder="Exp. Information Technology" size="35"></label>
                <?php include("../resources/state_country_form.php") ?>


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