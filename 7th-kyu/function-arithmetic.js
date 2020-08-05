function arithmetic(a, b, operator){
    //your code here!
    let total = 0;
    switch(operator) {
        case 'add' : total = a + b;
        break;
        case 'subtract' : total = a - b;
        break;
        case 'multiply' : total = a * b;
        break;
        case 'divide' : total = a / b;
    }
    return total
  }