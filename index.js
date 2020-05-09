const boxes = document.querySelectorAll(".single-box");
const cards = {
	1: "https://img.icons8.com/color/480/c-programming.png",
	2: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
	3: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png",
	4: "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
	5: "https://f1.pngfuel.com/png/835/530/416/python-logo-programming-language-computer-programming-python-programming-basics-for-absolute-beginners-scripting-language-source-code-php-code-climate-inc-png-clip-art.png",
	6: "https://www.pngitem.com/pimgs/m/341-3412303_go-programming-language-logo-hd-png-download.png",
	7: "https://pngimg.com/uploads/php/php_PNG7.png",
	8: "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
	9: "https://cdn.worldvectorlogo.com/logos/perl-programming-language.svg",
	10: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
	11: "https://www.pngitem.com/pimgs/m/12-120179_best-free-ruby-png-ruby-programming-language-logo.png",
	12: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png",
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
	}
	// ;
}
uploadPictures();
function handleCardClick(e) {
	if (!activeCards) {
		e.querySelector(".flip-card-inner").classList.toggle("on");
		if (document.querySelectorAll(".on").length === 2) {
			activeCards = true;
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
