function generateHashtag(str) {
  if (!str) return false;
  const arrOfWords = splitString(str).map((word) =>
    upperCaseFirstLetter(word.trim())
  );
  arrOfWords.unshift("#");
  const hashtag = arrOfWords.join("");
  return hashtag.length > 140 ? false : hashtag;
}
function upperCaseFirstLetter(word) {
  if (!word) return "";
  return word[0].toUpperCase() + word.slice(1, word.length);
}
function splitString(word) {
  return word.split(" ");
}

console.log(" ".repeat(200));
