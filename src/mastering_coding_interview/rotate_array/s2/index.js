/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    console.log(nums);

    for(let j = 0; j < k; j++) {
        let tempLastElement = nums[nums.length - 1];
        for (let i = nums.length - 1; i >= 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = tempLastElement;
    }

    console.log(nums);
};

let k = 2;
let nums = [-1,-100,3,99];
rotate(nums, k);