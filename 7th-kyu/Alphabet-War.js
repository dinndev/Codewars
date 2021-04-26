function alphabetWar(fight) {
  //create variable for scores and total score of each team
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };
  let leftTeam = 0;
  let rightTeam = 0;
  for (fightIndex of fight) {
    if (right.hasOwnProperty(fightIndex)) {
      rightTeam += right[fightIndex];
    } else if (left.hasOwnProperty(fightIndex)) {
      leftTeam += left[fightIndex];
    }
  }
  if (leftTeam > rightTeam) {
    return "Left side wins!";
  } else if (leftTeam < rightTeam) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}
