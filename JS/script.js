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


  function copyContent() {
  var container1 = document.querySelector('.content1');
  var container1Clone = container1.cloneNode(true);
  var unwantedText = container1Clone.querySelector('.button-text');
  unwantedText.remove();
  var title = container1Clone.querySelector('h1').textContent.trim();

  // Seleziona gli elementi con la classe "content"
  var containers = document.querySelectorAll('.content');

  // Crea un array per contenere i cloni degli elementi
  var containerClones = [];

  // Itera su ogni elemento e clonalo
  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    var containerClone = container.cloneNode(true);
    containerClones.push(containerClone);
  }

  // Crea un elemento textarea
  var textarea = document.createElement('textarea');

  // Concatena il titolo e il testo di tutti i cloni degli elementi nel textarea
  var content = title + '\n\n';
  for (var i = 0; i < containerClones.length; i++) {
    var containerClone = containerClones[i];
    content += containerClone.textContent.trim() + '\n\n';
  }

  // Rimuovi l'ultimo doppio spazio vuoto
  content = content.trim();

  // Aggiungi il contenuto al textarea
  textarea.value = content;

  // Aggiungi il textarea al documento
  document.body.appendChild(textarea);

  // Seleziona il testo nel textarea
  textarea.select();

  // Copia il testo negli appunti del dispositivo
  navigator.clipboard.writeText(textarea.value)
    .then(function() {
      console.log('Testo copiato negli appunti!');
      // Rimuovi il textarea dal documento
      document.body.removeChild(textarea);
    })
    .catch(function(error) {
      console.error('Errore durante la copia del testo negli appunti:', error);
      // Rimuovi il textarea dal documento anche in caso di errore
      document.body.removeChild(textarea);
    });
}


function createSearchResultHTML(lessonTitle, lessonContent, lessonLink, lessonImage) {
  return `
  <div class="result">
    <a href="${lessonLink}" class="lesson-link">
      <img src="${lessonImage}" alt="...">
      <h3>${lessonTitle}</h3>
      <div class="lesson-content">
        ${lessonContent}
      </div>
    </a>
  </div>
  `;
}


function performSearch() {
  var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  var lessons = document.getElementsByClassName("lesson");
  var resultContainer = document.getElementById("searchResultContainer");
  resultContainer.innerHTML = "";
  noResultsMessage.innerHTML = "";
  var searchRegex = new RegExp(searchTerm, "gi");
  var hasResults = false;

  if (searchTerm === "") {
    resultContainer.style.display = "none";
    noResultsMessage.style.display = "none";
    hasResults = true
  } else {
    for (var i = 0; i < lessons.length; i++) {
      var lesson = lessons[i];
      var lessonTitle = lesson.getElementsByTagName("h3")[0].textContent;
      var lessonContent = lesson.getElementsByClassName("lesson-content")[0].innerHTML;
      var lessonLink = lesson.getElementsByTagName("a")[0].getAttribute("href");
      var lessonImage = lesson.getElementsByTagName("img")[0].getAttribute("src");

      if (searchRegex.test(lessonTitle) || searchRegex.test(lessonContent)) {
        resultContainer.innerHTML += createSearchResultHTML(lessonTitle, lessonContent, lessonLink, lessonImage);
        hasResults = true;
      }
      
    }
  }
  if (hasResults) {
    resultContainer.style.display = "block";
  } else {
    resultContainer.style.display = "none";

    if (searchTerm !== "") {
      window.location.href = "Error/404.html";
    }
  }
}
