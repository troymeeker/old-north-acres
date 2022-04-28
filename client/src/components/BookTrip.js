import React from "react";
import yurt from "../images/yurt.jpg"
import cabin from "../images/cabin.jpg"
import schoolBus from "../images/school-bus.jpg"


function BookTrip(){
    return (
        <div className="book_trip">
            <h2>Schedule your trip!</h2>
            {/* <p>Log in or Signup to book a trip!</p> */}
            <p>Form or calendar here to select trip and display trips for current user</p>
            <div className="image-grid">
                <img src={yurt} alt="yurt" className="yurt-photo"/>
                <img src={cabin} alt="cabin" className="yurt-photo"/>
                <img src={schoolBus} alt="yurt" className="yurt-photo"/>
            </div>
        </div>
    )
}

export default BookTrip;