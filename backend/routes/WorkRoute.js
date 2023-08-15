const { createWok, getWork } = require("../controller/WorkController");


const router = require("express").Router()


router.post("/create",createWok)
router.get("/",getWork)



module.exports =router;