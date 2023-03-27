const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const list = document.getElementById("ingredients")

let listElement;

ingredients.forEach(element => {
	listElement = document.createElement("li")
	listElement.textContent = element
	listElement.className = "item"
	list.appendChild(listElement)
})

