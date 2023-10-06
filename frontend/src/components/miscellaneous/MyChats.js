import React, { useState } from "react";
import { useChatState } from "../../context/chatProvider";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = useChatState();
  return <div>MyChats</div>;
};

export default MyChats;
