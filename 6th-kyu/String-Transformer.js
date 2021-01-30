function stringTransformer(str) {
  // Your code here
  const reverse = str.split(" ").reverse().join(" ");
  let transformed = "";
  for (let i = 0; i < reverse.length; i++) {
    if (reverse[i] === reverse[i].toUpperCase()) {
      transformed += reverse[i].toLowerCase();
    } else {
      transformed += reverse[i].toUpperCase();
    }
  }
  return transformed;
}
