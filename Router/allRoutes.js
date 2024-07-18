import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[],"/js/home.js"),
    new Route("/habitats", "Nos habitats", "/pages/habitats.html", []),
    new Route("/services", "Nos services","/pages/services.html", []),
    new Route("/animaux", "Nos Animaux","/pages/animaux.html", [], "js/animaux.js"),
    new Route("/signin", "Connexion","/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/contact", "Contact","/pages/contact.html",["disconnected"],"/js/auth/contact.js"),
    new Route("/account", "Mon Compte","/pages/auth/compte.html",["admin"]),
    new Route("/create-account", "Création de compte","/pages/auth/create-account.html", ["admin"],"/js/auth/create-account.js"),
    new Route("/vet-report", "Rapports vétérinaire","/pages/rapport-Vet.html", ["admin"],"js/vet-report.js"),
];

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnecté 
["connected"] -> Réserver aux utilisateurs avec le rôle client OU admin OU vet
["employee"] -> Réserver aux utilisateurs avec le rôle employé
["vet"] -> Réserver aux utilisateurs avec le rôle vétérinaire
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
["employee","admin","vet"] -> Réserver aux utilisateurs avec le rôle employé OU admin OU vet
*/

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";