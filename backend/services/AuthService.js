const bcrypt = require("bcrypt")
const EmailService = require("./EmailService")
const jwt = require("jsonwebtoken")
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
    getEmailConfirmationHash(email){

        const token =  jwt.sign({ email }, process.env.EMAIL_CONFIRMATOIN_HASH, { expiresIn: 60 * 10 })
        return token;

    }
     generateConfirmationCodeHash(email,code){


        const hashSign = `${email}-${code}`;
        let hash =   this.getEmailConfirmationHash(hashSign)
        return hash ;



    }

    async verifyConfirmationCodeHash(prevHash,code){
        try {
          const {email ,exp,invalidLink} =  await EmailService.verifyEmailConfirmationToken(prevHash)
          let prevCode = email.split("-")[1];

          return prevCode.toString() === code.toString();

            
        } catch (error) {
            console.log("inside verify",error)
            return false;
        }
        

    }

     generateCode(){

        
            const min = 100000; // Minimum 6-digit number (100000)
            const max = 999999; // Maximum 6-digit number (999999)
          
            // Generate a random number between min and max (inclusive)
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          
            return randomNumber;
  



    }

}
module.exports = new AuthService();