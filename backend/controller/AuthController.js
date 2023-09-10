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
      
    const {email:userEmail,newPassword,token} = req.body;
    console.log(token)
   
    try {
        const user = await UserModel.findOne({email:userEmail});
        if(!user){
          throw {type:"custom",message:"Authorization failed"};
        }
      const {email  }  =   await EmailService.verifyEmailConfirmationToken(token);
      if(email){
      
      await UserModel.findOneAndUpdate(
        {
       email: userEmail
      },
      {
        password:newPassword
      } 
      )

      return res.status(200).json({message:"password reset successfully",success:true})



    }
    } catch (error) {
      
      return res.status(500).json({message:error.message,success:false})
    }
    }
    
    async  CheckIfTokenIsValid(req,res){
      const {token}= req.params;
      if(!token) throw "Invalid token";
      try {
          const data =  await EmailService.verifyEmailConfirmationToken(token);
          return res.status(200).json({message:data,success:true});
        } catch (error) {
          return res.status(500).json({message:error.message,success:false});
      }
    }

    async confirmCode(req,res){
      const {hash,code}=req.body;
      try {
       const data =  await EmailService.verifyEmailConfirmationToken(hash);
       console.log(data.email)
      if(data.email){
        

        let prevCode = data.email.split("-")[1];
        let userEmail = data.email.split("-")[0];

        if(prevCode.toString()===code.toString()){

          const user = await UserModel.findOneAndUpdate({email:userEmail},{isVerified:true},{new:true,returnOriginal:false});
          res.status(200).json({message:user,success:true});

       
       }else{
        throw Error("Invalid Code")
       }
       
      }
        
      } catch (error) {
        console.log(error.message)
        res.status(403).json({message:error.message,success:false})
      }
      
    }
  
}
module.exports = new AuthController()
