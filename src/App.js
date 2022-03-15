import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { setUser, saveUser } from './store/users/user';
import Navbar from './components/navbar';
import Home from './components/Home';
import './sass/app.css';


function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const user =  {
            id: 10,
            name: "lebon",
            avatar: null,
        };

    dispatch({type: setUser.type, payload: user});
    dispatch({type: saveUser.type, payload: user});
    

  }, [dispatch]);


  return (
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>

  );
}

export default App;
