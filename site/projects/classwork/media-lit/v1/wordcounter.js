(function() {
    const countTarget = document.querySelector('#text-container') || document.body;
    const pageText = countTarget ? (countTarget.innerText || countTarget.textContent || '') : '';
    const cleanedText = pageText.replace(/\s+/g, ' ').trim();
    const wordCount = cleanedText ? cleanedText.split(/\s+/).length : 0;
    const countElement = document.getElementById('page-word-count');

    if (countElement) {
      countElement.textContent = wordCount.toLocaleString();
    }
})();