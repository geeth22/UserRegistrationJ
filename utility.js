var readlineSync = require('readline-sync');
class UserRegistration {
    CheckPattern = () => {
        try{
            let input = /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,})*$/
        var UserName = readlineSync.question('Enter Email Id ');
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
