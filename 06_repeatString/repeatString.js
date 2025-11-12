const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';

    let repeatedStr = '';
    for (let i = 0; i < num; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
};

console.log(repeatString('Hello', 3));

// Do not edit below this line
module.exports = repeatString;
