
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
            }


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

//attivazione form
const selettore = document.querySelectorAll('#sel-div div');
selettore.forEach(sel => {
    sel.addEventListener('click', function (e) {
        selettore.forEach(s => s.dataset.active = "no"); // Disattivo tutti gli elementi
        if (sel.dataset.type == "login") {
            document.querySelector('#register').dataset.active = "no";
            document.querySelector('#login').dataset.active = "yes";
            document.querySelector('#hid').value = "login";
        } else if (sel.dataset.type == "register") {
            document.querySelector('#register').dataset.active = "yes";
            document.querySelector('#login').dataset.active = "no";
            document.querySelector('#hid').value = "register";
        }
        e.currentTarget.dataset.active = "yes";
    });
});

//disattivo il messaggio di benvenuto dopo 60 secondi
document.addEventListener('DOMContentLoaded', (event) => {
    const myDiv = document.querySelectorAll('#welcome-message');

    function disattivaDiv(i) {
        myDiv[i].classList.add('message-disabled');

        setTimeout(function () {
            myDiv[i].classList.add('message-disabled-hidden');
        }, 500); 

    }

    // Imposto un timeout di 5 secondi per disattivare il div
    for (let i = 0; i < myDiv.length; i++) {
        setTimeout(() => disattivaDiv(i), 1000 * 5);
    }
});




//display message
document.querySelectorAll('#welcome-message button').forEach((button) => {

    button.addEventListener('click', function (e) {
        e.preventDefault();
        button.parentElement.classList.add('message-disabled');

        // Dopo un breve ritardo, nascondere definitivamente l'elemento
        setTimeout(function () {
            button.parentElement.classList.add('message-disabled-hidden');
        }, 500);

    });

});

//controlli password
let showPasswordBtn = document.querySelector('#insert-pass i');
let passwordInp = document.querySelector('#insert-pass input');
let passwordList = document.querySelectorAll('#password-verified .pass-list-item');

showPasswordBtn.addEventListener('click', function () {

    if (showPasswordBtn.classList.contains("fa-eye")) {
        showPasswordBtn.classList.remove("fa-eye");
        showPasswordBtn.classList.add("fa-eye-slash");
        passwordInp.type = "text";
    } else {
        showPasswordBtn.classList.add("fa-eye");
        showPasswordBtn.classList.remove("fa-eye-slash");
        passwordInp.type = "password";
    }
});

//validazione password
let validationRegex = [
    { regex: /.{8,}/ }, //minimo 8 lettere
    { regex: /[0-9]/ }, //numeri da 0 a 9
    { regex: /[a-z]/ }, //lettere minuscole
    { regex: /[A-Z]/ }, //lettere maiuscole
    { regex: /[^a-zA-Z0-9]/ }, //caratteri speciali
];

passwordInp.addEventListener('input', function () {

    if (passwordInp.value.length > 0) {
        document.querySelector('#password-verified').style.display = "flex";
    } else {
        document.querySelector('#password-verified').style.display = "none";
    };


    validationRegex.forEach((item, i) => {

        let isValid = item.regex.test(passwordInp.value);

        if (isValid) {
            passwordList[i].classList.add('checked');
        } else {
            passwordList[i].classList.remove('checked');
        }

        if (confirmInp.value === passwordInp.value) {
            document.querySelector('#password-same #no').style.display = "none";
            document.querySelector('#password-same #yes').style.display = "inline";
        } else {
            document.querySelector('#password-same #yes').style.display = "none";
            document.querySelector('#password-same #no').style.display = "inline";
        }


    });

});


//controllo passwords uguali

//controlli password
let confirmPasswordBtn = document.querySelector('#confirm-pass i');
let confirmInp = document.querySelector('#confirm-pass input');
let confirmList = document.querySelectorAll('#password-same .pass-list-item');

confirmPasswordBtn.addEventListener('click', function () {

    if (confirmPasswordBtn.classList.contains("fa-eye")) {
        confirmPasswordBtn.classList.remove("fa-eye");
        confirmPasswordBtn.classList.add("fa-eye-slash");
        confirmInp.type = "text";
    } else {
        confirmPasswordBtn.classList.add("fa-eye");
        confirmPasswordBtn.classList.remove("fa-eye-slash");
        confirmInp.type = "password";
    }
});

confirmInp.addEventListener('input', function () {
    if (confirmInp.value.length > 0) {
        document.querySelector('#password-same').style.display = "flex";
    } else {
        document.querySelector('#password-same').style.display = "none";
    };

    if (confirmInp.value === passwordInp.value) {
        document.querySelector('#password-same #no').style.display = "none";
        document.querySelector('#password-same #yes').style.display = "inline";
    } else {
        document.querySelector('#password-same #yes').style.display = "none";
        document.querySelector('#password-same #no').style.display = "inline";
    }

});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mailInput = document.querySelector('#mail-send');
mailInput.addEventListener('input', function () {

    if (emailRegex.test(mailInput.value)) {

        const endpoint = `http://localhost/HW1/source/PHPs/mailCheck.php`;

        // Opzioni per la richiesta fetch
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${encodeURIComponent(mailInput.value)}`
        };

        fetch(endpoint, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.exists == true) {
                    document.querySelector('#mail-checker').style.display = "flex";
                    document.querySelector('#mail-checker #no-1').style.display = "none";
                    document.querySelector('#mail-checker #no-2').style.display = "flex";
                    document.querySelector('#mail-checker #yes').style.display = "none";
                } else {
                    document.querySelector('#mail-checker').style.display = "flex";
                    document.querySelector('#mail-checker #no-1').style.display = "none";
                    document.querySelector('#mail-checker #no-2').style.display = "none";
                    document.querySelector('#mail-checker #yes').style.display = "flex";
                }
            })
            .catch(error => {
                console.error('Si è verificato un errore:', error);
            });

    } else {
        document.querySelector('#mail-checker').style.display = "flex";
        document.querySelector('#mail-checker #no-1').style.display = "inline";
        document.querySelector('#mail-checker #no-2').style.display = "none";
        document.querySelector('#mail-checker #yes').style.display = "none";
    }

    if (mailInput.value.length == 0) {
        document.querySelector('#mail-checker').style.display = "none";
    }
});


//login-pass
document.querySelector('.login-box i').addEventListener('click', function () {

    if (document.querySelector('.login-box i').classList.contains("fa-eye")) {
        document.querySelector('.login-box i').classList.remove("fa-eye");
        document.querySelector('.login-box i').classList.add("fa-eye-slash");
        document.querySelector('.login-box input').type = "text";
    } else {
        document.querySelector('.login-box i').classList.add("fa-eye");
        document.querySelector('.login-box i').classList.remove("fa-eye-slash");
        document.querySelector('.login-box input').type = "password";
    }
});










