// Sélection des élements HTML "page"
var pageProjets = document.querySelector('main.projets');

// Création des tableaux
var arrayProjet = new Array();
var arrayNumeroProjet = new Array();

var arrayImage = new Array(); // image du projet
var arrayTitle = new Array(); // titre du projet
var arrayDescription = new Array(); // description de la marque
var arrayAnnee = new Array(); // année de la mission
var arrayClient = new Array(); // client de la mission
var arrayMission = new Array(); // description de la mission
var arrayMaquette = new Array(); // description de la mission


fetch('http://admin.zoemeriet.com/wp-json/wp/v2/projet').then(function(res) {
	return res.json().then(function(data_projet) {
		console.log(data_projet);
    for (var i = 0; i < data_projet.length; i++) {

      // Ajout des informations dans des tableaux
			arrayNumeroProjet.push('projet' + i);
			arrayImage.push(data_projet[i].acf.image_presentation);
			arrayTitle.push(data_projet[i].title.rendered);
			arrayDescription.push(data_projet[i].acf.description);
			arrayAnnee.push(data_projet[i].acf.annee);
			arrayClient.push(data_projet[i].acf.client);
			arrayMission.push(data_projet[i].acf.mission);
			arrayMaquette.push(data_projet[i].acf.maquette);


			// CONTAINER PROJET //
      var projet_container = document.createElement('section');
      pageProjets.appendChild(projet_container);
			projet_container.classList.add('projet');
			projet_container.classList.add('projet' + i);

			// PHOTO DE PRESENTATION //
			var projet_image = document.createElement('div');
			projet_container.appendChild(projet_image);
			projet_image.classList = 'projet_image';
			var contenu_projetImage = data_projet[i].acf.image_presentation;
      projet_image.style.backgroundImage = "url('"  + contenu_projetImage + "')";

			// CONTAINER TEXTE //
			var projet_content = document.createElement('div');
			projet_container.appendChild(projet_content);
			projet_content.classList = 'projet_content';

			// BACKGROUND 1 //
			var projet_background = document.createElement('div');
			projet_content.appendChild(projet_background);
			projet_background.classList = 'projet_background';

			// BACKGROUND 2 //
			var projet_background_move = document.createElement('div');
			projet_content.appendChild(projet_background_move);
			projet_background_move.classList = 'projet_background_move';
			var contenu_couleur = data_projet[i].acf.couleur;
			projet_background_move.style.backgroundColor = contenu_couleur;

			// NUMÉRO //
      var projet_num = document.createElement('p');
      projet_content.appendChild(projet_num);
			projet_num.classList = 'projet_number';
			var contenu_projetNum = i + 1;
			if (contenu_projetNum < 10) {
				projet_num.textContent = '0' + contenu_projetNum;
			} else {
				projet_num.textContent = contenu_projetNum;
			}

      // TITRE //
      var projet_title = document.createElement('h2');
      projet_content.appendChild(projet_title);
			projet_title.classList = 'projet_title';
			var contenu_projetTitle = data_projet[i].title.rendered;
      projet_title.textContent = contenu_projetTitle;

    }
		handleOtherStuff();
  });
});

//////////////////////////////////////////////
// A FAIRE APRÈS LE CHARGEMENT DES ÉLÉMENTS //
//////////////////////////////////////////////
var handleOtherStuff = () => {

	// Apparition et disparition de la modale
	var projets = document.querySelectorAll('.projet');
	var modale = document.querySelector('.modale');
	var arrow = document.querySelector('.arrow');

	var descriptionProjet_title = document.querySelector('.descriptionProjet_title');
	var descriptionProjet_image = document.querySelector('.descriptionProjet_image');
	var descriptionProjet_description = document.querySelector('.descriptionProjet_description');
	var descriptionProjet_annee = document.querySelector('.annee p');
	var descriptionProjet_client = document.querySelector('.client p');
	var descriptionProjet_mission = document.querySelector('.mission p');
	var descriptionProjet_maquette = document.querySelector('.descriptionProjet_maquette img');

	projets.forEach(function(projet) {
		projet.addEventListener('click', function() {
			modale.classList.add('open');

			switch (projet.classList[1]) {
				case 'projet2':
					descriptionProjet_image.style.backgroundImage = "url('"  + arrayImage[2] + "')";
					descriptionProjet_title.textContent = arrayTitle[2];
					descriptionProjet_description.textContent = arrayDescription[2];
					descriptionProjet_annee.textContent = arrayAnnee[2];
					descriptionProjet_client.textContent = arrayClient[2];
					descriptionProjet_mission.textContent = arrayMission[2];
					descriptionProjet_maquette.setAttribute("src", arrayMaquette[2]);
					break;
			}

		});
	});

	arrow.addEventListener('click', function() {
		modale.classList.remove('open');
	});






// Fin de handleOtherStuff()
};
