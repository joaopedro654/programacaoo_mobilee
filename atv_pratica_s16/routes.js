// routes.js

const express = require('express');
const UserController = require('./userController');

const router = express.Router();

router.post('/login', UserController.login);

module.exports = router;
