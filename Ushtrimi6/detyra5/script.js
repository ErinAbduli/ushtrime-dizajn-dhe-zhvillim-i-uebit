const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	let f1 = prompt("Shkruaj nje fjale: ");
	let f2 = prompt("Shkruaj dhe nje tjeter: ");

	alert("Fjala e perseritur eshgte: " + f1 + " " + f2);
});
