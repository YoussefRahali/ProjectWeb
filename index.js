let NomInput    = document.getElementById("nom");
let PrenomInput = document.getElementById("prenom");
let EmailInput  = document.getElementById("email");
let cEmailInput = document.getElementById("cemail");
let PhoneInput  = document.getElementById("phone");
var letters = /^[A-Za-z]+$/;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.forms["index"].addEventListener("submit", function (e) {
    var inputs = document.forms["index"];
    let ids = [
        "erreur",
        "nomEr",
        "prenomEr",
        "phoneEr",
        "emailEr",
        "cemailEr",
        "erreur",
    ];

    ids.map((id) => (document.getElementById(id).innerHTML = "")); // reinitialiser l'affichage des erreurs

    let errors = false; 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (NomInput.value.length < 3) {
    errors = false;
    document.getElementById("nomEr").innerHTML =
        "Le nom doit compter au minimum 3 caractères.";
} else if (!NomInput.value.match(letters)) {
    errors = false;
    document.getElementById("nomEr").innerHTML =
        "Veuillez entrer un nom valid ! (seulement des lettres)";
} else {
    errors = true;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (PrenomInput.value.length < 4) {
    errors = false;
    document.getElementById("prenomEr").innerHTML =
        "Le nom doit compter au minimum 4 caractères.";
} else if (!PrenomInput.value.match(letters)) {
    errors = false;
    document.getElementById("prenomEr").innerHTML =
        "Veuillez entrer un nom valid ! (seulement des lettres)";
} else {
    errors = true;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (isNaN(PhoneInput.value) || PhoneInput.value.length !== 8) {
    errors = false;
    document.getElementById("phoneEr").innerHTML =
        "Le numéro doit contenir exactement 8 chiffres et ne doit pas contenir de lettres.";
} else {
    errors = true;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (
    !(
        EmailInput.value.match(/@gmail\.com$/i) &&
        EmailInput.value.length >= 10
    )
) {
    errors = false;
    document.getElementById("emailEr").innerHTML = "Adresse email faible";
} else {
    errors = true;
}

if (EmailInput.value != cEmailInput.value) {
    errors = false;
    document.getElementById("cemailEr").innerHTML =
        "Les adresses mail ne correspondent pas";
} else {
    errors = true;
}
//Traitement générique
for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
        errors = false;
        document.getElementById("erreur").innerHTML =
            "Veuillez renseigner tous les champs";
    }
}

if (errors === false) {
    alert("Formulaire non envoyé");
    e.preventDefault();
} else {
    alert("Formulaire envoyé");
}
});