class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numMap = new Map()

        for (const n of nums) {
            if (!numMap.has(n)) {
                numMap.set(n, 0)
            }
            numMap.set(n, numMap.get(n) + 1)
        }

        return [...numMap.entries()].sort((a, b) => b[1] - a[1]).slice(0,k).map(([key]) => key)
    }
}
