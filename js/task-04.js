let counterValue = 0
let value = document.getElementById("value")
const decrementBtn = document.querySelector('button[data-action = "decrement"]')
const incrementBtn = document.querySelector('button[data-action = "increment"]')

decrementBtn.addEventListener('click', () => {
	value.textContent = counterValue -= 1
})
incrementBtn.addEventListener('click', () => {
	value.textContent = counterValue += 1
})

