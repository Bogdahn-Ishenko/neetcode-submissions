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
       
        const strs = []
        let newStr = str.match(/#(.*)$/)[1]
        const lengS = str.match(/^(.*?)#/)[1].split(',')

        for (let i = 0; i < lengS.length; i++) {
            let j = 0
            let w = ''

            while(j < lengS[i]) {
                w += newStr[j]
                j++
            }

            newStr = newStr.slice(lengS[i])
            strs.push(w)
        }
        return strs
    }
}
