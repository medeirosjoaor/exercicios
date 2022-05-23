function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));
