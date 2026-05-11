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
        
        let i = 0
        let c = 0
        while (i < lengthS.length) {
            console.log(lengthS.length, c)
            strs.push(data.substring(c, +lengthS[i] + c))
            c += +lengthS[i]
            i++
        }
        return strs
    }
}
