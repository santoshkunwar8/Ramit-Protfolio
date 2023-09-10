const { default: mongoose } = require("mongoose")


const UserSchema =  mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    about:String,
    work:String,
    profileImg:String,
    country:String,
    isAdmin:{
        type:Boolean,
        default:false,
    },    
    isClient:{
        type:Boolean,
        default:false,
    },
    cv:String,
    skills:Array,
    isVerified:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

module.exports = mongoose.model("User",UserSchema)