function copyContent() {
  // Seleziona l'elemento del titolo del primo contenitore
  var titleElement = document.querySelector('.content:first-child h1');
  // Seleziona l'elemento del contenuto del secondo contenitore
  var contentElement = document.querySelector('.content:nth-child(2)');

  // Crea un elemento textarea
  var textarea = document.createElement('textarea');

  // Imposta il valore del textarea con il testo del titolo e del contenuto
  var textareaValue = titleElement.textContent + '\n\n' + contentElement.textContent;
  // Rimuovi il testo indesiderato
  textareaValue = textareaValue.replace("If you want to copy the content of the lessons click on the button", "");
  textarea.value = textareaValue;

  // Aggiungi il textarea al documento
  document.body.appendChild(textarea);

  // Seleziona il testo nel textarea
  textarea.select();

  // Copia il testo negli appunti del dispositivo
  document.execCommand('copy');

  // Rimuovi il textarea dal documento
  document.body.removeChild(textarea);
}
function copyContent() {
      // Seleziona l'elemento con la classe "content"
      var content = document.querySelector('.content');
      
      // Crea un elemento textarea
      var textarea = document.createElement('textarea');
      
      // Imposta il valore del textarea come il testo della lezione
      textarea.value = content.textContent;
            
      // Aggiungi il textarea al documento
      document.body.appendChild(textarea);
      
      // Seleziona il testo nel textarea
      textarea.select();
      
      // Copia il testo negli appunti del dispositivo
      document.execCommand('copy');
      
      // Rimuovi il textarea dal documento
      document.body.removeChild(textarea);
}
