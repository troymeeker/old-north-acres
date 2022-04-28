import React from "react";

import Login from "./Login"
import Signup from "./Signup";


function Unauth({setCurrentUser}){

 

    return (
        <div className="unauthpage">
           
         {/* Add functionality to toggle signup screen, Dont have an account?  Create Account here*/}
       
            
          <Login setCurrentUser={setCurrentUser}/>
          <Signup setCurrentUser={setCurrentUser}/>
   
      {/* <h2 className="unauth-text">Don't Have an account yet? </h2> */}
    
            
          
        </div>
    )
}

export default Unauth;