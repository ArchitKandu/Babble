const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use('/').post(protect, accessChat);
// router.use('/').get(protect, fetchChats);
// router.use('/group').post(protect, createGroupChat);
// router.use('/rename').put(protect, createGroupChat);
// router.use('/groupremove').put(protect, removeFromGroup);
// router.use('/groupadd').put(protect,addToGroup);

module.exports = router;