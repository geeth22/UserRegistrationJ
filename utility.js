var readlineSync = require('readline-sync');
class UserRegistration {
    CheckPattern = () => {
        try{
            let input = /^[A-Z]{1}[a-z]{2,}$/
           // let Lname = /^[A-Z]{1}[a-z]{2,}$/
        var UserName = readlineSync.question('Enter First Name? ');
        const pattern = input.exec(UserName);
        if (pattern) {
            console.log("Valid");
        }
        else {
            console.log("Not Valid");

        }
            }catch(e)
        {
            console.log(e)
        }
    }
}
module.exports = new UserRegistration();
