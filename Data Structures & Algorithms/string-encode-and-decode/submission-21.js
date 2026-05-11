class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return ''
        const lStrs = []
        
        for (let i = 0; i < strs.length; i++) {
            lStrs.push(strs[i].length)
        }

        let encStr = lStrs.join(',')

        encStr += '#'

        for (let i = 0; i < strs.length; i++) {
            encStr += strs[i]
        }

        return encStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return []
        const sepIndex = str.indexOf('#')
        const lengthS = str.slice(0, sepIndex).split(",")
        const data = str.slice(sepIndex+1)
        const strs = []
        
        let k = 0
        let i = 0
        while (i < lengthS.length) {
            let w = ''
            let j = 0
            while (j < lengthS[i]) {
                w += data[k]
                j++
                k++
            }
            strs.push(w)
            i++
        }
        return strs
    }
}
