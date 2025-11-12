const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    if (num1 < 0 || num2 < 0) return 'ERROR';
    let min =  num1 < num2 ? num1 : num2;
    let max =  num1 > num2 ? num1 : num2;
    let num = 0;
    for (let i = min;i <= max;i++) {
        num += i;
        console.log(num);
    }
    return num;
};
console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
