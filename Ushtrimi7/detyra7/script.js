let items = document.getElementsByClassName("item");

const colors = [
	"red",
	"blue",
	"green",
	"yellow",
	"purple",
	"orange",
	"pink",
	"brown",
];

for (item of items) {
	item.style.color = colors[Math.floor(Math.random() * colors.length)];
}
