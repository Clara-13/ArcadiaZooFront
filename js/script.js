const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-Btn");

if (signoutBtn){
signoutBtn.addEventListener("click", signout);
}

function getRole(){
    return getCookie(RoleCookieName);
}

function signout(){
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}

function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// la fonction vérifie si un utilisateur est connecté en vérifiant l'existence du token
function isConnected(){
    return getToken() !== null && getToken() !== undefined;
}

// la fonction parcourt tous les éléments avec l'attribut data-show et ajoute ou enlève la classe d-none en fonction de l'état de connexion de l'utilisateur et de son rôle.

function showandHideElementsForRoles() {
    const userConnected = isConnected();
    const role = getRole();

    let allElementstoEdit = document.querySelectorAll('[data-show]');

    allElementstoEdit.forEach(element => {
        switch (element.dataset.show) {

            // affiche seulement les élements avec data-show="disconnected", si l'utilisateur est connecté 

            case 'disconnected':
                if (userConnected) {
                    element.classList.add("d-none");
                } else {
                    element.classList.remove("d-none");
                }
                break;

            // Affiche l'élément seulement si l'utilisateur est connecté avec data-show="connected", quel que soit son rôle.

            case 'connected':
                if (userConnected) {
                    element.classList.remove("d-none");
                } else {
                    element.classList.add("d-none");
                }
                break;

            // Affiche l'élément seulement si l'utilisateur est connecté et si son rôle = admin

            case 'admin':
                if (!userConnected || role != "admin") {
                    element.classList.add("d-none");
                } else {
                    element.classList.remove("d-none");
                }
                break;

            // Affiche l'élément seulement si l'utilisateur est connecté et si son rôle = vet
            case 'vet':
                if (!userConnected || role != "vet") {
                    element.classList.add("d-none");
                } else {
                    element.classList.remove("d-none");
                }
                break;

            // Affiche l'élément seulement si l'utilisateur est connecté et si son rôle = employee

            case 'employee':
                if (!userConnected || role != "employee") {
                    element.classList.add("d-none");
                } else {
                    element.classList.remove("d-none");
                }
                break;
        }
    });
}

// la fonction parcourt tous les éléments avec l'attribut data-show et ajoute ou enlève la classe d-none en fonction de l'état de connexion de l'utilisateur et de son rôle. Ces éléments peuvent être gérer par plusieurs rôles

function showandHideElementsForMultipleRoles() {
    const userConnected = isConnected();
    const role = getRole();
    

    let allElementstoEdit = document.querySelectorAll('[data-show]');

    allElementstoEdit.forEach(element => {
        const rolesToShow = element.dataset.show.split(',').map(role => role.trim());
       


        if (rolesToShow.includes('connected') && userConnected) {
            element.classList.remove("d-none");
        } else if (rolesToShow.includes('disconnected') && !userConnected) {
            element.classList.remove("d-none");
        } else if (userConnected && rolesToShow.includes(role)) {
            element.classList.remove("d-none");
        } else {
            element.classList.add("d-none");
        }
    });
}



