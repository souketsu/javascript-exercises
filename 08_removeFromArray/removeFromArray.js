const removeFromArray = function(arr, ...args) {
    return arr.filter(item=>!args.includes(item));
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // 应该移除3并返回[1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
