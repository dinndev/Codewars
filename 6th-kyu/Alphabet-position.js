function alphabetPosition(text) {
    let arr = []
    const lower = text.toLowerCase()
    for(let i = 0; i < lower.length; i++){
    let code = lower.charCodeAt(i);
    if(code >= 97 && code <= 122){
    arr.push(code - 96);
    }
    }
    return arr.join(' ')
    }
