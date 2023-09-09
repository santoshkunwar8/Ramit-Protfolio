const nodemailer = require("nodemailer")
const EmailHtmlService = require("./EmailHtmlService")
const jwt = require("jsonwebtoken")

class EmailService{
   async sendEmail({subject,text,html,email}){

        let transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:465,
            secure:true,
            auth:{
                pass:process.env.SMTP_PW,
                user:process.env.APP_EMAIL,
            }
        })

        try {

            let info = await transporter.sendMail({
                from:process.env.APP_EMAIL,
                to:email,
                subject,
                text,
                html
            })
            
            console.log(`message sent ${info.messageId}`);
            return info.messageId;

        } catch (error) {
                console.log(error)
                return error.message ;
        }   

    }

    async sentConfirmationEmail(email){
        const emailPayload = {
            text:"Confirm your email",
            subject:"Email confirmation ",
            html:EmailHtmlService.getAccConfirmationHtml(email),
            email
        }
        try {
            const messageId = await this.sendEmail(emailPayload);
            return messageId;
        } catch (error) {
            console.log(error)
            return error.message;
        }
    }

    async sentResetPassword(email){
        const emailPayload = {
            text:"Reset password",
            subject:"Reset password",
            html:EmailHtmlService.getResetPasswordHtml(email),
            email
        }
        try {
            const messageId = await this.sendEmail(emailPayload);
            return messageId;
        } catch (error) {
            console.log(error)
            return error.message;
        }
    }

    async verifyEmailConfirmationToken(token) {

        try {

            const decoded = jwt.verify(token, process.env.EMAIL_CONFIRMATOIN_HASH)


            console.log("the decoded", decoded);

            return { email: decoded?.email, exp: false, invalidLink: false }
        } catch (error) {
            console.log(error.message)
            if (error?.message === "jwt expired") {
                return { email: null, exp: true, invalidLink: false }
            } else {
                return { email: null, exp: false, invalidLink: true }
            }

        }
    }


 

}
module.exports = new  EmailService()

