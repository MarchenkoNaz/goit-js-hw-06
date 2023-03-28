const inputValue = document.getElementById("name-input")
const nameSpan = document.getElementById("name-output")
const nameInput = document.getElementById("name-input")

inputValue.addEventListener("input", (event) => {
	if (event.currentTarget.value === '') {
		nameSpan.textContent = "Anonymous"
	}
	else {
		nameSpan.textContent = event.currentTarget.value
	}

	console.dir(event.currentTarget.value);
})
