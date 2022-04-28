import React, {useState} from "react";
import Login from "./Login"
import Signup from "./Signup";


function Unauth({setCurrentUser}){

const [acctExists, setAcctExists] = useState(false)
 

    return (
        <div className="unauthpage">
           
       {!acctExists ? (<Signup setCurrentUser={setCurrentUser} setAcctExists={setAcctExists} acctExists={acctExists}/>
        ) : (
         <Login setCurrentUser={setCurrentUser} setAcctExists={setAcctExists} acctExists={acctExists} />
       )
      }
                
        </div>
    )
}

export default Unauth;