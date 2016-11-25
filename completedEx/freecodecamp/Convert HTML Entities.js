// https://www.freecodecamp.com/challenges/convert-html-entities

function convertHTML(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
}

// should return &lt;&gt;
convertHTML("<>");
