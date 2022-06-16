import React, {useContext, useState} from 'react';
import { ThemeContext } from './App';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';

function Navbar({currentUser, setCurrentUser, toggleTheme}){
    const darkTheme = useContext(ThemeContext)
    
    const [isActive, setisActive] = useState(false);
    // const [{ theme, darkTheme }, toggleTheme] = useContext(ThemeContext);
    // const navlinks = document.getElementsByClassName('navbar-links')
  
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(115, 111, 101)' : 'rgb(135, 131, 121)', 
       
         color: darkTheme ? '#222' : '#111'

    }
  
 function toggleClass(){
     setisActive(() => !isActive)
    //  need to toggle class name of navbar links to active class

    //   console.log(isActive);
  
 }

    return (
       
            <nav style={themeStyles} className='navbar'>
                <a href="# " className='toggle' onClick={toggleClass}>

                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
                <p className='welcome'>Welcome {currentUser.username[0].toUpperCase() + currentUser.username.substring(1)}</p>
                    
                 <div className={isActive ? 'links-hidden': 'navbar-links'}
                
                 >

                    <ul>
                        {/* <li><a href='/' >HOME</a></li> */}
                        <li><a><NavLink to='/' >HOME</NavLink></a></li>
                        {/* <li><a href='/about' >ABOUT</a></li> */}
                        <li><a><NavLink to='/about' >ABOUT</NavLink></a></li>
                        <li><a> <NavLink to='/book' >LODGING</NavLink></a></li>
                        <li><a><NavLink to='/newreview' >NEW REVIEW</NavLink></a></li>
                        <li><a><NavLink to='/contact' >CONTACT </NavLink></a></li>
                        {/* <li><a href='/book' >LODGING</a></li> */}
                       
                        {/* <li><a href='/newreview' >NEW REVIEW</a></li> */}
                        
                        {/* <li><a href='/contact' >CONTACT</a></li> */}
                        
                   </ul> 
                 </div>  
                <div className='login-darkmode'>
                    <Logout setCurrentUser={setCurrentUser}/> 
                    <button onClick={toggleTheme} className='dark-button'> DARK MODE: {darkTheme ? 'ON' : 'OFF'} </button>
                </div>
                 
               
            </nav>  
       
    );
}

export default Navbar;