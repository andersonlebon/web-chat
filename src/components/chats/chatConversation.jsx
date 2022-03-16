import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatMessage from '../common/chatMessage';
import { setMessages } from '../../store/chat/chat';


const Conversation = () => {
    const { chat, users } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        dispatch({type: setMessages.type, payload: messages});
    }, [dispatch]);
    const { messages } = chat.chats.find(item => item.id === users.user.id) || []
    
    return ( 
        <section className="conversation d-flex flex-column">
            { messages? messages.map(message => <ChatMessage key={message.time} position={users.user.id === message.authorId ? 'right' : 'left'}/>) : ''}
        </section>
     );
}
 
export default Conversation;