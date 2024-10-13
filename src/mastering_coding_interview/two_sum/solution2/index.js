/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let soma = 0;
    let maior = -100000;

    for(let i = 0; i <= nums.length - 1; i++){
        soma = soma + nums[i];

        if (soma > 0 ) {
            if( soma > maior ){
                maior = soma;
            }
        } else {
            soma = 0;
            if( nums[i] > maior ) {
                maior = nums[i];
            }
        }
    }
    console.log(maior)
    return maior;
};