document.addEventListener("DOMContentLoaded", () => {
  // typing effect
  const typeEl = document.getElementById("type-text");
  const words = ["Motivated Individual", "Continuous Learner",];
  let idx = 0, charIdx = 0;
  let deleting = false;

  function typeLoop() {
    const current = words[idx];
    let display = current.substring(0, charIdx);
    typeEl.textContent = display;

    if (!deleting && charIdx < current.length) {
      charIdx++;
      setTimeout(typeLoop, 150);
    } else if (deleting && charIdx > 0) {
      charIdx--;
      setTimeout(typeLoop, 100);
    } else {
      deleting = !deleting;
      if (!deleting) {
        idx = (idx + 1) % words.length;
      }
      setTimeout(typeLoop, 1000);
    }
  }
  typeLoop();
});

const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });