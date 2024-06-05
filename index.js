
/* click bottone */

/*
function ClickButton2(event){
    const btn2=event.currentTarget;
    btn2.dataset.color="enabled";
    btn2.classList.remove('disabled');
    btn2.classList.add('enabled');

    const btn1=document.querySelector('#b-1');
    const btn3=document.querySelector('#b-3');

    btn1.classList.remove('enabled');
    btn3.classList.remove('enabled');
    btn1.classList.add('disabled');
    btn3.classList.add('disabled');

    const hero=document.querySelector('#hero');
    hero.style.backgroundImage = "url('jordan 4 off.png')";
    document.querySelector('#text-shoes').innerHTML ='Jordan 4 x Off-White' +'<br />'+'"Sail"';
    
    
}


const btn2= document.querySelector('#b-2');
btn2.addEventListener('click',ClickButton2);
*/

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

    /*coloro i bottoni finallyyy 
    if (startX > e.clientX) {
        
        if(Scrolled=0){
            currentBtn=pastButton++;
           }else{
            currentBtn++;
            if(currentBtn>2) currentBtn=2;
           }

        if(currentBtn ==0){
            btns[currentBtn].dataset.active="enabled";
            btns[currentBtn+1].dataset.active="disabled";
            btns[currentBtn+2].dataset.active="disabled";
        }

        if(currentBtn ==1){
            btns[currentBtn].dataset.active="enabled";
            btns[currentBtn-1].dataset.active="disabled";
            btns[currentBtn+1].dataset.active="disabled";
        }

        if(currentBtn ==2){
            btns[currentBtn].dataset.active="enabled";
            btns[currentBtn-1].dataset.active="disabled";
            btns[currentBtn-2].dataset.active="disabled";
        }
        
    }

    if (startX < e.clientX) {
     
        if(Scrolled=0){
            currentBtn=pastButton--;
        }else{
            currentBtn--;

            if(currentBtn<0) currentBtn=0;
        }
    
      
       if(currentBtn ==0){
        btns[currentBtn].dataset.active="enabled";
        btns[currentBtn+1].dataset.active="disabled";
        btns[currentBtn+2].dataset.active="disabled";
    }

    if(currentBtn ==1){
        btns[currentBtn].dataset.active="enabled";
        btns[currentBtn-1].dataset.active="disabled";
        btns[currentBtn+1].dataset.active="disabled";
    }

    if(currentBtn ==2){
        btns[currentBtn].dataset.active="enabled";
        btns[currentBtn-1].dataset.active="disabled";
        btns[currentBtn-2].dataset.active="disabled";
    }

   
    }

    

    pastButton=currentBtn;
    Scrolled=1;

    console.log("Current button. "+ currentBtn);
    console.log("past button: "+ pastButton);

    */


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

    /*coloro i bottoni finallyyy 
    if (startX > e.changedTouches[0].clientX) {
        
        if(Scrolled=0){
            currentBtn=pastButton++;
           }else{
            currentBtn++;
            if(currentBtn>2) currentBtn=2;
           }

        if(currentBtn ==0){
            btns[currentBtn].dataset.active="enabled";
            btns[currentBtn+1].dataset.active="disabled";
            btns[currentBtn+2].dataset.active="disabled";
        }

        if(currentBtn ==1){
            btns[currentBtn].dataset.active="enabled";
            btns[currentBtn-1].dataset.active="disabled";
            btns[currentBtn+1].dataset.active="disabled";
        }

        if(currentBtn ==2){
            btns[currentBtn].dataset.active="enabled";
            btns[currentBtn-1].dataset.active="disabled";
            btns[currentBtn-2].dataset.active="disabled";
        }
        
    }

    if (startX < e.changedTouches[0].clientX) {
     
        if(Scrolled=0){
            currentBtn=pastButton--;
        }else{
            currentBtn--;

            if(currentBtn<0) currentBtn=0;
        }
    
      
       if(currentBtn ==0){
        btns[currentBtn].dataset.active="enabled";
        btns[currentBtn+1].dataset.active="disabled";
        btns[currentBtn+2].dataset.active="disabled";
    }

    if(currentBtn ==1){
        btns[currentBtn].dataset.active="enabled";
        btns[currentBtn-1].dataset.active="disabled";
        btns[currentBtn+1].dataset.active="disabled";
    }

    if(currentBtn ==2){
        btns[currentBtn].dataset.active="enabled";
        btns[currentBtn-1].dataset.active="disabled";
        btns[currentBtn-2].dataset.active="disabled";
    }

   
    }

    

    pastButton=currentBtn;
    Scrolled=1;

    console.log("Current button. "+ currentBtn);
    console.log("past button: "+ pastButton);

    */


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



/*scroll con i bottoni 
function onClickBtn(event) {
    let target = event.currentTarget;
    const viewPortWidth = window.innerWidth;

    for (let c1 = 0; c1 < btns.length; c1++) {
        if (btns[c1].dataset.active == "enabled") btns[c1].dataset.active = "disabled";
    }

    target.dataset.active = "enabled";

    if (target.dataset.button > pastButton) {

        position = target.dataset.button - pastButton;

    }

    if (target.dataset.button < pastButton) {

        position = target.dataset.button - pastButton;

    }

    if(target.dataset.button == pastButton) position=0;

    wrapper.scrollLeft += position * viewPortWidth;
    pastButton = target.dataset.button;

    
   
    currentBtn=pastButton;
    Scrolled=0;

    console.log("Current button: "+ currentBtn);
    console.log("past button: "+ pastButton);
};

*/
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
    document.querySelector("#hero2").classList.remove('site-menu');

    const parent = document.querySelector('#site');
    const imageRemove = document.querySelector('#cover');
    if (window.innerWidth > 620) parent.removeChild(imageRemove);




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
    const ar=t.querySelector(".arrow");
    const text=t.querySelector("#text-f");

    if(t.dataset.t == "info"){

        if (ar.dataset.arrow == "on") {
            ar.dataset.arrow = "off";
            text.style.color = "rgb(199, 138, 230)";
        } else if (ar.dataset.arrow == "off") {
            ar.dataset.arrow = "on";
            text.style.color = "rgb(208, 227, 244)";
        }
    }

    if(t.dataset.t == "shop"){
        
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













