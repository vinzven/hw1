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



/* 
let stripe = Stripe('pk_test_51PAwCNHgmvtAWfOQ2WIUJWal4Wymo7MhkSozycDair6sm4XKM4SwRfle8Hu4XI0h64xZjdOTbair55mJs6Kssis400v6Fy2io5');

let itemName = document.querySelector("#desc").textContent;
let itemSize = 0;
let itemPrice;
let cur = "eur";


// Funzione per avviare il checkout (Stripe API)
function startCheckout() {

    if (itemSize == 0) {
        document.querySelector("#err-sel").classList.remove("hidden");
        document.querySelector("#err-sel").classList.add("not-hidden");
        return;
    }

    // Simula la creazione della sessione di checkout
    fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer sk_test_51PAwCNHgmvtAWfOQexBBR6KFR3JjDTrsmFnWySWM4ajVswpeG3Ubk77DlJbNTxHeLiSQpx0Z1qg6jIEKIb4RE3rn00jXoXs6hx',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `payment_method_types[]=card&
     line_items[0][price_data][currency]=${cur}&
     line_items[0][price_data][product_data][name]=${itemName} - ${itemSize} EU&
     line_items[0][price_data][unit_amount]=${itemPrice}&
     line_items[0][quantity]=1&
     mode=payment&
     success_url=http://example.com/success&
     cancel_url=http://example.com/cancel`
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore durante la creazione della sessione di checkout');
            }
            return response.json();
        })
        .then(session => {
            // Avvia Stripe Checkout
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(result => {
            if (result.error) {
                console.error(result.error.message);
            }
        })
        .catch(error => {
            console.error('Errore durante il checkout:', error);
        });
}

// Gestisci il clic sul pulsante di checkout
document.querySelector('#checkout').addEventListener('click', function () {
    startCheckout();
});


*/

//selezione taglia
let pulsanti = document.querySelectorAll("#size-price");

pulsanti.forEach(function (pulsante) {
    // Aggiungi un listener di eventi per il click
    pulsante.addEventListener("click", function () {
        for (let i = 0; i < pulsanti.length; i++) {

            if (pulsanti[i].dataset.active = "yes") {
                pulsanti[i].dataset.active = "no";
                pulsanti[i].querySelector("#s").dataset.selected = "no";
                pulsanti[i].querySelector("#p").dataset.selected = "no";
            }
        }

        document.querySelector("#err-sel").classList.remove("not-hidden");
        document.querySelector("#err-sel").classList.add("hidden");

        pulsante.dataset.active = "yes";
        pulsante.querySelector("#s").dataset.selected = "yes";
        pulsante.querySelector("#p").dataset.selected = "yes";
        document.querySelector("#checkout").dataset.disabled = "no";
        itemSize = pulsante.querySelector("#s").textContent;
        const Price = pulsante.querySelector("#p").textContent;
        itemPrice = (parseFloat(Price.replace(currencySymbol, "")) * 100); //prezzo in centesimi
    });
});

/*

//converti valuta (Open Exchange Rates API)

function convertCurrency(from, to, amount) {
    const API_KEY = '5dfa2ef83294426dbe88edcac4d2ebce';

    return fetch(`https://open.er-api.com/v6/latest/${from}?app_id=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore durante la richiesta all\'API');
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            if (!data.rates[to]) {
                throw new Error(`Valuta ${to} non supportata.`);
            }
            convertedAmount = amount * data.rates[to];
            return convertedAmount;
        })
        .catch(error => {
            throw new Error(error.message);
        });
}



const selectElement = document.querySelector('#valuta');
const buttonElement = document.querySelector('#btn-cur');
let actualCurrency = 'EUR';
let selectedCurrency = 'EUR';
let currencySymbol = "€";
let curPrice;

const buttonUpdate = document.getElementById('btn-cur');
buttonUpdate.addEventListener('click', async function () {

    // Itera su tutti i pulsanti
    document.querySelectorAll('#size-price').forEach(async button => {
        // Ottieni l'ID del pulsante corrente
        const buttonId = button.querySelector("#p");
        // Ottieni il valore del prezzo attuale
        curPrice = buttonId.textContent;
        curPrice = curPrice.replace(currencySymbol, "");

        try {
            selectedCurrency = document.querySelector('#valuta').value;

            const updatedPrice = await convertCurrency(actualCurrency, selectedCurrency, curPrice); // Converti il prezzo attuale da USD alla valuta selezionata

            currencySymbol = getCurrencySymbol(selectedCurrency);

            buttonId.textContent = currencySymbol + Math.floor((updatedPrice + +0.5));
            actualCurrency = selectedCurrency;
            cur = actualCurrency.toLowerCase();
        } catch (error) {
            console.error(error); // Gestisci gli errori se si verificano durante la conversione della valuta
        }
    });
});

// Funzione per ottenere il simbolo della valuta corrispondente
function getCurrencySymbol(currencyCode) {
    switch (currencyCode) {
        case 'EUR':
            return '€';
        case 'USD':
            return '$';
        case 'GBP':
            return '£';
        default:
            return '';
    }
};
 */


//inizializzazione product page

document.addEventListener('DOMContentLoaded', function () {
    // Leggi l'URL
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const productQuery = params.get('q');
    console.log(productQuery);

    if (productQuery != null) {
        fetch(`http://localhost/HW1/source/PHPs/endpointProductPage.php?q=${productQuery}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.length > 0) {
                    document.querySelector("#desc").textContent = data[0].descrizione;
                    document.querySelector("#prod").innerHTML = `<img id="shoe-pro" src="${data[0].img_link}">`;
                    document.querySelector("#first").textContent = `${data[0].sku}`;
                    document.querySelector("#second").textContent = `${data[0].accessori}`;

                    document.querySelector('#productDesc').value=document.querySelector("#desc").textContent;

                    let resultItem = "";
                    let string = "";
                    let taglia;
                    let tagliaString;

                    data.forEach(item => {

                        taglia = parseFloat(item.taglia);
                        tagliaString = "";
                        if (taglia % 1 == 0) {
                            tagliaString = taglia.toFixed(0);
                        } else {
                            tagliaString = taglia;
                        }

                        if (item.prezzo_minore > 0) {
                            resultItem = `
                                <button id="size-price" data-active="no">
                                    <p id="s" data-selected="no">${tagliaString}</p>
                                    <p id="p" data-selected="no">€${item.prezzo_minore}</p>
                                </button>
                            `;
                        } else {
                            resultItem = `
                                <button id="size-price" data-active="sold-out">
                                    <p id="s" data-selected="sold-out">${tagliaString}</p>
                                    <p id="p" data-selected="no"></p>
                                </button>
                            `;
                        }
                        // Concatena il risultato all'interno del ciclo forEach
                        string = string + resultItem;
                    });

                    // Aggiungi gli elementi HTML generati dinamicamente al DOM
                    document.querySelector("#sizes").innerHTML = string;

                    let pulsanti = document.querySelectorAll("#size-price");

                    pulsanti.forEach(function (pulsante) {
                        // Aggiungi un listener di eventi per il click
                        pulsante.addEventListener("click", function () {


                            for (let i = 0; i < pulsanti.length; i++) {

                                if (pulsanti[i].dataset.active == "yes" && pulsanti[i].dataset.active != "sold-out") {
                                    pulsanti[i].dataset.active = "no";
                                    pulsanti[i].querySelector("#s").dataset.selected = "no";
                                    pulsanti[i].querySelector("#p").dataset.selected = "no";
                                }
                            }

                            document.querySelector("#err-sel").classList.remove("not-hidden");
                            document.querySelector("#err-sel").classList.add("hidden");

                            if(pulsante.dataset.active != "sold-out"){
                            pulsante.dataset.active = "yes";
                            pulsante.querySelector("#s").dataset.selected = "yes";
                            pulsante.querySelector("#p").dataset.selected = "yes";
                            document.querySelector("#checkout").dataset.disabled = "no";

                            
                            document.querySelector('#productSize').value=pulsante.querySelector('#s').textContent;
                            }


                        });
                    });
                } else {
                    window.location.href = 'http://localhost/HW1/source/index.php';
                }
            })
            .catch(error => console.error('Errore:', error));
    } else {
        window.location.href = 'http://localhost/HW1/source/index.php';
    }
});


//checkout
document.querySelector('#checkout').addEventListener('click', function(e) {
    if (e.currentTarget.dataset.disabled == "yes") {
        return;
    }

    const productDesc = document.getElementById('productDesc').value;
    const productSize = document.getElementById('productSize').value;

    console.log(productDesc);
    console.log(productSize);

    if (!productDesc || !productSize) {
        alert('Descrizione del prodotto e taglia sono obbligatori');
        return;
    }

    fetch('http://localhost/HW1/source/checkout/createCheckout.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productDesc, productSize })
    })
    .then(response => {

        if(response.status ==401){
                window.location.href="login.php";
                return;
        }; 

        return response.json();
    })
    .then(data => {
        window.location.href = data.url;
    })
    .catch(error => {
        console.error('Errore:', error);

        

    });
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
                    if (window.innerWidth > 999) myDiv.dataset.type = "desktop";

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
    document.querySelector('#dynamic-search').dataset.display = "no";
    document.querySelector('#mobile-search').querySelector('input').value = "";

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
                if (document.querySelector('#logged').dataset.t == "logged")
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
document.querySelector("#btn-lent-search").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "search.php?query=" + document.querySelector('#input-2').value;
});

document.querySelector("#lent").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "search.php?query=" + document.querySelector('#input-1').value;
});


//funzioni di allineamento dei div

function alignHorizontally() {
    const productPage = document.querySelector('#product-page');
    const moreInfos = document.querySelector('#more-infos');

    //larghezza del contenitore e del div da allineare
    const productPageWidth = productPage.clientWidth;
    const moreInfosWidth = moreInfos.clientWidth;

    //margine  necessario per allineare all'inizio
    const marginLeft = (productPageWidth - moreInfosWidth);


    moreInfos.style.marginRight = `${marginLeft}px`;
}

//funzione al caricamento della pagina
window.onload = alignHorizontally;

// funzione al ridimensionamento della finestra per mantenere l'allineamento
window.onresize = alignHorizontally;



function matchWidths() {
    const productPage = document.querySelector('#product-page');
    const textContainer = document.querySelector('#text-container');

    //larghezza del div product-page
    const productPageWidth = productPage.clientWidth;

    textContainer.style.width = `${productPageWidth * 1.01}px`;
}

//funzione al caricamento della pagina
window.onload = matchWidths;

//funzione al ridimensionamento della finestra per mantenere la larghezza
window.onresize = matchWidths;

const myInfos = document.querySelectorAll('#more-infos-1 div');

myInfos.forEach(function (element) {
    element.addEventListener('click', function () {
        // Imposta tutti gli elementi a "no" nel dataset.active
        myInfos.forEach(function (el) {
            el.dataset.active = "no";
        });

        // Cambia il contenuto di #more-infos-2 in base al valore di dataset.n
        let infoText = '';
        if (element.dataset.n === "first") {
            infoText = `Each item is checked and certified by Shoes Heaven specialists. Using tools and knowledge
            our technicians can determine if an item is authentic and unworn. Only items deemed 100%
            authentic are delivered to the buyer`;
        } else if (element.dataset.n === "second") {
            infoText = `The product offered is always new and unworn. 
            Furthermore, each item is delivered in its original box.`;
        } else {
            infoText = `We ship only in Italy, Germany and France (In the future we will cover more countries)`;
        }

        const infoElement = document.querySelector('#more-infos-2');
        infoElement.textContent = infoText;

        // Imposta il dataset.active a "yes" per l'elemento cliccato
        element.dataset.active = "yes";
    });
});

//hover su LG
document.getElementById('LG').addEventListener('mouseover', function () {

    const hoverContent = document.getElementById('hover-content');
    hoverContent.style.display = 'flex';

    //timeout per nascondere il div dopo 5 secondi
    setTimeout(function () {
        hoverContent.style.display = 'none';
    }, 5000);
});















