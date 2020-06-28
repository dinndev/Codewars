function minMax(arr){
    let filtered = [];
    const max = Math.max.apply( null , arr);
    const min = Math.min.apply( null , arr)
    filtered.push(min)
    filtered.push(max)
    
    
    
    return filtered
    
    }