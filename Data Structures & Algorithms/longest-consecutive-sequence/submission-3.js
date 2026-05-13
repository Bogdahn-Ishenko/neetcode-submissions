class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (nums.length === 0) {
            return 0
        }

        const sortedNums = nums.toSorted((a, b) => a - b)
        const res = []
        let c = 1
        
        for (let i = sortedNums.length - 1; i > 0; i--) {

            if(sortedNums[i] === sortedNums[i - 1]) {
                continue;
            }

            if(sortedNums[i] - 1 === sortedNums[i - 1]) {
                c += 1
            } else {
               res.push(c)
               c = 1
            }
        }

        res.push(c)

        return Math.max(...res)
    }
}
