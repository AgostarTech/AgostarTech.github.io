console.log("Welcome to AgostarTech Portfolio");

// Typing effect for .typing-text
const typingTexts = [
  "Django Dev",
  "Ethical Hacker",
  "Network Engineer",
  "Tech Tutor",
];

const typingElement = document.querySelector(".typing-text span");
let typingIndex = 0;
let charIndex = 0;
let typingForward = true;
const typingDelay = 150;
const eraseDelay = 100;
const nextTextDelay = 2000;

function type() {
  if (!typingElement) return;

  const currentText = typingTexts[typingIndex];

  if (typingForward) {
    if (charIndex < currentText.length) {
      typingElement.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      typingForward = false;
      setTimeout(type, nextTextDelay);
    }
  } else {
    if (charIndex > 0) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, eraseDelay);
    } else {
      typingForward = true;
      typingIndex = (typingIndex + 1) % typingTexts.length;
      setTimeout(type, typingDelay);
    }
  }
}
type();

// Fade-in on scroll for sections
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("header nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
