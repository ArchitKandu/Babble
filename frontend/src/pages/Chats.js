import { Box } from "@chakra-ui/react";
import { useChatState } from "../context/chatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const Chats = () => {
    const { user } = useChatState();
    console.log("User:", user);
    return (
        <div style={{ width: "100%" }}>
            { user && <SideDrawer/> }
            <Box>
                {/* { user && <MyChats/> } */}
                {/* { user && <ChatBox/> } */}
            </Box>
        </div>
    );
}

export default Chats;