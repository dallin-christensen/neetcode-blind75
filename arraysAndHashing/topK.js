// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
  const returnedArray = []
  const map = {}
  for(let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (!map[num]) map[num] = 1
      else {
          map[num]++
      }

      if (map[num] === k) returnedArray.push(parseInt(num))
  }

  return returnedArray
};