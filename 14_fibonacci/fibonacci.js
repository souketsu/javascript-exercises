const fibonacci = function(n) {
    const num = Number(n);

    if (isNaN(num) || num < 0){
        return 'OOPS';
    }
    if (num === 0){
        return 0;
    }
    if(num <= 1){
        return num;
    }

    let a = 0;
    let b = 1;
    let c = 0;

    for(let i = 2; i <= num; i++){
        c = a + b;
        a = b;
        b = c;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
