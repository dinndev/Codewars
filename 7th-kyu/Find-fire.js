function fireFight(s) {
  return s
    .split(" ")
    .map((item) => {
      if (item === "Fire") {
        item = "~~";
      }
      return item;
    })
    .join(" ");
}
