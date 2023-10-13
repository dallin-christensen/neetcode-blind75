const twoSum = (nums, target) => {
  const complimentsMap = {}

  for (let i = 0; i <= nums.length; i++) {
      const num = nums[i]
      const compliment = target - num

      if (complimentsMap[num] || complimentsMap[num] === 0) {
          return [complimentsMap[num], i]
      }

      complimentsMap[compliment] = i
  }

  return []
};