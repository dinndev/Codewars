function reverseLetter(str) {
    //coding and coding..
    return str.replace(/[^a-zA-Z]/g , '').split('').reverse().join('');  
  }