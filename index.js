function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Elemente auswählen
const header = document.querySelector('header');
const logo = document.querySelector('.logo');

// Event Listener für den Dark-Modus-Schalter
header.addEventListener('click', toggleDarkMode);
