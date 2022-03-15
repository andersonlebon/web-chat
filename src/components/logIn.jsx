import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/users/user';
import Input from './common/input';


const LogIn = () => {
    const [user, setUser] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUser(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser(user));
    }

    return ( 
        <section className="logIn">
            <h1>Log In</h1>
            <form className="form-control d-flex my-5">
                <Input type="text" onChange={handleChange} clas="form-control" name="username"/>
                <Input type="submit" value="LogIn"/>
            </form>
        </section>
                
     );
}
 
export default LogIn;