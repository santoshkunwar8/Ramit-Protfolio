const CommentModel = require("../model/CommentModel")
const WorkModel = require("../model/WorkModel")


class CommentController{
    static async createComment(req,res ){
        const {work:workId} = req.body;
        try {
         const comment =  await    CommentModel.create(req.body);
        const work =  await WorkModel.findOneAndUpdate({
             _id:workId
         },{
             $push:{comment:comment._doc._id}
         },{
            new:true,
            returnOriginal:false,
            returnDocument:true,
         });
        


     res.status(200).json({message:work ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:false})
     }  
    }





    static async getComments(req,res ){
        const {workId} = req.params; 
     try {
        
     const comment =  await    CommentModel.find({work:workId});
     res.status(200).json({message:comment ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:falses})
     }  
    }






}
module.exports = CommentController;
