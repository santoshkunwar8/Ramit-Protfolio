const { default: mongoose } = require("mongoose")


const reviewSchema =  mongoose.Schema({
    text:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    rating:{
        type:Number,
        default:0
    }
},{timestamps:true})



module.exports = mongoose.model("Review",reviewSchema)
