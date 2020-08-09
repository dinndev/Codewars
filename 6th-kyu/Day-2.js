function presses(phrase) {
    // To do...
    let str = phrase.toUpperCase().split('')
    let total = 0;
    let three = 0
   str.forEach(s => {
  // first solution (against dry)
    if('A' == s || 'D' == s || 'G' == s|| 'J' == s ||'M' == s|| 'P' == s || 'T' == s || 'W' == s ||
      " " == s || '*' == s || '#' == s || '1' == s ){
     total += 1
    }else if('0' == s || 'B' == s || 'E' == s || 'H' == s|| 'K' == s ||'N' == s|| 'Q' == s || 'U' == s || 'X' == s || '*' == s || '#' == s){
     total += 2
    }else if(  'C' == s || 'F' == s || 'I' == s|| 'L' == s ||'O' == s|| 'R' == s || 'V' == s || 'Y' == s || '*' == s || '#' == s){
     total += 3
    } else {
      total += 4
    }
   });
    return total;
  }