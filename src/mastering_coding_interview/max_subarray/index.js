function maxSubArray(nums) {
    let somaAtual = nums[0];
    let somaMaxima = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (somaAtual + nums[i] > nums[i]) {
            somaAtual = somaAtual + nums[i];
        } else {
            somaAtual = nums[i];
        }

        if (somaAtual > somaMaxima) {
            somaMaxima = somaAtual;
        }
    }

    return somaMaxima;
}


let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
