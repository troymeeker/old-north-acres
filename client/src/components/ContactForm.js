import React, {useContext} from 'react';
import { ThemeContext } from './App';
import emailjs from 'emailjs-com';

function ContactForm(){
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#333' : '#000',
       
    }
    const formStyles = {
        backgroundColor: darkTheme  ? 'rgb(120,120,120)': 'rgb(120,150,120)', 
        color: darkTheme ? '#333': '#111'
    }
    const SERVICE_ID = 'service_meagxfb';
    const TEMPLATE_ID = 'template_jm63u5s';
    const USER_ID = '33t3tPMjxMD4rRJ5P';
   
    function handleOnSubmit(e){
        e.preventDefault();
        
        emailjs.sendForm(
            SERVICE_ID, TEMPLATE_ID, e.target, USER_ID
        )
            .then((result) => {
                alert(result.text);
                //render success message not alert
            }, (error) => {
                alert(error.text);
                //render failure message not alert
            });
            //clears the form after sending the email
            e.target.reset();
        }

    return (
        <div style={themeStyles} className="contact-div">
            <form onSubmit={handleOnSubmit} style={formStyles} className="form">
        
             <h3>Contact us for more information!</h3> 
       
                <input
                    label=' Name'
                    type="text"
                    name='name'
                    placeholder='Name'
                    required
                    className='form-input'
                    tabIndex="1"
                
                />
                <br/>
            
                <input 
                    label='Email'
                    type="text"
                    name='user_email'
                    placeholder='Email Address'
                    required
                    className='form-input'
                    tabIndex="2"
                
                
                /><br/>
            <input
                    label="subject"
                    name='subject'
                    placeholder='Subject'
                    className='form-input'
                    tabIndex="3"
                
            />
            <br/>
            <textarea
                    label='Message'
                    placeholder='Message...'
                    className='form-message'
                    name='message'
                    required
                    tabIndex="4"
            />
            <br/>
        
            <button type='submit' className='submit-button'>Submit</button>
        
            </form>  

            {/* render success message */}
        </div>
    )

}

export default ContactForm;