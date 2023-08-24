const { createUser, getClients, login, becomeClient, getSessionuser } = require("../controller/UserController");


const router = require("express").Router()

router.get("/sessionUser",getSessionuser)
router.post("/create",createUser)
router.get("/client",getClients)
router.post("/becomeclient/:userId",becomeClient)
router.post("/login",login)





module.exports =router;