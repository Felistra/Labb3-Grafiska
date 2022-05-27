"use strict"; // Strictmode för att få felmeddelanden i konsollen och i IDE:n

/* JSON-objekt med menyn, gjort den till en konstant då den ej ska kunna modifieras */
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

/* Variabler för att hämta ut listgrupperna i domen */
let group1 = document.querySelector("#list-group-1");
let group2 = document.querySelector("#list-group-2");
let group3 = document.querySelector("#list-group-3");
let group4 = document.querySelector("#list-group-4");
let group5 = document.querySelector("#list-group-5");
let group6 = document.querySelector("#list-group-orders");

let item1 = document.querySelector("#item1");
let item2 = document.querySelector("#item2");
let item3 = document.querySelector("#item3");
let item4 = document.querySelector("#item4");
let item5 = document.querySelector("#item5");
let item6 = document.querySelector("#item6");

let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");

let priceLabel = document.querySelector("#priceLabel");
let orderButton = document.querySelector("#order-button");
let badge = document.querySelector(".badge");
let nbrOfOrders = document.querySelector("#nbrOfOrders");
let textArea = document.querySelector("textarea");
let startOption = document.querySelector("#start");

let counter = 0; // Räknare för antal i varukorgen
let order = []; // Tom array som ska innehålla en order
let totalPrice = 0;  // Totala priset för ett köp

/* När sidan har laddats och domen har byggts upp */
window.addEventListener("load", function() {

	/* Lägger på klassen .active på Mat-knappen och klassen .hidden på allt som inte ska visas på sidan */
	button1.classList.add("active");
	item5.classList.add("hidden");
	item6.classList.add("hidden");
	badge.classList.add("hidden");

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

	button1.addEventListener("click", viewPizzas);
	button2.addEventListener("click", viewDrinks);
	button3.addEventListener("click", viewBasket);

	orderButton.addEventListener("click", checkOutOrder);
	
});

/* Metod som rensar en list-group för att inte få dubletter */
function clearGroup(group) {
	group.innerHTML = "";
}

/* Metod som skapar upp taggar dynamiskt och presenterar mat, sås och dryck i list-group-items */
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

	if(!item.name.endsWith(" ")) { // Om ett item i foreachen slutar på ett mellanslag så är det en pizza och ska då skriva ut innehållet
		addDescription(item, div);
	}

	let imageDiv = document.createElement("div");
	imageDiv.setAttribute("class", "imageDiv");
	div.appendChild(imageDiv);

	let plusImage = document.createElement("img");
	plusImage.src = "images/plus.png";
	plusImage.style.width = "30px";
	imageDiv.appendChild(plusImage);

	plusImage.addEventListener("click", function() { // Vid klick på ett plustecken så läggs ett item till i order
		order.push(item);
		totalPrice = totalPrice + item.price;
		priceLabel.textContent = totalPrice; 
		counter++;
		badge.classList.remove("hidden");
		nbrOfOrders.textContent = counter;
		addToBasket(order); 
	});
}

/* Metod som anropas om ett item är en pizza och ska skriva ut innehåller i pizzan */
function addDescription(pizza, div) {

	pizza.contents.forEach(ingredient => {
		let span  = document.createElement("span");
		span.textContent = ingredient + " ";
		span.setAttribute("class", "ingredients");
		

		if(ingredient.startsWith("a:")) { // Om en ingrediens startar på a: är det en allergen
			span.style.fontWeight = "bold";
			span.textContent = span.textContent.slice(2, span.textContent.length);
		}
		
		for(let i=0;i<pizza.contents.length;i++) {
			div.appendChild(span);
		}
	}); 
}

/* Metod som anropas om man klickar på mat-knappen */
function viewPizzas() {
	button1.classList.add("active");
	button2.classList.remove("active");
	button3.classList.remove("active");

	item1.classList.remove("hidden");
	item2.classList.remove("hidden");
	item3.classList.remove("hidden");
	item4.classList.remove("hidden");
	item5.classList.add("hidden");
	item6.classList.add("hidden");

	// Tömmer alla list-groups för att inte få dubletter
	clearGroup(group1);
	clearGroup(group2);
	clearGroup(group3);
	clearGroup(group4);

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
}

/* Metod som anropas om man klickar på dryck-knappen */
function viewDrinks() {
	button1.classList.remove("active");
	button2.classList.add("active");
	button3.classList.remove("active");

	item1.classList.add("hidden");
	item2.classList.add("hidden");
	item3.classList.add("hidden");
	item4.classList.add("hidden");
	item5.classList.remove("hidden");
	item6.classList.add("hidden");

	clearGroup(group5);

	menu["Dryck"].forEach(drink => {
		addItem(drink, group5);
	});
}

/* Metod som anropas om man klickar på varukorg-knappen */
function viewBasket() {
	button1.classList.remove("active");
	button2.classList.remove("active");
	button3.classList.add("active");

	item1.classList.add("hidden");
	item2.classList.add("hidden");
	item3.classList.add("hidden");
	item4.classList.add("hidden");
	item5.classList.add("hidden");
	item6.classList.remove("hidden");

	priceLabel.textContent = totalPrice; 
}

/* Metod som anropas om man klickar på ett plustecken */
function addToBasket(order) {
	clearGroup(group6);
	order.forEach(item => {
		addItem(item, group6); // Anropar metoden addItem för att skriva ut beställningen på samma sätt som i menyn
	});

	let imageDiv = document.querySelectorAll("#list-group-orders > .list-group-item > .imageDiv");
	
	// Skapar en bild med ett minustecken om man vill ta bort något från varukorgen
	imageDiv.forEach(image => {
		let minusImage = document.createElement("img");
		minusImage.src = "images/minus.png";
		minusImage.style.width = "30px"; 
		minusImage.style.display = "block";
		image.appendChild(minusImage);
		minusImage.addEventListener("click", removeItemFromBasket);
	});
	
}

/* Metod som anropas om man klickar på beställ-knappen */
function checkOutOrder() {

	let modalBody = document.querySelector(".modal-body");
	modalBody.innerHTML = "";

	order.forEach(item => {
		let p1 = document.createElement("p");
		p1.textContent = item.name;
		p1.style.fontWeight = "bold";
		modalBody.appendChild(p1);
	});

	let p2 = document.createElement("p");
	p2.textContent = textArea.value;
	p2.setAttribute("class", "ingredients");
	modalBody.appendChild(p2);

	let p3 = document.createElement("p");
	p3.textContent = "Total summa: " + totalPrice;
	modalBody.appendChild(p3);

	let p4 = document.createElement("p");
	if(startOption.value == 0) {
		p4.textContent = "Bordsnummer: Inget bord valt";
	} else {
		p4.textContent = "Bordsnummer: " + startOption.value;
	}
	modalBody.appendChild(p4);

	// Om man trycker på bekräfta-knappen
	let confirm = document.querySelector("#confirm");
	confirm.addEventListener("click", function() {
		order = [];
		textArea.value = "";
		clearGroup(group6);
		totalPrice = 0;
		counter = 0;
		priceLabel.textContent = totalPrice;
		badge.classList.add("hidden");
		startOption.value = 0;
	});	
}

/* Metod som anropas när man tar bort ett item ur varukorgen */
function removeItemFromBasket(e) {

	group6.removeChild(e.target.parentElement.parentElement);
	order.splice(e.target.parentElement.parentElement);
	counter--;

	nbrOfOrders.textContent = counter;
	if(counter == 0) {
		badge.classList.add("hidden");
	}

	let tempPrice = e.target.parentElement.parentElement.childNodes[0].childNodes[1].firstChild.nodeValue; // tempPrice är en variabel för att hämta ut pris i domen på det item som man vill ta bort för att minska totalPrice
	tempPrice = tempPrice.slice(0, 2);
	totalPrice = totalPrice - tempPrice;
	priceLabel.textContent = totalPrice;
}