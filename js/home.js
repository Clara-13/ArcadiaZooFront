
    document.getElementById('AddReviewForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const pseudo = document.getElementById('AddReviewPseudo').value;
        const reviewText = document.getElementById('AddReviewDescription').value;

        if (pseudo && reviewText) {
            // Créer un nouvel élément de carousel
            const newReviewItem = document.createElement('div');
            newReviewItem.classList.add('carousel-item');

            newReviewItem.innerHTML = `
                <div class="review bg-primary text-white text-center p-4 rounded">
                    <p>"${reviewText}"</p>
                    <footer class="blockquote-footer text-white">${pseudo}</footer>
                    <div data-show="employee" class="d-none">
                        <button class="btn btn-success validate-review">Valider</button>
                        <button class="btn btn-danger invalidate-review">Invalider</button>
                    </div>
                </div>
            `;

            // Ajouter le nouvel avis à la fin du carousel
            document.querySelector('#reviewsCarousel .carousel-inner').appendChild(newReviewItem);

            // Optionnel: Définir le nouvel avis comme actif
            const allReviews = document.querySelectorAll('#reviewsCarousel .carousel-item');
            allReviews.forEach(item => item.classList.remove('active'));
            newReviewItem.classList.add('active');

            // Réinitialiser le formulaire
            document.getElementById('AddReviewForm').reset();

            // Fermer la modale
            const modal = bootstrap.Modal.getInstance(document.getElementById('AddReviewModal'));
            modal.hide();

            alert('Merci pour votre avis !');
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });


    // Ajouter des écouteurs d'événements pour les boutons de validation et d'invalidation
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('validate-review')) {
            event.preventDefault();
            alert('Avis validé.');
            // Ajoutez ici le code pour envoyer l'avis validé au serveur
        }

        if (event.target.classList.contains('invalidate-review')) {
            event.preventDefault();
            event.target.closest('.carousel-item').remove();
            alert('Avis invalidé.');
            // Ajoutez ici le code pour envoyer l'avis invalidé au serveur
        }
    });


