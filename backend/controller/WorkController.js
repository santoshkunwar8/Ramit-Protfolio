const WorkModel = require("../model/WorkModel")

class WorkController{
    static async createWok(req,res ){
     try {
        
     const user =  await    WorkModel.create(req.body);
     res.status(200).json({message:user ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:false})
     }  
    }
        static async getWork(req,res ){
     try {
        
     const user =  await    WorkModel.find({}).populate(["user","comment"])
     res.status(200).json({message:user ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:false})
     }  
    }
}
module.exports = WorkController;
