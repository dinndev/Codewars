

// Capitalization and Mutability

function capitalizeWord(word) {
    const test = word[0].toUpperCase()
    const sliced = word.slice(1)
    if(word.includes(test)){
      return
    }else {
     return test.concat(sliced)
    }
  }