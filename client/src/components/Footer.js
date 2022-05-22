import React from 'react';

import { NavLink } from 'react-router-dom';

import mail from '../images/mail.png';
import instalogo from "../images/insta.png"

function Footer(){

    
  
    return ( 
        <footer className="footer">
           
            <div className="footer-img" >
                 <a href="https://www.instagram.com/oldnorthacres/" target="_blank" alt="instagram" rel="noreferrer"><img src={instalogo} alt="instagram logo" id="insta-img" /></a>
            </div>
        
            <div className="footer-img" id="mail-img">
               <NavLink to='/contact' ><img src={mail} alt="mail-logo" /></NavLink>
            </div>
           
          
               {/* <h5 className='copyright'>@ Copyright 2022</h5> */}
          
            
        </footer>
  )
}

export default Footer;