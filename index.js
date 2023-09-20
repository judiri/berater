// JavaScript-Code, um die E-Mail zu senden
        document.getElementById("erstelleTicket").addEventListener("click", function () {
            // Erstellen einer E-Mail mit dem Text "test"
            var emailBody = "test";

            // Erstellen des E-Mail-Links
            var emailLink = "mailto:deine-email@example.com?subject=Neues%20Ticket&body=" + encodeURIComponent(emailBody);

            // Öffnen des E-Mail-Clients
            window.location.href = emailLink;
        });
