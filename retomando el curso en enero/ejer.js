const words = ['a', 'aa', 'aba', 'ala', 'sal', 'por'];
 
const searchWords = (txtSearch) => {
  return words.filter(letras => letras.includes(txtSearch));
};
 
console.log(searchWords('a'));  // ['a', 'aa', 'aba', 'ala', 'sal'];
console.log(searchWords('aa')); // ['aa','aba', 'ala'];
console.log(searchWords('z'));  // [];
console.log(searchWords('sa')); // ['sal'];
console.log(searchWords('or')); // ['por'];