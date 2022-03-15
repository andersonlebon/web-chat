import React, { useState } from 'react';


const Input = ({type, onchange, value, name}) => {
    return ( 
        <input type={type} onChange={(e) => onchange()} value={value} name={name}/>
     );
}
 
export default Input ;