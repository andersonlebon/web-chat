import React, { useState,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Conversation from './chats/chatRoom';
import { setUser, setUsers } from '../store/users/user';
import AllUsers from './chats/chatSideBar';
import { FaUserCircle } from 'react-icons/fa';






const Home = () => {
    const dispatch = useDispatch()
    const { chats } = useSelector(state => state.chat);
    const user = JSON.parse(sessionStorage.getItem('user')) || {};
   
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        dispatch(setUsers(users))
    }, [dispatch]);
    // const usersAll = users.filter(item => item.id !== user.id);

    return (
        <section className="homepage">
            <ul className="">
            { chats.map(chat => <li key={chat.id}><Link to={`/conversation/${user.id !== chat.user1 ? chat.user1 : chat.user2 }`} key={chat.id}></Link></li>)}
            </ul>            
             <section className="side-chat bg-light">
            <ul className="m-0 p-0">
            {chats.map(chat => (
                <li  key={chat.id} className="d-flex bg-white">
                    <Link className="d-flex align-items-center justify-content-between" to={`/conversation/${user.id !== chat.user1 ? chat.user1 : chat.user2 }`} >
                        <div className="name-icon d-flex align-items-center w-100 justify-content-between">
                            <div className="icon-img text-primary">
                                <FaUserCircle/>
                            </div>
                        <div className="name pl-3 text-secondary w-100"> 
                            <h2 className="name pl-3 text-secondary"> {user.id !== chat.user1 ? chat.username1 : chat.username2 }</h2>
                            <p className ="text-dark m-0 p-0">{chat.messages[chat.messages.length - 1].message}</p>
                        </div>
                        </div>

                        <div className="date-time">
                            <span className="date text-dark">Date</span>
                            <p className="date">{chat.createdAt.time || "2020-20-10"}</p>
                            <span className="date text-dark">Time</span>
                            <p className="time">{chat.createdAt.date || "10:10:10"}</p>
                        </div>
                    </Link>
                </li>))}
            </ul>

        </section>
        </section>
    )
}
 
export default Home;