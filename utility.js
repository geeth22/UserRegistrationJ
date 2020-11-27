var readlineSync = require('readline-sync');
class UserRegistration {
    CheckPattern = () => {
        try{
            let input = /^[1-9]{2}\s{0,1}[0-9]{10}$/
        var UserName = readlineSync.question('Enter Phone Number ');
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
