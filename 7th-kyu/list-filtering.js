function filter_list(l) {
    // Return a new array with the strings filtered out
    let lists = [];
    l.filter( e => {
     if (typeof e === 'number' ) {
     lists.push(e)
     }
    });
    return lists;
  }