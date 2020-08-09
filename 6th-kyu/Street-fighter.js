function streetFighterSelection(fighters, position, moves){
    let answer = []
    let horizontal = position[1];
    let vertical = position[0]
    moves.forEach( move => {
        switch(move) {
            case 'up' :
            if(vertical !== 0){
              vertical -= 1
            }
            break;
            case 'down' :
            if(vertical !== 1){
              vertical += 1
            }
            break;
            case 'left' :
            if(horizontal == 0){
              horizontal = fighters[0].length -1
            } else {
               horizontal -=1 
            }
            break;
            case 'right':
            if(horizontal == fighters[0].length -1){
              horizontal = 0; 
            }else {
              horizontal += 1
            } 
        }
        answer.push(fighters[vertical][horizontal]);
    });
    return answer
  }