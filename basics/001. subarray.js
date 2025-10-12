let arr = [1,2,3];

function subarr(arr) {
    let sub = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let emp = []
            for (let k = i; k <= j; k++) {
                emp.push(arr[k])
            }
            sub.push(emp)
        }
    }
    console.log(sub)
}

subarr(arr);