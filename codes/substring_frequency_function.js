let string = process.argv[2];
let subString = process.argv[3];

const substringFrequency = function(string, subString){
  let matchCount = 0;
  let charMatchCount = 0;
  let wordMatchCount = 0;
  let stringLength = string.length;
  let subStringLength = subString.length;
  let index = 0;
  
  for(let stringIndex = 0; stringIndex < stringLength; stringIndex++){
    if(string[stringIndex] == subString[0]){
      index = stringIndex;
      for(let subStringIndex = 0; subStringIndex<subStringLength; subStringIndex++){
        if(subString[subStringIndex] == string[index]){
          charMatchCount++;
          index++;
        }
      }
      if(charMatchCount == subStringLength){
        wordMatchCount++;
      }
      charMatchCount = 0;
      index = 0;
    }
  }
  return wordMatchCount;
}

console.log(substringFrequency(string,subString));
