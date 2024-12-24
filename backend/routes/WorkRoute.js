const { createWok, getWork, addRating } = require("../controller/WorkController");
const authMiddleware = require("../middlewares/authMiddleware");


const router = require("express").Router()


router.post("/create", authMiddleware,createWok)
router.get("/",getWork)
router.post("/rating",addRating);



module.exports =router;