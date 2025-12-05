const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	let n = parseInt(prompt("Shkruaj nje numer: "));

	alert("numri qe keni shkruar eshte " + (n % 2 === 0 ? "cift" : "tek"));
});
