let inputString = process.argv[2];

const countConsonants = function(inputString){
  let consonants = "BCDFGHJKLMNPQRSTVWZbcdfghjklmnpqrstvwxyz"
  let consonantCount = 0;
  for(stringIndex = 0; stringIndex<inputString.length; stringIndex++ ){
    for(consonantIndex = 0; consonantIndex < consonants.length; consonantIndex++){
      if(inputString[stringIndex] == consonants[consonantIndex]){
        consonantCount++;
      }
    }
  }
  return consonantCount;
}

console.log(countConsonants(inputString));
