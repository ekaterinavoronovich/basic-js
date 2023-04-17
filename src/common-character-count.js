const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount( s1, s2 ) {
//   let counter=0
//   let stringNo2=s2
//   for (const item of s1) {
//     console.log(item);
//    console.log(stringNo2.includes(item));
//       if (stringNo2.includes(item)){

//         ++counter
        

//       }
//     }   
      
//   return counter;

// }


module.exports = {
  getCommonCharacterCount
};
