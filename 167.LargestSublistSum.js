// Given a list of integers nums, return the sum of the contiguous sublist with the largest sum.

// Constraints

// n ≤ 100,000 where n is the length of nums

// Your code took 4 milliseconds — faster than 90.32% in JavaScript

class Solution {
  solve(nums) {
    const n = nums.length
    // store the latest local_maximum 
    let localMax = 0
    // keep track of the maximum value of local_maximum, which in the end comes out to be the required output
    let globalMax = Number.NEGATIVE_INFINITY
    let i = 0
    
    // if array length is 1
    if(n === 1) {
      return nums[0]
    }
    
    while(i < n) {
      // Return the number with the highest value
      localMax = Math.max(nums[i], nums[i] + localMax)
      
      if (localMax > globalMax) {
        globalMax = localMax
      }
      
      ++i
    }   

    return globalMax
  }
}
