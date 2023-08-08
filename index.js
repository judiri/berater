const themeToggle = document.getElementById('theme-toggle');
  let isDarkMode = true; // Assuming the initial mode is dark mode

  themeToggle.addEventListener('click', () => {
    const themeIcon = themeToggle.getAttribute('src');
    if (isDarkMode) {
      themeToggle.setAttribute('src', 'sun.png'); // Switch to light mode
      isDarkMode = false;
    } else {
      themeToggle.setAttribute('src', 'moon.png'); // Switch to dark mode
      isDarkMode = true;
    }
	
	document.getElementById('help').addEventListener('click', () => {
  // Fügen Sie hier den Code zum Erstellen des Tickets ein
  // ...
  
  // Benachrichtigung mit SweetAlert anzeigen
  swal('Ticket erstellt!', 'Das Ticket wurde erfolgreich erstellt.', 'success');
});
  });
