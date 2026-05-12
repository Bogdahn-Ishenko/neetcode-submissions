class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const pref = new Array(n)
        const postf = new Array(n)
        const res = new Array(n)
        
        pref[0] = nums[0]
        postf[n-1] = nums[n-1]

        for (let i = 1; i < n; i++) {
            pref[i] = pref[i - 1] * nums[i]
            postf[n-i-1] = postf[n-i] * nums[n-i-1]

        }

        for (let i = 0; i < n; i++) {
            if (i === 0) {
                res[i] = postf[i+1]
                continue;
            }
            if (i === n-1) {
                res[i] = pref[i-1]
                break;
            }

            res[i] = pref[i-1] * postf[i+1]
        }

        // console.log(pref,'\n',postf,'\n', res)

        return res
    }
    
}
