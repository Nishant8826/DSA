/** 
 * e.g. n = 5
 * 
 * number of indexes where even number can be possible = (n + 1)/2 = 3;   (+1 becuase of counting zero)
 * number of indexes where odd number can be possible = n/2 = 3;
 * 
 * total can be in even position = 0, 2, 4, 6, 8 == 5;
 * total can be in odd position = 2, 3, 5, 7 = 4;
 * 
 * 
//  */
var countGoodNumbers = function (n) {
    const Mod = 1000000007n;
    var myPow = function (base, exp) {
        base = BigInt(base);
        exp = BigInt(exp);
        if (exp == 0n) return 1n;
        if (exp % 2n == 0n) {
            let evenHalf = myPow(base, exp / 2n);
            return (evenHalf * evenHalf) % Mod;
        } else {
            let oddHalf = myPow(base, (exp - 1n) / 2n);
            return (base * ((oddHalf * oddHalf) % Mod)) % Mod;
        }
    };
    const even = Math.floor((n + 1) / 2);
    const odd = Math.floor(n / 2);
    const result = myPow(5n, even) * myPow(4n, odd);
    return Number(result % Mod)
};






console.log(countGoodNumbers(1));  //5
console.log(countGoodNumbers(4));  //400
console.log(countGoodNumbers(50));  //564908303
