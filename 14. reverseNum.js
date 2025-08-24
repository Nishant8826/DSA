function reverseNum(num) {

    let a = 0;

    while (num != 0) {
        a = (num % 10) + (a * 10)
        //  a =  436 % 10 = 6
        //  a = 43 % 10 + 6*10 = 63
        //  a = 4 % 10 + 63 * 10 = 634
        num = Math.floor(num / 10)
        //   num =  43
        //  num = 4
        //  num = 0
    }

    console.log(a);

}


reverseNum(436);