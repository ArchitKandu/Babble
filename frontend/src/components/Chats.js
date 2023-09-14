import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Chats = () => {
    const [chatData,setChatData]=useState([]);
    const fetchChats= async()=>{
        const { data } = await axios.get('/api/chat');
        setChatData(data);
    };
    useEffect(()=>{
        fetchChats();
    },[]);
    return (
        <div>
            {chatData.map((chat)=>(
                <div key={chat._id}>{chat.chatName}</div>
            ))}
        </div>
    )
}

export default Chats
