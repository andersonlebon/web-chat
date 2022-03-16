import React, { useState,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Conversation from './chats/chatConversation';
import Input from './common/input';
import { saveMessage } from '../store/chat/chat'
import { setUser } from '../store/users/user';
import { v4 as uuid } from 'uuid';




const Home = () => {
    const [message, setMessage] = useState('');
    const { user } = useSelector(state => state.users);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        const amessage = {
            id: user.id,
            message,
            time: time,
            date: date, 
        };

        console.log(user.id);

        const messages = JSON.parse(localStorage.getItem('messages')) || [];
            const newMessage = messages.find(item => item.id === amessage.id);
            if (newMessage) {
                newMessage.messages.push({message: amessage.message, time: amessage.time, date: amessage.date, });
                console.log(newMessage);
    }
        else {
            messages.push({
                id : uuid(),
                messages: [{message: amessage.message, time: amessage.time, date: amessage.date, }],
                sender :amessage.sender || "",
                receiver :amessage.receiver || null,
                createdAt :amessage.time + " " + amessage.date,
            })
        }
        localStorage.setItem('messages', JSON.stringify(messages));
        dispatch({type: saveMessage.type, payload : amessage}) 
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) || null;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const findUser = users.find(item => item.name === user.name);
        if (findUser) {
            dispatch({type: setUser.type, payload: {name: user.name}});
        }
    }, [dispatch]);
    return (
        <main className="homepage">
            <h1>Welcome to the Web chat</h1>
            <Conversation/>
            <form className="form-control d-flex my-5" onSubmit={handleSubmit}>
                <Input type="text" clas="form-control" onchange={handleChange} value={message} name="message"/>
                <Input type="submit" value="Send" clas="btn btn-primary"/> 
            </form>
            
        </main>
    )
}
 
export default Home;