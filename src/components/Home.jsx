import React, { useState,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Conversation from './chats/chatRoom';
import { setUser, setUsers } from '../store/users/user';
import AllUsers from './chats/chatSideBar';






const Home = () => {
    const dispatch = useDispatch()
    const { chats } = useSelector(state => state.chat);
    const user = JSON.parse(sessionStorage.getItem('user')) || null;
   
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        dispatch(setUsers(users))
    }, [dispatch]);
    // const usersAll = users.filter(item => item.id !== user.id);

    return (
        <main className="homepage">
            <AllUsers/>
            <h1>Welcome to the Web chat</h1>
            <ul className="">
            { chats.map(chat => <li key={chat.id}><Link to={`/conversation/${user.id !== chat.user1 ? chat.user1 : chat.user2 }`} key={chat.id}>{user.id !== chat.user1 ? chat.username1 : chat.username2 }</Link></li>)}
            </ul>            
            
        </main>
    )
}
 
export default Home;