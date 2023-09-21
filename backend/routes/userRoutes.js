const express = require('express');
const { registerUser, authUser, allUser } = require('../controllers/userControllers')

const router = express.Router();

router.route('/').post(registerUser).get(allUser);
router.route('/login').post(authUser);

module.exports = router;