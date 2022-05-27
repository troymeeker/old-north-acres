import React, {useContext} from 'react';
import { ThemeContext } from './App';
import blueridge from '../images/blue-ridge.jpeg';


import ContactForm from './ContactForm';

function Contact(){
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#333' : '#000',
       
    }
    // const formStyles = {
    //     backgroundColor: darkTheme  ? 'rgb(120,120,120)': 'rgb(120,150,120)', 
    //     color: darkTheme ? '#333': '#111'
    // }
    // const SERVICE_ID = 'service_meagxfb';
    // const TEMPLATE_ID = 'template_jm63u5s';
    // const USER_ID = '33t3tPMjxMD4rRJ5P';
   
    // function handleOnSubmit(e){
    //     e.preventDefault();
        
    //     emailjs.sendForm(
    //         SERVICE_ID, TEMPLATE_ID, e.target, USER_ID
    //     )
    //         .then((result) => {
    //             alert(result.text);
    //             //render success message not alert
    //         }, (error) => {
    //             alert(error.text);
    //             //render failure message not alert
    //         });
    //         //clears the form after sending the email
    //         e.target.reset();
    //     }

    

    return(
        
        <div className='contact' style={themeStyles}>

            <img src={blueridge} alt="blue-ridge" className="blue-ridge"/> 

            <ContactForm  />
      </div>
      )
    

}

export default Contact;