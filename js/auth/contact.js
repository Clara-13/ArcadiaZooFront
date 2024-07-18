// Récupérer les éléments du formulaire
const inputTitle = document.getElementById("TitleInput");
const inputMail = document.getElementById("EmailInput");
const inputMessage = document.getElementById("MessageInput");
const btnValidation = document.getElementById("btn-send");

// Ajouter des écouteurs d'événements pour valider les champs en temps réel
inputTitle.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputMessage.addEventListener("keyup", validateForm);

// Fonction de validation du formulaire
function validateForm() {
    const titleOK = validateRequired(inputTitle);
    const mailOK = validateMail(inputMail);
    const messageOK = validateRequired(inputMessage);

    // Activer ou désactiver le bouton de validation en fonction de la validité des champs
    btnValidation.disabled = !(titleOK && mailOK && messageOK);
}

// Fonction de validation d'un champ requis
function validateRequired(input) {
    if (input.value.trim() !== '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction de validation du format de l'email
function validateMail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value.trim();
    if (emailRegex.test(mailUser)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Appeler la fonction de validation au chargement de la page pour initialiser l'état du bouton
document.addEventListener("DOMContentLoaded", validateForm);
