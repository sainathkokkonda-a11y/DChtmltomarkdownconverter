function convertHtml() {
  let input = document.getElementById('htmlInput').value;
  if(!input.trim()) return;

  // Smart logic to extract body content if full HTML document is provided
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, 'text/html');
  
  // If a body tag exists, use only its inner HTML to prevent styles/title from showing up
  if (doc.body && doc.body.innerHTML.trim() !== '') {
    input = doc.body.innerHTML;
  }

  const turndownService = new TurndownService();
  const markdown = turndownService.turndown(input);
  document.getElementById('markdownOutput').value = markdown;
}

function copyOutput() {
  const output = document.getElementById('markdownOutput');
  if (!output.value) return;
  output.select();
  document.execCommand('copy');
  alert('Markdown copied to clipboard!');
}

function clearAll() {
  document.getElementById('htmlInput').value = '';
  document.getElementById('markdownOutput').value = '';
}
