const inputValue = document.getElementById("name-input")
const nameSpan = document.getElementById("name-output")

inputValue.addEventListener("input", (event) => {
	nameSpan.textContent = event.currentTarget.value
	console.dir(event.currentTarget.value);
})
