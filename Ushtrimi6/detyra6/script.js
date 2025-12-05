const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	let u = prompt("Cfare hengre per mengjes?: ");
	let p = prompt("Cfare pive per mengjes?: ");

	alert("Ti hëngre " + u + " dhe pive " + p);
});
