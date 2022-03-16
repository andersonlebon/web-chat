import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { setUser, setUsers } from './store/users/user';
import Navbar from './components/navbar';
import Home from './components/Home';
import './sass/app.css';
import { getMessages, setMessages } from './store/chat/chat';
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import Conversation from './components/chats/chatRoom';
import AllUsers from './components/chats/chatSideBar';


function App() {
  const { user } = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user')) || {};
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        const users = JSON.parse(localStorage.getItem('users')) || [];
        dispatch(setUsers(users));
        dispatch(setMessages(messages));
        dispatch(setUser(user));
  }, [dispatch]);


  return (
    <>
        <Navbar currentUser={ user }/>
        <main className="d-flex flex-column justify-content-center">
        <Routes>

          <Route path="/login" element={<LogIn/>}/>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/newconversation" element={<AllUsers/>}/>
          <Route path="/conversation/:id" element={<Conversation/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        </main>
    </>

  );
}

export default App;
