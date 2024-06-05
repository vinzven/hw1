

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


/*image slider 100% working*/

let wrapper = document.querySelector(".wrapper");

let currentBtn = 0;
let Scrolled = 0;

let pressed = false;
let startX = 0;

wrapper.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX;

    /* console.log(startX); */
});

wrapper.addEventListener('mouseleave', function (e) {
    pressed = false;

});

wrapper.addEventListener('mouseup', function (e) {
    pressed = false;


});


wrapper.addEventListener('mousemove', function (e) {
    const viewPortWidth = window.innerWidth;

    if (!pressed) {
        return
    }

    if (startX > e.clientX) {
        this.scrollLeft += viewPortWidth;
    }

    if (startX < e.clientX) {
        this.scrollLeft -= viewPortWidth;
    }


    /* se scrollo i bottoni devono colorarsi :(((( */
});


/* devo gestire il touch */



wrapper.addEventListener('touchstart', function (e) {

    pressed = true;
    startX = e.touches[0].clientX;

    /* console.log(startX); */
});

wrapper.addEventListener('touchend', function (e) {

    pressed = false;

});

wrapper.addEventListener('touchmove', function (e) {
    /* e.preventDefault(); si muove solo il div */
    const viewPortWidth = window.innerWidth;

    if (!pressed) {
        return
    }

    if (startX > e.changedTouches[0].clientX) {
        this.scrollLeft += viewPortWidth;
    }

    if (startX < e.changedTouches[0].clientX) {
        this.scrollLeft -= viewPortWidth;
    }


});


// Funzione per iniziare il trascinamento
function startDragging(e) {
    const scrollContainer = e.target.closest('.pro-container'); // Trova il genitore con la classe 'pro-container'
    if (!scrollContainer) return; // Se non trova il genitore, esci dalla funzione

    const startX = e.touches[0].pageX;
    const startScrollLeft = scrollContainer.scrollLeft;

    function whileDragging(e) {
        const distanceX = startX - e.touches[0].pageX;
        scrollContainer.scrollLeft = startScrollLeft + distanceX; // Aggiungo la distanza
    }

    function stopDragging() {
        document.removeEventListener('touchmove', whileDragging);
        document.removeEventListener('touchend', stopDragging);
    }

    document.addEventListener('touchmove', whileDragging);
    document.addEventListener('touchend', stopDragging);
}

// Aggiungo event listener per iniziare il trascinamento a tutti gli elementi con la classe 'pro-container'
document.querySelectorAll('.pro-container').forEach(function (container) {
    container.addEventListener('touchstart', startDragging);
});



// Funzione per aggiornare lo stato dei bottoni di navigazione
function updateButtonState(index) {
    for (let c = 0; c < btns.length; c++) {
        if (c === index) {
            btns[c].dataset.active = "enabled"; // Attiva il bottone corrispondente al div visualizzato
        } else {
            btns[c].dataset.active = "disabled"; // Disattiva gli altri bottoni
        }
    }
}

// Gestore degli eventi per i bottoni di navigazione
function onClickBtn(event) {
    let target = event.currentTarget;
    const viewPortWidth = window.innerWidth;
    const index = parseInt(target.dataset.button); // Ottieni l'indice del div corrispondente al bottone cliccato
    wrapper.scrollLeft = index * viewPortWidth; // Scorrere lo slider al div corrispondente
    updateButtonState(index); // Aggiorna lo stato dei bottoni di navigazione
}

let btn1 = document.querySelector("#b-1");
let btn2 = document.querySelector("#b-2");
let btn3 = document.querySelector("#b-3");
let btns = [btn1, btn2, btn3];

let pastButton = 0;
let position = 0;

btns[0].addEventListener("click", onClickBtn);
btns[1].addEventListener("click", onClickBtn);
btns[2].addEventListener("click", onClickBtn);




/* menu a tendina per mobile,click open su .hamburger,close su .x-button */
function hamClick(e) {
    const target = e.currentTarget;
    document.querySelector("#menu-ham").classList.remove('menu-hidden');
    document.querySelector("#menu-ham").classList.add('menu-not-hidden');
    document.querySelector("body").classList.add('site-menu');
    document.querySelector("#site").style.pointerEvents = "none";
    document.querySelector("#hero2").classList.add('site-menu');

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
    document.querySelector("#hero2").classList.remove('site-menu');

    const parent = document.querySelector('#site');
    const imageRemove = document.querySelector('#cover');
    if (parent.contains(imageRemove)) parent.removeChild(imageRemove);

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

// Aggiungo un gestore per l'evento scroll al contenitore dello slider
wrapper.addEventListener('scroll', function () {
    const viewPortWidth = window.innerWidth;
    const divIndex = Math.round(this.scrollLeft / viewPortWidth); // Determina l'indice del div attualmente visualizzato
    updateButtonState(divIndex); // Aggiorna lo stato dei bottoni di navigazione
});

// Funzione per aggiornare lo stato dei bottoni di navigazione
function updateButtonState(index) {
    for (let c = 0; c < btns.length; c++) {
        if (c === index) {
            btns[c].dataset.active = "enabled"; // Attiva il bottone corrispondente al div visualizzato
        } else {
            btns[c].dataset.active = "disabled"; // Disattiva gli altri bottoni
        }
    }
};

/* disabilito scroll lungo x sullo slider*/
let sX, sY, sZ; // Coordinate di inizio del tocco

wrapper.addEventListener('touchstart', function (e) {
    const touch = e.touches[0];
    sX = touch.clientX;
    sY = touch.clientY;
    sZ = touch.screenX; // Salva anche la coordinata lungo lo screenX per l'asse Z
});

wrapper.addEventListener('touchmove', function (e) {
    const touch = e.touches[0];
    const deltaX = touch.clientX - sX;
    const deltaY = touch.clientY - sY;
    const deltaZ = touch.screenX - sZ;

    // Verifica se lo spostamento è principalmente lungo l'asse X e annullabile
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > Math.abs(deltaZ) && e.cancelable) {
        e.preventDefault(); // Evita lo scroll della pagina solo se lo spostamento è principalmente lungo X
    }
});

/* la magia della freccettina del menu ham*/

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

//script per caricare i dati dei prodotti featured e latest
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost/HW1/source/PHPs/endpointHomeLatest.php')
        .then(response => response.json())
        .then(products => {
            const productList = document.querySelector(".latest").querySelector(".pro-container");
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
        .catch(error => console.error('Errore nel caricamento dei prodotti:', error));
});

//script per caricare i dati dei prodotti featured e latest
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost/HW1/source/PHPs/endpointHomeFeatured.php')
        .then(response => response.json())
        .then(products => {
            const productList = document.querySelector(".featured").querySelector(".pro-container");
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add("pro");

                // Dichiarazione di priceP come const all'interno del ciclo forEach
                const priceP = (product.minprice == 0) ? "SOLD OUT" : ("€" + product.minprice);

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
        .catch(error => console.error('Errore nel caricamento dei prodotti:', error));
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


        if(document.querySelector('#menu-ham').classList.contains('menu-not-hidden') && window.innerWidth >999){
            window.addEventListener('resize', function(e){
                const target = e.currentTarget;
                if(target.innerWidth<999) return;

                document.querySelector("#menu-ham").classList.remove('menu-not-hidden');
                document.querySelector("#menu-ham").classList.add('menu-hidden');
                document.querySelector("body").classList.remove('site-menu');
                document.querySelector("#site").style.pointerEvents = "auto";
                document.querySelector("#hero2").classList.remove('site-menu');
            
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
        } ;

        window.addEventListener('resize', function () {

            if (window.innerWidth > 999 && document.querySelector('#mobile-search').dataset.display == "yes") {
                document.querySelector('#mobile-search').dataset.display = "no";
                document.querySelector('#header').dataset.display = "yes";
            };

            if (window.innerWidth < 999 && document.querySelector('#dynamic-search').dataset.display == "yes" && 
            document.querySelector('#dynamic-search').dataset.type == "desktop") {
                    document.querySelector('#dynamic-search').dataset.display = "no";
                    document.querySelector('#header #searchbar').querySelector('input').value="";

            };

            if(window.innerWidth>999 & document.querySelector('#mobile-search').dataset.display=='yes'){
                document.querySelector('#mobile-search').dataset.display='no';
            }

            
        });

    };

    if (window.innerWidth < 999) {

        window.addEventListener('resize', function () {

            if (window.innerWidth > 999 && document.querySelector('#dynamic-search').dataset.display == "yes" && 
            document.querySelector('#dynamic-search').dataset.type == "mobile"){
                    document.querySelector('#dynamic-search').dataset.display = "no";
                    document.querySelector('#mobile-search #searchbar').querySelector('input').value="";
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


















