<!DOCTYPE html>
<html lang="eng">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
         <!-- CSS files-->    
    <?php include("../resources/default_style_sheets.php"); ?>
     <!--CSS style script files that give the default theme, if the theme is changed at any point, I use JavaScript to make the changes. -->
        <link rel="stylesheet" type="text/css" href="css/guessing_game.css" />

    <title>Number Guessing Game</title>

</head>
<body>
    
      <?php include("../resources/nav_bar_resume.php"); ?>
    <div class="container" id="page-header">
     <div class="row page_headings"> 
        <h1 style= "text-decoration: underline;">Number Guessing Game</h1></div>
<div class="row">
  <div class=" col-sm-3 col-md-6 col-lg-12" id="game_description">
    <h4 class="below_header_container" style="text-decoration: underline;"> Michael's Guessing Game Description</h4>
    <p> Game Development Started: 10/26/17 Last Updated:11/06/2017</p>
    <p>This Program was originally developed for my elective C# development class, it has been modified for the web and made much more user friendly.
        What has been added in short, form style customization,the number of guesses will be displayed if player presses answer,and once a person gets the correct answer the number of guesses to get the correct number will pop up and then window will close.
        User can enter name to be displayed on the form dynamically and security checks added to prevent some erroneous input.</p>
        <p>This application has the same general functionality that a player guesses and it end once its correct, but greatly modified to give user better experience for the web in JavaScript.
        I've also developed custom alerts for employers,friends and family, and a general greeting that the original application didn't have. Hope everyone enjoys the game, if you have requests, or want information for job purposes use the email provided below. </p>
        <p>Regards,</p>

        <p>Michael</p>

    <h5 style="text-decoration: underline;">Rules</h5>    
    <ol>
        <li>Only Guess Numbers 1-99</li>
    </ol>
</div>
</div>
<div class="row">
    <div class="col-sm-3 col-md-6 col-lg-12" id="play_button">
        <button type="button" id="playGuess" class=" btn btn-lg" data-toggle="modal" data-target="#play_guessing_game">Play Michael's Guessing Game</button>
    </div>
</div>
</div>
    <div class="modal fade" id="play_guessing_game" role="dialog">
        <div class="modal-dialog" style="min-width: 800px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="versus_player">Michael's Guessing Game</h4><br />
                    <h6 id="test_player_heading">Current Player:</h6><br />
                    <h6 id="test_theme_heading">Current Theme:</h6>

                    <button type="button" class="close" id="X" data-dismiss="modal" aria-label="Close">&times;</button>
                </div>
                <div class="form-group">
                    <div class="modal-body">
                        <form>
                            <table>
                                <tr>
                                    <td><label class="label-control" for="player_input">Player's Guess&#58;</label></td>
                                    <td><input type="text" name="player_input" id="player_input" placeholder="e.g Type a Number 1-99" size="43"></td>
                                    <td><button type="button" class="btn btn-group" id="guessButton">Guess</button></td>
                                    <td>
                                </tr>
                                <tr>
                                    <td><label class="label-control" for="Michael_number">Michael's Number&#58;</label></td>
                                    <td><input type="text" name="Michael_number" id="Michael_number" placeholder="How many guesses will it take?" size="43" disabled></td>
                                    <td><button type="button" class="btn btn-group" id="answerButton">Answer</button></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div class="modal-footer" id="themeTracker">


                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="themeDropDownButtons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Custom Themes
                            </button>
                            <div class="dropdown-menu" aria-labelledby="themeDropDownButtons">
                                <button type="button" class="dropdown-item" onclick="defaultTheme()"> Default Theme</button>
                                <button type="button" class="dropdown-item" onclick="halloweenTheme()">Halloween Theme</button>
                            </div>
                        </div>

                        <button type="button" class="btn btn-group" id="clear_guess_Button"> Clear Guess</button><button type="button" class="btn btn-group" id="new_number">New Number</button><button type="button" class="btn btn-group" id="exitGuess" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="script_loading">
        

      <?php include("../resources/default_script_loading.php") ?>
        <!--JavaScript files that run the Program -->
        <script src="js/Guessing_game.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/Guessing_game_themes.js" type="text/javascript" charset="utf-8"></script> 
       
    </div>

</body>
</html>


