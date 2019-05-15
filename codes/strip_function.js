let inputString = process.argv[2];

const strip = function(inputString){
  let outputString = "";
  let count = 0;
  
  for(index = 0; index < inputString.length; index++){
    if(inputString[index] != " "){
      outputString = outputString + inputString[index];
    }
  }
  return outputString;
}

console.log(strip(inputString));

