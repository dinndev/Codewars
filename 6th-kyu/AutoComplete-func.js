function autocomplete(input, dictionary) {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const filteredInput = format.test(input)
    ? input.replace(/[^a-zA-Z ]/g, "")
    : input;
  return dictionary
    .filter(
      (word) =>
        word.substr(0, filteredInput.length).toUpperCase() ==
        filteredInput.toUpperCase()
    )
    .slice(0, 5);
}
