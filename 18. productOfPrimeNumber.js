// Product of Prime Factors
// Given a number N find the product of all unique prime factors of that number.


function primeNums(n){
    let ans = 1

    for(let i=2; i<=n; i++){
        if(n%i == 0){
            ans = ans * i
        }
    }
    console.log(ans)
}


primeNums(24)
