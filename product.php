<?php

session_start();
$_SESSION['last_visited'] = $_SERVER['REQUEST_URI'];

?>


<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="mhw3.css" />
    <title>@vinzven WP-24</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="icon" href="img/favicon.ico">
    <script src="mhw3.js" defer></script>
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

            <div id="dynamic-search" data-display="no">

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

            <div id="content">

                <section id="product-page">

                    <div id="image">

                        <p id="desc"></p>

                        <div id="prod">

                        </div>

                    </div>



                    <div id="size-section">

                        <p id="sel-size">SELECT YOUR SIZE</p>

                        <div id="sizes">


                        </div>

                        <p id="err-sel" class="hidden"><i class="fa-regular fa-circle-exclamation"></i>Please select a
                            size before checking out</p>

                        <div id="sel-valuta">

                            <label for="valuta">Select your <br> currency:</label>
                            <select id="valuta" name="valuta">
                                <option value="EUR">EUR - Euro</option>
                                <option value="USD">USD - US Dollar</option>
                                <option value="GBP">GBP - British Pound</option>
                            </select>

                            <input id="btn-cur" type="button" value="Submit">

                        </div>


                        <div id="checkout" data-disabled="yes">
                            <div>Checkout Powered By</div>
                            <i class="fa-brands fa-stripe"></i>
                        </div>

                        <input type = "hidden" id="productDesc" value="">
                        <input type = "hidden" id="productSize" value="">


                        <div id="infos">
                            <div id="infos-block">
                                <p>Shipping time</p>
                                <p>3-7 working days</p>
                            </div>

                            <div id="infos-block">
                                <p>Shipping costs</p>
                                <p>€20</p>
                            </div>

                            <div id="infos-block">
                                <p>SKU Code</p>
                                <p id="first"></p>
                            </div>

                            <div id="infos-block">
                                <p>Included accessories</p>
                                <p id="second"></p>
                            </div>

                        </div>

                    </div>

                </section>

                <div id="more-infos" class="info-desktop">

                    <div id="more-infos-1">

                        <div data-active="yes" data-n="first"><i class="fa-solid fa-award"></i>100% AUTENTHIC</div>
                        <div data-active="no" data-n="second"> <i class="fa-duotone fa-sparkles"></i>NEW AND UNWORN
                        </div>
                        <div data-active="no" data-n="third"><i class="fa-duotone fa-truck-clock"></i>SHIPPING</div>

                    </div>

                    <div id="text-container">

                        <div id="more-infos-2">
                            Each item is checked and certified by Shoes Heaven specialists. Using tools and knowledge,
                            our technicians can determine if an item is authentic and unworn. Only items deemed 100%
                            authentic are delivered to the buyer.
                        </div>

                    </div>

                </div>

                <div id="more-infos" class="info-mobile">

                    <div id="info-mobile-container">

                        <div data-active="no" data-n="first"><i class="fa-solid fa-award"></i>100% AUTENTHIC</div>

                        <button class="cross-btn" data-btn="on">
                            <div class="bar"></div>
                        </button>

                    </div>

                    <div id="info-mobile-container">

                        <div data-active="no" data-n="second"> <i class="fa-duotone fa-sparkles"></i>NEW AND UNWORN
                        </div>

                        <button class="cross-btn" data-btn="on">
                            <div class="bar"></div>
                        </button>

                    </div>

                    <div id="info-mobile-container">

                        <div data-active="no" data-n="third"><i class="fa-duotone fa-truck-clock"></i>SHIPPING</div>

                        <button class="cross-btn" data-btn="on">
                            <div class="bar"></div>
                        </button>

                    </div>

                </div>

                <div id="further-infos">

                    <div id="block-further">
                        <div><i class="fa-solid fa-s"></i><i class="fa-duotone fa-h"></i></div>
                        <div id="middle-text">How Does It Works?</div>
                        <div id="text-further">
                            Seller ships to Shoes Heaven first. We authenticate. We ship you 100% authentic and new
                            sneakers!
                        </div>
                    </div>

                    <div id="block-further">
                        <div><i class="fa-light fa-headset"></i></div>
                        <div id="middle-text">Client Service</div>
                        <div id="text-further">
                            If you need more help about our products, or other informations, please contact our
                            assistance, through our form.
                        </div>
                    </div>


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