function Subsequence(str, ans) {
    if (str.length === 0) {
        console.log(ans);
        return;
    }

    let ch = str[0];
    let rest = str.substring(1);

    Subsequence(rest, ans + ch);

    Subsequence(rest, ans);
}

// Subsequence('abcd', "");



function permutation(str, ans) {
    if (str.length == 0) {
        console.log(ans);
        return;
    }
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        let ros = str.substring(0, i) + str.substring(i + 1);
        permutation(ros, ans + ch);
    }

}

permutation('abcde', '')
