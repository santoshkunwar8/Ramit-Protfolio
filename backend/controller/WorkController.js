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
        
     const user = await WorkModel.find({...req.query}).populate("tools")
    .populate({
        path: "comments",
        populate:[{
         path:"user",
         model:"User"
        },
    ],
        options: { strictPopulate: false } // Allow populating fields not in the schema
    });
     res.status(200).json({message:user ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:false})
     }  
    }



   static async addRating(req,res){
    const { work ,user , rating } = req.body;



    try {
      

            const Project = await WorkModel.findById(work)
            const hasRated = Project.ratings.find((item) => item.user == user)
            if (!hasRated) {
                const savedProduct = await WorkModel.findOneAndUpdate(
                    { _id: work },
                    { $push: { ratings: { user, rating } } },
                    { returnOriginal: false ,new:true}
                )
                return res.status(200).send({ message: savedProduct, success: true })
            } else {


                // changing the previous rating  whose ratings userId is  user id is userId
                const saved = await WorkModel.findOneAndUpdate(
                    { _id: work },
                    { $set: { "ratings.$[element].rating": rating } },
                    {
                        arrayFilters: [
                            { "element.user": user }
                        ],
                        returnOriginal: false,
                        new:true
                    }
                )
                res.status(200).send({ message: saved, success: true })
            }




    } catch (error) {
        console.log(error);
        return res.status(500).json({message:error.message,success:false})   
    }


   }


}
module.exports = WorkController;
