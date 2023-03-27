
const form = document.querySelector('.login-form')
const inputEmail = document.querySelector("input[type=email]")
const inputPassword = document.querySelector("input[type=password]")
console.dir(inputEmail);
console.dir(inputPassword);
form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (inputEmail.value === "") {
		alert("For login into your account you need to enter your email")
	} else if (inputPassword.value === "") {
		alert("For login into your account you need to enter your  password")
	} else {
		alert("Everything is okay! You can log in")
		// Поясніть будь-ласка як працює цей кусочок коду, не до кінця розумію. Це типу ми створюємо новий об'єкт в який записуємо значення елементів input?
		//        \/
		const { elements: {
			email, password }
		} = event.currentTarget;
		console.log("Email :", email.value, "Password :", password.value);
		form.reset()
	}

})

