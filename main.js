// scripts/main.js

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Animation trigger example
  const animatedElements = document.querySelectorAll('.animate-fade-in');

  animatedElements.forEach(el => {
    el.classList.add('visible');
  });
});
