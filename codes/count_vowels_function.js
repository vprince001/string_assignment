let inputString = process.argv[2];

const countVowels = function(inputString){
  let vowels = "AEIOUaeiou";
  let vowelCount = 0;
  for(stringIndex = 0; stringIndex<inputString.length; stringIndex++ ){
    for(vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
      if(inputString[stringIndex] == vowels[vowelIndex]){
        vowelCount++;
      }
    }
  }
  return vowelCount;
}

console.log(countVowels(inputString));
