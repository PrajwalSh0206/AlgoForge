/**
 * @param {string} s
 * @return {boolean}
 */
const returnValue = function (s) {
    switch (s) {
        case "{": return 1;
        case "}": return 2;
        case "(": return 4;
        case ")": return 5;
        case "[": return 7;
        case "]": return 8;
        default: return 0;
    }
}

let isValid = function (s) {

    let arr = []
    for (const element of s) {
        if (arr.length != 0) {
            let removeData = arr.pop()
            if (-1 != returnValue(removeData) - returnValue(element)) {
                arr.push(removeData)
                arr.push(element)
            }
        }
        else {
            arr.push(element)
        }

    }
    return arr.length == 0;
};