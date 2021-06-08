function lastSurvivor(letters, coords) {
  let arrOfLetters = letters.split("");
  let test = [];
  for (let i in coords) {
    arrOfLetters.splice(coords[i], 1);
    test.push(arrOfLetters);
  }
  return arrOfLetters.join("");
}
