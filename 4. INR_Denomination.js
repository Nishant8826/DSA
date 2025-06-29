/**
 * Q. Takes an amount as an argument, return how many notes can be used to make it equal to amount
 * 
 */

function notesDenomination(amt) {
    let notes500 = 0;
    let notes200 = 0;
    let notes100 = 0;
    let notes50 = 0;
    let notes20 = 0;
    let notes10 = 0;
    let notes5 = 0;
    let notes2 = 0;
    let notes1 = 0;
    if (amt >= 500) {
        notes500 = Math.floor(amt / 500);
        amt = amt % 500
    }
    if (amt >= 200 && amt < 500) {
        notes200 = Math.floor(amt / 200);
        amt = amt % 200
    }
    if (amt >= 100 && amt < 200) {
        notes100 = Math.floor(amt / 100);
        amt = amt % 100
    }
    if (amt >= 50 && amt < 100) {
        notes50 = Math.floor(amt / 50);
        amt = amt % 50
    }
    if (amt >= 20 && amt < 50) {
        notes20 = Math.floor(amt / 20);
        amt = amt % 20
    }
    if (amt >= 10 && amt < 20) {
        notes10 = Math.floor(amt / 10);
        amt = amt % 10
    }
    if (amt >= 5 && amt < 10) {
        notes5 = Math.floor(amt / 5);
        amt = amt % 5
    }
    if (amt >= 2 && amt < 5) {
        notes2 = Math.floor(amt / 2);
        amt = amt % 2
    }
    notes1 = Math.floor(amt / 1);
    amt = amt % 1

    let noteStr = `500 - ${notes500} || 200 - ${notes200} || 100 - ${notes100} || 50 - ${notes50} || 20 - ${notes20} || 10 - ${notes10} || 5 - ${notes5} || 2 - ${notes2} || 1 - ${notes1} `

    console.log(noteStr)
}


notesDenomination(5234)