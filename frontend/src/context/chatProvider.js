import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChatContext = createContext();
const ChatProvider = ({ children }) => {
    const [user, setUser] = useState();
    const history = useHistory();
    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            try {
                const userIn = JSON.parse(userInfo);

                if (userIn) {
                    setUser(userIn);
                } else {
                    history.push('/');
                }
            } catch (error) {
                console.error('Error parsing userInfo from localStorage:', error);
            }
        }
    }, [history]);
    return <ChatContext.Provider value={{ user, setUser }}>{children}</ChatContext.Provider>;
}
export const useChatState = () => {
    return useContext(ChatContext);
}

export default ChatProvider;