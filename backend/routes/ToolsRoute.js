const { createTools, getTools } = require("../controller/ToolsController")

const router  =require("express").Router()

router.post("/create",createTools)
router.get("/",getTools)



module.exports = router