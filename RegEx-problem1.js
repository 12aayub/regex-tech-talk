Problem: Grab only words that start with an uppercase letter


function ShowUppercase(exampleText) {
  return exampleText.match(/[A-Z]\w+/g)
}
ShowUppercase('Hello how are you Bob?');
