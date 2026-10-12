(function() {
    // 1. Target visible text within the body, ignoring script, style, and navigation tags if necessary
    const pageText = document.body.innerText || document.body.textContent;
    
    // 2. Clean up structural spaces and drop leading/trailing whitespace
    const cleanedText = pageText.trim();
    
    // 3. Count words safely, avoiding errors on empty pages
    let wordCount = 0;
    if (cleanedText !== "") {
      wordCount = cleanedText.split(/\s+/).length;
    }
    
    // 4. Update the visual display
    document.getElementById('page-word-count').textContent = wordCount;
  })();