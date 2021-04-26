function hero(bullets, dragons) {
  //Get Coding!
  if (bullets !== 0) {
    const totalBullets = bullets / 2;
    if (dragons <= totalBullets) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
