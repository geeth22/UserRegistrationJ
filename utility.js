var readlineSync = require('readline-sync');
class UserRegistration {
    CheckPattern = () => {
        try{
            let input = /^(?=.*[A-Z]).{8,}$/
        var UserName = readlineSync.question('Enter Password ');
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
