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
}
module.exports = UserController;
