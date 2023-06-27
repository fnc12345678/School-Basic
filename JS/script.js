function copyContent() {
  // Seleziona l'elemento del titolo del primo contenitore
  var titleElement = document.querySelector('.content1 h1');
  // Seleziona l'elemento del contenuto del secondo contenitore
  var contentElement = document.querySelector('.content');

  // Ottieni il titolo del primo contenitore e rimuovi il testo indesiderato
  var titleText = titleElement.innerText.replace("If you want to copy the content of the lessons click on the button", "").trim();

  // Crea un elemento textarea
  var textarea = document.createElement('textarea');

  // Imposta il valore del textarea con il titolo e il contenuto
  textarea.value = titleText + '\n\n' + contentElement.innerText.trim();

  // Aggiungi il textarea al documento
  document.body.appendChild(textarea);

  // Seleziona il testo nel textarea
  textarea.select();

  // Copia il testo negli appunti del dispositivo
  document.execCommand('copy');

  // Rimuovi il textarea dal documento
  document.body.removeChild(textarea);
}
