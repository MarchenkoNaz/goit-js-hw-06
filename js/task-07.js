const rangeInput = document.getElementById("font-size-control")
console.dir(rangeInput);
const changeableText = document.getElementById("text")
console.dir(changeableText);

changeableText.style.fontSize = `${rangeInput.value}px`

rangeInput.addEventListener("input", (event) => {
	changeableText.style.fontSize = `${event.currentTarget.value}px`
})
