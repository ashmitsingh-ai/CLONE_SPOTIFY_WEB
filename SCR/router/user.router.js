const express = require("express");
const usercontroller = require("../controllers/user.controller");

const router = express.Router();

router.post('/register',usercontroller.userregister)
router  .post('/login',usercontroller.userlogin)

module.exports = router;