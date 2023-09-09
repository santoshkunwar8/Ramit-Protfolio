const EmailService =require("../services/EmailService")
const UserModel = require("../model/UserModel");
const { hashPassword } = require("../services/AuthService");


class AuthController{

    async  sendRestLink(req,res,next){

        const {email} = req.body;
        
        try {
          if(!email){
              throw "invalid email"
          }

            const user = await UserModel.findOne({email});
            if(!user){
                throw "This email is not registered";
            }
            
            await EmailService.sentResetPassword(email);
            res.status(200).json({message:"password rest link sent successfully"});


        } catch (error) {
            console.log(error)
            res.status(500).json({message:error,success:false})
            // next(error.message);
        }
    }
    
    async confirmResetPassword(req,res,next){
        const {token} = req.body;

        try {

            
            
        } catch (error) {
            console.log(error);
            next(error.message);
        }
    }

    async resetPassword(req,res){
      
    const {email:userEmail,password,token} = req.body;
   
    try {
        const user = await UserModel.findOne({userEmail});
        if(!user){
          throw {type:"custom",message:"Authorization failed"};
        }
      const {email   ,invalidLink}  =   await EmailService.verifyEmailConfirmationToken(token);
      if(email){
      const newPassword = await hashPassword(password);
      await UserModel.findOneAndUpdate(
        {
       email: userEmail
      },
      {
        password:newPassword
      } 
      )

      return res.status(200).json({message:"password reset successfully",success:true})



    }else if(invalidLink){
        throw {
          type:"custom",
          message:"Invalid link"
        }
      }else{
        throw {
          type:"custom",
          message:"Link expired"
        }
      }
    } catch (error) {
      console.log(error)
      let errorMessage = "something went wrong";
      let expired = false;
      let invalidLink  = false;
      if(error.type==="custom"){
        errorMessage = error.message
        if(error.message==="Link expired"){
          expired=true;
        }else{
          invalidLink=true
        }
      }
      return res.status(500).json({message:{expired,invalidLink },success:false})
    }
    }
    
    async  CheckIfTokenIsValid(req,res){
      const {token}= req.params;
      if(!token) throw "Invalid token";
      try {
          const data =  await EmailService.verifyConfirmationHash(token);
          return res.status(200).json({message:data,success:true});
        } catch (error) {
          return res.status(500).json({message:error.message,success:false});
      }
    }
  
}
module.exports = new AuthController()
