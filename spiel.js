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
    document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("startButton");
    var gameCanvas = document.getElementById("gameCanvas");
    
    startButton.addEventListener("click", function() {
        // Leeren Sie die gesamte Seite
        document.body.innerHTML = "";
        
        // Erstellen Sie ein neues Canvas-Element für das Spiel
        var canvas = document.createElement("canvas");
        canvas.id = "gameCanvas";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);

        // Hier können Sie den Code zum Laden und Starten Ihres Spiels einfügen
        // Zum Beispiel: initialisieren Sie das Spiel, laden Sie Ressourcen, usw.
    });
});
  });
