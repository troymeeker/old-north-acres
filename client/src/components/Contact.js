import React, {useContext} from 'react';
import { ThemeContext } from './App';
// import blueridge from '../images/blue-ridge.jpeg';
import poppy from '../images/poppy.png';

import ContactForm from './ContactForm';

function Contact(){
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#333' : '#000',
       
    }
  

    

    return(
        
      <div className='contact' style={themeStyles}>
            <img src={poppy} alt="poppy chilling in a field" className="poppy"/> 
             <ContactForm  />
             
              {/* <img src={blueridge} alt="blue-ridge" className="blue-ridge"/> 
             */}
           
      </div>
      )
    

}

export default Contact;