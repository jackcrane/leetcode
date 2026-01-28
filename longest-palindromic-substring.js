/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 1) return s;

  let longest = "";
  for (let ctrIdx = 0; ctrIdx < s.length - 1; ctrIdx++) {
    let center = s[ctrIdx];
    let firstChar = ctrIdx;
    let secondChar = ctrIdx;

    while (
      firstChar > 0 &&
      secondChar < s.length &&
      s[firstChar - 1] === s[secondChar + 1]
    ) {
      firstChar--;
      secondChar++;
      center = s[firstChar] + center + s[secondChar];
    }
    if (center.length > longest.length) longest = center;

    if (s[ctrIdx] == s[ctrIdx + 1]) {
      center = s[ctrIdx] + s[ctrIdx + 1];
      firstChar = ctrIdx;
      secondChar = ctrIdx + 1;
      while (
        firstChar > 0 &&
        secondChar < s.length &&
        s[firstChar - 1] === s[secondChar + 1]
      ) {
        firstChar--;
        secondChar++;
        center = s[firstChar] + center + s[secondChar];
      }
    }

    if (center.length > longest.length) longest = center;
  }
  return longest;
};

// console.log(longestPalindrome("abbcccba"));
