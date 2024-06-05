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

    newImage.src = "Senza nome.png";

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
    if (window.innerWidth > 620) parent.removeChild(imageRemove);




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
        } else if (ar.dataset.arrow == "off") {
            ar.dataset.arrow = "on";
            text.style.color = "rgb(208, 227, 244)";
        }
    }

    if (t.dataset.t == "shop") {

        if (ar.dataset.arrow == "on") {
            ar.dataset.arrow = "off";
            text.style.color = "rgb(199, 138, 230)";
        } else if (ar.dataset.arrow == "off") {
            ar.dataset.arrow = "on";
            text.style.color = "rgb(208, 227, 244)";
        }
    }


}

const features = document.querySelectorAll(".features");
features.forEach((feature) => {
    feature.addEventListener("click", onArrow);
});




let stripe = Stripe('pk_test_51PAwCNHgmvtAWfOQ2WIUJWal4Wymo7MhkSozycDair6sm4XKM4SwRfle8Hu4XI0h64xZjdOTbair55mJs6Kssis400v6Fy2io5');

let itemName = document.querySelector("#desc").textContent;
let itemSize = 0;
let itemPrice;
let cur="eur";


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
let actualCurrency='EUR';
let selectedCurrency='EUR';
let currencySymbol="€";
let curPrice;

const buttonUpdate = document.getElementById('btn-cur');
buttonUpdate.addEventListener('click', async function() {
    
    // Itera su tutti i pulsanti
    document.querySelectorAll('#size-price').forEach(async button => {
        // Ottieni l'ID del pulsante corrente
        const buttonId = button.querySelector("#p");
        // Ottieni il valore del prezzo attuale
        curPrice = buttonId.textContent;
        curPrice= curPrice.replace(currencySymbol, "");
        
        try {
            selectedCurrency = document.querySelector('#valuta').value;

            const updatedPrice = await convertCurrency(actualCurrency, selectedCurrency, curPrice); // Converti il prezzo attuale da USD alla valuta selezionata
            
            currencySymbol = getCurrencySymbol(selectedCurrency);
            
            buttonId.textContent=currencySymbol+Math.floor((updatedPrice+ +0.5));
            actualCurrency=selectedCurrency;
            cur=actualCurrency.toLowerCase();
        } catch (error) {
            console.error(error); // Gestisci gli errori se si verificano durante la conversione della valuta
        }
    });
});

// Funzione per ottenere il simbolo della valuta corrispondente
function getCurrencySymbol(currencyCode) {
    switch(currencyCode) {
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
  
