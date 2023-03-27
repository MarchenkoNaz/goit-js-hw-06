function changerColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const body = document.querySelector("body")
const spanColor = document.querySelector(".color")
const btnChangerColor = document.querySelector(".change-color")

btnChangerColor.addEventListener('click', () => {
	spanColor.textContent = changerColor()
	body.style.backgroundColor = changerColor()

})
