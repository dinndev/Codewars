const replaceDots = function (str) {
  const words = str.split("");
  const replaced = words.map((word) => {
    return word.replace(".", "-");
  });
  return replaced.join("");
};
