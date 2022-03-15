import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { setUsers } from './store/users/user';
import Navbar from './components/navbar';
import Home from './components/Home';
import './sass/app.css';
import { getMessages, setMessages } from './store/chat/chat';
import LogIn from './components/logIn';
import SignUp from './components/signUp';


function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        const users = JSON.parse(localStorage.getItem('users')) || [];
        dispatch(setUsers(users));
        dispatch(setMessages(messages));
  }, [dispatch]);


  return (
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>

  );
}

export default App;
