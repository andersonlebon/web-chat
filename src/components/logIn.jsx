import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { setUser } from '../store/users/user';
import Input from './common/input';


const LogIn = () => {
    const [nameValue, setnameValue] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setnameValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
         const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(item => item.name === nameValue);

        if (user) {
            sessionStorage.setItem('user', JSON.stringify(user));
            dispatch({ type: setUser.type, payload: user });
            navigate(`/`)

        }
        else {
        dispatch({type: setUser.type, payload: {name: nameValue}});
        }

        setnameValue('');
    }

    return ( 
        <section className="logIn d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
            <h1 className="text-center weight-bold">Log In</h1>
            <form className="flex-column d-flex p-3">
                <div className="group-control my-5">
                <label htmlFor="liginInput" className="title">Name</label>
                <Input type="text" id="liginInput" onchange={handleChange} value={nameValue} clas="form-control" name="username"/>
                
                </div>
                <button className="btn btn-primary" type="submit">Sign In</button>
                <span className="text-center text-secondary">or</span>
                <Link to="/signup" className="btn btn-primary" type="submit">Sign Up</Link>

            </form>
        </section>
                
     );
}
 
export default LogIn;