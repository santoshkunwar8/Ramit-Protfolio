const { default: mongoose } = require("mongoose")


const toolsSchema =  mongoose.Schema({

    name:String,
    image:String,
},{timestamps:true})



module.exports = mongoose.model("Tools",toolsSchema);

