// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //My Solution
  // if (str.length <= 1) return str;

  // let word = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   word += str[i];
  // }
  // return word;

  //Solution 1
  // return str.split("").reverse().join("");

  //Solution 2
  // let reversed = '';
  // for (let char of str) {
  //   //order matters as if char the current char comes first instead of reversed + char <= that will be the same string
  //   reversed = char + reversed;
  // }
  // return reversed;

  //Solution 3
  // return str.split("").reduce((reversed, character) => {
  //   return character + reversed
  // }, "")

  debugger;
  //node inspect index.js, c, repl
  return str.split('').reduce((rev, char) => char + rev, '');

}

reverse('asdas');

module.exports = reverse;
