//////////////////////////
//// SCROLL ANIMATION ////
//////////////////////////





const mq = window.matchMedia( "(min-width: 900px)" );

if (mq.matches) {
///////////////////////////
////// PAS DE SCROLL //////
///////////////////////////
window.addEventListener("wheel", function(e) {
  e.preventDefault();
});
//////////////////////////////
//// BACKGROUND MOUSEMOVE ////
//////////////////////////////
var myBackground = document.querySelector(".background");
var movementStrength = 25;
var height = movementStrength / screen.height;
var width = movementStrength / screen.width;
console.log(width);
window.addEventListener("mousemove", function(event){
  var pageX = event.pageX - (screen.width / 2);
	var pageY = event.pageY - (screen.height / 2);
	var newvalueX = width * pageX * -1 - 25;
	var newvalueY = height * pageY * -1 - 50;
	myBackground.style.backgroundPosition = newvalueX+"px     "+newvalueY+"px";
});

////////////////////
//// TRANSITION ////
////////////////////
var myMenu = document.querySelectorAll('.menu__item');
var myTransition = document.querySelector('.transition');
myMenu.forEach(function(e) {
  e.addEventListener('click', function() {
    myTransition.classList.add('active');
    setTimeout(function(){
      myTransition.classList.remove('active');
    }, 3000);
  });
});

}

//// BURGER MENU ////
var myBurger = document.querySelector(".burger");
var myNav = document.querySelector("nav");
myBurger.addEventListener("click", function(event){
  myNav.classList.toggle("visible");
  myBurger.classList.toggle("active");
});

var myImage = document.querySelector(".projets h2");
var myCover1 = document.querySelector(".image_cover:first-child");
var myCover2 = document.querySelector(".image_cover:last-child");
myImage.addEventListener("click", function(){
  myCover1.classList.toggle('image_left');
  myCover2.classList.toggle('image_left');
});
