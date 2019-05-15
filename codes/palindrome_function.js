let inputString = process.argv[2];

const checkPalindrome = function(inputString){
  let stringReverse = "";
  let length = inputString.length-1;
  let message = "Not a Palindrome";
  for(let index = length; index>=0; index--){
    stringReverse = stringReverse + inputString[index];
  }
  if(inputString == stringReverse){
  message = "Palindrome";
  }
  return message;
}

console.log(checkPalindrome(inputString));
