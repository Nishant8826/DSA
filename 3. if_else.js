
/***
 * 
 * 
 * Unit          Price
 * upto 100      Rs 4
 * 101-200       Rs 6
 * 201-400       Rs 8
 * >400          Rs 13
 * 
 * 700
 * 
 */


function bottomToTopSum(unit) {
    let amount = 0;
    if (unit > 400) {
        amount += (unit - 400) * 13;     //1500
        unit = 400;
    }
    if (unit > 200 && unit <= 400) {
        amount += (unit - 200) * 8;     //1600
        unit = 200;
    }
    if (unit > 100 && unit <= 200) {
        amount += (unit - 100) * 6;     //600
        unit = 100;
    }

    amount += unit * 4;

    console.log(amount)

}

bottomToTopSum(123)