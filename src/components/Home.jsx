import React, { useState,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Conversation from './chats/chatConversation';
import { setUser, setUsers } from '../store/users/user';






const Home = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.users);

   
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) || null;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // const findUser = users.find(item => item.name === user.name);
        dispatch(setUsers(users))
        // console.log(findUser);
        // if (findUser) {
        //     dispatch({type: setUser.type, payload: {name: user.name}});
        // }
    }, [dispatch]);
    return (
        <main className="homepage">
            <h1>Welcome to the Web chat</h1>
            <ul className="">
            { users.map(user => <li key={user.id}><Link to={`/conversation/${user.id}`} key={user.id}>{user.name}</Link></li>)}
            </ul>            
            
        </main>
    )
}
 
export default Home;