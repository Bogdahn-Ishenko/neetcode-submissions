class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        if (nums.length === 0) return 0;

        const numSet = [...new Set(nums).values()].sort((a, b) => a - b);
        let longs = 1;
        let oldLongs = 1; 
        let i = 0;

        while (i < numSet.length) {
            
            if (i + 1 < numSet.length && numSet[i] === numSet[i + 1] - 1) {
                longs += 1;
            } else {
               
                if (oldLongs < longs) {
                    oldLongs = longs;
                }
                longs = 1; 
            }

            i++;
        }

        return Math.max(longs, oldLongs);
    }

}
