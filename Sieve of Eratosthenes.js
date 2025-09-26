/**
Given a positive integer n, calculate and return all prime numbers less than or equal to n using the Sieve of Eratosthenes algorithm.
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Examples:

Input: n = 10
Output: [2, 3, 5, 7]
Explanation: Prime numbers less than equal to 10 are 2, 3, 5 and 7.

Input: n = 35
Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
Explanation: Prime numbers less than equal to 35 are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 and 31.
 * 
 */

function returnAllPrimeNumbers(num) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    let ans = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            ans.push(i);
        }
    }
    return ans;
}


function returnAllPrimeNumbersOptimize(n) {
    let ans = [];
    let isPrime = new Array(n + 1).fill(true);
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            ans.push(i);

            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return ans;
}

console.log(returnAllPrimeNumbersOptimize(35))

