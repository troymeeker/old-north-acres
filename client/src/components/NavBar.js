import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

function Navbar({currentUser, setCurrentUser}){

   

    return (
        <div> 
            <nav >
                <ul className='navbar'>
                    <p>Welcome {currentUser.username}</p>
                    <li><NavLink to='/' className="nav-item">HOME</NavLink></li>
                    <li><NavLink to='/about' className="nav-item">ABOUT</NavLink></li>
                    <li><NavLink to='/book' className="nav-item">BOOK YOUR TRIP</NavLink></li>
                    <li><NavLink to='/shop' className="nav-item">SHOP</NavLink></li>
                    <li><NavLink to='/contact' className="nav-item">CONTACT</NavLink></li>
                    {/* <button className="logout-button" onClick={handleLogout} >LOG OUT</button> */}
                    <Logout setCurrentUser={setCurrentUser}/>
                </ul>
                
            </nav>  
        </div>
    );
}

export default Navbar;