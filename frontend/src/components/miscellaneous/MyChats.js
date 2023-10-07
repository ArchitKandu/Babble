import React, { useEffect, useState } from "react";
import { useChatState } from "../../context/chatProvider";
import { Box, useToast } from "@chakra-ui/react";
import axios from "axios";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } =
    useChatState();
  const toast = useToast();
  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get("/api/chat", config);
      console.log(data);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured !",
        description: "Failed to Load Chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);
  return <Box
    display={{base: selectedChat?"none":"flex", md: "flex"}}
    flexDir="column"
    alignItems="center"
    p={3}
    bg='white'
    w={{base: "100%", md: "31%"}}
    borderRadius="lg"
    borderWidth="1px"
  >
    
  </Box>;
};

export default MyChats;
