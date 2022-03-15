import React, { useState } from 'react';
import Input from './common/input';
import { useDispatch } from 'react-redux';
import { saveUser } from '../store/users/user';


const SignUp = () => {
    const [nameValue, setnameValue] = useState('');
    const dispatch = useDispatch()
    const handelChange = (e) => {
        setnameValue(e.target.value);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch({type: saveUser.type, payload: {name: nameValue}});
        
    }
    return ( <section className="signUp">
        <h1>Sign Up</h1>
        <form onSubmit={handelSubmit} className="form-control d-flex my-5">
            <Input type="text" onchange={handelChange} value={nameValue} clas="form-control" name="signup"/>
            <Input type="submit" value="SignUp"/>
        </form>
    </section> );
}
 
export default SignUp;