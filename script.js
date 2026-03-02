const message = "No queria guardar esto en una nota de celular. Queria que cada frase tuviera su propio ritmo y que al leerla sientas que algo se mueve por ti. Me encanta como iluminas los lugares, como tu energia cambia mi dia y como, sin saberlo, ya tienes un espacio enorme en mi mente. Si quieres, dejame seguir escribiendo contigo.";

const typewriterEl = document.getElementById("typewriter");
const letterEl = document.getElementById("letter");
const openButton = document.getElementById("openButton");
const intro = document.querySelector(".intro");
const signatureInline = document.getElementById("signatureInline");
const envelopeStage = document.querySelector(".envelope-stage");

let typingIndex = 0;
let typingTimer;
let opened = false;

function typeWriter() {
	if (!typewriterEl) return;
	clearInterval(typingTimer);
	typingIndex = 0;
	typingTimer = setInterval(() => {
		typewriterEl.textContent = message.slice(0, typingIndex + 1);
		typingIndex += 1;
		if (typingIndex >= message.length) {
			clearInterval(typingTimer);
			setTimeout(() => {
				if (signatureInline) signatureInline.classList.add("visible");
			}, 200);
		}
	}, 55);
}

function revealLetter() {
	letterEl.classList.add("visible");
	typeWriter();
	openButton.classList.add("opened");
}

openButton.addEventListener("click", () => {
	if (opened) return;
	opened = true;
	openButton.classList.add("opened");
	if (intro) intro.classList.add("fade-out");
	if (envelopeStage) envelopeStage.classList.add("opened");
	setTimeout(() => {
		revealLetter();
	}, 280);
});

function seedHearts() {
	const heartsContainer = document.querySelector(".floating-hearts");
	if (!heartsContainer) return;
	const total = 42;
	for (let i = 0; i < total; i += 1) {
		const heart = document.createElement("div");
		heart.className = `heart-shape${Math.random() > 0.6 ? " soft" : ""}`;
		heart.style.left = `${Math.random() * 100}%`;
		heart.style.top = `${Math.random() * 100}%`;
		heart.style.width = `${12 + Math.random() * 10}px`;
		heart.style.height = heart.style.width;
		heart.style.animationDuration = `${3.6 + Math.random() * 2.4}s`;
		heart.style.animationDelay = `${Math.random() * 2.5}s`;
		heartsContainer.appendChild(heart);
	}
}

seedHearts();

// Start with a subtle entrance in case the user scrolls before opening.
