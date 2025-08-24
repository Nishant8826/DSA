// Find all factorial numbers less than or equal to N

function fact(n) {
    let ans = [];
    let i = 1;
    let fact = 1;
    while (fact <= n) {
        ans.push(fact);
        i++;
        fact = fact * i
    }
    console.log(ans);
}


fact(150)