function updateLight(current) {
  //your code here!
  let next;
  switch (current.toUpperCase()) {
    case "GREEN":
      next = "yellow";
      break;
    case "YELLOW":
      next = "red";
      break;
    case "RED":
      next = "green";
  }
  return next;
}
