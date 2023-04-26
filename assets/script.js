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
const currentsliderdot = document.createElement("div");
currentsliderdot.classList.add("dot");
currentsliderdot.classList.add("dot_selected");
dotsdiv.appendChild(currentsliderdot);

for (let i = 0; i < (slides.length-1); i++) {
	const sliderdots = document.createElement("div");
	sliderdots.classList.add("dot");
	dotsdiv.appendChild(sliderdots);

};




arrow_right.addEventListener("click", function() {
	if (position==0){
		document.querySelector(".dots").innerHTML="";
		const dotsdiv = document.querySelector(".dots");

		for (let i = 0; i < (position+1); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
		const currentsliderdot = document.createElement("div");
		currentsliderdot.classList.add("dot");
		currentsliderdot.classList.add("dot_selected");
		dotsdiv.appendChild(currentsliderdot);

		for (let i = 0; i < (slides.length-2); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
	};
	if (position==1){
		document.querySelector(".dots").innerHTML="";
		const dotsdiv = document.querySelector(".dots");

		for (let i = 0; i < (position+1); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
		const currentsliderdot = document.createElement("div");
		currentsliderdot.classList.add("dot");
		currentsliderdot.classList.add("dot_selected");
		dotsdiv.appendChild(currentsliderdot);

		for (let i = 0; i < (slides.length-3); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
	
		
	};
	if (position==2){
		document.querySelector(".dots").innerHTML="";
		const dotsdiv = document.querySelector(".dots");

		for (let i = 0; i < (position+1); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
		const currentsliderdot = document.createElement("div");
		currentsliderdot.classList.add("dot");
		currentsliderdot.classList.add("dot_selected");
		dotsdiv.appendChild(currentsliderdot);

		for (let i = 0; i < (slides.length-4); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
	
	};

	// This is the last loop, if you add any images change the position==3 to your last number and add other if checks above this line
	// (this loop is an exception because it goes back to position 0)

	if (position==3){
		document.querySelector(".dots").innerHTML="";
		const dotsdiv = document.querySelector(".dots");
		for (let i = 0; i < (position-position); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
		const currentsliderdot = document.createElement("div");
		currentsliderdot.classList.add("dot");
		currentsliderdot.classList.add("dot_selected");
		dotsdiv.appendChild(currentsliderdot);

		for (let i = 0; i < (slides.length-1); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);

		};
		
	};
	console.log(position);
	if (position==slides.length-1){
		position = 0;
	} 	else{
		position++;
			};
	console.log(position);		
});




arrow_left.addEventListener("click", function() {
	if (position==0){
		document.querySelector(".dots").innerHTML="";
		const dotsdiv = document.querySelector(".dots");

		for (let i = 0; i < (position+3); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
		const currentsliderdot = document.createElement("div");
		currentsliderdot.classList.add("dot");
		currentsliderdot.classList.add("dot_selected");
		dotsdiv.appendChild(currentsliderdot);

		for (let i = 0; i < (slides.length-4); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
		position=0;
		
	};
	if (position==1){
		document.querySelector(".dots").innerHTML="";
		const dotsdiv = document.querySelector(".dots");

		for (let i = 0; i < (position-1); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
		const currentsliderdot = document.createElement("div");
		currentsliderdot.classList.add("dot");
		currentsliderdot.classList.add("dot_selected");
		dotsdiv.appendChild(currentsliderdot);

		for (let i = 0; i < (slides.length-position); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
	
		
	};
	if (position==2){
		document.querySelector(".dots").innerHTML="";
		const dotsdiv = document.querySelector(".dots");

		for (let i = 0; i < (position-1); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
		const currentsliderdot = document.createElement("div");
		currentsliderdot.classList.add("dot");
		currentsliderdot.classList.add("dot_selected");
		dotsdiv.appendChild(currentsliderdot);

		for (let i = 0; i < (slides.length-position); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
	
	};
	if (position==3){
		document.querySelector(".dots").innerHTML="";
		const dotsdiv = document.querySelector(".dots");

		for (let i = 0; i < (position-1); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
		const currentsliderdot = document.createElement("div");
		currentsliderdot.classList.add("dot");
		currentsliderdot.classList.add("dot_selected");
		dotsdiv.appendChild(currentsliderdot);

		for (let i = 0; i < (slides.length-position); i++) {
			const sliderdots = document.createElement("div");
			sliderdots.classList.add("dot");
			dotsdiv.appendChild(sliderdots);
			
		};
	};
	console.log(position);	
	if (position==0){
		position = 3;
	} 	else{
		position--;
			};
	console.log(position);	
});


