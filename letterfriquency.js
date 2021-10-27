function letterFrequency(string){
  const letters = {};
  for(let char of string){
      if(letters[char] === undefined){
          letters[char] = 1; 
      }
      else{
          letters[char]++;
      }
  }
  return letters;
}
function main(){    
  let text = "kalle";
  
  let result = letterFrequency("kalle");
  /*letterFrequency("aaaa") // => {"a": 4}
  letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }*/
  console.log(result);
}
main();
 
  
  //letterFrequency("kallekalle");