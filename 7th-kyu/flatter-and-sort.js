function flattenAndSort(array) {
    let newArray = []
  // Good luck, brave code warrior!
    array.forEach(arr => {
      newArray = newArray.concat(arr).sort((a,b)=> a - b);
    });
  return newArray
}