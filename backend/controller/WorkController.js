const WorkModel = require("../model/WorkModel")

class WorkController{
    static async createWok(req,res ){
     try {
        
        let user =  await    WorkModel.create(req.body);
        user = await user.populate(["tools","comments"])
        res.status(200).json({message:user ,success:true})

     } catch (error) {

        console.log(error);
        res.status(500).json({message:error.message,success:false})

     }  
    }
        static async getWork(req,res ){
     try {
        
     const user =  await    WorkModel.find({}).populate(["tools","comments"])
     res.status(200).json({message:user ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:false})
     }  
    }
}
module.exports = WorkController;
