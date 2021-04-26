function invert(array) {
  const invert = array.map((number) => {
    if (number > 0) {
      return -Math.abs(number);
    } else if (number < 0) {
      return Math.abs(number);
    } else {
      return 0;
    }
  });
  return invert;
}
