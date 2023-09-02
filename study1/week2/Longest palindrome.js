/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let a = {};
    let chk = 0;
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if (a[s[i]]) {
            a[s[i]]++;
        } else {
            a[s[i]] = 1;
        }
    }
    for (const key in a) {
        if (a[key] % 2 === 1) {
            if (chk === 0) {
                chk = 1;
                sum += a[key];
            } else {
                sum += a[key] - 1;
            }
        } else {
            sum += a[key];
        }
    }

    return sum;
};