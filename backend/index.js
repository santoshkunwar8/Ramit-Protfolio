const express = require("express")
const morgan = require("morgan")
const app = express()
app.use(morgan("common"))




app.listen(8000,()=>console.log(`server started...`))
