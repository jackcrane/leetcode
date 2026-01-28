/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 1) return s;

  let longest = "";
  for (let ctrIdx = 0; ctrIdx < s.length - 1; ctrIdx++) {
    const maxOdd = 2 * Math.min(ctrIdx, s.length - ctrIdx - 1) + 1;
    if (maxOdd <= longest.length) continue;

    let firstChar = ctrIdx;
    let secondChar = ctrIdx;

    while (
      firstChar > 0 &&
      secondChar < s.length &&
      s[firstChar - 1] === s[secondChar + 1]
    ) {
      firstChar--;
      secondChar++;
    }
    if (secondChar - firstChar + 1 > longest.length) {
      longest = s.slice(firstChar, secondChar + 1);
    }

    // EVEN BRANCH
    if (s[ctrIdx] == s[ctrIdx + 1]) {
      const maxEven = 2 * Math.min(ctrIdx + 1, s.length - ctrIdx - 1);
      if (maxEven <= longest.length) continue;
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
      }
      if (secondChar - firstChar + 1 > longest.length) {
        longest = s.slice(firstChar, secondChar + 1);
      }
    }
  }
  return longest;
};

// console.log(longestPalindrome("abbcccba"));
