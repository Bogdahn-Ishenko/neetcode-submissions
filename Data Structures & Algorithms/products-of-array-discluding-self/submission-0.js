class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (!nums) return []; 

        const prods = []
        let i = 0
        while (i < nums.length) {
            let j = 0
            let n = 1
            while (j < nums.length) {
                if (j === i) {
                    console.log('c', j)
                    j++
                    continue;
                }
                n = n * nums[j]
                j++
            }
            prods.push(n)
            n = 1
            i++
        }

        return prods
    }
}
