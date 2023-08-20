const { createUser, getClients, login } = require("../controller/UserController");


const router = require("express").Router()


router.post("/create",createUser)
router.get("/",getClients)
router.post("/login",login)





module.exports =router;