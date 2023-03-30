const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const list = document.getElementById("ingredients")

const listArr = []

ingredients.forEach(element => {
	const listElement = document.createElement("li")
	listElement.textContent = element
	listElement.className = "item"
	listArr.push(listElement)
})

list.append(...listArr)
