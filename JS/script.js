function copyContent() {
  // Seleziona l'elemento del titolo del primo contenitore
  var titleElement = document.querySelector('.content:first-child h1');
  // Seleziona l'elemento del contenuto del secondo contenitore
  var contentElement = document.querySelector('.content:nth-child(2)');

  // Crea un elemento textarea
  var textarea = document.createElement('textarea');

  // Rimuovi il testo indesiderato dal valore del titolo
  var titleText = titleElement.textContent.replace("If you want to copy the content of the lessons click on the button", "");
  // Imposta il valore del textarea con il testo del titolo e del contenuto
  textarea.value = titleText + '\n\n' + contentElement.textContent;

  // Aggiungi il textarea al documento
  document.body.appendChild(textarea);

  // Seleziona il testo nel textarea
  textarea.select();

  // Copia il testo negli appunti del dispositivo
  document.execCommand('copy');

  // Rimuovi il textarea dal documento
  document.body.removeChild(textarea);
}
