import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, saveUser } from './store/chat/chat';


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
    <main className="main-page">
      this
    </main>
  );
}

export default App;
