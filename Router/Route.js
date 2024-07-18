export default class Route {
  constructor(url, title, pathHtml,authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnecté 
["connected"] -> Réserver aux utilisateurs avec le rôle client OU admin OU vet
["employee"] -> Réserver aux utilisateurs avec le rôle employé
["vet"] -> Réserver aux utilisateurs avec le rôle vétérinaire
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
["employee","admin","vet"] -> Réserver aux utilisateurs avec le rôle employé OU admin OU vet
*/