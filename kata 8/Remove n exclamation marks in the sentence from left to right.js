/* Remove n exclamation marks in the sentence from left to right. n is positive integer. */
const remove = (s,n) => s.replace(/\!/g, _ => n && n-- ? '' : _);
