
# Arcadia Zoo

Arcadiazoo est une application web qui permet aux utilisateurs de consulter des informations sur les animaux du zoo et de contacter le personnel du zoo pour des questions ou des réservations d'événements.

## Table des Matières
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contributing](#contributing)
- [Licence](#licence)
- [Contact](#contact)
- [Références](#références)

### Prérequis
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/)

## Installation

1. Clonez le dépôt
   ```cmd
   git clone https://github.com/Clara-13/ArcadiaZooFront.git
   cd Arcadiazoo

2. Configuration du Front-End
   ```cmd
   cd ArcadiazooFront
   npm install
   npm start 
   
3. Configuration du Back-End
    ```cmd
   cd ../Arcadiazooback
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php -S localhost:8000 -t public
## Utilisation 
front-end : npm start

back-end : php -S localhost:8000 -t public

## Contributing 
Les contributions sont les bienvenues!
Veuillez suivre les étapes suivantes :

- Forkez le projet
- Créez votre branche de fonctionnalité (git checkout -b feature/ma-fonctionnalité)
- Committez vos modifications (git - commit -m 'Ajout de ma fonctionnalité')
- Poussez à la branche (git push origin feature/ma-fonctionnalité)
- Ouvrez une Pull Request

## Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.

## Contact
Nom: Randrianarinosy Clara

Email: clararandria@gmail.com

GitHub: clara-13


## Références

- MDN Webs docs
- Documentation Bootstrap
- Documentation Node.js
- Documentation PHP


