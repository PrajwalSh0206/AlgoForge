const topKFrequent = (num, k) => {
    let hashTable = {}
    num = num.sort()
    let i = 0, j = 1;
    let count = 1;
    while (j < num.length) {
        if (num[i] != num[j]) {
            if (!hashTable[count]) hashTable[count] = []
            hashTable[count].push(num[i])
            i = j
            j = Math.min(i + 1, num.length)
            count = 1;
        }
        else {
            j++;
            count++
        }
    }
    if (!hashTable[count]) hashTable[count] = []
    hashTable[count].push(num[i])
    console.log(hashTable)
    let result = []
    let keys = Object.keys(hashTable).reverse()
    let keyLength = keys.length
    i = 0;
    if (keyLength != 0) {

        while (k != 0 && i < keyLength) {
            result = [...result, ...hashTable[keys[i]]]
            k = k - hashTable[keys[i]].length
            i++
        }

    }
    return result

}