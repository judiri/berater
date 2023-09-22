function sendTicket() {
    const email = document.getElementById('email').value;
    const problem = document.getElementById('problem').value;

    if (email && problem) {
        const ticket = document.createElement('div');
        ticket.className = 'ticket';
        ticket.innerHTML = `
            <h3>${email}</h3>
            <p>${problem}</p>
        `;
        
        document.getElementById('ticket-list').appendChild(ticket);

        // Zurücksetzen der Eingabefelder
        document.getElementById('email').value = '';
        document.getElementById('problem').value = '';

        // Popup anzeigen
        alert('Ticket ist angekommen');
    } else {
        alert('Bitte füllen Sie alle Felder aus.');
    }
}
