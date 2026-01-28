// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
  let max = 0;
  for (let h1idx = 0; h1idx < heights.length; h1idx++) {
    let height1 = heights[h1idx];
    for (let h2idx = 0; h2idx < heights.length; h2idx++) {
      if (h1idx === h2idx) continue;
      let height2 = heights[h2idx];

      let width = h2idx - h1idx;
      let height = Math.min(height1, height2);

      let area = width * height;
      if (area > max) {
        max = area;
      }
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([4, 3, 2, 1, 4]));
