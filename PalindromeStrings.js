/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.
*/

function isPalindrome(line) {
    let palindrom = String(line).split('').reverse().join('');
    let isNeedSave = false;
    if (palindrom === String(line)) {
        isNeedSave = true;
    }
    return isNeedSave;
  }