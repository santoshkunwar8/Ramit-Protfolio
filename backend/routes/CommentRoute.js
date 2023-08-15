const { createComment, getComments } = require("../controller/CommentController");
const router = require("express").Router()
router.post("/create",createComment)
router.get("/:workId",getComments)
module.exports =router;