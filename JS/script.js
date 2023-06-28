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
  <div id="searchResultContainer" class="result-container"></div>
      <a href="${lessonLink}" class="lesson-link">
        <img src="${lessonImage}" alt="...">
        <h3>${lessonTitle}</h3>
        <div class="lesson-content">
          ${lessonContent}
        </div>
      </a>
    </div>
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
    hasResults = true
  } else {
    for (var i = 0; i < lessons.length; i++) {
      var lesson = lessons[i];
      var lessonTitle = lesson.getElementsByTagName("h3")[0].textContent.toLowerCase();
      var lessonContent = lesson.getElementsByClassName("lesson-content")[0].innerHTML.toLowerCase();
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
    noResultsMessage.style.display = "none";
  } else {
    resultContainer.style.display = "none";
    noResultsMessage.style.display = "block";

    if (searchTerm !== "") {
      window.location.href = "404.html";
    }
  }
}
