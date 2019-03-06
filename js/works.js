// Sélection des élements HTML "page"
var pageProjets = document.querySelector('main.works');


fetch('http://admin.zoemeriet.com/wp-json/wp/v2/projet').then(function(res) {
	return res.json().then(function(data_projet) {

    for (var i = 0; i < data_projet.length; i++) {
      // Création de la section de chaque projet
      var projet_container = document.createElement('section');
      pageProjets.appendChild(projet_container);
			var firstContainer = document.querySelector('section:first-child');
			firstContainer.classList = 'active';
			var projet_container2 = document.createElement('div');
			projet_container2.classList = 'projet_container';
			projet_container.appendChild(projet_container2);

			// PHOTO DE PRESENTATION //
      var photoPresentation = document.createElement('div');
      photoPresentation.classList = 'photoPresentation';
      projet_container2.appendChild(photoPresentation);
      var contenu_photoPresentation = data_projet[i].acf.image_presentation;
      photoPresentation.style.backgroundImage = "url('"  + contenu_photoPresentation + "')";


			// CONTAINER TEXTE //
			var texte_container = document.createElement('div');
			projet_container2.appendChild(texte_container);
			texte_container.classList = 'texte_container';

      // TITRE //
      var titre_container = document.createElement('div');
      texte_container.appendChild(titre_container);
			titre_container.classList = 'titre';

			var titre = document.createElement('h1');
      titre_container.appendChild(titre);

      var contenu_titre = data_projet[i].title.rendered;
      titre.textContent = contenu_titre;


			// BOUTON //
      var bouton_container = document.createElement('a');
      texte_container.appendChild(bouton_container);
			bouton_container.classList = 'bouton';

			var bouton = document.createElement('div');
      bouton_container.appendChild(bouton);

      bouton.textContent = 'Voir le projet';
    }
  });
});
