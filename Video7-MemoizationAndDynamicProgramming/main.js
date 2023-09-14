//Video 7 on Memoization
function fib(n) {
    if (n <= 2) {
        return 1
     }  else {
        return fib(n-1) + fib(n-2)
    }
}
console.log(fib(41)); //165580141   