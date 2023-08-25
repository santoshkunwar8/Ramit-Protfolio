const { default: mongoose } = require("mongoose")


const CommentSchema =  mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    work:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Work"
    }

},{
    timestamps:true
})

module.exports = mongoose.model("Comment",CommentSchema);

