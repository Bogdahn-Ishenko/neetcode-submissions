class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        console.log(typeof s)
        const testPolindrom = (s.match(/[a-z0-9]/gi) ?? []).join("").toLowerCase();
        let end = testPolindrom.length - 1;
        let start = 0;

        for (let i = 0; i < Math.ceil(testPolindrom.length / 2); i++) {
            start += 1
            end -= 1
            if (testPolindrom[start] !== testPolindrom[end]) return false
        }

        return true
    }
}
