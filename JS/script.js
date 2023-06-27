function copyContent() {
  // Seleziona l'elemento del primo contenitore
  var container1 = document.querySelector('.content1');

  // Clona l'elemento del primo contenitore per conservare la struttura HTML
  var container1Clone = container1.cloneNode(true);

  // Rimuovi il testo indesiderato dal clone del primo contenitore
  var unwantedText = container1Clone.querySelector('.button-text');
  unwantedText.remove();

  // Seleziona l'elemento del secondo contenitore
  var container2 = document.querySelector('.content');

  // Clona l'elemento del secondo contenitore per conservare la struttura HTML
  var container2Clone = container2.cloneNode(true);

  // Crea un elemento textarea
  var textarea = document.createElement('textarea');

  // Prendi il titolo dal primo contenitore
  var title = container1Clone.querySelector('h1').textContent.trim();

  // Prendi il contenuto dal secondo contenitore
  var content = container2Clone.textContent.trim();

  // Concatena il titolo e il contenuto nel textarea
  textarea.value = title + '\n\n' + content;

  // Aggiungi il textarea al documento
  document.body.appendChild(textarea);

  // Seleziona il testo nel textarea
  textarea.select();

  // Copia il testo negli appunti del dispositivo
  document.execCommand('copy');

  // Rimuovi il textarea dal documento
  document.body.removeChild(textarea);
}



function toggleCategory(category) {
  var categoryDivider = document.getElementById(category);
  categoryDivider.classList.toggle("open");

  var lessons = document.getElementsByClassName(category);
  for (var i = 0; i < lessons.length; i++) {
    lessons[i].classList.toggle("open");
  }
}

function toggleAnswer(questionNumber) {
  const answer = document.getElementById(`answer${questionNumber}`);
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
