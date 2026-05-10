class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numMap = []

        for (let i = 0; i < nums.length; i++) {
            const countN = nums.filter(item => item === nums[i]).length
            
            if (!numMap[countN]) {
                numMap[countN] = []
            }

            if (!numMap[countN].includes(nums[i])) {
                numMap[countN].push(nums[i])
            }
        }

        return numMap.flat().slice(-k)
    }
}
