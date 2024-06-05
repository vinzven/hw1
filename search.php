<?php

session_start();
$_SESSION['last_visited'] = $_SERVER['REQUEST_URI'];

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="search.css" />
    <title>@vinzven WP-24</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="icon" href="img/favicon.ico">
    <script src="search.js" defer></script>
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
            <a href="search.php?query=">
                <p>All sneakers</p>
            </a>
            <a href="search.php?query=Nike">
                <p>Nike</p>
            </a>
            <a href="search.php?query=Air Jordan">
                <p>Air Jordan</p>
            </a>
            <a href="search.php?query=Adidas">
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
<a href="profile/logout.php"><p>Logout</p></a>
</div>
';
        } else {
            echo '<div id="logged" class="features" data-t="search">
<a href="login.php"><p id="text-f" data-t="search-text">LOGIN</p></a>
</div>';
        }

        ?>


        <div class="features" data-t="search">
            <a href="sell.php">
                <p id="text-f" data-t="search-text">SELL</p>
            </a>
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

                <a id="sellbtn" href="sell.php"><button id="Sell-button">Sell</button></a>



                <?php

                if (isset($_SESSION['email'])) {
                    echo '<div id="hover-content">
                <a><div>Hi, ' . " " . $_SESSION['name'] . '!</div></a>
                <a href="profile/myProfile.php"><div><i class="fa-regular fa-square-user"></i>Profile</div></a>
                <a href="profile/orders.php"><div><i class="fa-duotone fa-credit-card"></i>Orders</div></a>
                <a href="profile/sellings.php"><div><i class="fa-duotone fa-sack-dollar"></i>Sellings</div></a>
                <a href="profile/logout.php"><div><i class="fa-duotone fa-value-absolute"></i>Logout</div></a>
            </div>';

                } else {
                    echo ' <div id="hover-content">
                <a><div>NOT REGISTERED OR LOGGED?</div></a>
                <a href="login.php"><div><i class="fa-duotone fa-right-to-bracket"></i>Login or register now</div></a>
                </div>';
                }
                ;


                ?>

            </div>

            <div id="search-button">
                <button><img src="img/lentebanner.png"></button>
            </div>

        </section>





        <div id="main-site">

            <div id="dynamic-search" data-display="no" data-type="desktop">

            </div>


            <section id="brands">
                <a href="search.php?query=">All Sneakers</a>
                <a href="search.php?query=Adidas">Adidas</a>
                <a href="search.php?query=Air Jordan">Air Jordan</a>
                <a href="search.php?query=Nike">Nike</a>
                <a href="search.php?query=Yeezy">Yeezy</a>
                <a href="search.php?query=Ugg">Ugg</a>
                <a href="search.php?query=New Balance">New Balance</a>
            </section>


            <div id="banner-container">

                <div id="banner">
                    <img src="img/sneaker banner.jpg">
                </div>

            </div>


            <div id="main-content">

                <div id="text-block">

                    <div id="text">Sneakers</div>
                    <div id="text">Limited edition sneakers are always a must-have for true fashion and sneaker
                        enthusiasts.
                        With high-quality materials and a unique design,
                        these trainers are a real gem for your collection. Get your limited edition sneakers today!
                    </div>

                    <div id="text">
                        <div class="select-container">

                            <select id="sort-select">
                                <option value="popular-shoes">Popular shoes</option>
                                <option value="latest">Latest</option>
                                <option value="price-low-high">Price: Low-High</option>
                                <option value="price-high-low">Price: High-Low</option>
                            </select>

                        </div>

                    </div>

                    <div id="text" class="num-query"></div>


                    <section id="product1">



                        <div class="pro-container">



                        </div>


                    </section>

                </div>

            </div>


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
                    <p>Who i am?</p>
                    <p>Where you can find me</p>
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


</body>



</html>