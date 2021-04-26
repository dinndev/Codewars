function sum(arr){
    let sum = 0;
   arr.forEach( v  => {
    if( v > 0 ){
    return sum += v  
    } else {
        return 0;
    }
 
   });
   console.log( sum);
}

const arr = [1,-2,5,3,-5];

sum(arr);