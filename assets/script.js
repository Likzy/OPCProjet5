const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.getElementById("arrow_left");

// Ajoutez un événement "click" avec une fonction de rappel
arrow_left.addEventListener("click", function() {
  // Code à exécuter lorsque le bouton est cliqué
  console.log("Fleche gauche");
});

const arrow_right = document.getElementById("arrow_right");

// Ajoutez un événement "click" avec une fonction de rappel
arrow_right.addEventListener("click", function() {
  // Code à exécuter lorsque le bouton est cliqué
  console.log("Fleche droite");
});



var position = 0;

const dotsdiv = document.querySelector(".dots");

for (let i = 0; i < (slides.length); i++) {
	const sliderdots = document.createElement("div");
	sliderdots.classList.add("dot");
	sliderdots.id = i
	if (i == 0) {
		sliderdots.classList.add("dot_selected");
	}
	dotsdiv.appendChild(sliderdots);

};




arrow_right.addEventListener("click", function() {
	console.log(position);
	if (position==(slides.length-1)){
		document.querySelector(".banner-img").setAttribute('src','./assets/images/slideshow/'+slides[(0)].image)
		document.getElementById("imagetagline").innerHTML=slides[(0)].tagLine
		document.querySelector(".dot_selected").classList.remove("dot_selected")
		document.getElementById(0).classList.add("dot_selected")
		position=0;
		}
	else{
	document.querySelector(".banner-img").setAttribute('src','./assets/images/slideshow/'+slides[(position+1)].image)
	document.getElementById("imagetagline").innerHTML=slides[(position+1)].tagLine
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	document.getElementById(position+1).classList.add("dot_selected")
	position++;
		};
	console.log(position);
});




arrow_left.addEventListener("click", function() {
	console.log(position);
	if (position==(0)){
		document.querySelector(".banner-img").setAttribute('src','./assets/images/slideshow/'+slides[(slides.length-1)].image)
		document.getElementById("imagetagline").innerHTML=slides[(slides.length-1)].tagLine
		document.querySelector(".dot_selected").classList.remove("dot_selected")
		document.getElementById(slides.length-1).classList.add("dot_selected")
		position=(slides.length-1);
		}
	else{
	document.querySelector(".banner-img").setAttribute('src','./assets/images/slideshow/'+slides[(position-1)].image)
	document.getElementById("imagetagline").innerHTML=slides[(position-1)].tagLine
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	document.getElementById(position-1).classList.add("dot_selected")
	position--;
		};
	console.log(position);
});


