// TODO: User_Controllers declaration
const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
// IDENTIFICATION
const auth = require("../middleware/auth");

// TODO: User_Controllers instruction

// INSCRIPTION
router.post("/signup", userCtrl.signup);
// CONNECTION
router.post("/login", userCtrl.login);

// TODO: User_Controllers exportation
module.exports = router;
