const {  confirmResetPassword, sendRestLink, resetPassword, CheckIfTokenIsValid, confirmAccount, confirmCode } = require("../controller/AuthController");
const router = require("express").Router()


router.post("/sendResetLink",sendRestLink);
router.post("/verifyResetCode",confirmResetPassword);
router.post("/resetPassword",resetPassword);
router.post('/tokenvalid/:token',CheckIfTokenIsValid);
router.post("/confirmCode",confirmCode)





module.exports = router;