const evenLast = (arr) =>
  arr.filter((e, i) => i % 2 === 0).reduce((a, b) => a + b, 0) *
    arr[arr.length - 1] || 0;
