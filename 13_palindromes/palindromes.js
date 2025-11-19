const palindromes = function (str) {
  const clearString = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversedString = clearString.split('').reverse().join('');
  return clearString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
