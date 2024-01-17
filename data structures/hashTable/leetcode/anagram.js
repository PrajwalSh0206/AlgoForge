const isAnagram = (s, t) => {
    let sTable = {}, tTable = {}
    for (const char of s) {
        sTable[char] = (sTable[char] || 0) + 1
    }
    for (const char of t) {
        tTable[char] = (tTable[char] || 0) + 1
    }

    if (Object.keys(sTable).length == Object.keys(tTable).length) {
        for (const key in sTable) {
            if (sTable[key] != tTable[key]) {
                return false
            }
        }
        return true
    }
    return false

}

let s = "car"
let t = "rat"

console.log(isAnagram(s, t))