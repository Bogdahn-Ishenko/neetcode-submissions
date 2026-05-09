class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsGroup = new Map()

        strs.sort((a, b) => a.length - b.length)

        for (const anagram of strs) {
            const aSort = anagram.split("").sort().join("")
            
            if (anagramsGroup.has(aSort)) {
                anagramsGroup.get(aSort).push(anagram)
            } else {
                anagramsGroup.set(aSort, [anagram])
            }

        }

        return [...anagramsGroup.values()]
    }
}
