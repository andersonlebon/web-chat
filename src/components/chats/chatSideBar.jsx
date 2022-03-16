import React, { useEffect} from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'



const AllUsers = () => {
    const { users } = useSelector(state => state.users)
    const user = JSON.parse(sessionStorage.getItem('user')) || null;
    const usersAll = users.filter(item => item.id !== user.id) || {};

    
    return ( 
        <section className="side-chat bg-light">
            <ul className="m-0 p-0">
            {users.map(auser => (
                <li  key={auser.id} className="d-flex bg-white">
                    <Link className="d-flex align-items-center justify-content-between" to={`/conversation/${auser.id}`} key={auser.id}>
                        <div className="name-icon d-flex align-items-center justify-content-between">
                            <div className="icon-img">
                                <FaUserCircle/>
                            </div>
                        <h2 className="name pl-3 text-secondary"> {auser.name}</h2>
                        </div>

                        <div className="date-time">
                            <p className="date">{auser.time || "2020-20-10"}</p>
                            <p className="time">{auser.date || "10:10:10"}</p>
                        </div>
                    </Link>
                </li>))}
            </ul>

        </section>
     );
}
 
export default AllUsers;