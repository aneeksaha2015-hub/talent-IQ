export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one.",
      notes: ["Find that single one."],
    },
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
}`,
      python: `def singleNumber(nums):
    pass`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n4",
      python: "1\n4",
      java: "1\n4",
    },
  },

  "roman-to-integer": {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Convert a Roman numeral to an integer.",
      notes: [],
    },
    examples: [
      { input: 's = "III"', output: "3" },
      { input: 's = "LVIII"', output: "58" },
    ],
    constraints: ["1 ≤ s.length ≤ 15"],
    starterCode: {
      javascript: `function romanToInt(s) {
  // Write your solution here
}`,
      python: `def romanToInt(s):
    pass`,
      java: `class Solution {
    public static int romanToInt(String s) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n58",
      python: "3\n58",
      java: "3\n58",
    },
  },

  "palindrome-number": {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    description: {
      text: "Given an integer x, return true if x is a palindrome, and false otherwise.",
      notes: [],
    },
    examples: [
      { input: "x = 121", output: "true" },
      { input: "x = -121", output: "false" },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
}`,
      python: `def isPalindrome(x):
    pass`,
      java: `class Solution {
    public static boolean isPalindrome(int x) {
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "sqrt-x": {
    id: "sqrt-x",
    title: "Sqrt(x)",
    difficulty: "Easy",
    category: "Binary Search",
    description: {
      text: "Given a non-negative integer x, compute and return the square root of x.",
      notes: ["Return the integer part only."],
    },
    examples: [
      { input: "x = 4", output: "2" },
      { input: "x = 8", output: "2" },
    ],
    constraints: ["0 ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function mySqrt(x) {
  // Write your solution here
}`,
      python: `def mySqrt(x):
    pass`,
      java: `class Solution {
    public static int mySqrt(int x) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2",
      python: "2\n2",
      java: "2\n2",
    },
  },

  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "Given a non-empty array of digits representing a non-negative integer, increment one to the integer.",
      notes: [],
    },
    examples: [{ input: "digits = [1,2,3]", output: "[1,2,4]" }],
    constraints: ["1 ≤ digits.length ≤ 100"],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here
}`,
      python: `def plusOne(digits):
    pass`,
      java: `class Solution {
    public static int[] plusOne(int[] digits) {
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,4]",
      python: "[1, 2, 4]",
      java: "[1, 2, 4]",
    },
  },

  "length-of-last-word": {
    id: "length-of-last-word",
    title: "Length of Last Word",
    difficulty: "Easy",
    category: "String",
    description: {
      text: "Given a string s consisting of words and spaces, return the length of the last word.",
      notes: [],
    },
    examples: [{ input: 's = "Hello World"', output: "5" }],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLastWord(s) {
  // Write your solution here
}`,
      python: `def lengthOfLastWord(s):
    pass`,
      java: `class Solution {
    public static int lengthOfLastWord(String s) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
    },
  },

  "power-of-two": {
    id: "power-of-two",
    title: "Power of Two",
    difficulty: "Easy",
    category: "Bit Manipulation",
    description: {
      text: "Given an integer n, return true if it is a power of two.",
      notes: [],
    },
    examples: [
      { input: "n = 16", output: "true" },
      { input: "n = 3", output: "false" },
    ],
    constraints: ["-2³¹ ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPowerOfTwo(n) {
  // Write your solution here
}`,
      python: `def isPowerOfTwo(n):
    pass`,
      java: `class Solution {
    public static boolean isPowerOfTwo(int n) {
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "reverse-integer": {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Easy",
    category: "Math",
    description: {
      text: "Given a signed 32-bit integer x, return x with its digits reversed.",
      notes: ["Return 0 if it overflows."],
    },
    examples: [{ input: "x = 123", output: "321" }],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function reverse(x) {
  // Write your solution here
}`,
      python: `def reverse(x):
    pass`,
      java: `class Solution {
    public static int reverse(int x) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "321",
      python: "321",
      java: "321",
    },
  },

  "fizz-buzz": {
    id: "fizz-buzz",
    title: "Fizz Buzz",
    difficulty: "Easy",
    category: "Math • Simulation",
    description: {
      text: "Given an integer n, return a string array answer where:",
      notes: [
        "answer[i] == 'FizzBuzz' if i divisible by 3 and 5",
        "answer[i] == 'Fizz' if divisible by 3",
        "answer[i] == 'Buzz' if divisible by 5",
        "otherwise answer[i] == i",
      ],
    },
    examples: [{ input: "n = 5", output: '["1","2","Fizz","4","Buzz"]' }],
    constraints: ["1 ≤ n ≤ 10⁴"],
    starterCode: {
      javascript: `function fizzBuzz(n) {
  // Write your solution here
}`,
      python: `def fizzBuzz(n):
    pass`,
      java: `class Solution {
    public static String[] fizzBuzz(int n) {
        return new String[0];
    }
}`,
    },
    expectedOutput: {
      javascript: '["1","2","Fizz","4","Buzz"]',
      python: "['1','2','Fizz','4','Buzz']",
      java: "[1, 2, Fizz, 4, Buzz]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "remove-duplicates-sorted-array": {
    id: "remove-duplicates-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given a sorted array nums, remove the duplicates in-place such that each element appears only once.",
      notes: ["Return the new length."],
    },
    examples: [{ input: "nums = [1,1,2]", output: "2" }],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function removeDuplicates(nums) {}`,
      python: `def removeDuplicates(nums): pass`,
      java: `class Solution { public static int removeDuplicates(int[] nums) { return 0; } }`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "merge-sorted-array": {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Merge two sorted arrays into one sorted array.",
      notes: ["Modify nums1 in-place."],
    },
    examples: [
      { input: "nums1=[1,2,3,0,0,0], nums2=[2,5,6]", output: "[1,2,2,3,5,6]" },
    ],
    constraints: ["1 ≤ m,n ≤ 200"],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {}`,
      python: `def merge(nums1, m, nums2, n): pass`,
      java: `class Solution { public static void merge(int[] nums1,int m,int[] nums2,int n){} }`,
    },
    expectedOutput: {
      javascript: "[1,2,2,3,5,6]",
      python: "[1, 2, 2, 3, 5, 6]",
      java: "[1, 2, 2, 3, 5, 6]",
    },
  },

  "implement-strstr": {
    id: "implement-strstr",
    title: "Implement strStr()",
    difficulty: "Easy",
    category: "String",
    description: {
      text: "Return the index of the first occurrence of needle in haystack.",
      notes: ["Return -1 if not found."],
    },
    examples: [{ input: 'haystack="hello", needle="ll"', output: "2" }],
    constraints: ["1 ≤ haystack.length ≤ 10⁴"],
    starterCode: {
      javascript: `function strStr(haystack, needle) {}`,
      python: `def strStr(haystack, needle): pass`,
      java: `class Solution { public static int strStr(String h,String n){ return 0;} }`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "counting-bits": {
    id: "counting-bits",
    title: "Counting Bits",
    difficulty: "Easy",
    category: "Dynamic Programming • Bit Manipulation",
    description: {
      text: "Return an array answer where answer[i] is the number of 1's in binary representation of i.",
      notes: [],
    },
    examples: [{ input: "n = 2", output: "[0,1,1]" }],
    constraints: ["0 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function countBits(n) {}`,
      python: `def countBits(n): pass`,
      java: `class Solution { public static int[] countBits(int n){ return new int[0]; } }`,
    },
    expectedOutput: {
      javascript: "[0,1,1]",
      python: "[0, 1, 1]",
      java: "[0, 1, 1]",
    },
  },

  "hamming-distance": {
    id: "hamming-distance",
    title: "Hamming Distance",
    difficulty: "Easy",
    category: "Bit Manipulation",
    description: {
      text: "Return the number of positions at which the corresponding bits are different.",
      notes: [],
    },
    examples: [{ input: "x=1, y=4", output: "2" }],
    constraints: ["0 ≤ x,y ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function hammingDistance(x, y) {}`,
      python: `def hammingDistance(x, y): pass`,
      java: `class Solution { public static int hammingDistance(int x,int y){ return 0;} }`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "excel-sheet-column-number": {
    id: "excel-sheet-column-number",
    title: "Excel Sheet Column Number",
    difficulty: "Easy",
    category: "Math • String",
    description: {
      text: "Convert Excel column title to number.",
      notes: [],
    },
    examples: [{ input: 'columnTitle="AB"', output: "28" }],
    constraints: ["1 ≤ columnTitle.length ≤ 7"],
    starterCode: {
      javascript: `function titleToNumber(s) {}`,
      python: `def titleToNumber(s): pass`,
      java: `class Solution { public static int titleToNumber(String s){ return 0;} }`,
    },
    expectedOutput: {
      javascript: "28",
      python: "28",
      java: "28",
    },
  },

  "happy-number": {
    id: "happy-number",
    title: "Happy Number",
    difficulty: "Easy",
    category: "Math • Hash Set",
    description: {
      text: "Return true if n is a happy number.",
      notes: [],
    },
    examples: [{ input: "n=19", output: "true" }],
    constraints: ["1 ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isHappy(n) {}`,
      python: `def isHappy(n): pass`,
      java: `class Solution { public static boolean isHappy(int n){ return false;} }`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Return true if t is an anagram of s.",
      notes: [],
    },
    examples: [{ input: 's="anagram", t="nagaram"', output: "true" }],
    constraints: ["1 ≤ s.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function isAnagram(s, t) {}`,
      python: `def isAnagram(s, t): pass`,
      java: `class Solution { public static boolean isAnagram(String s,String t){ return false;} }`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  "min-stack": {
    id: "min-stack",
    title: "Min Stack",
    difficulty: "Easy",
    category: "Stack",
    description: {
      text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
      notes: [],
    },
    examples: [{ input: "push(-2), push(0), push(-3)", output: "-3" }],
    constraints: [],
    starterCode: {
      javascript: `class MinStack {}`,
      python: `class MinStack: pass`,
      java: `class MinStack {}`,
    },
    expectedOutput: {
      javascript: "-3",
      python: "-3",
      java: "-3",
    },
  },

  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: {
      text: "Return true if there is a cycle in the linked list.",
      notes: [],
    },
    examples: [{ input: "head=[3,2,0,-4], pos=1", output: "true" }],
    constraints: [],
    starterCode: {
      javascript: `function hasCycle(head) {}`,
      python: `def hasCycle(head): pass`,
      java: `class Solution { public static boolean hasCycle(ListNode head){ return false;} }`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  "add-two-numbers": {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List • Math",
    description: {
      text: "Add two numbers represented as linked lists.",
      notes: [],
    },
    examples: [{ input: "l1=[2,4,3], l2=[5,6,4]", output: "[7,0,8]" }],
    constraints: [],
    starterCode: {
      javascript: `function addTwoNumbers(l1, l2) {}`,
      python: `def addTwoNumbers(l1, l2): pass`,
      java: `class Solution { public static ListNode addTwoNumbers(ListNode l1,ListNode l2){ return null;} }`,
    },
    expectedOutput: {
      javascript: "[7,0,8]",
      python: "[7, 0, 8]",
      java: "[7, 0, 8]",
    },
  },

  "three-sum": {
    id: "three-sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Find all unique triplets that sum to zero.",
      notes: [],
    },
    examples: [
      { input: "nums=[-1,0,1,2,-1,-4]", output: "[[-1,-1,1],[-1,0,1]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000"],
    starterCode: {
      javascript: `function threeSum(nums) {}`,
      python: `def threeSum(nums): pass`,
      java: `class Solution { public static List<List<Integer>> threeSum(int[] nums){ return null;} }`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,1],[-1,0,1]]",
      python: "[[-1, -1, 1], [-1, 0, 1]]",
      java: "[[-1, -1, 1], [-1, 0, 1]]",
    },
  },

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Matrix",
    description: {
      text: "If an element is 0, set its entire row and column to 0.",
      notes: ["Do it in-place."],
    },
    examples: [
      {
        input: "matrix=[[1,1,1],[1,0,1],[1,1,1]]",
        output: "[[1,0,1],[0,0,0],[1,0,1]]",
      },
    ],
    constraints: [],
    starterCode: {
      javascript: `function setZeroes(matrix) {}`,
      python: `def setZeroes(matrix): pass`,
      java: `class Solution { public static void setZeroes(int[][] matrix){} }`,
    },
    expectedOutput: {
      javascript: "[[1,0,1],[0,0,0],[1,0,1]]",
      python: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
      java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Return an array answer such that answer[i] is product of all elements except nums[i].",
      notes: ["Do it without division."],
    },
    examples: [{ input: "nums=[1,2,3,4]", output: "[24,12,8,6]" }],
    constraints: ["2 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {}`,
      python: `def productExceptSelf(nums): pass`,
      java: `class Solution { public static int[] productExceptSelf(int[] nums){ return new int[0];} }`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]",
      python: "[24, 12, 8, 6]",
      java: "[24, 12, 8, 6]",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "2" },
      { input: "n = 3", output: "3" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {\n  // Write your solution here\n}`,
      python: `def climbStairs(n):\n    pass`,
      java: `class Solution {\n    public static int climbStairs(int n) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2\n3",
      python: "2\n3",
      java: "2\n3",
    },
  },

  "longest-common-prefix": {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "String",
    description: {
      text: "Write a function to find the longest common prefix string amongst an array of strings.",
      notes: ["If there is no common prefix, return an empty string."],
    },
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""' },
    ],
    constraints: ["1 ≤ strs.length ≤ 200"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {\n  // Write your solution here\n}`,
      python: `def longestCommonPrefix(strs):\n    pass`,
      java: `class Solution {\n    public static String longestCommonPrefix(String[] strs) {\n        return "";\n    }\n}`,
    },
    expectedOutput: {
      javascript: "fl\n",
      python: "fl\n",
      java: "fl\n",
    },
  },

  "implement-queue-using-stacks": {
    id: "implement-queue-using-stacks",
    title: "Implement Queue using Stacks",
    difficulty: "Medium",
    category: "Stack • Design",
    description: {
      text: "Implement a queue using two stacks. The implemented queue should support all standard queue operations.",
      notes: [],
    },
    examples: [{ input: "enqueue(1), enqueue(2), dequeue()", output: "1" }],
    constraints: ["Operations ≤ 10⁴"],
    starterCode: {
      javascript: `class MyQueue {\n  constructor() {}\n}`,
      python: `class MyQueue:\n    def __init__(self):\n        pass`,
      java: `class MyQueue {\n    public MyQueue() {}\n}`,
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
    },
  },

  "find-peak-element": {
    id: "find-peak-element",
    title: "Find Peak Element",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "A peak element is an element that is strictly greater than its neighbors. Return the index of any peak element.",
      notes: ["The solution must run in O(log n) time."],
    },
    examples: [{ input: "nums = [1,2,3,1]", output: "2" }],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function findPeakElement(nums) {\n  // Write your solution here\n}`,
      python: `def findPeakElement(nums):\n    pass`,
      java: `class Solution {\n    public static int findPeakElement(int[] nums) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "reverse-words-in-a-string": {
    id: "reverse-words-in-a-string",
    title: "Reverse Words in a String",
    difficulty: "Medium",
    category: "String",
    description: {
      text: "Given an input string s, reverse the order of the words.",
      notes: ["A word is defined as a sequence of non-space characters."],
    },
    examples: [{ input: 's = "the sky is blue"', output: '"blue is sky the"' }],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function reverseWords(s) {\n  // Write your solution here\n}`,
      python: `def reverseWords(s):\n    pass`,
      java: `class Solution {\n    public static String reverseWords(String s) {\n        return "";\n    }\n}`,
    },
    expectedOutput: {
      javascript: "blue is sky the",
      python: "blue is sky the",
      java: "blue is sky the",
    },
  },

  "detect-cycle-in-linked-list": {
    id: "detect-cycle-in-linked-list",
    title: "Detect Cycle in Linked List",
    difficulty: "Medium",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
      notes: [],
    },
    examples: [
      { input: "head = [3,2,0,-4] (cycle at index 1)", output: "true" },
    ],
    constraints: ["The number of nodes ≤ 10⁴"],
    starterCode: {
      javascript: `function hasCycle(head) {\n  // Write your solution here\n}`,
      python: `def hasCycle(head):\n    pass`,
      java: `class Solution {\n    public static boolean hasCycle(ListNode head) {\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  "lru-cache": {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Hard",
    category: "Design • Hash Table",
    description: {
      text: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      notes: ["Implement get and put in O(1) average time complexity."],
    },
    examples: [
      { input: "LRUCache(2), put(1,1), put(2,2), get(1)", output: "1" },
    ],
    constraints: ["1 ≤ capacity ≤ 3000"],
    starterCode: {
      javascript: `class LRUCache {\n  constructor(capacity) {}\n}`,
      python: `class LRUCache:\n    def __init__(self, capacity):\n        pass`,
      java: `class LRUCache {\n    public LRUCache(int capacity) {}\n}`,
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
    },
  },

  "count-vowels": {
    id: "count-vowels",
    title: "Count Vowels",
    difficulty: "Easy",
    category: "String",
    description: {
      text: "Given a string s, return the number of vowels (a, e, i, o, u) present in the string.",
      notes: ["The string may contain uppercase and lowercase letters."],
    },
    examples: [
      { input: 's = "hello"', output: "2" },
      { input: 's = "rhythm"', output: "0" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵"],
    starterCode: {
      javascript: `function countVowels(s) {\n  // Write your solution here\n}`,
      python: `def countVowels(s):\n    pass`,
      java: `class Solution {\n    public static int countVowels(String s) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2\n0",
      python: "2\n0",
      java: "2\n0",
    },
  },

  "check-balanced-parentheses": {
    id: "check-balanced-parentheses",
    title: "Check Balanced Parentheses",
    difficulty: "Medium",
    category: "Stack • String",
    description: {
      text: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if brackets are closed in the correct order.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function isValid(s) {\n  // Write your solution here\n}`,
      python: `def isValid(s):\n    pass`,
      java: `class Solution {\n    public static boolean isValid(String s) {\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "merge-two-sorted-arrays": {
    id: "merge-two-sorted-arrays",
    title: "Merge Two Sorted Arrays",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given two sorted arrays nums1 and nums2, merge them into a single sorted array.",
      notes: [],
    },
    examples: [
      { input: "nums1 = [1,3,5], nums2 = [2,4,6]", output: "[1,2,3,4,5,6]" },
    ],
    constraints: ["1 ≤ nums1.length, nums2.length ≤ 10⁴"],
    starterCode: {
      javascript: `function mergeSortedArrays(nums1, nums2) {\n  // Write your solution here\n}`,
      python: `def mergeSortedArrays(nums1, nums2):\n    pass`,
      java: `import java.util.*;\nclass Solution {\n    public static int[] mergeSortedArrays(int[] nums1, int[] nums2) {\n        return new int[0];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,4,5,6]",
      python: "[1, 2, 3, 4, 5, 6]",
      java: "[1, 2, 3, 4, 5, 6]",
    },
  },

  "implement-stack": {
    id: "implement-stack",
    title: "Implement Stack",
    difficulty: "Easy",
    category: "Stack • Design",
    description: {
      text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
      notes: ["All operations must run in O(1) time."],
    },
    examples: [{ input: "push(1), push(2), top()", output: "2" }],
    constraints: ["Operations ≤ 10⁴"],
    starterCode: {
      javascript: `class MinStack {\n  constructor() {}\n}`,
      python: `class MinStack:\n    def __init__(self):\n        pass`,
      java: `class MinStack {\n    public MinStack() {}\n}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },
  "longest-substring-without-repeating-characters": {
  id: "longest-substring-without-repeating-characters",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",
  description: {
    text: "Given a string s, find the length of the longest substring without repeating characters.",
    notes: [
      "Use Sliding Window technique.",
      "Use a Set or Map to track characters inside the window.",
      "Expand right pointer, shrink left pointer when duplicate appears.",
      "Time Complexity: O(n)",
      "Space Complexity: O(min(n, charset))"
    ],
  },
  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation: '"abc" is the longest substring without repeating characters.'
    },
    {
      input: 's = "bbbbb"',
      output: "1",
      explanation: 'Only "b" is valid.'
    },
    {
      input: 's = "pwwkew"',
      output: "3",
      explanation: '"wke" is the answer.'
    }
  ]
},
"coin-change": {
  id: "coin-change",
  title: "Coin Change",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: {
    text: "Given an integer array coins representing different denominations and an integer amount, return the fewest number of coins needed to make up that amount. If it is not possible, return -1.",
    notes: [
      "Use Bottom-Up Dynamic Programming.",
      "Create a dp array of size amount + 1.",
      "dp[i] represents minimum coins needed for amount i.",
      "Initialize dp[0] = 0 and others as Infinity.",
      "Time Complexity: O(amount × number_of_coins)",
      "Space Complexity: O(amount)"
    ],
  },
  examples: [
    {
      input: "coins = [1,2,5], amount = 11",
      output: "3",
      explanation: "11 = 5 + 5 + 1"
    },
    {
      input: "coins = [2], amount = 3",
      output: "-1",
      explanation: "It is not possible to form amount 3."
    },
    {
      input: "coins = [1], amount = 0",
      output: "0",
      explanation: "No coins needed."
    }
  ]
},
"trapping-rain-water": {
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  difficulty: "Hard",
  category: "Two Pointers • Stack",
  description: {
    text: "Given n non-negative integers representing elevation map where width of each bar is 1, compute how much water it can trap after raining.",
    notes: [
      "Use Two Pointers approach.",
      "Maintain leftMax and rightMax.",
      "Water trapped at index = min(leftMax, rightMax) - height[i].",
      "Alternative approach: Monotonic Stack.",
      "Time Complexity: O(n)",
      "Space Complexity: O(1) for two-pointer solution."
    ],
  },
  examples: [
    {
      input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
      output: "6",
      explanation: "Total trapped water is 6 units."
    },
    {
      input: "height = [4,2,0,3,2,5]",
      output: "9",
      explanation: "Total trapped water is 9 units."
    }
  ]
},
"median-of-two-sorted-arrays": {
  id: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Binary Search",
  description: {
    text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    notes: [
      "Use Binary Search on the smaller array.",
      "Partition both arrays such that left half contains half of total elements.",
      "Ensure max(left1, left2) <= min(right1, right2).",
      "Time Complexity: O(log(min(m,n)))",
      "Space Complexity: O(1)"
    ],
  },
  examples: [
    {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.0",
      explanation: "Merged array = [1,2,3], median = 2."
    },
    {
      input: "nums1 = [1,2], nums2 = [3,4]",
      output: "2.5",
      explanation: "Merged = [1,2,3,4], median = (2+3)/2 = 2.5"
    }
  ]
},
"container-with-most-water": {
  id: "container-with-most-water",
  title: "Container With Most Water",
  difficulty: "Medium",
  category: "Array • Two Pointers",
  description: {
    text: "Given n non-negative integers height[i], find two lines that together with the x-axis form a container that holds the most water.",
    notes: [
      "Use Two Pointer approach.",
      "Start left at 0 and right at n-1.",
      "Area = min(height[left], height[right]) * (right - left).",
      "Move the pointer with smaller height.",
      "Time Complexity: O(n)",
      "Space Complexity: O(1)"
    ],
  },
  examples: [
    {
      input: "height = [1,8,6,2,5,4,8,3,7]",
      output: "49",
      explanation: "Use height 8 and 7 with width 7 → 7 * 7 = 49."
    },
    {
      input: "height = [1,1]",
      output: "1",
      explanation: "Only one possible container."
    }
  ]
},
"three-sum": {
  id: "three-sum",
  title: "3Sum",
  difficulty: "Medium",
  category: "Array • Two Pointers",
  description: {
    text: "Return all unique triplets such that a + b + c = 0.",
    notes: [
      "Sort the array first.",
      "Fix one element and use two pointers.",
      "Skip duplicates to avoid repeated triplets.",
      "Time Complexity: O(n^2)",
      "Space Complexity: O(1) (excluding output)"
    ],
  },
  examples: [
    {
      input: "nums = [-1,0,1,2,-1,-4]",
      output: "[[-1,-1,2],[-1,0,1]]"
    },
    {
      input: "nums = [0,0,0]",
      output: "[[0,0,0]]"
    }
  ]
},
"group-anagrams": {
  id: "group-anagrams",
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "Hash Table • String",
  description: {
    text: "Group strings that are anagrams of each other.",
    notes: [
      "Use a hashmap.",
      "Sort each string to form key OR use character frequency count.",
      "Push words with same key into same list.",
      "Time Complexity: O(n * k log k)",
      "Space Complexity: O(nk)"
    ],
  },
  examples: [
    {
      input: '["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat"]]'
    },
    {
      input: '[""]',
      output: '[[""]]'
    }
  ]
},
"merge-k-sorted-lists": {
  id: "merge-k-sorted-lists",
  title: "Merge k Sorted Lists",
  difficulty: "Hard",
  category: "Heap • Linked List",
  description: {
    text: "Merge k sorted linked lists into one sorted linked list.",
    notes: [
      "Use Min Heap storing head of each list.",
      "Alternatively use Divide and Conquer.",
      "Time Complexity: O(N log k)",
      "Space Complexity: O(k)"
    ],
  },
  examples: [
    {
      input: "lists = [[1,4,5],[1,3,4],[2,6]]",
      output: "[1,1,2,3,4,4,5,6]"
    }
  ]
},
"regular-expression-matching": {
  id: "regular-expression-matching",
  title: "Regular Expression Matching",
  difficulty: "Hard",
  category: "Dynamic Programming • String",
  description: {
    text: "Implement regex matching with '.' and '*'.",
    notes: [
      "Use 2D DP table.",
      "dp[i][j] means first i chars match first j chars.",
      "'*' means zero or more of previous char.",
      "Time Complexity: O(mn)",
      "Space Complexity: O(mn)"
    ],
  },
  examples: [
    {
      input: 's = "aa", p = "a*"',
      output: "true"
    }
  ]
},
"search-in-rotated-sorted-array": {
  id: "search-in-rotated-sorted-array",
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Binary Search",
  description: {
    text: "Search target in rotated sorted array in O(log n).",
    notes: [
      "Modified Binary Search.",
      "One half is always sorted.",
      "Check if target lies inside sorted half.",
      "Time Complexity: O(log n)",
      "Space Complexity: O(1)"
    ],
  },
  examples: [
    {
      input: "nums = [4,5,6,7,0,1,2], target = 0",
      output: "4"
    },
    {
      input: "nums = [1], target = 0",
      output: "-1"
    }
  ]
},
"kth-largest-element-in-array": {
  id: "kth-largest-element-in-array",
  title: "Kth Largest Element in an Array",
  difficulty: "Medium",
  category: "Heap • Quickselect",
  description: {
    text: "Find the kth largest element in an unsorted array.",
    notes: [
      "Use Min Heap of size k OR Quickselect.",
      "Quickselect average time O(n).",
      "Heap solution O(n log k).",
      "Space Complexity: O(k) for heap."
    ],
  },
  examples: [
    {
      input: "nums = [3,2,1,5,6,4], k = 2",
      output: "5"
    },
    {
      input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
      output: "4"
    }
  ]
},
"n-queens": {
  id: "n-queens",
  title: "N-Queens",
  difficulty: "Hard",
  category: "Backtracking",
  description: {
    text: "Place n queens so that no two attack each other.",
    notes: [
      "Use Backtracking.",
      "Track columns, diagonals, anti-diagonals.",
      "Time Complexity: O(n!)",
      "Space Complexity: O(n)"
    ],
  },
  examples: [
    {
      input: "n = 4",
      output: '[[".Q..","...Q","Q...","..Q."]]'
    }
  ]
},
"word-ladder": {
  id: "word-ladder",
  title: "Word Ladder",
  difficulty: "Hard",
  category: "Graph • BFS",
  description: {
    text: "Find shortest transformation sequence from beginWord to endWord.",
    notes: [
      "Use BFS for shortest path.",
      "Generate neighbors by changing one character.",
      "Use Set for fast lookup.",
      "Time Complexity: O(N * L * 26)",
      "Space Complexity: O(N)"
    ],
  },
  examples: [
    {
      input: 'beginWord = "hit", endWord = "cog"',
      output: "5"
    }
  ]
},
"sliding-window-maximum": {
  id: "sliding-window-maximum",
  title: "Sliding Window Maximum",
  difficulty: "Hard",
  category: "Deque",
  description: {
    text: "Return maximum value in each sliding window of size k.",
    notes: [
      "Use Monotonic Deque.",
      "Maintain decreasing order.",
      "Front always holds max.",
      "Time Complexity: O(n)",
      "Space Complexity: O(k)"
    ],
  },
  examples: [
    {
      input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
      output: "[3,3,5,5,6,7]"
    }
  ]
},
"minimum-window-substring": {
  id: "minimum-window-substring",
  title: "Minimum Window Substring",
  difficulty: "Hard",
  category: "Sliding Window • Hash Map",
  description: {
    text: "Find smallest substring of s containing all characters of t.",
    notes: [
      "Use Sliding Window.",
      "Maintain frequency maps.",
      "Expand right, shrink left.",
      "Time Complexity: O(n)",
      "Space Complexity: O(1)"
    ],
  },
  examples: [
    {
      input: 's = "ADOBECODEBANC", t = "ABC"',
      output: '"BANC"'
    }
  ]
},
"largest-rectangle-in-histogram": {
  id: "largest-rectangle-in-histogram",
  title: "Largest Rectangle in Histogram",
  difficulty: "Hard",
  category: "Stack",
  description: {
    text: "Find largest rectangular area in histogram.",
    notes: [
      "Use Monotonic Stack.",
      "Calculate area when height decreases.",
      "Time Complexity: O(n)",
      "Space Complexity: O(n)"
    ],
  },
  examples: [
    {
      input: "heights = [2,1,5,6,2,3]",
      output: "10"
    }
  ]
},
"edit-distance": {
  id: "edit-distance",
  title: "Edit Distance",
  difficulty: "Hard",
  category: "Dynamic Programming",
  description: {
    text: "Return minimum operations to convert word1 to word2.",
    notes: [
      "Operations: Insert, Delete, Replace.",
      "Use 2D DP.",
      "Time Complexity: O(mn)",
      "Space Complexity: O(mn)"
    ],
  },
  examples: [
    {
      input: 'word1 = "horse", word2 = "ros"',
      output: "3"
    }
  ]
},
"serialize-and-deserialize-binary-tree": {
  id: "serialize-and-deserialize-binary-tree",
  title: "Serialize and Deserialize Binary Tree",
  difficulty: "Hard",
  category: "Tree • Design",
  description: {
    text: "Design an algorithm to serialize and deserialize a binary tree.",
    notes: [
      "Use BFS or DFS.",
      "Store null nodes explicitly.",
      "Rebuild tree during deserialization.",
      "Time Complexity: O(n)",
      "Space Complexity: O(n)"
    ],
  },
  examples: [
    {
      input: "root = [1,2,3,null,null,4,5]",
      output: "[1,2,3,null,null,4,5]"
    }
  ]
},
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
