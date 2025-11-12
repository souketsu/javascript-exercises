const leapYears = function(years) {
if (years % 4 === 0 && years % 400 === 0) {
    return true
    } else if (years % 4 === 0 && years % 100 === 0) {
        return false;
        } else if (years % 4 === 0) {
            return true;
            }  else {
                return false;
                    }  
    };

console.log(`Is 2000 a leap year? ${leapYears(2000)}`);
console.log(`Is 2004 a leap year? ${leapYears(2004)}`);
console.log(`Is 1985 a leap year? ${leapYears(1985)}`);
console.log(`Is 1900 a leap year? ${leapYears(1900)}`);

// Do not edit below this line
module.exports = leapYears;
