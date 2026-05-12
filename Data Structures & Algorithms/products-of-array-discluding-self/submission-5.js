class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const res = new Array(n).fill(1);


        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1]
        
        }
        let pos = 1
        console.log(res)
        for (let i = n-1; i >= 0; i--) {
            res[i] *= pos
            pos *= nums[i]
        }
        console.log(res)
        // for (let i = 0; i < n; i++) {
        //     if (i === 0) {
        //         res[i] = postf[i+1]
        //         continue;
        //     }
        //     if (i === n-1) {
        //         res[i] = pref[i-1]
        //         break;
        //     }

        //     res[i] = pref[i-1] * postf[i+1]
        // }

 
        return res
    }
    
}
