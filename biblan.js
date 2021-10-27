let library = [
  {
    title: "Election Violence",
    author: "Giash",
      numPages: 129
  },
  {
    title: "Democracy and political parties",
    author: "Giash Bhuiyan",
    numPages: 135
  },
  {
    title: "Democracy and religion",
    author: "Giash B.",
    numPages: 120
  },
  { title:"HARRY POTTER", author:"J.K Rowling", numPage:500 }
]

function search(arr,searchWord) {
    for (let i of arr) {
        if (i["title"] == searchWord) {
            return i;
        }
    }
  return null;
}

//console.log(search(library, "Democracy and religion")); 

function main()
{console.log(search(library, "Democracy and religion"));};
main();

/*function lookForTitle(nyTitle) {

    if (library[2].title == nyTitle) {
      return library[2];
    }

  return null;
}

console.log(lookForTitle( "Democracy and religion"));
/*function search(arr, searchWord) {
  let output = {};
  for(let i = 0; i < arr.length; i++){
    if(arr[i].title === searchWord){
      output = arr[i];
      return output;
    }else{
      output = null;
    }
  }
  return output;
}
let searchWord = "Democracy and religion";
 let arr = library ; 
console.log(arr, searchWord);*/
