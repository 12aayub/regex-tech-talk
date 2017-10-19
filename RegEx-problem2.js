Problem: Remove all the vowels from a string


With Regex...
  function removeVowels(exampleText) {
    return exampleText.replace(/[aeiou]/gi, '')
  };
  removeVowels('Hello how are you Bob?');



Without Regex...
  // function removeVowels(exampleText) {
  //   var vowels = ['a', 'e', 'i', 'o', 'u'];
  //
  //   return exampleText.split('').filter(function(x) {
  //     return vowels.indexOf(x.toLowerCase()) == -1;
  //   }).join('');
  // }
  // removeVowels('Hello how are you Bob?');



Sometimes "y"
  // function removeVowels(exampleText) {
  //   return exampleText.replace(/[aeiou]|y(?![aeiou])/gi, '')
  // };
  // removeVowels('Hey Bob, did you go to the gym?');
