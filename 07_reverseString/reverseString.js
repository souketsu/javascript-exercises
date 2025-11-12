const reverseString = function(strs) {
    let carryArray = strs.split('');
    carryArray.reverse();
    return carryArray.join('');
};


console.log(reverseString('hello there')); // 返回 'ereht olleh'

// Do not edit below this line
module.exports = reverseString;
