let str = 'Inidasd2 sdcvsdc sdcvcsdk vksdcj v sdc'
//                                i                     
// sdc
// j
//              
// count = 2
//           

function occurance(sub) {
    let i = 0;
    let j = 0;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == sub[j]) {
            j++
        } else {
            j = 0
        }
        if (sub.length == j) {
            count++
            j = 0;
        }
    }
    console.log(count);

}


occurance('sdc')
