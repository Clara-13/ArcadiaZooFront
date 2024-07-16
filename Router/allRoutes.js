import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/habitats", "Nos habitats", "/pages/habitats.html"),
    new Route("/services", "Nos services","/pages/services.html"),
    new Route("/animaux", "Nos Animaux","/pages/animaux.html"),
    new Route("/signin", "Connexion","/pages/signin.html"),
    new Route("/contact", "Contact","/pages/contact.html"),
    new Route("/account", "Mon Compte","/pages/compte.html"),
    new Route("/create-account", "Création de compte","/pages/create-account.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";