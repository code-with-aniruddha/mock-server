const router = require("express").Router(),
  userController = require("./controllers/user.controller.js");

router.post("/user/signup", userController.signup);
module.exports = router;
