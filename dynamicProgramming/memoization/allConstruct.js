let memo = {}
const allConstruct = (target, array) => {
   if(target in memo) return memo[target]
   if (target == "") return [[]]

   let list = []
   for (const char of array) {
      if (target.indexOf(char) == 0) {
         let baseResult = allConstruct(target.slice(char.length),array)
         let mixedArray = baseResult.map((value)=>{return [char,...value]})
         list.push(...mixedArray)
      }
   }
   memo[target]=list
   return list
   // return longList
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("123", ["12", "1", "2", "3"]));
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "eeeeeee", "eeeeeeeeeee", "eeeeeeeeeeeeeeeeeeeee", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"]))