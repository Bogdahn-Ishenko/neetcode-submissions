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

        for (let i = 0, arr = [...numMap]; i < arr.length; i++) {
            if (!bucket[arr[i][1]]) {
                bucket[arr[i][1]] = []
            }

            bucket[arr[i][1]].push(arr[i][0])
        }

        return bucket.flat().slice(-k)
    }
}
