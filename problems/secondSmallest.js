/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(nums) {
  nums.sort((a, b) => a - b)
  return nums[1];
}

module.exports = secondSmallest
