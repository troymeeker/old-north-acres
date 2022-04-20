import React from 'react'

function Contact(){

    function handleOnSubmit(e){
        e.preventDefault();
        console.log('submit');

    }
    return(
       <div>
        <h3>Contact us for more information!</h3> 
        <form onSubmit={handleOnSubmit} className="form">
            <input 
            
                label='Email'
                name='user_email'
                placeholder='Email...'
                required
                
          />
           <input
                label='Name'
                name='user_name'
                placeholder='Name...'
                required
          />
           <input 
                label='Message'
                name='user_message'
                placeholder='Message...'
                required
          />
        {/* <Form.Field
        //   id=’form-input-control-email'
        //   control={Input}
        //  
        //   icon=’mail’
        //   iconPosition=’left’
        />
        <Form.Field
        //   id=’form-input-control-last-name’
        //   control={Input}
        //   label=’Name’
        //   name=’user_name’
        //   placeholder=’Name…’
        //   required
        //   icon=’user circle’
        //   iconPosition=’left’
        />
        <Form.Field
        //   id=’form-textarea-control-opinion’
        //   control={TextArea}
        //   label=’Message’
        //   name=’user_message’
        //   placeholder=’Message…’
        //   required
        /> */}
        <button type='submit' color='green'>Submit</button>
      </form>
 
      </div>
    )

}

export default Contact;