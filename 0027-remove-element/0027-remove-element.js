/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let notVal = 0

   for(let i = 0; i < nums.length; i++){
    if(nums[i] !== val){
        nums[notVal] = nums[i]
        notVal++
    }
   } return notVal
};

// Time complexity = O(n)
// Space complexity = O(1)