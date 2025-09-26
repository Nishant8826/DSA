// Prine name n times
function printName(i, n) {
    if (i >= n) return;
    console.log('Nishant');
    i++
    printName(i, n);
}

// printName(0, 5);


function print1toN(i, n) {
    if (i > n) return;
    console.log(i);
    i++
    print1toN(i, n);
}

// print1toN(1, 10);


function printNto1(i, n) {
    if (i < n) return;
    console.log(i);
    i--
    printNto1(i, n);
}

// printNto1(10, 1);



//--------------------- BACKTRACKING ---------------------
//print 1 to n
function backtrack1(i) {
    if (i < 1) return;
    i--;
    backtrack1(i);
    console.log(i);
}

// backtrack1(5);


//print n to 1
function backtrack2(i, n) {
    if (i < n) return;
    i++;
    backtrack2(i, n);
    console.log(i);
}

// backtrack2(5, 5);


// print sum of first N numbers

function sumOfN(n) {
    if (n == 1) return 1;
    return n + sumOfN(n - 1);
}

// console.log(sumOfN(5));


// factorial

function fact(n) {
    if (n == 1) return 1;
    return n * fact(n - 1);
}

// console.log(fact(20));



// reverse an array

// function reverse(arr, i, n) {
//     if (i >= Math.floor(n / 2)) return;

//     let temp = arr[i];
//     arr[i] = arr[n - i - 1];
//     arr[n - i - 1] = temp;

//     reverse(arr, i + 1, n);
// }

// let arr = [1, 2, 3, 4, 5, 6]
// let len = arr.length;

// reverse(arr, 0, len);
// console.log(arr);


// check palindrome
function isPal(str, i, n) {
    if (i >= Math.floor(n / 2)) return true;
    if (str[i] != str[n - i - 1]) return false;
    return isPal(str, i + 1, n);
}

let string = '11211';
let len = string.length;

// console.log(isPal(string, 0, len));


// fibonacci series => summation of n-1 & n-2;

function fib(n) {
    if (n == 1 || n == 0) return n;
    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(6));


// Recursion on Subsequence

function Subsequence(ind, ds, arr, n) {
    if (ind >= n) {
        console.log(ds);
        return;
    }
    //take
    ds.push(arr[ind])
    Subsequence(ind + 1, ds, arr, n);

    // not take
    ds.pop();
    Subsequence(ind + 1, ds, arr, n);
}

let arr = [3, 1, 2];
let n = arr.length;
let ds = [];
Subsequence(0, ds, arr, n);
