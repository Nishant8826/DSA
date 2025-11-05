/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let map = new Map();
    key = key.split(" ").join("")
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let j = 0;
    for (let i = 0; i < key.length; i++) {
        if (!map.has(key[i])) {
            map.set(key[i], str[j]);
            j++;
        }
    }
    let msg = '';
    for (let i = 0; i < message.length; i++) {
        if (message[i] == ' ') msg += ' ';
        else msg += map.get(message[i]);
    }
    return msg;
};


console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv'))
// console.log(decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'))
// console.log(decodeMessage(''))
// console.log(decodeMessage())