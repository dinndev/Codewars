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
   string.split(' ').forEach(v => {
      for(let score in number){
        if(v === score){
           nums.push(number[score]);
        }
      }
    });
   return nums
  }