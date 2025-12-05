const form = document.querySelector("#form");
const emailField = document.querySelector("#emailField");
const passwordField = document.querySelector("#passwordField");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let email = emailField.value;
	let password = passwordField.value;

	alert("Email: " + email + " Password: " + password);
});
