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
                const anagramGroup = anagramsGroup.get(aSort)
                anagramsGroup.set(aSort, [...anagramGroup, anagram])
            } else {
                anagramsGroup.set(aSort, [anagram])
            }

        }

        return [...anagramsGroup.values()]
    }
}
