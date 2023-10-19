const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.post("/", protect, sendMessage);
// router.get("/:chatId", protect, allMessages);

module.exports = router;
