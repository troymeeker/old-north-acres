import React from "react";
import Unauth from "./Unauth";


function BookTrip(){
    return (
        <div className="book_trip">
            <h2>Schedule your trip!</h2>
            <p>Log in or Signup to book a trip!</p>
            <Unauth />
        </div>
    )
}

export default BookTrip;