const express = require('express');
const { registerUser, authUser, allUser } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');
const { notFound, errorHandler } = require('../middleware/errorMiddleware');

const router = express.Router();
router.use(notFound);
router.use(errorHandler);

router.route('/').post(registerUser).get(protect,allUser);
router.route('/login').post(authUser);

module.exports = router;