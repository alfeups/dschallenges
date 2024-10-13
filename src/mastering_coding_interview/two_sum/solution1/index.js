/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complemento = target - nums[i];

        if (map.has(complemento)) {
            return [map.get(complemento), i];
        }


        map.set(nums[i], i);
    }
    return [];
};


let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));  // Saída esperada: [0, 1]
