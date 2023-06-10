const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr) {
  let decodedStr = '';

  for (let i = 0; i < encodedStr.length; i++) {
    let asciiCode = encodedStr.charCodeAt(i);

    if (asciiCode < 91 && asciiCode > 64) {
      asciiCode = ((asciiCode - 65 + 13) % 26) + 65;
      const character = String.fromCharCode(asciiCode);
      decodedStr = decodedStr + character;
    } else {
      const character2 = encodedStr.charAt(i);
      decodedStr = decodedStr + character2;
    }
  }

  return decodedStr;
}

module.exports = rot13;