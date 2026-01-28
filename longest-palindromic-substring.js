/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 1) return s;

  let longest = "";
  for (let firstLetter = 0; firstLetter < s.length - 1; firstLetter++) {
    for (
      let lastLetter = firstLetter + 1;
      lastLetter <= s.length;
      lastLetter++
    ) {
      if (s.length - firstLetter <= longest.length) break;
      let substring = s.substring(firstLetter, lastLetter);
      let firstHalf = substring.slice(0, Math.floor(substring.length / 2));
      let secondHalf = substring.slice(Math.ceil(substring.length / 2));

      let reversedSecondHalf = "";
      for (let i = secondHalf.length - 1; i >= 0; i--) {
        reversedSecondHalf = reversedSecondHalf + secondHalf[i];
      }

      if (firstHalf === reversedSecondHalf) {
        if (substring.length > longest.length) longest = substring;
      }
    }
  }
  return longest;
};
