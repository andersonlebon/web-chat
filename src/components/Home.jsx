import React, { useState,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Conversation from './chats/chatConversation';
import { setUser, setUsers } from '../store/users/user';






const Home = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.users);
    const user = JSON.parse(sessionStorage.getItem('user')) || null;
   
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        dispatch(setUsers(users))
    }, [dispatch]);
    const usersAll = users.filter(item => item.id !== user.id);

    return (
        <main className="homepage">
            <h1>Welcome to the Web chat</h1>
            <ul className="">
            { usersAll.map(user => <li key={user.id}><Link to={`/conversation/${user.id}`} key={user.id}>{user.name}</Link></li>)}
            </ul>            
            
        </main>
    )
}
 
export default Home;