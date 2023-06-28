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
  var noResultsMessage = document.getElementById("noResultsMessage");
  resultContainer.innerHTML = "";
  noResultsMessage.innerHTML = "";
  var searchRegex = new RegExp(searchTerm, "gi");
  var hasResults = false;

  if (searchTerm === "") {
    resultContainer.style.display = "none";
    noResultsMessage.style.display = "none";
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
      if (hasResults) {
      resultContainer.style.display = "block";
      noResultsMessage.style.display = "none";
    } else {
      resultContainer.style.display = "none";
      noResultsMessage.style.display = "block";
      window.location.href = "404.html";
    }
    }

    
  }
}
