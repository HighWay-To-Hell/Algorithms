/**
 * @param {number[]} nums
 * @return {number}
 * 把1 放到 0idx 处, 把 2 放到 1idx 处, 把 3 放到 2idx 处.......
 */
var firstMissingPositive = function(nums) {
  if(!nums || nums.length < 1){
    return 1
  }

  let i = 0
  while(i < nums.length){
    if(nums[i] - 1 >= 0 && nums[i] - 1 < nums.length){
      const value = nums[i]
      if(nums[value - 1] != value){
        const tmp = nums[value - 1]
        nums[value - 1] = value 
        nums[i] = tmp
      }else{
        i += 1
      }
    }else{
      i += 1
    }
  }

  i = 0
  while(i < nums.length){
    if(nums[i] != i + 1){
      return i + 1
    }
    i += 1
  }
  return i + 1
};

let nums = [2147483647]
console.log(firstMissingPositive(nums))