const { createReview, getReview } = require("../controller/ReviewController");

const router = require("express").Router()

router.post("/create",createReview)
router.get("/",getReview)


module.exports = router;