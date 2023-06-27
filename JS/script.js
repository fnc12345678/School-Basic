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
