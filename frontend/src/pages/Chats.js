import { Box } from "@chakra-ui/react";
import { useChatState } from "../context/chatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const Chats = () => {
    const { user } = useChatState();
    return (
        <div style={{ width: "100%" }}>
            { user && <SideDrawer/> }
            {/* <SideDrawer/> */}
            <Box>
                {/* { user && <MyChats/> } */}
                {/* { user && <ChatBox/> } */}
            </Box>
        </div>
    );
}

export default Chats;