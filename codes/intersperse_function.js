let inputString = process.argv[2];

const intersperse = function(inputString){
  let outputString = "";
  let delimiter = "";
  for(index=0; index<inputString.length; index++){
    outputString = outputString + delimiter + inputString[index];
    delimiter = ",";
  }
  return outputString;
}

console.log(intersperse(inputString));
