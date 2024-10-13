/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let splitInt = x.toString();
    let reversedInt = x.toString().split('').reverse().join('');

    console.log(splitInt === reversedInt)
    return splitInt === reversedInt;
};

let x = 1000021;

isPalindrome(x);