const express = require('express');
const router = express.Router();
const userController = require('../controllers/auth');


// User registration route
router.post('/register', userController.register);

// User login route
router.post('/login', userController.login);

module.exports = router;