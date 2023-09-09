const {  confirmResetPassword, sendRestLink, resetPassword } = require("../controller/AuthController");
const router = require("express").Router()


router.post("/sendResetLink",sendRestLink)
router.post("/verifyResetCode",confirmResetPassword)
router.post("/resetPassword",resetPassword)

module.exports = router;