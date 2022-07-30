/* A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
 This includes capital letters, punctuation, and word dividers. */
const isPalindrome = line => line===line.split("").reverse().join("");