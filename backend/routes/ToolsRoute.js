const { createTools, getTools } = require("../controller/ToolsController")
const authMiddleware = require("../middlewares/authMiddleware")

const router  =require("express").Router()

router.post("/create", authMiddleware,createTools)
router.get("/", authMiddleware,getTools)



module.exports = router