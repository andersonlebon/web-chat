import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/users/user';
import Input from './common/input';


const LogIn = () => {
    const [nameValue, setnameValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setnameValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: setUser.type, payload: {name: nameValue}});
    }

    return ( 
        <section className="logIn" onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <form className="form-control d-flex my-5">
                <Input type="text" onchange={handleChange} value={nameValue} clas="form-control" name="username"/>
                <Input type="submit" value="LogIn"/>
            </form>
        </section>
                
     );
}
 
export default LogIn;