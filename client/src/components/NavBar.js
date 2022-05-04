import React, {useContext} from 'react';
import { ThemeContext } from './App';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

function Navbar({currentUser, setCurrentUser, toggleTheme}){
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(115, 111, 101)' : 'rgb(135, 131, 121)', 
       
         color: darkTheme ? '#222' : '#111'

    }
   

    return (
        <div style={themeStyles}> 
            <nav >
                <ul className='navbar' style={themeStyles} >
                    <p>Welcome {currentUser.username[0].toUpperCase() + currentUser.username.substring(1)}</p>
                    <button onClick={toggleTheme} className='dark-button'>DARK MODE: {darkTheme ? 'ON' : 'OFF'} </button>
                    <li><NavLink to='/' className="nav-item">HOME</NavLink></li>
                    <li><NavLink to='/about' className="nav-item">ABOUT</NavLink></li>
                    <li><NavLink to='/book' className="nav-item">BOOK YOUR TRIP</NavLink></li>
                    <li><NavLink to='/shop' className="nav-item">SHOP</NavLink></li>
                    <li><NavLink to='/contact' className="nav-item">CONTACT</NavLink></li>
                    
                    <Logout setCurrentUser={setCurrentUser}/>
                </ul>
                
            </nav>  
        </div>
    );
}

export default Navbar;