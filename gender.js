function filterGender(users,gender){


    let result = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.title===gender) {
            result.push(users[i])
        }
    }
    console.log(result)
    return result
}
let male = 'Mr'
let female = 'Ms' 

filterGender(users, male);