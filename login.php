<?php
session_start();
if (isset($_SESSION['email'])) {
    header('Location: http://localhost/HW1/source/profile/myProfile.php');
    exit;
}

?>
<!--- clip-path: polygon(50% 5%, 55% 11%, 100% 11%, 100% 100%, 0 100%, 0 11%, 45% 11%); -->


<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="login.css" />
    <title>@vinzven WP-24</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="icon" href="img/favicon.ico">
    <script src="login.js" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css">

</head>

<body>

    <div id="menu-ham" class="menu-hidden">

        <div class="logo-x">
            <a href="http://localhost/HW1/source/index.php"> <img id="logo-menu" src="img/logo-site.png" class="logo"
                    alt=""></a>
            <button class="x-button"></button>
        </div>

        <div id="first-f" class="features" data-t="shop">
            <p id="text-f" data-t="shop">SHOP</p>

            <button class="arrow" data-arrow="on" data-t="shop">
                <div class="bar"></div>
            </button>

        </div>

        <div id="shop-brands" class="ham-desc" data-active="no">
            <a href="http://localhost/HW1/source/search.php?query=">
                <p>All sneakers</p>
            </a>
            <a href="http://localhost/HW1/source/search.php?query=Nike">
                <p>Nike</p>
            </a>
            <a href="http://localhost/HW1/source/search.php?query=Air Jordan">
                <p>Air Jordan</p>
            </a>
            <a href="http://localhost/HW1/source/search.php?query=Adidas">
                <p>Adidas</p>
            </a>
        </div>

        <div id="info" class="features" data-t="info">
            <p id="text-f" data-t="info">INFORMATION</p>

            <button class="arrow" data-arrow="on" data-t="info">
                <div class="bar"></div>
            </button>

        </div>

        <div id="infos-site" class="ham-desc" data-active="no">
            <p>Terms & Conditions</p>
            <p>FAQ</p>
        </div>

        <div class="features" data-t="contact">
            <p id="text-f" data-t="contact">CONTACT US</p>

        </div>

        <?php

        if (!isset($_SESSION['email'])) {
            echo '<div class="features" data-t="search">
             <a href="login.php"><p id="text-f" data-t="search-text">LOGIN</p></a>
             </div>';
        }

        ?>

        <div class="features" data-t="search">
            <p id="text-f" data-t="search-text">SELL</p>
        </div>



    </div>

    <div id="site">

        <div id="mobile-search" data-display="no">

            <div class="container">

                <form id="searchbar">
                    <button id="x-btn"><img id="x" src="img/x2.png"></button>
                    <input id="input-1" type="text" placeholder="Search">
                    <button id="lent" type="submit"><img id="lentes" src="img/lente.png"></button>
                </form>

            </div>

        </div>


        <section id="header" data-display="yes">

            <div id="media-block">

                <div id="tendina">
                    <button class="hamburger"></button>
                </div>

                <a href="http://localhost/HW1/source/index.php"> <img id="SH" src="img/logo-site.png" class="logo"
                        alt=""></a>
                <a href="http://localhost/HW1/source/index.php"> <img id="SH-piccolo" src="img/sh logo.png" class="logo"
                        alt=""></a>

            </div>

            <div class="container">

                <form id="searchbar">

                    <input id="input-2" type="text" placeholder="Search">
                    <button id="btn-lent-search" type="submit"><img id="lentes" src="img/lente.png"></button>
                </form>

            </div>



            <div id="login-sell">

                <a href="login.php"><img id="LG" src="img/blank-logo.png" class="LGstop" alt=""></a>

                <button id="Sell-button">Sell</button>

            </div>

            <div id="search-button">
                <button><img src="img/lentebanner.png"></button>
            </div>

        </section>






        <div id="main-site">

            <div id="dynamic-search" data-display="no" data-type="desktop">

            </div>


            <form id="login-form" name="login-register-form" action="PHPs/check-login.php" method="post">

                <div id="mega-div">

                    <?php

                    if (isset($_SESSION['error'])) {

                        if ($_SESSION['error'] == 1) {

                            echo ' <div id="welcome-message" data-class="register-message" data-type="error">
                                    <div>Registration Failed</div>
                                    <div>Be sure that your registration informations are correct!</div>
                                    <button></button>
                                    </div>';

                        } elseif ($_SESSION['error'] == 2) {

                            echo '<div id="welcome-message" data-class="login-message" data-type="error">
                            <div>Login Failed</div>
                            <div>Be sure that your E-Mail and password are correct!</div>
                            <button></button>
                            </div>';
                        } elseif (($_SESSION['error'] == 3)) {
                            echo '<div id="welcome-message" data-type="registered" data-class="registered">
                              <div>Thank You for your registration!</div>
                              <div>We hope that you can make some good deals and selling your best shoes in our Website!</div>
                                <button></button>
                                </div>';
                        }
                        ;

                        unset($_SESSION['error']);

                    } else {
                        echo '<div id="welcome-message" data-type="welcome">
                              <div>Welcome!</div>
                              <div>Select "Register" if you did not already have a registered profile, otherwise click
                              "Login" for start your session</div>
                                <button></button>
                                </div>';
                    }
                    ;

                    ?>

                    <div id="selezione">
                        <div id="sel-div">
                            <div data-type="register" data-active="yes">Register</div>
                            <div data-type="login" data-active="no">Login</div>
                        </div>
                    </div>


                    <div id="register" data-active="yes">

                        <div id="register-row">
                            <input type="text" placeholder="Name*" name="register-name">
                            <input type="text" placeholder="Surname*" name="register-surname">
                        </div>

                        <input id="mail-send" type="text" placeholder="E-Mail Address*" name="register-email">

                        <div id="mail-checker" class="password-check">

                            <ul class="pass-list">
                                <li id="no-1" class="pass-list-item">Wrong E-Mail format</li>
                                <li id="no-2" class="pass-list-item">E-Mail already used</li>
                                <li id="yes" class="pass-list-item checked">E-Mail available</li>
                            </ul>

                        </div>

                        <div id="pass">

                            <div id="insert-pass" class="pass-box">
                                <input type="password" placeholder="Password*" name="register-password">
                                <i class="fa-duotone fa-eye"></i>
                            </div>

                            <div id="password-verified" class="password-check">

                                <div class="check-title">Password should be</div>

                                <ul class="pass-list">
                                    <li class="pass-list-item">At least 8 character long</li>
                                    <li class="pass-list-item">At least one number</li>
                                    <li class="pass-list-item">At least one lowercase letter</li>
                                    <li class="pass-list-item">At least one uppercase lettere</li>
                                    <li class="pass-list-item">At least one special character</li>
                                </ul>

                            </div>

                            <div id="confirm-pass" class="pass-box">
                                <input type="password" placeholder="Confirm Password*" name="register-confirm-password">
                                <i class="fa-duotone fa-eye"></i>
                            </div>

                            <div id="password-same" class="password-check">

                                <ul class="pass-list">
                                    <li id="no" class="pass-list-item">Passwords do not match</li>
                                    <li id="yes" class="pass-list-item checked">Ok! Passwords now match</li>
                                </ul>

                            </div>

                        </div>

                        <button id="sub-reg" class="sub" type="submit">Register now</button>


                    </div>

                    <div id="login" data-active="no">

                        <input type="text" placeholder="E-Mail Address" name="login-email">

                        <div id="log-pass" class="login-box">
                            <input type="password" placeholder="Password*" name="login-password">
                            <i class="fa-duotone fa-eye"></i>
                        </div>

                        <button id="sub-login" class="sub" type="submit">Login</button>

                    </div>

                    <input id="hid" type="hidden" name="form-type" value="register">


                </div>






            </form>


            <section id="mobile-prefooter">

                <div id="client" class="bar-info">
                    <p>Client Service</p>

                    <button class="cross-btn" data-btn="on">
                        <div class="bar"></div>
                    </button>

                </div>

                <div id="inform" class="bar-info">
                    <p>Informations</p>

                    <button class="cross-btn" data-btn="on">
                        <div class="bar"></div>
                    </button>

                </div>

                <div id="keepup" class="bar-info">
                    <p>Keep updated</p>

                    <button class="cross-btn" data-btn="on">
                        <div class="bar"></div>
                    </button>

                </div>

            </section>

            <div id="pre-footer">

                <div id="infos-pre">
                    <p class="info-footer">Client Service</p>
                    <p>Mon-Fri 8:00am-6.00pm</p>
                    <p>Contacts here!</p>
                </div>

                <div id="infos-pre">
                    <p class="info-footer">Informations</p>
                    <p>Terms & Conditions</p>
                    <p>FAQ</p>
                </div>

                <div id="infos-pre">
                    <p class="info-footer">Keep updated</p>
                    <p>Vincenzo Venezia, University of Catania (DIEEI)</p>
                    <p>Viale Andrea Doria, 6, 95125 Catania CT</p>

                    <div id="icons-pre">
                        <a href="https://www.instagram.com/unictcomunica/"><img id="insta"
                                src="img/Instagram_icon.png.webp"></a>
                        <a href="https://www.dieei.unict.it/"><img id="uni-logo" src="img/Logo+UniCT.png"></a>
                    </div>
                </div>

            </div>

            <section id="footer">
                <p>Site Created by @vinzven - WP 2024</p>
            </section>

        </div>

    </div>


</body>



</html>