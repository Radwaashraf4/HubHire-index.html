// scripts/about.js

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const fadeSections = document.querySelectorAll(".fade-in, .slide-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
      }
    });
  }, {
    threshold: 0.3
  });

  fadeSections.forEach(section => {
    observer.observe(section);
  });
});
