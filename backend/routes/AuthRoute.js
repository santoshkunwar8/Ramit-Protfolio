const {
  confirmResetPassword,
  sendRestLink,
  resetPassword,
  CheckIfTokenIsValid,
  confirmAccount,
  confirmCode,
  checkSession,
} = require("../controller/AuthController");
const router = require("express").Router();

router.post("/sendResetLink", sendRestLink);
router.post("/verifyResetCode", confirmResetPassword);
router.post("/resetPassword", resetPassword);
router.post("/tokenvalid/:token", CheckIfTokenIsValid);
router.post("/confirmCode", confirmCode);
router.get("/checkSession", checkSession);

module.exports = router;
