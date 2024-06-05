<?php

session_start();

if (!isset($_SESSION['email'])) {
    header('Location: http://localhost/HW1/source/login.php');
}

if (!empty($_SESSION['error'])) {
    echo '<input id="errorHidden" type="hidden" value="' . $_SESSION['error']. '">';
    unset($_SESSION['error']);
}


?>


<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="sell.css" />
    <title>@vinzven WP-24</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="icon" href="img/favicon.ico">
    <script src="sell.js" defer></script>
    <script src="https://js.stripe.com/v3/"></script>
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

        if (isset($_SESSION['email'])) {
            echo '<div id="logged" class="features" data-t="logged">
    <p id="text-f" data-t="logged">HI, ' . " " . strtoupper($_SESSION['name']) . '</p>

    <button class="arrow" data-arrow="on" data-t="logged">
        <div class="bar"></div>
    </button>

</div>

<div id="log-sel" class="ham-desc" data-active="no">
    <a href="profile/myProfile.php"><p>Profile</p></a>
    <a href="profile/orders.php"><p>Orders</p></a>
    <a href="profile/sellings.php"><p>Sellings</p></a>
    <a href="http://localhost/HW1/source/profile/logout.php"><p>Logout</p></a>
</div>
';
        } else {
            echo '<div id="logged" class="features" data-t="search">
    <a href="http://localhost/HW1/source/login.php"><p id="text-f" data-t="search-text">LOGIN</p></a>
</div>';
        }

        ?>


        <div class="features" data-t="search">
            <a href="http://localhost/HW1/source/sell.php">
                <p id="text-f" data-t="search-text">SELL</p>
            </a>
        </div>



    </div>

    <div id="site">


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


            <div id="login-sell">

                <a href="http://localhost/HW1/source/login.php"><img id="LG" src="img/blank-logo.png" class="LGstop"
                        alt=""></a>

                <a id="sellbtn" href="http://localhost/HW1/source/sell.php"><button id="Sell-button">Sell</button></a>

            </div>

        </section>


        <div id="main-site">

            <div id="product">

                <div id="box-product">
                    <div></div>
                    <div></div>
                    <img src="">
                </div>

            </div>

            <div id="selection">

                <div id="box-selection">

                    <div>Please select a product</div>

                    <div>Choose your shoe making attention</div>

                    <div class="container">

                        <form id="searchbar">

                            <input id="input-2" type="text" placeholder="Search">
                            <button id="btn-lent-search"><img id="lentes" src="img/lente.png"></button>
                        </form>

                    </div>

                </div>


            </div>

            <div id="megaform">


                <form id="selling" name="selling" method="post" action="http://localhost/HW1/source/PHPs/sellPoint.php">

                    <div id="shoe-title">Select your size</div>

                    <select id="selectOption" name="selectedOption">
                        <option value="0">Select a size</option>
                    </select>

                    <div id="insert-price">
                        <div>Insert a price in EUROS (€)</div>
                        <div></div>
                    </div>

                    <input id="digitprice" type="text" name="price" placeholder="Insert your price">

                    <div id="alertPrice"></div>

                    <div id="conditions">

                        <div class="condition-box">

                            <div>Selling taxes <i class="fa-light fa-circle-question"></i></div>
                            <div>- 20€</div>

                        </div>

                        <div class="condition-box" id="payout">

                            <div>Your payout</div>
                            <div></div>

                        </div>


                    </div>


                    <input id="hiddenDesc" type="hidden" name="shoe_desc" value="">
                    <input id="hiddenPrice" type="hidden" name="min-price" value=0>

                    <div id="myButtons">
                        <button id="goBack">Undone</button>
                        <button id="sellNow">Sell now</button>
                    </div>

                </form>

            </div>



            <div id="dynamic-search" data-display="no">

            </div>



        </div>

        <section id="mobile-prefooter">

            <div id="bar-info">
                <p>Client Service</p>

                <button class="cross-btn" data-btn="on">
                    <div class="bar"></div>
                </button>

            </div>

            <div id="bar-info">
                <p>Informations</p>

                <button class="cross-btn" data-btn="on">
                    <div class="bar"></div>
                </button>

            </div>

            <div id="bar-info">
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