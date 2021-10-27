
function listEmails(usr) {
    const list = [];
    for (const i of usr) {
      list.push(i["email"]);
    }
    return list;
  }
  
  /*function main2() {
    console.log("List of email: ");
    let res = listEmails(users);
    console.log(res);
  }
  main2();
  */
 /* function listEmails(users){
    const userEmails = [];
    for(let user of users){
        userEmails.push(user.email);
    }
    return userEmails;
}
*/
let result=listEmails("users");
console.log(result);