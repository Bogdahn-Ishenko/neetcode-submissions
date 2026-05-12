class Solution {
    productExceptSelf(nums) {
        const n = nums.length
        const res = new Array(n)

        let prefix = 1
        for (let i = 0; i < n; i++) {
           res[i] = prefix
           prefix *= nums[i]
        
        }
        let pos = 1
        console.log(res)
        for (let i = n-1; i >= 0; i--) {
            res[i] *= pos
            pos *= nums[i]
        }
 
        return res
    }
    
}
