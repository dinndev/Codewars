function list(names) {
  //your code here
  const len = names.length;
  return names.length > 0
    ? `${names
        .slice(0, len - 1)
        .map(({ name }) => name)
        .join(", ")}${len > 1 ? " & " : ""}${names[len - 1].name}`
    : "";
}
