function incrementLetter(letter) {
  let asciiCode = letter.charCodeAt(0);

  asciiCode++;

  if (asciiCode > 90) {
    asciiCode = 65;
  }

  return String.fromCharCode(asciiCode);
}

function genAlphaStrings(length) {
  const alphaStrings = [];

  const letters = [];
  for (let i = 0; i < length; i++) {
    letters.push(String.fromCharCode(65 + i));
  }

  for (let i = 0; i < letters.length; i++) {
    const alphabeticalString = genAlphaStrings(length, letters.slice(i));

    alphaStrings.push(alphabeticalString);
  }

  return alphaStrings;
}

const alphaStrings = genAlphaStrings(6);

for (const alphabeticalString of alphabeticalStrings) {
  console.log(alphabeticalString);
}
