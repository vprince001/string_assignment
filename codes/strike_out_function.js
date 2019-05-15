let inputString = process.argv[2];
let strikingChar = process.argv[3];

const strikeOut = function(inputString){
  let outputString = "";
  let replacingChar = "";
  
  for(index=0; index<inputString.length; index++){
    if(inputString[index] != strikingChar){
      replacingChar = inputString[index];
    }
    outputString = outputString + replacingChar;
    replacingChar = "-";
  }
  return outputString;
}

console.log(strikeOut(inputString));
