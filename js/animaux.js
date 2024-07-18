// fonction pour que cela redirige de manière fluide
document.addEventListener("DOMContentLoaded", function() {
    if(window.location.hash) {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
});
