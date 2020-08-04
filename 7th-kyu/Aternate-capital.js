function capitalize(s){
    let odd = '';
    let even = ''; 
   for(let i in s) {
     if(i % 2 === 0){
       even += s[i].toUpperCase();
       odd += s[i].toLowerCase()
     } else {
       even += s[i]
       odd += s[i].toUpperCase()
     }
   }
    return [even , odd]
  };