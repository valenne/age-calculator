export function animatedResponseNumbers() {
	const counters = document.querySelectorAll('.showing-numbers');
	const speed = 300;

	counters.forEach((counter) => {
		const animate = () => {
			const value: number = Number(counter.getAttribute('data-finalValue'));

			const data: number = Number(counter.textContent);

			const time = value / speed;
			if (data < value) {
				counter.textContent = Math.ceil(data + time).toString();
				setTimeout(animate, 20);
			} else {
				counter.textContent = value.toString();
			}
		};

		animate();
	});
}
