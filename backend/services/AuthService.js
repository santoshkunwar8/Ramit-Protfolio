const bcrypt = require("bcrypt")
const EmailService = require("./EmailService")
const EmailHtmlService = require("./EmailHtmlService")

class AuthService{
    async hashPassword(password) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(password, salt)
            return hashed
        } catch (error) {
            return error
        }
    }
    async compareHashPassword(password, hashPassword) {
        try {
            const hashed = await bcrypt.compare(password, hashPassword)
            return hashed
        } catch (error) {
            return error
        }

    }
    async generateCodeHash(email,code){
        let hashEmail = `${email}${code}`;

        return EmailHtmlService.getEmailConfirmationHash(hashEmail)
    }

    async generateCode(){




    }

}
module.exports = new AuthService();