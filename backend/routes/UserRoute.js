const { createUser, getClients, login, becomeClient } = require("../controller/UserController");


const router = require("express").Router()


router.post("/create",createUser)
router.get("/client",getClients)
router.post("/becomeclient/:userId",becomeClient)
router.post("/login",login)





module.exports =router;