
const ToolsModel = require('../model/ToolsModel')

class ToolsController{
    static async createTools(req,res){


        try {

    
                const Tools = await ToolsModel.create(req.body);
                res.status(200).json({message:Tools,success:true})
        } catch (error) {
                console.log(error)
                res.status(500).json({message:error.message,success:false})
        }
    }
        static async getTools(req,res){
    
        try {

           
                const tools = await ToolsModel.find({});
                res.status(200).json({message:tools,success:true})
        } catch (error) {
                console.log(error)
                res.status(500).json({message:error.message,success:false})
        }
    }
}
module.exports = ToolsController
