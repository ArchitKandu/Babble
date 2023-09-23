const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use('/').post(protect);