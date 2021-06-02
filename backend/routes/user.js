//TODO: User_Controllers declaration
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//TODO: User_Controllers instruction
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
