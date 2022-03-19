import React, { useState } from 'react';


const Input = ({type, onchange, value, name, clas, id }) => {
    return ( 
        <input type={type} className={clas} id= {id} onChange={(e) => onchange(e)} value={value} name={name}/>

     );
}
 
export default Input ;