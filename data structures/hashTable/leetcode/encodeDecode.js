class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (const iterator of strs) {
            result += `${iterator.length}#${iterator}`
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0;
        let length = "";
        while (i < str.length) {
            if (str[i] == "#") {
                length = parseInt(length)
                result.push(str.slice(i + 1, i + 1 + length))
                i = i + length
                length = ""
            }
            else {
                length += str[i]
            }
            i++
        }
        return result
    }
}

let str = ["Strings with spaces are tricky","Another one with spaces","This also has spaces"]

const s1 = new Solution()
let encStr = s1.encode(str)
let decStr = s1.decode(encStr)

console.log(decStr);