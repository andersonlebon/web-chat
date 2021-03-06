import React, { useEffect, useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatMessage from '../common/chatMessage';
import { setMessages, saveMessage} from '../../store/chat/chat';
import Input from '../common/input';
import { v4 as uuid } from 'uuid';
import { useParams } from 'react-router';
import { MdSend } from 'react-icons/md';



const Conversation = () => {
    const [message, setMessage] = useState('');
    const { chat, users } = useSelector(state => state);
    const user = JSON.parse(sessionStorage.getItem('user')) || {};
    const { id } = useParams();
    const dispatch = useDispatch();
    const conversationScroll = useRef(true) 



    const schollDowmn = () => {
        conversationScroll.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        dispatch({type: setMessages.type, payload: messages});
    }, []);

    
    const{ messages }  = chat.chats.find(item => item.user1 === user.id && item.user2 === id) || chat.chats.find(item => item.user2 === user.id && item.user1 === id) || {};
    useEffect(() => {
        schollDowmn()
    }, [messages]);
     const handleChange = (e) => {
        setMessage(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const amessage = {
            id: uuid(),
            authorId: user.id,
            message,
            time: time,
            date: date, 
        };

        const messages = JSON.parse(localStorage.getItem('messages')) || [];
            const newMessage = messages.find(item => item.user1 === user.id && item.user2 === id) || messages.find(item => item.user2 === user.id && item.user1 === id)
            if (newMessage) {
                newMessage.messages.push(amessage);
    }
        else {
            messages.push({
                id: uuid(),
                user1: user.id,
                user2: id,
                username1: user.name,
                username2: users.users.find(item => item.id === id).name,
                messages: [amessage],
                sender :amessage.sender || "",
                receiver :amessage.receiver || null,
                createdAt : { time: amessage.time, 
                    date: amessage.date,
                }
            })
        }
        localStorage.setItem('messages', JSON.stringify(messages));
        dispatch({type: setMessages.type, payload : messages}) 
        setMessage('');
    }

    
    return ( 
        <section className="conversation d-flex flex-column bg-white ">
            { messages? messages.map(message => <ChatMessage key={message.id} message={message} position={user.id === message.authorId ? 'right' : 'left'}/>) : <p className="weight-italic text-secondary text-center">No conversaton</p>}
            <form className="d-flex bg-primary justify-content-between" onSubmit={handleSubmit}>
                <Input type="text" clas="form-control input-text" onchange={handleChange} value={message} name="message"/>
                <button type="submit" className="text-primary send-btn"><MdSend/></button> 
            </form>
            <div ref={conversationScroll}/>
            </section>
     );
}
 
export default Conversation;