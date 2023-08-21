const UserModel = require("../model/UserModel")

class UserController{


    static async createUser(req,res ){
     try {
        
     const user =  await    UserModel.create(req.body);
     res.status(200).json({message:user ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:false})
     }  
    }


    static async getClients(req,res ){
     try {
        
     const user =  await    UserModel.find({});
     res.status(200).json({message:user ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:falses})
     }  
    }


    static async becomeClient(req,res){
        const {userId} = req.params;
        try {
              const   updatedUser =   await UserModel.findByIdAndUpdate(userId,{
                    isClient:true,
                },{
                    new:true,
                    returnDocument:true,
                    returnOriginal:false,
                })
                res.status(200).json({message:updatedUser,success:true})
        } catch (error) {
                res.status(500).json({message:error,success:false})
                
        }
    }

   static async login(req,res){
    const {email,password:loginPw} = req.body;
    try {

        const user =await UserModel.findOne({email})

        if(!user){
                throw "This email is not register";
        }
        const { password , ...other} =user._doc;

        if(loginPw !== password){
            throw "Invalid credentails"
        }
    

        res.status(200).json({message:other,success:true})

        




    } catch (error) {
        // console.log(error)
            return res.status(500).json({message:error})

    }
   }
}
module.exports = UserController;
