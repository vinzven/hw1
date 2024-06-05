<?php
require 'PHPs/config.php'
    ?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="home.css" />
    <title>@vinzven WP-24</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="icon" href="favicon.ico">
    <script src="home.js" defer></script>

</head>

<body>

    <div id="menu-ham" class="menu-hidden">

        <div class="logo-x">
            <a href="#"> <img id="logo-menu" src="img/logo-site.png" class="logo" alt=""></a>
            <button class="x-button"></button>
        </div>

        <div id="first-f" class="features" data-t="shop">
            <p id="text-f" data-t="shop">SHOP</p>

            <button class="arrow" data-arrow="on" data-t="shop">
                <div class="bar"></div>
            </button>

        </div>

        <div class="features" data-t="info">
            <p id="text-f" data-t="info">INFORMATION</p>

            <button class="arrow" data-arrow="on" data-t="info">
                <div class="bar"></div>
            </button>

        </div>

        <div class="features" data-t="contact">
            <p id="text-f" data-t="contact">CONTACT</p>

        </div>

        <div class="features" data-t="search">
            <p id="text-f" data-t="search-text">SEARCH</p>

        </div>



    </div>

    <div id="site">


        <section id="header">

            <div id="media-block">

                <div id="tendina">
                    <button class="hamburger"></button>
                </div>

                <a href="#"> <img id="SH" src="img/logo-site.png" class="logo" alt=""></a>
                <a href="#"> <img id="SH-piccolo" src="img/sh logo.png" class="logo" alt=""></a>

            </div>

            <div class="container">

                <form id="searchbar">
                    <div class="none"></div>
                    <input type="text" placeholder="Search">
                    <button type="submit"><img id="lentes" src="img/lente.png"></button>
                </form>

            </div>

            <div id="login-sell">

                <a href="#"> <img id="LG" src="img/blank-logo.png" class="LGstop" alt=""></a>

                <button id="Sell-button">Sell</button>

            </div>

        </section>

        <section id="brands">
            <a href="">All Sneakers</a>
            <a href="">Adidas</a>
            <a href="">Air Jordan</a>
            <a href="">Nike</a>
            <a href="">Yeezy</a>
            <a href="">Ugg</a>
            <a href="">New Balance</a>
        </section>

        <!---
        <section id="hero">

            <p id="text-shoes">Nike Dunk SB Low<br> Pro "April"</p>

            <div id="three-button">
                <button id="b-1" class="enabled"></button>
                <button id="b-2" class="disabled"></button>
                <button id="b-3" class="disabled"></button>
            </div>


           <div id="scrollhand">
                <img src="scroll hand GG 2.png">
           </div>

        </section>

        note: backup basic hero 
        --->

        <section id="hero2">

            <div class="wrapper">

                <div class="slider">

                    <p id="textshoe">Nike Dunk SB Low<br> Pro "April"</p>

                    <img id="slideimage" src="img/dunk april.jpeg" draggable="false">

                </div>

                <div class="slider">

                    <p id="textshoe">Jordan 4 x Off-White<br>"Sail"</p>

                    <img id="slideimage" src="img/jordan 4 off.png" draggable="false">

                </div>

                <div class="slider">

                    <p id="textshoe">New Balance 990 v3<br> "JJJJound"</p>

                    <img id="slideimage" src="img/jjjound.png" draggable="false">

                </div>


            </div>

            <div id="tre-buttons">
                <button id="b-1" data-button=0 data-active="enabled"></button>
                <button id="b-2" data-button=1 data-active="disabled"></button>
                <button id="b-3" data-button=2 data-active="disabled"></button>
            </div>

            <div id="scrollhand">
                <img src="img/scroll hand GG 2.png">
            </div>

        </section>


        <section id="product1">
            <h1>Featured Items</h1>

            <div class="pro-container">

                <a id="plink" href="product.php?q=">

                    <div class="pro">

                        <?php
                        $sql = "SELECT img_link FROM scarpe WHERE nome_scarpa like '%Panda%'";
                        $result = $connessione->query($sql);
                        $row = $result->fetch_assoc();
                        echo '<img id="proimg" src="' . ($row['img_link']) . '" alt="">';
                        ?>

                        <div class="desc">

                            <p id="p-name">
                                <?php
                                $sql = "SELECT descrizione FROM scarpe WHERE nome_scarpa like '%Panda%'";
                                $result = $connessione->query($sql);
                                $row = $result->fetch_assoc();
                                echo $row['descrizione'];
                                ?>
                            </p>

                            <p id="price1">-</p>
                        </div>

                    </div>

                </a>

                <div class="pro">
                    <img id="proimg" src="Jordan 4 pine.png" alt="">

                    <div class="desc">
                        <p id="p-name">Jordan 4 SB "Pine Green"</p>
                        <p id="price1">€350</p>
                    </div>

                </div>


                <div class="pro">
                    <img id="proimg" src="travis scott.png" alt="">

                    <div class="desc">
                        <p id="p-name">Jordan 1 Low Travis Scott "Reverse Mocha"</p>
                        <p id="price1">€900</p>
                    </div>

                </div>

                <div class="pro">
                    <img id="proimg" src="slide onyx.png" alt="">

                    <div class="desc">
                        <p id="p-name">Yeezy Slide "Onyx"</p>
                        <p id="price1">€90</p>
                    </div>

                </div>

            </div>

        </section>

        <section id="product1">
            <h1>Latest Items</h1>

            <div class="pro-container">

                <div class="pro">
                    <img id="proimg" src="vivid sulfur.png" alt="">

                    <div class="desc">
                        <p id="p-name">Jordan 4 Retro "Vivid Sulfur"</p>
                        <p id="price1">€240</p>
                    </div>

                </div>

                <div class="pro">
                    <img id="proimg" src="Jordan 4 pine.png" alt="">

                    <div class="desc">
                        <p id="p-name">Jordan 4 SB "Pine Green"</p>
                        <p id="price1">€350</p>
                    </div>

                </div>

                <div class="pro">
                    <img id="proimg" src="pastoral.png" alt="">

                    <div class="desc">
                        <p id="p-name">Nike SB Dunk Low "Pastoral Print"</p>
                        <p id="price1">€140</p>
                    </div>

                </div>

                <div class="pro">
                    <img id="proimg" src="og fluo.png" alt="">

                    <div class="desc">
                        <p id="p-name">Air Max 1 '86 OG 2024</p>
                        <p id="price1">€199</p>
                    </div>

                </div>

            </div>

        </section>

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

        <section id="pre-footer">

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
                    <a href="https://www.instagram.com/unictcomunica/"><img id="insta" src="img/Instagram_icon.png.webp"></a>
                    <a href="https://www.dieei.unict.it/"><img id="uni-logo" src="img/Logo+UniCT.png"></a>
                </div>
            </div>



        </section>

        <section id="footer">
            <p>Site Created by @vinzven - WP 2024</p>
        </section>

    </div>

</body>



</html>