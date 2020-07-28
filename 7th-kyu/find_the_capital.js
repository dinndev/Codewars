var capitals = function (word) {
	// Write your code here
  let index = [];
    for(let i = 0; i < word.length; i++) {
      if(word[i] == word[i].toUpperCase()){
        index.push(i)
      } 
      }
      return index
    }