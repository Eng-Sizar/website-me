const body = document.body;
const navbar = document.getElementById("navbar");
const loader = document.getElementById("loader");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const typingText = document.getElementById("typingText");
const particles = document.getElementById("particles");
const year = document.getElementById("year");

const typedWords = ["Senior Programmer", "Full Stack Developer", "Creative Web Engineer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

window.addEventListener("load", () => {
  setTimeout(() => {
    body.classList.add("loaded");
    loader?.setAttribute("aria-hidden", "true");
  }, 450);
});

year.textContent = new Date().getFullYear();

function typeLoop() {
  const currentWord = typedWords[wordIndex];
  const visibleText = currentWord.slice(0, letterIndex);
  typingText.textContent = visibleText;

  if (!isDeleting && letterIndex < currentWord.length) {
    letterIndex += 1;
    setTimeout(typeLoop, 78);
    return;
  }

  if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeLoop, 1250);
    return;
  }

  if (isDeleting && letterIndex > 0) {
    letterIndex -= 1;
    setTimeout(typeLoop, 38);
    return;
  }

  isDeleting = false;
  wordIndex = (wordIndex + 1) % typedWords.length;
  setTimeout(typeLoop, 260);
}

typeLoop();

function updateNavbar() {
  navbar.classList.toggle("nav-scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

menuToggle.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden", isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
});

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link, .mobile-link")];

const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);

sections.forEach((section) => activeSectionObserver.observe(section));

function createParticles() {
  if (!particles) return;

  const total = window.matchMedia("(max-width: 640px)").matches ? 26 : 46;
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < total; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.setProperty("--duration", `${8 + Math.random() * 9}s`);
    particle.style.setProperty("--delay", `${Math.random() * -12}s`);
    particle.style.opacity = `${0.35 + Math.random() * 0.55}`;
    fragment.appendChild(particle);
  }

  particles.appendChild(fragment);
}

createParticles();
