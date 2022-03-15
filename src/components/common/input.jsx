import React, { useState } from 'react';


const Input = ({type, onchange, value, name, clas }) => {
    return ( 
        <input type={type} className={clas} onChange={(e) => onchange(e)} value={value} name={name}/>
     );
}
 
export default Input ;