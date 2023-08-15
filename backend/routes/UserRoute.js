const { createUser, getClients } = require("../controller/UserController");


const router = require("express").Router()


router.post("/create",createUser)
router.get("/",getClients)



module.exports =router;