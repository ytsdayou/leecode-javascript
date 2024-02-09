# [290. Word Pattern](https://leetcode.com/problems/word-pattern/)

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

**Example 1:**

```c
Input: pattern = "abba", str = "dog cat cat dog"
Output: true
```

**Example 2:**

```c
Input:pattern = "abba", str = "dog cat cat fish"
Output: false
```

**Example 3:**

```c
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
```

**Example 4:**

```c
Input: pattern = "abba", str = "dog dog dog dog"
Output: false

**Constraints:**

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
```