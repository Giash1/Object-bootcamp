function filterByCountry(users, landCode){
    const usersValidLandCode = [];
    for(let user of users){
        if(user.nat === landCode){
            usersValidLandCode.push(user);
        }
    }
    return usersValidLandCode;
}
let result= filterByCountry(users, "FI");
console.log(result);

// or second method:
/*function filterByCountry(usr, ccode) {
    const list = [];
    for (const i of usr) {
      if (i["nat"] == ccode) {
        list.push(i);
      }
    }
    return list;
  }
  
  function main() {
    console.log("Filter by country: ");
    let usr = users;
    let ccode = "FI";
    let res = filterByCountry(usr, ccode);
    console.log(res);
  }
  main();
  */
  

/*function filterByGender(users, gender){
    const usersValidGender = [];
    for(let user of users){
        if(gender === "Male"){
            if(user.name.title === "Mr" || user.name.title === "Monsieur"){
                usersValidGender.push(user);
            }
        }
        else if(gender === "Female"){
            if(user.name.title !== "Mr" && user.name.title !== "Monsieur"){
                usersValidGender.push(user);
            }
        }
        else{
            return null;
        }
    }
    return usersValidGender;
}
//function main(){
    let result1=function filterByGender(users,);
    console.log(result1);
//}
//main();
*/


function filterByGender(usr, gender) {
    const list = [];
    for (const i of usr) {
      for (const g in gender)
        if (i["name"].title == gender[g]) {
          list.push(i);
        }
    }
    return list;
  }
  function main1() {
    console.log("Filter by gender: ");
    let gender = ["Mrs", "Ms", "Miss"];
    let usr = users;
    let res = filterByGender(usr, gender);
    console.log(res);
  }
  main1();

function listEmails(users){
    const userEmails = [];
    for(let user of users){
        userEmails.push(user.email);
    }
    return userEmails;
}

let result2=listEmails(users);
console.log(result2);


function printEmails(emails){

    for(let i = 0; i < emails.length; i++){
        console.log(i+1 + " " + emails[i]);
    }
}
function reformateEmails(users){
    for(let user of users){
        user.email = user.name.last + "." + user.name.first + "@evilcorp." + findDomain(user.nat);    
    }
}
function findDomain(nat){
    switch(nat){
        case "GB":
            return "uk";
        case "ES":
            return "ee";
        default:
            return nat.toLowerCase();
    }
}
/*
function main(){     
    reformateEmails(users);
    let emails = listEmails(users);
    console.log(printEmails(emails));
}
main();
*/