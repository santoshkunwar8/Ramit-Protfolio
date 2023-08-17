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
    profileImg:String,
    country:String,
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isMember:{
        type:String,
        required:false,
    }
},{timestamps:true})

module.exports = mongoose.model("User",UserSchema)