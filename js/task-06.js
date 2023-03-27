const input = document.getElementById("validation-input")

input.addEventListener("blur", () => {

	if (input.value.length === +input.dataset.length) {

		return input.className = "valid"
	} else {
		return input.className = "invalid"
	}
})