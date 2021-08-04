const switcheroo = (x) =>
  [...x].map((v) => (v == "a" ? (v = "b") : v == "b" ? (v = "a") : v)).join("");
