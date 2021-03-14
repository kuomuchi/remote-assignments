function twoSum(nums, target) { // your code here 
    var answer=[];

    //無情爆搜，硬找answer
    for(let i=0; i<nums.length; i++){
        for(let u=0; u<nums.length; u++){
            if(i != u){
                if(nums[i]+nums[u] == target){
                    answer[0] = i;
                    answer[1] = u;
                    return answer;
                }
            }

            
        }
    }
}



// For example:

console.log(twoSum([2, 11, 7, 15], 9));

// Should returns:
// [0, 1] Because:

// nums[0]+nums[1] is 9

