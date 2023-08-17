const { default: mongoose } = require("mongoose")


const WorkSchema =  mongoose.Schema({
    link:{
        type:String,
        
    },
    name:{
        type:String,
        unique:true,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    photos:[],
    mainImg:String,
    rating:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    tools:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tools"
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]

},{
    timestamps:true
})

module.exports = mongoose.model("Work",WorkSchema)
