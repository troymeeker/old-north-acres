import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){

    return(
        <div>
              
        <nav className='nav-header'>
            <ul className='navbar'>
                <li><NavLink to='/' className="nav-item">HOME</NavLink></li>
                <li><NavLink to='/about' className="nav-item">ABOUT</NavLink></li>
                <li><NavLink to='/book' className="nav-item">BOOK YOUR TRIP</NavLink></li>
                <li><NavLink to='/shop' className="nav-item">SHOP</NavLink></li>
                <li><NavLink to='/contact' className="nav-item">CONTACT</NavLink></li>
            </ul>
        
        
        </nav>  
   
        </div>
    )
}

export default Navbar;