const { createUser, getClients, login, becomeClient, getSessionuser, adminInfo, logout, updatedUser } = require("../controller/UserController");


const router = require("express").Router()

router.get("/sessionUser",getSessionuser)
router.post("/create",createUser)
router.get("/client",getClients)
router.get("/adminInfo",adminInfo)
router.post("/becomeclient/:userId",becomeClient)
router.post("/login",login)
router.post("/logout",logout)
router.put("/:userId",updatedUser)


// Route to check if user is logged in
router.get("/check-login", (req, res) => {
    if (req.session.user) {
      res.status(200).json({ message: "User is logged in", user: req.session.user, success: true });
    } else {
      res.status(401).json({ message: "User is not logged in", success: false });
    }
  });




module.exports =router;