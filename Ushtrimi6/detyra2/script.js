const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	let n1 = parseInt(prompt("Shkruaj nr 1: "));
	let n2 = parseInt(prompt("Shkruaj nr 2: "));

	alert("rezultati eshte: " + (n1 + n2));
});
