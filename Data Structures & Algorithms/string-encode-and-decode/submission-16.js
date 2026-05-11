class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       if (strs.length === 0) return "[]"

        const encodeStr = strs
            .map((str) => {
                if (str.length === 0) {
                    return "^";
                }
                return str
                    .split("")
                    .map((s) => s.charCodeAt(0))
                    .join(",");
            })
            .join("-");

        return encodeStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
       if (str === "[]") return []

        const strs = str.split("-");

        return strs.map((str) => {

            if (str === "^") return ""
            const decodeStr = str.split(",")
                .map((s) => String.fromCharCode(s))
                .join("");

            return decodeStr
        });
    }
}
