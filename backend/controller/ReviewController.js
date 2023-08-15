
const ReviewModel = require('../model/ReviewModel')

class ReviewController{
    static async createReview(req,res){
        const {user} = req.body;

        try {

            if(!user)throw "invalid credentails";
                const review = await ReviewModel.create(req.body);
                res.status(200).json({message:review,success:true})
        } catch (error) {
                console.log(error)
                res.status(500).json({message:error.message,success:false})
        }
    }
        static async getReview(req,res){
    
        try {

           
                const review = await ReviewModel.find({});
                res.status(200).json({message:review,success:true})
        } catch (error) {
                console.log(error)
                res.status(500).json({message:error.message,success:false})
        }
    }
}
module.exports = ReviewController
