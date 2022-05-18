"use strict"; // Strictmode för att få felmeddelanden i konsollen 

const menu = {
	"Pizzor klass 1": [
		{"name": "Margherita", "contents": ["Tomatsås", "Ost"], "price": 65 },
		{"name": "Vesuvio", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 65 },
		{"name": "Altono", "contents": ["Tomatsås", "Ost", "Tonfisk"], "price": 65 }
	],
	"Pizzor klass 2": [
		{"name": "Calzone", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 80 },
		{"name": "Capricciosa", "contents": ["Tomatsås", "Ost", "Skinka", "Champinjoner" ], "price": 70 },
		{"name": "Tomaso", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor" ], "price": 70 },
		{"name": "Hawaii", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas" ], "price": 70 },
		{"name": "Oriental", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs" ], "price": 70 },
		{"name": "Venezia", "contents": ["Tomatsås", "Ost", "Skinka", "Tonfisk" ], "price": 70 },
		{"name": "Bolognese", "contents": ["Tomatsås", "Ost", "Köttfärs", "Lök" ], "price": 70 },
		{"name": "Napoli", "contents": ["Tomatsås", "Ost", "a:Räkor", "Champinjoner" ], "price": 70 }
	],
	"Pizzor klass 3": [
		{"name": "Bravo", "contents": ["Tomatsås", "Ost", "Skinka", "Bacon", "Lök", "a:Ägg" ], "price": 75 },
		{"name": "Princessa", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner" ], "price": 75 },
		{"name": "Kroppkärr", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "Champinjoner" ], "price": 75 },
		{"name": "Afrikano", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Önska", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner" ], "price": 85 },
		{"name": "Lambada", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "a:Räkor" ], "price": 75 },
		{"name": "Alsterdalen", "contents": ["Tomatsås", "Ost", "Skinka", "a:Crabfish", "a:Räkor" ], "price": 75 },
		{"name": "Paradis", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Ananas" ], "price": 75 },
		{"name": "Roma", "contents": ["Tomatsås", "Ost", "Skinka", "Kantareller", "Tomater (färska)" ], "price": 75 },
		{"name": "Banjogatan", "contents": ["Tomatsås", "Ost", "Skinka", "Salami", "Paprika" ], "price": 75 },
		{"name": "Rimini", "contents": ["Tomatsås", "Ost", "Köttfärs", "Gorgonzolaost", "Lök" ], "price": 75 },
		{"name": "Opera", "contents": ["Tomatsås", "Ost", "Köttfärs", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Mesopotamia", "contents": ["Tomatsås", "Ost", "Salami", "Köttfärs", "a:Nötter"], "price": 75 }
	],
	"Såser": [
		{"name": "Bearnaisesås 10 cl ", "price":  10 },
		{"name": "Kebabsås mild 10 cl ", "price":  10 },
		{"name": "Kebabsås stark 10 cl ", "price":  10 },
		{"name": "Kebabsås blandad 10 cl ", "price":  10 },
		{"name": "Tzatzikisås 10 cl ", "price":  10 },
		{"name": "Vitlökssås 10 cl ", "price": 10}
	],
	"Dryck": [
		{"name": "Coca-Cola 33 cl ", "price":  15 },
		{"name": "Coca-Cola light 33 cl ", "price":  15 },
		{"name": "Fanta 33 cl ", "price":  15  },
		{"name": "Sprite 33 cl ", "price":  15 },
		{"name": "Mineralvatten 33 cl ", "price":  15 },
		{"name": "Lättöl 33 cl ", "price":  15 },
		{"name": "Coca-Cola 50 cl ", "price":  20 },
		{"name": "Fanta 50 cl ", "price":  20 }
	]
}

window.addEventListener("load", function() {

	let group1 = document.querySelector("#list-group-1");
	let group2 = document.querySelector("#list-group-2");
	let group3 = document.querySelector("#list-group-3");
	let group4 = document.querySelector("#list-group-4");

	menu["Pizzor klass 1"].forEach(pizza => {
		addItem(pizza, group1);
	});

	menu["Pizzor klass 2"].forEach(pizza => {
		addItem(pizza, group2);
	});

	menu["Pizzor klass 3"].forEach(pizza => {
		addItem(pizza, group3);
	});

	menu["Såser"].forEach(sauce => {
		addItem(sauce, group4);
	});
});

function addItem(item, group) { 
	let div = document.createElement("div");
	div.classList.add("list-group-item");
	group.appendChild(div);

	let text = document.createElement("h3");
	text.textContent = item.name + " ";
	div.appendChild(text);

	let price = document.createElement("span");
	price.textContent = item.price + " kr";
	price.style.fontStyle = "italic";
	text.appendChild(price);

	if(!item.name.endsWith(" ")) {
		addDescription(item, div);
	}

	let imageDiv = document.createElement("div");
	imageDiv.setAttribute("class", "imageDiv");
	div.appendChild(imageDiv);

	let minusImage = document.createElement("img");
	minusImage.src = "images/minus.png";
	minusImage.style.width = "30px"; // Får vi ha fasta pixelvärden?
	minusImage.style.display = "none";
	imageDiv.appendChild(minusImage);

	let plusImage = document.createElement("img");
	plusImage.src = "images/plus.png";
	plusImage.style.width = "30px";
	imageDiv.appendChild(plusImage);
	plusImage.addEventListener("click", function() {
		console.log("hej");
		minusImage.style.display = "block";
	});
}

function addDescription(pizza, div) {

	pizza.contents.forEach(ingredient => {
		let p  = document.createElement("span");
		p.textContent = ingredient + " ";

		if(ingredient.startsWith("a:")) {
			p.style.fontWeight = "bold";
			p.textContent = p.textContent.slice(2, p.textContent.length);
		}
		
		for(let i=0;i<pizza.contents.length;i++) {
			div.appendChild(p);
		}
	}); 
}