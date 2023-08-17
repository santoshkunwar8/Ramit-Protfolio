const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
require("dotenv").config();
app.use(cors({
    origin:"http://localhost:5173",
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}))
app.use(express.json())
app.use(morgan("common"))
require("./utils/db")();

require('./routes/AllRoutes')(app)



app.listen(8000,()=>console.log(`server started...`))
