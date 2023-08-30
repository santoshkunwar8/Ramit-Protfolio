const { createUser, getClients, login, becomeClient, getSessionuser, adminInfo, logout, updatedUser } = require("../controller/UserController");


const router = require("express").Router()

router.get("/sessionUser",getSessionuser)
router.post("/create",createUser)
router.get("/client",getClients)
router.get("/adminInfo",adminInfo)
router.post("/becomeclient/:userId",becomeClient)
router.post("/login",login)
router.post("/logout",logout)
router.put("/:userId",updatedUser)






module.exports =router;