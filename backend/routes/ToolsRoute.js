const { createTools, getTools } = require("../controller/ToolsController")
const authMiddleware = require("../middlewares/authMiddleware")

const router  =require("express").Router()

router.post("/create", authMiddleware,createTools)
router.get("/",getTools)



module.exports = router
