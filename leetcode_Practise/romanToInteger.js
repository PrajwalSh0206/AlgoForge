const romanChar = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }

const romanToInt = function (s) {
    let result = romanChar[s[0]]
    let prevChar = romanChar[s[0]]
    for (let i = 1; i < s.length; i++) {
        let integerVal = romanChar[s[i]]
        if (integerVal < prevChar || integerVal == prevChar) {
            result = result + integerVal
        }
        else {
            result = result - prevChar + integerVal - prevChar
        }
        prevChar = integerVal
    }
    return result
}

console.log(romanToInt("DCXXI")) //621
console.log(romanToInt("LVIII")) //58
console.log(romanToInt("MMCCCVII")) //2307
console.log(romanToInt("MCMXCIV"))//1994