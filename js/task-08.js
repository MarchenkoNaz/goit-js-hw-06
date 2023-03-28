
const form = document.querySelector('.login-form')
const inputEmail = document.querySelector("input[type=email]")
const inputPassword = document.querySelector("input[type=password]")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (inputEmail.value === "") {
		alert("For login into your account you need to enter your email")
	} else if (inputPassword.value === "") {
		alert("For login into your account you need to enter your  password")
	} else {
		alert("Everything is okay! You can log in")

		const { email, password } = event.currentTarget.elements;
		const user = {
			email: email.value,
			password: password.value
		}
		console.log(user);
		form.reset()
	}

})

