import React from "react";
import Guest from "./Guest"

function BookTrip(){
    return (
        <div className="book_trip">
            <h2>Schedule your trip!</h2>
            <p>Log in or Signup to book a trip!</p>
            <Guest />
        </div>
    )
}

export default BookTrip;