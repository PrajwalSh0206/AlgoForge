/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1
    s = s.toUpperCase()
    while (left < right) {
        if (!s[left].match(/[A-Z]/g)) {
            left++
        }
        else if (!s[right].match(/[A-Z]/g)) {
            right++
        }
        else if (s[left] != s[right]) {
            return false
        }
        else {
            left++
            right--
        }
    }
    return true
};

let s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s));