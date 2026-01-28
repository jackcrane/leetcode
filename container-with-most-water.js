// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
  let max = 0;

  let l = 0;
  let r = heights.length - 1;

  while (l < r) {
    const width = r - l;
    const height = Math.min(heights[l], heights[r]);
    const area = width * height;
    max = Math.max(area, max);
    if (heights[l] < heights[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([4, 3, 2, 1, 4]));
