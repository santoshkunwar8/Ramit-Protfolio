const jwt = require("jsonwebtoken")


class EmailHtmlService{



    getEmailConfirmationHash(email){

        const token =  jwt.sign({ email }, process.env.EMAIL_CONFIRMATOIN_HASH, { expiresIn: 60 * 10 })
        return token;
    }

    getResetPasswordHtml=(email)=>{
        const confirmationHash= this.getEmailConfirmationHash(email);
        return `<div>
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/352850187_808709043911745_566344590095350869_n.jpg?stp=dst-jpg_p403x403&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Rqrey-x9sZ8AX9n27lg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTRKzT-KFPaeoRLfSDMnnD-2bSQylVJ8XczY2N3QVFdkQ&oe=64A91F73" width="200px" style="border-radius:4px"/> <br/>
         <h1 style="color:#0e0b3d" > Reset your password  </h1> </br>
          </br> <h4 style="color:#0e0b3d">Click the button below to reset  your password. </h4> <br/> <a style="background:#686de0;height:40px; text-decoration:none;  padding:8px ; cursor:pointer;letter-spacing:1px; border-radius:4px;text-align:center;color:white;" href="${process.env.FRONTEND_URL}/account/resetpassword/${confirmationHash}"> RESET PASSWORD </a> </br> <br> <br>  </div>`
    }

    getAccConfirmationHtml=(email)=>{
        const confirmationHash= this.getEmailConfirmationHash(email);
        return `<div>
          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/352850187_808709043911745_566344590095350869_n.jpg?stp=dst-jpg_p403x403&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Rqrey-x9sZ8AX9n27lg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTRKzT-KFPaeoRLfSDMnnD-2bSQylVJ8XczY2N3QVFdkQ&oe=64A91F73" width="200px" style="border-radius:4px"/> <br/>
           <h1 style="color:#0e0b3d" > Hello CodeWithMama welcomes you  </h1> </br>
           <h3 style="color:#0e0b3d"> You are closer to be the part of CodeWithMama .  </h3> </br> <h4 style="color:#0e0b3d">Click the button below to confirm your email address. </h4> <br/> <a style="background:#686de0;height:40px; text-decoration:none;  padding:8px ; cursor:pointer;letter-spacing:1px; border-radius:4px;text-align:center;color:white;" href="${process.env.FRONTEND_URL}/account/confirmation/${confirmationHash}"> CONFIRM EMAIL </a> </br> <br> <br>  </div>`

    }
    
    
    
    
    }
    module.exports = new  EmailHtmlService()