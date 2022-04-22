import React, {useState} from "react";

import Login from "./Login"
import Signup from "./Signup";

function UnauthenticatedUserApp(){

  const [signedUp, setSignedUp] = useState(false)

  function handleSigninToggle(){
    setSignedUp(!signedUp)
  }

    return (
        <div className="unauthpage">
           
         {/* Add functionality to toggle signup screen, Dont have an account?  Create Account here*/}
       
            <Login />

            <h2>Don't Have an account yet? </h2> 
            { signedUp ? ( <button onClick={handleSigninToggle}> Great Choice!</button>) : ( <button onClick={handleSigninToggle}>Create Account</button>)}
         
            { signedUp ? (<Signup />): (null)}
        </div>
    )
}

export default UnauthenticatedUserApp;