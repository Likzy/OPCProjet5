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
const arrow_right = document.getElementById("arrow_right");

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
	if (position==(slides.length-1)){
		position=0;
		}
	else{
	position++;
	};
	document.querySelector(".banner-img").setAttribute('src','./assets/images/slideshow/'+slides[(position)].image)
	document.getElementById("imagetagline").innerHTML=slides[(position)].tagLine
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	document.getElementById(position).classList.add("dot_selected")
});

arrow_left.addEventListener("click", function() {
	if (position==(0)){
		position=(slides.length-1);
		}
	else{
		position--;
	}
	document.querySelector(".banner-img").setAttribute('src','./assets/images/slideshow/'+slides[(position)].image)
	document.getElementById("imagetagline").innerHTML=slides[(position)].tagLine
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	document.getElementById(position).classList.add("dot_selected")
});


