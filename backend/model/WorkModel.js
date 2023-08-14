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
    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]

},{
    timestamps:true
})

module.exports = mongoose.model("Work",WorkSchema)
