const express = require("express")
const morgan = require("morgan")
require("dotenv").config();
const app = express()
app.use(express.json())
app.use(morgan("common"))
require("./utils/db")();

require('./routes/AllRoutes')(app)



app.listen(8000,()=>console.log(`server started...`))
