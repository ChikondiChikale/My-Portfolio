const phrases = [
  "Chikondi Chikale",
  "a Programmer",
  "a Developer",
  "an ICT Student",
];
let currentIndex = 0;

function rotateText() {
  const wordSpan = document.getElementById("animated-words");
  wordSpan.classList.remove("fade-in");

  setTimeout(() => {
    wordSpan.textContent = phrases[currentIndex];
    wordSpan.classList.add("fade-in");
    currentIndex = (currentIndex + 1) % phrases.length;
  }, 200);
}

setInterval(rotateText, 3000);
// Scroll-based nav highlight
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
