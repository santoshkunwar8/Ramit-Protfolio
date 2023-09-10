const {  confirmResetPassword, sendRestLink, resetPassword, CheckIfTokenIsValid } = require("../controller/AuthController");
const router = require("express").Router()


router.post("/sendResetLink",sendRestLink);
router.post("/verifyResetCode",confirmResetPassword);
router.post("/resetPassword",resetPassword);
router.post('/tokenvalid/:token',CheckIfTokenIsValid);




module.exports = router;