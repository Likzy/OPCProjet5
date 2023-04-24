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





const dotsdiv = document.querySelector(".dots");
for (let i = 0; i < (slides.length); i++) {
	const sliderdots = document.createElement("div");
	sliderdots.classList.add("dot");
	dotsdiv.appendChild(sliderdots);
	console.log(i);
};

