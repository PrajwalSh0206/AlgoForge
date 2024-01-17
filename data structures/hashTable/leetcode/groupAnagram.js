const groupAnagrams = (strs = []) => {
    let hashTable = {}
    for (const word of strs) {
        let sortWord = word.split("").sort().join("");

        let arr = hashTable[sortWord] || []
        hashTable[sortWord] = [...arr, word]
    }
    let group=Object.values(hashTable)
    return group
}

let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))