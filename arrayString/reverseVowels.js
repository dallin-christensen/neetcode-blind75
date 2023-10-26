// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"


// the industry standard solution, use a while loop and walk back from each direction til i > j
const reverseVowels = (s) => {
  const VOWELS = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
  const arr = s.split('');
  let i = 0, j = arr.length - 1;
  while (i < j) {
      if (VOWELS[arr[i]] && VOWELS[arr[j]]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
      } else if (VOWELS[arr[i]]) {
          j--;
      } else {
          i++;
      }
  }
  return arr.join('');
};

// solution I came up with, map the indexes at which each vowl occurs, then walk through the indexes and reverse them
// beats 95% on a time scale 🤷‍♂️
const reverseVowelsOrig = (s) => {
  const a = s.split("")
  const vowlMap = []

  for (let i = 0; i < a.length; i++) {
      const ai = a[i].toLowerCase()
      if (ai === 'a' || ai === 'e' || ai === 'i' || ai === 'o'  || ai === 'u') {
          vowlMap.push(i)
      }
  }

  for (let j = 0; j < Math.floor(vowlMap.length/2); j++) {
      const fI = vowlMap[j]
      const lI = vowlMap[vowlMap.length - 1 -j]

      const fVal = a[fI]
      const lVal = a[lI]

      a[fI] = lVal
      a[lI] = fVal 
  }

  return a.join("")
};