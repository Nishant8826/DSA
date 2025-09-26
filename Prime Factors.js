/**
Given a number n. Find its unique prime factors in increasing order.

Examples :

Input: n = 100
Output: [2, 5]
Explanation: Unique prime factors of 100 are 2 and 5.
Input: n = 60
Output: [2, 3, 5]
Explanation: Prime factors of 60 are 2, 2, 3, 5. Unique prime factors are 2, 3 and 5.
 */

function primeFac(n) {
    let ans = [];
    let divisor = [];
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            divisor.push(i);
        }
    }

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    for (let i = 0; i < divisor.length; i++) {
        if(isPrime(divisor[i])){
            ans.push(divisor[i])
        }
    }

    return ans;
}

console.log(primeFac(100));