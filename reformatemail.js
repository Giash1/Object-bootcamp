function newEmailList(usr) {
    let emailList = [];
    for (const i of usr) {
      const temp1 = i["name"].last;
      const temp2 = i["name"].first;
      const tmp3 = temp1 + "." + temp2 + "@evilcorp." + i["nat"];
      emailList.push(tmp3);
    }
    return emailList;
  }
  
  function main3() {
    console.log("New email format: ");
    let res = newEmailList("users");
    console.log(res);
  }
  main3();
