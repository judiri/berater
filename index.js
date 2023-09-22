function sendEmail() {
            const emailInput = document.getElementById("email").value;
            const messageInput = document.getElementById("message").value;
            const sendGridApiKey = "DEIN_SENDGRID_API_KEY";

            const data = {
                personalizations: [
                    {
                        to: [{ email: "judiri.twitch@gmail.com" }],
                        subject: "Test-E-Mail"
                    }
                ],
                from: { email: emailInput },
                content: [{ type: "text/plain", value: messageInput }]
            };

            fetch("https://api.sendgrid.com/v3/mail/send", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${sendGridApiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status === 202) {
                    alert("E-Mail erfolgreich gesendet!");
                } else {
                    alert("Fehler beim Senden der E-Mail.");
                }
            })
            .catch(error => {
                console.error("Fehler beim Senden der E-Mail:", error);
            });
        }
