import React, { useState } from 'react';
import Input from './common/input';
import { useDispatch } from 'react-redux';
import { saveUser } from '../store/users/user';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [nameValue, setnameValue] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelChange = (e) => {
        setnameValue(e.target.value);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = users.find(item => item.name === nameValue);
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const user = {
                name: nameValue,
                id: uuid(),
                time: time,
                date: date, 
        }
        if (!newUser) {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            sessionStorage.setItem('user', JSON.stringify(user));
            dispatch({type: saveUser.type, payload: user});
            navigate(`/`)
        }

        dispatch({type: saveUser.type, payload: user});

        
    }
    return (
    <section className="logIn d-flex flex-column justify-content-center" onSubmit={handelSubmit}>
            <h1 className="text-center weight-bold">Sign Up</h1>
            <form className="flex-column d-flex p-3">
                <div className="group-control my-4">
                <label htmlFor="liginInput" className="title">Name</label>
                <Input type="text" id="liginInput" onchange={handelChange} value={nameValue} clas="form-control" name="username"/>
                </div>
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </form>
        </section>
    
    );
}
 
export default SignUp;