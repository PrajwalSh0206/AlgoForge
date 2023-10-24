let memo={}

const fib = (n)=>
{
    if(n in memo) return memo[n]
    if(n<=2) return 1
    memo[n]=fib(n-1)+fib(n-2)
    return memo[n]
}

console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(50))
console.log(fib(100))