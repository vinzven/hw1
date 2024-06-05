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

//js per profilo

//caricamento dettagli profilo dinamico
document.addEventListener('DOMContentLoaded', function () {

    fetch('PHPs/loadProfile.php')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#nome').innerHTML = ` 

            <div>Name</div>

            <div id="name">${data.person.name}</div>
            ` ;

            document.querySelector('#cognome').innerHTML = ` 

        <div>Surname</div>

        <div id="name">${data.person.surname}</div>
        ` ;

            document.querySelector('#myEmail').innerHTML = ` 

            <div>Email</div>

            <div id="email">${data.person.email}</div>
            ` ;

            if (data.address.length == 0) {
                document.querySelector('#address').innerHTML = `
            <div>My Address</div>
            <button id ="add-add" class="button-choice"><i class="fa-solid fa-plus"></i>Add</button>
            `;

                //attivazione forms

                document.querySelector("#add-add").addEventListener('click', function () {
                    document.querySelector('#column-2').style.display = "none";
                    document.querySelector('#add-new').style.display = "flex";
                });

                document.querySelector('#add-new #form-header button').addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector('#column-2').style.display = "flex";
                    document.querySelector('#add-new').style.display = "none";
                });

            } else {
                
                let phone;

                if(data.address.tel == null){
                    phone="";
                }else{
                    phone=data.address.tel;
                };

                document.querySelector('#address').innerHTML = `

            <div>My Address</div>
                            <div>${data.address.address}</div>
                            <div>${data.address.city}</div>
                            <div>${data.address.cap}</div>
                            <div>${data.address.state}</div>
                            <div>Tel : ${phone}</div>

                            <form id="remove" method="post" action="http://localhost/HW1/source/profile/PHPs/myProfilePHPs/removeAddress.php">

                            <button type="submit" onclick="return confirm('Are you sure to delete your address?')"
                            name="remove-add" value="delete" class="button-choice"><i class="fa-solid fa-xmark"></i>Remove
                            </button>

                            </form>

                            <button id ="add-edit" class="button-choice"><i class="fa-duotone fa-pen-to-square"></i>Edit</button>


            `;

                //edit form
                document.querySelector("#add-edit").addEventListener('click', function () {
                    document.querySelector('#column-2').style.display = "none";
                    document.querySelector('#edit-form').style.display = "flex";

                    document.forms['edit-form'].indirizzo.value = data.address.address;
                    document.forms['edit-form'].citta.value = data.address.city;
                    document.forms['edit-form'].stato.value = data.address.state;
                    document.forms['edit-form'].cap.value = data.address.cap;
                    document.forms['edit-form'].tel.value = data.address.tel;
                });

                document.querySelector('#edit-form #form-header button').addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector('#column-2').style.display = "flex";
                    document.querySelector('#edit-form').style.display = "none";
                });

            };
        })
        .catch(error => console.error('Error:', error))
});


//form per aggiungere indirizzo validazione campi
function checkForm(event) {
    if (event.currentTarget.indirizzo.value.length == 0 || event.currentTarget.citta.value.length == 0 || event.currentTarget.stato.value.length == 0
        || event.currentTarget.cap.value.length == 0) {
        alert("Please fill all fields");
        event.preventDefault();
    };

    if (isNaN(event.currentTarget.cap.value)) {
        alert("Postal code must be numeric.");
        event.preventDefault();
    }

    if (isNaN(event.currentTarget.tel.value)) {
        alert("Telephone number must be numeric.");
        event.preventDefault();
    }
};

const addForm = document.forms['add-new'];
addForm.addEventListener('submit', checkForm);

const editForm = document.forms['edit-form'];
editForm.addEventListener('submit', checkForm);























