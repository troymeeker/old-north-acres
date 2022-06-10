import React from "react";

function Logout({setCurrentUser}){

    function handleLogout(){
        fetch("/userlogout", {
            method: "DELETE" 
        })
       setCurrentUser(null)
    
    }
    return (
        <button onClick={handleLogout} className="logout-button">LOGOUT</button>
    )
}

export default Logout;