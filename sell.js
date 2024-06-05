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

    };

});

//posizionamento ricerca
function positionFixedElement() {
    const searchBar = document.querySelector('#searchbar input');
    const fixedElement = document.querySelector('#dynamic-search');

    // Calcola la posizione orizzontale e verticale dell'input
    const inputRect = searchBar.getBoundingClientRect();
    const inputCenterX = inputRect.left + (inputRect.width / 2);
    const inputCenterY = inputRect.top + (inputRect.height);

    // Posiziona il div fisso
    fixedElement.style.left = `${inputCenterX}px`;
    fixedElement.style.top = `${inputCenterY}px`;
}


// Posiziona l'elemento fisso all'inizializzazione
setInterval(function () {
    positionFixedElement();
}, 10);




// Aggiorna la posizione dell'elemento fisso quando la finestra viene ridimensionata

window.addEventListener('resize', function () {
    positionFixedElement();
});

//ricerca dinamica

const searchInput = document.querySelector('#searchbar').querySelector('input');
const myDiv = document.querySelector("#dynamic-search");


searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    if (query.length > 0) {
        fetch(`http://localhost/HW1/source/PHPs/dynamicSearchEndPoint.php?query=${(query)}`)
            .then(response => response.json())
            .then(data => {

                myDiv.innerHTML = ''; // Rimuovi tutti i risultati precedenti
                console.log(data);
                if (data.length > 0) {
                    myDiv.dataset.display = "yes";

                    data.forEach(item => {
                        const priceP = (item.minprice == 0) ? "SOLD OUT" : ("€" + item.minprice);
                        const resultItem = `
                        <div id="dynamic-box">
                            <img src="${item.img_link}" alt="">
                            <div id="dynamic-text">
                                <p id="nome">${item.descrizione}</p>
                                <p id="min-price">${item.sku}</p>
                            </div>
                        </div>
                        `;
                        myDiv.innerHTML += resultItem; // Aggiungi il nuovo risultato
                    });

                    document.querySelectorAll('#dynamic-box').forEach(function (element) {
                        element.addEventListener('click', function () {


                            document.querySelector("#selection").style.display = "none";
                            document.querySelector('#dynamic-search').style.display = "none";

                            //attivo i form
                            const product = document.querySelector("#product");
                            const megaForm = document.querySelector('#megaform');

                            product.style.display = "flex";
                            megaForm.style.display = "flex";

                            document.querySelector('#box-product').children[0].innerHTML = element.querySelector('#nome').textContent;
                            document.querySelector('#box-product').children[1].innerHTML = element.querySelector('#min-price').textContent;
                            document.querySelector('#box-product img').src = element.querySelector('img').src;
                            document.querySelector('#hiddenDesc').value = element.querySelector('#nome').textContent;


                            //carico le taglie nella select tramite un mio vecchio endPoint che bello
                            fetch(`http://localhost/HW1/source/PHPs/endpointProductPage.php?q=${element.querySelector('#nome').textContent}`)
                                .then(response => response.json())
                                .then(data => {
                                    console.log(data);

                                    data.forEach(item => {
                                        const Option = document.createElement('option');

                                        const taglia = parseFloat(item.taglia);

                                        Option.value = taglia;
                                        Option.innerHTML = taglia;
                                        document.querySelector('#selectOption').appendChild(Option);
                                    });

                                })
                                .catch(error => console.error('Errore:', error));
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

//prevent default btn
document.querySelector('#btn-lent-search').addEventListener('click', event => {
    event.preventDefault();
});


//javascript per ultimare le selling
document.querySelector('#box-product').addEventListener('click', function (e) {
    console.log(document.querySelector('#box-product').children[0].textContent);
})

document.querySelector('#selectOption').addEventListener('change', function (e) {
    const size = parseFloat(e.currentTarget.value).toFixed(1);

    fetch(`http://localhost/HW1/source/PHPs/endpointProductPage.php?q=${document.querySelector('#box-product').children[0].textContent}`)
        .then(response => response.json())
        .then(data => {
            let minPrice;

            data.forEach(item => {

                if (item.taglia == size) {
                    minPrice = item.prezzo_minore;
                    console.log(item.taglia);
                    console.log(item.prezzo_minore);
                } else if (size == 0) {
                    console.log(size);
                    minPrice = 0;
                }
            });


            document.querySelector('#insert-price').children[1].innerHTML = `Lowest price: €${minPrice}`;

            document.querySelector('#hiddenPrice').value = minPrice;

        })
        .catch(error => console.error('Errore:', error));
});

//controlla il prezzo
const digitInput = document.querySelector('#digitprice');
digitInput.addEventListener('input', function () {

    const prezzone = document.querySelector('#hiddenPrice').value;

    if (prezzone > 0) {
        

        if (parseInt(digitInput.value) < prezzone) {
            document.querySelector('#alertPrice').innerHTML = 'Your price is the lowest one';
            document.querySelector('#alertPrice').dataset.type = "low";

            document.querySelector('#conditions').style.display = "flex";

            document.querySelector('#payout').children[1].innerHTML = `€ ${parseInt(digitInput.value) - 20}`;



        } else if (parseInt(digitInput.value)> prezzone) {
            document.querySelector('#alertPrice').innerHTML = 'Your price is not the lowest one';
            document.querySelector('#alertPrice').dataset.type = "high";

            document.querySelector('#conditions').style.display = "flex";

            document.querySelector('#payout').children[1].innerHTML = `€ ${parseInt(digitInput.value) - 20}`;


        } else if (parseInt(digitInput.value) == prezzone) {
            document.querySelector('#alertPrice').innerHTML = 'Your price is not the lowest one';
            document.querySelector('#alertPrice').dataset.type = "high";

            document.querySelector('#conditions').style.display = "flex";

            document.querySelector('#payout').children[1].innerHTML = `€ ${parseInt(digitInput.value) - 20}`;

        };

    };

    if (parseInt(digitInput.value) >= 20 && prezzone == 0) {
        document.querySelector('#alertPrice').innerHTML = 'Your price is the lowest one';
        document.querySelector('#alertPrice').dataset.type = "low";
        document.querySelector('#conditions').style.display = "flex";

        document.querySelector('#payout').children[1].innerHTML = `€ ${parseInt(digitInput.value) - 20}`;
    };
    
    if (parseInt(digitInput.value) < 20) {
        document.querySelector('#alertPrice').innerHTML = 'Please insert a price greater than 20 euroes';
        document.querySelector('#alertPrice').dataset.type = "high";
        document.querySelector('#conditions').style.display = "none";
    };

    if (/[a-zA-Z]/.test(digitInput.value)) {
        document.querySelector('#alertPrice').innerHTML = 'Please insert only integer number';
        document.querySelector('#alertPrice').dataset.type = "high";
        document.querySelector('#conditions').style.display = "none";
    };

    if ((digitInput.value % 1 != 0)) {
        document.querySelector('#alertPrice').innerHTML = 'Please insert only integer number';
        document.querySelector('#alertPrice').dataset.type = "high";
        document.querySelector('#conditions').style.display = "none";
    };

    if (digitInput.value.length == 0) {
        document.querySelector('#alertPrice').innerHTML = '';
        document.querySelector('#conditions').style.display = "none";
    };


});

//tasto undone
document.querySelector('#goBack').addEventListener('click',function(e){
    e.preventDefault();
    window.location.href='http://localhost/HW1/source/sell.php';
})


//errori alert
document.addEventListener('DOMContentLoaded', (event) => {
    const errorElement = document.getElementById('errorHidden');
    if (errorElement) {
        alert(errorElement.value);
    }
});
















