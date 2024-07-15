const buttonDecrement = document.querySelector("button:nth-of-type(1)");
const buttonIncrement = document.querySelector("button:nth-of-type(2)");
const counter = document.querySelector("output");

buttonIncrement.addEventListener("click", async () => {
	if (
		document.startViewTransition &&
		matchMedia("(prefers-reduced-motion: no-preference)").matches
	) {
		counter.style.setProperty("view-transition-name", "value-increment");
		const transition = document.startViewTransition(() => {
			counter.textContent = +counter.textContent + 1;
		});

		await transition.finished;
		counter.style.removeProperty("view-transition-name");
	} else {
		counter.textContent = +counter.textContent + 1;
	}
});

buttonDecrement.addEventListener("click", async () => {
	if (
		document.startViewTransition &&
		matchMedia("(prefers-reduced-motion: no-preference)").matches
	) {
		counter.style.setProperty("view-transition-name", "value-decrement");
		const transition = document.startViewTransition(() => {
			counter.textContent = +counter.textContent - 1;
		});

		await transition.finished;
		counter.style.removeProperty("view-transition-name");
	} else {
		counter.textContent = +counter.textContent - 1;
	}
});
