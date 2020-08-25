function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    let val = 0;
    marks.forEach(mark => {
      val += mark;
    });
    return Math.floor(val / marks.length)
  }