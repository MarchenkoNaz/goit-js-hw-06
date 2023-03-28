const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const list = document.getElementById("ingredients")



ingredients.forEach(element => {
	const listElement = document.createElement("li")
	listElement.textContent = element
	listElement.className = "item"
	list.append(listElement)
})

