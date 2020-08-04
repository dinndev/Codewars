var number = function(busStops){
    // Good Luck! 
    let count = 0;
  busStops.map(v => {
    let load = v[0]
    let unload = v[1];
     count += load - unload
  });
    return count
  }