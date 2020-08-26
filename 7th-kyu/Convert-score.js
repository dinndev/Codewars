function scoreboard(string) {
    // code here!
    let nums = [];
    const number = {
      nil: 0,
      one: 1,
      two: 2 ,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    }
    const words = string.split(' ');
    words.forEach((word , i) => {
      for(let score in number){
        if(word === score){
           nums.push(number[score]);
        }
      }
    });
   return nums
  }