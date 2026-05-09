class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const includes = new Map()

        for (let i = 0; i < nums.length; i++) {
            const req = target - nums[i]
            if (includes.has(target - req)) {
                return [i, includes.get(target - req)]
            }

            includes.set(req, i)
        }
    }
}
