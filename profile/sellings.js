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

//js per ordini

//ordini in corso
document.addEventListener('DOMContentLoaded',function(){
    
    fetch('http://localhost/HW1/source/profile/PHPs/loadListed.php')
    .then(response => response.json() )
    .then( datas=>{
        
        console.log(datas);
        const parentDiv = document.querySelector('#listing[data-type="listed"]');

        if(datas.length == 0){

            document.querySelector('#listing[data-type="listed"]').innerHTML='<div id="no-order">No listing placed yet</div>';

        }

        datas.forEach(data => {

            //rimuovo la parte decimale a numeri interi
            let taglia = parseFloat(data.taglia);
            let tagliaString = "";
            if (taglia % 1 == 0) {
                tagliaString = taglia.toFixed(0);
            } else {
                tagliaString = taglia;
            }

            const childDiv=document.createElement('div');
            childDiv.className ='sell-box';
            childDiv.innerHTML=`
            
            <div id="shoe-info">
                <img src="${data.img_link}">
                <div>${data.descrizione}</div>
            </div>

            <div id="infos-shoe">

                <div class="details">
                    <div>Size:</div>
                    <div>${tagliaString}</div>
                </div>

                <div class="details">
                    <div>Listed price:</div>
                    <div>€${data.prezzo}</div>
                </div>

                <div class="details">
                    <div>Date:</div>
                    <div> ${data.giorno} - ${data.mese} - ${data.anno}</div>
                </div>

            </div>

            <div id="ID">ID: ${data.id_vendita}</div>

            <form id="delete-listing" method="post" action="http://localhost/HW1/source/profile/PHPs/deleteListings.php">
                <button type="submit" onclick="return confirm('Are you sure to delete this listing?');"><i class="fa-solid fa-trash-can-xmark"></i></button>
                <input type="hidden" name="listing_id" value=${data.id_vendita}>
            </form>
            
            `;
            
            parentDiv.appendChild(childDiv);

        });

    })
    .catch(error => console.error('Fetch ERROR: ',error) );



});

document.addEventListener('DOMContentLoaded',function(){
    
    fetch('http://localhost/HW1/source/profile/PHPs/loadSold.php')
    .then(response => response.json() )
    .then( datas=>{
        
        console.log(datas);
        const parentDiv = document.querySelector('#listing[data-type="sold"]');

        if(datas.length == 0){

            document.querySelector('#listing[data-type="sold"]').innerHTML='<div id="no-order">No shoes sold yet</div>';

        }

        datas.forEach(data => {

            //rimuovo la parte decimale a numeri interi
            let taglia = parseFloat(data.taglia);
            let tagliaString = "";
            if (taglia % 1 == 0) {
                tagliaString = taglia.toFixed(0);
            } else {
                tagliaString = taglia;
            }

            const childDiv=document.createElement('div');
            childDiv.className ='sell-box';
            childDiv.innerHTML=`
            
            <div id="shoe-info">
                <img src="${data.img_link}">
                <div>${data.descrizione}</div>
            </div>

            <div id="infos-shoe">

                <div class="details">
                    <div>Size:</div>
                    <div>${tagliaString}</div>
                </div>

                <div class="details">
                    <div>Payout:</div>
                    <div>€${data.guadagno}</div>
                </div>

                <div class="details">
                    <div>Date:</div>
                    <div> ${data.giorno} - ${data.mese} - ${data.anno}</div>
                </div>

            </div>

            <div id="ID">ID: ${data.id_vendita}</div>

          
            
            `;
            
            parentDiv.appendChild(childDiv);

        });

    })
    .catch(error => console.error('Fetch ERROR: ',error) );



});

//selezione area vendita
document.querySelectorAll('#order-status div').forEach(selection =>{


    selection.addEventListener('click',function(){

        if(selection.dataset.type=="sold"){
            document.querySelector('#listing[data-type="listed"]').dataset.display="no";
            document.querySelector('#listing[data-type="sold"]').dataset.display="yes";
        }else{
            document.querySelector('#listing[data-type="listed"]').dataset.display="yes";
            document.querySelector('#listing[data-type="sold"]').dataset.display="no";
        }

        document.querySelectorAll('#order-status div').forEach(item => {
            item.dataset.active = "no";
        });

        selection.dataset.active="yes";

    });

});