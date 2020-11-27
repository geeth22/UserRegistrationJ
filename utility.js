var readlineSync = require('readline-sync');
class UserRegistration {
    CheckPattern = () => {
        try{
            let input = /^([a-zA-Z0-9_.$*&!+-]+)@([a-z0-9]+).([a-z.]{2,7})$/
        var UserName = readlineSync.question('Enter Last Name ');
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
