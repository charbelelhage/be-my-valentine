const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  message.textContent = "YAY!! 💖💖💖 See you on Valentine’s 😄";
  launchConfetti();
  noBtn.disabled = true;
  yesBtn.disabled = true;
});

noBtn.addEventListener("mouseenter", () => {
  // Make the "No" button run away (playful)
  const x = Math.floor(Math.random() * 240) - 120; // -120..120
  const y = Math.floor(Math.random() * 160) - 80;  // -80..80
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function launchConfetti() {
  // tiny lightweight confetti
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = 1.5 + Math.random() * 1.5 + "s";
    c.style.opacity = Math.random();
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}
