// ===========================
// TYPEWRITER EFFECT
// ===========================
const phrases = [
  "MERN Stack Developer",
  "React.js Expert",
  "Node.js Backend Dev",
  "WordPress Developer",
  "Full Stack Engineer",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typed");

function type() {
  const current = phrases[phraseIndex];
  if (!typedEl) return;

  if (isDeleting) {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(type, speed);
}
type();


// ===========================
// NAV SCROLL EFFECT
// ===========================
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// ===========================
// MOBILE MENU
// ===========================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  // Animate hamburger
  const spans = menuBtn.querySelectorAll("span");
  if (mobileMenu.classList.contains("open")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
  } else {
    spans[0].style.transform = "";
    spans[1].style.opacity = "";
    spans[2].style.transform = "";
  }
});

document.querySelectorAll(".mob-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    const spans = menuBtn.querySelectorAll("span");
    spans[0].style.transform = "";
    spans[1].style.opacity = "";
    spans[2].style.transform = "";
  });
});


// ===========================
// SCROLL REVEAL
// ===========================
const reveals = document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .contact-item, .about-left, .about-right, .stack-group"
);

reveals.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((el) => revealObserver.observe(el));


// ===========================
// SKILL BARS ANIMATION
// ===========================
const skillFills = document.querySelectorAll(".skill-fill");

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

skillFills.forEach((bar) => barObserver.observe(bar));


// ===========================
// CONTACT FORM
// ===========================
const form = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("femail").value.trim();
    const message = document.getElementById("fmessage").value.trim();

    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }

    // Simulate sending (replace with actual API/EmailJS call)
    const btn = form.querySelector(".btn-primary");
    btn.textContent = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = "Send Message →";
      btn.disabled = false;
      form.reset();
      formSuccess.classList.add("show");
      setTimeout(() => formSuccess.classList.remove("show"), 4000);
    }, 1500);
  });
}


// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute("href") === `#${id}` ? "#fff" : "";
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => sectionObserver.observe(section));


// ===========================
// SMOOTH STAGGERED REVEAL FOR PROJECT CARDS
// ===========================
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});
