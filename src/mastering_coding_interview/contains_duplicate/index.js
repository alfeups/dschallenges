/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    let result = false;

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }
        map.set(nums[i], i);
    }
    return result;
};

let nums = [1,2,3,1]
containsDuplicate(nums);