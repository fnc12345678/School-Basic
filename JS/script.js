function copyContent() {
  // Seleziona l'elemento del primo contenitore
  var container1 = document.querySelector('.container1');

  // Clona l'elemento del primo contenitore per conservare la struttura HTML
  var container1Clone = container1.cloneNode(true);

  // Rimuovi il testo indesiderato dal clone del primo contenitore
  var unwantedText = container1Clone.querySelector('If you want to copy the content of the lessons click on the button');
  unwantedText.remove();

  // Seleziona l'elemento del secondo contenitore
  var container2 = document.querySelector('.container');

  // Clona l'elemento del secondo contenitore per conservare la struttura HTML
  var container2Clone = container2.cloneNode(true);

  // Crea un elemento textarea
  var textarea = document.createElement('textarea');

  // Concatena il testo del primo e del secondo contenitore nel textarea
  textarea.value = container1Clone.textContent + container2Clone.textContent;

  // Aggiungi il textarea al documento
  document.body.appendChild(textarea);

  // Seleziona il testo nel textarea
  textarea.select();

  // Copia il testo negli appunti del dispositivo
  document.execCommand('copy');

  // Rimuovi il textarea dal documento
  document.body.removeChild(textarea);
}
