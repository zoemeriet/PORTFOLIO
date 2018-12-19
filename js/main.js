const mobile = window.matchMedia( "(max-width: 900px)" );
const desktop = window.matchMedia( "(min-width: 900px)" );

if (mobile.matches) {
  /////////////////// BURGER MENU ///////////////////
  var myBurger = document.querySelector(".burger");
  var myNav = document.querySelector("nav");
  myBurger.addEventListener("click", function(event){
    myNav.classList.toggle("visible");
    myBurger.classList.toggle("active");
  });
  //////////////// BURGER MENU SCROLL ///////////////
  var myBurgerMenu = document.querySelectorAll('.menu__item');
  myBurgerMenu.forEach(function(e) {
    e.addEventListener('click', function() {
      var target = e.dataset.target;
      document.querySelector(target).scrollIntoView();
      myNav.classList.remove("visible");
      myBurger.classList.remove("active");
    });
  });
// Fin du if (mobile.matches)
};


if (desktop.matches) {

  ///////////////// PAS DE SCROLL /////////////////
  window.addEventListener("wheel", function(e) {
    e.preventDefault();
  });


  ////////////// BACKGROUND MOUSEMOVE /////////////
  var myBackground = document.querySelector(".background");
  var movementStrength = 25;
  var height = movementStrength / screen.height;
  var width = movementStrength / screen.width;

  window.addEventListener("mousemove", function(event){
    var pageX = event.pageX - (screen.width / 2);
  	var pageY = event.pageY - (screen.height / 2);
  	var newvalueX = width * pageX * -1 - 25;
  	var newvalueY = height * pageY * -1 - 50;
  	myBackground.style.backgroundPosition = newvalueX+"px     "+newvalueY+"px";
  });


  /////////////// SCROLL TRANSITION //////////////
  var myMenu = document.querySelectorAll('.menu__item');
  var myTransition = document.querySelector('.transition');
  myMenu.forEach(function(e) {
    e.addEventListener('click', function() {
      var target = e.dataset.target;
      myTransition.classList.add('active');
      setTimeout(function () {
        document.querySelector(target).scrollIntoView();
      }, 800);
      setTimeout(function(){
        myTransition.classList.remove('active');
      }, 1600);
    });
  });
  
// Fin de if (desktop.matches)
};


///////////////////////////
//// CHANGEMENT PROJET ////
///////////////////////////
var myNumProjet = document.querySelectorAll('.num_projet');
var myProject = document.querySelector(".projet_container");

var myProject1 = document.querySelector("#projet1");
var myProject2 = document.querySelector("#projet2");

var projet_image = document.querySelector(".work_image");
var projet_num = document.querySelector(".work_number p");
var projet_titre = document.querySelector(".projet_text h3");
var projet_description = document.querySelector(".projet_text p");
var projet_bouton = document.querySelector(".projet_text .button");


////// Projet 1 //////
myProject1.addEventListener('click', function() {
  myProject1.classList.add('num_actif');
  myProject2.classList.remove('num_actif');

  // Cacher
  myProject.classList.remove('projet_actif');

  setTimeout(function() {
    // Changement des éléments
    projet_image.style.backgroundImage = "url('img/projet/background_restaurant.jpg')";
    projet_num.innerHTML = "01";
    projet_titre.innerHTML = "Restaurant";
    projet_description.innerHTML = "Site fictif d'un restaurant. Réalisé en HTML/CSS";
    projet_bouton.innerHTML = "Voir la demo";
    // Découvrir
    myProject.classList.add('projet_actif');
  }, 1600);
});

////// Projet 2 //////
myProject2.addEventListener('click', function() {
  myProject2.classList.add('num_actif');
  myProject1.classList.remove('num_actif');

  // Cacher
  myProject.classList.remove('projet_actif');

  setTimeout(function() {
    // Changement des éléments
    projet_image.style.backgroundImage = "url('img/projet/background_gite.jpg')";
    projet_num.innerHTML = "02";
    projet_titre.innerHTML = "Gîte Entre Nous";
    projet_description.innerHTML = "Site Internet réalisé avec Wordpress";
    projet_bouton.innerHTML = "Voir le site";
    // Découvrir
    myProject.classList.add('projet_actif');
  }, 1600);
});
// myNumProjet.forEach(function(e) {
//   e.addEventListener('click', function() {
//     console.log(e);
//     if (e = myProject1) {
//       myProject2.classList.remove('num_actif');
//       myProject1.classList.add('num_actif');
//     }
//     if (e = myProject2) {
//       myProject2.classList.add('num_actif');
//       myProject1.classList.remove('num_actif');
//     }
//     myProject.classList.remove('projet_actif');
//     setTimeout(function(){
//       if (e = myProject1) {
//         projet_image.style.backgroundImage = "url('img/projet/background_restaurant.jpg')";
//         projet_num.innerHTML = "01";
//         projet_titre.innerHTML = "Restaurant";
//         projet_description.innerHTML = "Site fictif d'un restaurant. Réalisé en HTML/CSS";
//         projet_bouton.innerHTML = "Voir la demo";
//       }
//       if (e = myProject2) {
//         projet_image.style.backgroundImage = "url('img/projet/background_gite.jpg')";
//         projet_num.innerHTML = "02";
//         projet_titre.innerHTML = "Gîte Entre Nous";
//         projet_description.innerHTML = "Site Internet réalisé avec Wordpress";
//         projet_bouton.innerHTML = "Voir le site";
//       }
//       myProject.classList.add('projet_actif');
//     }, 1600);
//   });
// });
