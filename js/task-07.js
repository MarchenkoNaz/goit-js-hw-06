const rangeInput = document.getElementById("font-size-control")
console.dir(rangeInput);
const changeableText = document.getElementById("text")
console.dir(changeableText);

rangeInput.addEventListener("mouseup", (event) => {
	changeableText.style.fontSize = `${event.currentTarget.value}px`
})
