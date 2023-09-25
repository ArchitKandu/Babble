const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { accessChat } = require('../controllers/chatControllers');
const { notFound, errorHandler } = require('../middleware/errorMiddleware');

const router = express.Router();
router.use(notFound);
router.use(errorHandler);

router.use('/').post(protect, accessChat);
// router.use('/').get(protect, fetchChats);
// router.use('/group').post(protect, createGroupChat);
// router.use('/rename').put(protect, renameGroup);
// router.use('/groupremove').put(protect, removeFromGroup);
// router.use('/groupadd').put(protect,addToGroup);

module.exports = router;