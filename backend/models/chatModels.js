//For a chat required fields are:
//ChatName, isGroupChat, latestMessage, users, groupAdmin(for Group Chats)
const mongoose = require("mongoose");
const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false }, //true if it's a groupchat false otherwise
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
