function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const bodyDiv = document.getElementById("boxes")
const btnCreate = document.querySelector("[data-create]")
const btnDestroy = document.querySelector("[data-destroy]")
const inputCount = document.querySelector("input")
inputCount.value = 10

btnCreate.addEventListener('click', Create)
btnDestroy.addEventListener('click', Destroy)


function Create() {
	let size = 30
	const divBoxArr = []

	for (let i = 0; i <= inputCount.value; i += 1) {
		const divBox = document.createElement('div');
		divBox.style.width = size + 'px';
		divBox.style.height = size + 'px';
		divBox.style.backgroundColor = getRandomHexColor();
		divBoxArr.push(divBox);
		size += 10;
	}

	bodyDiv.append(...divBoxArr);
}
function Destroy() {
	bodyDiv.innerHTML = ''
}