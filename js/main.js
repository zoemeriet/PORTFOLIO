//// BURGER MENU ////
var myBurger = document.querySelector(".burger");
var myNav = document.querySelector("nav");
myBurger.addEventListener("click", function(event){
  myNav.classList.toggle("visible");
  myBurger.classList.toggle("active");
});

//// OUVERTURE PROJET ////
var myProjectItems = document.querySelectorAll(".gallery-wrap .item");
myProjectItems.forEach(function(myProectItem) {
  myProectItem.addEventListener("click", function(event){
    var target = event.target;
    target.classList.toggle("active");
  });
});



const mobile = window.matchMedia( "(max-width: 900px)" );
const desktop = window.matchMedia( "(min-width: 900px)" );

if (mobile.matches) {

// Fin du if (mobile.matches)
};


if (desktop.matches) {

  ///////////////// PAS DE SCROLL /////////////////
  // window.addEventListener("wheel", function(e) {
  //   e.preventDefault();
  // });


  ////////////// BACKGROUND MOUSEMOVE /////////////
  // var myBackground = document.querySelector(".background");
  // var movementStrength = 25;
  // var height = movementStrength / screen.height;
  // var width = movementStrength / screen.width;
  //
  // window.addEventListener("mousemove", function(event){
  //   var pageX = event.pageX - (screen.width / 2);
  // 	var pageY = event.pageY - (screen.height / 2);
  // 	var newvalueX = width * pageX * -1 - 25;
  // 	var newvalueY = height * pageY * -1 - 50;
  // 	myBackground.style.backgroundPosition = newvalueX+"px     "+newvalueY+"px";
  // });


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



  /////////////// SCROLL TRANSITION PROJETS //////////////
  // var transitionning = false;
  // var projets = document.querySelectorAll('main.works section');
  // console.log(projets);
  // var index = 0;
  //
  // pageProjets.addEventListener('wheel', function(e) {
  // 	if (e.deltaY > 10 && !transitionning) {
  // 		transitionning = true;
  //     index++;
  //     if (index >= projets.length) index = projets.length - 1;
  //     var currentActive = document.querySelector('section.active');
  //     currentActive.classList.remove('active');
  //     projets[index].classList.add('active');
  //     setTimeout(function() {
  //         transitionning = false;
  //     }, 1000);
  //   } else if (e.deltaY < -10 && !transitionning) {
  //     transitionning = true;
  //     index--;
  //     if (index < 0) index = 0;
  //     var currentActive = document.querySelector('section.active');
  //     currentActive.classList.remove('active');
  //     projets[index].classList.add('active');
  //     setTimeout(function() {
  //         transitionning = false;
  //     }, 1000);
  //   }
  // });



// var projet1 = document.querySelector('main.works section:nth-of-type(0)');
// console.log(projet1);
// var indexSlide = 0;
//
// let lastDeltaY = 0;
// let lastTime = 0;
//
// document.addEventListener('mousewheel', function(e) {
//     const time = +new Date;
//     if (Math.abs(e.deltaY) > Math.abs(lastDeltaY) && time > lastTime + 1000) {
//     	indexSlide = +indexSlide + (e.deltaY > 0 ? 1 : -1);
//       lastTime = time;
//
//       // conditions pour ne pas sortir du tableau
//       if (indexSlide < 0) {
//         indexSlide = 0;
//       } else if (indexSlide > 2) {
//         indexSlide = 2;
//       } // fin des conditions
//
//     } // fin du if
//     lastDeltaY = e.deltaY;
//     console.log(indexSlide);
//     for (var i = 0; i < myArray.length; i++) {
//       myArray[i].classList.remove('visible');
//     }
//     myArray[indexSlide].classList.add('visible');
// });
//
// Fin de if (desktop.matches)
};


// ///////////////////////////
// //// CHANGEMENT PROJET ////
// ///////////////////////////
// var myNumProjet = document.querySelectorAll('.num_projet');
// var myProject = document.querySelector(".projet_container");
//
// var myProject1 = document.querySelector("#projet1");
// var myProject2 = document.querySelector("#projet2");
//
// var projet_image = document.querySelector(".work_image");
// var projet_num = document.querySelector(".work_number p");
// var projet_titre = document.querySelector(".projet_text h3");
// var projet_description = document.querySelector(".projet_text p");
// var projet_bouton = document.querySelector(".projet_text .button span");
// var projet_url = document.querySelector(".projet_text a");
//
//
// ////// Projet 1 //////
// myProject1.addEventListener('click', function() {
//   myProject1.classList.add('num_actif');
//   myProject2.classList.remove('num_actif');
//
//   // Cacher
//   myProject.classList.remove('projet_actif');
//
//   setTimeout(function() {
//     // Changement des éléments
//     projet_image.style.backgroundImage = "url('img/projet/background_restaurant.jpg')";
//     projet_num.textContent = "01";
//     projet_titre.textContent = "Restaurant";
//     projet_description.textContent = "Site fictif d'un restaurant. Réalisé en HTML/CSS";
//     projet_bouton.textContent = "Voir la demo";
//     projet_url.href = "http://restaurant.zoemeriet.com/";
//     // Découvrir
//     myProject.classList.add('projet_actif');
//   }, 900);
// });
//
// ////// Projet 2 //////
// myProject2.addEventListener('click', function() {
//   myProject2.classList.add('num_actif');
//   myProject1.classList.remove('num_actif');
//
//   // Cacher
//   myProject.classList.remove('projet_actif');
//
//   setTimeout(function() {
//     // Changement des éléments
//     projet_image.style.backgroundImage = "url('img/projet/background_gite.jpg')";
//     projet_num.textContent = "02";
//     projet_titre.textContent = "Gîte Entre Nous";
//     projet_description.textContent = "Site Internet réalisé avec Wordpress";
//     projet_bouton.textContent = "Voir le site";
//     projet_url.href = "https://gite-entrenous.com/";
//     // Découvrir
//     myProject.classList.add('projet_actif');
//   }, 900);
// });
