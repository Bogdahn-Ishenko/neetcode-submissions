class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numMap = new Map()

        for (const n of nums) {
            numMap.set(n, (numMap.get(n) ?? 0) + 1)
        }

        const bucket = []

        for (const [key, val] of numMap) {
            bucket[val] = (bucket[val] || [])

            bucket[val].push(key)
        }
        return bucket.flat().slice(-k)
    }
}
