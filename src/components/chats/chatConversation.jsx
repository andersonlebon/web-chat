import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatMessage from '../common/chatMessage';
import { setMessages } from '../../store/chat/chat';


const Conversation = () => {
    const messages = useSelector(state => state.chat);
    const dispatch = useDispatch();
    useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        dispatch({type: setMessages.type, payload: messages});
        console.log(messages);
    }, [dispatch]);
    return ( 
        <section className="conversation d-flex flex-column">
            
        </section>
     );
}
 
export default Conversation;