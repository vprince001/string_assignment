let inputString = process.argv[2];

const countDigraphs = function(inputString){
  let digraphs = "";
  let seperator = "";
  let character = "";
  for(let charIndex = 0; charIndex<inputString.length-1; charIndex++){
    character = inputString[charIndex];
    if(inputString[charIndex] == inputString[charIndex+1]){
      character = character + character;
      digraphs += seperator + character;
      character = "";
      seperator = ",";
    }
  }
  return digraphs;
}

console.log(countDigraphs(inputString));
