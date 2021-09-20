function perimeter(n) {
  let boxStart = [1, 1];
  if (n > 0) {
    for (let i = 0; i < n - 1; i++) {
      boxStart.push(boxStart[i] + boxStart[i + 1]);
    }
  } else {
    return 4;
  }
  return boxStart.reduce((acc, curr) => acc + curr) * 4;
}
