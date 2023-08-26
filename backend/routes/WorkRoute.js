const { createWok, getWork, addRating } = require("../controller/WorkController");


const router = require("express").Router()


router.post("/create",createWok)
router.get("/",getWork)
router.post("/rating",addRating);



module.exports =router;