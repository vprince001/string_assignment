let inputString = process.argv[2];

const reverse = function(inputString){
  let stringReverse = "";
  let length = inputString.length-1;
  for(let index = length; index>=0; index--){
    stringReverse = stringReverse + inputString[index];
  }
  return stringReverse;
}

console.log(reverse(inputString));
