const boxes = document.querySelectorAll(".single-box");
const cards = {
	1: "./images/1.JPG",
	2: "./images/2.JPG",
	3: "./images/3.PNG",
	4: "./images/4.PNG",
	5: "./images/5.JPG",
	6: "./images/6.JPG",
	7: "./images/7.JPG",
	8: "./images/8.JPG",
	9: "./images/9.JPG",
	10: "./images/10.JPG",
	11: "./images/11.JPG",
	12: "./images/12.JPG",
};
let activeCards = false;
function uploadPictures() {
	for (let i = 1; i <= 12; i++) {
		const firstEl = document.querySelectorAll(`div[data-occupied="false"]`)[
			Math.floor(
				Math.random() *
					document.querySelectorAll(`div[data-occupied="false"]`)
						.length
			)
		];
		firstEl.dataset.occupied = true;
		const secondEl = document.querySelectorAll(
			`div[data-occupied="false"]`
		)[
			Math.floor(
				Math.random() *
					document.querySelectorAll(`div[data-occupied="false"]`)
						.length
			)
		];
		secondEl.dataset.occupied = true;

		firstEl.classList.add(i);
		secondEl.classList.add(i);
		firstEl.innerHTML = `<img src="${cards[i]}" />`;
		secondEl.innerHTML = `<img src="${cards[i]}" />`;
	}
	document
		.querySelectorAll(".flip-card-inner")
		.forEach((e) => e.classList.add("revealed"));
	setTimeout(() => {
		document
			.querySelectorAll(".flip-card-inner")
			.forEach((e) => e.classList.remove("revealed"));
	}, 2000);
	// ;
}
uploadPictures();
function checkMatched() {
	const numbers = [];
	document.querySelectorAll(".on").forEach((e) => {
		numbers.push(e.querySelector(".flip-card-back").classList[1]);
	});
	if (numbers[0] == numbers[1]) {
		document.querySelectorAll(".on").forEach((e) => {
			e.classList.add("matched");
		});
		document.querySelector("#score").textContent--;
	}
}
function handleCardClick(e) {
	if (!activeCards) {
		e.querySelector(".flip-card-inner").classList.toggle("on");
		if (document.querySelectorAll(".on").length === 2) {
			let match = false;
			activeCards = true;
			checkMatched();
			setTimeout(() => {
				document
					.querySelectorAll(".on")
					.forEach((e) => e.classList.remove("on"));
				activeCards = false;
			}, 1000);
		}
	}
}
boxes.forEach((target) => {
	target.addEventListener("click", () => handleCardClick(target));
});
