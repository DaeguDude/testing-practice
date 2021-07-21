function caesar(str, numShift) {
  // Only shift... alphabet
  let result = "";

  // How do I iterate string?
  for (let i = 0; i < str.length; i++) {
    if (isCharacterALetter(str[i])) {
      // transforming letters into numbers
      const letterAsNumber = str[i].charCodeAt();
      let shiftedChar = "";

      if (isLowerCase(str[i])) {
        const zeroBasedLetter = letterAsNumber - 97;

        const result =
          numShift >= 0
            ? ((zeroBasedLetter + numShift) % 26) + 97
            : ((zeroBasedLetter + numShift) % 26) + 97 + 26;
        shiftedChar = String.fromCharCode(result);
      } else {
        const zeroBasedLetter = letterAsNumber - 65;

        const result =
          numShift >= 0
            ? ((zeroBasedLetter + numShift) % 26) + 65
            : ((zeroBasedLetter + numShift) % 26) + 65 + 26;
        shiftedChar = String.fromCharCode(result);
      }

      result += shiftedChar;
    } else {
      // otherwise.... do nothing
      result += str[i];
    }
  }

  // letters
  // a - 97, z - 122
  // A - 65, Z - 90

  // letter a by shift 3
  // (0 + 3) mod 26 = 3 -- d
  // (97 + 3) mode 26 =
  // 0 로 만들면 되지않냐? -97

  // A - 0, B - 1, ...., Z - 25
  // letter x by shift n
  // (x + n)  mod 26

  // letter z by shift 1
  // (25 + 1) mod 26 = 0 -- a

  // letter z by shift 27
  // (25 + 27) mod 26 = 0 -- a

  // Something that is ciphered
  return result;
}

function shiftChar(char) {}

function isLowerCase(char) {
  if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
    return true;
  }

  return false;
}

function isUpperCase(char) {
  if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    return true;
  }

  return false;
}

function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
}

export { caesar };
