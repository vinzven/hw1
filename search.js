//filtro scarpe larghezza dinamica
function setDynamicWidth() {

    const textBlocks = document.querySelectorAll('#text-block #text');
    const proContainer = document.querySelector('.pro-container');

    // Verifica che ci siano almeno tre figli
    if (textBlocks.length >= 3 && proContainer) {
        const thirdChild = textBlocks[2]; // Terzo figlio (Popular shoes)
        const proContainerWidth = proContainer.offsetWidth; // Larghezza del pro-container

        const viewportWidth = window.innerWidth; // Larghezza della viewport
        let newWidth;

        // Calcola la larghezza desiderata
        if (viewportWidth > 1300) {
            newWidth = proContainerWidth - (viewportWidth * 0.05);
            console.log(1)
        } else {
            newWidth = proContainerWidth - (viewportWidth * 0.1);
            console.log(2)
        };

        // Imposta la larghezza del terzo figlio
        thirdChild.style.width = `${newWidth}px`;
    };
}


document.addEventListener('DOMContentLoaded', setDynamicWidth);

window.addEventListener('resize', setDynamicWidth);

//funzione che mi aggiunge le query al div
document.addEventListener('DOMContentLoaded', function () {
    // Leggi l'URL
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const productQuery = params.get('query');
    console.log(productQuery);

        fetch(`http://localhost/HW1/source/PHPs/searchEndPoint.php?query=${productQuery}`)
            .then(response => response.json())
            .then(products => {
                const productList = document.querySelector(".pro-container");
                document.querySelector('.num-query').textContent=`${products.length} risultati trovati`;
                products.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.classList.add("pro");
                    // Dichiarazione di priceP come const all'interno del ciclo forEach
                    const priceP = (product.minprice == 0) ? "SOLD OUT" : "€" + product.minprice;
    
                    productItem.innerHTML = `
                        <img id="proimg" src="${product.img_link}" alt="">
    
                        <div class="desc">
                            <p id="p-name">${product.descrizione}</p>
                            <p id="price1">${priceP}</p>
                        </div>
                    `;
                    productList.appendChild(productItem);
                });
    
                // redirect
                document.querySelectorAll('.pro').forEach(function (element) {
                    element.addEventListener('click', function () {
                        const shoeName = element.querySelector('#p-name').textContent;
                        window.location.href = 'product.php?q=' + shoeName;
                    });
                });
            })
            .catch(error => console.error('Errore:', error));
});

//funzione che mi ordina il div
document.querySelector('#sort-select').addEventListener('change', function () {
    // Leggi l'URL
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const productQuery = params.get('query');
    console.log(productQuery);

    const selectedQuery = this.value;

        fetch(`http://localhost/HW1/source/PHPs/searchEndPoint.php?query=${productQuery}&sort=${selectedQuery}`)
            .then(response => response.json())
            .then(products => {
                const productList = document.querySelector(".pro-container");
                productList.innerHTML=``;
                document.querySelector('.num-query').textContent=`${products.length} risultati trovati`;
                products.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.classList.add("pro");
    
                    // Dichiarazione di priceP come const all'interno del ciclo forEach
                    const priceP = (product.minprice == 0) ? "SOLD OUT" : "€" + product.minprice;
    
                    productItem.innerHTML = `
                        <img id="proimg" src="${product.img_link}" alt="">
    
                        <div class="desc">
                            <p id="p-name">${product.descrizione}</p>
                            <p id="price1">${priceP}</p>
                        </div>
                    `;
                    productList.appendChild(productItem);
                });
    
                // redirect
                document.querySelectorAll('.pro').forEach(function (element) {
                    element.addEventListener('click', function () {
                        const shoeName = element.querySelector('#p-name').textContent;
                        window.location.href = 'product.php?q=' + shoeName;
                    });
                });
            })
            .catch(error => console.error('Errore:', error));
});

//altri script per il funzionamento


/*hover su login icon*/
function onHoverIcon(event) {
    const login_icon = event.currentTarget;
    login_icon.classList.add('LGgo');
    login_icon.classList.remove('LGstop');

}

function offHoverIcon(event) {
    const login_icon = event.currentTarget;
    login_icon.classList.add('LGstop');
    login_icon.classList.remove('LGgo');

}


const login_icon = document.querySelector("#LG");
login_icon.addEventListener('mouseover', onHoverIcon);
login_icon.addEventListener('mouseout', offHoverIcon);



/* menu a tendina per mobile,click open su .hamburger,close su .x-button */
function hamClick(e) {
    const target = e.currentTarget;
    document.querySelector("#menu-ham").classList.remove('menu-hidden');
    document.querySelector("#menu-ham").classList.add('menu-not-hidden');
    document.querySelector("body").classList.add('site-menu');
    document.querySelector("#site").style.pointerEvents = "none";

    const newImage = document.createElement('img');

    newImage.src = "img/Senza nome.png";

    newImage.id = 'cover';

    const parent = document.querySelector('#site');
    if (window.innerWidth > 620) parent.appendChild(newImage);

};


function xClick(e) {
    const target = e.currentTarget;
    document.querySelector("#menu-ham").classList.remove('menu-not-hidden');
    document.querySelector("#menu-ham").classList.add('menu-hidden');
    document.querySelector("body").classList.remove('site-menu');
    document.querySelector("#site").style.pointerEvents = "auto";

    const parent = document.querySelector('#site');
    const imageRemove = document.querySelector('#cover');
    if (window.innerWidth > 620 && parent.contains(imageRemove)) parent.removeChild(imageRemove);

    const f = document.querySelector("#first-f");
    const features = document.querySelectorAll(".features").forEach(feature => {
        feature.querySelector('#text-f').style.color = "rgb(208, 227, 244)"
    });

    f.querySelector(".arrow").dataset.arrow = "on";
    f.querySelector('#text-f').style.color = "rgb(208, 227, 244)";
    if (document.querySelector('#info').querySelector(".arrow").dataset.arrow == "off")
        document.querySelector('#info').querySelector(".arrow").dataset.arrow = "on";
    document.querySelector("#shop-brands").dataset.active = "no";
    document.querySelector("#infos-site").dataset.active = "no";
    document.querySelector("#log-sel").dataset.active = "no";

};


const ham_btn = document.querySelector(".hamburger");
const x_btn = document.querySelector(".x-button");

ham_btn.addEventListener("click", hamClick);
x_btn.addEventListener("click", xClick);

function onArrow(e) {
    const t = e.currentTarget;
    const ar = t.querySelector(".arrow");
    const text = t.querySelector("#text-f");

    if (t.dataset.t == "info") {

        if (ar.dataset.arrow == "on") {
            ar.dataset.arrow = "off";
            text.style.color = "rgb(199, 138, 230)";
            document.querySelector("#infos-site").dataset.active = "yes";
        } else if (ar.dataset.arrow == "off") {
            ar.dataset.arrow = "on";
            text.style.color = "rgb(208, 227, 244)";
            document.querySelector("#infos-site").dataset.active = "no";
        }
    }

    if (t.dataset.t == "shop") {

        if (ar.dataset.arrow == "on") {
            ar.dataset.arrow = "off";
            text.style.color = "rgb(199, 138, 230)";
            document.querySelector("#shop-brands").dataset.active = "yes";
        } else if (ar.dataset.arrow == "off") {
            ar.dataset.arrow = "on";
            text.style.color = "rgb(208, 227, 244)";
            document.querySelector("#shop-brands").dataset.active = "no";
        }
    }

    if (t.dataset.t == "logged") {

        if (ar.dataset.arrow == "on") {
            ar.dataset.arrow = "off";
            text.style.color = "rgb(199, 138, 230)";
            document.querySelector("#log-sel").dataset.active = "yes";
        } else if (ar.dataset.arrow == "off") {
            ar.dataset.arrow = "on";
            text.style.color = "rgb(208, 227, 244)";
            document.querySelector("#log-sel").dataset.active = "no";
        }
    }



}




const features = document.querySelectorAll(".features");
features.forEach((feature) => {
    feature.addEventListener("click", onArrow);
});



//posizionamento ricerca
function positionFixedElement() {
    const searchBar = document.querySelector('#header #searchbar input');
    const fixedElement = document.querySelector('#dynamic-search');

    // Calcola la posizione orizzontale dell'input
    const inputRect = searchBar.getBoundingClientRect();
    const inputCenterX = inputRect.left + (inputRect.width / 2);

    // Posiziona il div fisso
    fixedElement.style.left = `${inputCenterX}px`;
}

// Posiziona l'elemento fisso all'inizializzazione
setInterval(function () {
    if (document.querySelector('#header').dataset.display == "yes") positionFixedElement();
}, 10);




// Aggiorna la posizione dell'elemento fisso quando la finestra viene ridimensionata

window.addEventListener('resize', function () {
    if (document.querySelector('#header').dataset.display == "yes") positionFixedElement();
});

//ricerca dinamica

const searchInput = document.querySelector('#header #searchbar').querySelector('input');
const myDiv = document.querySelector("#dynamic-search");


searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    if (query.length > 0 && (document.querySelector('#header').dataset.display == "yes")) {
        fetch(`http://localhost/HW1/source/PHPs/dynamicSearchEndPoint.php?query=${(query)}`)
            .then(response => response.json())
            .then(data => {

                myDiv.innerHTML = ''; // Rimuovi tutti i risultati precedenti
                console.log(data);
                if (data.length > 0) {
                    myDiv.dataset.display = "yes";
                    if(window.innerWidth >999 ) myDiv.dataset.type="desktop";

                    data.forEach(item => {
                        const priceP = (item.minprice == 0) ? "SOLD OUT" : ("€" + item.minprice);
                        const resultItem = `
                        <div id="dynamic-box">
                            <img src="${item.img_link}" alt="">
                            <div id="dynamic-text">
                                <p id="nome">${item.descrizione}</p>
                                <p id="min-price">${priceP}</p>
                            </div>
                        </div>
                        `;
                        myDiv.innerHTML += resultItem; // Aggiungi il nuovo risultato
                    });

                    document.querySelectorAll('#dynamic-box').forEach(function (element) {
                        element.addEventListener('click', function () {
                            const shoeName = element.querySelector('#nome').textContent;
                            window.location.href = 'product.php?q=' + shoeName;
                        });

                        const scrollContainer = document.querySelector('#dynamic-search');
                        let startX, startY, initialScrollLeft, initialScrollTop;

                        scrollContainer.addEventListener('touchstart', function (e) {
                            const touch = e.touches[0];
                            startX = touch.pageX - scrollContainer.offsetLeft;
                            startY = touch.pageY - scrollContainer.offsetTop;
                            initialScrollLeft = scrollContainer.scrollLeft;
                            initialScrollTop = scrollContainer.scrollTop;
                        });

                        scrollContainer.addEventListener('touchmove', function (e) {
                            e.preventDefault(); // Prevent default to avoid page scrolling
                            const touch = e.touches[0];
                            const moveX = touch.pageX - scrollContainer.offsetLeft - startX;
                            const moveY = touch.pageY - scrollContainer.offsetTop - startY;
                            scrollContainer.scrollLeft = initialScrollLeft - moveX;
                            scrollContainer.scrollTop = initialScrollTop - moveY;
                        });

                    });
                } else {
                    myDiv.dataset.display = "yes";
                    myDiv.innerHTML = '<p id="nome">Nessun risultato trovato.</p>';
                }
            }).catch(error => console.error('Errore:', error));

    } else {
        myDiv.innerHTML = ''; // Se l'input è vuoto, svuota i risultati
        myDiv.dataset.display = "no";
    }
});



//posizionamento ricerca mobile
function positionFixedElementMobile() {
    const searchBar = document.querySelector('#mobile-search #searchbar input');
    const fixedElement = document.querySelector('#dynamic-search');

    // Calcola la posizione orizzontale dell'input
    const inputRect = searchBar.getBoundingClientRect();
    const inputCenterX = inputRect.left + (inputRect.width / 2);

    // Posiziona il div fisso
    fixedElement.style.left = `${inputCenterX}px`;
}

// Posiziona l'elemento fisso all'inizializzazione
setInterval(function () {
    if (document.querySelector('#mobile-search').dataset.display == "yes") positionFixedElementMobile();
}, 10);

// Aggiorna la posizione dell'elemento fisso quando la finestra viene ridimensionata
window.addEventListener('resize', function () {
    if (document.querySelector('#mobile-search').dataset.display == "yes") positionFixedElementMobile();
});


//ricerca dinamica

const searchInputMobile = document.querySelector('#mobile-search #searchbar').querySelector('input');

searchInputMobile.addEventListener('input', () => {
    const query = searchInputMobile.value;
    if (query.length > 0 && document.querySelector('#mobile-search').dataset.display == "yes") {
        fetch(`http://localhost/HW1/source/PHPs/dynamicSearchEndPoint.php?query=${(query)}`)
            .then(response => response.json())
            .then(data => {

                myDiv.innerHTML = ''; // Rimuovi tutti i risultati precedenti
                console.log(data);
                if (data.length > 0) {
                    myDiv.dataset.display = "yes";
                    myDiv.dataset.type = "mobile";

                    data.forEach(item => {
                        const priceP = (item.minprice == 0) ? "SOLD OUT" : ("€" + item.minprice);
                        const resultItem = `
                        <div id="dynamic-box">
                            <img src="${item.img_link}" alt="">
                            <div id="dynamic-text">
                                <p id="nome">${item.descrizione}</p>
                                <p id="min-price">${priceP}</p>
                            </div>
                        </div>
                        `;
                        myDiv.innerHTML += resultItem; // Aggiungi il nuovo risultato
                    });

                    document.querySelectorAll('#dynamic-box').forEach(function (element) {
                        element.addEventListener('click', function () {
                            const shoeName = element.querySelector('#nome').textContent;
                            window.location.href = 'product.php?q=' + shoeName;
                        });

                        const scrollContainer = document.querySelector('#dynamic-search');
                        let startX, startY, initialScrollLeft, initialScrollTop;

                        scrollContainer.addEventListener('touchstart', function (e) {
                            const touch = e.touches[0];
                            startX = touch.pageX - scrollContainer.offsetLeft;
                            startY = touch.pageY - scrollContainer.offsetTop;
                            initialScrollLeft = scrollContainer.scrollLeft;
                            initialScrollTop = scrollContainer.scrollTop;
                        });

                        scrollContainer.addEventListener('touchmove', function (e) {
                            e.preventDefault(); // Prevent default to avoid page scrolling
                            const touch = e.touches[0];
                            const moveX = touch.pageX - scrollContainer.offsetLeft - startX;
                            const moveY = touch.pageY - scrollContainer.offsetTop - startY;
                            scrollContainer.scrollLeft = initialScrollLeft - moveX;
                            scrollContainer.scrollTop = initialScrollTop - moveY;
                        });

                    });
                } else {
                    myDiv.dataset.display = "yes";
                    myDiv.innerHTML = '<p id="nome">Nessun risultato trovato.</p>';
                }
            }).catch(error => console.error('Errore:', error));

    } else {
        myDiv.innerHTML = ''; // Se l'input è vuoto, svuota i risultati
        myDiv.dataset.display = "no";
    }
});


//barra di ricerca mobile
document.querySelector('#search-button').querySelector('button').addEventListener('click', function () {
    document.querySelector('#header').dataset.display = "no";
    document.querySelector('#mobile-search').dataset.display = "yes";

});

document.querySelector('#x-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#header').dataset.display = "yes";
    document.querySelector('#mobile-search').dataset.display = "no";
    document.querySelector('#dynamic-search').dataset.display="no";
    document.querySelector('#mobile-search').querySelector('input').value="";

});



//disattiva cose che non si devono vedere da mobile o desktop (620-999px)
window.addEventListener('resize', function () {
    if (window.innerWidth > 999) {


        if (document.querySelector('#menu-ham').classList.contains('menu-not-hidden') && window.innerWidth > 999) {
            window.addEventListener('resize', function (e) {
                const target = e.currentTarget;
                if (target.innerWidth < 999) return;

                document.querySelector("#menu-ham").classList.remove('menu-not-hidden');
                document.querySelector("#menu-ham").classList.add('menu-hidden');
                document.querySelector("body").classList.remove('site-menu');
                document.querySelector("#site").style.pointerEvents = "auto";

                const parent = document.querySelector('#site');
                const imageRemove = document.querySelector('#cover');
                if (parent.contains(imageRemove)) parent.removeChild(imageRemove);

                const features = document.querySelectorAll(".features");
                features.forEach(feature => {
                    const arrow = feature.querySelector(".arrow");
                    const textF = feature.querySelector('#text-f');
                    
                    if (arrow) {
                        arrow.dataset.arrow = "on";
                    }
                    
                    if (textF) {
                        textF.style.color = "rgb(208, 227, 244)";
                    }
                });
                
               
                document.querySelector("#shop-brands").dataset.active = "no";
                document.querySelector("#infos-site").dataset.active = "no";
                if(document.querySelector('#logged').dataset.t =="logged")
                    document.querySelector("#log-sel").dataset.active = "no";
            });
        };

        window.addEventListener('resize', function () {

            if (window.innerWidth > 999 && document.querySelector('#mobile-search').dataset.display == "yes") {
                document.querySelector('#mobile-search').dataset.display = "no";
                document.querySelector('#header').dataset.display = "yes";
            };

            if (window.innerWidth < 999 && document.querySelector('#dynamic-search').dataset.display == "yes" &&
                document.querySelector('#dynamic-search').dataset.type == "desktop") {
                document.querySelector('#dynamic-search').dataset.display = "no";
                document.querySelector('#header #searchbar').querySelector('input').value = "";

            };

            if (window.innerWidth > 999 & document.querySelector('#mobile-search').dataset.display == 'yes') {
                document.querySelector('#mobile-search').dataset.display = 'no';
            };


        });

    };

    if (window.innerWidth < 999) {

        window.addEventListener('resize', function () {

            if (window.innerWidth > 999 && document.querySelector('#dynamic-search').dataset.display == "yes" &&
                document.querySelector('#dynamic-search').dataset.type == "mobile") {
                document.querySelector('#dynamic-search').dataset.display = "no";
                document.querySelector('#mobile-search #searchbar').querySelector('input').value = "";
            };


        });



    };


});

//onclick della lente
document.querySelector("#btn-lent-search").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="search.php?query="+ document.querySelector('#input-2').value;
});

document.querySelector("#lent").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="search.php?query="+ document.querySelector('#input-1').value;
});

//hover su LG
document.getElementById('LG').addEventListener('mouseover', function() {
    
    const hoverContent = document.getElementById('hover-content');
    hoverContent.style.display = 'flex';
    
    //timeout per nascondere il div dopo 5 secondi
    setTimeout(function() {
        hoverContent.style.display = 'none';
    }, 5000);
});






















